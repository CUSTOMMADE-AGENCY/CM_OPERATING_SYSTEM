# 02 Artist Management Map

## Doel en gebruik

Dit document is het entrypoint voor `02_ARTIST_MANAGEMENT`. Gebruik deze map om te bepalen:

- waar een artist zich bevindt in de lifecycle;
- welke Workflow als eerstvolgende wordt uitgevoerd;
- welke SOP's, controls en supporting documenten bij de Workflow horen;
- welke deliverables worden geproduceerd;
- welke ClickUp templates of task-structuren moeten worden aangemaakt.

GitHub bewaart de operating rules, Workflows, SOP's en templates. Client-specifieke uitvoering, statussen, owners, deadlines, approvals, evidence en live registers horen in ClickUp en Google Drive.

## Document review: duplicaten en overlap

### Directe duplicaten

| Duplicaat of legacy document | Primaire bron | Advies | Reden |
|---|---|---|---|
| `ARTIST_BRAND_AUDIT_FLOW.md` | `02_BRAND_AUDIT_FLOW.md` | ARCHIVE na controle | De korte Brand Audit-samenvatting behandelt dezelfde auditgebieden en output als de genummerde Brand Audit Workflow. |
| `ARTIST_BRANDBOOK_FLOW.md` | `03_ARTIST_BRANDBOOK_FLOW.md` | MERGE, daarna ARCHIVE | Beide documenten beschrijven Brandbook-doel, inputs, proces, approval en outputs. De genummerde Workflow is de canonical versie; behoud nuttige Brandbook-section details uit het legacy document alleen als ze ontbreken. |
| `RELEASE_STRATEGY_FLOW.md` | `05_RELEASE_STRATEGY_FLOW.md` | ARCHIVE na controle | De korte release-flow is een samenvatting van de genummerde Release Strategie Workflow. |
| `MONTHLY_MANAGEMENT_FLOW.md` | `06_MONTHLY_MANAGEMENT_FLOW.md` | MERGE, daarna ARCHIVE | Beide documenten beschrijven dezelfde monthly cycle. De genummerde versie is completer; behoud eventuele bruikbare checklist-taal uit het legacy document. |
| `CLOSE_OUT_FLOW.md` | `09_ARTIST_OFFBOARDING_FLOW.md` | ARCHIVE na controle | Close-out is inhoudelijk onderdeel van Offboarding. |

### Overlap groter dan 50%

| Documenten | Overlap | Advies |
|---|---|---|
| `ARTIST_CLIENT_WORKFLOW.md` met `README.md` en dit mapdocument | End-to-end journey, lifecycle en fasevolgorde. | ARCHIVE na adoptie van dit mapdocument; lifecycle-informatie leeft voortaan hier. |
| `ARTIST_INTAKE_FLOW.md` met `01_ARTIST_ONBOARDING_FLOW.md` | Intake, clientcontext, doelen, budget, urgency en start-readiness. | MERGE intake-checklist naar Onboarding of MOVE TO CLICKUP als intake-task template. |
| `DEALS_RIGHTS_FLOW.md` met `07_DEAL_NEGOTIATION_FLOW.md` en `RIGHTS_ROYALTY_AUDIT_FLOW.md` | Opportunity, rights check, next actions, evidence en deal/risk follow-up. | MERGE deal-opportunity delen naar Deal Negotiation; rights audit delen naar Rights Royalty Audit; daarna ARCHIVE. |
| `ARTIST_APPROVAL_MATRIX.md` met meerdere Workflows | Approval owner, written approval en escalation komen terug in Onboarding, Brandbook, Release, Monthly, Deals, Partnerships en Offboarding. | KEEP als global control; live artist approval matrix MOVE TO CLICKUP. |
| `ARTIST_DELIVERABLES_REGISTER.md` met Onboarding, Monthly en Offboarding | Deliverables register, status, evidence en Drive-links. | KEEP als register-definitie; live register MOVE TO CLICKUP. |
| `SCOPE_CREEP_CONTROL.md` met Onboarding, Roadmap, Monthly, Deals en Upsell | Scope classification, approval vóór execution en fee/timing impact. | KEEP als control SOP; voeg ClickUp scope-change task template toe. |
| Kwaliteitschecks, opslag- en repository-hygiëne in korte documenten | Boilerplate-secties zijn grotendeels identiek. | Centraliseer in README of Governance; verwijder duplicatieve boilerplate wanneer legacy documenten worden gearchiveerd. |

