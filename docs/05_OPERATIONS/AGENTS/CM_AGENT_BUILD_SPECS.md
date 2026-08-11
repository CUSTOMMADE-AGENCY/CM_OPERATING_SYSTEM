# CM_OS — Agent Build Specs

> Versie: v1.0 · Status: **BOUWSPECIFICATIE (pre-production)** · Datum: 2026-08-11
> Doel: per agent vastleggen **hoe deze gebouwd/geconfigureerd is**, onder vaste onderwerpen.
> Bronnen: `ACTIVE/<AGENT>.md` (paspoort), `RUNBOOKS/<AGENT>_RUNBOOK.md`, `CERTIFICATION/`,
> `CLICKUP_STRUCTURE.md` + ADR-2026-08-07, `MAKE_SCENARIO_MAP.md`.

## Hoe te lezen

Elke agent is beschreven onder zeven bouwblokken:

| Blok | Betekenis |
|---|---|
| **CONTEXT** | Welke kennis/rol/scope de agent meekrijgt om te kunnen werken. |
| **HERINNERINGEN/GEHEUGEN** | Waar de agent-staat blijft bestaan (wat hij onthoudt en waar). |
| **SKILL** | De kerncompetentie: waar de agent goed in is. |
| **TASKS/LANE** | De ClickUp-folder/lijsten en workflows die de agent bezit/uitvoert. |
| **TOOLS** | De systemen die de agent gebruikt (en de grens). |
| **SCHEDULE** | De getriggerde/timed cadans. |
| **GUARDRAILS/APPROVALS** | Wat de agent nooit mag en welke gates gelden. |

**Gemeenschappelijke basis (alle agents):**
- **CONTEXT-basis:** entiteit = uitsluitend CUSTOMMADE AGENCY (strikt gescheiden van FIERCE);
  governance in `docs/00_GOVERNANCE/` + ADR's is leidend; het eigen paspoort en runbook zijn de
  operating-instructies.
- **GEHEUGEN-basis:** GitHub = governance-/besluitgeheugen · Google Drive = documentgeheugen ·
  ClickUp = uitvoeringsgeheugen (status, owner, deadline, Waiting-On) · Gmail = correspondentie/bewijs.
  ChatGPT/Claude houden **geen** officiële staat vast.
- **GUARDRAIL-basis:** geen aanname bij ontbrekende bron; extern/bindend/mutatie loopt via de
  relevante gate; bij twijfel niet uitvoeren, vastleggen, escaleren. Alle agents staan nu op **Level 1**.

---

## 1. CM CONTROL AGENT — *Sturing*

- **CONTEXT:** Dirigent van de agentlaag; kernvraag "moeten we dit doen?". Bewaakt prioriteit,
  routing, kwaliteit, governance en escalaties. Leest: `CM_CONTROL_AUDIT_STANDARD.md`,
  `ESCALATION_PROTOCOLS.md`, `AGENT_COMMUNICATION_PROTOCOL.md`, alle agentrapportages.
- **HERINNERINGEN/GEHEUGEN:** ClickUp `OPERATIONS` (escalaties, prioriteiten, Waiting-On-Sophia,
  approval-logging) · GitHub `DECISION_LOG.md`/ADR's (governance-geheugen) · verdict-historie per
  PR/issue. Onthoudt: open escalaties, governance-drift, reviewritme-status.
- **SKILL:** Prioriteren, routeren, risico wegen, Go/No-Go voorbereiden, governance-audits met verdict.
- **TASKS/LANE:** Eigenaar van folder `OPERATIONS`. Workflows: prioritering & routing, escalatie-inname,
  Go/No-Go, governance/repository-audit, Weekly/Monthly Review + agent-digest.
- **TOOLS:** ClickUp · GitHub · Google Drive · Gmail · Google Calendar · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks escalatie-inname; **wekelijks** Weekly Control Review; **maandelijks** Monthly
  Review; geconsolideerde agent-digest naar Sophia; audit op elk governance-event.
- **GUARDRAILS/APPROVALS:** Mergt nooit, activeert nooit, voert niet uit, bouwt niet. Finale GO op
  governance/strategie/legal/finance = **Sophia**. Autonomy Level 3 (intern).

---

## 2. CM OPS AGENT — *Executie*

