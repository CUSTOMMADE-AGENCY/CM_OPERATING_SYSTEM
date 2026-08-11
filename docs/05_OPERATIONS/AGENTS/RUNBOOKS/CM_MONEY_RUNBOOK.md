# CM MONEY AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM (eigen Moneybird-administratie)
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_MONEY_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_MONEY.md`
> **Canonieke ClickUp-architectuur:** `docs/00_GOVERNANCE/ADR/ADR-2026-08-07-clickup-canonical-compact-structure.md`
>
> **Belangrijk:** dit runbook beschrijft de beoogde operationele uitvoering. CM MONEY is nog
> **niet Level 3 Production Approved**. Live/automatische uitvoering alleen voor zover de
> betreffende capability aantoonbaar is geactiveerd, getest en goedgekeurd. CM MONEY **signaleert
> en rapporteert**; het voert geen betalingen uit en bepaalt geen verplichtingen.

---

## 0. Doel, scope en operating principle

CM MONEY bewaakt de **financiële waarheid** van CUSTOMMADE AGENCY: open posten, facturatie-status,
BTW-gereedheid, cashflow, revenue tracking, forecasting, royalty's, commissies en revenue share.

De kernregel is:

> **Moneybird is de enige financiële waarheid. MONEY signaleert en controleert, maar muteert geen
> geld, zegt geen betaling toe en dient niets in zonder Sophia. Geen financiële conclusie zonder
> bron. Geen aanname bij ontbrekende data.**

CM MONEY is de finance-executielaag van CM_OS:

- CM MONEY bezit financiële waarheid, signalering en rapportage.
- CM OPS levert operationele/projectcontext (geen finance-eigenaarschap).
- CM LEGAL bezit juridische waarheid (contractvoorwaarden, betaalvoorwaarden juridisch).
- CM CONTROL bewaakt prioriteit, cashflow-risico en escalatie.
- CM FLOW bouwt en onderhoudt de finance-automatiseringen (Moneybird ↔ ClickUp).
- CM VAULT bewaakt archivering van financiële bewijsstukken.
- Sophia keurt betalingen, betalingsregelingen, incasso en BTW-indiening goed.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities in `docs/05_OPERATIONS/AGENTS/ACTIVE/`
3. Certificeringspaspoort + actuele productie-gates
4. Canonieke system docs (`CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`, Moneybird-configuratie)
5. Dit runbook
6. SOP's / playbooks
7. Templates
8. Ad-hoc instructies / historische documenten

**Conflictregel:** MONEY kiest nooit zelf tussen conflicterende bronnen. Taak → `Blocked`/`Escalated` → CM CONTROL met links naar beide bronnen. **Financiële waarheid vs. andere bron: Moneybird wint.**

### 1.2 Entiteitsscheiding

Dit runbook geldt uitsluitend voor CUSTOMMADE AGENCY, met de **eigen CM Moneybird-administratie**
(lokale administratie-id). CM MONEY mag **nooit** CM- en EXTERNE_ENTITEIT-financiën, -facturen, -administraties
of -rapportages vermengen. Een MONEY-actie tegen de verkeerde administratie is een harde fout →
stop, log, escaleer.

### 1.3 Architectuurwijzigingen

Wijzigingen aan finance-architectuur, Moneybird-koppeling, agentmandaat of governance verlopen via:
voorstel → governance review → ADR/PR indien vereist → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM MONEY-regel |
|---|---|---|
| Financiële waarheid | **Moneybird** | Facturen, bonnen, kwitanties, omzet, BTW, open posten, cashflow. Enige waarheid. |
| Banktransacties | **Bank (via Moneybird)** | Matching/afletteren; MONEY signaleert mismatches. |
| Uitvoering / follow-up | **ClickUp** (folder `OPERATIONS`) | Finance-opvolgtaken, blockers, Waiting-On; nooit een tweede financiële boekhouding. |
| Documentopslag | **Google Drive** `OS_CUSTOMMADE/06_FINANCE` | Financiële bewijsstukken; geen waarheid, alleen opslag/verwijzing. |
| Juridische betaalvoorwaarden | **CM LEGAL** | MONEY interpreteert geen contractvoorwaarden zelf. |
| Communicatie | **Gmail** (`info@custommade.agency`) | Betaalherinneringen als concept; verzending = gate. |
| AI-output | **ChatGPT / Claude** | Werkproduct/concept, nooit financiële waarheid. |
| Automatisering | **Make / Apps Script via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** een financieel besluit of factuurstatus alleen in Gmail, AI-chat of een los sheet
laten bestaan zonder verankering in Moneybird + opvolging in ClickUp.

---

## 3. CM MONEY mandaat

### 3.1 Mag zelfstandig voorbereiden en uitvoeren

Binnen geactiveerde en geteste capabilities mag CM MONEY:

- Open posten, factuurstatus, betaalstatussen en bankmatching **controleren en signaleren**.
- BTW-gereedheid controleren en voorbereiden (niet indienen).
- Cashflow monitoren, forecasts en financiële rapporten opstellen.
- Revenue tracking, royalty-facturen, commission tracking en revenue share **controleren**.
- Ontbrekende financiële documenten en risico's signaleren; follow-up-taken in ClickUp maken.
- Betaalherinneringen als **concept** voorbereiden.
- Handoffs maken naar OPS, LEGAL, PROSPECT, CONTROL, VAULT, FLOW en Sophia.

### 3.2 Mag nooit zelfstandig

- Facturen, bonnen of kwitanties verwijderen of inhoudelijk wijzigen.
- BTW indienen zonder Sophia.
- Fiscaal advies geven of de jaarrekening opstellen; de accountant vervangen.
- Contracten of betaalvoorwaarden juridisch interpreteren zonder CM LEGAL.
- Betalingsregeling toezeggen of incasso starten zonder Sophia.
- Een betaling uitvoeren of extern toezeggen.
- Financiële documenten buiten Moneybird als waarheid behandelen.
- CM- en EXTERNE_ENTITEIT-financiën vermengen.

---

## 4. Preflight — verplicht vóór iedere workflow

### 4.1 Preflight checklist

1. **Entiteit/administratie:** juiste CM Moneybird-administratie (niet EXTERNE_ENTITEIT)?
2. **Trigger:** geldige aanleiding/handoff/schedule?
3. **Scope:** valt de taak binnen MONEY-mandaat (signaleren/rapporteren, niet muteren)?
4. **Source:** is de Moneybird-/bankbron aanwezig en actueel?
5. **Target:** bestaat de bedoelde ClickUp-lijst/capability werkelijk?
6. **Owner:** is een verantwoordelijke toegewezen voor de follow-up?
7. **Deadline/periode:** juiste boekperiode / due date bekend?
8. **Approval:** vereist de actie een Sophia-/LEGAL-gate en wat is de status?
9. **Duplicate check:** bestaat dit signaal/deze follow-up al?
10. **Data separation:** geen EXTERNE_ENTITEIT-data in de input?
11. **Logging:** is de controle traceerbaar (Moneybird-link + reden)?
12. **Risk:** cashflow-, debiteuren-, compliance- of reputatierisico?

### 4.2 Fail-safe

Bij een gefaalde preflight: geen aannames; geen dubbel signaal; status → `Blocked`/`Waiting On`/`Escalated`; reden vastleggen; eigenaar van de ontbrekende dependency toewijzen; follow-updatum zetten.

---

## 5. Canonieke ClickUp-architectuur (finance)

CM MONEY heeft **geen aparte hoofdmap**; finance-uitvoering valt onder folder **`OPERATIONS`**
(eigenaar CM CONTROL; MONEY is support-agent). Moneybird blijft de financiële waarheid; ClickUp
bevat alleen uitvoerende finance-taken, follow-up, deadlines, blockers en links naar Moneybird.

> **Production warning:** de live `OPERATIONS`-folder en de Moneybird-koppeling zijn nog niet
> volledig gereconcilieerd/gecertificeerd. Ontbrekende lijsten niet stilzwijgend reconstrueren of
> als live beschouwen; reconciliatie → CM FLOW / CM CONTROL.

### 5.1 Beoogde MONEY-lijsten onder OPERATIONS

- `Moneybird Follow-up`
- `Invoices & Open Items`
- `Cashflow Signals`

(Ondersteunend: `Governance & Approvals`, `Escalations`, `SOP & Template Updates`.)

### 5.2 Statusmodel

Gebruik alleen bestaande canonieke statussen: `New → Triage → Owner assigned → Waiting for input → Approval requested → Approved → Ready for handoff → Completed` (+ `On hold` · `Blocked` · `Escalated`). Wijkt de live set af: niet zelf verzinnen; laten valideren door CM FLOW / CM CONTROL.

### 5.3 Minimale taskvelden

- Agent Owner (= CM MONEY)
- Client / Artist (indien van toepassing)
- Priority
- Due Date / boekperiode
- Approval Required
- Approval Status
- Sophia Approval
- `Moneybird Link`
- Source Link / Drive Link (bewijsstuk in `06_FINANCE`)
- dependency / Waiting-On
- laatste operationele update

---

## 6. Standaard workflowcontract

Iedere workflow gebruikt dezelfde 12 blokken:

| Blok | Betekenis |
|---|---|
| Trigger | Geldige gebeurtenis of schedule die de workflow start |
| Preconditions | Wat aantoonbaar waar moet zijn vóór uitvoering |
| Inputs | Benodigde brondata (Moneybird/bank/context) |
| Execution | Genummerde acties |
| Handoffs | Welke andere agents nodig zijn |
| Gate | Verplichte approval |
| Output | Concrete deliverable (rapport/signaal) |
| Evidence | Moneybird-links/logs die uitvoering aantonen |
| QC | Kwaliteitscontrole |
| SLA | Interne doorlooptijd |
| Escalation | Wanneer en naar wie |
| DoD | Objectieve Definition of Done |

---

## 7. Workflow — Open Posten opvolging

- **Trigger:** wekelijkse schedule (bv. maandag 09:30) of ad-hoc signaal.
- **Preconditions:** Moneybird actueel; juiste CM-administratie; `Invoices & Open Items`-lijst bestaat.
- **Inputs:** open-invoice-lijst uit Moneybird (via API of handmatig), betaaltermijnen, klantcontext (OPS).
- **Execution:**
  1. Haal open posten op uit Moneybird; splits debiteuren/crediteuren.
  2. Per factuur ouder dan de termijn (bv. >14 dagen): duplicate check op bestaande follow-up.
  3. Maak/actualiseer follow-up-taak in `Invoices & Open Items` met `Moneybird Link`, bedrag, vervaldatum, owner, `Due Date`.
  4. Bereid betaalherinnering als **concept** voor (Gmail-template); verzending = gate.
  5. Signaleer betwiste/oninbare posten; escaleer bij wanbetaling/geschil → CM LEGAL.
- **Handoffs:** projectcontext → CM OPS; wanbetaling/incasso → CM LEGAL; hoge-omzetklant → CM PROSPECT.
- **Gate:** externe herinnering versturen → **Sophia/bevoegde owner**; incasso/betalingsregeling → **Sophia**.
- **Output:** Open Posten Rapport + actuele follow-up-taken.
- **Evidence:** Moneybird-links per post; ClickUp-taak-URL's.
- **QC:** elke openstaande post >termijn heeft één follow-up (geen duplicaten); geen post zonder `Moneybird Link`; geen incasso-actie zonder Sophia.
- **SLA:** wekelijkse cyclus afgerond binnen 1 werkdag na de schedule.
- **Escalation:** cashflow-impact → CM CONTROL; juridisch → CM LEGAL; ontbrekende projectinfo → CM OPS.
- **DoD:** alle open posten >termijn belegd met owner + follow-updatum; rapport gedeeld.

---

## 8. Workflow — BTW-gereedheid

- **Trigger:** einde BTW-periode (kwartaal/maand) − X dagen.
- **Preconditions:** boekingen van de periode verwerkt; ontbrekende documenten in beeld.
- **Inputs:** Moneybird BTW-overzicht; ontbrekende bonnen/facturen; grootboekstatus.
- **Execution:**
  1. Controleer volledigheid: ontbrekende inkoop-/verkoopdocumenten → `Ontbrekende Documenten`-signaal + follow-up.
  2. Controleer BTW-tarieven/-categorieën op afwijkingen; signaleer twijfelgevallen (geen fiscaal oordeel).
  3. Stel het **BTW Gereedheid Rapport** op: gereed / niet gereed + openstaande punten.
  4. Lever ter **indiening door Sophia/accountant** aan; MONEY dient niet zelf in.
- **Handoffs:** fiscale interpretatie → accountant (via Sophia); ontbrekende docs → CM OPS/klant.
- **Gate:** **BTW-indiening = Sophia** (harde gate).
- **Output:** BTW Gereedheid Rapport.
- **Evidence:** Moneybird BTW-overzicht-link; lijst ontbrekende documenten.
- **QC:** alle ontbrekende documenten gesignaleerd met owner; geen indiening door MONEY; geen fiscaal advies.
- **SLA:** rapport gereed ≥5 werkdagen vóór de indieningsdeadline.
- **Escalation:** ontbrekende docs blijven open → CM CONTROL; fiscale twijfel → Sophia/accountant.
- **DoD:** BTW-gereedheid vastgesteld, openstaande punten belegd, klaar voor Sophia.

---

## 9. Workflow — Cashflow monitoring & forecast

- **Trigger:** wekelijkse/maandelijkse schedule.
- **Preconditions:** actuele open posten, bankstand, bekende verplichtingen.
- **Inputs:** Moneybird open posten (in/uit), bankstand, geplande in-/uitgaven.
- **Execution:**
  1. Stel de actuele positie samen (bank + verwachte inkomsten − verplichtingen).
  2. Bouw een korte-termijn forecast; markeer krappe periodes.
  3. Signaleer **liquiditeitsrisico** en betaalblokkades → `Cashflow Signals` + escalatie.
  4. Lever cashflow-input aan CM CONTROL voor sturing.
- **Handoffs:** grote uitgave/commitment → CM CONTROL + Sophia; facturatieversnelling → CM OPS.
- **Gate:** externe/strategische financiële beslissing → **Sophia** (via CONTROL).
- **Output:** Cashflow Rapport + forecast + risicosignalen.
- **Evidence:** Moneybird-/bankreferenties.
- **QC:** cijfers herleidbaar tot Moneybird/bank; elk risico heeft owner/vervolg.
- **SLA:** rapport binnen de schedule-cyclus.
- **Escalation:** liquiditeitsrisico → CM CONTROL + Sophia direct.
- **DoD:** cashflow-beeld actueel; risico's belegd.

---

## 10. Workflow — Revenue tracking, royalty's & commissies

- **Trigger:** nieuwe omzet/royalty-run, deal-milestone of maandcyclus.
- **Preconditions:** dealvoorwaarden bekend (via LEGAL), omzetbron beschikbaar.
- **Inputs:** revenue share/commission-afspraken (LEGAL-bron), royalty-statements, facturatiestatus.
- **Execution:**
  1. Controleer of omzet/royalty's/commissies correct gefactureerd en geboekt zijn in Moneybird.
  2. Signaleer afwijkingen t.o.v. de (door LEGAL vastgelegde) dealvoorwaarden — **zonder de voorwaarden zelf te interpreteren**.
  3. Maak royalty-/commissie-facturen als **voorbereiding**; finale vaststelling loopt via de juiste gate.
  4. Rapporteer revenue tracking per artist/client.
- **Handoffs:** dealvoorwaarden/splits → CM LEGAL; operationele context → CM OPS; upsell → CM PROSPECT.
- **Gate:** commerciële/juridische vaststelling → CM LEGAL/Sophia; externe facturatie-afspraak → gate.
- **Output:** Revenue Tracking Report + royalty/commission-overzicht.
- **Evidence:** Moneybird-facturen; LEGAL-bron voor voorwaarden.
- **QC:** elke afwijking heeft een LEGAL-bron; geen zelfstandige interpretatie van splits/recoupment.
- **SLA:** binnen de maandcyclus.
- **Escalation:** onduidelijke voorwaarden → CM LEGAL; disputen → CM LEGAL/Sophia.
- **DoD:** revenue correct getrackt; afwijkingen belegd.

---

## 11. Workflow — Ontbrekende financiële documenten & debiteurenrisico

- **Trigger:** signaal uit BTW/open-posten-controle of ad-hoc.
- **Execution:**
  1. Inventariseer ontbrekende bonnen/facturen/kwitanties; maak per item een follow-up met owner + `Due Date`.
  2. Bereken debiteurenrisico (ouderdom, historie, bedrag); markeer hoog-risico.
  3. Signaleer, escaleer bij wanbetaling → CM LEGAL; nooit zelf incasso starten.
- **Gate:** incasso/betalingsregeling → **Sophia**.
- **Output:** Ontbrekende Documenten Rapport + Debiteurenrisico Rapport.
- **QC:** elk ontbrekend item + risico heeft owner/vervolg; geen incasso zonder Sophia.
- **SLA:** hoog-risico binnen 2 werkdagen belegd.
- **Escalation:** wanbetaling → CM LEGAL; cashflow-impact → CM CONTROL.
- **DoD:** risico's en ontbrekende docs belegd.

---

## 12. Waiting-On Management

Iedere Waiting-On bevat minimaal: type; owner/externe partij; ontbrekend item; datum ontstaan;
follow-updatum; impact; escalation date; source (Moneybird/Drive) link.

Categorieën: Waiting-On-Client (betaling/document) · Waiting-On-Sophia (indiening/regeling/incasso)
· Waiting-On-Legal (voorwaarden/dispuut) · Waiting-On-OPS (projectcontext) · Waiting-On-Flow
(koppeling/automatisering) · Waiting-On-Control (prioriteit/cashflow).

**Escalatieregel:** een Waiting-On zonder follow-updatum is geen geldige status. Bij overschrijding:
follow-up → impact herberekenen → bij cashflow-/deadline-impact `Blocked` → escaleren naar CM CONTROL/Sophia.

---

## 13. Handoff contract tussen agents

Iedere handoff bevat: From · To · Client/Artist/Deal · Context · Concrete vraag · Gewenste output ·
Deadline · Impact bij uitblijven · Source links (Moneybird/Drive) · Approval status · Return-to owner.

Handoffs zonder concrete vraag en deadline zijn geen complete handoff.

---

## 14. Approval Matrix — MONEY-specifiek

| Actie | MONEY | Gate |
|---|---|---|
| Open posten controleren/signaleren | Uitvoeren | Geen extra gate binnen scope |
| Follow-up-taak aanmaken | Uitvoeren | Scope moet geldig zijn |
| Cashflow-/revenue-rapport opstellen | Uitvoeren | Bron = Moneybird |
| Betaalherinnering versturen | Concept | Sophia / bevoegde owner |
| Factuur inhoudelijk wijzigen/verwijderen | Niet zelfstandig | Verboden buiten governance |
| Betaling uitvoeren | Niet zelfstandig | Sophia |
| BTW indienen | Niet zelfstandig | Sophia / accountant |
| Betalingsregeling / incasso | Niet zelfstandig | Sophia |
| Dealvoorwaarden / splits interpreteren | Niet zelfstandig | CM LEGAL |
| Fiscaal advies / jaarrekening | Niet zelfstandig | Accountant via Sophia |
| Automatisering wijzigen | Niet zelfstandig | CM FLOW |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + formele route |

---

## 15. Logging & Audit Trail

Voor iedere materiële statuswijziging traceerbaar: wie/welke agent; datum/tijd; vorige → nieuwe
status; reden; `Moneybird Link`/evidence; approval indien vereist; dependency/Waiting-On.

**Idempotency** — controleer vóór creatie of een uniek object al bestaat. Voorkeurskeys:
factuur-ID + follow-up-type; periode + rapporttype (BTW/cashflow); client + open-post-ID;
artist + royalty-run + periode. Doel: geen dubbele follow-ups, herinneringen of rapporten.

---

## 16. Exceptions, rollback en fouten

- **Moneybird/bank/API-failure:** stop veilig; geen vervangende boekhouding aanmaken; log; status `Blocked`; handoff → CM FLOW.
- **Verkeerde administratie (EXTERNE_ENTITEIT):** direct stoppen; niets muteren; log; escaleren naar CM CONTROL/Sophia.
- **Dubbele follow-up/herinnering:** niet deleten zonder governance; markeer duplicaat; audit trail behouden.
- **Foutieve externe financiële toezegging (concept):** niet verzenden; markeer risk; escaleren naar Sophia.

---

## 17. Dag-, week- en maandritme

- **Dagelijks:** nieuwe betalingen matchen/signaleren; hoog-risico debiteuren; Blocked/Escalated finance-taken.
- **Wekelijks:** open posten-cyclus; cashflow-signaal; Waiting-On aging; betaalstatussen bijwerken; cashflow-input → CM CONTROL.
- **Maandelijks:** revenue tracking; royalty/commission-check; BTW-voorbereiding (per periode); financiële maandrapportage; automation failures → CM FLOW.

---

## 18. KPI's

| KPI | Norm |
|---|---:|
| Open posten >termijn met follow-up | 100% |
| Follow-ups met `Moneybird Link` | 100% |
| BTW-gereedheid op tijd (vóór deadline) | 100% |
| Cashflow-risico's met owner/vervolg | 100% |
| Revenue-afwijkingen met LEGAL-bron | 100% |
| Betaalacties/indieningen door MONEY zonder Sophia | 0 |
| Dubbele follow-ups/herinneringen | 0 |
| Financiële conclusies zonder Moneybird-bron | 0 |
| CM/EXTERNE_ENTITEIT-administratievermenging | 0 |
| Financiële maandrapportages op tijd | 100% |

---

## 19. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal:

1. CM MONEY-certificeringspaspoort Level 3 / Production Approved is;
2. de Moneybird-koppeling (juiste CM-administratie-id) actief, getest en gescheiden van EXTERNE_ENTITEIT is;
3. de `OPERATIONS`-finance-lijsten live bestaan;
4. het Moneybird open-items-scenario (nu `REVIEW`) getest en geactiveerd is met correcte targets;
5. functionele tests geslaagd zijn;
6. red-team test geslaagd is (o.a. poging tot betaling/indiening → veilige stop);
7. monitoring/logging actief is;
8. Sophia-production approval geregistreerd is;
9. dit runbook opnieuw is gevalideerd tegen de actuele governance.

Tot dan:

> **Gebruik als gecontroleerd pre-production uitvoermodel; niet als bewijs dat finance-capabilities live zijn.**

---

## 20. Definition of Done — CM MONEY als operating system

CM MONEY is operationeel gezond wanneer:

- alle financiële waarheid in Moneybird staat en rapportages daarop rusten;
- open posten, BTW, cashflow, revenue en royalty's aantoonbaar bewaakt worden;
- geen betaling, indiening, regeling of incasso zonder Sophia plaatsvindt;
- dealvoorwaarden nooit buiten LEGAL worden geïnterpreteerd;
- CM en EXTERNE_ENTITEIT financieel strikt gescheiden blijven;
- elk risico/ontbrekend document een owner + follow-up heeft;
- automations niet buiten FLOW worden gewijzigd;
- cashflow-/prioriteitsconflicten bij CONTROL/Sophia landen;
- de agent veilig stopt wanneer bron, administratie of techniek onbetrouwbaar is.

---

## 21. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste MONEY-runbook op de governance-hardened v2.0-standaard (afgeleid van CM OPS v2.0), verankerd in Moneybird als financiële waarheid, de OPERATIONS-finance-lijsten en de CM↔EXTERNE_ENTITEIT-administratiescheiding. |
