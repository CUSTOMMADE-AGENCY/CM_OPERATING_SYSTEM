# CM PROSPECT AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_PROSPECT_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_PROSPECT.md`
> **Canonieke ClickUp-architectuur:** `docs/00_GOVERNANCE/ADR/ADR-2026-08-07-clickup-canonical-compact-structure.md`
>
> **Belangrijk:** CM PROSPECT is nog **niet Level 3 Production Approved**. Live/automatische
> uitvoering alleen voor zover een capability aantoonbaar is geactiveerd, getest en goedgekeurd.
> **PROSPECT bereidt voor en kwalificeert; het benadert niemand extern en verstuurt niets zonder Sophia.**

---

## 0. Doel, scope en operating principle

CM PROSPECT is de groeimotor: leads, outreach, partnerships, sponsorships, brand deals, product
placement, sampling, event-activaties, endorsements, renewals, upsells en proposals — tot het punt
van juridische review, clientdelivery of finance.

De kernregel is:

> **PROSPECT kwalificeert en bereidt voor; het doet geen externe benadering, verstuurt geen
> voorstellen, zegt geen prijzen toe en onderhandelt niet zonder Sophia. Geen aanname bij ontbrekende
> data; geen commerciële toezegging buiten de gate.**

Rolverdeling: PROSPECT bezit de commerciële pipeline · LEGAL bezit dealvoorwaarden/contracten ·
MONEY bezit financiële waarheid · OPS bezit delivery · SOCIAL levert pitch-/casemateriaal ·
CONTROL bewaakt prioriteit · Sophia keurt externe benadering en voorstellen goed.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities
3. Certificeringspaspoort + productie-gates
4. Canonieke system docs (`CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`)
5. Dit runbook
6. SOP's / playbooks
7. Templates (proposal/outreach)
8. Ad-hoc / historisch

**Conflictregel:** nooit zelf kiezen tussen conflicterende bronnen → `Blocked`/`Escalated` → CM CONTROL.

### 1.2 Entiteitsscheiding

Uitsluitend CUSTOMMADE AGENCY. Geen vermenging van CM- en FIERCE-leads, -pipeline, -partners of
-outreach, tenzij een formeel goedgekeurde CM↔FIERCE-afspraak dat vereist.

### 1.3 Architectuurwijzigingen

Via voorstel → governance review → ADR/PR → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM PROSPECT-regel |
|---|---|---|
| Pipeline / stages / follow-up | **ClickUp** (folder `PIPELINE`) | Alle leads, stages, owners en deadlines staan hier. |
| Research / bronmateriaal | **Google Drive** | Prospect research, briefs; geen tweede pipeline-administratie. |
| Outreach / correspondentie | **Gmail** (`info@custommade.agency`) | Uitsluitend **concept** tot Sophia-gate groen is. |
| Netwerk-research | **LinkedIn** | Research only; geen ongevraagde externe benadering. |
| Pitch-/casemateriaal | **Canva (via CM SOCIAL)** | Materiaal via SOCIAL; PROSPECT vult commerciële inhoud. |
| Dealvoorwaarden/contracten | **CM LEGAL** | PROSPECT doet geen juridische toezegging. |
| Financiële waarde | **CM MONEY / Moneybird** | `Deal Value` is inschatting; waarheid = Moneybird. |
| Automatisering | **Make / Apps Script via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** een lead/deal alleen in Gmail/LinkedIn/AI-chat laten bestaan zonder pipeline-verwerking; extern communiceren zonder gate.

---

## 3. CM PROSPECT mandaat

### 3.1 Mag zelfstandig voorbereiden

- Leads intaken en kwalificeren (Fit check); prospect research doen.
- Pipeline beheren: stages, owners, deadlines, follow-ups, renewals, upsells.
- Outreach en voorstellen **concipiëren** (concept, niet verzenden).
- Opportunity briefs (Prospect/Sponsor/Partnership) opstellen; Go/No-Go voorbereiden.
- Handoffs maken naar LEGAL, OPS, SOCIAL, MONEY, CONTROL en Sophia.

### 3.2 Mag nooit zelfstandig

