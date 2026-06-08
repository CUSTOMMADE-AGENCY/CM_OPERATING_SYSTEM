# ClickUp Mapping voor CM Workflows

## Doel

Dit document vertaalt elke CM GitHub Workflow naar de exacte ClickUp execution structure. Gebruik dit document om ClickUp Spaces, Lists, taaktemplates, statussen, subtaken, approvals, Google Drive-mappen en Gmail templates te bouwen zonder interpretatie.

## Core rule

GitHub documenteert het proces. ClickUp voert het proces uit. Google Drive bewaart client files en deliverables. Gmail verzorgt communicatie.

## Terminologie en naamgeving

- Gebruik CM-terminologie zoals vastgelegd in `docs/00_governance/CM_TERMINOLOGY_STANDARD.md`.
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

De praktische ClickUp task templates voor Artist Management staan in `docs/04_systems/CLICKUP_TEMPLATES/`. Deze documenten zijn de bouwinstructies voor taken, custom fields, subtasks, checklists, approval owners, GitHub workflow-links, Drive folders en Gmail templates.

# Artist Management mappings

## Artist Onboarding Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_ONBOARDING_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/01_ARTIST_ONBOARDING_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Artist Onboarding` |
| Task template name | `CM - Artist Management - Artist Onboarding Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/ARTIST_ONBOARDING_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Workspace setup`, `Ready for Monthly Management` |
| Required subtasks | Engagement basis bevestigen; Google Drive-clientmap aanmaken; artistinformatie en Assets verzamelen; intakegesprek plannen; rollen en approvals vastleggen; eerste artist roadmap bouwen; execution backlog aanmaken; Onboarding summary versturen; Monthly Management Flow-startpunt aanmaken |
| Approval owner | Artist manager voor operationele inrichting; artist of aangewezen decision owner voor Scope, budget, public commitments en eerste artist roadmap |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/01_ADMIN` en `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Onboarding Welcome`; `CM - Artist Management - Input Request`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved Onboarding summary staat in Drive; Google Drive-clientmap en ClickUp execution backlog zijn ingericht; team roster, approval matrix, open inputs list, decision log en risk log zijn ingevuld; eerste artist roadmap is approved of als blocker gelogd; eerste Monthly Management taak is aangemaakt |

## Brand Audit Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/BRAND_AUDIT_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/02_BRAND_AUDIT_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Brand Audit` |
| Task template name | `CM - Artist Management - Brand Audit Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/BRAND_AUDIT_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Findings opgesteld`, `Action list klaar` |
| Required subtasks | Audit brief bevestigen; materialen verzamelen; positioning en story reviewen; visuele identiteit reviewen; content en platform presence reviewen; commercial en partner fit reviewen; gaps en risico's identificeren; verbeteracties prioriteren; Brand Audit-memo finaliseren |
| Approval owner | CM strategy lead voor auditkwaliteit; artist voor public-facing recommendations en prioriteiten |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Input Request`; `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Brand Audit Delivery`; `CM - Artist Management - Approval Request` |
| Completion criteria | Brand Audit-memo, gaps/risk overview, prioritized action list en Asset refresh recommendations staan in Drive; high-priority actions hebben owner, due date en next action in ClickUp; artist heeft public-facing recommendations reviewed; input voor Brandbook, Release Strategy of artist roadmap is overgedragen |

## Artist Brandbook Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_BRANDBOOK_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Brandbook` |
| Task template name | `CM - Artist Management - Artist Brandbook Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/ARTIST_BRANDBOOK_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Discovery`, `Draft strategic direction`, `Draft visual direction`, `Distributed` |
| Required subtasks | Brandbook brief bevestigen; source materials organiseren; artist/stakeholder discovery uitvoeren; artist positioning draften; artist story draften; tone of voice definiëren; visual identity guidance maken; content pillars maken; collaboration and partner use rules vastleggen; interne review uitvoeren; artist review verwerken; final approval vastleggen; approved Brandbook distribueren en reviewmoment plannen |
| Approval owner | CM strategy lead voor Brandbook-Workflow; artist voor final approval en usage restrictions |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Input Request`; `CM - Artist Management - Brandbook Review`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved Brandbook, messaging toolkit, visual direction guide, content pillars, do/don't list en usage notes staan in Drive; artist approval, version, intended users en restrictions zijn schriftelijk vastgelegd; distribution list is bijgewerkt; maintenance/review task is aangemaakt |

## Artist Roadmap Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/04_ARTIST_ROADMAP_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Artist Roadmap` |
| Task template name | `CM - Artist Management - Artist Roadmap Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/ARTIST_ROADMAP_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Roadmap horizon bevestigd`, `Workstreams gedefinieerd`, `Backlog`, `Active priority` |
| Required subtasks | Roadmap horizon bevestigen; workstreams definiëren; outcomes prioriteren; owners en deadlines vastleggen; roadmap aan ClickUp koppelen; risks en assumptions reviewen; approvals bevestigen; monthly cadence koppelen; roadmap-versies archiveren |
| Approval owner | Artist manager voor roadmapstructuur; artist of aangewezen decision owner voor priorities, budget, Scope changes en strategic decisions |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY` |
| Gmail templates used | `CM - Artist Management - Roadmap Approval`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved artist roadmap staat in Drive; alle active priorities hebben owner, due date, dependency en next action in ClickUp; backlog is gescheiden van active priority; risks, Scope changes en budgetvragen zijn approved, geparkeerd of geëscaleerd; monthly review task is gekoppeld |

## Release Strategy Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/RELEASE_STRATEGY_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/05_RELEASE_STRATEGY_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Release Strategy - [Release Name]` |
| Task template name | `CM - Artist Management - Release Strategy Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/RELEASE_STRATEGY_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Release intake`, `Campaign planning`, `Launch readiness`, `Post-release review` |
| Required subtasks | Release Scope en objective bevestigen; release inputs verzamelen; audience, positioning en messaging bepalen; timeline en milestones bouwen; channel owners vastleggen; budget en approvals checken; release checklist uitvoeren; launch readiness review plannen; go/no-go bevestigen; post-release results en learnings reviewen |
| Approval owner | Release manager of artist manager voor planning; artist voor messaging, budget, release commitments en go/no-go |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/04_RELEASES/[Release Name]` |
| Gmail templates used | `CM - Artist Management - Release Strategy Approval`; `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Release Strategy, timeline, release checklist, approved messaging, owner matrix en post-release review staan in Drive; go/no-go en launch approvals zijn schriftelijk bevestigd; campaign tasks zijn in ClickUp afgerond of overgedragen; learnings zijn toegevoegd aan artist roadmap |

