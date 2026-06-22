# DRIVE MAPPING

## Doel

Dit document legt vast hoe de `OS_CUSTOMMADE` Drive-structuur gekoppeld is aan CM_OS agents, documenttypes, templates, workflows en archivering.

Drive bewaart documenten, assets, templates, dossiers en bewijsstukken. Drive is geen taakmanagementsysteem en geen financiële waarheid.

## 1. HOOFDREGEL

Binnen CM_OS geldt:

- Drive = opslag
- GitHub = governance/source of truth
- ClickUp = uitvoering
- Moneybird = financiële waarheid
- Gmail = correspondentie/bewijs
- Make = automatisering

Drive bewaart documenten, assets, templates, dossiers en bewijsstukken. Drive is geen taakmanagementsysteem en geen financiële waarheid.

## 2. DRIVE ROOT

Gebruik deze root:

```text
OS_CUSTOMMADE
```

## 3. HOOFDSTRUCTUUR

Gebruik deze hoofdstructuur onder `OS_CUSTOMMADE`:

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
|---|---|---|---|---|---|---|---|
| `00_ADMIN` | CM VAULT AGENT | CM CONTROL AGENT, CM LEGAL AGENT, CM MONEY AGENT | Centrale bedrijfsinformatie, branding, master templates, systeemdocumentatie en approvals bewaren. | Company info, branding assets, master templates, governance documenten, approval logs, vendor documenten. | Live taakstatussen, financiële waarheid buiten Moneybird, ongeclassificeerde inbox-items langer dan 7 dagen. | Governance, template beheer, approval registratie, document lifecycle. | Verouderde administratieve versies naar `00_ADMIN/99_ARCHIVE`; niets verwijderen zonder Sophia approval. |
| `00_INBOX` | CM VAULT AGENT | CM CONTROL AGENT | Tijdelijke verzamelplek voor documenten zonder duidelijke opslaglocatie. | Ongeclassificeerde documenten, binnenkomende bewijsstukken, tijdelijke uploads. | Definitieve contracten zonder classificatie, facturen als financiële waarheid, documenten ouder dan 7 dagen. | Inbox triage en classificatie. | Maximaal 7 dagen; daarna verplaatsen naar juiste map of escaleren. |
| `01_MASTER_BOUTIQUE` | CM PROSPECT AGENT + CM LEGAL AGENT | CM MONEY AGENT, CM VAULT AGENT, CM CONTROL AGENT | Master Boutique pipeline, rechten, sellers, buyers, data rooms, waarderingen en dealdossiers. | Deal Memo, Rights Register, NDA, LOI, valuation package, seller/buyer profiel, contractconcepten. | Artist-management roadmaps, social posts, algemene financiële administratie zonder dealkoppeling. | Prospecting, deal intake, rights check, valuation, due diligence, closing. | Afgeronde of gepauzeerde dossiers naar `01_MASTER_BOUTIQUE/99_ARCHIVE` of jaararchief. |
| `02_ARTIST_MANAGEMENT` | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT, CM VAULT AGENT | Artist dossiers, brandbooks, release strategy, business audits, roadmaps, management en reporting. | Client Profile, Artist Roadmap, Release Strategy, Brand Audit, Business Audit, Monthly Report, Meeting Recap. | Master Boutique data rooms, algemene vendor administratie, Moneybird-bronadministratie. | Artist onboarding, management, release, reporting en offboarding. | Afgeronde artistfasen naar artist `99_ARCHIVE`; former/legacy materiaal naar centrale archive indien nodig. |
| `03_CLIENTS` | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT, CM VAULT AGENT | Clientdossiers voor merken, bedrijven, sponsors, opdrachtgevers en media partners. | Client Profile, onboarding, contracten, strategie, content, finance-kopieën, reports. | Artist-roster mastermappen, financiële waarheid buiten Moneybird, governance source documenten. | Client onboarding, delivery, reporting en close-out. | Former clients naar `FORMER_CLIENTS`; afgeronde deliverables naar client `99_ARCHIVE`. |
| `04_DEALS` | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM VAULT AGENT, CM CONTROL AGENT | Dealstructuur voor rights registers, contract evidence, valuation packages, outreach, negotiations en closed deals. | Contract, NDA, Deal Memo, Rights Register, valuation package, negotiation notes, evidence. | Social content, algemene artist-roadmaps zonder dealcontext, losse facturen zonder dealkoppeling. | Deal negotiation, due diligence, contracting, closing. | Closed deals naar `07_CLOSED_DEALS` en daarna relevante `99_ARCHIVE`; bewijs nooit verwijderen. |
| `05_OPERATIONS` | CM CONTROL AGENT + CM FLOW AGENT | CM VAULT AGENT, CM OPS AGENT | SOPs, workflows, automations, ClickUp mapping en operationele rapportage. | SOP, Workflow, Automation Spec, Prompt, Playbook, governance support document. | Live clientbestanden, contracten als bewijsbron, Moneybird-administratie. | Operations design, workflow beheer, automation lifecycle. | Oude versies naar `05_OPERATIONS/99_ARCHIVE`; governance blijft in GitHub leidend. |
| `06_FINANCE` | CM MONEY AGENT | CM VAULT AGENT, CM CONTROL AGENT | Bankdocumenten, Moneybird exports/kopieën, BTW, accountant en jaarafsluiting. | Factuurkopie, bon, kwitantie, bankdocument, BTW-document, accountantdocument, year-end stukken. | Contractonderhandelingen zonder financiële status, taakstatussen, social content. | Finance intake, reconciliation, BTW, accountant handoff, year-end. | Financiële bewijsstukken nooit verwijderen; jaargebonden stukken naar `06_FINANCE/99_ARCHIVE/[JAAR]`. |
| `07_LEGAL` | CM LEGAL AGENT | CM VAULT AGENT, CM CONTROL AGENT | Contracten, IP rights, disputes, NDA's en compliance. | Contract, NDA, IP-rights document, dispute file, compliance document, legal evidence. | Social posts, operationele taaklijsten, financiële waarheid buiten Moneybird. | Legal review, contract lifecycle, IP rights, dispute management, compliance. | Juridische dossiers en bewijsstukken nooit verwijderen; gesloten dossiers naar `07_LEGAL/99_ARCHIVE`. |
| `08_MARKETING` | CM SOCIAL AGENT | CM OPS AGENT, CM VAULT AGENT, CM CONTROL AGENT | Brand, content, social, website en partnerships voor marketing. | Partnership Brief, Sponsor Brief, campaign assets, website content, marketing planning. | Contracten als juridische waarheid, facturen als financiële waarheid, governance source documents. | Marketing planning, partnership development, campaign delivery. | Afgeronde campagnes naar `08_MARKETING/99_ARCHIVE` of jaararchief. |
| `09_CONTENT` | CM SOCIAL AGENT | CM OPS AGENT, CM VAULT AGENT | Social posts, blogs, nieuwsbrieven, pers, media outreach en cases. | Social Post, Blog, Nieuwsbrief, Persbericht, Media Pitch, case content, press assets. | Contracten als juridische waarheid, financiële bronadministratie, approval besluiten buiten register. | Content productie, publicatie, media outreach, case publishing. | Gepubliceerde of verlopen content naar `09_CONTENT/99_ARCHIVE`; publicatiebewijs bewaren. |
| `99_ARCHIVE` | CM VAULT AGENT | CM CONTROL AGENT, alle eigenaar-agents op verzoek | Centrale opslag voor jaararchief en legacy materiaal. | Afgeronde dossiers, legacy materiaal, superseded exports, historische bewijsstukken. | Actieve werkdocumenten zonder link naar live map, ongeautoriseerd verwijderde documenten. | Archivering, retention, legacy cleanup. | Structureren per jaar of `LEGACY`; niets verwijderen zonder Sophia approval. |

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
|---|---|---|---|---|---|
| Contract | `OS_CUSTOMMADE/07_LEGAL/01_CONTRACTS` of dossiermap `02_CONTRACTS` / `08_CONTRACTS` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | Contract lifecycle / legal review | Ja, Level 4 bij ondertekening of verplichting |
| NDA | `OS_CUSTOMMADE/07_LEGAL/04_NDA` of deal/client dossier | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | NDA review en execution | Ja bij externe verzending of ondertekening |
| Deal Memo | `OS_CUSTOMMADE/04_DEALS/03_VALUATION_PACKAGES` of `01_MASTER_BOUTIQUE/07_DEALS` | CM PROSPECT AGENT | `00_ADMIN/03_TEMPLATES/PARTNERSHIPS` | Deal intake / valuation / negotiation | Ja bij externe distributie |
| Rights Register | `OS_CUSTOMMADE/04_DEALS/01_RIGHTS_REGISTER` of `01_MASTER_BOUTIQUE/02_RIGHTS_REGISTER` | CM LEGAL AGENT | `00_ADMIN/03_TEMPLATES/CONTRACTS` | Rights check / due diligence | Ja bij dealbesluit of externe share |
| Client Profile | `OS_CUSTOMMADE/03_CLIENTS/ACTIVE_CLIENTS/[CLIENT]/01_ADMIN` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Client onboarding | Nee, tenzij extern gedeeld |
| Client Onboarding | `OS_CUSTOMMADE/03_CLIENTS/ACTIVE_CLIENTS/[CLIENT]/01_ADMIN` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Client onboarding | Ja bij scope, prijs of contractafspraak |
| Artist Roadmap | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/05_ROADMAPS` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/CLIENTS` | Artist roadmap workflow | Ja bij artist approval |
| Release Strategy | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/03_RELEASE_STRATEGY` of client `04_RELEASES` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/RELEASES` | Release strategy workflow | Ja bij externe planning of publicatie |
| Release Kickoff | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/03_RELEASE_STRATEGY` of client `04_RELEASES` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/RELEASES` | Release kickoff | Nee, tenzij commitment of publicatie |
| Brand Audit | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/04_BUSINESS_AUDITS` of `08_MARKETING/01_BRAND` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/AUDITS` | Brand audit workflow | Ja bij delivery aan client/artist |
| Business Audit | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/04_BUSINESS_AUDITS` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/AUDITS` | Business audit workflow | Ja bij delivery aan client/artist |
| Monthly Report | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/08_REPORTING` of client `07_REPORTING` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | Monthly reporting | Ja bij externe verzending |
| Meeting Recap | Relevante client/deal/artist `01_ADMIN` of `07_REPORTING` | CM OPS AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` | Meeting recap | Nee, tenzij besluit/approval bevat |
| Partnership Brief | `OS_CUSTOMMADE/08_MARKETING/05_PARTNERSHIPS` of client `03_STRATEGY` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PARTNERSHIPS` | Partnership development | Ja bij externe verzending |
| Sponsor Brief | `OS_CUSTOMMADE/08_MARKETING/05_PARTNERSHIPS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PARTNERSHIPS` | Sponsor outreach | Ja bij externe verzending |
| Social Post | `OS_CUSTOMMADE/09_CONTENT/01_SOCIAL_POSTS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Content productie / social publishing | Ja bij publicatie namens CM/client |
| Blog | `OS_CUSTOMMADE/09_CONTENT/02_BLOGS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Blog productie / publicatie | Ja bij publicatie |
| Nieuwsbrief | `OS_CUSTOMMADE/09_CONTENT/03_NEWSLETTERS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Newsletter productie | Ja bij verzending |
| Persbericht | `OS_CUSTOMMADE/09_CONTENT/04_PRESS` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Press release | Ja bij externe verzending/publicatie |
| Media Pitch | `OS_CUSTOMMADE/09_CONTENT/05_MEDIA_OUTREACH` | CM SOCIAL AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Media outreach | Ja bij externe verzending |
| Factuur | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` | CM MONEY AGENT | `00_ADMIN/03_TEMPLATES/REPORTING` indien rapportagekopie nodig is | Moneybird finance workflow | Ja bij financiële toezegging of correctie |
| Bon | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` of `06_FINANCE/01_BANK` | CM MONEY AGENT | Niet van toepassing | Expense intake / reconciliation | Nee, tenzij uitzonderlijke claim |
| Kwitantie | `OS_CUSTOMMADE/06_FINANCE/02_MONEYBIRD` | CM MONEY AGENT | Niet van toepassing | Expense/revenue evidence | Nee, tenzij financiële toezegging |
| Bankdocument | `OS_CUSTOMMADE/06_FINANCE/01_BANK` | CM MONEY AGENT | Niet van toepassing | Bank reconciliation | Ja bij externe aanlevering of correctie |
| BTW-document | `OS_CUSTOMMADE/06_FINANCE/03_BTW` | CM MONEY AGENT | Niet van toepassing | BTW workflow | Ja bij aangifte/indiening |
| Approval Log | `OS_CUSTOMMADE/00_ADMIN/05_APPROVALS` | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Approval registratie | Ja, register is bewijs van approval |
| SOP | `OS_CUSTOMMADE/05_OPERATIONS/01_SOPS` | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/SOPS` | SOP beheer | Ja bij governancewijziging |
| Workflow | `OS_CUSTOMMADE/05_OPERATIONS/02_WORKFLOWS` | CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Workflow beheer | Ja bij governance- of automation-impact |
| Automation Spec | `OS_CUSTOMMADE/05_OPERATIONS/03_AUTOMATIONS` | CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Make automation lifecycle | Ja bij live automatisering |
| Prompt | `OS_CUSTOMMADE/05_OPERATIONS/03_AUTOMATIONS` of `00_ADMIN/03_TEMPLATES/PROMPTS` | CM FLOW AGENT | `00_ADMIN/03_TEMPLATES/PROMPTS` | Prompt beheer | Ja bij productieprompt of governance-impact |
| Playbook | `OS_CUSTOMMADE/05_OPERATIONS/01_SOPS` of relevante business-map | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/SOPS` | Playbook beheer | Ja bij governancewijziging |
| Governance document | `OS_CUSTOMMADE/00_ADMIN/04_SYSTEMS` met GitHub als source of truth | CM CONTROL AGENT | `00_ADMIN/03_TEMPLATES/WORKFLOWS` | Governance change | Ja, Level 4 indien systeemimpact |

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

Verwijzing: `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`.

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

- `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
