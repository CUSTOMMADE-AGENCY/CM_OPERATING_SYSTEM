<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — BUYER PIPELINE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Pipeline Reference |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM PROSPECT AGENT |
| Support agents | CM FLOW AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij pipeline-/stage-gate wijziging |

## 02 · DOEL

Buyer-outreach en dealpipeline per asset. Deze template definieert de datavelden en beslispoorten; de operationele pipeline-status wordt in ClickUp beheerd.

## 03 · GEBRUIKSMOMENT

- Buyer qualification.
- Outreach.
- Dealopvolging.
- Diligence en closing.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal-ID / asset | Ja | Deal Memo |
| Buyer lead | Ja | CRM / outreach |
| Valuation / indicatieve waarde | Indien beschikbaar | Valuation / Deal Memo |
| NDA / qualification | Voor diligence | Legal / qualification workflow |

## 05 · WERKTEMPLATE

### BUYER — COMMERCIEEL

| Buyer-ID | Buyer | Type | Deal-ID | Indicatieve waarde | Kans % |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### BUYER — GATE & STAGE

| Buyer-ID | Stage | Qualification | NDA-status | Data Room access | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### BUYER — OPVOLGING

| Buyer-ID | Eigenaar | Volgende actie | Deadline | Laatste contact | Opmerking |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_Alle drie blokken vormen via `Buyer-ID` inhoudelijk één buyer/deal-record._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Stage | `LEAD` · `QUALIFIED` · `DILIGENCE` · `CLOSING` · `CLOSED` |
| Qualification | `PENDING` · `QUALIFIED` · `REJECTED` |
| NDA-status | `NOT_REQUIRED` · `PENDING` · `SIGNED` · `EXPIRED` |
| Data Room access | `NONE` · `LIMITED` · `FULL` |
| Status | `ACTIVE` · `ON_HOLD` · `LOST` · `WON` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Stage `DILIGENCE` vereist passende qualification en NDA-status volgens governance.
>
> **02** — Full Data Room access volgt Data Room governance.
>
> **03** — Financiële toezeggingen/afwijkingen escaleren conform geldende CM approval governance; geen fictieve drempel.
>
> **04** — ClickUp blijft operationele pipelinebron; deze template definieert velden en gates.

## 07 · RESULTAAT

- Eenduidige buyer-pipeline data en stage-gates.
- Directe ClickUp-opvolging.

## 08 · KWALITEITSCONTROLE

- Alle blokken koppelen via Buyer-ID.
- Iedere actieve buyer heeft stage, owner en volgende actie/deadline of expliciet `TBD`.
- Stages en gates gebruiken gecontroleerde waarden.
- Geen data-roomtoegang zonder passende voorwaarden.

## 09 · GOEDKEURING

Pipeline-/gatewijzigingen conform owner/governance; financiële en legal beslissingen volgens toepasselijke approvalregels.

## 10 · OVERDRACHT

- → ClickUp pipeline
- → Data Room
- → Deal Memo

## 11 · LEIDENDE BRON

GitHub = pipeline-specificatie · ClickUp = operationele pipeline/status · Drive = deal/evidence · Moneybird = financiële waarheid.

## 12 · OPSLAG

ClickUp = operationele pipeline. Drive: `04_DEALS/[DEAL]/04_OUTREACH_CLICKUP` voor ondersteunende werkkopie/export.

## 13 · AI-INSTRUCTIES

- Verzin nooit buyer, stage, probability, qualification, NDA of access; onbekend = `TBD`.
- Gebruik uitsluitend de gecontroleerde stagewaarden.
- Behoud A4-portret; buyerblokken koppelen via Buyer-ID.
- Geen outreach als feit registreren zonder bron/actiecontext.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Buyer toegevoegd/gewijzigd | Make → ClickUp | Pipeline-record | Buyer-ID→External ID, Buyer→Name, Deal-ID→Reference, Stage→Status, Eigenaar→Assignee, Deadline→Due date, Volgende actie→Next action |
| Stage `DILIGENCE` | Make → diligence workflow | Qualification/NDA/Data Room gate | Buyer-ID→Reference, Qualification→Qualification, NDA-status→NDA, Data Room access→Access |
| Status `LOST`/`WON` | Make → ClickUp | Pipeline afsluiten | Buyer-ID→External ID, Status→Outcome |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM PROSPECT AGENT |
| 2026-08-10 | V2.2 | 11-koloms tabel opgesplitst in A4-portret Buyer-ID-blokken; officiële stages, qualification/NDA/access gates en valide ClickUp mappings toegevoegd. | CM PROSPECT AGENT |

---

_Leidende bron: GitHub. ClickUp blijft operationele pipeline._
