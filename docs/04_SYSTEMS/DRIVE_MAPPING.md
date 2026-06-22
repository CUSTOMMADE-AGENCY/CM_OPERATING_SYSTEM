# DRIVE MAPPING

## 1. HOOFDREGEL

Binnen CM_OS geldt:

- Drive = opslag
- GitHub = governance/source of truth
- ClickUp = uitvoering
- Moneybird = financiële waarheid
- Gmail = correspondentie/bewijs
- Make = automatisering

Drive bewaart documenten, assets, templates, dossiers en bewijsstukken.
Drive is geen taakmanagementsysteem en geen financiële waarheid.

## 2. DRIVE ROOT

Gebruik deze root:

```text
OS_CUSTOMMADE
```

## 3. HOOFDSTRUCTUUR

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 00_INBOX
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

| Map | Eigenaar-agent | Ondersteunende agents | Doel | Toegestane documenttypes | Verboden documenttypes | Gekoppelde workflow | Archiefregel |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `00_ADMIN` | CM VAULT AGENT | CM CONTROL AGENT, CM OPS AGENT | Centrale bedrijfsinformatie, branding, master templates, systeemdocumentatie, approvals en leveranciersinformatie beheren. | Company info, branding assets, master templates, systeemdocumentatie, approval logs, vendor documents. | Actieve projecttaken, financiële bronadministratie buiten Moneybird, ongeclassificeerde inbox-documenten. | Document governance, templatebeheer, approvalbeheer. | Verouderde admin-documenten naar `00_ADMIN/99_ARCHIVE`; onvervangbare bewijsstukken blijven bewaard. |
| `00_INBOX` | CM VAULT AGENT | CM CONTROL AGENT | Tijdelijke verzamelplek voor ongeclassificeerde documenten. | Ongeclassificeerde documenten, imports, te verwerken uploads. | Documenten ouder dan 7 dagen, definitieve contracten zonder classificatie, financiële waarheid. | Inbox triage en documentclassificatie. | Wekelijks verwerken; maximaal 7 dagen bewaren; daarna verplaatsen of escaleren. |
| `01_MASTER_BOUTIQUE` | CM PROSPECT AGENT + CM LEGAL AGENT | CM MONEY AGENT, CM OPS AGENT, CM VAULT AGENT | Master boutique pipeline, rechtenregisters, data rooms, waarderingen, deals en contracten beheren. | Leads, LOI, due diligence, rights registers, seller/buyer docs, data room stukken, valuation packages, deal contracts. | Artist-management operationele documenten, algemene marketingcontent, niet-dealgebonden finance documenten. | Master boutique dealflow, due diligence, legal review. | Gesloten of beëindigde trajecten naar `01_MASTER_BOUTIQUE/99_ARCHIVE` of jaararchief. |
| `02_ARTIST_MANAGEMENT` | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT | Artist-management dossiers, brandbooks, release strategy, audits, roadmaps, management en reporting beheren. | Artist profiles, brandbooks, release strategies, business audits, roadmaps, management notes, rights checks, reports. | Master boutique deal rooms, algemene bedrijfsadmin, fiscale bronadministratie. | Artist onboarding, management, release en reporting workflows. | Afgeronde managementtrajecten naar `02_ARTIST_MANAGEMENT/99_ARCHIVE`; permanente bewijsstukken blijven bewaard. |
| `03_CLIENTS` | CM OPS AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM SOCIAL AGENT, CM VAULT AGENT | Actieve en voormalige clientdossiers structureren. | Client admin, contracts, strategy docs, release docs, content, finance copies, reports. | Master templates, Moneybird-bronadministratie, algemene governancebesluiten. | Client onboarding, delivery, reporting en offboarding. | Former clients naar `FORMER_CLIENTS`; afgeronde onderdelen naar client-specifieke `99_ARCHIVE`. |
| `04_DEALS` | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM VAULT AGENT | Dealgerelateerde rechten, contractbewijzen, waarderingen, outreach, onderhandelingen en gesloten deals beheren. | Rights registers, contracts evidence, valuation packages, outreach docs, negotiation notes, active/closed deal files. | Niet-dealgebonden content, operationele SOP's, algemene artist-management bestanden. | Deal intake, negotiation, contracting, closing. | Closed deals naar `04_DEALS/07_CLOSED_DEALS` en daarna relevante `99_ARCHIVE`; juridische bewijsstukken nooit verwijderen. |
| `05_OPERATIONS` | CM CONTROL AGENT + CM FLOW AGENT | CM OPS AGENT, CM VAULT AGENT | SOP's, workflows, automations, ClickUp mapping en operationele rapportages beheren. | SOP, workflow, automation spec, ClickUp export/mapping, operational reports, playbooks. | Financiële waarheid, contractorigineel, losse inbox-documenten. | Operations governance, automation lifecycle, workflowbeheer. | Oude versies naar `05_OPERATIONS/99_ARCHIVE`; governance-relevante stukken blijven in GitHub leidend. |
| `06_FINANCE` | CM MONEY AGENT | CM VAULT AGENT, CM CONTROL AGENT | Financiële documenten en kopieën rond bank, Moneybird, BTW, accountant en jaarafsluiting opslaan. | Facturen, bonnen, kwitanties, bankdocumenten, BTW-documenten, accountant files, year-end files. | Taakstatussen, niet-financiële content, contracten zonder financiële relevantie. | Finance processing, BTW, accountant handoff, year-end close. | Financiële documenten nooit verwijderen; jaargebonden stukken naar `06_FINANCE/99_ARCHIVE` of `99_ARCHIVE/[JAAR]`. |
| `07_LEGAL` | CM LEGAL AGENT | CM CONTROL AGENT, CM VAULT AGENT | Contracten, IP-rechten, disputes, NDA's en compliance beheren. | Contracts, IP rights docs, dispute files, NDA, compliance docs, legal evidence. | Marketing drafts zonder legal status, taaklijsten, Moneybird-bronadministratie. | Legal review, contract lifecycle, compliance en dispute workflow. | Juridische dossiers en bewijsstukken nooit verwijderen; gesloten dossiers naar `07_LEGAL/99_ARCHIVE`. |
| `08_MARKETING` | CM SOCIAL AGENT | CM OPS AGENT, CM VAULT AGENT | Brand, contentplanning, social, website en partnerships marketing beheren. | Brand assets, campaign docs, content drafts, social plans, website docs, partnership briefs. | Contractorigineel, finance source files, legal disputes. | Marketing planning, campaign production, partnership workflow. | Afgeronde campagnes naar `08_MARKETING/99_ARCHIVE`; definitieve bewijsstukken bewaren. |
| `09_CONTENT` | CM SOCIAL AGENT | CM OPS AGENT, CM VAULT AGENT | Social posts, blogs, nieuwsbrieven, pers, media outreach en cases beheren. | Social posts, blogs, newsletters, press releases, media pitches, case content. | Financiële documenten, contractorigineel, governance source of truth. | Content production, publication approval, media outreach. | Gepubliceerde en afgeronde content naar `09_CONTENT/99_ARCHIVE` of jaararchief. |
| `99_ARCHIVE` | CM VAULT AGENT | CM CONTROL AGENT | Centrale langetermijnopslag voor jaararchieven en legacy materiaal. | Jaararchieven, legacy materiaal, afgeronde dossiers, permanente bewijsstukken. | Actieve werkdocumenten, taakmanagement, financiële waarheid buiten Moneybird. | Archiveringsworkflow en retention governance. | Sorteren op jaar of `LEGACY`; niets verwijderen zonder Sophia approval. |

