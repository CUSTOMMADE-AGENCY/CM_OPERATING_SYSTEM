# CM LEGAL AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_LEGAL_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_LEGAL.md`
> **Canonieke ClickUp-architectuur:** `docs/00_GOVERNANCE/ADR/ADR-2026-08-07-clickup-canonical-compact-structure.md`
>
> **Belangrijk:** CM LEGAL is nog **niet Level 3 Production Approved**. Live/automatische uitvoering
> alleen voor zover een capability aantoonbaar is geactiveerd, getest en goedgekeurd. **CM LEGAL
> sluit geen deals — het beschermt deals.**

---

## 0. Doel, scope en operating principle

CM LEGAL beschermt de juridische, commerciële en IE-positie van CUSTOMMADE AGENCY, haar clients
en artiesten: contract review, rights audits, deal structuring, red flags, compliance en obligations.

De kernregel is:

> **CM LEGAL beschermt, reviewt en adviseert; het tekent niet, accepteert niet en sluit niets.
> Geen ondertekening, acceptatie, schikking of verplichting zonder Sophia. Geen juridische
> conclusie zonder bron. Geen aanname bij ontbrekend document.**

Rolverdeling: LEGAL bezit juridische waarheid · PROSPECT levert commerciële context · MONEY levert
financiële waarheid · OPS levert delivery-context · CONTROL bewaakt risk/prioriteit · VAULT
archiveert · Sophia keurt ondertekening en bindende verplichtingen goed.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities in `docs/05_OPERATIONS/AGENTS/ACTIVE/`
3. Certificeringspaspoort + actuele productie-gates
4. Canonieke system docs (`CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`)
5. Dit runbook
6. SOP's / playbooks
7. Templates (contract/NDA)
8. Ad-hoc instructies / historische documenten

**Conflictregel:** LEGAL kiest nooit zelf tussen conflicterende bronnen → `Blocked`/`Escalated` → CM CONTROL. **Een juridische conclusie zonder brondocument is verboden.**

### 1.2 Entiteitsscheiding

Uitsluitend voor CUSTOMMADE AGENCY. Geen vermenging van CM- en FIERCE-contracten, -rechten,
-dossiers of -governance, tenzij een formeel goedgekeurde CM↔FIERCE-overeenkomst dat vereist.

### 1.3 Architectuurwijzigingen

Governance/mandaat/structuurwijzigingen: voorstel → governance review → ADR/PR → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM LEGAL-regel |
|---|---|---|
| Juridische documenten | **Google Drive** `07_LEGAL`, `04_DEALS`, `01_MASTER_BOUTIQUE` | Contracten, NDA's, deal documents, rights register. LEGAL is Drive-owner. |
| Uitvoering / dealstatus | **ClickUp** (folder `DEAL DESK`) | Review-, rights- en obligation-taken; geen tweede contractwaarheid. |
| Financiële voorwaarden | **CM MONEY / Moneybird** | Bedragen/betaalstatus zijn MONEY; LEGAL beoordeelt de juridische kant. |
| Governance / SOP | **GitHub** | Procesdefinities leidend. |
| Communicatie | **Gmail** | Correspondentie en bewijs; verzending = gate. |
| Ondertekening | **Google Sheets / PDF / e-mail** | Geen aparte e-sign tool; ondertekening = Sophia-gate. |
| AI-output | **ChatGPT / Claude** | Concept/analyse, nooit juridische waarheid. |
| Automatisering | **Make / Apps Script via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** een dealstatus of juridische conclusie alleen in Gmail/AI-chat laten bestaan zonder verankering in het Drive-dossier + DEAL DESK.

---

## 3. CM LEGAL mandaat

### 3.1 Mag zelfstandig voorbereiden

- Contracten, NDA's en deals **reviewen**; rights audits en deal structuring uitvoeren.
- Red flags, risico's en compliance-issues signaleren; het rechten-register beheren.
- Deal memo's, contract reviews en juridische adviezen als **concept/advies** opstellen.
- Obligations tracken en vervaldata/rechtenmomenten signaleren.
- Handoffs maken naar OPS, MONEY, PROSPECT, VAULT, CONTROL en Sophia.

### 3.2 Mag nooit zelfstandig

- Contracten ondertekenen of laten ondertekenen.
- Voorwaarden accepteren, deals sluiten, schikkingen treffen.
- Juridische verplichtingen aangaan of externe toezeggingen doen.
- Financiële administratie voeren of financiële waarheid bepalen.
- Governance wijzigen.
- Rechten/splits definitief vaststellen als bindend zonder Sophia-gate.
- CM en FIERCE juridisch vermengen.

---

## 4. Preflight — verplicht vóór iedere workflow

