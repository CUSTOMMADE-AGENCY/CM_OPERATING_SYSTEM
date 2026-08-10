<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CLOSE-OUT NOTE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Close-out |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM MONEY AGENT · CM CONTROL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | OPERATIONAL / FINANCIAL |
| Approval | Ja — vóór dossierstatus CLOSED/ARCHIVED |

## 02 · DOEL

Een traject formeel en controleerbaar afsluiten zonder losse acties, open approvals, onduidelijke deliverables of ongeregistreerde vervolgkansen. De Close-out Note is de vaste output tussen approved delivery en upsell/archive.

## 03 · GEBRUIKSMOMENT

- Na goedkeuring van de laatste deliverable van een project of scope.
- Bij beëindiging van een engagement of fase.
- Vóór archive of een nieuwe betaalde vervolgfase.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Scope / proposal | Ja | Proposal / Contract Summary |
| Deliverables en status | Ja | Drive / ClickUp |
| Open acties | Ja | ClickUp |
| Finance-status | Ja | Moneybird / Finance |
| Open approvals / risico's | Indien relevant | Approval Evidence / dossier |

## 05 · WERKTEMPLATE

### CLOSE-OUT — CONTEXT

| Veld | Waarde | Bron |
|---|---|---|
| Dossier / project | TBD | TBD |
| Scope | TBD | TBD |
| Startdatum | TBD | TBD |
| Einddatum | TBD | TBD |
| Owner | TBD | TBD |

### DELIVERABLES

| Deliverable-ID | Deliverable | Status | Drive-link / bron | Approval |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### OPENSTAANDE PUNTEN

| Actie-ID | Punt | Eigenaar | Deadline | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### FINANCE & CONTRACT

| Controle | Status | Bron / bewijs |
|---|---|---|
| Facturatie compleet | TBD | Moneybird / TBD |
| Openstaande betaling bekend | TBD | Moneybird / TBD |
| Contract-/scopeverplichtingen afgerond | TBD | Contract Summary / TBD |

### RESULTAAT & LEARNINGS

| Onderdeel | Samenvatting |
|---|---|
| Belangrijkste resultaat | TBD |
| Niet gerealiseerd / reden | TBD |
| Belangrijkste learning | TBD |
| Aanbevolen vervolg | TBD |

### NEXT PHASE

| Besluit | Scope / toelichting | Eigenaar | Deadline | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Deliverable status | `OPEN` · `IN_REVIEW` · `APPROVED` · `NOT_APPLICABLE` |
| Actie status | `OPEN` · `IN_PROGRESS` · `BLOCKED` · `DONE` |
| Close-out status | `READY_TO_CLOSE` · `BLOCKED` · `CLOSED` |
| Next phase | `UPSELL` · `EXTENSION` · `NEW_SCOPE` · `ARCHIVE` · `NONE` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen `CLOSED` zolang verplichte deliverables niet approved/not applicable zijn.
>
> **02** — Openstaande betaling wordt zichtbaar geregistreerd; deze template vervangt Moneybird niet.
>
> **03** — Geen archive wanneer kritieke actie of approval nog `BLOCKED`/`OPEN` is zonder expliciete overdracht.
>
> **04** — Upsell of nieuwe scope vereist een nieuwe commerciële route; close-out verandert niet stilzwijgend de scope.

## 07 · RESULTAAT

- Traceerbare afsluiting van de huidige scope.
- Duidelijke status van deliverables, finance en open acties.
- Expliciet besluit: vervolg, nieuwe scope of archive.

## 08 · KWALITEITSCONTROLE

- Alle scope-deliverables zijn vertegenwoordigd.
- Open acties hebben owner/deadline/status.
- Finance-status verwijst naar Moneybird.
- Vervolg is expliciet en creëert geen ongeautoriseerde commitment.

## 09 · GOEDKEURING

CM OPS AGENT; financiële of commerciële vervolgbesluiten conform CM approval governance.

## 10 · OVERDRACHT

- → ClickUp status CLOSED / vervolgfase
- → Management Proposal bij nieuwe betaalde scope
- → `09_ARCHIVE` indien geen vervolg

## 11 · LEIDENDE BRON

GitHub = template-specificatie · Drive = close-out record · ClickUp = uitvoering/status · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/09_ARCHIVE` of actieve dossiermap vóór archive · `YYYY-MM-DD_[ENTITY]_CLOSE_OUT_NOTE_vX.Y`

## 13 · AI-INSTRUCTIES

- Verzin geen completion, betaling, approval of vervolgbesluit; onbekend = `TBD`.
- Gebruik ClickUp voor taakstatus en Moneybird voor financiële status.
- Maak geen aparte upsell-template wanneer Management Proposal past.
- Markeer blokkades expliciet vóór archive.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Close-out `READY_TO_CLOSE` | Make → ClickUp | Final close check | Dossier / project→Reference, Actie-ID→Task reference, Status→Status |
| Next phase `UPSELL`/`NEW_SCOPE` | Make → ClickUp | Commerciële vervolgtaak | Dossier / project→Reference, Scope / toelichting→Description, Eigenaar→Assignee, Deadline→Due date |
| Close-out `CLOSED` + Next phase `ARCHIVE`/`NONE` | Make → Drive/ClickUp | Archive voorbereiden | Dossier / project→Reference, Close-out status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-08-10 | V2.2 | Eerste canonical Close-out Note; vervangt losse afsluitnotities en voorkomt aparte upsell-/open-items trackers. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën/deliverables._
