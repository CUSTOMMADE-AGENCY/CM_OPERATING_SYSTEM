# CM SOCIAL AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_SOCIAL_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_SOCIAL.md`
> **Canonieke ClickUp-architectuur:** `docs/00_GOVERNANCE/ADR/ADR-2026-08-07-clickup-canonical-compact-structure.md`
>
> **Belangrijk:** CM SOCIAL is nog **niet Level 3 Production Approved**. Live/automatische uitvoering
> alleen voor zover een capability aantoonbaar is geactiveerd, getest en goedgekeurd.
> **SOCIAL bereidt voor; publicatie en persbenadering lopen altijd via Sophia.**

---

## 0. Doel, scope en operating principle

CM SOCIAL beheert zichtbaarheid, positionering en merkontwikkeling: content, social, website, SEO,
persberichten, media outreach, thought leadership, case studies, newsletters en campaign assets.

De kernregel is:

> **SOCIAL bereidt en optimaliseert; het publiceert niets en benadert geen pers zonder Sophia.
> Geen juridische of financiële claim zonder verificatie. Geen deal-aankondiging zonder goedkeuring.
> Geen aanname bij ontbrekende bron.**

Rolverdeling: SOCIAL bezit content-/publicatie-executie · LEGAL bewaakt claims/rights/usage ·
MONEY bewaakt financiële claims · PROSPECT levert commerciële invalshoeken · OPS levert client/artist-
context · VAULT bewaakt brand assets/templates · Sophia keurt publicatie en externe communicatie goed.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities
3. Certificeringspaspoort + productie-gates
4. Canonieke system docs (`CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`, brand-/contentstandaarden)
5. Dit runbook
6. SOP's / playbooks
7. Templates (content/brand)
8. Ad-hoc / historisch

**Conflictregel:** nooit zelf kiezen tussen conflicterende bronnen → `Blocked`/`Escalated` → CM CONTROL.

### 1.2 Entiteitsscheiding

Uitsluitend CUSTOMMADE AGENCY. Geen vermenging van CM- en FIERCE-content, -kanalen, -assets of
-communicatie, tenzij een formeel goedgekeurde CM↔FIERCE-afspraak dat vereist.

### 1.3 Architectuurwijzigingen

Via voorstel → governance review → ADR/PR → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM SOCIAL-regel |
|---|---|---|
| Content-planning / status | **ClickUp** (folder `MARKETING`) | Content calendar, stages, owners, deadlines. |
| Assets / templates | **Google Drive** `09_CONTENT` + brand assets (VAULT) | Opslag; brand-governance via VAULT. |
| Publicatiekanalen | **Website CMS · Social platforms** | Alleen na Sophia-gate; geen autonome publicatie. |
| Design | **Canva** | Productie van visuals binnen brand kit. |
| Communicatie | **Gmail** (`info@custommade.agency`) | Media outreach als concept; verzending = gate. |
| Claims (juridisch/financieel) | **CM LEGAL / CM MONEY** | Elke externe claim geverifieerd vóór publicatie. |
| Automatisering | **Make / Apps Script via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** publiceren of pers benaderen buiten ClickUp/gate om; ongeverifieerde claims naar buiten.

---

## 3. CM SOCIAL mandaat

### 3.1 Mag zelfstandig voorbereiden

- Content, campagnes, website-updates, SEO, cases, nieuwsbrieven en persberichten **voorbereiden**.
- Content calendar beheren; concepten en assets produceren (Canva/CMS-concept).
- Media pitches en outreach als **concept** opstellen.
- Handoffs maken naar LEGAL (claims/rights), MONEY (financiële claims), PROSPECT, OPS, VAULT, CONTROL, Sophia.

### 3.2 Mag nooit zelfstandig

- Publiceren (social/website/pers) zonder Sophia.
- Pers benaderen of externe communicatie versturen zonder goedkeuring.
- Juridische claims doen; rights/usage vaststellen (→ CM LEGAL).
- Financiële/performance-claims doen zonder verificatie (→ CM MONEY).
- Deals/sponsoring aankondigen of bevestigen zonder goedkeuring.
- CM en FIERCE-content vermengen.

---

## 4. Preflight — verplicht vóór iedere workflow

### 4.1 Checklist