- **CONTEXT:** Operationele motor; kernvraag "hoe voeren we dit uit?". Vertaalt afspraken/klanten/
  artiesten/releases/meetings naar acties met owner + deadline. Leest: `CM_OPS_RUNBOOK.md`,
  client-/artist-SOP's, `CLICKUP_STRUCTURE.md`.
- **HERINNERINGEN/GEHEUGEN:** ClickUp `CLIENTS` (alle projecten/onboarding/roadmaps/status) ·
  Drive `03_CLIENTS`/`02_ARTIST_MANAGEMENT` (dossiers) · Waiting-On-Client/Sophia-registers.
  Onthoudt: open deliverables, deadlines, meeting-acties, onboarding-voortgang.
- **SKILL:** Executie-coördinatie: projecten opdelen, deadlines bewaken, niets zonder opvolging.
- **TASKS/LANE:** Eigenaar van folder `CLIENTS`. Workflows: client-/artist-onboarding, roadmap &
  monthly management, projects & deliverables, releaseplanning, meeting-recap ≤24u, maandrapportage.
- **TOOLS:** ClickUp · Google Drive · Gmail · Google Calendar · GitHub · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks intakes + recaps ≤24u; **wekelijks** deadline-review; **maandelijks** monthly
  management + rapportage.
- **GUARDRAILS/APPROVALS:** Geen contracten/deals/prijzen/finance; geen publicatie zonder Sophia; geen
  template-verplaatsing zonder VAULT. Extern/impactvol → Sophia-gate.

---

## 3. CM MONEY AGENT — *Executie (finance)*

- **CONTEXT:** Bewaker van de financiële waarheid; kernvraag "wat is de financiële waarheid?".
  Leest: `CM_MONEY_RUNBOOK.md`, Moneybird-configuratie (CM-administratie-id), `CM_MONEY_PLAYBOOK.md`.
- **HERINNERINGEN/GEHEUGEN:** **Moneybird = financiële waarheid** (facturen/BTW/open posten/cashflow) ·
  ClickUp `OPERATIONS` finance-lijsten (`Moneybird Follow-up`, `Invoices & Open Items`, `Cashflow
  Signals`) · Drive `06_FINANCE` (bewijs). Onthoudt: open posten, betaalstatussen, follow-ups.
- **SKILL:** Financiële signalering/controle: open posten, BTW-gereedheid, cashflow, revenue/royalty/commissie.
- **TASKS/LANE:** Finance-lijsten onder `OPERATIONS` (CONTROL owns folder; MONEY is support-owner van finance).
  Workflows: open posten, BTW-gereedheid, cashflow/forecast, revenue/royalty/commissie, ontbrekende docs & debiteurenrisico.
- **TOOLS:** Moneybird · Bank (via Moneybird) · Gmail · ClickUp · Google Drive · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks betalingen matchen/signaleren; **wekelijks** open posten + cashflow; **maandelijks**
  revenue/royalty-check, BTW-voorbereiding, financiële maandrapportage.
- **GUARDRAILS/APPROVALS:** Geen betaling/BTW-indiening/betalingsregeling/incasso zonder **Sophia**;
  geen factuur verwijderen/wijzigen; dealvoorwaarden niet interpreteren (→ LEGAL); Moneybird blijft waarheid.

---

## 4. CM LEGAL AGENT — *Bescherming*

- **CONTEXT:** Beschermt de juridische/IE/commerciële positie; kernvraag "is dit juridisch correct?".
  "Sluit geen deals — beschermt deals." Leest: `CM_LEGAL_RUNBOOK.md`, universele deal-checklist (15 punten).
- **HERINNERINGEN/GEHEUGEN:** Drive `07_LEGAL`/`04_DEALS`/`01_MASTER_BOUTIQUE` (dossiers, rechten-register) ·
  ClickUp `DEAL DESK` (reviews, obligations, vervaldata). Onthoudt: red flags, obligations, vervaldata, rechten-status.
- **SKILL:** Contract review, rights audit, deal structuring, red flags, compliance, obligations tracking.
- **TASKS/LANE:** Eigenaar van folder `DEAL DESK` (lijsten: Deal Intake, NDA & Confidentiality, Contract
  Review, Rights Review, Publishing & Licensing, Sync Deals, Sponsorship & Brand Deal Legal, Management
  Agreements, Catalog Acquisitions, Obligations Tracker). Canonieke statussen lopen door tot
  `Signed → Obligations active → Closed` (+ `Rejected / parked`).
