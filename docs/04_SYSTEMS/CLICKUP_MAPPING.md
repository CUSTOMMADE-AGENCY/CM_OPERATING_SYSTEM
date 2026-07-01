# ClickUp Mapping voor CM Workflows

## Doel

Dit document vertaalt elke CM GitHub Workflow naar de exacte ClickUp execution structure. Gebruik dit document om ClickUp Space, folders, Lists, taaktemplates, statussen, subtaken, approvals, Google Drive-mappen en Gmail templates te bouwen zonder interpretatie.

## Core rule

GitHub documenteert het proces. ClickUp voert het proces uit. Google Drive bewaart client files en deliverables. Gmail verzorgt communicatie. ClickUp gebruikt één centrale `CM` Space; business lanes worden ingericht als folders binnen die Space. Er worden geen losse Spaces voor Artist Management, Master Boutique, Shared Operations of Governance aangemaakt.

## Centrale ClickUp Space

```text
CM
├── Artist Management
├── Master Boutique / Deals
├── Clients
├── Pipeline
├── Shared Operations
└── Governance & Systems
```

Alle workflow-mappings hieronder gebruiken deze ene Space. Foldernamen mogen alleen worden uitgebreid wanneer de centrale `CM` Space behouden blijft en de uitbreiding geen parallelle Space creëert.

## Terminologie en naamgeving

- Gebruik CM-terminologie zoals vastgelegd in `docs/00_GOVERNANCE/CM_TERMINOLOGY_STANDARD.md`.
- Vertaal vaste termen zoals Brand Audit, Brandbook, Data Room, Success Fee, Pipeline, Fit Check, LOI en APA niet.
- ClickUp template naming: `CM - [Business lane] - [Workflow]`.
- ClickUp List naming:
  - Artist Management: `AM - [Artist Name] - [Workflow]`.
  - Master Boutique: `MB - [Deal / Asset Name] - [Workflow]`.
- Elke ClickUp taak moet bevatten: GitHub source link, Google Drive folder link, owner, due date, status, required evidence, approval owner en Gmail template waar communicatie nodig is.

## Standaard statussets

### Artist Management statusset

Gebruik deze statusset voor Artist Management Workflows, tenzij de mapping hieronder extra statuswaarden specificeert:

1. `Intake`
2. `Inputs verzamelen`
3. `In uitvoering`
4. `Review intern`
5. `Wacht op artist approval`
6. `Revisions`
7. `Approved`
8. `Overgedragen naar execution`
9. `Completed`
10. `Blocked`

### Master Boutique statusset

Gebruik deze statusset voor Master Boutique Workflows, tenzij de mapping hieronder extra statuswaarden specificeert:

1. `Lead intake`
2. `Fit Check`
3. `Data verzamelen`
4. `Interne review`
5. `Client approval nodig`
6. `External communication`
7. `Negotiation / Due Diligence`
8. `Closing`
9. `Post-closing`
10. `Completed`
11. `Rejected / parked`
12. `Blocked`

## Gmail template inventory voor deze mapping

Maak of gebruik minimaal onderstaande Gmail templates volgens `CM - Lane - Purpose`:

### Artist Management

- `CM - Artist Management - Onboarding Welcome`
- `CM - Artist Management - Input Request`
- `CM - Artist Management - Meeting Agenda`
- `CM - Artist Management - Meeting Recap`
- `CM - Artist Management - Approval Request`
- `CM - Artist Management - Brand Audit Delivery`
- `CM - Artist Management - Brandbook Review`
- `CM - Artist Management - Roadmap Approval`
- `CM - Artist Management - Release Strategy Approval`
- `CM - Artist Management - Monthly Summary`
- `CM - Artist Management - Deal Terms Approval`
- `CM - Artist Management - Brand Partnership Approval`
- `CM - Artist Management - Offboarding Summary`

### Master Boutique

- `CM - Master Boutique - Seller Intake`
- `CM - Master Boutique - Buyer Outreach Intro`
- `CM - Master Boutique - NDA Follow Up`
- `CM - Master Boutique - Buyer Qualification Request`
- `CM - Master Boutique - Data Room Access Granted`
- `CM - Master Boutique - Data Room Access Revoked`
- `CM - Master Boutique - LOI Request`
- `CM - Master Boutique - LOI Review Summary`
- `CM - Master Boutique - APA Issue Update`
- `CM - Master Boutique - Closing Checklist`
- `CM - Master Boutique - Closing Confirmation`
- `CM - Master Boutique - Success Fee Invoice Request`

---


## ClickUp task template documents

De praktische ClickUp task templates voor Artist Management staan in `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/`. Deze documenten zijn de bouwinstructies voor taken, custom fields, subtasks, checklists, approval owners, GitHub workflow-links, Drive folders en Gmail templates.

# Artist Management mappings

