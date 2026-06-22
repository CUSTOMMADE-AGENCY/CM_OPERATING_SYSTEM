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
├── 00_INBOX
├── 01_ARTIST_MANAGEMENT
├── 02_MASTER_BOUTIQUE
├── 03_EXECUTIVE
├── 04_BUSINESS
├── 05_MARKETING
├── 06_PROJECTS
└── 07_ARCHIVE
```

## 4. MAP → AGENT EIGENAARSCHAP

| Map | Eigenaar-agent | Ondersteunende agents | Doel | Toegestane documenttypes | Verboden documenttypes | Gekoppelde workflow | Archiefregel |
|---|---|---|---|---|---|---|---|
| `00_INBOX` | CM VAULT AGENT | CM CONTROL AGENT | Tijdelijke verzamelplek voor documenten zonder duidelijke opslaglocatie. | Ongeclassificeerde documenten, binnenkomende bewijsstukken, tijdelijke uploads. | Definitieve contracten zonder classificatie, facturen als financiële waarheid, documenten ouder dan 7 dagen. | Inbox triage en classificatie. | Maximaal 7 dagen; daarna verplaatsen naar juiste map of escaleren. |
| `01_ARTIST_MANAGEMENT` | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT, CM VAULT AGENT | Artist dossiers, contracten, strategie, releases, booking, finance-kopieën, social media, press/EPK en archivering. | Client Profile, Artist Roadmap, Release Strategy, Brand Audit, Business Audit, Monthly Report, Meeting Recap, press kit, EPK, bookinginformatie. | Master Boutique data rooms, algemene bedrijfsadministratie zonder artist-koppeling, Moneybird-bronadministratie. | Artist onboarding, management, release, reporting en offboarding. | Afgeronde artistfasen naar artist `09_ARCHIVE`; legacy materiaal naar `07_ARCHIVE` indien nodig. |
| `02_MASTER_BOUTIQUE` | CM PROSPECT AGENT + CM LEGAL AGENT | CM MONEY AGENT, CM VAULT AGENT, CM CONTROL AGENT | Master Boutique pipeline, rechten, sellers, buyers, data rooms, waarderingen en dealdossiers. | Deal Memo, Rights Register, NDA, LOI, valuation package, seller/buyer profiel, contractconcepten. | Artist-management roadmaps, social posts, algemene financiële administratie zonder dealkoppeling. | Prospecting, deal intake, rights check, valuation, due diligence, closing. | Afgeronde of gepauzeerde dossiers naar `02_MASTER_BOUTIQUE/09_ARCHIVE` of centrale `07_ARCHIVE`. |
| `03_EXECUTIVE` | CM CONTROL AGENT | CM VAULT AGENT, CM MONEY AGENT, CM LEGAL AGENT | Besluiten, governance, approvals, managementinformatie en systeemdocumentatie. | Governance documenten, approval logs, besluitnotities, executive reports, systeemdocumentatie. | Live taakstatussen, financiële waarheid buiten Moneybird, ongeclassificeerde inbox-items langer dan 7 dagen. | Governance, approval registratie, executive review en document lifecycle. | Verouderde executive versies naar `03_EXECUTIVE/09_ARCHIVE` of centrale `07_ARCHIVE`; niets verwijderen zonder Sophia approval. |
| `04_BUSINESS` | CM MONEY AGENT + CM LEGAL AGENT | CM CONTROL AGENT, CM VAULT AGENT | Bedrijfsadministratie, contracten, vendors, finance-kopieën, legal, accountant en bedrijfsvoering. | Company info, vendor documenten, contracten, bankdocumenten, Moneybird exports/kopieën, BTW, accountantdocumenten, year-end stukken. | Artist-specifieke werkdocumenten zonder business-koppeling, taakstatussen, social content. | Business administration, finance intake, reconciliation, legal review, accountant handoff, year-end. | Financiële en juridische bewijsstukken nooit verwijderen; jaargebonden stukken naar `04_BUSINESS/09_ARCHIVE/[JAAR]` of `07_ARCHIVE/[JAAR]`. |
| `05_MARKETING` | CM SOCIAL AGENT | CM OPS AGENT, CM VAULT AGENT, CM CONTROL AGENT | Brand, content, social, website, partnerships, pers en cases voor marketing. | Partnership Brief, Sponsor Brief, campaign assets, website content, marketing planning, social posts, blogs, nieuwsbrieven, persberichten, media pitches. | Contracten als juridische waarheid, facturen als financiële waarheid, governance source documents. | Marketing planning, partnership development, content productie, publicatie, media outreach en campaign delivery. | Afgeronde campagnes en verlopen content naar `05_MARKETING/09_ARCHIVE` of centrale `07_ARCHIVE`; publicatiebewijs bewaren. |
| `06_PROJECTS` | CM OPS AGENT | CM FLOW AGENT, CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT, CM VAULT AGENT | Projectdossiers voor tijdelijke initiatieven, deliveries, campagnes, automations en operationele projecten. | Project brief, scope, planning, projectcontracten, deliverable-kopieën, project reports, automation specs, SOP/project playbooks. | Permanente artist-dossiers, financiële bronadministratie, juridische waarheid zonder business- of projectcontext. | Project intake, planning, delivery, reporting, close-out en automation lifecycle. | Afgeronde projecten naar `06_PROJECTS/09_ARCHIVE` of centrale `07_ARCHIVE`; bewijsstukken bewaren. |
| `07_ARCHIVE` | CM VAULT AGENT | CM CONTROL AGENT, alle eigenaar-agents op verzoek | Centrale opslag voor jaararchief, legacy materiaal en afgesloten dossiers. | Afgeronde dossiers, legacy materiaal, superseded exports, historische bewijsstukken. | Actieve werkdocumenten zonder link naar live map, ongeautoriseerd verwijderde documenten. | Archivering, retention, legacy cleanup. | Structureren per jaar of `LEGACY`; niets verwijderen zonder Sophia approval. |

## 5. SUBMAP STRUCTURE

### 00_INBOX

- Tijdelijke verzamelplek voor ongeclassificeerde documenten.
- CM VAULT AGENT verwerkt deze map.
- Documenten mogen hier niet langer dan 7 dagen blijven staan.

### 01_ARTIST_MANAGEMENT

Gebruik onderstaande subfolders per artist dossier:

```text
01_ARTIST_MANAGEMENT
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

