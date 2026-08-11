# CM OPS AGENT — Operationeel Runbook

> Versie: v1.0 · Status: **OPERATIONEEL RUNBOOK (model)** · Datum: 2026-08-07
> Agent-definitie: `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_OPS_AGENT.md`
> Substraat (canoniek): ClickUp `CUSTOMMADE AGENCY` → folder **`CLIENTS`** (ADR-2026-08-07),
> Drive `OS_CUSTOMMADE`, Make-scenario's (`MAKE_SCENARIO_MAP.md`), Gmail (`GMAIL_TEMPLATES.md`).
>
> **Doel van dit runbook:** niet *wat* OPS is (dat staat in het paspoort), maar **hoe OPS elke
> workflow exact uitvoert** — stap voor stap, met de precieze lijst, map, template, gate en SLA.
> Bruikbaar door een mens én als operating-basis voor de AI-agent.

> ⚠️ **STATUS: DOEL-RUNBOOK — nog niet operationeel.** Dit beschrijft de **canonieke doeltoestand**
> na reconciliatie en certificering. Het is nog **niet** live-uitvoerbaar omdat:
> (1) de meeste `CLIENTS`-lijsten nog **in ClickUp moeten worden aangemaakt**
> (`CM_OPS_CLICKUP_RECONCILIATION_PLAN.md`); (2) **CM OPS staat op Level 1** — geen autonome
> ClickUp/Drive-mutaties tot de certificerings-gates groen zijn; (3) het provisioning-script staat
> op **dry-run** en schrijft nog naar `ACTIVE CLIENTS` (retarget vereist). Voer stappen die mappen
> of taken aanmaken pas uit **nadat** die randvoorwaarden zijn vervuld; tot dan is dit de
> referentie-werkwijze, door mensen uit te voeren binnen de gates.

---

## 0. Hoe dit runbook werkt

Elke workflow heeft dezelfde 9 blokken:

| Blok | Betekenis |
|---|---|
| **Trigger** | Wat de workflow start (event / timed / handmatig). |
| **Inputs** | Wat aanwezig moet zijn vóór start. |
| **Stappen** | Genummerde acties, met exacte ClickUp-lijst · Drive-map · Gmail-template. |
| **Gate** | Verplichte approval/handoff vóór doorgaan. |
| **Output** | Het concrete resultaat (deliverable + waar het staat). |
| **QC** | Kwaliteitscheck vóór `Completed`. |
| **SLA** | Doorlooptijd-norm. |
| **Escalatie** | Wanneer + naar welke agent. |
| **DoD** | Definition of Done. |

**Autonomy:** OPS staat **nu op Level 1** (Governance Approved) — géén autonome ClickUp/Drive-mutaties;
stappen worden door mensen uitgevoerd binnen de gates. Het **doel** is Level 3 *binnen scope*
(zelfstandig uitvoeren in ClickUp/Drive) ná certificering; extern/financieel/juridisch/publicabel
blijft ook dán een gate (zie §11 Guardrails).

---

## 1. Systeemkaart — waar OPS werkt