### Documentstatus per bestand

| Document | Status | Actie |
|---|---|---|
| `README.md` | KEEP | Houd kort; link naar dit mapdocument als entrypoint. |
| `02_ARTIST_MANAGEMENT_MAP.md` | KEEP | Nieuwe canonical navigatielaag. |
| `01_ARTIST_ONBOARDING_FLOW.md` | KEEP | Canonical onboarding Workflow. |
| `02_BRAND_AUDIT_FLOW.md` | KEEP | Canonical Brand Audit Workflow. |
| `03_ARTIST_BRANDBOOK_FLOW.md` | KEEP | Canonical Brandbook Workflow. |
| `04_ARTIST_ROADMAP_FLOW.md` | KEEP | Canonical roadmap Workflow. |
| `05_RELEASE_STRATEGY_FLOW.md` | KEEP | Canonical release Workflow. |
| `06_MONTHLY_MANAGEMENT_FLOW.md` | KEEP | Canonical monthly management Workflow. |
| `07_DEAL_NEGOTIATION_FLOW.md` | KEEP | Canonical deal Workflow. |
| `08_BRAND_PARTNERSHIP_FLOW.md` | KEEP | Canonical partnership Workflow. |
| `09_ARTIST_OFFBOARDING_FLOW.md` | KEEP | Canonical offboarding Workflow. |
| `ARTIST_MANAGEMENT_SOP.md` | KEEP | Overkoepelende management SOP; gebruik als governance-laag naast de genummerde Workflows. |
| `ARTIST_COMMUNICATION_SOP.md` | KEEP | Supporting SOP voor communicatiecadence en written confirmation. |
| `ARTIST_MEETING_SOP.md` | KEEP | Supporting SOP voor agenda, meeting notes en decisions. |
| `ARTIST_APPROVAL_MATRIX.md` | KEEP + MOVE TO CLICKUP | Bewaar standaard approval categories in GitHub; maak per artist een ClickUp/Drive-instance. |
| `ARTIST_DELIVERABLES_REGISTER.md` | KEEP + MOVE TO CLICKUP | Bewaar registerdefinitie in GitHub; live deliverables register in ClickUp. |
| `SCOPE_CREEP_CONTROL.md` | KEEP + MOVE TO CLICKUP | Bewaar policy in GitHub; out-of-Scope requests als ClickUp tasks. |
| `UPSELL_NEXT_PHASE_FLOW.md` | KEEP | Supporting Workflow na delivery, audit, release of close-out. |
| `RIGHTS_ROYALTY_AUDIT_FLOW.md` | KEEP | Specialist supporting Workflow voor rights/royalty cleanup. |
| `ARTIST_BUSINESS_AUDIT_FLOW.md` | KEEP | Supporting audit Workflow; koppel aan Business Audit Template. |
| `ARTIST_INTAKE_FLOW.md` | MERGE + MOVE TO CLICKUP | Verwerk in Onboarding; maak intake-task template voor live uitvoering. |
| `ARTIST_CLIENT_WORKFLOW.md` | ARCHIVE | Vervangen door dit mapdocument. |
| `ARTIST_BRAND_AUDIT_FLOW.md` | ARCHIVE | Vervangen door `02_BRAND_AUDIT_FLOW.md`. |
| `ARTIST_BRANDBOOK_FLOW.md` | MERGE + ARCHIVE | Haal unieke Brandbook-section details over naar `03_ARTIST_BRANDBOOK_FLOW.md` indien gewenst. |
| `RELEASE_STRATEGY_FLOW.md` | ARCHIVE | Vervangen door `05_RELEASE_STRATEGY_FLOW.md`. |
| `MONTHLY_MANAGEMENT_FLOW.md` | MERGE + ARCHIVE | Haal unieke checklist-taal over naar `06_MONTHLY_MANAGEMENT_FLOW.md` indien gewenst. |
| `CLOSE_OUT_FLOW.md` | ARCHIVE | Vervangen door `09_ARTIST_OFFBOARDING_FLOW.md`. |
| `DEALS_RIGHTS_FLOW.md` | MERGE + ARCHIVE | Splits inhoud tussen Deal Negotiation en Rights Royalty Audit. |