### 02_MASTER_BOUTIQUE

```text
02_MASTER_BOUTIQUE
```

### 03_EXECUTIVE

```text
03_EXECUTIVE
```

### 04_BUSINESS

```text
04_BUSINESS
```

### 05_MARKETING

```text
05_MARKETING
```

### 06_PROJECTS

```text
06_PROJECTS
```

### 07_ARCHIVE

```text
07_ARCHIVE
├── 2024
├── 2025
├── 2026
└── LEGACY
```

## 6. DOCUMENTTYPE → OPSLAGLOCATIE

| Documenttype | Opslaglocatie | Eigenaar-agent | Workflow | Approval nodig |
|---|---|---|---|---|
| Ongeclassificeerd document | `OS_CUSTOMMADE/00_INBOX` | CM VAULT AGENT | Inbox triage | Nee, tenzij document een besluit, contract of financiële toezegging bevat |
| Artist admin | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` | CM OPS AGENT | Artist onboarding / dossierbeheer | Nee, tenzij extern gedeeld |
| Artist contract | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT` | CM LEGAL AGENT | Contract lifecycle / legal review | Ja, Level 4 bij ondertekening of verplichting |
| Artist strategy | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` | CM OPS AGENT | Artist strategy workflow | Ja bij artist approval of externe planning |
| Release document | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/04_RELEASES` | CM OPS AGENT | Release strategy / release kickoff | Ja bij externe planning of publicatie |
| Booking document | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/05_BOOKING` | CM OPS AGENT | Booking workflow | Ja bij financiële, juridische of externe commitment |
| Artist finance-kopie | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE` | CM MONEY AGENT | Finance intake / reporting | Ja bij financiële toezegging of correctie |
| Social media document | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` of `OS_CUSTOMMADE/05_MARKETING/07_SOCIALMEDIA` | CM SOCIAL AGENT | Content productie / social publishing | Ja bij publicatie namens CM of artist |
| Press/EPK document | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/08_PRESS_EPK` of `OS_CUSTOMMADE/05_MARKETING/08_PRESS_EPK` | CM SOCIAL AGENT | Press / EPK workflow | Ja bij externe verzending of publicatie |
| Master Boutique document | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE` | CM PROSPECT AGENT | Deal intake / valuation / negotiation | Ja bij externe distributie, dealbesluit of share |
| Executive document | `OS_CUSTOMMADE/03_EXECUTIVE` | CM CONTROL AGENT | Governance / executive review | Ja bij governancewijziging of Sophia-besluit |
| Business document | `OS_CUSTOMMADE/04_BUSINESS` | CM MONEY AGENT + CM LEGAL AGENT | Business administration / finance / legal | Ja bij financiële toezegging, contract of externe indiening |
| Marketing document | `OS_CUSTOMMADE/05_MARKETING` | CM SOCIAL AGENT | Marketing planning / campaign delivery | Ja bij externe verzending of publicatie |
| Project document | `OS_CUSTOMMADE/06_PROJECTS` | CM OPS AGENT | Project intake / delivery / close-out | Ja bij scope, prijs, contractafspraak of externe delivery |
| Archive document | `OS_CUSTOMMADE/07_ARCHIVE` | CM VAULT AGENT | Archivering / retention | Ja bij documentverwijdering; archiveren zelf volgens retention-regels |

## 7. APPROVAL REGISTER

Approval Register staat in de live Drive-structuur onder:

```text
OS_CUSTOMMADE/03_EXECUTIVE/01_ADMIN/APPROVAL_REGISTER/CM_APPROVAL_REGISTER
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
- Afgeronde projecten gaan naar `06_PROJECTS/09_ARCHIVE` of centrale `07_ARCHIVE`.
- Legacy materiaal gaat naar `07_ARCHIVE/LEGACY`.
- Jaargebonden archief gaat naar `07_ARCHIVE/[JAAR]`.

## 9. 00_INBOX REGELS

- Alles zonder duidelijke plek komt tijdelijk in `00_INBOX`.
- CM VAULT AGENT verwerkt `00_INBOX` wekelijks.
- Elk document krijgt:
  - documenttype
  - eigenaar-agent
  - opslaglocatie
  - workflow
  - approval status indien nodig
- Documenten blijven maximaal 7 dagen in `00_INBOX`.
- Bij twijfel escaleert CM VAULT AGENT naar CM CONTROL AGENT of Sophia.

## 10. CONFLICTREGELS

- GitHub wint bij governance.
- Moneybird wint bij financiële waarheid.
- Gmail wint bij correspondentie/bewijs.
- ClickUp wint bij taakstatus.
- Approval Register wint bij Sophia-besluiten.
- Drive wint bij opslag.
- Bij conflict escaleert CM CONTROL AGENT.

## 11. VERWIJZINGEN

- `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
