
export const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'X', 'P', 'N'] as const;
export const ORG = 'ELT73A-S22-2026-2';
export const labgradehref = '/mic-docs/labs/como-funciona-avaliacao';
export const courseid = '29540'; // Moodle course ID
export const HOMEFOLDER = 'ELT73AS22'; //  
export const COURSE = 'ELT73A'; // Course Name

/* ------------------------------------------------------------------ */
/* Opções do gen_iot_aluno.py                                           */
/* ------------------------------------------------------------------ */

export type GenIotOpcoes = {
    semGitea?: boolean;
    semRunner?: boolean;
    giteaDb?: "sqlite" | "postgres";
    giteaRepo?: string;
    semMicrobin?: boolean;
    semFuxa?: boolean;
    semNtfy?: boolean;
    semMqttExplorer?: boolean;
    semSenha?: boolean;
    protegerHttp?: boolean;
    mqttSemAnonimo?: boolean;
    portaHttp?: number;
    ponteMqtt?: string;
    captura?: boolean;
    capturaFiltro?: string;
    extras?: string[];
};

export const PRESETS_IOT: Record<string, GenIotOpcoes> = {
    lab00: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab01: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab02: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab03: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab04: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab05: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab06: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab07: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab08: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab09: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    lab10: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true, captura: true },
    projeto: {},
};

/* ------------------------------------------------------------------ */
/* Opções do gen_iot_scada_portal.py (servidor do laboratório)          */
/* ------------------------------------------------------------------ */

export type ScadaOpcoes = {
    semTunel?: boolean;
    publicoUrl?: string;
    vpsHost?: string;
    vpsAdmin?: string;
    semGitea?: boolean;
    semRunner?: boolean;
    giteaDb?: "postgres" | "sqlite";
    giteaRepo?: string;
    runnerCapacidade?: number;
    runnerDns?: string;
    semMicrobin?: boolean;
    semFuxa?: boolean;
    semNtfy?: boolean;
    protegerHttp?: boolean;
    mqttSemAnonimo?: boolean;
    mqttExplorerAuth?: boolean;
    extras?: string[];
};

export const PRESETS_SCADA: Record<string, ScadaOpcoes> = {
    lab00: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab01: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab02: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab03: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab04: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab05: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab06: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab07: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab08: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab09: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    lab10: { semGitea: true, semMicrobin: true, semFuxa: true, semNtfy: true },
    projeto: {},
};