1. **Entiteit:** CUSTOMMADE AGENCY (niet FIERCE)?
2. **Trigger:** geldige aanleiding/handoff/kalendermoment?
3. **Scope:** binnen SOCIAL-mandaat (voorbereiden/optimaliseren)?
4. **Source:** bron/brief/asset aanwezig?
5. **Target:** bestaat de bedoelde MARKETING-lijst?
6. **Owner:** verantwoordelijke toegewezen?
7. **Deadline:** publicatie-/opleverdatum bekend?
8. **Approval:** vereist publicatie/pers een Sophia-gate; claims een LEGAL/MONEY-check?
9. **Duplicate check:** bestaat dit content-item al?
10. **Data separation:** geen FIERCE-content/-kanaal in de input?
11. **Rights/claims:** usage rights en claims geverifieerd?
12. **Risk:** reputatie-, brand-safety- of juridisch risico?

### 4.2 Fail-safe

Ontbrekende bron/rights of niet-groene gate → niet publiceren, geen aanname; status `Blocked`/`Legal review needed`/`Sophia approval needed`; reden + owner + follow-updatum.

---

## 5. Canonieke ClickUp-architectuur (marketing)

CM SOCIAL is eigenaar van folder **`MARKETING`** (space `CUSTOMMADE AGENCY`).

> **Production warning:** de `MARKETING`-folder **ontbreekt nog in de live workspace** (zie
> `CM_OPS_SUBSTRATE_2026-08-07.md`). SOCIAL mag deze niet stilzwijgend aanmaken; inrichting → CM FLOW / CM CONTROL.

### 5.1 Beoogde SOCIAL-lijsten onder MARKETING

`Content Calendar` · `Social Media` · `Website Updates` · `SEO` · `Press Releases` ·
`Media Outreach` · `Case Studies` · `Newsletter` · `Campaign Assets`.

### 5.2 Statusmodel

`Idea → Brief → Research → Draft → Internal review → Legal review needed → Client / artist approval needed → Sophia approval needed → Approved → Scheduled → Published` (+ `On hold` · `Blocked` · `Escalated`). Wijkt de live set af: niet zelf verzinnen; valideren via CM FLOW / CM CONTROL.

### 5.3 Minimale taskvelden

Agent Owner (= CM SOCIAL) · Client/Artist · Priority · Due Date/publicatiedatum · Approval Required ·
Approval Status · Sophia Approval · Source Link · Drive Link (asset) · Gmail Link (outreach concept) ·
rights/claim-status · dependency/Waiting-On · laatste update.

---

## 6. Standaard workflowcontract

Dezelfde 12 blokken: Trigger · Preconditions · Inputs · Execution · Handoffs · Gate · Output · Evidence · QC · SLA · Escalation · DoD.

---

## 7. Workflow — Content planning & Content Calendar

- **Trigger:** kwartaal-/maandplanning, campagne, release (van OPS) of commerciële hoek (PROSPECT).
- **Execution:**
  1. Vul de `Content Calendar` met items (kanaal, doel, doelgroep, publicatiedatum, owner).
  2. Prioriteer op basis van releases, campagnes en business-doelen.
  3. Koppel elk item aan brief + assets; zet afhankelijkheden.
- **Handoffs:** release-context → CM OPS; commerciële hoek → CM PROSPECT; brand assets → CM VAULT.
- **Gate:** geen publicatie in deze fase.
- **Output:** actuele content calendar met owners + deadlines.
- **QC:** elk item heeft kanaal, doel, owner, datum; geen dubbele items.
- **SLA:** kalender per periode gereed vóór periodestart.
- **Escalation:** prioriteitsconflict → CM CONTROL.
- **DoD:** calendar vastgesteld, items belegd.

---

## 8. Workflow — Content productie (Draft → Approval)

- **Trigger:** gepland content-item (`Brief`).
- **Execution:**
  1. Research + `Draft` (tekst/visual via Canva/CMS-concept).
  2. `Internal review` op kwaliteit en brand-fit.
  3. Claims/rights? → `Legal review needed` (CM LEGAL) en/of financiële verificatie (CM MONEY).
  4. Client/artist-facing? → `Client / artist approval needed`.
  5. Extern/impactvol? → `Sophia approval needed`.
