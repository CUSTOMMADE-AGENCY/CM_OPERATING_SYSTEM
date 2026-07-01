# DRIVE MAPPING

## Doel

Dit document legt vast hoe de live `OS_CUSTOMMADE` Drive-structuur gekoppeld is aan CM_OS agents, documenttypes, workflows en archivering.

Drive bewaart documenten, assets, templates, dossiers en bewijsstukken. Drive is geen taakmanagementsysteem en geen financiële waarheid.

## Hoofdregel

- Drive = opslag
- GitHub = governance/source of truth
- ClickUp = uitvoering
- Moneybird = financiële waarheid
- Gmail = correspondentie/bewijs
- Make = automatisering

## Complete Drive-structuur

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

## Map → Agent eigenaarschap

Elke Drive-map heeft exact één Owner Agent. Support Agents leveren input, review of uitvoering maar zijn geen mede-eigenaar.

| Drive-map | Owner Agent | Support Agents |
|---|---|---|
| `00_ADMIN` | CM CONTROL AGENT | CM VAULT AGENT, CM FLOW AGENT |
| `01_MASTER_BOUTIQUE` | CM LEGAL AGENT | CM OPS AGENT, CM PROSPECT AGENT |
| `02_ARTIST_MANAGEMENT` | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT |
| `03_CLIENTS` | CM OPS AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM SOCIAL AGENT, CM VAULT AGENT |
| `04_DEALS` | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM VAULT AGENT |
| `05_OPERATIONS` | CM CONTROL AGENT | CM FLOW AGENT, CM OPS AGENT, CM VAULT AGENT |
| `06_FINANCE` | CM MONEY AGENT | CM CONTROL AGENT |
| `07_LEGAL` | CM LEGAL AGENT | CM CONTROL AGENT |
| `08_MARKETING` | CM SOCIAL AGENT | CM OPS AGENT |
| `09_CONTENT` | CM SOCIAL AGENT | CM VAULT AGENT |
| `99_ARCHIVE` | CM VAULT AGENT | CM CONTROL AGENT |

## Submap mapping

### 00_ADMIN

| Submap | Gebruik |
|---|---|
| `01_INBOX_REVIEW` | Tijdelijke intake en triage voor CM-brede documenten. |
| `02_GOVERNANCE_REFERENCE` | Operationele kopieën of verwijzingen naar goedgekeurde governance. |
| `03_TEMPLATES` | Werkbare Drive-kopieën van goedgekeurde templates. |
| `04_REPORTS` | CM-brede operationele rapportages en exports. |
| `05_APPROVALS` | Admin-gerelateerde approval evidence; legal approvals blijven in `07_LEGAL`. |

### 02_ARTIST_MANAGEMENT

Artistdossiers staan direct onder `[ARTIST_NAME]` en gebruiken `01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `06_FINANCE`, `07_SOCIALMEDIA`, `08_PRESS_EPK` en `09_ARCHIVE`.

### 03_CLIENTS

Client- of partnerdossiers staan direct onder `[CLIENT_OR_PARTNER_NAME]` en gebruiken `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE` en `09_ARCHIVE`.

### 04_DEALS

Deal- of assetcases staan direct onder `[DEAL_OR_ASSET_NAME]` en gebruiken `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP` en `99_ARCHIEF`.

### 07_LEGAL

`07_LEGAL` gebruikt `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW` en `EVIDENCE`.

### 99_ARCHIVE

`99_ARCHIVE` gebruikt `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS` en `MIGRATION_LOGS`.

## Documenttype → opslaglocatie

| Documenttype | Opslaglocatie | Eigenaar-agent | Approval nodig |
|---|---|---|---|
| Artist admin | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/01_ADMIN` | CM OPS AGENT | Nee, tenzij extern gedeeld |
| Artist contract | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/02_CONTRACT` | CM LEGAL AGENT | Ja bij ondertekening of verplichting |
| Artist strategy | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/03_STRATEGY` | CM OPS AGENT | Ja bij externe planning |
| Artist releases | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/04_RELEASES` | CM OPS AGENT | Ja bij publicatie of externe planning |
| Artist booking | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/05_BOOKING` | CM OPS AGENT | Ja bij commitment |
| Artist finance | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/06_FINANCE` | CM MONEY AGENT | Ja bij financiële toezegging |
| Artist social | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/07_SOCIALMEDIA` | CM SOCIAL AGENT | Ja bij publicatie |
| Artist press/EPK | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/08_PRESS_EPK` | CM SOCIAL AGENT | Ja bij externe verzending |
| Client admin | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/01_ADMIN` | CM OPS AGENT | Nee, tenzij extern gedeeld |
| Client contract | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/02_CONTRACT` | CM LEGAL AGENT | Ja |
| Client brief/scope | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/03_BRIEF_SCOPE` | CM OPS AGENT | Ja bij scope commitment |
| Client deliverable | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/04_DELIVERABLES` | CM OPS AGENT | Ja bij externe verzending |
| Client communication | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/05_COMMUNICATION` | CM OPS AGENT | Ja indien formeel bewijs |
| Client finance | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/06_FINANCE` | CM MONEY AGENT | Ja bij financiële toezegging |
| Deal document | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | CM LEGAL AGENT | Ja bij externe distributie of dealbesluit |
| Approval register | `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` | CM LEGAL AGENT | N.v.t.; dit is het register |
| Archive document | `OS_CUSTOMMADE/99_ARCHIVE` | CM VAULT AGENT | Ja bij verwijdering; archiveren volgens retention-regels |

## Conflictregels

- GitHub wint bij governance.
- Moneybird wint bij financiële waarheid.
- Gmail wint bij correspondentie/bewijs.
- ClickUp wint bij taakstatus.
- Drive wint bij opslaglocatie.
- Bij conflict escaleert CM CONTROL AGENT.
