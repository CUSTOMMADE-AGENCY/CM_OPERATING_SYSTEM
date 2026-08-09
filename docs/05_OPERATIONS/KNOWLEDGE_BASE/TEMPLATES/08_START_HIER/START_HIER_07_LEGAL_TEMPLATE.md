# CUSTOMMADE AGENCY — START HIER 07 LEGAL TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Start Hier |
| Onderdeel van | CM Template Library / Start Hier / Legal |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM CONTROL AGENT · CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LEGAL / GOVERNANCE |
| Approval | Conform legal/governance |

## 02 · DOEL

Startdocument voor `07_LEGAL/00_START_HIER`: maakt in één scan duidelijk welke juridische werklaag geldt, waar contracten/evidence/approvals horen, welke governance leidend is en welke open legal acties bestaan.

## 03 · GEBRUIKSMOMENT

- Inrichting of review van `07_LEGAL`.
- Nieuwe legal workflow of governancewijziging.
- Overdracht van juridische beheercontext.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Legal mapstructuur | Ja | Drive Structure / 07_LEGAL map spec |
| Approval governance | Ja | Governance / Approval Register |
| Open legal acties | Indien aanwezig | ClickUp / Legal review |
| Belangrijke referenties | Ja | Knowledge Base / Legal evidence |

## 05 · WERKTEMPLATE

### LEGAL — NAVIGATIE

| Onderdeel | Doel | Canonical locatie | Owner |
|---|---|---|---|
| Contracten | TBD | TBD | TBD |
| Approvals | TBD | TBD | TBD |
| Evidence | TBD | TBD | TBD |
| Legal review | TBD | TBD | TBD |

### LEGAL — OPEN ACTIES

| Actie-ID | Actie | Bronreferentie | Eigenaar | Deadline | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Actiestatus | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Het operationele approval audit trail staat uitsluitend in het geldende CM Approval Register.
>
> **02** — Deal-evidence blijft in het juiste dealdossier; 07_LEGAL is geen duplicatie van volledige dealdossiers.
>
> **03** — Geen vertrouwelijke/getekende juridische inhoud in de GitHub-specificatie.
>
> **04** — Bij onduidelijke bevoegdheid of Level 4-impact escaleren conform governance.

## 07 · RESULTAAT

- Scanbare legal navigatie.
- Eenduidige source-of-truth verwijzingen.
- Open legal acties gekoppeld aan ClickUp.

## 08 · KWALITEITSCONTROLE

- Canonical locaties zijn benoemd of `TBD`.
- Geen duplicate approval- of evidence-locaties.
- Open acties hebben Actie-ID, owner, deadline en status.

## 09 · GOEDKEURING

CM LEGAL AGENT; governance-impact conform CM CONTROL/approvalregels.

## 10 · OVERDRACHT

- → Contract/Approval/Legal workflows
- → ClickUp
- → Drive legal/evidence locaties

## 11 · LEIDENDE BRON

GitHub = legal governance/spec · Drive = juridische documenten/evidence · ClickUp = uitvoering · Moneybird = financiële waarheid. CM Approval Register = operationeel approval audit trail.

## 12 · OPSLAG

Drive: `07_LEGAL/00_START_HIER` · `START_HIER_07_LEGAL`.

## 13 · AI-INSTRUCTIES

- Verzin nooit legal status, approval, evidence of locatie; onbekend = `TBD`.
- Maak geen parallel approvalregister of legal mapstructuur.
- Behoud A4-portret en compacte navigatieblokken.
- Gebruik alleen referenties naar vertrouwelijke documenten.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Legal actie toegevoegd/gewijzigd | Make → ClickUp | Legal taak | Actie-ID→External ID, Actie→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status, Bronreferentie→Source |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-26 | V1.0 | Eerste START_HIER-template voor 07_LEGAL. | CM VAULT AGENT |
| 2026-08-10 | V2.2 | Gemigreerd naar V2.2 met legal navigatie, Actie-ID, approval-register guardrail en automation mappings. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat de operationele legal werklaag._