| Systeem | OPS gebruikt | Grens |
|---|---|---|
| **ClickUp** | Folder `CLIENTS` (eigenaar OPS). Lijsten: `Client Onboarding` · `Artist Onboarding` · `Active Client Management` · `Artist Roadmaps` · `Projects & Deliverables` · `Releases` · `Monthly Management` · `Client Meetings & Follow-up` · `Offboarding`. | Finance-taken → `OPERATIONS`; deals/contracten → `DEAL DESK`; content → `MARKETING`. |
| **Drive** | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/` (9 submappen) · `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]/` (7 submappen). | Geen getekende contracten/finance als waarheid; verwijst ernaar. |
| **Make** | Afnemer van `Artist onboarding trigger`, `Approval follow-up reminder`, `Client setup folder creation` (status `IDEA` → te bouwen door CM FLOW). | Bouwt niet zelf; vraagt aan bij CM FLOW. |
| **Apps Script** | `provision-cm-artist.gs` (maakt artist Drive-mappen + ClickUp-onboardingtaken). | — |
| **Gmail** | `info@custommade.agency` (leidend); templates uit `GMAIL_TEMPLATES.md`. | Externe verzending = Sophia-gate. |

**Standaard ClickUp-statusflow (folder CLIENTS):**
`Intake → Inputs verzamelen → Planning → In uitvoering → Internal review → Client review →
Artist approval needed / Sophia approval needed → Revisions → Approved → Ready for handoff →
Completed` (+ `On hold` · `Blocked` · `Escalated`).

**Verplichte custom fields per OPS-taak:** `Agent Owner` (= CM OPS) · `Client`/`Artist` ·
`Autonomy Level` · `Priority` · `Due Date` · `Approval Required` · `Approval Status` ·
`Sophia Approval` · `Source Link` (GitHub) · `Drive Link`.

---

## 2. Workflow — Artist Onboarding

- **Trigger:** getekende management-afspraak van CM LEGAL (`Handoff to CLIENTS`), of nieuwe artist toegewezen door Sophia.
- **Inputs:** artistnaam, getekende deal-referentie (Drive-link van LEGAL), contactgegevens, scope.
- **Stappen:**
  1. Maak taak in lijst **`Artist Onboarding`**, status `Intake`. Vul `Artist`, `Agent Owner=CM OPS`, `Priority`, `Due Date`. *(Randvoorwaarde: deze lijst bestaat pas na de ClickUp-reconciliatie; tot dan landt onboarding in `ACTIVE CLIENTS`.)*
  2. Provisioneer de Drive-structuur via `provision-cm-artist.gs` → `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/` met de 9 submappen (`01_ADMIN`…`09_ARCHIVE`); zet de Drive-link in `Drive Link`. **Let op:** het script staat op `CM_ARTIST_PROVISION_DRY_RUN = true` (maakt niets aan) en schrijft ClickUp-taken naar `ACTIVE CLIENTS`. Vóór live gebruik: dry-run uitzetten via de gecontroleerde activatieprocedure **én** de lijst-ID retargeten naar `Artist Onboarding` (`CM_OPS_CLICKUP_RECONCILIATION_PLAN.md` stap 4). Zolang dry-run aan staat, worden de mappen **handmatig** aangemaakt of via `create-cm-drive-structure.gs`.
  3. Status → `Inputs verzamelen`: verzamel intake (rechten/splits-context via LEGAL, financiële context via MONEY) als subtaken.
  4. Status → `Planning`: maak de onboarding-checklist en de eerste `Artist Roadmap` (zie Workflow 4) met eigenaar + deadlines.
  5. Koppel elke taak aan de GitHub-SOP (`Source Link`) en de juiste Drive-map (`Drive Link`).
- **Gate:** rechten/splits-vragen → **CM LEGAL**; financiële afspraken → **CM MONEY**; externe communicatie naar de artist → **Sophia** (`Sophia approval needed`).
- **Output:** compleet artist-dossier in Drive + onboarding-checklist + roadmap in ClickUp.
- **QC:** alle 9 Drive-submappen bestaan; elke taak heeft eigenaar + deadline; geen taak zonder `Drive Link`.
- **SLA:** dossier + checklist binnen **5 werkdagen** na handoff.
- **Escalatie:** ontbrekende deal-referentie → CM LEGAL; capaciteitsconflict → CM CONTROL.
- **DoD:** onboarding-taak op `Completed`, roadmap actief, artist zichtbaar in `Active Client Management`.

---

## 3. Workflow — Client Onboarding

- **Trigger:** `Won` commerciële kans van CM PROSPECT (`Handoff to CLIENTS`), of nieuwe client van Sophia.
- **Inputs:** clientnaam, scope/opdracht, commerciële context (van PROSPECT), getekende afspraak (van LEGAL).
- **Stappen:**
  1. Taak in **`Client Onboarding`**, status `Intake`; vul `Client`, `Agent Owner`, `Priority`, `Due Date`.
  2. Maak Drive-dossier `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]/` met de 7 submappen (`01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE`, `09_ARCHIVE`). Zet `Drive Link`.
  3. Status → `Inputs verzamelen`: brief/scope in `03_BRIEF_SCOPE`; contractkopie-link (van LEGAL) in `02_CONTRACT`.
  4. Status → `Planning`: maak projectplan (zie Workflow 5) en kick-off.
  5. Zet client in `Active Client Management` voor de lopende cyclus.
- **Gate:** contract/rechten → **CM LEGAL**; facturatie-afspraak → **CM MONEY**; externe kick-off-mail → **Sophia**.
- **Output:** client-dossier in Drive + projectplan + kick-off gepland.
- **QC:** scope schriftelijk bevestigd; contract-link aanwezig; projectplan heeft eigenaar + deadlines.
- **SLA:** onboarding compleet binnen **5 werkdagen**.
- **Escalatie:** onduidelijke scope → CM CONTROL; ontbrekend contract → CM LEGAL.
- **DoD:** `Client Onboarding`-taak `Completed`; client actief in `Active Client Management`.

---

## 4. Workflow — Artist Roadmap & Monthly Management

- **Trigger:** afgeronde onboarding (roadmap) + maandcyclus (timed, 1e werkdag van de maand).
- **Inputs:** artist-doelen, releasekalender, vorige maandstatus.
- **Stappen:**
  1. **Roadmap:** taak in **`Artist Roadmaps`** met kwartaaldoelen als subtaken (releases, bookings, content, brand).
  2. **Maandcyclus:** taak in **`Monthly Management`**, status `Planning` → `In uitvoering`: check voortgang per roadmap-item, werk statussen bij.
  3. Signaleer afhankelijkheden: content → **CM SOCIAL** (`Handoff to MARKETING`), finance → **CM MONEY**, deals → **CM LEGAL/DEAL DESK**.
  4. Lever de maand-samenvatting op (zie Workflow 7).
- **Gate:** publicatie/campagne → SOCIAL + Sophia; nieuwe deal → LEGAL.
- **Output:** actuele roadmap + maandelijkse management-update per artist.
- **QC:** elk roadmap-item heeft status + eigenaar; geen item >30 dagen zonder update.
- **SLA:** maandcyclus afgerond vóór de **5e werkdag**.
- **Escalatie:** structureel achterlopende roadmap → CM CONTROL.
- **DoD:** `Monthly Management`-taak `Completed`; roadmap bijgewerkt.

---

## 5. Workflow — Projectmanagement & Deliverables

- **Trigger:** goedgekeurd projectplan (client of artist) of nieuwe deliverable-aanvraag.
- **Inputs:** briefing, scope, deadline, eigenaar.
- **Stappen:**
  1. Taak/lijst in **`Projects & Deliverables`**; splits het project op in deliverables als subtaken, elk met **eigenaar + `Due Date`** (regel: geen deliverable zonder beide).
  2. Statusflow per deliverable: `In uitvoering → Internal review → Client review → Revisions → Approved`.
  3. Deliverables-bestanden in `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]/04_DELIVERABLES/` (of artist-equivalent); link in `Drive Link`.
  4. Bewaak deadlines; zet risico's op `Blocked` met reden + `Waiting-On`.
- **Gate:** client-facing oplevering → `Client review`; externe verzending → **Sophia**.
- **Output:** opgeleverde deliverables met client-akkoord, gearchiveerd in Drive.
- **QC:** elke deliverable heeft eigenaar, deadline, review-status en Drive-link; **0 deadlines zonder eigenaar**.
- **SLA:** interne review binnen **2 werkdagen** na oplevering.
- **Escalatie:** deadline-risico → CM CONTROL; scope-creep → CM CONTROL + PROSPECT.
- **DoD:** deliverable `Approved` + gearchiveerd; project op `Completed` als alle deliverables af zijn.

---

## 6. Workflow — Releaseplanning

- **Trigger:** nieuwe release-informatie (artist/label) of roadmap-item `Release`.
- **Inputs:** releasedatum, tracks, rechten/splits-status, assets.
- **Stappen:**
  1. Taak in **`Releases`**; zet key-dates als subtaken (rights-check, assets, content, distributie, release-dag).
  2. **Rights-check verplicht** vóór planning bevestigd wordt → handoff naar **CM LEGAL** (`Artist approval needed`/gate).
  3. Content/campagne → **CM SOCIAL** (`Handoff to MARKETING`); facturatie/kosten → **CM MONEY**.
  4. Zet de definitieve releaseplanning met eigenaren en deadlines; koppel Drive-assets.
- **Gate:** **rights-check (LEGAL) is een harde gate** vóór de release als bevestigd geldt; publicatie → Sophia.
- **Output:** bevestigde releaseplanning met rights-check en toegewezen eigenaren.
- **QC:** 100% releases met afgeronde rights-check; alle key-dates hebben eigenaar.
- **SLA:** planning compleet **≥4 weken** vóór releasedatum.
- **Escalatie:** rights onduidelijk → CM LEGAL (blokkeert release); tijdsdruk → CM CONTROL.
- **DoD:** release uitgevoerd, post-mortem in `Monthly Management`.

---

## 7. Workflow — Meeting-opvolging (recap ≤24u)

- **Trigger:** afgeronde meeting (client/artist/intern).
- **Inputs:** meeting notes / opname.
- **Stappen:**
  1. Taak in **`Client Meetings & Follow-up`**.
  2. Schrijf de recap: besluiten, actiepunten (elk met **eigenaar + deadline**), open vragen.
  3. Zet elk actiepunt als subtaak of in de juiste lijst (`Projects & Deliverables`, etc.).
  4. Recap in Drive `05_COMMUNICATION`; interne deel via ClickUp; externe recap-mail = **Sophia-gate**.
- **Gate:** externe recap-verzending → **Sophia**.
- **Output:** meeting recap + actielijst binnen 24 uur.
- **QC:** elk actiepunt heeft eigenaar + deadline; recap gekoppeld aan de juiste client/artist.
- **SLA:** **binnen 24 uur** na de meeting.
- **Escalatie:** actiepunt zonder eigenaar > 24u → CM CONTROL.
- **DoD:** recap gedeeld, actiepunten belegd, taak `Completed`.

---

## 8. Workflow — Maandrapportage

- **Trigger:** timed — laatste 2 werkdagen van de maand.
- **Inputs:** projectstatussen, deliverable-status, meeting-acties, Waiting-On-lijsten.
- **Stappen:**
  1. Aggregeer per client/artist: opgeleverd, in uitvoering, geblokkeerd, open acties.
  2. Haal financiële context op bij **CM MONEY** (geen eigen finance-conclusies).
  3. Stel het Monthly Report op en bewaar het bij het juiste dossier: **artist** → `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` (conform de artist provisioning-standaard, `MONTHLY_REPORT_TEMPLATE`); **client** → `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]/04_DELIVERABLES`. CM-brede rapportage hoort in `00_ADMIN/04_REPORTS` (niet per artist). Markeer risico's + Waiting-On-Sophia.
  4. Lever aan CM CONTROL voor de Weekly/Monthly Control-cyclus.
- **Gate:** externe deling → Sophia.
- **Output:** Monthly Report per client/artist + geconsolideerde OPS-status.
- **QC:** cijfers gedekt door ClickUp/MONEY; elk risico heeft eigenaar of Waiting-On.
- **SLA:** rapport klaar vóór de **1e werkdag** van de nieuwe maand.
- **Escalatie:** ontbrekende finance-data → CM MONEY; capaciteit → CM CONTROL.
- **DoD:** rapport opgeleverd en gedeeld met CM CONTROL.

---

## 9. Waiting-On beheer (continu)

- **Waiting-On-Client:** status `On hold` + custom field reden + `Due Date` voor follow-up. Reminder via `Approval follow-up reminder`-scenario (CM FLOW) of handmatige wekelijkse review.
- **Waiting-On-Sophia:** status `Sophia approval needed`; verzamel in één overzicht voor CM CONTROL → Sophia. Niets extern/bindend zonder deze gate groen.

---

## 10. Dag- en weekritme (checklist)

- **Dagelijks:** nieuwe intakes verwerken; meeting-recaps ≤24u; `Blocked`/`Escalated` taken nalopen.
- **Wekelijks (maandag):** deadline-review alle CLIENTS-lijsten; Waiting-On-lijsten opschonen; capaciteits-signaal naar CM CONTROL.
- **Maandelijks:** Monthly Management-cyclus + Maandrapportage.

---

## 11. Guardrails — OPS mag nooit (hard)

- Contracten wijzigen · deals sluiten · prijzen toezeggen (→ CM LEGAL / Sophia).
- Facturen inhoudelijk verwerken of financiële waarheid bepalen (→ CM MONEY).
- Publiceren of extern communiceren zonder Sophia-gate (→ CM SOCIAL / Sophia).
- Templates verplaatsen zonder CM VAULT.
- Een deliverable of deadline zonder eigenaar laten staan.

Bij twijfel: **niet uitvoeren, vastleggen, escaleren** (`ESCALATION_PROTOCOLS.md`).

---

## 12. KPI-koppeling (uit paspoort)

| KPI | Norm | Waar zichtbaar |
|---|---|---|
| Projecten met eigenaar | 100% | `Projects & Deliverables` |
| Projecten met deadline | 100% | `Due Date`-veld |
| Client onboarding compleet | 100% | `Client Onboarding` `Completed` |
| Meeting recaps ≤24u | 100% | `Client Meetings & Follow-up` |
| Releaseplanning met rights-check | 100% | `Releases` |
| Deadlines zonder eigenaar | 0 | Alle CLIENTS-lijsten |
