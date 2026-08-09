<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DEAL PIPELINE (CLICKUP REFERENCE)

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Reference |
| Onderdeel van | CM Template Library / ClickUp References |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM PROSPECT AGENT |
| Support agents | CM FLOW AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Ja — bij pipeline-/stage-definitiewijziging |

## 02 · DOEL

Leidende referentiespecificatie voor dealpipeline-stages, minimale stage-gates en ClickUp-mapping. ClickUp beheert de operationele pipeline; andere templates gebruiken exact dezelfde machinewaarden.

## 03 · GEBRUIKSMOMENT

- Master Boutique pipeline.
- Buyer outreach.
- Dealopvolging.
- Automation die pipeline-stages gebruikt.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Pipeline-configuratie | Ja | ClickUp |
| Stage-gates | Ja | Deal/Legal governance |

## 05 · WERKTEMPLATE

### PIPELINE-STAGES

| Stage | Betekenis | Minimale vereiste | Volgende toegestane stap |
|---|---|---|---|
| `LEAD` | Nieuw contact/opportunity | Basisrecord | `QUALIFIED` |
| `QUALIFIED` | Gekwalificeerde opportunity/buyer | Qualification | `DILIGENCE` of afsluiten |
| `DILIGENCE` | In beoordeling | Passende NDA/qualification + diligenceproces | `CLOSING` of terug/afsluiten |
| `CLOSING` | Juridische/commerciële afronding | Onderhandeling + closingdocumentatie | `CLOSED` of terug |
| `CLOSED` | Afgesloten dealproces | Uitkomst vastgelegd | Eindstatus |

### CLICKUP-VELDEN

| Bronveld | ClickUp-doel | Verplicht |
|---|---|---|
| Deal-ID / Buyer-ID | External ID / reference | Ja |
| Stage | Status | Ja |
| Eigenaar | Assignee | Ja |
| Volgende actie | Next action / task context | Ja |
| Deadline | Due date | Indien actie open |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Pipeline-stage wordt operationeel in ClickUp beheerd.
>
> **02** — Alle gekoppelde templates gebruiken exact `LEAD · QUALIFIED · DILIGENCE · CLOSING · CLOSED`.
>
> **03** — `DILIGENCE` vereist de toepasselijke qualification/NDA-gates.
>
> **04** — Stage wordt niet door AI afgeleid zonder bronstatus; onbekend = `TBD`.

## 07 · RESULTAAT

- Eén consistente pipeline-stage-definitie voor Deal Memo, Buyer Pipeline en automations.

## 08 · KWALITEITSCONTROLE

- Geen alternatieve stagewaarden in gekoppelde templates.
- ClickUp mapping gebruikt bestaande bronvelden.
- Stage-gates zijn traceerbaar naar governance/workflow.

## 09 · GOEDKEURING

Wijziging van stage-definitie/gates: CM PROSPECT AGENT + CM FLOW AGENT en aanvullende governance waar nodig.

## 10 · OVERDRACHT

- → Buyer Pipeline
- → Deal Memo
- → ClickUp / Make automations

## 11 · LEIDENDE BRON

GitHub = stage-/mapping-specificatie · ClickUp = operationele pipeline/status · Drive = deal/evidence · Moneybird = financiële waarheid.

## 12 · OPSLAG

ClickUp = operationele pipeline. GitHub bevat deze canonical referentie.

## 13 · AI-INSTRUCTIES

- Gebruik uitsluitend de vijf gedefinieerde stage-machinewaarden.
- Verzin nooit qualification, NDA, stage of closingstatus.
- Maak geen parallelle pipeline-statusset.
- Bij conflict tussen template en deze reference: deze reference geldt totdat governance anders besluit.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Stage gewijzigd | ClickUp / Make | Pipeline-context synchroniseren | Stage→Status, Deal-ID / Buyer-ID→Reference, Eigenaar→Assignee, Deadline→Due date, Volgende actie→Next action |
| Stage `DILIGENCE` | Make → diligence workflow | Gatecontrole starten | Deal-ID / Buyer-ID→Reference, Stage→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM PROSPECT AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, canonical machine stages, stage-gates en expliciete ClickUp field mappings vastgesteld. | CM PROSPECT AGENT |

---

_Leidende bron: GitHub voor stage-definitie; ClickUp voor operationele status._
