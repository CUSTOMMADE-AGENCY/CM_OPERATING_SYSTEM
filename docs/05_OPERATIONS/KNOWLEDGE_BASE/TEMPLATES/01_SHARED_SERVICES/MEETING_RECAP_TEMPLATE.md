<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — MEETING RECAP TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Nee, tenzij extern gevoelig of client-facing |

## 02 · DOEL

Kort operationeel meetingverslag dat besluiten, acties, open punten en opvolging scheidt zodat afspraken direct naar ClickUp kunnen en beslissingen traceerbaar blijven.

## 03 · GEBRUIKSMOMENT

- Na interne of externe meetings met besluiten of opvolging.
- Na calls waarin deadlines, approvals of acties zijn afgesproken.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Meetingdatum | Ja | Agenda / meeting |
| Onderwerp | Ja | Agenda / meeting |
| Aanwezigen | Ja | Meeting / Contact Sheet |
| Besluiten en acties | Ja | Meeting |

## 05 · WERKTEMPLATE

### MEETINGCONTEXT

| Veld | Waarde |
|---|---|
| Datum | TBD |
| Onderwerp | TBD |
| Dossierreferentie | TBD |
| Aanwezigen / contactreferenties | TBD |

### BESLUITEN

| Besluit-ID | Besluit | Context | Beslisser | Datum |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### ACTIES

| Actie-ID | Actie | Eigenaar | Deadline | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### OPEN PUNTEN

| Punt-ID | Open punt | Beslisser/eigenaar | Deadline | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Actie/open punt status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Elke actie heeft eigenaar en deadline of expliciet `TBD`.
>
> **02** — Een formeel besluit heeft een benoemde beslisser.
>
> **03** — Extern gevoelige/client-facing recap vereist approval vóór delen.

## 07 · RESULTAAT

- Scanbaar verslag.
- ClickUp-acties.
- Traceerbare besluiten en open punten.

## 08 · KWALITEITSCONTROLE

- Besluiten, acties en open punten zijn gescheiden.
- IDs zijn stabiel voor automation.
- Geen actie zonder eigenaar/deadline behalve expliciet `TBD`.
- Status gebruikt gecontroleerde waarden.

## 09 · GOEDKEURING

Intern: niet vereist tenzij gevoelig. Extern/client-facing: conform geldende approval governance.

## 10 · OVERDRACHT

- → ClickUp
- → Betrokken dossier
- → Approval/Decision log indien besluit governance-impact heeft

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/05_COMMUNICATION` of passende dossiermap · `YYYY-MM-DD_[ENTITY]_MEETING_RECAP_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit besluiten, aanwezigen, owners of deadlines; onbekend = `TBD`.
- Gebruik Contact Sheet-referenties waar passend.
- Behoud A4-portret en stabiele IDs voor acties/besluiten/open punten.
- Geen vertrouwelijke inhoud in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Actie toegevoegd/gewijzigd | Make → ClickUp | Taak aanmaken/bijwerken | Actie-ID→External ID, Actie→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Open punt `BLOCKED` | Make → ClickUp | Escalatietaak | Punt-ID→External ID, Open punt→Taak, Beslisser/eigenaar→Assignee, Deadline→Due date |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, stabiele record-IDs, gecontroleerde status en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