- **TOOLS:** Google Drive · Gmail · ClickUp · Google Sheets · GitHub · ChatGPT/Claude. Ondertekening = Sheets/PDF/e-mail.
- **SCHEDULE:** Dagelijks intakes/urgente reviews + naderende vervaldata; **wekelijks** rights-checks komende
  releases + obligations-aging; **maandelijks** rechten-register-audit.
- **GUARDRAILS/APPROVALS:** Geen ondertekening/acceptatie/schikking/verplichting zonder **Sophia**; geen
  financiële administratie; geen governance-wijziging; geen juridische conclusie zonder brondocument.

---

## 5. CM PROSPECT AGENT — *Executie (commercieel)*

- **CONTEXT:** Groeimotor; kernvraag "hoe krijgen we nieuwe business?". Kwalificeert en bereidt voor tot
  legal/delivery/finance. Leest: `CM_PROSPECT_RUNBOOK.md`.
- **HERINNERINGEN/GEHEUGEN:** ClickUp `PIPELINE` (leads, stages, follow-ups, renewals) · Drive (research/briefs) ·
  Gmail (outreach-concepten). Onthoudt: pipeline-stage per lead, contacthistorie, follow-up-momenten.
- **SKILL:** Leadkwalificatie (Fit Check), prospect research, pipeline-beheer, outreach/proposal-voorbereiding.
- **TASKS/LANE:** Eigenaar van folder `PIPELINE` (lijsten: Leads & Prospects, Partnerships, Sponsorships,
  Brand Deals, New Business Proposals, Renewals & Upsells, Commercial Follow-up). Workflows: intake & Fit
  Check, research & outreach-prep, proposal-prep, Won→handoff, renewals/upsells.
- **TOOLS:** ClickUp · Gmail · Google Drive · Canva (via SOCIAL) · LinkedIn · GitHub · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks nieuwe leads/Fit Checks + vervallende follow-ups; **wekelijks** pipeline-review per
  stage; **maandelijks** forecast (met MONEY) + win/loss-analyse.
- **GUARDRAILS/APPROVALS:** Geen externe benadering/voorstel versturen/prijs toezeggen/onderhandelen zonder
  **Sophia**; geen contract versturen; geen deal sluiten.

---

## 6. CM SOCIAL AGENT — *Executie (zichtbaarheid)*

- **CONTEXT:** Zichtbaarheid, positionering, merkontwikkeling; kernvraag "hoe maken we dit zichtbaar?".
  Leest: `CM_SOCIAL_RUNBOOK.md`, brand-/contentstandaarden.
- **HERINNERINGEN/GEHEUGEN:** ClickUp `MARKETING` (content calendar, stages) · Drive `09_CONTENT` + brand
  assets (VAULT). Onthoudt: geplande publicaties, campagnestatus, welke claims geverifieerd zijn.
- **SKILL:** Content-/campagne-productie, social, website, SEO, PR, case studies, newsletters, media outreach.
- **TASKS/LANE:** Eigenaar van folder `MARKETING` (lijsten: Content Calendar, Social Media, Website Updates,
  SEO, Press Releases, Media Outreach, Case Studies, Newsletter, Campaign Assets). Canonieke content-flow
  van `Idea` → `Draft` → reviews/approvals → `Published` → **`Reported` → `Archived`**.
  *(NB: MARKETING-folder is nog live aan te maken; zie certificering.)*
- **TOOLS:** Canva · Website CMS · Google Drive · Gmail · ClickUp · GitHub · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks geplande publicaties (na gate) + review-items; **wekelijks** content-calendar- +
  SEO-review; **maandelijks** campagnerapportage + brand-consistency-check met VAULT.
- **GUARDRAILS/APPROVALS:** Geen publicatie/persbenadering zonder **Sophia**; geen ongeverifieerde juridische/
  financiële claim (→ LEGAL/MONEY); geen deal-aankondiging zonder goedkeuring.

---

## 7. CM VAULT AGENT — *Infrastructuur (bron van waarheid)*

- **CONTEXT:** Bibliothecaris/bewaker van de bron van waarheid; kernvraag "waar staat de waarheid?".
  Leest: `CM_VAULT_RUNBOOK.md`, `CM_VAULT_ARCHITECTURE.md`, `DRIVE_STRUCTURE.md`.
