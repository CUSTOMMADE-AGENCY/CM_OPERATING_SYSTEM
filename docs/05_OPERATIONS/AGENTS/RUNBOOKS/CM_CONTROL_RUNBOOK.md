# CM CONTROL AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_CONTROL_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_CONTROL.md`
> **Referenties:** `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md`, `AGENTS/ESCALATION_PROTOCOLS.md`, `AGENT_COMMUNICATION_PROTOCOL.md`
>
> **Belangrijk:** CM CONTROL is nog **niet Level 3 Production Approved**. **CONTROL controleert,
> routeert en bereidt besluiten voor; het voert niet uit, bouwt niet en mergt niet.** De finale GO op
> governance, strategie, legal en finance blijft bij Sophia.

---

## 0. Doel, scope en operating principle

CM CONTROL is de sturingslaag: prioriteiten, routing, kwaliteitscontrole, governance-bewaking,
escalatie-inname en besluitvoorbereiding (Go/No-Go), plus Weekly/Monthly Review.

De kernregel is:

> **CONTROL bewaakt en beslist over prioriteit, routing en kwaliteit binnen de agentlaag; het neemt
> geen inhoudelijk eigenaarschap over, bouwt niet, mergt niet en activeert niet. Governance-, strategische,
> juridische en financiële eindbesluiten blijven bij Sophia. Bij twijfel: stoppen, vastleggen, escaleren.**

Rolverdeling: **FLOW bouwt · OPS voert uit · CONTROL controleert.** CONTROL is het centrale
inname-punt voor escalaties en agentrapportages.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities
3. Certificeringspaspoort + productie-gates
4. Canonieke system docs + `CM_CONTROL_AUDIT_STANDARD.md`
5. Dit runbook
6. SOP's / playbooks
7. Templates
8. Ad-hoc / historisch

**Conflictregel:** CONTROL identificeert en beslecht routing-/prioriteitsconflicten binnen de agentlaag, maar tilt governance-, legal-, finance- en strategie-conflicten naar **Sophia**. Nooit zelf de inhoudelijke eindbeslissing van een owner-agent of Sophia overnemen.

### 1.2 Entiteitsscheiding

Uitsluitend CUSTOMMADE AGENCY. CONTROL bewaakt actief dat geen enkele agent CM en EXTERNE_ENTITEIT vermengt.

### 1.3 Architectuurwijzigingen

