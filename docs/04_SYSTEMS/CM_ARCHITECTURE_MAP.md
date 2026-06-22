# CM Architecture Map

## Purpose

This document explains how the core CM operating platforms relate to one another and how they support governance, execution, automation, and AI-assisted orchestration.

The CM operating system is built around five connected layers:

1. **GitHub** — governance, SOPs, playbooks, and workflows.
2. **Google Drive** — operational files, client dossiers, templates, and contracts.
3. **ClickUp** — tasks, execution, and deadlines.
4. **Make** — automation layer.
5. **AI Agents** — decision support and orchestration.

## Architecture Overview

GitHub defines the operating rules. Google Drive stores the active working assets. ClickUp turns the rules and assets into executable work. Make connects the platforms through automation. AI Agents support decisions, coordination, and orchestration across the system.

## Visual Mapping Table

| Platform | Primary Role | What It Contains | How It Connects | System Function |
|---|---|---|---|---|
| **GitHub** | Governance layer | SOPs, playbooks, workflows, system documentation, operating standards | Provides the source of truth for how work should be done; informs ClickUp processes, Make automations, and AI Agent behavior | **Governance + SOPs + Playbooks + Workflows** |
| **Google Drive** | Operational file layer | Client dossiers, working documents, templates, contracts, deliverables, reference files | Stores the documents and files needed to execute work defined in GitHub and tracked in ClickUp | **Operational files + client dossiers + templates + contracts** |
| **ClickUp** | Execution layer | Tasks, owners, statuses, deadlines, checklists, project timelines | Converts workflows into assigned work; references GitHub standards and links to Drive assets | **Tasks + execution + deadlines** |
| **Make** | Automation layer | Scenarios, triggers, actions, routing logic, platform integrations | Moves information between GitHub, Drive, ClickUp, and other systems; reduces manual handoffs | **Automation layer** |
| **AI Agents** | Intelligence and orchestration layer | Decision support, analysis, recommendations, summaries, coordination prompts, operating guidance | Read from governance and operational context, support task planning, and help orchestrate execution across platforms | **Decision support and orchestration** |

## Relationship Model

```text
GitHub
  ↓ defines standards for
ClickUp
  ↓ executes work using
Google Drive
  ↑ stores operational assets used by
Make
  ↔ automates movement and updates across platforms
AI Agents
  ↔ support decisions, coordination, and orchestration across all layers
```

## Operating Principles

- **GitHub is the governance source of truth.** If a process, SOP, playbook, or workflow needs to be standardized, it belongs in GitHub.
- **Google Drive is the operational asset repository.** If a file is client-facing, contract-related, template-based, or part of daily delivery, it belongs in Drive.
- **ClickUp is the execution system.** If work needs an owner, status, deadline, or checklist, it belongs in ClickUp.
- **Make is the connective automation layer.** If information needs to move between tools without manual effort, it should be automated through Make where appropriate.
- **AI Agents are decision-support and orchestration partners.** Agents help interpret context, summarize information, recommend next actions, and coordinate workflows, but they do not replace the governance source of truth.

## Practical Example

A client onboarding process may work like this:

1. **GitHub** stores the onboarding SOP and checklist structure.
2. **Google Drive** stores the client dossier, contract, intake form, and working templates.
3. **ClickUp** tracks the onboarding tasks, owners, due dates, and completion status.
4. **Make** creates folders, routes notifications, updates task statuses, or syncs key information between tools.
5. **AI Agents** summarize the client context, identify missing information, suggest next steps, and help coordinate execution.

## Summary

The CM architecture separates responsibilities clearly:

- **GitHub governs the work.**
- **Google Drive stores the work assets.**
- **ClickUp manages the work execution.**
- **Make automates the work movement.**
- **AI Agents support the work decisions and orchestration.**