- **Handoffs:** claims → CM LEGAL; financiële claims → CM MONEY; client/artist → CM OPS.
- **Gate:** **publicatie = Sophia** (harde gate); claims geverifieerd vóór approval.
- **Output:** goedgekeurd, publicatieklaar content-item.
- **QC:** geen ongeverifieerde claim; brand-consistent; rights geregeld; geen publicatie zonder gate.
- **SLA:** draft binnen de kalenderplanning; review binnen 2 werkdagen.
- **Escalation:** juridisch/reputatierisico → CM LEGAL/CONTROL/Sophia.
- **DoD:** `Approved`, klaar voor scheduling.

---

## 9. Workflow — Publicatie & scheduling

- **Trigger:** content-item `Approved` + Sophia-gate groen.
- **Execution:**
  1. Plan/scheduling in het juiste kanaal (`Scheduled`).
  2. Publiceer conform planning (`Published`) — uitsluitend na groene gate.
  3. Archiveer definitieve assets in Drive `09_CONTENT` (VAULT-governance).
- **Gate:** **publicatie = Sophia** (bevestigd vóór `Scheduled`/`Published`).
- **Output:** gepubliceerde content + archief.
- **QC:** publicatie alleen na groene gate; asset gearchiveerd; kanaal/datum correct.
- **SLA:** publicatie conform kalender.
- **Escalation:** last-minute wijziging met impact → Sophia.
- **DoD:** gepubliceerd en gearchiveerd; performance-tracking ingepland.

---

## 10. Workflow — Press Release & Media Outreach

- **Trigger:** nieuwswaardig moment (release, deal, mijlpaal) met goedkeuring om naar buiten te treden.
- **Execution:**
  1. Stel persbericht als `Draft` op; **verplichte** `Legal review needed` (claims/rights/gevoeligheid).
  2. Bereid media-outreach als **concept** (Gmail); geen verzending zonder Sophia.
  3. Deal-/sponsor-aankondiging → expliciete goedkeuring (LEGAL + Sophia + betrokken partij).
- **Gate:** **persbenadering + aankondiging = Sophia** (harde gate); LEGAL-review verplicht.
- **Output:** goedgekeurd persbericht + outreach-concept.
- **QC:** LEGAL-review afgerond; geen niet-goedgekeurde aankondiging; geen ongeverifieerde claim.
- **SLA:** afgestemd op het nieuwsmoment.
- **Escalation:** juridisch/reputatie → CM LEGAL/CONTROL/Sophia.
- **DoD:** persbericht klaar/verzonden via gate.

---

## 11. Workflow — SEO, Case Studies & Newsletter

- **Trigger:** SEO-cyclus, afgerond project (case), of nieuwsbrief-moment.
- **Execution:**
  1. **SEO:** zoekwoordonderzoek + pagina-optimalisatie als concept (`Website Updates`/`SEO`); publicatie = gate.
  2. **Case study:** feiten/resultaten verifiëren (OPS/MONEY); client/artist-goedkeuring vereist.
  3. **Newsletter:** samenstellen als concept; verzending = gate.
- **Gate:** publicatie/verzending = Sophia; client/artist-goedkeuring bij cases; claims geverifieerd.
- **Output:** SEO-updates, case study, nieuwsbrief — publicatieklaar.
- **QC:** claims/resultaten geverifieerd; goedkeuringen aanwezig; brand-consistent.
- **SLA:** per cyclus/afspraak.
- **Escalation:** claim-twijfel → CM LEGAL/MONEY.
- **DoD:** content goedgekeurd en (na gate) gepubliceerd/verzonden.

---

## 12. Waiting-On Management

Iedere Waiting-On: type · owner/partij · ontbrekend item · datum ontstaan · follow-updatum · impact ·
escalation date · source link.

Categorieën: Waiting-On-Sophia (publicatie/pers) · Waiting-On-Legal (claims/rights) · Waiting-On-Money
(financiële claim) · Waiting-On-Client/Artist (approval) · Waiting-On-OPS (context) · Waiting-On-Vault
(assets/brand) · Waiting-On-Control (prioriteit).

**Escalatieregel:** geen follow-updatum = ongeldig. Bij overschrijding: follow-up → impact herberekenen → bij gemist moment `Blocked` → escaleren naar CM CONTROL/Sophia.

---

## 13. Handoff contract

