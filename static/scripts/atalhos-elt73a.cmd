@echo off
rem ============================================================
rem  atalhos-ELT73A.cmd - atalhos da disciplina ELT73A
rem
rem  Uso:
rem    atalhos-ELT73A.cmd           cria os atalhos na Area de Trabalho
rem    atalhos-ELT73A.cmd remover   apaga os atalhos da Area de Trabalho
rem
rem  Todos os atalhos abrem na pasta %USERPROFILE%\ELT73A
rem ============================================================
setlocal
set "PASTA=%USERPROFILE%\ELT73A"

if /i "%~1"=="remover" goto remover

if not exist "%PASTA%" mkdir "%PASTA%"
echo Pasta da disciplina: %PASTA%
echo.

rem --- CMD -------------------------------------------------------
set "A_NOME=ELT73A - CMD"
set "A_ALVO=%ComSpec%"
set "A_ARGS=/k title ELT73A"
set "A_JANELA=1"
call :criar

rem --- PowerShell ------------------------------------------------
set "A_NOME=ELT73A - PowerShell"
set "A_ALVO=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
set "A_ARGS=-NoExit -NoLogo"
set "A_JANELA=1"
call :criar

rem --- Git Bash --------------------------------------------------
set "A_ALVO="
if exist "%ProgramFiles%\Git\git-bash.exe" set "A_ALVO=%ProgramFiles%\Git\git-bash.exe"
if not defined A_ALVO if exist "%LOCALAPPDATA%\Programs\Git\git-bash.exe" set "A_ALVO=%LOCALAPPDATA%\Programs\Git\git-bash.exe"
if not defined A_ALVO goto sem_gitbash
set "A_NOME=ELT73A - Git Bash"
set A_ARGS="--cd=%PASTA%"
set "A_JANELA=1"
call :criar
goto vscode
:sem_gitbash
echo [aviso] Git Bash nao encontrado. Atalho nao criado.

rem --- VS Code ---------------------------------------------------
:vscode
where code >nul 2>nul
if errorlevel 1 goto sem_vscode
set "A_NOME=ELT73A - VS Code"
set "A_ALVO=%ComSpec%"
set A_ARGS=/c code "%PASTA%"
set "A_JANELA=7"
call :criar
goto pronto
:sem_vscode
echo [aviso] Comando code nao encontrado no PATH. Atalho nao criado.

:pronto
echo.
echo Pronto. Os atalhos estao na Area de Trabalho.
goto fim

rem --- Remover ---------------------------------------------------
:remover
powershell -NoProfile -Command "$d=[Environment]::GetFolderPath('Desktop'); Get-ChildItem -LiteralPath $d -Filter 'ELT73A - *.lnk' | ForEach-Object { Remove-Item -LiteralPath $_.FullName; Write-Host ('[removido] ' + $_.Name) }"
goto fim

:fim
endlocal
exit /b 0

rem --- Sub-rotina: cria um atalho a partir das variaveis A_* ------
:criar
powershell -NoProfile -Command "$d=[Environment]::GetFolderPath('Desktop'); $s=(New-Object -ComObject WScript.Shell).CreateShortcut((Join-Path $d ($env:A_NOME + '.lnk'))); $s.TargetPath=$env:A_ALVO; $s.Arguments=$env:A_ARGS; $s.WorkingDirectory=$env:PASTA; $s.WindowStyle=[int]$env:A_JANELA; $s.Description='Disciplina ELT73A'; $s.Save(); Write-Host ('[ok] ' + $env:A_NOME)"
exit /b 0
