<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — REGISTER TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM CONTROL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · DOEL

Generiek register voor een dossier-domeinmap, bedoeld als scanbare index van items, status, owner, datum en bronlocatie. Gebruik alleen wanneer geen specialistisch register voor het betreffende domein bestaat.

## 03 · GEBRUIKSMOMENT

- Als index binnen een domeinmap.
- Bij Releases, Booking, Social, Press/EPK, Archive of een ander goedgekeurd domein zonder specialistisch register.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Domein | Ja | Dossierstructuur |
| Items | Ja | Domeinmap |
| Owner/status | Ja | Dossier / ClickUp |

## 05 · WERKTEMPLATE

### REGISTER — [DOMEIN]

| Item-ID | Item | Status | Eigenaar | Datum | Locatie |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Register status | `ACTIVE` · `ON_HOLD` · `SUPERSEDED` · `ARCHIVED` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Gebruik geen generiek register wanneer een specialistisch canonical register bestaat.
>
> **02** — `SUPERSEDED` of `ARCHIVED` items verwijzen naar hun daadwerkelijke archieflocatie.
>
> **03** — Geen geregistreerde locatie verzinnen; onbekend = `TBD`.

## 07 · RESULTAAT

- Actuele index van de betreffende domeinmap.

## 08 · KWALITEITSCONTROLE

- Elk item heeft unieke Item-ID.
- Elk actief item heeft eigenaar, status en locatie of expliciet `TBD`.
- Status gebruikt gecontroleerde waarden.
- Geen dubbele actieve regels voor hetzelfde item.

## 09 · GOEDKEURING

Level 1 — CM OPS AGENT, tenzij domein-governance hoger niveau vereist.

## 10 · OVERDRACHT

- → Betreffende domeinmap
- → ClickUp indien operationele actie volgt

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie/register · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/[DOMEINMAP]` · `[DOMEIN]_REGISTER`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index op een specialistisch register.
- Verzin nooit items, locaties, owners of statussen; onbekend = `TBD`.
- Gebruik stabiele Item-ID's.
- Behoud A4-portret en maximaal praktisch leesbare tabelbreedte.
- Maak geen parallel register als canonical register bestaat.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Register-item toegevoegd/gewijzigd | Make → ClickUp/Drive workflow | Itemcontext bijwerken | Item-ID→External ID, Item→Name, Status→Status, Eigenaar→Assignee, Datum→Date, Locatie→Reference |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, Item-ID, gecontroleerde statussen en specialistisch-register guardrail toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
