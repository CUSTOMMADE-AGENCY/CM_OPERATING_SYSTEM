<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CONTRACT SUMMARY TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services / Legal |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM CONTROL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | FINANCIAL / LEGAL |
| Approval | Level 3/4 — Level 4 naar Sophia |

## 02 · DOEL

Compacte operationele samenvatting van een overeenkomst met partijen, looptijd, economische voorwaarden, rechten/verplichtingen, beëindiging en kritieke clausules. De samenvatting vervangt nooit het getekende broncontract.

## 03 · GEBRUIKSMOMENT

- Nieuw getekend contract.
- Contractreview.
- Overdracht naar operations/finance.
- Voorbereiding van amendment of renewal.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Contractbron / referentie | Ja | 02_CONTRACT |
| Contractstatus | Ja | Legal |
| Partijen | Ja | Contract |
| Financiële voorwaarden | Indien aanwezig | Contract / Finance |

## 05 · WERKTEMPLATE

### CONTRACT — IDENTITEIT & TERMIJN

| Contract-ID | Partijen | Ingangsdatum | Einddatum/looptijd | Opzegtermijn | Bronbestand |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### CONTRACT — ECONOMIE

| Contract-ID | Vergoeding | Payment timing | Advance/recoupment | Fee/percentage | Bronclausule |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### CONTRACT — RECHTEN & VERPLICHTINGEN

| Contract-ID | Rechten/scope | Territory | Exclusiviteit | Kernverplichtingen | Restricties |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### CONTRACT — RISICO & ACTIE

| Contract-ID | Kritieke clausule/risico | Actie / reminder | Eigenaar | Deadline | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De vier contractblokken vormen via `Contract-ID` inhoudelijk één contract-record._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Contractactie status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Het getekende contract blijft leidend; deze samenvatting is alleen operationele naslag.
>
> **02** — Geen contractvoorwaarde, percentage, datum of recht verzinnen; onzeker = `TBD`.
>
> **03** — Materiële juridische/financiële beslissingen volgen CM approval governance; Level 4 → Sophia.
>
> **04** — Amendment wijzigt de samenvatting pas nadat de onderliggende wijziging is vastgelegd.

## 07 · RESULTAAT

- Scanbare contractnaslag.
- Reminders/acties voor belangrijke verplichtingen en termijnen.
- Input voor Amendment Log en operations.

## 08 · KWALITEITSCONTROLE

- Alle blokken gebruiken dezelfde Contract-ID.
- Bronbestand en waar nodig bronclausule zijn aanwezig.
- Geen onzekere voorwaarde wordt als feit gepresenteerd.
- Acties hebben eigenaar, deadline en gecontroleerde status of `TBD`.

## 09 · GOEDKEURING

CM LEGAL AGENT conform Level 3/4; Level 4 naar Sophia. Approval bewijs conform geldende governance.

## 10 · OVERDRACHT

- → Amendment Log
- → ClickUp reminders
- → Finance indien financiële verplichtingen bestaan

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid. Getekend contract in Drive/Legal blijft juridische bron.

## 12 · OPSLAG

Drive: `[DOSSIER]/02_CONTRACT` · `YYYY-MM-DD_[ENTITY]_CONTRACT_SUMMARY_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Lees uitsluitend uit het contract en benoemde bronstukken; verzin niets; onbekend = `TBD`.
- Geen getekende contractinhoud of vertrouwelijke clientdata in de GitHub-specificatie.
- Behoud A4-portret; contractblokken koppelen via Contract-ID.
- Geen juridische conclusie trekken buiten wat de bron ondersteunt.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Contractactie toegevoegd/gewijzigd | Make → ClickUp | Reminder/taak | Contract-ID→Reference, Actie / reminder→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Einddatum/looptijd gewijzigd | Make → ClickUp | Renewal/reminder | Contract-ID→Reference, Einddatum/looptijd→Due date |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM LEGAL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, A4-portret via gekoppelde contractblokken, Contract-ID, actie/statusvelden en valide automation mappings toegevoegd. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