## Artist Onboarding Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_ONBOARDING_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/01_ARTIST_ONBOARDING_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Artist Onboarding` |
| Task template name | `CM - Artist Management - Artist Onboarding Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ONBOARDING_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Workspace setup`, `Ready for Monthly Management` |
| Required subtasks | Engagement basis bevestigen; Google Drive-artistmap aanmaken; artistinformatie en Assets verzamelen; intakegesprek plannen; rollen en approvals vastleggen; eerste artist roadmap bouwen; execution backlog aanmaken; Onboarding summary versturen; Monthly Management Flow-startpunt aanmaken |
| Approval owner | Artist manager voor operationele inrichting; artist of aangewezen decision owner voor Scope, budget, public commitments en eerste artist roadmap |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/01_ADMIN` en `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Onboarding Welcome`; `CM - Artist Management - Input Request`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved Onboarding summary staat in Drive; Google Drive-artistmap en ClickUp execution backlog zijn ingericht; team roster, approval matrix, open inputs list, decision log en risk log zijn ingevuld; eerste artist roadmap is approved of als blocker gelogd; eerste Monthly Management taak is aangemaakt |

## Brand Audit Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/BRAND_AUDIT_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/02_BRAND_AUDIT_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Brand Audit` |
| Task template name | `CM - Artist Management - Brand Audit Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_AUDIT_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Findings opgesteld`, `Action list klaar` |
| Required subtasks | Audit brief bevestigen; materialen verzamelen; positioning en story reviewen; visuele identiteit reviewen; content en platform presence reviewen; commercial en partner fit reviewen; gaps en risico's identificeren; verbeteracties prioriteren; Brand Audit-memo finaliseren |
| Approval owner | CM strategy lead voor auditkwaliteit; artist voor public-facing recommendations en prioriteiten |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Input Request`; `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Brand Audit Delivery`; `CM - Artist Management - Approval Request` |
| Completion criteria | Brand Audit-memo, gaps/risk overview, prioritized action list en Asset refresh recommendations staan in Drive; high-priority actions hebben owner, due date en next action in ClickUp; artist heeft public-facing recommendations reviewed; input voor Brandbook, Release Strategy of artist roadmap is overgedragen |

## Artist Brandbook Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/03_ARTIST_BRANDBOOK_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Brandbook` |
| Task template name | `CM - Artist Management - Artist Brandbook Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_BRANDBOOK_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Discovery`, `Draft strategic direction`, `Draft visual direction`, `Distributed` |
| Required subtasks | Brandbook brief bevestigen; source materials organiseren; artist/stakeholder discovery uitvoeren; artist positioning draften; artist story draften; tone of voice definiëren; visual identity guidance maken; content pillars maken; collaboration and partner use rules vastleggen; interne review uitvoeren; artist review verwerken; final approval vastleggen; approved Brandbook distribueren en reviewmoment plannen |
| Approval owner | CM strategy lead voor Brandbook-Workflow; artist voor final approval en usage restrictions |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Input Request`; `CM - Artist Management - Brandbook Review`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved Brandbook, messaging toolkit, visual direction guide, content pillars, do/don't list en usage notes staan in Drive; artist approval, version, intended users en restrictions zijn schriftelijk vastgelegd; distribution list is bijgewerkt; maintenance/review task is aangemaakt |

## Artist Roadmap Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/04_ARTIST_ROADMAP_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Artist Roadmap` |
| Task template name | `CM - Artist Management - Artist Roadmap Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ROADMAP_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Roadmap horizon bevestigd`, `Workstreams gedefinieerd`, `Backlog`, `Active priority` |
| Required subtasks | Roadmap horizon bevestigen; workstreams definiëren; outcomes prioriteren; owners en deadlines vastleggen; roadmap aan ClickUp koppelen; risks en assumptions reviewen; approvals bevestigen; monthly cadence koppelen; roadmap-versies archiveren |
| Approval owner | Artist manager voor roadmapstructuur; artist of aangewezen decision owner voor priorities, budget, Scope changes en strategic decisions |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Roadmap Approval`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved artist roadmap staat in Drive; alle active priorities hebben owner, due date, dependency en next action in ClickUp; backlog is gescheiden van active priority; risks, Scope changes en budgetvragen zijn approved, geparkeerd of geëscaleerd; monthly review task is gekoppeld |

## Release Strategy Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/05_RELEASE_STRATEGY_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Release Strategy - [Release Name]` |
| Task template name | `CM - Artist Management - Release Strategy Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/RELEASE_STRATEGY_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Release intake`, `Campaign planning`, `Launch readiness`, `Post-release review` |
| Required subtasks | Release Scope en objective bevestigen; release inputs verzamelen; audience, positioning en messaging bepalen; timeline en milestones bouwen; channel owners vastleggen; budget en approvals checken; release checklist uitvoeren; launch readiness review plannen; go/no-go bevestigen; post-release results en learnings reviewen |
| Approval owner | Release manager of artist manager voor planning; artist voor messaging, budget, release commitments en go/no-go |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/04_RELEASES/[Release Name]` |
| Gmail templates used | `CM - Artist Management - Release Strategy Approval`; `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Release Strategy, timeline, release checklist, approved messaging, owner matrix en post-release review staan in Drive; go/no-go en launch approvals zijn schriftelijk bevestigd; campaign tasks zijn in ClickUp afgerond of overgedragen; learnings zijn toegevoegd aan artist roadmap |

