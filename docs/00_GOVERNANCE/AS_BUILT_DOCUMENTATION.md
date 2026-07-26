# AS-BUILT DOCUMENTATIE

## Doel

Dit document legt vast hoe het CM Operating System vandaag daadwerkelijk is ingericht.

## Systeemgrenzen

| Systeem | Rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks, Agents, Automations, Knowledge Base en systeemdocumentatie |
| Google Drive | Live dossiers, getekende documenten, deliverables en werkbestanden |
| ClickUp | Uitvoering, Pipeline, taken, owners en deadlines |
| Gmail | Communicatie en communicatietemplates |
| Moneybird | Financiële waarheid |
| Make | Automatiseringslaag |

## Actuele GitHub-structuur

```text
docs/
├── 00_GOVERNANCE
│   ├── ADR
│   ├── HISTORY
│   │   ├── BASELINES
│   │   ├── AUDITS
│   │   ├── RECOVERY_REPORTS
│   │   ├── SPRINT_REPORTS
│   │   └── SUPERSEDED
│   ├── MAP_SPECIFICATIONS
│   └── STANDARDS
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
│   ├── WORKFLOWS
│   ├── SOPS
│   ├── PLAYBOOKS
│   ├── AUTOMATIONS
│   ├── AGENTS
│   └── KNOWLEDGE_BASE
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
└── 09_CONTENT
```

`05_OPERATIONS` is de centrale locatie voor organisatiebrede operationele systeemdocumentatie. Agents staan niet onder SOPs. Agents gebruiken Workflows, voeren taken uit volgens SOPs, gebruiken Playbooks voor scenario's, Knowledge Base voor referentie en Automations voor ondersteuning.

## Actuele Google Drive-root

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

De detailstructuren binnen artist-, client- en dealdossiers worden afzonderlijk beoordeeld. Tijdens de Repository Recovery worden geen templatebesluiten genomen en worden geen templatebestanden verplaatst, hernoemd of verwijderd.

## Recoverystatus

Status: `REPOSITORY RECOVERY — FASE 1 GOVERNANCE CONSOLIDATION TER REVIEW`

Build freeze:

- governanceherstel toegestaan;
- repositorystructuurherstel toegestaan;
- documentatieconsolidatie toegestaan binnen Governance en repository-root;
- geen nieuwe templates;
- geen nieuwe Agents;
- geen nieuwe Automations;
- geen inhoudelijke uitbreiding buiten de recovery-scope;
- geen migratie van Knowledge Base, Playbooks, Agents, Automations, Shared Services of business lanes zonder volgende expliciete goedkeuring.

Tijdens recovery is `CM_REPOSITORY_RECOVERY_PLAN.md` leidend. De V1.0-baseline-ADR heeft tijdelijk status `SUPERSEDED_FOR_RECOVERY`. Map Specifications staan canoniek onder `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/`; historische governance staat onder `docs/00_GOVERNANCE/HISTORY/`.

## Reviewritme

Review na iedere structuurwijziging en minimaal elk kwartaal.
