import React from 'react';
// Importa os componentes padrões do Docusaurus
import MDXComponents from '@theme-original/MDXComponents';
// Importa o seu componente customizado
import LabTable from "@site/src/components/shared/LabTable";
import QuizTable from '@site/src/components/shared/QuizTable';
import LabTeamMembers from "@site/src/components/shared/LabTeamMembers";
import LabFromTemplate from "@site/src/components/LabFromTemplate";
import LabSubmit from "@site/src/components/shared/LabSubmit";
import CommitPoint from "@site/src/components/shared/CommitPoint";
import FileTree from "@site/src/components/shared/FileTree";
import SimpleFileTree from "@site/src/components/shared/SimpleFileTree";
import GroupCommands from "@site/src/components/shared/GroupCommands";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {
    LabSetup,
    GitLogOut,
    LabLogout,
    DevTools,
} from "@site/src/components/shared/InstructionsSite";

import LabIotAluno from "@site/src/components/shared/LabIotAluno";

export default {
    // Mantém os componentes padrão do MDX
    ...MDXComponents,
    // Registra o componente globalmente
    LabTable,
    QuizTable,
    LabTeamMembers,
    LabFromTemplate,
    LabSubmit,
    CommitPoint,
    FileTree,
    SimpleFileTree,
    GroupCommands,
    Tabs,
    TabItem,
    LabSetup,
    GitLogOut,
    LabLogout,
    DevTools,
    LabIotAluno,
};