## Monthly Management Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/06_MONTHLY_MANAGEMENT_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Monthly Management - [YYYY-MM]` |
| Task template name | `CM - Artist Management - Monthly Management Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/MONTHLY_MANAGEMENT_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Preparation`, `Monthly review`, `Follow-up`, `Escalated` |
| Required subtasks | Vorige maand reviewen; completed work en missed deadlines bevestigen; actieve workstreams reviewen; artist goals en constraints reviewen; rights, royalties en deals reviewen; budget en commercial items reviewen; prioriteiten voor volgende maand bevestigen; ClickUp owners, dates, dependencies en statuses bijwerken; monthly summary versturen; evidence en approvals archiveren |
| Approval owner | Artist manager voor monthly cycle; artist of aangewezen decision owner voor prioriteiten, budgetten, public commitments en strategic decisions |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY/[YYYY-MM]` |
| Gmail templates used | `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Monthly Summary`; `CM - Artist Management - Approval Request` |
| Completion criteria | Monthly management summary, decision log, risk/escalation log en updated artist roadmap staan in Drive; elke priority heeft owner, due date en next action; decisions zijn schriftelijk bevestigd; overdue en blocked items hebben escalatiepad; Scope changes zijn approved voordat execution start |

## Deal Negotiation Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/DEAL_NEGOTIATION_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/07_DEAL_NEGOTIATION_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Deal Negotiation - [Counterparty / Deal]` |
| Task template name | `CM - Artist Management - Deal Negotiation Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Opportunity registered`, `Fit Check`, `Counsel review`, `Negotiation`, `Obligations active`, `Declined` |
| Required subtasks | Opportunity registreren; Fit Check uitvoeren; deal inputs verzamelen; red flags identificeren; negotiation position bepalen; legal en specialist review coördineren; negotiation tracker bijwerken; material terms documenteren; final approval bevestigen; final documents archiveren; obligations tracker activeren |
| Approval owner | Artist voor deal authority en final approval; counsel voor juridische review wanneer rights transfer, legal risk of signature speelt; artist manager voor coordination |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/02_CONTRACT/[Deal Name]` |
| Gmail templates used | `CM - Artist Management - Deal Terms Approval`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved deal memo of negotiation close-out staat in Drive; material terms, red flags en final approval zijn schriftelijk vastgelegd; obligations en deadlines staan in ClickUp; artist roadmap is bijgewerkt; finance, legal, rights, release, marketing of partnership follow-up is toegewezen |

## Brand Partnership Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/BRAND_PARTNERSHIP_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/08_BRAND_PARTNERSHIP_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Brand Partnership - [Brand]` |
| Task template name | `CM - Artist Management - Brand Partnership Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_PARTNERSHIP_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Lead registered`, `Partnership Fit Check`, `Negotiation`, `Execution`, `Proof of performance`, `Declined / parked` |
| Required subtasks | Lead in Pipeline registreren; partnership Fit Check uitvoeren; restrictions en conflicts checken; partnership concept definiëren; commercial terms bepalen; negotiation en legal review coördineren; artist approval verkrijgen; execution checklist aanmaken; deliverables volgen; reporting/proof of performance package opleveren; partnership evalueren |
| Approval owner | Artist voor brand fit, deliverables, usage, exclusivity en final approval; artist manager of brand partnership lead voor commercial coordination; counsel bij legal/signature risk |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/05_BOOKING/[Brand]` |
| Gmail templates used | `CM - Artist Management - Brand Partnership Approval`; `CM - Artist Management - Approval Request`; `CM - Artist Management - Meeting Recap` |
| Completion criteria | Approved partnership deal of declined opportunity record staat in Drive; Pipeline en artist roadmap zijn bijgewerkt; usage rights, exclusivity, deliverables, payment en reporting follow-up zijn schriftelijk bevestigd; execution tasks zijn afgerond; proof of performance en learnings zijn opgeslagen |

## Artist Offboarding Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_OFFBOARDING_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/09_ARTIST_OFFBOARDING_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `CM` |
| ClickUp Folder | `Artist Management` |
| ClickUp List | `AM - [Artist Name] - Artist Offboarding` |
| Task template name | `CM - Artist Management - Artist Offboarding Flow` |
| ClickUp template document | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_OFFBOARDING_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Offboarding trigger`, `Close-out`, `Handover`, `Access review`, `Archived`, `Escalated` |
| Required subtasks | Offboarding trigger bevestigen; agreement en obligations reviewen; close-out task list maken; deliverables afsluiten; open workstreams reviewen; handover package voorbereiden; access en confidentiality reviewen; final summary versturen; Success Fee triggers en open invoices checken; internal lessons learned vastleggen; workspace archiveren |
| Approval owner | Artist manager voor close-out execution; CM leadership bij conflict, legal exposure, Success Fee of unresolved obligations; artist of decision owner voor handover acceptance |
| Linked Drive folder | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[Artist Name]/09_ARCHIVE/Offboarding` |
| Gmail templates used | `CM - Artist Management - Offboarding Summary`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Final close-out summary, handover package, updated deliverables register, open obligations list en access review record staan in Drive; alle deliverables zijn completed, transferred, blocked of out-of-Scope gemarkeerd; access is reviewed per einddatum; unresolved issues hebben escalation record; artist/Pipeline status is bijgewerkt |

---

# Master Boutique mappings

## Catalog Acquisition Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; dealflow bron `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Catalog Acquisition` |
| Task template name | `CM - Master Boutique - Catalog Acquisition Flow` |
| Required statuses | Master Boutique statusset + `Asset intake`, `Rights review`, `Financial review`, `Valuation`, `Buyer targeting`, `LOI phase`, `Due Diligence`, `APA phase` |
| Required subtasks | Asset intake afronden; repertoirelijst verzamelen; rights review uitvoeren; financial review en revenue reconciliation uitvoeren; valuation low/base/high cases maken; deal thesis opstellen; Buyer target list maken; diligence-readiness notitie voorbereiden; teaser/process letter voorbereiden; outreach-referenties vastleggen; pas vanaf due diligence fase Data Room-, LOI-, APA-, Closing- en Success Fee-taken openen |
| Approval owner | CM deal lead voor proceskwaliteit; Seller of buyer principal voor commerciële besluiten; counsel voor legal transfer, consents en APA; finance/royalty analyst voor revenue evidence |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/00_START_HIER`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/01_RECHTEN_REGISTER`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/02_CONTRACTEN_BEWIJS`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/04_OUTREACH_CLICKUP`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/99_ARCHIEF` |
| Gmail templates used | `CM - Master Boutique - Seller Intake`; `CM - Master Boutique - Buyer Outreach Intro`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - LOI Request` |
| Completion criteria | Asset perimeter memo, rights review memo, financial review workbook, valuation memo, Buyer target list, outreach-referenties en go/no-go decision staan in Drive; elke fase heeft owner, deadline en next action in ClickUp; unresolved rights/data issues zijn gelogd; confidential outreach start pas na approved thesis en disclosure-plan |

## Buyer Outreach Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md`; aanvullend Playbook `docs/06_PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Buyer Outreach` |
| Task template name | `CM - Master Boutique - Buyer Outreach Flow` |
| Required statuses | Master Boutique statusset + `Buyer shortlist`, `Teaser sent`, `NDA sent`, `NDA signed`, `Process letter sent`, `Offer received`, `No response`, `Declined` |
| Required subtasks | Buyer universe definiëren; Buyer shortlist goedkeuren; teaser en outreach copy controleren; outreach batch aanmaken; NDA uitsturen; follow-up cadans plannen; Buyer responses loggen; Buyer qualification taak openen; process letter delen na approval; biedingen centraal vastleggen; offer comparison memo bijwerken |
| Approval owner | CM deal lead voor outreach control; Seller of decision owner voor Buyer shortlist en disclosure approval; counsel voor NDA/procesvoorwaarden |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET` |
| Gmail templates used | `CM - Master Boutique - Buyer Outreach Intro`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - Buyer Qualification Request`; `CM - Master Boutique - LOI Request` |
| Completion criteria | Buyer shortlist, outreach tracker, NDA status, response log en offer comparison staan in Drive of ClickUp; geen confidential information is gedeeld zonder NDA/approval; iedere Buyer heeft status, owner, next action en laatste contactdatum; Seller heeft material buyer interactions en biedingen reviewed |