## 5. SUBMAP STRUCTURE

### 00_ADMIN

```text
00_ADMIN
├── 01_COMPANY_INFO
├── 02_BRANDING
├── 03_TEMPLATES
├── 04_SYSTEMS
├── 05_APPROVALS
├── 05_VENDORS
└── 99_ARCHIVE
```

### 00_INBOX

- Tijdelijke verzamelplek voor ongeclassificeerde documenten.
- CM VAULT AGENT verwerkt deze map.
- Documenten mogen hier niet langer dan 7 dagen blijven staan.

### 01_MASTER_BOUTIQUE

```text
01_MASTER_BOUTIQUE
├── 00_START_HIER
├── 01_PIPELINE
│   ├── LEADS
│   ├── ACTIVE
│   ├── LOI
│   ├── DD
│   └── CLOSED
├── 02_RIGHTS_REGISTER
├── 03_SELLERS
├── 04_BUYERS
├── 05_DATA_ROOMS
├── 06_VALUATIONS
├── 07_DEALS
├── 08_CONTRACTS
├── 09_FINANCE
└── 99_ARCHIVE
```

### 02_ARTIST_MANAGEMENT

```text
02_ARTIST_MANAGEMENT
├── 00_START_HIER
├── 01_ROSTER
├── 02_BRANDBOOKS
├── 03_RELEASE_STRATEGY
├── 04_BUSINESS_AUDITS
├── 05_ROADMAPS
├── 06_MANAGEMENT
├── 07_RIGHTS_CHECKS
├── 08_REPORTING
└── 99_ARCHIVE
```

