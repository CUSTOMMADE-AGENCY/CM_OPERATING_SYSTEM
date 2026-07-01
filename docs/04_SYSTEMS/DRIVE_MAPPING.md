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

Gebruik onderstaande subfolders per artist dossier. Artist Management is altijd artist-first: operationele submappen staan nooit direct onder `02_ARTIST_MANAGEMENT`, maar altijd onder `[ARTIST]`.

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

Gebruik de lean client-first structuur per zakelijke client of partner. Operationele submappen staan nooit direct onder `03_CLIENTS`, maar altijd onder `[CLIENT_OR_PARTNER_NAME]`. Artists horen niet in `03_CLIENTS`.

```text
03_CLIENTS
└── [CLIENT_OR_PARTNER_NAME]
    ├── 01_ADMIN
    ├── 02_CONTRACT
    ├── 03_BRIEF_SCOPE
    ├── 04_DELIVERABLES
    ├── 05_COMMUNICATION
    ├── 06_FINANCE
    └── 09_ARCHIVE
```

Mappingregels voor legacy client/business folders:

| Documenttype of legacy-signaal | Nieuwe bestemming binnen clientfolder | Regel |
| --- | --- | --- |
| client admin, intake, contactgegevens, company info, stakeholder list, onboarding notes | `01_ADMIN` | Bewaar alleen live clientadministratie; geen statuslagen. |
| contracts, NDA, service agreement, partnership agreement, legal confirmation, signed confirmation, approval | `02_CONTRACT` | Getekende contracten blijven in Drive en worden niet in GitHub opgeslagen. |
| brief, scope, proposal, project outline, campaign requirements, Fit Check notes | `03_BRIEF_SCOPE` | Scope- en voorstelcontext staat bij het clientdossier; uitvoering/status staat in ClickUp. |
| deliverables, assets, reports, decks, exports, opleveringen | `04_DELIVERABLES` | Definitieve clientoutput staat hier; concepten of superseded materiaal gaan naar `09_ARCHIVE`. |
| communication, meeting notes, externe confirmations, call summaries | `05_COMMUNICATION` | Alleen belangrijke afspraken en samenvattingen; Gmail blijft correspondentiebron. |
| budget, fee-afspraken, cost overviews, payment notes, finance references | `06_FINANCE` | Alleen financiële referenties; Moneybird blijft financiële waarheid. |
| old, superseded, afgeronde fases binnen actief clientdossier | `09_ARCHIVE` | Niet gebruiken voor volledig inactieve clientdossiers; die gaan integraal naar `99_ARCHIVE/CLIENTS`. |

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
| Artist admin files | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/01_ADMIN` | CM OPS AGENT | Artist onboarding / dossierbeheer | Nee, tenzij extern gedeeld |
| Artist contracts | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/02_CONTRACT` | CM LEGAL AGENT | Contract lifecycle / legal review | Ja, Level 4 bij ondertekening of verplichting |
| Artist strategy, Brand Audit, Brandbook, Business Audit, roadmap | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/03_STRATEGY` | CM OPS AGENT | Artist strategy workflow | Ja bij artist approval of externe planning |
| Release files, metadata, artwork, release assets | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/04_RELEASES` | CM OPS AGENT | Release strategy / release kickoff | Ja bij externe planning of publicatie |
| Booking/live | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/05_BOOKING` | CM OPS AGENT | Booking workflow | Ja bij financiële, juridische of externe commitment |
| Artist finance references | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/06_FINANCE` | CM MONEY AGENT | Finance intake / reporting | Ja bij financiële toezegging of correctie |
| Social content | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/07_SOCIALMEDIA` | CM SOCIAL AGENT | Content productie / social publishing | Ja bij publicatie namens CM of artist |
| Press/EPK | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/08_PRESS_EPK` | CM SOCIAL AGENT | Press / EPK workflow | Ja bij externe verzending of publicatie |
| Superseded/historical active-client files | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/09_ARCHIVE` | CM VAULT AGENT | Artist dossierbeheer / versiehygiëne | Nee, tenzij archivering een formeel besluit vraagt |
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

Eigenaar en beheer:

- CM CONTROL AGENT

Ondersteuning automatisering:

- CM FLOW AGENT

CM VAULT AGENT ondersteunt uitsluitend repositorystructuur, source hygiene en documentatiebeheer; er wordt geen tweede approval-register of alternatief approvalbeheer ingericht.

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
- Bij Sophia-besluiten en Level 4 approvals geldt één waarheid: `docs/00_GOVERNANCE/APPROVAL_LOG.md` is de governance-specificatie; `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` is de enige operationele audit trail.
- Drive wint bij opslag.
- Bij conflict escaleert CM CONTROL AGENT.

## 10. VERWIJZINGEN

- `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