## Volledige artist lifecycle

De artist lifecycle bestaat uit twaalf fasen. Niet elke artist doorloopt alle specialistische fasen, maar de volgorde blijft leidend voor Governance en task setup.

1. **Lead en intake** — verzamel context, doelen, urgentie, budgetrange, team, risico's en mogelijke Scope.
2. **Fit Check en diagnostic** — bepaal of CM waarde kan leveren en of Brand Audit, Business Audit, Rights/Royalty Audit of Proposal nodig is.
3. **Proposal en contract/payment** — definieer Scope, deliverables, fee, term, exclusions, assumptions en approval requirements.
4. **Onboarding** — richt workspace, communication cadence, approval matrix, deliverables register, decision log, risk log en eerste roadmap in.
5. **Brand foundation** — voer Brand Audit uit en vertaal findings waar nodig naar Brandbook, content rules en partner-use guidance.
6. **Business foundation** — review rights, royalties, agreements, teamrollen, finance/payment setup en obligations waar nodig.
7. **Roadmap** — vertaal doelen naar workstreams, owners, deadlines, dependencies, decisions en ClickUp execution backlog.
8. **Release strategy** — plan release positioning, rights readiness, campaign Assets, budget, approvals en launch readiness.
9. **Ongoing monthly management** — bestuur voortgang, blockers, approvals, risks, budget, deals, partnerships en next-month priorities.
10. **Commercial expansion** — beoordeel en onderhandel deals, brand partnerships, sync/live/commercial kansen en follow-up obligations.
11. **Upsell of next phase** — zet afgeronde waarde, open risks of nieuwe kansen om naar een approved next Scope.
12. **Offboarding en archive** — sluit deliverables, files, access, obligations, financial items en handover gecontroleerd af.

## Workflowvolgorde en SOP-koppeling