## Monthly Management Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Monthly Management - [YYYY-MM]` |
| Task template name | `CM - Artist Management - Monthly Management Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/MONTHLY_MANAGEMENT_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Preparation`, `Monthly review`, `Follow-up`, `Escalated` |
| Required subtasks | Vorige maand reviewen; completed work en missed deadlines bevestigen; actieve workstreams reviewen; artist goals en constraints reviewen; rights, royalties en deals reviewen; budget en commercial items reviewen; prioriteiten voor volgende maand bevestigen; ClickUp owners, dates, dependencies en statuses bijwerken; monthly summary versturen; evidence en approvals archiveren |
| Approval owner | Artist manager voor monthly cycle; artist of aangewezen decision owner voor prioriteiten, budgetten, public commitments en strategic decisions |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/03_STRATEGY/[YYYY-MM]` |
| Gmail templates used | `CM - Artist Management - Meeting Agenda`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Monthly Summary`; `CM - Artist Management - Approval Request` |
| Completion criteria | Monthly management summary, decision log, risk/escalation log en updated artist roadmap staan in Drive; elke priority heeft owner, due date en next action; decisions zijn schriftelijk bevestigd; overdue en blocked items hebben escalatiepad; Scope changes zijn approved voordat execution start |

## Deal Negotiation Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/DEAL_NEGOTIATION_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/07_DEAL_NEGOTIATION_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Deal Negotiation - [Counterparty / Deal]` |
| Task template name | `CM - Artist Management - Deal Negotiation Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/DEAL_NEGOTIATION_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Opportunity registered`, `Fit Check`, `Counsel review`, `Negotiation`, `Obligations active`, `Declined` |
| Required subtasks | Opportunity registreren; Fit Check uitvoeren; deal inputs verzamelen; red flags identificeren; negotiation position bepalen; legal en specialist review coördineren; negotiation tracker bijwerken; material terms documenteren; final approval bevestigen; final documents archiveren; obligations tracker activeren |
| Approval owner | Artist voor deal authority en final approval; counsel voor juridische review wanneer rights transfer, legal risk of signature speelt; artist manager voor coordination |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/02_CONTRACT/[Deal Name]` |
| Gmail templates used | `CM - Artist Management - Deal Terms Approval`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Approved deal memo of negotiation close-out staat in Drive; material terms, red flags en final approval zijn schriftelijk vastgelegd; obligations en deadlines staan in ClickUp; artist roadmap is bijgewerkt; finance, legal, rights, release, marketing of partnership follow-up is toegewezen |

## Brand Partnership Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/BRAND_PARTNERSHIP_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/08_BRAND_PARTNERSHIP_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Brand Partnership - [Brand]` |
| Task template name | `CM - Artist Management - Brand Partnership Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/BRAND_PARTNERSHIP_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Lead registered`, `Partnership Fit Check`, `Negotiation`, `Execution`, `Proof of performance`, `Declined / parked` |
| Required subtasks | Lead in Pipeline registreren; partnership Fit Check uitvoeren; restrictions en conflicts checken; partnership concept definiëren; commercial terms bepalen; negotiation en legal review coördineren; artist approval verkrijgen; execution checklist aanmaken; deliverables volgen; reporting/proof of performance package opleveren; partnership evalueren |
| Approval owner | Artist voor brand fit, deliverables, usage, exclusivity en final approval; artist manager of brand partnership lead voor commercial coordination; counsel bij legal/signature risk |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/05_BOOKING/[Brand]` |
| Gmail templates used | `CM - Artist Management - Brand Partnership Approval`; `CM - Artist Management - Approval Request`; `CM - Artist Management - Meeting Recap` |
| Completion criteria | Approved partnership deal of declined opportunity record staat in Drive; Pipeline en artist roadmap zijn bijgewerkt; usage rights, exclusivity, deliverables, payment en reporting follow-up zijn schriftelijk bevestigd; execution tasks zijn afgerond; proof of performance en learnings zijn opgeslagen |

## Artist Offboarding Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/02_ARTIST_MANAGEMENT/ARTIST_OFFBOARDING_FLOW.md` stable link; inhoudelijke bron `docs/02_ARTIST_MANAGEMENT/09_ARTIST_OFFBOARDING_FLOW.md` |
| Business lane | Artist Management |
| ClickUp Space | `Artist Management Clients` |
| ClickUp List | `AM - [Artist Name] - Artist Offboarding` |
| Task template name | `CM - Artist Management - Artist Offboarding Flow` |
| ClickUp template document | `docs/04_systems/CLICKUP_TEMPLATES/ARTIST_OFFBOARDING_TEMPLATE.md` |
| Required statuses | Artist Management statusset + `Offboarding trigger`, `Close-out`, `Handover`, `Access review`, `Archived`, `Escalated` |
| Required subtasks | Offboarding trigger bevestigen; agreement en obligations reviewen; close-out task list maken; deliverables afsluiten; open workstreams reviewen; handover package voorbereiden; access en confidentiality reviewen; final summary versturen; Success Fee triggers en open invoices checken; internal lessons learned vastleggen; workspace archiveren |
| Approval owner | Artist manager voor close-out execution; CM leadership bij conflict, legal exposure, Success Fee of unresolved obligations; artist of decision owner voor handover acceptance |
| Linked Drive folder | `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[Artist Name]/09_ARCHIVE/Offboarding` |
| Gmail templates used | `CM - Artist Management - Offboarding Summary`; `CM - Artist Management - Meeting Recap`; `CM - Artist Management - Approval Request` |
| Completion criteria | Final close-out summary, handover package, updated deliverables register, open obligations list en access review record staan in Drive; alle deliverables zijn completed, transferred, blocked of out-of-Scope gemarkeerd; access is reviewed per einddatum; unresolved issues hebben escalation record; client/Pipeline status is bijgewerkt |