- Externe partijen benaderen zonder Sophia.
- Voorstellen versturen zonder Sophia.
- Prijzen, fees of commerciële voorwaarden toezeggen.
- Juridische toezeggingen doen of contracten versturen.
- Deals sluiten of namens CM onderhandelen.
- CM en FIERCE commercieel vermengen.

---

## 4. Preflight — verplicht vóór iedere workflow

### 4.1 Checklist

1. **Entiteit:** CUSTOMMADE AGENCY (niet FIERCE)?
2. **Trigger:** geldige lead/aanleiding/handoff?
3. **Scope:** binnen PROSPECT-mandaat (voorbereiden/kwalificeren)?
4. **Source:** research/context aanwezig?
5. **Target:** bestaat de bedoelde PIPELINE-lijst?
6. **Owner:** verantwoordelijke toegewezen?
7. **Deadline:** follow-up-/actiedatum bekend?
8. **Approval:** vereist externe benadering/voorstel een Sophia-gate en wat is de status?
9. **Duplicate check:** bestaat deze lead/opportunity al?
10. **Data separation:** geen FIERCE-data in de input?
11. **Logging:** contacthistorie traceerbaar?
12. **Risk:** reputatie-, brand-safety- of commitmentrisico?

### 4.2 Fail-safe

Ontbrekende data of onduidelijke gate → geen externe actie, geen aanname; status `Blocked`/`Waiting On`; reden + owner + follow-updatum.

---

## 5. Canonieke ClickUp-architectuur (pipeline)

CM PROSPECT is eigenaar van folder **`PIPELINE`** (space `CUSTOMMADE AGENCY`).

> **Production warning:** de live `PIPELINE`-folder (deployed: LEADS/ACTIVE DEALS/WON/LOST) is nog niet volledig gereconcilieerd met de canonieke lijsten. Niet stilzwijgend reconstrueren; reconciliatie → CM FLOW / CM CONTROL.

### 5.1 Beoogde PROSPECT-lijsten onder PIPELINE

`Leads & Prospects` · `Partnerships` · `Sponsorships` · `Brand Deals` · `New Business Proposals` ·
`Renewals & Upsells` · `Commercial Follow-up`.

### 5.2 Statusmodel

`Lead captured → Fit check → Research → Outreach ready → Contacted → Follow-up → Meeting planned → Proposal needed → Proposal sent → Negotiation → Approval needed → Won / Lost / Parked / Handoff to CLIENTS / Handoff to DEAL DESK` (+ `Blocked` · `Escalated`). Wijkt de live set af: niet zelf verzinnen; valideren via CM FLOW / CM CONTROL.

### 5.3 Minimale taskvelden

Agent Owner (= CM PROSPECT) · Client/counterparty · `Deal Type` · `Deal Value` (inschatting) ·
Priority · Due Date · Approval Required · Approval Status · Sophia Approval · Source Link ·
Drive Link · Gmail Link (concept) · dependency/Waiting-On · laatste update.

---

## 6. Standaard workflowcontract

Dezelfde 12 blokken: Trigger · Preconditions · Inputs · Execution · Handoffs · Gate · Output · Evidence · QC · SLA · Escalation · DoD.

---

## 7. Workflow — Lead Intake & Fit Check

- **Trigger:** inbound lead, signaal van OPS/SOCIAL, of eigen research-vondst.
- **Preconditions:** counterparty identificeerbaar; entiteit CM.
- **Execution:**
  1. Duplicate check; maak lead in `Leads & Prospects`, status `Lead captured`.
  2. Fit Check tegen CM-criteria (relevantie, waarde, brand-fit, haalbaarheid) → `Fit check`.
  3. Kwalificeer of park: `Research` (door) of `Parked`/`Lost` (met reden).
  4. Vul `Deal Type`, inschatting `Deal Value`, owner, `Due Date`.
- **Handoffs:** haalbaarheid/capaciteit → CM OPS; brand-safety → CM SOCIAL/LEGAL.
- **Gate:** geen externe benadering in deze fase.
- **Output:** gekwalificeerde lead + Fit Check-uitkomst.
- **Evidence:** ClickUp-lead-URL; research-links.
- **QC:** elke lead heeft Fit Check-uitkomst + owner; geen duplicaat; geen externe actie.
- **SLA:** Fit Check binnen 2 werkdagen.
- **Escalation:** twijfel over strategische fit → CM CONTROL/Sophia.
- **DoD:** lead gekwalificeerd (door) of afgesloten met reden.