### 03_CLIENTS

```text
03_CLIENTS
├── ACTIVE_CLIENTS
├── FORMER_CLIENTS
└── 99_ARCHIVE
```

Per client:

```text
├── 01_ADMIN
├── 02_CONTRACTS
├── 03_STRATEGY
├── 04_RELEASES
├── 05_CONTENT
├── 06_FINANCE
├── 07_REPORTING
└── 99_ARCHIVE
```

### 04_DEALS

```text
04_DEALS
├── 00_START_HIER
├── 01_RIGHTS_REGISTER
├── 02_CONTRACTS_EVIDENCE
├── 03_VALUATION_PACKAGES
├── 04_OUTREACH
├── 05_NEGOTIATIONS
├── 06_ACTIVE_DEALS
├── 07_CLOSED_DEALS
└── 99_ARCHIVE
```

### 05_OPERATIONS

```text
05_OPERATIONS
├── 01_SOPS
├── 02_WORKFLOWS
├── 03_AUTOMATIONS
├── 04_CLICKUP
├── 05_REPORTS
└── 99_ARCHIVE
```

### 06_FINANCE

```text
06_FINANCE
├── 01_BANK
├── 02_MONEYBIRD
├── 03_BTW
├── 04_ACCOUNTANT
├── 05_YEAR_END
└── 99_ARCHIVE
```

### 07_LEGAL

```text
07_LEGAL
├── 01_CONTRACTS
├── 02_IP_RIGHTS
├── 03_DISPUTES
├── 04_NDA
├── 05_COMPLIANCE
└── 99_ARCHIVE
```

### 08_MARKETING

```text
08_MARKETING
├── 01_BRAND
├── 02_CONTENT
├── 03_SOCIAL
├── 04_WEBSITE
├── 05_PARTNERSHIPS
└── 99_ARCHIVE
```

### 09_CONTENT

```text
09_CONTENT
├── 01_SOCIAL_POSTS
├── 02_BLOGS
├── 03_NEWSLETTERS
├── 04_PRESS
├── 05_MEDIA_OUTREACH
├── 06_CASES
└── 99_ARCHIVE
```

### 99_ARCHIVE

```text
99_ARCHIVE
├── 2024
├── 2025
├── 2026
└── LEGACY
```

## 6. DOCUMENTTYPE → OPSLAGLOCATIE