---

# Master Boutique mappings

## Catalog Acquisition Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; dealflow bron `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Catalog Acquisition` |
| Task template name | `CM - Master Boutique - Catalog Acquisition Flow` |
| Required statuses | Master Boutique statusset + `Asset intake`, `Rights review`, `Financial review`, `Valuation`, `Buyer targeting`, `LOI phase`, `Due Diligence`, `APA phase` |
| Required subtasks | Asset intake afronden; repertoirelijst verzamelen; rights review uitvoeren; financial review en revenue reconciliation uitvoeren; valuation low/base/high cases maken; deal thesis opstellen; Buyer target list maken; Data Room-plan bouwen; teaser/process letter voorbereiden; LOI comparison voorbereiden; Diligence issue list openen; APA issue list openen; closing binder voorbereiden |
| Approval owner | CM deal lead voor proceskwaliteit; Seller of buyer principal voor commerciële besluiten; counsel voor legal transfer, consents en APA; finance/royalty analyst voor revenue evidence |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/00_Intake`, `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/01_Valuation`, `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/02_Data_Room` |
| Gmail templates used | `CM - Master Boutique - Seller Intake`; `CM - Master Boutique - Buyer Outreach Intro`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - LOI Request` |
| Completion criteria | Asset perimeter memo, rights review memo, financial review workbook, valuation memo, Buyer target list, Data Room-plan en go/no-go decision staan in Drive; elke fase heeft owner, deadline en next action in ClickUp; unresolved rights/data issues zijn gelogd; confidential outreach start pas na approved thesis en disclosure-plan |