From · To · Client/Artist/Campagne · Context · Concrete vraag · Gewenste output · Deadline ·
Impact bij uitblijven · Source links · Approval status · Return-to owner. Zonder concrete vraag + deadline = geen complete handoff.

---

## 14. Approval Matrix — SOCIAL-specifiek

| Actie | SOCIAL | Gate |
|---|---|---|
| Content plannen/concipiëren | Uitvoeren | Geen extra gate binnen scope |
| Design/asset maken (Canva) | Uitvoeren | Brand kit |
| SEO-concept opstellen | Uitvoeren | Publicatie = gate |
| Publiceren (social/website) | Niet zelfstandig | **Sophia** |
| Pers benaderen / outreach versturen | Niet zelfstandig | **Sophia** |
| Deal/sponsor aankondigen | Niet zelfstandig | **LEGAL + Sophia + partij** |
| Juridische claim / rights | Niet zelfstandig | CM LEGAL |
| Financiële/performance-claim | Niet zelfstandig | CM MONEY |
| Case study publiceren | Niet zelfstandig | Client/artist + Sophia |
| Brand asset/template wijzigen | Niet zelfstandig | CM VAULT |
| Automatisering wijzigen | Niet zelfstandig | CM FLOW |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + formele route |

---

## 15. Logging & Audit Trail

Per statuswijziging traceerbaar: wie · datum/tijd · vorige → nieuwe status · reden · bron/asset ·
claim-/rights-verificatie · approval indien vereist · dependency/Waiting-On.

**Idempotency** — vóór creatie checken op bestaand content-item. Voorkeurskeys: kanaal + publicatiedatum + onderwerp;
campagne + asset; case + client. Doel: geen dubbele posts/campagnes/persberichten.

---

## 16. Exceptions, rollback en fouten

- **Tool/API/permission failure:** stop veilig; log; `Blocked`; handoff → CM FLOW.
- **Verkeerde entiteit (FIERCE-kanaal/content):** stoppen; niets vermengen; log; escaleren.
- **Onbedoelde publicatie / ongeverifieerde claim:** direct signaleren; risk markeren; escaleren naar Sophia/LEGAL; corrigeren via de juiste owner.
- **Dubbel content-item:** niet deleten zonder governance; markeer duplicaat; audit trail behouden.

---

## 17. Dag-, week- en maandritme

- **Dagelijks:** geplande publicaties (na gate); review-items; `Legal review needed`/`Blocked`.
- **Wekelijks:** content calendar-review; SEO-status; aging approvals; reputatiesignalen → CM CONTROL.
- **Maandelijks:** campagnerapportage; case-pijplijn; brand-consistency-check met VAULT.

---

## 18. KPI's

| KPI | Norm |
|---|---:|
| Publicaties met groene Sophia-gate | 100% |
| Externe claims met LEGAL/MONEY-verificatie | 100% |
| Content-items met owner + datum | 100% |
| Publicaties zonder goedkeuring | 0 |
| Ongeverifieerde claims naar buiten | 0 |
| Dubbele content-items | 0 |
| CM/FIERCE-contentvermenging | 0 |
| Content calendar op tijd | 100% |

---

## 19. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal: SOCIAL-paspoort Level 3; de `MARKETING`-folder
live aangemaakt en gereconcilieerd; content-calendar-reminder-scenario (nu te registreren) getest en
geactiveerd; functionele + red-team tests geslaagd (o.a. poging tot publicatie/pers zonder gate →
veilige stop); monitoring/logging actief; Sophia-production approval geregistreerd; runbook hervalideerd.

> Tot dan: **gecontroleerd pre-production uitvoermodel; geen bewijs dat capabilities live zijn.**

---

## 20. Definition of Done — CM SOCIAL als operating system

CM SOCIAL is operationeel gezond wanneer: geen publicatie of persbenadering zonder Sophia-gate;
elke externe claim geverifieerd is via LEGAL/MONEY; content-items owner + datum hebben; assets in de
juiste Drive-mappen onder VAULT-governance staan; CM en FIERCE-content gescheiden blijven; de agent
veilig stopt bij ontbrekende rights, ongeverifieerde claims of een niet-groene gate.

---

## 21. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste SOCIAL-runbook op de v2.0-standaard, verankerd in de MARKETING-folder, de content-productieflow met verplichte LEGAL/claim-verificatie en de Sophia-gate voor publicatie en persbenadering. |