| Volgorde | Lifecyclefase | Canonical Workflow | Supporting SOP's en controls | Trigger voor volgende stap |
|---:|---|---|---|---|
| 1 | Lead, intake en fit | `01_ARTIST_ONBOARDING_FLOW.md` vanaf approved engagement; intake eerst als ClickUp template | `ARTIST_COMMUNICATION_SOP.md`, `ARTIST_APPROVAL_MATRIX.md`, `SCOPE_CREEP_CONTROL.md` | Fit bevestigd, Scope/proposal nodig of engagement approved. |
| 2 | Brand diagnostic | `02_BRAND_AUDIT_FLOW.md` | `ARTIST_MEETING_SOP.md`, `ARTIST_DELIVERABLES_REGISTER.md` | Brand gaps geprioriteerd; Brandbook, Release Strategie of roadmap-input nodig. |
| 3 | Brand system | `03_ARTIST_BRANDBOOK_FLOW.md` | `ARTIST_APPROVAL_MATRIX.md`, `ARTIST_COMMUNICATION_SOP.md` | Brandbook approved en bruikbaar voor PR, content, labels, partners en releases. |
| 4 | Business diagnostic | `ARTIST_BUSINESS_AUDIT_FLOW.md` en/of `RIGHTS_ROYALTY_AUDIT_FLOW.md` | `ARTIST_APPROVAL_MATRIX.md`, `ARTIST_DELIVERABLES_REGISTER.md` | Business risks vertaald naar roadmap, rights cleanup of deal/release blockers. |
| 5 | Roadmap | `04_ARTIST_ROADMAP_FLOW.md` | `ARTIST_MANAGEMENT_SOP.md`, `SCOPE_CREEP_CONTROL.md` | Active priorities en workstreams zijn approved en aangemaakt in ClickUp. |
| 6 | Release planning | `05_RELEASE_STRATEGY_FLOW.md` | `ARTIST_APPROVAL_MATRIX.md`, `ARTIST_COMMUNICATION_SOP.md` | Release plan approved; campaign tasks, owners en launch readiness bekend. |
| 7 | Monthly operating rhythm | `06_MONTHLY_MANAGEMENT_FLOW.md` | `ARTIST_MEETING_SOP.md`, `ARTIST_DELIVERABLES_REGISTER.md`, `SCOPE_CREEP_CONTROL.md` | Monthly summary verstuurd en next-month priorities bevestigd. |
| 8 | Deal work | `07_DEAL_NEGOTIATION_FLOW.md` | `ARTIST_APPROVAL_MATRIX.md`, `RIGHTS_ROYALTY_AUDIT_FLOW.md`, `ARTIST_COMMUNICATION_SOP.md` | Deal approved, declined, parked of overgedragen naar obligations tracking. |
| 9 | Brand partnerships | `08_BRAND_PARTNERSHIP_FLOW.md` | `03_ARTIST_BRANDBOOK_FLOW.md`, `ARTIST_APPROVAL_MATRIX.md`, `SCOPE_CREEP_CONTROL.md` | Partnership approved/declined en execution tasks of reporting opgezet. |
| 10 | Upsell/next phase | `UPSELL_NEXT_PHASE_FLOW.md` | `SCOPE_CREEP_CONTROL.md`, `ARTIST_COMMUNICATION_SOP.md` | Proposal approved of next phase geparkeerd. |
| 11 | Offboarding | `09_ARTIST_OFFBOARDING_FLOW.md` | `ARTIST_DELIVERABLES_REGISTER.md`, `ARTIST_APPROVAL_MATRIX.md`, `ARTIST_COMMUNICATION_SOP.md` | Workspace gesloten, overgedragen of gearchiveerd. |

## Deliverables per workflow

| Workflow | Deliverables | System of record |
|---|---|---|
| Onboarding | Onboarding summary, Google Drive-clientmap, ClickUp structure, team roster, approval matrix, first roadmap, open inputs list, decision log, risk log | Google Drive voor summaries/files; ClickUp voor tasks/status/evidence |
| Brand Audit | Brand Audit-memo, gaps/risk overview, prioritized action list, Asset refresh recommendations, partner fit notes | Google Drive voor memo; ClickUp voor improvement tasks |
| Brandbook | Approved Artist Brandbook, messaging toolkit, visual guidance, content pillars, do's/don'ts, usage restrictions, approval record | Google Drive voor Brandbook; ClickUp voor reviews/approval tasks |
| Business Audit | Business Audit-memo, risk ranking, direct fixes, roadmap implications | Google Drive voor memo; ClickUp voor remediation backlog |
| Rights/Royalty Audit | Audit tracker, issue list, source, owner, priority, next action | ClickUp voor issue tracker; Google Drive voor source evidence |
| Roadmap | Approved artist roadmap, workstream overview, ClickUp backlog, decision log, risk/dependency log, monthly update | Google Drive voor approved roadmap; ClickUp voor backlog/milestones |
| Release Strategie | Release strategy, launch readiness checklist, campaign timeline, budget/approval overview, ClickUp campaign tasks, risk log | Google Drive voor strategy; ClickUp voor campaign execution |
| Monthly Management | Monthly summary, updated roadmap, updated task list, decision log update, risk/escalation log, follow-up list | Google Drive voor summary; ClickUp voor execution and evidence |
| Deal Negotiation | Opportunity record, Fit Check, deal memo or term comparison, red flags overview, negotiation tracker, approval record, obligations tracker | ClickUp for tracker/obligations; Google Drive for final docs |
| Brand Partnership | Partnership Fit Check, partnership brief, term sheet/deal memo, approval record, execution checklist, proof of performance package, evaluation | ClickUp for Pipeline/execution/reporting; Google Drive for Assets/final docs |
| Upsell Next Phase | Value summary, next phase Scope, proposal inputs, approval record | Google Drive for proposal; ClickUp for next-phase tasks |
| Offboarding | Offboarding checklist, final close-out summary, handover package, updated deliverables register, open obligations list, access review, lessons learned | Google Drive for handover/archive; ClickUp for closure/obligations |