## Buyer Outreach Flow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md`; aanvullend Playbook `docs/06_PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Buyer Outreach` |
| Task template name | `CM - Master Boutique - Buyer Outreach Flow` |
| Required statuses | Master Boutique statusset + `Buyer shortlist`, `Teaser sent`, `NDA sent`, `NDA signed`, `Process letter sent`, `Offer received`, `No response`, `Declined` |
| Required subtasks | Buyer universe definiëren; Buyer shortlist goedkeuren; teaser en outreach copy controleren; outreach batch aanmaken; NDA uitsturen; follow-up cadans plannen; Buyer responses loggen; Buyer qualification taak openen; process letter delen na approval; biedingen centraal vastleggen; offer comparison memo bijwerken |
| Approval owner | CM deal lead voor outreach control; Seller of decision owner voor Buyer shortlist en disclosure approval; counsel voor NDA/procesvoorwaarden |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/03_Buyer_Outreach` |
| Gmail templates used | `CM - Master Boutique - Buyer Outreach Intro`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - Buyer Qualification Request`; `CM - Master Boutique - LOI Request` |
| Completion criteria | Buyer shortlist, outreach tracker, NDA status, response log en offer comparison staan in Drive of ClickUp; geen confidential information is gedeeld zonder NDA/approval; iedere Buyer heeft status, owner, next action en laatste contactdatum; Seller heeft material buyer interactions en biedingen reviewed |

