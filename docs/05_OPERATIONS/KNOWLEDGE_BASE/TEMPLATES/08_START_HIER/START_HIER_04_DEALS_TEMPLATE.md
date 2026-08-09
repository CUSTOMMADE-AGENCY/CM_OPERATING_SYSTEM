# CUSTOMMADE AGENCY — START HIER 04 DEALS TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Start Hier |
| Onderdeel van | CM Template Library / Start Hier / Deals |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM PROSPECT AGENT · CM MONEY AGENT · CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Conform deal-governance |

## 02 · DOEL

Startdocument voor elk dealdossier onder `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER`. Geeft in één scan scope, stage, open document requests, governance, owner en volgende actie.

## 03 · GEBRUIKSMOMENT

- Nieuw dealdossier.
- Dealoverdracht.
- Materiële stage- of governancewijziging.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal-ID / dealnaam | Ja | Deal intake / Deal Memo |
| Dealstage | Ja | ClickUp / Deal Pipeline Reference |
| Document requests | Ja | Legal / Prospect |
| Governance-/approvalcontext | Ja | Legal / Approval Register |

## 05 · WERKTEMPLATE

### DEALSTART — CONTEXT

| Deal-ID | Deal/asset | Scope | Stage | Owner | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### DEALSTART — DOCUMENT REQUESTS

| Request-ID | Deal-ID | Document/verzoek | Eigenaar | Deadline | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### DEALSTART — GOVERNANCE & VOLGENDE STAP

| Deal-ID | Approval-/restrictiereferentie | Volgende actie | Eigenaar | Deadline |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Stage | `LEAD` · `QUALIFIED` · `DILIGENCE` · `CLOSING` · `CLOSED` |
| Status/request status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen dealdossier zonder Deal-ID, owner en stage.
>
> **02** — Stage volgt `DEAL_PIPELINE_CLICKUP_REFERENCE`.
>
> **03** — Geen vertrouwelijke dealdata/getekende contracten in de GitHub-specificatie.
>
> **04** — Approval/restricties worden alleen via referentie vastgelegd; operationeel Approval Register blijft leidend.

## 07 · RESULTAAT

- Scanbare deal-startpagina.
- Open document requests met owner/deadline.
- Directe verwijzing naar volgende actie en governance.

## 08 · KWALITEITSCONTROLE

- Deal-ID is consistent in alle blokken.
- Requests hebben Request-ID, owner, deadline en status.
- Geen parallelle stage- of approvaldefinitie.

## 09 · GOEDKEURING

Conform toepasselijke deal- en approvalgovernance.

## 10 · OVERDRACHT

- → Deal Memo
- → Buyer Pipeline / ClickUp
- → Legal / Data Room waar relevant

## 11 · LEIDENDE BRON

GitHub = spec/governance · Drive = dealdossier/evidence · ClickUp = uitvoering/pipeline · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER` · `START_HIER_[DEAL_OR_ASSET_NAME]`.

## 13 · AI-INSTRUCTIES

- Verzin nooit dealstage, approvals, documenten of deadlines; onbekend = `TBD`.
- Gebruik alleen canonical dealstagewaarden.
- Behoud A4-portret en gekoppelde Deal-ID-blokken.
- Maak geen parallel START_HIER-format.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Request toegevoegd/gewijzigd | Make → ClickUp | Document-request taak | Request-ID→External ID, Document/verzoek→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Dealstage gewijzigd | Make → ClickUp | Startpagina-context bijwerken | Deal-ID→Reference, Stage→Status, Owner→Assignee |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-26 | V1.0 | Eerste START_HIER-template voor 04_DEALS. | CM VAULT AGENT |
| 2026-08-10 | V2.2 | Gemigreerd naar 15-sectie V2.2 met Deal-ID/Request-ID, pipeline stages, A4-portret en automation mappings. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat de operationele startkopie._