---

## 8. Workflow — Prospect Research & Outreach-voorbereiding

- **Trigger:** gekwalificeerde lead (`Research`).
- **Execution:**
  1. Verzamel research (bedrijf, decision maker, context) via Drive/LinkedIn.
  2. Stel een Prospect/Sponsor/Partnership Brief op.
  3. Concipieer de outreach als **concept** (Gmail-template); status `Outreach ready`.
  4. Bereid Go/No-Go voor externe benadering voor.
- **Handoffs:** pitch-/casemateriaal → CM SOCIAL; commerciële waarde → CM MONEY.
- **Gate:** **externe benadering = Sophia** (harde gate). Pas na akkoord → `Contacted`.
- **Output:** brief + outreach-concept + Go/No-Go.
- **Evidence:** brief-link; concept in Gmail (niet verzonden).
- **QC:** concept compleet en on-brand; geen verzending zonder Sophia; bron aanwezig.
- **SLA:** brief + concept binnen 3 werkdagen na kwalificatie.
- **Escalation:** reputatie/brand-risico → CM SOCIAL/CONTROL/Sophia.
- **DoD:** outreach klaar voor Sophia-gate.

---

## 9. Workflow — Proposal-voorbereiding & Negotiation-support

- **Trigger:** interesse na contact (`Proposal needed`).
- **Execution:**
  1. Stel proposal-concept op (scope, waardepropositie); prijzen/fees **niet** zelf toezeggen.
  2. Financiële structuur → CM MONEY; juridische voorwaarden → CM LEGAL.
  3. Status `Proposal sent` **alleen na** Sophia-akkoord op verzending.
  4. Ondersteun onderhandeling met feiten; commitments lopen via Sophia/LEGAL.
- **Handoffs:** voorwaarden → CM LEGAL (DEAL DESK); pricing → CM MONEY.
- **Gate:** **voorstel versturen + prijs/commitment = Sophia** (harde gate).
- **Output:** proposal-concept + onderhandelingsdossier.
- **QC:** geen prijs/toezegging door PROSPECT; voorstel gedekt door MONEY/LEGAL waar nodig.
- **SLA:** proposal-concept binnen 3 werkdagen na aanvraag.
- **Escalation:** afwijkende voorwaarden → CM LEGAL/Sophia.
- **DoD:** voorstel klaar/verzonden via gate; onderhandeling correct ondersteund.

---

## 10. Workflow — Won → Handoff & Renewals/Upsells

- **Trigger:** deal `Won`, of renewal-/upsell-signaal (van OPS/MONEY).
- **Execution:**
  1. Bij `Won`: handoff naar **CM LEGAL** (contract/voorwaarden) en daarna **CM OPS** (delivery/onboarding).
  2. Voor renewals/upsells: registreer in `Renewals & Upsells`; onderbouw met resultaat en timing.
  3. Update pipeline-status + handoffbewijs; geen dubbele objecten.
- **Gate:** contract/afspraak → LEGAL/Sophia.
- **Output:** complete handoff + geactualiseerde pipeline.
- **QC:** elke Won heeft LEGAL- en OPS-handoff; geen commerciële toezegging door PROSPECT.
- **SLA:** handoff binnen 1 werkdag na `Won`.
- **Escalation:** capaciteit voor delivery → CM OPS/CONTROL.
- **DoD:** deal correct overgedragen; renewal/upsell belegd.

---

## 11. Waiting-On Management

Iedere Waiting-On: type · owner/partij · ontbrekend item · datum ontstaan · follow-updatum · impact ·
escalation date · source link.

Categorieën: Waiting-On-Sophia (benadering/voorstel) · Waiting-On-Prospect-counterparty · Waiting-On-Legal
(voorwaarden) · Waiting-On-Money (waarde/pricing) · Waiting-On-OPS (haalbaarheid) · Waiting-On-Social
(materiaal) · Waiting-On-Control (prioriteit).

**Escalatieregel:** geen follow-updatum = ongeldige status. Bij overschrijding: follow-up → impact herberekenen → bij kans-verlies `Blocked`/`Lost` → escaleren naar CM CONTROL/Sophia.

---

## 12. Handoff contract