## ClickUp templates

Gebruik onderstaande templates als standaard task/list-structuur. Als een template nog niet in ClickUp bestaat, maak deze aan met dezelfde naam en velden.

| ClickUp template | Gebruikt bij | Minimale velden/statussen |
|---|---|---|
| `AM - Artist Client Workspace` | Onboarding van elke actieve artist | Client, Scope, owner, start date, Drive link, agreement link, health status, next review date |
| `AM - Intake & Fit Check` | Lead, intake, pre-proposal diagnostic | Source, goals, urgency, budget range, readiness, risks, recommended next step, decision owner |
| `AM - Onboarding Checklist` | Approved engagement start | Inputs missing, workspace setup, team roster, approvals, first roadmap, open risks, handover to monthly |
| `AM - Approval Matrix` | Onboarding en elke major decision | Category, approver, backup approver, written evidence, approval date, restrictions |
| `AM - Deliverables Register` | Onboarding, Monthly, Offboarding | Deliverable, status, owner, due date, Drive link, approval status, evidence, next action |
| `AM - Brand Audit` | Brand Audit | Audit area, finding, evidence, risk level, recommended action, owner, due date |
| `AM - Brandbook Production` | Brandbook | Section, draft status, reviewer, feedback, approval, usage restriction, final Drive link |
| `AM - Business/Rights Audit` | Business Audit and Rights/Royalty Audit | Issue, source, risk level, owner, advisor needed, remediation step, evidence, deadline |
| `AM - Artist Roadmap` | Roadmap and quarterly planning | Workstream, outcome, priority, owner, deadline, dependency, KPI, status, decision needed |
| `AM - Release Strategy Campaign` | Release planning and launch readiness | Release, milestone, owner, due date, asset, rights status, approval status, blocker, launch-readiness status |
| `AM - Monthly Management Review` | Monthly cadence | Workstream update, completed work, blockers, decisions, budget items, risks, next-month priorities |
| `AM - Deal Negotiation Tracker` | Deal work | Counterparty, deal type, stage, terms, red flags, counsel status, approval status, obligations |
| `AM - Brand Partnership Pipeline` | Brand partnerships | Brand, category, source, fee, deliverables, usage, exclusivity, fit score, stage, next action |
| `AM - Scope Change / Upsell` | Scope creep and next phase | Request, classification, impact, fee option, timing option, approval status, proposal link |
| `AM - Offboarding Checklist` | Close-out and archive | Trigger, final deliverables, open obligations, access, invoices, handover package, archive status |

## Operating rules

- Start execution pas wanneer Scope, owner, approval path en system of record duidelijk zijn.
- Maak voor elke Workflow een ClickUp owner, due date, status, source link en required evidence aan.
- Gebruik Google Drive voor live clientbestanden, deliverables, exports, source files en signed documents.
- Gebruik GitHub alleen voor SOP's, Workflow-documentatie, Governance en reusable templates.
- Leg decisions over money, rights, contracts, public messaging, partnerships, releases en access altijd schriftelijk vast.
- Classificeer nieuw werk als binnen Scope, out-of-Scope of onduidelijk voordat execution start.
