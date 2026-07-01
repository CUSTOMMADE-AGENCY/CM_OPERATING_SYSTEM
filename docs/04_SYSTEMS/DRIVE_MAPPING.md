# DRIVE MAPPING

## Doel

Dit document legt vast hoe de live `OS_CUSTOMMADE` Drive-structuur gekoppeld is aan CM_OS agents, documenttypes, workflows en archivering.

Drive bewaart documenten, assets, templates, dossiers en bewijsstukken. Drive is geen taakmanagementsysteem en geen financiële waarheid.

## 1. HOOFDREGEL

Binnen CM_OS geldt:

- Drive = opslag
- GitHub = governance/source of truth
- ClickUp = uitvoering
- Moneybird = financiële waarheid
- Gmail = correspondentie/bewijs
- Make = automatisering

## 2. DRIVE ROOT

Gebruik exact deze root:

```text
OS_CUSTOMMADE
```

## 3. LIVE HOOFDSTRUCTUUR

Gebruik exact deze hoofdstructuur onder `OS_CUSTOMMADE`:

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

## 4. MAP → AGENT EIGENAARSCHAP

Strikt eigenaarschapsmodel:

- Elke Drive-map heeft exact één Owner Agent.
- Support Agents leveren input, review of uitvoering binnen hun eigen expertise, maar zijn geen mede-eigenaar.
- Bij conflict, onduidelijke routing of ontbrekende owner beslist CM CONTROL AGENT over escalatie; de tabel hieronder blijft leidend voor Drive-eigenaarschap.
- `05_OPERATIONS` mag CM CONTROL AGENT als governance-mapowner hebben; documenttype `Operationeel document` blijft eigendom van CM OPS AGENT.

| Drive-map | Owner Agent | Support Agents |
|------------|-------------|----------------|
| 00_ADMIN | CM CONTROL AGENT | CM VAULT AGENT, CM FLOW AGENT |
| 01_MASTER_BOUTIQUE | CM LEGAL AGENT | CM OPS AGENT |
| 02_ARTIST_MANAGEMENT | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT |
| 03_CLIENTS | CM OPS AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM SOCIAL AGENT, CM VAULT AGENT |
| 04_DEALS | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM VAULT AGENT |
| 05_OPERATIONS | CM CONTROL AGENT | CM FLOW AGENT, CM OPS AGENT, CM VAULT AGENT |
| 06_FINANCE | CM MONEY AGENT | CM CONTROL AGENT |
| 07_LEGAL | CM LEGAL AGENT | CM CONTROL AGENT |
| 08_MARKETING | CM SOCIAL AGENT | CM OPS AGENT |
| 09_CONTENT | CM SOCIAL AGENT | CM VAULT AGENT |
| 99_ARCHIVE | CM VAULT AGENT | CM CONTROL AGENT |

## 5. SUBMAP STRUCTURE

### 00_ADMIN

Interne administratie, templates en governance-referentie voor CM als bedrijf.

```text
00_ADMIN
├── 03_TEMPLATES
├── GOVERNANCE_REFERENCE
├── HR
└── CURSUS_MASTERCLASSES
```

### 01_MASTER_BOUTIQUE

Gebruik de lean dealstructuur per Master Boutique case:

```text
01_MASTER_BOUTIQUE
└── [CASE_NAAM]
    ├── 00_START_HIER
    ├── 01_RECHTEN_REGISTER
    ├── 02_CONTRACTEN_BEWIJS
    ├── 03_WAARDERING_VERKOOPPAKKET
    ├── 04_OUTREACH_CLICKUP
    └── 99_ARCHIEF
```

### 02_ARTIST_MANAGEMENT

Gebruik onderstaande subfolders per artist dossier:

```text
02_ARTIST_MANAGEMENT
└── [ARTIST]
    ├── 01_ADMIN
    ├── 02_CONTRACT
    ├── 03_STRATEGY
    ├── 04_RELEASES
    ├── 05_BOOKING
    ├── 06_FINANCE
    ├── 07_SOCIALMEDIA
    ├── 08_PRESS_EPK
    └── 09_ARCHIVE
```

### 03_CLIENTS

Gebruik per clientdossier een passende genummerde productiestructuur afhankelijk van het type relatie.

```text
03_CLIENTS
└── [CLIENT_NAAM]
    ├── 00_START_HIER
    └── 99_ARCHIEF
```

### 04_DEALS

Gebruik de lean dealstructuur per dealcase:

```text
04_DEALS
└── [DEAL_NAAM]
    ├── 00_START_HIER
    ├── 01_RECHTEN_REGISTER
    ├── 02_CONTRACTEN_BEWIJS
    ├── 03_WAARDERING_VERKOOPPAKKET
    ├── 04_OUTREACH_CLICKUP
    └── 99_ARCHIEF
```

Data Room-, LOI-, APA-, Closing- en Success Fee-mappen worden pas aangemaakt wanneer een deal de due diligence fase bereikt.

### 05_OPERATIONS

```text
05_OPERATIONS
├── 00_START_HIER
├── HR
├── TRAINING
├── TOOLS
├── PROCESSES
├── TEMPLATES_REFERENCE
└── 99_ARCHIEF
```

### 06_FINANCE

```text
06_FINANCE
├── 00_START_HIER
├── MONEYBIRD_REFERENCE
├── BELASTINGDIENST
├── BANK
├── STATEMENTS
├── ADMIN_EXPORTS
└── 99_ARCHIEF
```

### 07_LEGAL