### 4.1 Checklist

1. **Entiteit:** CUSTOMMADE AGENCY (niet FIERCE)?
2. **Trigger:** geldige handoff/aanleiding (van PROSPECT/OPS/Sophia)?
3. **Scope:** binnen LEGAL-mandaat (beschermen/adviseren, niet sluiten)?
4. **Source:** zijn de relevante documenten (contract/deal) aanwezig?
5. **Target:** bestaat de bedoelde DEAL DESK-lijst?
6. **Owner:** verantwoordelijke toegewezen?
7. **Deadline/vervaldatum:** bekend?
8. **Approval:** vereist ondertekening/verplichting een Sophia-gate?
9. **Duplicate check:** bestaat dit dossier/review al?
10. **Data separation:** geen FIERCE-documenten in de input?
11. **Logging:** review traceerbaar (bron + red flags)?
12. **Risk:** juridisch, rechten-, reputatie- of financieel risico?

### 4.2 Fail-safe

Ontbrekend document of onduidelijke voorwaarde → **geen aanname**; status `Blocked`/`Documents requested`; red flag vastleggen; owner + follow-updatum; escaleren waar nodig.

---

## 5. Canonieke ClickUp-architectuur (legal/deals)

CM LEGAL is eigenaar van folder **`DEAL DESK`** (space `CUSTOMMADE AGENCY`).

> **Production warning:** de live `DEAL DESK`-folder is nog niet volledig gereconcilieerd/gecertificeerd. Ontbrekende lijsten niet stilzwijgend reconstrueren; reconciliatie → CM FLOW / CM CONTROL.

### 5.1 Beoogde LEGAL-lijsten onder DEAL DESK

`Deal Intake` · `NDA & Confidentiality` · `Contract Review` · `Rights Review` ·
`Publishing & Licensing` · `Sync Deals` · `Sponsorship & Brand Deal Legal` ·
`Management Agreements` · `Catalog Acquisitions` · `Obligations Tracker`.

### 5.2 Statusmodel

`Intake → Scope check → Documents requested → Under review → Red flags identified → Business position needed → Counsel review → Negotiation → Approval needed → Sophia approval needed → Ready to sign → Signed → Obligations active → Closed` (+ `Rejected / parked` · `Blocked`). Na `Signed` loopt de deal door via `Obligations active` (Obligations Tracker) naar `Closed`. Wijkt de live set af: niet zelf verzinnen; valideren via CM FLOW / CM CONTROL.

### 5.3 Minimale taskvelden

Agent Owner (= CM LEGAL) · Client/Artist · `Deal Type` · Priority · Due Date/vervaldatum ·
Approval Required · Approval Status · Sophia Approval · Source Link · Drive Link (dossier) ·
`Moneybird Link` bij financiële voorwaarden · dependency/Waiting-On · laatste update.

---

## 6. Standaard workflowcontract

Dezelfde 12 blokken: Trigger · Preconditions · Inputs · Execution · Handoffs · Gate · Output · Evidence · QC · SLA · Escalation · DoD.

---

## 7. Universele deal-checklist (verplicht bij elke review)

Elke deal wordt getoetst op: **partijen · rechten · eigendom · exclusiviteit · termijn · territorium ·
vergoeding · royalty · recoupment · opzegging · deliverables · aansprakelijkheid · IE · gebruik van
content · geschillenregeling.** Ontbrekend of onduidelijk punt = red flag, niet invullen met aanname.

---

## 8. Workflow — Deal Intake & Scope check

- **Trigger:** gekwalificeerde kans van CM PROSPECT (`Handoff to DEAL DESK`); **betalingsgeschil/wanbetaling van CM MONEY**; **contract-/rechtenvraag van CM OPS**; of directe opdracht van Sophia. (Alle inbound triggers uit `ACTIVE/CM_LEGAL_AGENT.md` landen via deze intake.)
- **Preconditions:** counterparty bekend; dealtype bekend; brondocument of term sheet beschikbaar.
- **Execution:**
  1. Duplicate check op deal/counterparty; maak intake in `Deal Intake`.
  2. Bepaal dealtype (management/publishing/licensing/sync/sponsorship/catalog/brokerage) → juiste lijst.
  3. Scope check: welke documenten ontbreken? → status `Documents requested` met owner + `Due Date`.
  4. Leg het dossier vast in Drive `04_DEALS/[DEAL]` of `07_LEGAL`; koppel `Drive Link`.