## Buyer Qualification Model

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/BUYER_QUALIFICATION_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Buyer Qualification` |
| Task template name | `CM - Master Boutique - Buyer Qualification Model` |
| Required statuses | Master Boutique statusset + `Qualified`, `Conditional`, `Disqualified`, `Needs more info` |
| Required subtasks | Buyer profile aanmaken; strategic fit beoordelen; financial capacity beoordelen; rights/repertoire appetite beoordelen; execution reliability beoordelen; confidentiality discipline beoordelen; approval en funding route bevestigen; red flags loggen; qualification decision vastleggen; Data Room access level aanbevelen |
| Approval owner | CM deal lead voor qualification decision; Seller of decision owner voor doorgaan met Buyer; counsel bij confidentiality, sanctions, legal of funding concerns |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET` |
| Gmail templates used | `CM - Master Boutique - Buyer Qualification Request`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - Data Room Access Granted` |
| Completion criteria | Elke Buyer heeft score/decision, rationale, red flags, approved next action en Data Room access recommendation; disqualified Buyers krijgen geen toegang tot confidential materials; conditional Buyers hebben concrete ontbrekende inputs met deadline |

## Data Room Access Model

Deze workflow/list wordt pas aangemaakt wanneer de deal de due diligence fase bereikt.

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/DATA_ROOM_ACCESS_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Data Room Access` |
| Task template name | `CM - Master Boutique - Data Room Access Model` |
| Required statuses | Master Boutique statusset + `Access requested`, `NDA verified`, `Level approved`, `Access granted`, `Access changed`, `Access revoked`, `Access audit` |
| Required subtasks | NDA en Buyer qualification controleren; access level bepalen; folder permissions voorbereiden; access approval vastleggen; Data Room access verlenen; toegang en datum loggen; Q&A-log koppelen; sensitive document requests reviewen; access audit uitvoeren; access intrekken bij reject, closing of procespauze |
| Approval owner | CM deal lead voor access control; Seller of decision owner voor Level 2/3 access; counsel voor zeer gevoelige juridische, fiscale of closing-documenten |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/01_RECHTEN_REGISTER`, `OS_CUSTOMMADE/04_DEALS/[Deal Name]/02_CONTRACTEN_BEWIJS` en `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET`; Data Room-, LOI-, APA-, Closing- en Success Fee-subfolders alleen vanaf due diligence fase |
| Gmail templates used | `CM - Master Boutique - Data Room Access Granted`; `CM - Master Boutique - Data Room Access Revoked`; `CM - Master Boutique - NDA Follow Up` |
| Completion criteria | Access log bevat Buyer, NDA status, access level, approved by, granted date, revoked date en restrictions; alle Level 2/3 requests hebben approval evidence; Q&A en sensitive document requests zijn centraal gelogd; access is ingetrokken wanneer Buyer niet meer actief is |

## LOI Workflow

Deze workflow/list wordt pas aangemaakt wanneer de deal de due diligence fase bereikt.

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/05_KNOWLEDGE_BASE/LOI_GUIDE.md`; procesbron `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - LOI Workflow` |
| Task template name | `CM - Master Boutique - LOI Workflow` |
| Required statuses | Master Boutique statusset + `LOI requested`, `LOI received`, `LOI review`, `Counter comments`, `Client decision`, `Accepted`, `Rejected`, `Moved to APA` |
| Required subtasks | LOI request format versturen; received LOI uploaden; price, Assets, structure, exclusivity, diligence Scope, closing conditions, holdback, earnout, approvals, costs en binding language reviewen; LOI comparison maken; red flags en trade-offs markeren; client recommendation opstellen; counsel review coördineren; accepted/rejected decision vastleggen; Due Diligence-taken openen; APA-, Closing- en Success Fee-taken pas wanneer de due diligence fase dat vereist |
| Approval owner | Seller/buyer principal of decision owner voor accept/reject; CM deal lead voor commercial recommendation; counsel voor legal/binding language en exclusivity |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET` |
| Gmail templates used | `CM - Master Boutique - LOI Request`; `CM - Master Boutique - LOI Review Summary`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Alle LOI's staan in Drive; LOI comparison bevat prijs, structuur, voorwaarden, exclusiviteit, diligence burden en closing certainty; client decision is schriftelijk vastgelegd; accepted LOI heeft follow-up taken voor Due Diligence; Data Room access, APA, closing timeline en Success Fee follow-up ontstaan pas binnen de due diligence fase |

## APA Negotiation Playbook

Deze workflow/list wordt pas aangemaakt wanneer de deal de due diligence fase bereikt.

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md`; kennisbron `docs/05_KNOWLEDGE_BASE/APA_GUIDE.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - APA Negotiation` |
| Task template name | `CM - Master Boutique - APA Negotiation Playbook` |
| Required statuses | Master Boutique statusset + `APA drafting`, `Issue log open`, `Counsel review`, `Business position needed`, `Signing readiness`, `Signed`, `Moved to Closing` |
| Required subtasks | APA business-point checklist maken; issue log openen; deal economics en purchase price mechanics reviewen; Asset schedules reviewen; Due Diligence-issues toewijzen; disclosure schedule inputs verzamelen; approved negotiation positions vastleggen; counsel comments coördineren; consents, notices en closing deliverables volgen; signing readiness controleren; post-closing obligations tracker maken |
| Approval owner | Deal lead voor issue log en client alignment; client/decision owner voor materiële businessposities; counsel voor drafting en legal advice |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/02_CONTRACTEN_BEWIJS` |
| Gmail templates used | `CM - Master Boutique - APA Issue Update`; `CM - Master Boutique - Closing Checklist`; `CM - Master Boutique - LOI Review Summary` |
| Completion criteria | APA business-point checklist, issue log, approved negotiation positions, closing checklist en post-closing obligations tracker staan in Drive/ClickUp; geen material issue mist owner, status en next action; signing readiness is bevestigd op APA, schedules, approvals, funds flow, signatures en blockers |

## Closing Workflow

Deze workflow/list wordt pas aangemaakt wanneer de deal de due diligence fase bereikt.

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; APA-bron `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md`; sell-side bron `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Closing` |
| Task template name | `CM - Master Boutique - Closing Workflow` |
| Required statuses | Master Boutique statusset + `Closing checklist open`, `Funds flow pending`, `Signatures pending`, `Consents / notices pending`, `Closed`, `Post-closing handoff` |
| Required subtasks | Closing checklist finaliseren; final APA en schedules controleren; payment/funds flow instructions bevestigen; signatures en approvals volgen; assignments voorbereiden; consents en notices volgen; access transfers voorbereiden; closing binder samenstellen; closing confirmation versturen; post-closing obligations, royalty redirection en reporting follow-up aanmaken; lessons learned vastleggen |
| Approval owner | Client/decision owner voor final close; counsel voor legal closing deliverables; CM deal lead voor checklist, handoff en evidence; finance/tax advisor voor payment mechanics waar relevant |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/02_CONTRACTEN_BEWIJS` en `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET` |
| Gmail templates used | `CM - Master Boutique - Closing Checklist`; `CM - Master Boutique - Closing Confirmation`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Signed documents, closing checklist, funds flow evidence, assignments, notices, access transfer proof en closing binder staan in Drive; post-closing obligations hebben owner en due date in ClickUp; deal status is `Closed`; client heeft closing confirmation ontvangen; geen unresolved closing blockers blijven zonder escalation |