| Documenttype | Opslaglocatie | Eigenaar-agent | Template | Workflow | Approval nodig |
| --- | --- | --- | --- | --- | --- |
| Contract | `OS_CUSTOMMADE/07_LEGAL/01_CONTRACTS` of relevante client/deal `02_CONTRACTS` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | Legal review en contract lifecycle | Ja, Level 4/Sophia bij ondertekening of materiële verplichting |
| NDA | `OS_CUSTOMMADE/07_LEGAL/04_NDA` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | NDA intake en legal review | Ja bij externe verzending of ondertekening |
| Deal Memo | `OS_CUSTOMMADE/04_DEALS/06_ACTIVE_DEALS` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | Deal negotiation | Ja bij dealbesluit |
| Rights Register | `OS_CUSTOMMADE/04_DEALS/01_RIGHTS_REGISTER` of `01_MASTER_BOUTIQUE/02_RIGHTS_REGISTER` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | Rights verification | Ja bij formele rechtenvaststelling |
| Client Profile | `OS_CUSTOMMADE/03_CLIENTS/ACTIVE_CLIENTS/[CLIENT]/01_ADMIN` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Client onboarding | Nee, tenzij extern gedeeld |
| Client Onboarding | `OS_CUSTOMMADE/03_CLIENTS/ACTIVE_CLIENTS/[CLIENT]/01_ADMIN` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Client onboarding | Nee, tenzij scope/contract wijzigt |
| Artist Roadmap | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/05_ROADMAPS` of client `03_STRATEGY` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Artist roadmap flow | Ja bij strategische commitments |
| Release Strategy | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/03_RELEASE_STRATEGY` of client `04_RELEASES` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/RELEASES` | Release strategy flow | Ja bij externe communicatie of budgetimpact |
| Release Kickoff | `OS_CUSTOMMADE/03_CLIENTS/ACTIVE_CLIENTS/[CLIENT]/04_RELEASES` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/RELEASES` | Release kickoff | Nee, tenzij budget of publicatiebesluit |
| Brand Audit | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/02_BRANDBOOKS` of `04_BUSINESS_AUDITS` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/AUDITS` | Brand audit flow | Nee, tenzij extern gedeeld |
| Business Audit | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/04_BUSINESS_AUDITS` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/AUDITS` | Business audit flow | Nee, tenzij managementbesluit volgt |
| Monthly Report | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/08_REPORTING` of client `07_REPORTING` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | Monthly management reporting | Ja bij externe verzending |
| Meeting Recap | Client/projectmap onder `01_ADMIN`, `03_STRATEGY` of `07_REPORTING` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | Meeting process | Nee, tenzij besluit of toezegging bevat |
| Partnership Brief | `OS_CUSTOMMADE/08_MARKETING/05_PARTNERSHIPS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PARTNERSHIPS` | Partnership workflow | Ja bij externe verzending |
| Sponsor Brief | `OS_CUSTOMMADE/08_MARKETING/05_PARTNERSHIPS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PARTNERSHIPS` | Sponsor outreach | Ja bij externe verzending of commerciële toezegging |
| Social Post | `OS_CUSTOMMADE/09_CONTENT/01_SOCIAL_POSTS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Content production en publication approval | Ja bij publicatie |
| Blog | `OS_CUSTOMMADE/09_CONTENT/02_BLOGS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Content production | Ja bij publicatie |
| Nieuwsbrief | `OS_CUSTOMMADE/09_CONTENT/03_NEWSLETTERS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Newsletter workflow | Ja bij verzending |
| Persbericht | `OS_CUSTOMMADE/09_CONTENT/04_PRESS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Press workflow | Ja bij externe verzending/publicatie |
| Media Pitch | `OS_CUSTOMMADE/09_CONTENT/05_MEDIA_OUTREACH` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Media outreach | Ja bij externe verzending |
| Factuur | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` | CM MONEY AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | Moneybird finance processing | Ja bij financiële toezegging of correctie |
| Bon | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` | CM MONEY AGENT | Niet van toepassing | Expense processing | Nee, tenzij betwist of uitzonderlijk |
| Kwitantie | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` | CM MONEY AGENT | Niet van toepassing | Expense processing | Nee, tenzij betwist of uitzonderlijk |
| Bankdocument | `OS_CUSTOMMADE/06_FINANCE/01_BANK` | CM MONEY AGENT | Niet van toepassing | Bank reconciliation | Ja bij bankwijzigingen of verplichtingen |
| BTW-document | `OS_CUSTOMMADE/06_FINANCE/03_BTW` | CM MONEY AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | BTW workflow | Ja bij indiening of correctie |
| Approval Log | `OS_CUSTOMMADE/00_ADMIN/05_APPROVALS/APPROVAL_REGISTER/CM_APPROVAL_REGISTER` | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Approval governance | Ja, register bevat besluitstatus |
| SOP | `OS_CUSTOMMADE/05_OPERATIONS/01_SOPS` | CM CONTROL AGENT + CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/SOPS` | SOP governance | Ja bij governancewijziging |
| Workflow | `OS_CUSTOMMADE/05_OPERATIONS/02_WORKFLOWS` | CM CONTROL AGENT + CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Workflow lifecycle | Ja bij governancewijziging |
| Automation Spec | `OS_CUSTOMMADE/05_OPERATIONS/03_AUTOMATIONS` | CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Automation lifecycle | Ja bij livegang of impact op externe systemen |
| Prompt | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/PROMPTS` of projectmapkopie | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Prompt governance | Ja bij governance- of publicatie-impact |
| Playbook | `OS_CUSTOMMADE/05_OPERATIONS/01_SOPS` | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/SOPS` | Playbook maintenance | Ja bij governancewijziging |
| Governance document | GitHub als source of truth; Drive-kopie in `OS_CUSTOMMADE/00_ADMIN/04_SYSTEMS` | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Governance change control | Ja, Sophia approval bij governancewijziging |

## 7. TEMPLATE LOCATIE

Master templates staan in:

```text
OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES
```

Submappen:

```text
├── CONTRACTS
├── AUDITS
├── CLIENTS
├── REPORTING
├── RELEASES
├── PARTNERSHIPS
├── WORKFLOWS
├── SOPS
├── PROMPTS
└── ARCHIVE
```

Gebruik:

- Master template blijft altijd in `00_ADMIN/03_TEMPLATES`.
- Operationele kopie gaat naar de juiste client/deal/projectmap.
- Template Register is leidend voor exacte mapping.

Verwijzing: [`docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`](../03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md)

## 8. APPROVAL REGISTER

Approval Register staat in:

```text
OS_CUSTOMMADE/00_ADMIN/05_APPROVALS/APPROVAL_REGISTER/CM_APPROVAL_REGISTER
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