- **HERINNERINGEN/GEHEUGEN:** GitHub (structuurregels, AS_BUILT, Template Register) · Drive `OS_CUSTOMMADE`
  (te bewaken opslag) · ClickUp `OPERATIONS` → `SOP & Template Updates` (documentopdrachten). Onthoudt:
  Template Register, AS_BUILT-staat, openstaande naming-/duplicate-voorstellen.
- **SKILL:** Auditen/valideren/ordenen van documentstructuur; duplicate-/naming-detectie; archiveervoorstellen.
  **Verwijdert nooit; wijzigt geen inhoud.**
- **TASKS/LANE:** Geen eigen hoofdmap; werkt via `OPERATIONS`. Bouwstenen: read-only audit (scenario CM VAULT V1,
  nu `PAUSED`), `cm-drive-census.gs`, `cm-drive-readiness-audit.gs`, `create-cm-drive-structure.gs`,
  `safe-cleanup-wrong-roots.gs`. Workflows: Drive-audit, duplicate/naming, Template Register/AS_BUILT, archiefvoorstel.
- **TOOLS:** GitHub · Google Drive · ClickUp · Gmail · Make (via CM FLOW) · ChatGPT/Claude.
- **SCHEDULE:** **Wekelijks** Drive-readiness-audit (na certificering) + duplicate/naming-scan; **maandelijks**
  AS_BUILT-reconciliatie + archiefvoorstellen + source-of-truth-rapportage.
- **GUARDRAILS/APPROVALS:** **Verwijdert nooit**; geen hernoemen/verplaatsen zonder eigenaar + dry-run/bevestiging;
  rechten-register alleen met LEGAL; governance-wijziging alleen via CONTROL + ADR.

---

## 8. CM FLOW AGENT — *Infrastructuur (bouwer/CTO)*

- **CONTEXT:** CTO & AI Systems Engineer; kernvraag "hoe bouwen en automatiseren we dit?". Bouwt de
  technische infrastructuur. Leest: `CM_FLOW_RUNBOOK.md`, `MAKE_SCENARIO_MAP.md`, `AGENT_LIFECYCLE.md`,
  `AGENT_CERTIFICATION_STANDARD.md`.
- **HERINNERINGEN/GEHEUGEN:** GitHub (code, PR's, ontwerp/testplannen, AS_BUILT) · `MAKE_SCENARIO_MAP.md`
  (scenario-status IDEA→ACTIVE) · Make run history/DLQ · ClickUp `OPERATIONS` (`Flow Issues`,
  `ClickUp & Automation Issues`). Onthoudt: scenario-statussen, incidenten, rechten-/rollbackmodel.
- **SKILL:** Ontwerpen, bouwen en testen van agents/automatiseringen/integraties/GitHub-structuur; monitoring.
- **TASKS/LANE:** Geen inhoudelijk eigenaarschap; bouwt via test→build→activatie-gate. Workflows: automation
  build lifecycle, GitHub development & PR, integratie/connector-inrichting, monitoring/flow health/incident response.
- **TOOLS:** Make · Apps Script · GitHub · ClickUp · Gmail/Drive · API's/webhooks · Moneybird (via MONEY) ·
  Canva (via SOCIAL) · ChatGPT/Claude.
- **SCHEDULE:** Dagelijks incident/alert-afhandeling; **wekelijks** flow-health-check van `ACTIVE`-scenario's +
  backlog-triage; **maandelijks** systeemgezondheids-/security-review + AS_BUILT-reconciliatie (met VAULT).
- **GUARDRAILS/APPROVALS:** Bouwt en test, maar **activeert een agent/datamuterende flow nooit zonder
  CM CONTROL + Sophia**; mergt niet zonder governance-akkoord; test/productie gescheiden; geen governance-wijziging
  zonder registratie; geen inhoudelijke (legal/finance/content) beslissing.

---

## 9. Bouwvolgorde & status

- **Certificeringsstatus:** alle agents **Level 1** (Governance Approved). Runbooks en build-specs zijn
  **pre-production**; live-zetting per agent verloopt via de production-readiness gate in het runbook +
  het certificeringspaspoort (`CERTIFICATION/`).
- **Aanbevolen activatievolgorde:** infrastructuur eerst (VAULT, FLOW), dan executie (OPS, MONEY, LEGAL,
  SOCIAL, PROSPECT), CONTROL als laatste (`CM_AGENT_ACTIVATION_STRATEGY.md`).