## Success Fee Workflow

Deze workflow/list wordt pas aangemaakt wanneer de deal de due diligence fase bereikt.

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md`; commerciële bron `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; governance bron `docs/00_GOVERNANCE/CM_OPERATING_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `CM` |
| ClickUp Folder | `Master Boutique / Deals` |
| ClickUp List | `MB - [Deal / Asset Name] - Success Fee` |
| Task template name | `CM - Master Boutique - Success Fee Workflow` |
| Required statuses | Master Boutique statusset + `Trigger check`, `Calculation`, `Client approval needed`, `Invoice requested`, `Invoice sent`, `Paid`, `Disputed`, `Waived` |
| Required subtasks | Engagement letter/mandaat en Success Fee terms reviewen; fee trigger bepalen; final transaction economics bevestigen; fee calculation maken; supporting evidence verzamelen; internal approval vragen; client approval of notice vastleggen; invoice request naar finance sturen; invoice status volgen; payment confirmation opslaan; dispute/escalation log openen indien nodig; revenue recognition note archiveren |
| Approval owner | CM leadership of deal lead voor fee calculation en enforcement; finance/admin voor invoice; client/decision owner wanneer contractueel approval/notice nodig is; counsel bij dispute of interpretation issue |
| Linked Drive folder | `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET` |
| Gmail templates used | `CM - Master Boutique - Success Fee Invoice Request`; `CM - Master Boutique - Closing Confirmation`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Success Fee calculation, trigger evidence, approval/notice, invoice request, invoice copy en payment confirmation staan in Drive; ClickUp bevat fee amount, due date, invoice status en owner; disputed of waived fees hebben written rationale en CM leadership approval; deal financial close-out is gemarkeerd als completed |

---

# Compacte ClickUp-mapping voor CM_OS agents

## Doel

Dit hoofdstuk legt vast hoe de actieve CM_OS agents gekoppeld zijn aan de compacte ClickUp-structuur van CUSTOMMADE AGENCY. ClickUp is de uitvoeringslaag voor taken, planning, statussen, deadlines, approvals, opvolging en operationele routing. GitHub blijft de governance- en documentatiebron voor CM_OS. Google Drive bewaart documenten, assets, contractkopieën en werkmateriaal. Moneybird blijft de financiële waarheid voor facturen, bonnen, kwitanties, omzet, bank, BTW, open posten, cashflow en financiële rapportage.

Deze mapping maakt geen nieuwe agents aan. Bestaande CM_OS agents worden alleen gekoppeld aan de compacte ClickUp-folders:

```text
CUSTOMMADE AGENCY
├── PIPELINE
├── CLIENTS
├── OPERATIONS
├── DEAL DESK
└── MARKETING
```

## Leidende regels

- Elke ClickUp-taak heeft exact één `Agent Owner`.
- CM CONTROL AGENT bewaakt governance, prioriteit, routing, approvals, escalaties en kwaliteit, maar krijgt geen aparte hoofdmap.
- CM MONEY AGENT krijgt geen aparte hoofdmap; Money-acties komen onder `OPERATIONS`.
- Moneybird blijft de financiële waarheid; ClickUp bevat alleen uitvoerende finance-taken, follow-up, deadlines, blockers en links naar Moneybird.
- Legal, contracten, rights reviews, deal reviews en onderhandelingsdossiers komen onder `DEAL DESK`.
- Governance, approvals, escalaties, flow issues, systeemissues en operationele blokkades komen onder `OPERATIONS`.
- Content, website, SEO, persberichten, media outreach, social en publicatieplanning komen onder `MARKETING`.
- Partnerships, sponsorships, brand deals, product placement, sampling, event activaties, endorsements en nieuwe zakelijke klanten komen onder `PIPELINE`.
- Client- en artistdelivery, onboarding, planning, roadmaps, releases en accountmanagement komen onder `CLIENTS`.
- Externe communicatie, publicaties, financiële commitments, juridische commitments, systeemwijzigingen en strategische keuzes vereisen de relevante approval gate voordat uitvoering extern zichtbaar of bindend wordt.

## Globale custom fields

Deze custom fields gelden voor alle folders en lists binnen `CUSTOMMADE AGENCY`:

| Custom field | Doel | Verwachte invulling |
| --- | --- | --- |
| Agent Owner | Primaire eigenaar-agent van de taak. | Eén actieve CM_OS agent, bijvoorbeeld `CM OPS AGENT`. |
| Autonomy Level | Toegestane zelfstandigheid voor uitvoering. | Waarde volgens CM autonomy levels. |
| Approval Required | Geeft aan of vooraf approval nodig is. | `Yes` / `No`. |
| Approval Status | Huidige approvalfase. | `Not requested`, `Requested`, `Approved`, `Rejected`, `Changes requested`, `Escalated`. |
| Sophia Approval | Markeert of Sophia expliciet moet goedkeuren of heeft goedgekeurd. | `Not required`, `Required`, `Requested`, `Approved`, `Rejected`. |
| Client | Betrokken klant of zakelijke relatie. | Naam client of account. |
| Artist | Betrokken artist. | Naam artist of projectnaam. |
| Deal Type | Type commerciële of juridische deal. | Bijvoorbeeld `Sponsorship`, `Brand Deal`, `Publishing`, `Licensing`, `Sync`, `Management`, `New Business`. |
| Deal Value | Financiële waarde of bandbreedte van de kans/deal. | Bedrag of range; financiële waarheid blijft Moneybird. |
| Priority | Prioriteit voor planning en routing. | `Low`, `Normal`, `High`, `Urgent`. |
| Due Date | Deadline voor de eerstvolgende concrete actie of oplevering. | Datum in ClickUp. |
| Source Link | Link naar GitHub-, SOP-, playbook- of brondocument. | URL. |
| Drive Link | Link naar relevante Google Drive-map of bestand. | URL. |
| Gmail Link | Link naar relevante Gmail-thread of verzonden concept. | URL. |
| Moneybird Link | Link naar relevante Moneybird-factuur, contact, bon, betaling of rapportage. | URL; verplicht bij finance-taken. |

## Folder: PIPELINE

### Doel

`PIPELINE` is de commerciële voorkant van CUSTOMMADE AGENCY. Deze folder beheert nieuwe zakelijke kansen, partnerships, sponsorships, brand deals, product placement, sampling, event activaties, endorsements, renewals, upsells, proposals en leadopvolging voordat ze overgaan naar clientdelivery, legal review, finance follow-up of marketingactivatie.

### Eigenaar-agent

- CM PROSPECT AGENT

### Ondersteunende agents

- CM CONTROL AGENT voor prioriteit, routing en commerciële escalaties.
- CM OPS AGENT voor haalbaarheid, capaciteit, planning en overdracht naar delivery.
- CM LEGAL AGENT voor dealvoorwaarden, contractrisico's, NDA's en legal review.
- CM MONEY AGENT voor waarde-inschatting, facturatie-impact, betaalcondities en financiële risico's.
- CM SOCIAL AGENT voor pitchmateriaal, cases, zichtbaarheid en contentkansen.
- CM VAULT AGENT voor proposal templates, case studies en bronmateriaal.

### Lists

- `Leads & Prospects`
- `Partnerships`
- `Sponsorships`
- `Brand Deals`
- `New Business Proposals`
- `Renewals & Upsells`
- `Commercial Follow-up`

### Statussen

- `Lead captured`
- `Fit check`
- `Research`
- `Outreach ready`
- `Contacted`
- `Follow-up`
- `Meeting planned`
- `Proposal needed`
- `Proposal sent`
- `Negotiation`
- `Approval needed`
- `Won`
- `Lost`
- `Parked`
- `Handoff to CLIENTS`
- `Handoff to DEAL DESK`
- `Blocked`

### Custom fields

Gebruik alle globale custom fields, met extra aandacht voor:

- `Agent Owner`
- `Client`
- `Artist`
- `Deal Type`
- `Deal Value`
- `Priority`
- `Approval Required`
- `Approval Status`
- `Sophia Approval`
- `Source Link`
- `Drive Link`
- `Gmail Link`

### Approval gates

- Sophia approval vóór commerciële toezeggingen, finale proposals, prijsafspraken, exclusiviteit, budgetcommitments of strategische partnershipbesluiten.
- CM CONTROL AGENT approval bij prioriteitswijzigingen, onduidelijk eigenaarschap, reputatierisico of afwijking van standaardproces.
- CM LEGAL AGENT review vóór NDA, contracttaal, rights language of bindende dealvoorwaarden.
- CM MONEY AGENT check vóór dealwaarde, betalingsstructuur, facturatie-afspraak of financiële commitment extern wordt gedeeld.

### Handoff triggers

- Naar `CLIENTS`: kans is `Won`, delivery moet starten, onboarding is nodig of bestaande client/artist krijgt uitvoeringstaken.
- Naar `DEAL DESK`: contract, NDA, legal review, rights review, publishing, licensing, sync of dealonderhandeling is nodig.
- Naar `OPERATIONS`: facturatie, Moneybird-opvolging, planningblokkade, governancevraag, approval issue of systeemproces is nodig.
- Naar `MARKETING`: case study, social proof, pitch deck, websitevermelding, persmoment of contentactivatie is nodig.

## Folder: CLIENTS

### Doel

`CLIENTS` is de uitvoeringsfolder voor actieve klanten, artists en projecten. Deze folder beheert onboarding, artist management, client management, projectplanning, deliverables, releases, maandelijkse managementcycli, roadmaps, meeting follow-up en operationele uitvoering.

### Eigenaar-agent

- CM OPS AGENT

### Ondersteunende agents

- CM CONTROL AGENT voor prioriteit, scopewijzigingen en escalaties.
- CM PROSPECT AGENT voor commerciële context, upsells en renewals.
- CM LEGAL AGENT voor contracten, rechten, obligations en dealvoorwaarden.
- CM MONEY AGENT voor facturatiecontext, open posten, revenue share, commission tracking en financiële blokkades.
- CM SOCIAL AGENT voor content, releasecommunicatie, public-facing assets en marketingtaken.
- CM VAULT AGENT voor templates, Drive-structuur, SOP's en documentbeheer.
- CM FLOW AGENT voor ClickUp automatiseringen, document synchronisatie en integraties.

### Lists

- `Client Onboarding`
- `Artist Onboarding`
- `Active Client Management`
- `Artist Roadmaps`
- `Projects & Deliverables`
- `Releases`
- `Monthly Management`
- `Client Meetings & Follow-up`
- `Offboarding`

### Statussen

- `Intake`
- `Inputs verzamelen`
- `Planning`
- `In uitvoering`
- `Internal review`
- `Client review`
- `Artist approval needed`
- `Sophia approval needed`
- `Revisions`
- `Approved`
- `Ready for handoff`
- `Completed`
- `On hold`
- `Blocked`
- `Escalated`

### Custom fields

Gebruik alle globale custom fields, met extra aandacht voor:

- `Agent Owner`
- `Client`
- `Artist`
- `Autonomy Level`
- `Approval Required`
- `Approval Status`
- `Sophia Approval`
- `Priority`
- `Due Date`
- `Drive Link`
- `Gmail Link`
- `Source Link`
- `Moneybird Link` bij facturatie- of finance-afhankelijke delivery.

### Approval gates

- Client of artist approval vóór public-facing deliverables, roadmapprioriteiten, releasecommitments, scopewijzigingen of budgetimpact.
- Sophia approval bij externe commitments, strategische keuzes, reputatierisico, budgetcommitments of conflicten.
- CM CONTROL AGENT approval bij scope-, planning-, prioriteits- of eigenaarschapswijziging.
- CM LEGAL AGENT review bij contractuele obligations, rights claims, licensing, sync, publishing of juridische interpretatie.
- CM MONEY AGENT check bij facturatieafhankelijkheden, open posten, revenue share, commission tracking of financiële blokkades.

### Handoff triggers

- Naar `PIPELINE`: renewal, upsell, partnership opportunity, sponsorship, brand deal of nieuwe zakelijke kans ontstaat.
- Naar `DEAL DESK`: contractreview, rights issue, legal approval, dealonderhandeling of obligations tracker nodig is.
- Naar `OPERATIONS`: facturatie, open posten, planningblokkade, governancevraag, systeemissue of approval-escalatie nodig is.
- Naar `MARKETING`: content, website update, SEO, persbericht, media outreach, social planning of releasecommunicatie nodig is.

## Folder: OPERATIONS

### Doel

`OPERATIONS` is de centrale map voor interne operatie, governance, approvals, escalaties, flow issues, systeemprocessen, finance-uitvoering en Moneybird-opvolging. Deze folder bewaakt dat werk door de juiste agent wordt uitgevoerd, dat blockers zichtbaar zijn en dat Money-acties in ClickUp worden opgevolgd zonder Moneybird als financiële waarheid te vervangen.

### Eigenaar-agent

- CM CONTROL AGENT

### Ondersteunende agents

- CM OPS AGENT voor planning, deliverycoördinatie, Gmail-templates en operationele uitvoering.
- CM MONEY AGENT voor Moneybird, BTW, open posten, cashflow, facturatie-opvolging, betaalstatussen, revenue share en commission tracking.
- CM FLOW AGENT voor ClickUp automations, Make, integraties, systeemgezondheid, webhooks en document synchronisatie.
- CM VAULT AGENT voor SOP's, templates, kennisbank, Drive-structuur en archivering.
- Betreffende eigenaar-agent voor inhoudelijke input bij escalaties.

### Lists

- `Governance & Approvals`
- `Escalations`
- `Flow Issues`
- `ClickUp & Automation Issues`
- `Moneybird Follow-up`
- `Invoices & Open Items`
- `Cashflow Signals`
- `SOP & Template Updates`
- `Internal Planning`

### Statussen

- `New`
- `Triage`
- `Owner assigned`
- `Waiting for input`
- `Approval requested`
- `Sophia approval needed`
- `In progress`
- `Blocked`
- `Escalated`
- `Resolved`
- `Documented`
- `Closed`

### Custom fields

Gebruik alle globale custom fields, met extra aandacht voor:

- `Agent Owner`
- `Autonomy Level`
- `Approval Required`
- `Approval Status`
- `Sophia Approval`
- `Priority`
- `Due Date`
- `Source Link`
- `Drive Link`
- `Gmail Link`
- `Moneybird Link` voor alle Moneybird-, factuur-, BTW-, open posten-, cashflow- en betaalstatusacties.

### Approval gates

- Sophia approval bij strategische keuzes, financiële commitments, externe commitments, escalaties met reputatie- of businessimpact en uitzonderingen op standaardproces.
- CM CONTROL AGENT approval bij routingwijzigingen, governance-impact, prioriteitswijzigingen, ownership-conflict, systeemrisico of proceswijziging.
- CM MONEY AGENT controle vóór finance-opvolging extern wordt gecommuniceerd of financiële conclusies worden gebruikt; Moneybird blijft leidend.
- CM FLOW AGENT test en CM CONTROL AGENT akkoord vóór automatiseringen data wijzigen, statussen routeren of externe systemen koppelen.
- CM VAULT AGENT bewaakt documentatie en archivering; VAULT verwijdert geen bronnen.

### Handoff triggers

- Naar `PIPELINE`: operationele of financiële signalen leiden tot renewal, upsell, partnership, sponsorship, brand deal of new business opportunity.
- Naar `CLIENTS`: operationele beslissing, approval of blocker is opgelost en clientdelivery kan verder.
- Naar `DEAL DESK`: legal issue, contractvraag, rights conflict, payment term met contractimpact of dealvoorwaarde moet worden beoordeeld.
- Naar `MARKETING`: governance-approved content, public update, case study, reputatiecommunicatie of website-/SEO-taak moet worden uitgevoerd.

## Folder: DEAL DESK

### Doel

`DEAL DESK` is de folder voor legal, deals, contracten, rights, deal reviews, NDA's, publishing, licensing, sync, management agreements, sponsorship-contracten, catalog acquisitions, brokerage en obligations. Deze folder centraliseert juridische en dealmatige besluitvorming zonder een nieuwe agent aan te maken.

### Eigenaar-agent

- CM LEGAL AGENT

### Ondersteunende agents

- CM PROSPECT AGENT voor commerciële context, pipelinefase, counterparties en proposalhistorie.
- CM MONEY AGENT voor dealwaarde, betalingsvoorwaarden, facturatie-impact, revenue share, commission tracking en financiële risico's.
- CM OPS AGENT voor delivery-impact, obligations, planning en client/artistcontext.
- CM CONTROL AGENT voor risk escalation, prioriteit en governance.
- CM VAULT AGENT voor contract templates, archief, Drive-structuur en bronbeheer.
- CM SOCIAL AGENT bij publiciteit, reputatie, usage rights, media of brand-safety impact.

### Lists

- `Deal Intake`
- `NDA & Confidentiality`
- `Contract Review`
- `Rights Review`
- `Publishing & Licensing`
- `Sync Deals`
- `Sponsorship & Brand Deal Legal`
- `Management Agreements`
- `Catalog Acquisitions`
- `Obligations Tracker`

### Statussen

- `Intake`
- `Scope check`
- `Documents requested`
- `Under review`
- `Red flags identified`
- `Business position needed`
- `Counsel review`
- `Negotiation`
- `Approval needed`
- `Sophia approval needed`
- `Ready to sign`
- `Signed`
- `Obligations active`
- `Closed`
- `Rejected / parked`
- `Blocked`

### Custom fields

Gebruik alle globale custom fields, met extra aandacht voor:

- `Agent Owner`
- `Client`
- `Artist`
- `Deal Type`
- `Deal Value`
- `Approval Required`
- `Approval Status`
- `Sophia Approval`
- `Priority`
- `Due Date`
- `Source Link`
- `Drive Link`
- `Gmail Link`
- `Moneybird Link` wanneer betalingsvoorwaarden, facturatie, revenue share of commission tracking relevant zijn.

### Approval gates

- Sophia approval vóór ondertekening, rights transfer, exclusiviteit, afwijkende commerciële voorwaarden, high-risk legal positions, catalog acquisitions of materiële commitments.
- CM LEGAL AGENT review vóór juridische interpretatie extern wordt gedeeld of contracttaal wordt geaccepteerd.
- CM MONEY AGENT check bij dealwaarde, betaaltermijnen, revenue share, commission, success fee, cashflow-impact of facturatievoorwaarden.
- CM CONTROL AGENT approval bij governance-impact, conflicts, escalaties of onduidelijke owner.
- Client/artist approval waar deal authority, usage rights, deliverables, exclusivity, budget of public commitments de client/artist raken.

### Handoff triggers

- Naar `PIPELINE`: deal is commercieel nog niet rijp, extra outreach/onderhandeling of proposalwerk is nodig.
- Naar `CLIENTS`: deal is signed of obligations zijn actief en moeten in delivery, roadmap, releaseplanning of clientmanagement landen.
- Naar `OPERATIONS`: facturatie, Moneybird-link, open posten, governance-escalatie, approval logging of systeemproces nodig is.
- Naar `MARKETING`: deal bevat publicatie, announcement, press, websitevermelding, media outreach, usage rights of contentdeliverables.

## Folder: MARKETING

### Doel

`MARKETING` is de folder voor alle zichtbare communicatie en groeicontent van CUSTOMMADE AGENCY. Deze folder beheert content, social media, website, SEO, persberichten, media outreach, thought leadership, case studies, newsletters, campaign assets en public-facing communicatie.

### Eigenaar-agent

- CM SOCIAL AGENT

### Ondersteunende agents

- CM CONTROL AGENT voor reputatierisico, prioriteit, routing en publicatie-approval.
- CM OPS AGENT voor client/artistcontext, planning en delivery-afstemming.
- CM PROSPECT AGENT voor commerciële invalshoeken, lead magnets, partnershipcontext en sales enablement.
- CM LEGAL AGENT voor claims, rights, usage, contractuele beperkingen en gevoelige externe communicatie.
- CM MONEY AGENT bij financiële claims, bedragen, performanceclaims of revenue-gerelateerde content.
- CM VAULT AGENT voor brand assets, templates, cases en archivering.
- CM FLOW AGENT voor websiteprocessen, SEO tooling, publicatie-automations en integraties.

### Lists

- `Content Calendar`
- `Social Media`
- `Website Updates`
- `SEO`
- `Press Releases`
- `Media Outreach`
- `Case Studies`
- `Newsletter`
- `Campaign Assets`

### Statussen

- `Idea`
- `Brief`
- `Research`
- `Draft`
- `Internal review`
- `Legal review needed`
- `Client / artist approval needed`
- `Sophia approval needed`
- `Approved`
- `Scheduled`
- `Published`
- `Reported`
- `Archived`
- `Blocked`

### Custom fields

Gebruik alle globale custom fields, met extra aandacht voor:

- `Agent Owner`
- `Client`
- `Artist`
- `Approval Required`
- `Approval Status`
- `Sophia Approval`
- `Priority`
- `Due Date`
- `Source Link`
- `Drive Link`
- `Gmail Link`
- `Deal Type` bij partnership-, sponsorship-, brand deal- of campaigncontent.
- `Moneybird Link` alleen wanneer financiële claims of finance-evidence relevant zijn.

### Approval gates

- Menselijke approval vóór iedere publicatie, verzending, websitewijziging, persbenadering of extern zichtbare communicatie.
- Sophia approval bij reputatierisico, strategische messaging, gevoelige clients/artists, persberichten, media outreach of claims met businessimpact.
- CM LEGAL AGENT review bij rights, quotes, claims, contractuele beperkingen, NDA's, usage rights of juridische gevoeligheid.
- CM CONTROL AGENT approval bij strategische contentwijzigingen, escalaties, crisiscommunicatie of publicatie buiten standaardcadans.
- Client/artist approval vóór publicatie van client-/artist-specifieke content, cases, beelden, quotes of releasecommunicatie.

### Handoff triggers

- Naar `PIPELINE`: content genereert lead, partnershipkans, sponsorship, brand deal, media opportunity of new business follow-up.
- Naar `CLIENTS`: content vraagt client/artist input, releaseplanning, deliverables, approval of operationele opvolging.
- Naar `DEAL DESK`: legal review, rights clearance, usage restriction, quote approval, claim check of contractuele beperking nodig is.
- Naar `OPERATIONS`: approval logging, governance-escalatie, publicatieproces, website/SEO automation, reporting issue of systeemblokkade nodig is.