## 9. ARCHIVERING

Regels:

- CM VAULT AGENT archiveert.
- Geen enkel document wordt verwijderd zonder Sophia approval.
- Contracten, facturen, bonnen, kwitanties, juridische dossiers en bewijsstukken worden nooit verwijderd.
- Projecten die afgerond zijn gaan naar de relevante `99_ARCHIVE`-map.
- Legacy materiaal gaat naar `99_ARCHIVE/LEGACY`.
- Jaargebonden archief gaat naar `99_ARCHIVE/[JAAR]`.

## 10. 00_INBOX REGELS

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

## 11. CONFLICTREGELS

- GitHub wint bij governance.
- Moneybird wint bij financiële waarheid.
- Gmail wint bij correspondentie/bewijs.
- ClickUp wint bij taakstatus.
- Approval Register wint bij Sophia-besluiten.
- Drive wint bij opslag.
- Bij conflict escaleert CM CONTROL AGENT.

## 12. VERWIJZINGEN

- [`docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`](../00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md)
- [`docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`](../07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md)
- [`docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`](../07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md)
- [`docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`](../07_AI_AGENTS/AI_AUTONOMY_LEVELS.md)
- [`docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`](../07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md)
- [`docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`](../07_AI_AGENTS/ESCALATION_PROTOCOLS.md)
- [`docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`](../03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md)