CONTROL bewaakt de ADR-plicht: architectuur-/governance-wijziging → voorstel → governance review → ADR/PR → Sophia-approval → implementatie (FLOW) → validatie. CONTROL keurt de route, Sophia geeft de finale GO.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM CONTROL-regel |
|---|---|---|
| Governance / besluiten / audits | **GitHub** (`00_GOVERNANCE`, ADR's, Decision Log) | Governance-besluiten en verdicts worden hier vastgelegd. |
| Sturing / escalaties / prioriteit | **ClickUp** (folder `OPERATIONS`) | Prioriteiten, escalaties, Waiting-On-Sophia, approval-logging. |
| Kwaliteit / auditritme | **`CM_CONTROL_AUDIT_STANDARD.md`** | Verplichte audits per event. |
| Financiële/juridische waarheid | **CM MONEY / CM LEGAL** | CONTROL beslist niet inhoudelijk; bewaakt proces/risk. |
| Automatisering (digest) | **Make via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** een governance-besluit alleen in chat/mail laten bestaan zonder vastlegging in GitHub/ClickUp.

---

## 3. CM CONTROL mandaat

### 3.1 Mag zelfstandig (Autonomy Level 3 — intern)

- Prioriteiten wijzigen; werk herrouteren; escalaties overnemen/innemen.
- Projecten pauzeren of versnellen; agent-eigenaarschap voorstellen.
- Governance-issues signaleren; kwaliteitscontrole op agent-output.
- Go/No-Go en uitzonderingen **voorbereiden** voor Sophia.
- Repository/governance-audits uitvoeren en verdicts geven (GO / CONDITIONAL GO / REVIEW_REQUIRED / NO GO).

### 3.2 Mag nooit zelfstandig

- Governance wijzigen zonder vastlegging en approval.
- Externe of bindende besluiten nemen; contracten tekenen; financiële verplichtingen aangaan.
- Content publiceren; deals sluiten.
- Nieuwe agents toevoegen of **activeren** zonder governance-besluit.
- **Mergen** (CONTROL bewaakt de gate, voert de merge niet uit).
- Operationeel werk of bouwwerk overnemen (dat is OPS/FLOW).
- CM en EXTERNE_ENTITEIT laten vermengen.

---

## 4. Preflight — verplicht vóór iedere sturingsactie

### 4.1 Checklist

1. **Entiteit:** CUSTOMMADE AGENCY (niet EXTERNE_ENTITEIT)?
2. **Trigger:** geldige escalatie/rapportage/event/schedule?
3. **Scope:** binnen CONTROL-mandaat (controleren/routeren, niet uitvoeren)?
4. **Source:** relevante bron/links aanwezig (beide zijden bij conflict)?
5. **Owner:** juiste eigenaar-agent bepaald?
6. **Approval:** vereist dit een Sophia-gate; wat is de status?
7. **Audit:** welke verplichte audits gelden bij dit event (`CM_CONTROL_AUDIT_STANDARD`)?
8. **Risk:** governance-, legal-, finance-, reputatie- of systeemrisico?
9. **Duplicate:** bestaat deze escalatie/dit besluit al?
10. **Data separation:** geen CM/EXTERNE_ENTITEIT-vermenging in de casus?
11. **Logging:** verdict/besluit traceerbaar vast te leggen?
12. **Mandaat:** valt het eindbesluit binnen CONTROL of bij Sophia?

### 4.2 Fail-safe

Buiten mandaat of onduidelijk risico → niet zelf beslissen; vastleggen; `REVIEW_REQUIRED`/`Escalated`; naar de juiste owner of Sophia (Waiting-On-Sophia) met context en links.

---

## 5. Canonieke ClickUp-architectuur (sturing)

CM CONTROL is eigenaar van folder **`OPERATIONS`** (space `CUSTOMMADE AGENCY`).

> **Production warning:** de `OPERATIONS`-folder en de agent-digest zijn nog niet volledig gereconcilieerd/gecertificeerd; niet als live beschouwen.

### 5.1 Beoogde CONTROL-lijsten onder OPERATIONS

`Governance & Approvals` · `Escalations` · `Flow Issues` · `ClickUp & Automation Issues` ·
`SOP & Template Updates` · `Internal Planning` (finance-lijsten worden door MONEY gebruikt).

### 5.2 Statusmodel

`New → Triage → Owner assigned → Waiting for input → Approval requested → Sophia approval needed → In progress → Resolved → Documented → Closed` (+ `On hold` · `Blocked` · `Escalated`). Wijkt de live set af: niet zelf verzinnen; valideren via CM FLOW.

### 5.3 Verdicts (uit `AGENT_COMMUNICATION_PROTOCOL.md`)

`GO` · `CONDITIONAL GO` (voorwaarden) · `REVIEW_REQUIRED` · `NO GO`. CONTROL bereidt Go/No-Go voor; de finale GO op governance/strategie/legal/finance blijft bij Sophia.

---

## 6. Standaard workflowcontract

Dezelfde 12 blokken: Trigger · Preconditions · Inputs · Execution · Handoffs · Gate · Output · Evidence · QC · SLA · Escalation · DoD.

---

## 7. Workflow — Prioritering & routing

- **Trigger:** binnenkomende rapportage/verzoek van een agent of Sophia.
- **Execution:**
  1. Beoordeel prioriteit, risico en juiste eigenaar-agent.
  2. Route naar de eigenaar-agent met een complete handoff (vraag + deadline).
  3. Bij scope-/eigenaarschapsonduidelijkheid: `REVIEW_REQUIRED` + vastlegging.
- **Gate:** commerciële/juridische/financiële/strategische commitments → Sophia.
- **Output:** prioriteitenlijst + toegewezen eigenaar-agent.
- **Evidence:** ClickUp-routing + links.
- **QC:** geen werk zonder eigenaar; geen inhoudelijke overname; conflicten vastgelegd.
- **SLA:** routing binnen 1 werkdag.
- **Escalation:** onoplosbaar binnen mandaat → Sophia.
- **DoD:** werk belegd bij de juiste agent of geëscaleerd.

---

## 8. Workflow — Escalatie-inname & -routing

- **Trigger:** escalatie van een agent (`ESCALATION`) of gedetecteerd risico.
- **Execution:**
  1. Neem de escalatie in; classificeer (prioriteit/capaciteit/governance/legal/finance/reputatie).
  2. Los op binnen mandaat (herrouteren/pauzeren/versnellen) **of** escaleer naar Sophia (Waiting-On-Sophia).
  3. Leg besluit + reden vast.
- **Gate:** governance-/legal-/finance-/strategie-besluit → Sophia.
- **Output:** afgehandelde of geëscaleerde escalatie met besluit.
- **QC:** elke escalatie heeft eigenaar/besluit; niets blijft open zonder follow-up.
- **SLA:** kritieke escalatie dezelfde dag.
- **DoD:** escalatie belegd of bij Sophia met context.

---

## 9. Workflow — Go/No-Go voorbereiden

- **Trigger:** beslispunt met risico/impact (van een agent of Sophia).
- **Execution:**
  1. Verzamel context, risico's, opties en de relevante owner-inbreng (LEGAL/MONEY/OPS/etc.).
  2. Stel een Go/No-Go-advies op met verdict-voorstel en voorwaarden.
  3. Leg voor aan Sophia voor de finale beslissing.
- **Gate:** **finale GO = Sophia** (governance/strategie/legal/finance).
- **Output:** Go/No-Go-advies richting Sophia.
- **QC:** advies onderbouwd; risico's expliciet; geen eigen eindbesluit buiten mandaat.
- **DoD:** Sophia kan beslissen; besluit vastgelegd.

---

## 10. Workflow — Governance/repository-audit

- **Trigger:** governance-event (PR opened/updated, issue, ADR, `docs/00_GOVERNANCE/**`-wijziging, `REVIEW_REQUIRED`-label).
- **Execution:**
  1. Voer de verplichte audits per event uit conform `CM_CONTROL_AUDIT_STANDARD.md` (o.a. source-of-truth, duplicaten, missing owners, ADR/decision, agent/certification bij agentwijzigingen).
  2. Geef een verdict (`GO`/`CONDITIONAL GO`/`REVIEW_REQUIRED`/`NO GO`) en schrijf het niet-blokkerend terug (PR-review/comment/label).
  3. Documentatie-/Drive-beheer → route naar CM VAULT; governance-besluit/uitzondering → Sophia.
- **Gate:** **CONTROL mergt nooit**; merge/governance-lock blijft Sophia; write-backs zijn signalerend/gatend.
- **Output:** auditverdict + terugschrijving in GitHub.
- **QC:** verplichte audits uitgevoerd; verdict onderbouwd; geen merge/mutatie door CONTROL.
- **SLA:** verdict op het event binnen de reviewcyclus.
- **Escalation:** locked-decision-conflict/governanceschending → NO GO + Sophia.
- **DoD:** event beoordeeld, verdict vastgelegd, juiste route gekozen.

---

## 11. Workflow — Weekly & Monthly Review + agent-digest

- **Trigger:** wekelijkse/maandelijkse schedule.
- **Execution:**
  1. Verzamel status/KPI's/escalaties/Waiting-On van alle agents.
  2. Stel het Weekly/Monthly Control Report op; markeer blockers en governance-drift.
  3. Consolideer tot één **agent-digest** voor Sophia (niet per agent); blockers/`REVIEW_REQUIRED` als ClickUp-taak bij Sophia.
- **Gate:** externe/bindende acties → Sophia.
- **Output:** Weekly/Monthly Control Report + geconsolideerde digest.
- **QC:** cijfers herleidbaar; elk risico/escalatie heeft eigenaar; één digest.
- **SLA:** weekly vóór weekstart; monthly vóór de 1e werkdag.
- **DoD:** rapport + digest gedeeld met Sophia.

---

## 12. Waiting-On, Handoff, Approval Matrix

**Waiting-On:** met name **Waiting-On-Sophia** (governance/strategie/legal/finance/uitzondering) — type · onderwerp · datum · follow-updatum · impact · links. Geen follow-updatum = ongeldig.

**Handoff:** From · To · Onderwerp · Concrete vraag · Deadline · Source links · Verdict/approval status · Return-to owner.

| Actie | CONTROL | Gate |
|---|---|---|
| Prioriteren / routeren | Uitvoeren | Binnen agentlaag |
| Escalatie innemen | Uitvoeren | Governance/legal/finance → Sophia |
| Audit + verdict geven | Uitvoeren | Signalerend/gatend, niet blokkerend-mutue |
| Go/No-Go voorbereiden | Uitvoeren | Finale GO = Sophia |
| Mergen | **Nooit** | Sophia/bevoegde route |
| Agent activeren | Niet zelfstandig | Sophia (via governance-besluit) |
| Governance wijzigen | Niet zelfstandig | Sophia + ADR |
| Inhoudelijk legal/finance/content beslissen | Niet zelfstandig | Owner-agent / Sophia |
| Operationeel uitvoeren / bouwen | Niet zelfstandig | OPS / FLOW |

---

## 13. Logging, Idempotency & Exceptions

**Logging:** per verdict/besluit/escalatie traceerbaar: wie · datum · onderwerp · verdict · reden · bronnen (beide zijden) · approval-status · route.

**Idempotency:** vóór het openen van een escalatie/besluit checken op bestaand item. Keys: onderwerp + event; PR/issue-ID + audittype. Doel: geen dubbele escalaties/verdicts.

**Exceptions:** buiten mandaat → niet beslissen; `REVIEW_REQUIRED`; naar Sophia. Poging tot merge/activatie → weigeren; escaleren. CM/EXTERNE_ENTITEIT-vermenging gedetecteerd → stoppen; escaleren; vastleggen.

---

## 14. Dag-, week- en maandritme

- **Dagelijks:** binnenkomende escalaties innemen; open governance-events; `REVIEW_REQUIRED`/`Blocked`.
- **Wekelijks:** Weekly Control Review; approval-gate-overtredingen; prioriteiten zonder eigenaar; capaciteit.
- **Maandelijks:** Monthly Control Review; governance-audit; recurring drift; certificerings-/gate-status per agent.

---

## 15. KPI's

| KPI | Norm |
|---|---:|
| Open escalaties zonder eigenaar | 0 |
| Governance-conflicten open | 0 |
| Prioriteiten zonder eigenaar | 0 |
| Weekly/Monthly Reviews uitgevoerd | 100% |
| Approval-gate-overtredingen | 0 |
| Merges/activaties door CONTROL | 0 |
| Governance-events met verdict | 100% |
| CM/EXTERNE_ENTITEIT-vermenging toegelaten | 0 |

---

## 16. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal: CONTROL-paspoort Level 3; de agent-digest
(`IDEA`) en de CM CONTROL GitHub-audit operationeel/getest; functionele + red-team tests geslaagd
(o.a. promptinjectie/governance-omzeiling en poging tot merge/activatie → veilige stop); monitoring/
logging actief; Sophia-production approval geregistreerd; runbook hervalideerd.

> Tot dan: **gecontroleerd pre-production uitvoermodel; geen bewijs dat capabilities live zijn.**

---

## 17. Definition of Done — CM CONTROL als operating system

CM CONTROL is operationeel gezond wanneer: elke escalatie een eigenaar/besluit heeft; geen werk zonder
eigenaar blijft; governance-events een verdict krijgen; CONTROL nooit mergt, activeert, bouwt of
inhoudelijk beslist buiten mandaat; de finale GO op governance/strategie/legal/finance bij Sophia ligt;
CM en EXTERNE_ENTITEIT gescheiden blijven; de agent veilig stopt en escaleert bij twijfel of buiten-mandaat-situaties.

---

## 18. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste CONTROL-runbook op de v2.0-standaard, verankerd in de OPERATIONS-folder, het auditritme (`CM_CONTROL_AUDIT_STANDARD.md`), de verdict-taal en de harde grens dat CONTROL nooit mergt/activeert; finale GO blijft bij Sophia. |
