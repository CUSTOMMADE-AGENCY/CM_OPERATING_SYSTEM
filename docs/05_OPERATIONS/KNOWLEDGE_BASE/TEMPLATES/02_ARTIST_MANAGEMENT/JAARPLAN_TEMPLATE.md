<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — JAARPLAN TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Artist Management |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM SOCIAL AGENT · CM MONEY AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Ja — vóór client-facing gebruik |

## 02 · DOEL

Jaarplan per artist dat jaardoelen, KPI's, releases, commerciële prioriteiten en kwartaalmijlpalen omzet in een bestuurbaar kader boven de Artist Roadmap.

## 03 · GEBRUIKSMOMENT

- Jaarplanning.
- Strategische herijking.
- Start van nieuw managementjaar.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Jaardoelen | Ja | Strategie / management |
| KPI-baseline | Ja | KPI Template |
| Release-pipeline | Ja | Artist Roadmap |
| Pipeline/deals | Ja | ClickUp |
| Budgetkader | Ja | Moneybird / approval evidence |

## 05 · WERKTEMPLATE

### JAARDOELEN

| Jaardoel | KPI | Baseline | Jaardoel-waarde | Eigenaar | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### KWARTAALPLAN — STRATEGIE

| Kwartaal | Prioriteit | Releases/mijlpalen | Campagne/deal-focus | Eigenaar | Status |
|---|---|---|---|---|---|
| Q1 | TBD | TBD | TBD | TBD | TBD |
| Q2 | TBD | TBD | TBD | TBD | TBD |
| Q3 | TBD | TBD | TBD | TBD | TBD |
| Q4 | TBD | TBD | TBD | TBD | TBD |

### KWARTAALPLAN — FINANCIEEL

| Kwartaal | Goedgekeurd budget | Omzetdoel | Forecast | Verschil | Bron |
|---|---|---|---|---|---|
| Q1 | TBD | TBD | TBD | TBD | TBD |
| Q2 | TBD | TBD | TBD | TBD | TBD |
| Q3 | TBD | TBD | TBD | TBD | TBD |
| Q4 | TBD | TBD | TBD | TBD | TBD |

_De twee kwartaalblokken vormen per kwartaal inhoudelijk één kwartaal-record. Financiële actuals/forecasts moeten naar een benoemde bron verwijzen; Moneybird blijft financiële waarheid._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Doel/kwartaal status | `NOT_STARTED` · `IN_PROGRESS` · `AT_RISK` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Elk jaardoel is gekoppeld aan minimaal één KPI.
>
> **02** — Elk kwartaal heeft eigenaar en status.
>
> **03** — Budgetcommitments volgen CM approval governance.
>
> **04** — Geen financieel getal zonder benoemde bron of `TBD`.

## 07 · RESULTAAT

- Goedgekeurd jaarkader.
- Input voor kwartaal-roadmaps, KPI-reviews en releaseplanning.

## 08 · KWALITEITSCONTROLE

- Jaardoelen hebben KPI, baseline, doelwaarde en eigenaar.
- Strategie- en financiële kwartaalblokken sluiten per kwartaal op elkaar aan.
- Financiële velden zijn herleidbaar.
- Statusvelden gebruiken gecontroleerde waarden.

## 09 · GOEDKEURING

Ja — vóór client-facing gebruik; financiële toezeggingen volgens CM approval governance.

## 10 · OVERDRACHT

- → Artist Roadmap
- → KPI Template
- → Release Strategy

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[ARTIST]/03_STRATEGY` · `YYYY_[ARTIST]_JAARPLAN_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit doelen, bedragen, status of bronnen; onbekend = `TBD`.
- Financiële waarden moeten een benoemde bron hebben.
- Behoud A4-portret; strategie en financieel blijven gekoppelde kwartaalblokken.
- Geen clientdata in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Jaarplan goedgekeurd | Make → ClickUp | Kwartaalstructuur aanmaken | Kwartaal→List, Prioriteit→Description, Eigenaar→Assignee, Status→Status |
| Jaardoel toegevoegd/gewijzigd | Make → ClickUp | Doeltaak bijwerken | Jaardoel→Taak, Eigenaar→Assignee, Status→Status |
| Kwartaal `AT_RISK` | Make → ClickUp | Reviewtaak | Kwartaal→Taak, Eigenaar→Assignee |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, jaardoelen, gekoppelde kwartaalblokken, financiële bronregels, gecontroleerde statussen en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