## Buyer Qualification Model

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/BUYER_QUALIFICATION_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Buyer Qualification` |
| Task template name | `CM - Master Boutique - Buyer Qualification Model` |
| Required statuses | Master Boutique statusset + `Qualified`, `Conditional`, `Disqualified`, `Needs more info` |
| Required subtasks | Buyer profile aanmaken; strategic fit beoordelen; financial capacity beoordelen; rights/repertoire appetite beoordelen; execution reliability beoordelen; confidentiality discipline beoordelen; approval en funding route bevestigen; red flags loggen; qualification decision vastleggen; Data Room access level aanbevelen |
| Approval owner | CM deal lead voor qualification decision; Seller of decision owner voor doorgaan met Buyer; counsel bij confidentiality, sanctions, legal of funding concerns |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/03_Buyer_Outreach/Buyer_Qualification` |
| Gmail templates used | `CM - Master Boutique - Buyer Qualification Request`; `CM - Master Boutique - NDA Follow Up`; `CM - Master Boutique - Data Room Access Granted` |
| Completion criteria | Elke Buyer heeft score/decision, rationale, red flags, approved next action en Data Room access recommendation; disqualified Buyers krijgen geen toegang tot confidential materials; conditional Buyers hebben concrete ontbrekende inputs met deadline |

## Data Room Access Model

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/DATA_ROOM_ACCESS_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Data Room Access` |
| Task template name | `CM - Master Boutique - Data Room Access Model` |
| Required statuses | Master Boutique statusset + `Access requested`, `NDA verified`, `Level approved`, `Access granted`, `Access changed`, `Access revoked`, `Access audit` |
| Required subtasks | NDA en Buyer qualification controleren; access level bepalen; folder permissions voorbereiden; access approval vastleggen; Data Room access verlenen; toegang en datum loggen; Q&A-log koppelen; sensitive document requests reviewen; access audit uitvoeren; access intrekken bij reject, closing of procespauze |
| Approval owner | CM deal lead voor access control; Seller of decision owner voor Level 2/3 access; counsel voor zeer gevoelige juridische, fiscale of closing-documenten |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/02_Data_Room` met subfolders `Level_1`, `Level_2`, `Level_3`, `Q&A_Log` |
| Gmail templates used | `CM - Master Boutique - Data Room Access Granted`; `CM - Master Boutique - Data Room Access Revoked`; `CM - Master Boutique - NDA Follow Up` |
| Completion criteria | Access log bevat Buyer, NDA status, access level, approved by, granted date, revoked date en restrictions; alle Level 2/3 requests hebben approval evidence; Q&A en sensitive document requests zijn centraal gelogd; access is ingetrokken wanneer Buyer niet meer actief is |