```text
07_LEGAL
├── 00_START_HIER
├── CONTRACTEN
├── NDA
├── PARTNERS
├── FREELANCERS
├── ARTIESTEN
├── KLANTEN
├── LEVERANCIERS
├── RIGHTS
├── APPROVALS
└── 99_ARCHIEF
```

### 08_MARKETING

```text
08_MARKETING
├── 00_START_HIER
├── BRAND
├── NETWORK
├── CAMPAIGNS
├── PARTNERSHIPS
└── 99_ARCHIEF
```

### 09_CONTENT

```text
09_CONTENT
├── 00_START_HIER
├── ASSETS
├── SOCIALMEDIA
├── FORMATS
├── CONTENT_CALENDAR
└── 99_ARCHIEF
```

### 99_ARCHIVE

```text
99_ARCHIVE
├── 00_START_HIER
├── LEGACY_ROOTS
├── REVIEW_HOLD
└── 99_ARCHIEF
```

## 6. DOCUMENTTYPE → OPSLAGLOCATIE

| Documenttype | Opslaglocatie | Eigenaar-agent | Workflow | Approval nodig |
|---|---|---|---|---|
| Artist admin | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` | CM OPS AGENT | Artist onboarding / dossierbeheer | Nee, tenzij extern gedeeld |
| Artist contract | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT` | CM LEGAL AGENT | Contract lifecycle / legal review | Ja, Level 4 bij ondertekening of verplichting |
| Artist strategy | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` | CM OPS AGENT | Artist strategy workflow | Ja bij artist approval of externe planning |
| Release document | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/04_RELEASES` | CM OPS AGENT | Release strategy / release kickoff | Ja bij externe planning of publicatie |
| Booking document | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/05_BOOKING` | CM OPS AGENT | Booking workflow | Ja bij financiële, juridische of externe commitment |
| Artist finance-kopie | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE` | CM MONEY AGENT | Finance intake / reporting | Ja bij financiële toezegging of correctie |
| Social media document (artist) | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` | CM SOCIAL AGENT | Content productie / social publishing | Ja bij publicatie namens CM of artist |
| Press/EPK document (artist) | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/08_PRESS_EPK` | CM SOCIAL AGENT | Press / EPK workflow | Ja bij externe verzending of publicatie |
| Master Boutique document | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE/[CASE]` | CM LEGAL AGENT | Deal intake / valuation / negotiation | Ja bij externe distributie, dealbesluit of share |
| Deal document | `OS_CUSTOMMADE/04_DEALS/[DEAL]` | CM LEGAL AGENT | Deal intake / due diligence / closing | Ja bij externe distributie, dealbesluit of share |
| Client document | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]` | CM OPS AGENT | Client onboarding / delivery / rapportage | Ja bij externe verzending of contractafspraak |
| Financieel document | `OS_CUSTOMMADE/06_FINANCE` | CM MONEY AGENT | Finance intake / reconciliation / year-end | Ja bij financiële toezegging, correctie of indiening |
| Juridisch document | `OS_CUSTOMMADE/07_LEGAL` | CM LEGAL AGENT | Legal review / contract lifecycle | Ja bij externe indiening of verplichting |
| Marketing document | `OS_CUSTOMMADE/08_MARKETING` | CM SOCIAL AGENT | Marketingplanning / campagne delivery | Ja bij externe verzending of publicatie |
| Content document | `OS_CUSTOMMADE/09_CONTENT` | CM SOCIAL AGENT | Content productie / publicatie | Ja bij publicatie namens CM of artist |
| Operationeel document | `OS_CUSTOMMADE/05_OPERATIONS` | CM OPS AGENT | Operationeel beheer / intern onboarding | Nee, tenzij extern gedeeld of formeel besluit |
| Admin document | `OS_CUSTOMMADE/00_ADMIN` | CM CONTROL AGENT | Admin beheer / templatebeheer | Nee, tenzij governance-wijziging |
| Archive document | `OS_CUSTOMMADE/99_ARCHIVE` | CM VAULT AGENT | Archivering / retention | Ja bij documentverwijdering; archiveren zelf volgens retention-regels |

## 7. APPROVAL REGISTER

Approval Register staat in de live Drive-structuur onder:

```text
OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER
```

Gebruikt voor:

- Level 4 approvals
- Sophia decisions
- externe communicatie
- publicaties
- contracten
- financiële toezeggingen
- governancewijzigingen
- documentverwijdering

Eigenaar:

- CM CONTROL AGENT

Beheer:

- CM VAULT AGENT

## 8. ARCHIVERING

Regels:

- CM VAULT AGENT archiveert.
- Geen enkel document wordt verwijderd zonder Sophia approval.
- Contracten, facturen, bonnen, kwitanties, juridische dossiers en bewijsstukken worden nooit verwijderd.
- Afgeronde artistfasen gaan naar de relevante artist `09_ARCHIVE`-map.
- Afgeronde deals gaan naar `04_DEALS/[DEAL]/99_ARCHIEF` of centrale `99_ARCHIVE`.
- Legacy materiaal gaat naar `99_ARCHIVE/LEGACY_ROOTS`.
- Jaargebonden archief gaat naar `99_ARCHIVE/[JAAR]`.

## 9. CONFLICTREGELS

- GitHub wint bij governance.
- Moneybird wint bij financiële waarheid.
- Gmail wint bij correspondentie/bewijs.
- ClickUp wint bij taakstatus.
- Approval Register wint bij Sophia-besluiten.
- Drive wint bij opslag.
- Bij conflict escaleert CM CONTROL AGENT.

## 10. VERWIJZINGEN

- `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
