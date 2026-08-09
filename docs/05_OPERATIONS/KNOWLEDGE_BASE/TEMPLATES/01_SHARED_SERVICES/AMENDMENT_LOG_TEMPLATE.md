<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — AMENDMENT LOG TEMPLATE

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
| Risico | LEGAL |
| Approval | Level 3/4 — Level 4 naar Sophia |

## 02 · DOEL

Chronologisch, traceerbaar logboek van contractwijzigingen en aanvullingen. Iedere amendmentregel koppelt het basiscontract aan wijziging, ingangsdatum, approval en bewijs zonder het onderliggende juridische document te vervangen.

## 03 · GEBRUIKSMOMENT

- Iedere wijziging of aanvulling op een bestaand contract.
- Renewal of side letter.
- Correctie van een materiële contractvoorwaarde.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Contract-ID / referentie | Ja | Contract Summary |
| Amendmentbron | Ja | 02_CONTRACT |
| Approval Evidence | Ja indien vereist | Governance / evidence |
| Ingangsdatum | Ja | Amendment |

## 05 · WERKTEMPLATE

### AMENDMENTS

| Amendment-ID | Contract-ID | Datum | Ingangsdatum | Wijziging | Reden |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### APPROVAL & BEWIJS

| Amendment-ID | Approver | Niveau | Approval Evidence | Bronbestand | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De twee blokken vormen via `Amendment-ID` inhoudelijk één amendment-record._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Amendment status | `DRAFT` · `APPROVED` · `EFFECTIVE` · `SUPERSEDED` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen effectieve contractwijziging zonder bronbestand/referentie.
>
> **02** — Approval Evidence verplicht wanneer governance dit vereist.
>
> **03** — Level 4 → Sophia.
>
> **04** — Contract Summary wordt pas bijgewerkt op basis van een geldige/effectieve wijziging.

## 07 · RESULTAAT

- Volledige, traceerbare wijzigingshistorie per contract.
- Trigger voor actualisatie van Contract Summary en relevante reminders.

## 08 · KWALITEITSCONTROLE

- Beide blokken gebruiken dezelfde Amendment-ID.
- Contract-ID, datum, wijziging en bron zijn aanwezig of expliciet `TBD`.
- Approvalstatus is herleidbaar.
- Status gebruikt gecontroleerde waarden.

## 09 · GOEDKEURING

CM LEGAL AGENT conform Level 3/4; Level 4 naar Sophia.

## 10 · OVERDRACHT

- → Contract Summary
- → Legal evidence
- → ClickUp reminders indien termijn/actie wijzigt

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid. Amendmentbron in Drive/Legal blijft juridische bron.

## 12 · OPSLAG

Drive: `[DOSSIER]/02_CONTRACT` · `YYYY-MM-DD_[ENTITY]_AMENDMENT_LOG_vX.Y`

## 13 · AI-INSTRUCTIES

- Verzin nooit contractwijzigingen, approval, datum of juridische werking; onbekend = `TBD`.
- Lees uitsluitend uit Contract Summary, amendmentbron en Approval Evidence.
- Behoud A4-portret; gekoppelde blokken gebruiken Amendment-ID.
- Geen getekende documenten in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Amendment status `EFFECTIVE` | Make → ClickUp | Contractreview/reminder | Amendment-ID→Reference, Contract-ID→Reference, Ingangsdatum→Due date, Wijziging→Description |
| Amendment `EFFECTIVE` | Make → Contract workflow | Contract Summary review | Contract-ID→Record, Amendment-ID→Change reference |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM LEGAL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, Contract-/Amendment-ID, gekoppeld approvalblok, gecontroleerde status en valide mappings toegevoegd. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