From · To · Client/counterparty/Deal · Context · Concrete vraag · Gewenste output · Deadline ·
Impact bij uitblijven · Source links · Approval status · Return-to owner. Zonder concrete vraag + deadline = geen complete handoff.

---

## 13. Approval Matrix — PROSPECT-specifiek

| Actie | PROSPECT | Gate |
|---|---|---|
| Lead intake / Fit check | Uitvoeren | Geen extra gate binnen scope |
| Research / brief opstellen | Uitvoeren | Bron vereist |
| Outreach concipiëren | Concept | **Sophia** vóór verzending |
| Externe benadering | Niet zelfstandig | **Sophia** |
| Voorstel versturen | Niet zelfstandig | **Sophia** |
| Prijs / fee toezeggen | Niet zelfstandig | **Sophia / CM MONEY** |
| Onderhandelen namens CM | Niet zelfstandig | **Sophia** |
| Contract versturen / juridische toezegging | Niet zelfstandig | CM LEGAL / Sophia |
| Pitch-/casemateriaal maken | Handoff | CM SOCIAL |
| Automatisering wijzigen | Niet zelfstandig | CM FLOW |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + formele route |

---

## 14. Logging & Audit Trail

Per statuswijziging traceerbaar: wie · datum/tijd · vorige → nieuwe status · reden · contacthistorie/evidence ·
approval indien vereist · dependency/Waiting-On.

**Idempotency** — vóór creatie checken op bestaande lead/opportunity. Voorkeurskeys: counterparty + dealtype;
lead + bron; opportunity + periode. Doel: geen dubbele leads/opportunities/follow-ups.

---

## 15. Exceptions, rollback en fouten

- **Tool/API/permission failure:** stop veilig; log; `Blocked`; handoff → CM FLOW.
- **Verkeerde entiteit (FIERCE):** stoppen; niets vermengen; log; escaleren.
- **Dubbele lead:** niet deleten zonder governance; markeer duplicaat; audit trail behouden.
- **Foutieve externe benadering/toezegging (concept):** niet verzenden; risk markeren; escaleren naar Sophia.

---

## 16. Dag-, week- en maandritme

- **Dagelijks:** nieuwe leads/Fit Checks; follow-ups die vandaag vervallen; `Blocked`/`Escalated`.
- **Wekelijks:** pipeline-review per stage; aging follow-ups; renewals/upsells; stalled deals → CM CONTROL.
- **Maandelijks:** pipeline-health/forecast (met MONEY); win/loss-analyse; recurring blockers → CM CONTROL.

---

## 17. KPI's

| KPI | Norm |
|---|---:|
| Leads met Fit Check + owner | 100% |
| Externe benadering/voorstel zonder Sophia | 0 |
| Prijs/toezegging door PROSPECT | 0 |
| Follow-ups met follow-updatum | 100% |
| Won-deals met LEGAL + OPS handoff | 100% |
| Dubbele leads/opportunities | 0 |
| CM/FIERCE commerciële vermenging | 0 |
| Pipeline-forecast op tijd | 100% |

---

## 18. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal: PROSPECT-paspoort Level 3; `PIPELINE`
gereconcilieerd met live lijsten; pipeline-follow-up-scenario (nu te registreren) getest en
geactiveerd; functionele + red-team tests geslaagd (o.a. poging tot externe outreach → veilige stop);
monitoring/logging actief; Sophia-production approval geregistreerd; runbook hervalideerd.

> Tot dan: **gecontroleerd pre-production uitvoermodel; geen bewijs dat capabilities live zijn.**

---

## 19. Definition of Done — CM PROSPECT als operating system

CM PROSPECT is operationeel gezond wanneer: elke lead een Fit Check + owner heeft; geen externe
benadering of voorstel zonder Sophia loopt; prijzen/voorwaarden nooit door PROSPECT worden toegezegd;
Won-deals correct naar LEGAL en OPS gaan; renewals/upsells actief bewaakt worden; CM en FIERCE
gescheiden blijven; de agent veilig stopt bij ontbrekende data of een niet-groene gate.

---

## 20. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste PROSPECT-runbook op de v2.0-standaard, verankerd in de PIPELINE-folder, de commerciële stage-flow en de Sophia-gate voor externe benadering en voorstellen. |
