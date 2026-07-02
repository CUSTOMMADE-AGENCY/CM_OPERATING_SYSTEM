# AS-BUILT DOCUMENTATIE

## Doel

As-built documentatie legt vast hoe het systeem vandaag daadwerkelijk is ingericht. Dit document beschrijft de actuele productie-baseline voor de CM Google Drive inrichting en de repositorycontext die deze baseline bestuurt.

## Source of truth

- Drive governance: `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`.
- Drive mapping en owners: `docs/04_SYSTEMS/DRIVE_MAPPING.md`.
- Drive readiness audit: `docs/04_SYSTEMS/CM_DRIVE_READINESS_AUDIT.md`.
- Artist folder detailstandaard: `docs/02_ARTIST_MANAGEMENT/ARTIST_FOLDER_STANDARD.md`.
- Client folder detailstandaard: `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md`.

## GitHub repositorystructuur

De actuele GitHub source-of-truth gebruikt uppercase domeinmappen onder `docs/`:

```text
docs/
├── 00_GOVERNANCE
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_SHARED_SERVICES
├── 04_SYSTEMS
├── 05_KNOWLEDGE_BASE
├── 06_PLAYBOOKS
└── 07_AI_AGENTS
```

GitHub en Drive zijn bewust niet identiek ingericht: GitHub documenteert governance en operating standards; Drive bewaart operationele dossiers en bestanden.

## Google Drive productie-as-built

De actuele Drive-root is `OS_CUSTOMMADE`. De volledige productieboom is:

```text
OS_CUSTOMMADE
├── 00_ADMIN
│   ├── 01_INBOX_REVIEW
│   ├── 02_GOVERNANCE_REFERENCE
│   ├── 03_TEMPLATES
│   ├── 04_REPORTS
│   └── 05_APPROVALS
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
│   └── [ARTIST_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_STRATEGY
│       ├── 04_RELEASES
│       ├── 05_BOOKING
│       ├── 06_FINANCE
│       ├── 07_SOCIALMEDIA
│       ├── 08_PRESS_EPK
│       └── 09_ARCHIVE
├── 03_CLIENTS
│   └── [CLIENT_OR_PARTNER_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_BRIEF_SCOPE
│       ├── 04_DELIVERABLES
│       ├── 05_COMMUNICATION
│       ├── 06_FINANCE
│       └── 09_ARCHIVE
├── 04_DEALS
│   └── [DEAL_OR_ASSET_NAME]
│       ├── 00_START_HIER
│       ├── 01_RECHTEN_REGISTER
│       ├── 02_CONTRACTEN_BEWIJS
│       ├── 03_WAARDERING_VERKOOPPAKKET
│       ├── 04_OUTREACH_CLICKUP
│       └── 99_ARCHIEF
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
│   ├── APPROVALS
│   │   └── CM_APPROVAL_REGISTER
│   ├── CONTRACTS
│   ├── LEGAL_REVIEW
│   └── EVIDENCE
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
    ├── ARTIST_MANAGEMENT
    ├── CLIENTS
    ├── DEALS
    ├── REVIEW_HOLD_OLD_STRUCTURE
    ├── LEGACY_ROOTS
    └── MIGRATION_LOGS
```

## Domeinbeschrijving

| Drive-map | Doel | Primaire eigenaar |
|---|---|---|
| `00_ADMIN` | CM-brede inbox review, governance reference, templates, reports en approvals. | CM CONTROL AGENT |
| `01_MASTER_BOUTIQUE` | Master Boutique context en verwijzingen; concrete dealcases staan onder `04_DEALS`. | CM LEGAL AGENT |
| `02_ARTIST_MANAGEMENT` | Actieve artistdossiers met vaste artist-first structuur. | CM OPS AGENT |
| `03_CLIENTS` | Clients, partners, merken, bedrijven, sponsors, opdrachtgevers en media partners. | CM OPS AGENT |
| `04_DEALS` | Deal- en assetcases met lean Nederlandse dealstructuur. | CM LEGAL AGENT |
| `05_OPERATIONS` | Operationele CM-documenten en interne procescontext. | CM CONTROL AGENT |
| `06_FINANCE` | Financiële referenties; Moneybird blijft financiële waarheid. | CM MONEY AGENT |
| `07_LEGAL` | Approvals, contracts, legal review en evidence. | CM LEGAL AGENT |
| `08_MARKETING` | CM-brede marketingmaterialen en campagnecontext. | CM SOCIAL AGENT |
| `09_CONTENT` | CM-brede contentassets en contentreferenties. | CM SOCIAL AGENT |
| `99_ARCHIVE` | Afgerond, legacy, review-hold, migrated en superseded materiaal. | CM VAULT AGENT |

## Verplichte dossierstructuren

### Artist

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` bevat exact `01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `06_FINANCE`, `07_SOCIALMEDIA`, `08_PRESS_EPK` en `09_ARCHIVE`.

### Client of partner

`OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]` bevat exact `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE` en `09_ARCHIVE`.

### Deal of asset

`OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` bevat exact `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP` en `99_ARCHIEF`.

## As-built correcties

- Artistdossiers staan onder `02_ARTIST_MANAGEMENT`, niet onder `03_CLIENTS`.
- Client- en partnerdossiers gebruiken `03_CLIENTS/[CLIENT_OR_PARTNER_NAME]` met de zeven vaste submappen uit deze as-built.
- De goedgekeurde legal structuur is `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW` en `EVIDENCE`.
- De goedgekeurde archive structuur is `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS` en `MIGRATION_LOGS`.
- Oude roots en oude foldernamen zijn geen actieve productie-baseline.

## AI agent as-built

- CM FLOW AGENT staat per 2026-07-02 op v2.0 als CTO & AI Systems Engineer van CM_OS.
- Canonieke agentdefinitie: `docs/07_AI_AGENTS/AGENTS/CM_FLOW_AGENT.md`.
- Canoniek playbook: `docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md`.
- FLOW is eigenaar van bouwen en systeemontwerp: GitHub-development, agent-development, automation-development, Apps Script, Make, API/MCP-integraties, connectors, logging, retry-mechanismen, monitoring en systeemgezondheid.
- FLOW activeert geen nieuwe agents, governancewijzigingen of productie-automations zonder expliciete approval-gate via CM CONTROL/Sophia.
- FLOW-output moet bestaan uit ontwerp, architectuur, implementatie, documentatie, testplan, deploymentplan, impactanalyse en changelog.

## Reviewritme

Review deze as-built elk kwartaal en na iedere grote rebuild, migratie of governancewijziging.