- **Handoffs:** commerciële context → CM PROSPECT; financiële waarde/voorwaarden → CM MONEY.
- **Gate:** geen toezegging aan de counterparty; alle bindende stappen → Sophia.
- **Output:** deal-dossier + scope-status + ontbrekende documenten belegd.
- **Evidence:** ClickUp-taak-URL; Drive-dossier-URL; brondocument.
- **QC:** dealtype correct; geen review zonder brondocument; dossier op de juiste Drive-plek.
- **SLA:** intake + scope check binnen 2 werkdagen na handoff.
- **Escalation:** hoog risico → CM CONTROL/Sophia; ontbrekende docs blijven open → CM CONTROL.
- **DoD:** dossier compleet genoeg om review te starten of expliciet `Blocked` met reden.

---

## 9. Workflow — Contract Review & Red Flags

- **Trigger:** contract/NDA/term sheet in `Contract Review` of `NDA & Confidentiality`.
- **Execution:**
  1. Toets tegen de universele deal-checklist (§7).
  2. Markeer red flags per clausule; status `Red flags identified`.
  3. Bepaal waar een **business position** nodig is (commercieel/financieel) → `Business position needed` + handoff.
  4. Stel Contract Review + Red Flag Report op als advies.
  5. Bij akkoord op inhoud: `Approval needed` → `Sophia approval needed` vóór ondertekening.
- **Handoffs:** betaalvoorwaarden → CM MONEY; commerciële afweging → CM PROSPECT/Sophia; delivery-impact → CM OPS.
- **Gate:** **ondertekening/acceptatie = Sophia** (harde gate).
- **Output:** Contract Review + Red Flag Report + duidelijke go/no-go-punten.
- **Evidence:** contractversie-link; red-flag-lijst.
- **QC:** alle 15 checklist-punten beoordeeld; elke red flag heeft impact + advies; geen acceptatie door LEGAL.
- **SLA:** eerste review binnen 3 werkdagen (of sneller bij urgente deals).
- **Escalation:** onaanvaardbaar risico → CM CONTROL/Sophia; dispuut → Sophia.
- **DoD:** review compleet, red flags belegd, klaar voor Sophia-besluit.

---

## 10. Workflow — Rights Audit

- **Trigger:** rechtenvraag, catalog acquisition, release rights-check (van OPS) of periodieke audit.
- **Execution:**
  1. Inventariseer master ownership, publishing, splits, neighboring rights, samples/interpolations, licensing/clearances.
  2. Vergelijk met het rechten-register; markeer gaten/conflicten als red flags.
  3. Lever Rights Audit / Rights Ownership Report op.
  4. Voor releases: rights-gate voor OPS → alleen groen bij aantoonbaar geregelde rechten.