## LOI Workflow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/05_KNOWLEDGE_BASE/LOI_GUIDE.md`; procesbron `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - LOI Workflow` |
| Task template name | `CM - Master Boutique - LOI Workflow` |
| Required statuses | Master Boutique statusset + `LOI requested`, `LOI received`, `LOI review`, `Counter comments`, `Client decision`, `Accepted`, `Rejected`, `Moved to APA` |
| Required subtasks | LOI request format versturen; received LOI uploaden; price, Assets, structure, exclusivity, diligence Scope, closing conditions, holdback, earnout, approvals, costs en binding language reviewen; LOI comparison maken; red flags en trade-offs markeren; client recommendation opstellen; counsel review coördineren; accepted/rejected decision vastleggen; Due Diligence en APA tasks openen |
| Approval owner | Seller/buyer principal of decision owner voor accept/reject; CM deal lead voor commercial recommendation; counsel voor legal/binding language en exclusivity |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/04_LOI` |
| Gmail templates used | `CM - Master Boutique - LOI Request`; `CM - Master Boutique - LOI Review Summary`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Alle LOI's staan in Drive; LOI comparison bevat prijs, structuur, voorwaarden, exclusiviteit, diligence burden en closing certainty; client decision is schriftelijk vastgelegd; accepted LOI heeft follow-up taken voor Due Diligence, APA, Data Room access en closing timeline |

## APA Negotiation Playbook

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md`; kennisbron `docs/05_KNOWLEDGE_BASE/APA_GUIDE.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - APA Negotiation` |
| Task template name | `CM - Master Boutique - APA Negotiation Playbook` |
| Required statuses | Master Boutique statusset + `APA drafting`, `Issue log open`, `Counsel review`, `Business position needed`, `Signing readiness`, `Signed`, `Moved to Closing` |
| Required subtasks | APA business-point checklist maken; issue log openen; deal economics en purchase price mechanics reviewen; Asset schedules reviewen; Due Diligence-issues toewijzen; disclosure schedule inputs verzamelen; approved negotiation positions vastleggen; counsel comments coördineren; consents, notices en closing deliverables volgen; signing readiness controleren; post-closing obligations tracker maken |
| Approval owner | Deal lead voor issue log en client alignment; client/decision owner voor materiële businessposities; counsel voor drafting en legal advice |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/05_APA_Negotiation` |
| Gmail templates used | `CM - Master Boutique - APA Issue Update`; `CM - Master Boutique - Closing Checklist`; `CM - Master Boutique - LOI Review Summary` |
| Completion criteria | APA business-point checklist, issue log, approved negotiation positions, closing checklist en post-closing obligations tracker staan in Drive/ClickUp; geen material issue mist owner, status en next action; signing readiness is bevestigd op APA, schedules, approvals, funds flow, signatures en blockers |

## Closing Workflow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; APA-bron `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md`; sell-side bron `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Closing` |
| Task template name | `CM - Master Boutique - Closing Workflow` |
| Required statuses | Master Boutique statusset + `Closing checklist open`, `Funds flow pending`, `Signatures pending`, `Consents / notices pending`, `Closed`, `Post-closing handoff` |
| Required subtasks | Closing checklist finaliseren; final APA en schedules controleren; payment/funds flow instructions bevestigen; signatures en approvals volgen; assignments voorbereiden; consents en notices volgen; access transfers voorbereiden; closing binder samenstellen; closing confirmation versturen; post-closing obligations, royalty redirection en reporting follow-up aanmaken; lessons learned vastleggen |
| Approval owner | Client/decision owner voor final close; counsel voor legal closing deliverables; CM deal lead voor checklist, handoff en evidence; finance/tax advisor voor payment mechanics waar relevant |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/06_Closing` en `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/07_Post_Closing` |
| Gmail templates used | `CM - Master Boutique - Closing Checklist`; `CM - Master Boutique - Closing Confirmation`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Signed documents, closing checklist, funds flow evidence, assignments, notices, access transfer proof en closing binder staan in Drive; post-closing obligations hebben owner en due date in ClickUp; deal status is `Closed`; client heeft closing confirmation ontvangen; geen unresolved closing blockers blijven zonder escalation |

## Success Fee Workflow

| Veld | Mapping |
|---|---|
| GitHub source document | `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md`; commerciële bron `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md`; governance bron `docs/00_governance/CM_OPERATING_MODEL.md` |
| Business lane | Master Boutique |
| ClickUp Space | `Master Boutique Pipeline` |
| ClickUp List | `MB - [Deal / Asset Name] - Success Fee` |
| Task template name | `CM - Master Boutique - Success Fee Workflow` |
| Required statuses | Master Boutique statusset + `Trigger check`, `Calculation`, `Client approval needed`, `Invoice requested`, `Invoice sent`, `Paid`, `Disputed`, `Waived` |
| Required subtasks | Engagement letter/mandaat en Success Fee terms reviewen; fee trigger bepalen; final transaction economics bevestigen; fee calculation maken; supporting evidence verzamelen; internal approval vragen; client approval of notice vastleggen; invoice request naar finance sturen; invoice status volgen; payment confirmation opslaan; dispute/escalation log openen indien nodig; revenue recognition note archiveren |
| Approval owner | CM leadership of deal lead voor fee calculation en enforcement; finance/admin voor invoice; client/decision owner wanneer contractueel approval/notice nodig is; counsel bij dispute of interpretation issue |
| Linked Drive folder | `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS/[Deal Name]/08_Success_Fee` |
| Gmail templates used | `CM - Master Boutique - Success Fee Invoice Request`; `CM - Master Boutique - Closing Confirmation`; `CM - Master Boutique - APA Issue Update` |
| Completion criteria | Success Fee calculation, trigger evidence, approval/notice, invoice request, invoice copy en payment confirmation staan in Drive; ClickUp bevat fee amount, due date, invoice status en owner; disputed of waived fees hebben written rationale en CM leadership approval; deal financial close-out is gemarkeerd als completed |