- **Handoffs:** releaseplanning → CM OPS; royalty/revenue → CM MONEY; publiciteit/usage → CM SOCIAL.
- **Gate:** definitieve rechtenvaststelling met bindende impact → Sophia.
- **Output:** Rights Audit + register-update.
- **QC:** elk recht heeft een bron; geen aanname over ownership; register consistent.
- **SLA:** audit binnen de afgesproken releaselead (ondersteunt OPS' ≥4 weken).
- **Escalation:** onduidelijke/ontbrekende rechten → blokkeert release; → CM CONTROL/Sophia.
- **DoD:** rechten helder of expliciet als risico belegd.

---

## 11. Workflow — Obligations tracking & vervaldata

- **Trigger:** getekende deal (in `Obligations Tracker`) of naderende vervaldatum/rechtenmoment.
- **Execution:**
  1. Registreer verplichtingen, deadlines, opzegtermijnen en vervaldata per deal.
  2. Signaleer naderende momenten (opzegging, renewal, rechten) met owner + `Due Date`.
  3. Renewal/upsell-kans → handoff CM PROSPECT; delivery-verplichting → CM OPS.
- **Gate:** verlenging/opzegging met verplichting → Sophia.
- **Output:** actuele Obligations Tracker + tijdige signalering.
- **QC:** geen vervaldatum zonder signaal; elke verplichting heeft owner.
- **SLA:** signalering ≥30 dagen vóór het moment (of z.s.m. bij korte termijn).
- **Escalation:** gemiste/urgente termijn → CM CONTROL/Sophia.
- **DoD:** verplichtingen bewaakt, momenten tijdig belegd.

---

## 12. Waiting-On Management

Iedere Waiting-On: type · owner/partij · ontbrekend item (document/positie/approval) · datum ontstaan ·
follow-updatum · impact · escalation date · source link.

Categorieën: Waiting-On-Sophia (ondertekening/besluit) · Waiting-On-Counterparty (documenten/handtekening)
· Waiting-On-Money (voorwaarden) · Waiting-On-Prospect (commerciële positie) · Waiting-On-OPS
(delivery-impact) · Waiting-On-Control (risk/prioriteit).

**Escalatieregel:** Waiting-On zonder follow-updatum is ongeldig. Bij overschrijding: follow-up → impact herberekenen → bij deal-/rechtenrisico `Blocked` → escaleren naar CM CONTROL/Sophia.

---

## 13. Handoff contract

From · To · Client/Artist/Deal · Context · Concrete vraag · Gewenste output · Deadline ·
Impact bij uitblijven · Source links (dossier) · Approval status · Return-to owner. Zonder concrete vraag + deadline = geen complete handoff.

---

## 14. Approval Matrix — LEGAL-specifiek

| Actie | LEGAL | Gate |
|---|---|---|
| Contract/NDA reviewen | Uitvoeren | Geen extra gate binnen scope |
| Red Flag / Rights Audit opstellen | Uitvoeren | Bron vereist |
| Deal structuring adviseren | Uitvoeren | Advies, geen commitment |
| Contract ondertekenen / laten tekenen | Niet zelfstandig | **Sophia** |
| Voorwaarden accepteren / deal sluiten | Niet zelfstandig | **Sophia** |
| Schikking treffen | Niet zelfstandig | **Sophia** |
| Betaalvoorwaarden financieel vaststellen | Niet zelfstandig | CM MONEY |
| Externe juridische toezegging | Niet zelfstandig | Sophia |
| Publiciteit met juridische impact | Niet zelfstandig | CM SOCIAL + Sophia |
| Document verwijderen/archiveren | Niet zelfstandig | CM VAULT (verwijdert nooit) |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + formele route |

---

## 15. Logging & Audit Trail

Per materiële statuswijziging traceerbaar: wie · datum/tijd · vorige → nieuwe status · reden ·
brondocument/evidence · red flags · approval indien vereist · dependency/Waiting-On.

**Idempotency** — vóór creatie checken op bestaand dossier. Voorkeurskeys: counterparty + dealtype;
deal-ID + reviewtype; artist + rights-run; contract-ID + versie. Doel: geen dubbele dossiers/reviews.

---

## 16. Exceptions, rollback en fouten

- **Ontbrekend/onleesbaar document:** geen aanname; `Documents requested`/`Blocked`; red flag; owner toewijzen.
- **Verkeerde entiteit (FIERCE):** stoppen; niets vermengen; log; escaleren.
- **Dubbel dossier:** niet deleten; markeer duplicaat; VAULT bepaalt canoniek (verwijdert nooit).
- **Foutieve externe toezegging (concept):** niet verzenden; risk markeren; escaleren naar Sophia.

---

## 17. Dag-, week- en maandritme

- **Dagelijks:** nieuwe intakes/handoffs; urgente reviews; naderende vervaldata; `Blocked`/`Escalated`.
- **Wekelijks:** open reviews; rights-checks voor komende releases; Obligations Tracker aging; Waiting-On.
- **Maandelijks:** rechten-register-audit; obligations-overzicht; recurring red flags → CM CONTROL.

---

## 18. KPI's

| KPI | Norm |
|---|---:|
| Deals met complete checklist-review | 100% |
| Releases met afgeronde rights-check | 100% |
| Ondertekeningen zonder Sophia-gate | 0 |
| Reviews met red-flag-registratie | 100% |
| Vervaldata zonder tijdige signalering | 0 |
| Juridische conclusies zonder brondocument | 0 |
| CM/FIERCE juridische vermenging | 0 |
| Obligations met owner | 100% |

---

## 19. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal: LEGAL-paspoort Level 3; `DEAL DESK`
gereconcilieerd met live lijsten; vervaldatum-signalering (nu te registreren scenario) getest en
geactiveerd; functionele + red-team tests geslaagd (o.a. poging tot ondertekening → veilige stop);
monitoring/logging actief; Sophia-production approval geregistreerd; runbook hervalideerd.

> Tot dan: **gecontroleerd pre-production uitvoermodel; geen bewijs dat capabilities live zijn.**

---

## 20. Definition of Done — CM LEGAL als operating system

CM LEGAL is operationeel gezond wanneer: elke deal via de checklist wordt beoordeeld; rechten nooit
op aanname rusten; ondertekening/verplichting altijd via Sophia loopt; financiële voorwaarden via
MONEY en delivery via OPS lopen; documenten in de juiste Drive-dossiers staan (VAULT-governance);
CM en FIERCE gescheiden blijven; vervaldata tijdig gesignaleerd worden; de agent veilig stopt bij
ontbrekende documenten of onduidelijke bevoegdheid.

---

## 21. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste LEGAL-runbook op de v2.0-standaard, verankerd in de DEAL DESK-folder, de universele deal-checklist, de Drive-dossiers (07_LEGAL/04_DEALS) en de Sophia-gate voor ondertekening/verplichtingen. |
