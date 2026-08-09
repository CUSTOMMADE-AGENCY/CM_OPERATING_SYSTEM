<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — VALUATION TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Valuation |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM MONEY AGENT |
| Support agents | CM PROSPECT AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | FINANCIAL |
| Approval | Ja — vóór buyer-facing gebruik; Level 4 → Sophia |

## 02 · DOEL

Onderbouwde waardering van een catalogus, master of rechtenasset op basis van historische inkomsten, forecast, rechtenstatus, multiples en expliciete aannames. De template maakt de waardering controleerbaar en herleidbaar.

## 03 · GEBRUIKSMOMENT

- Deal qualification.
- Pricing / asking price.
- Onderhandeling.
- Buyer-facing waardering.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Financial actuals | Ja | Moneybird / royalty statements |
| Rights Audit | Ja | Rights Audit |
| Deal scope | Ja | Deal Memo / Rights Register |
| Marktmultiples | Ja | Benoemde marktbron / deal intelligence |
| Forecast-aannames | Ja | Onderbouwde analyse |

## 05 · WERKTEMPLATE

### VALUATION — INKOMSTENBASIS

| Lane | Periode | Actual | Forecast | Groei-aanname | Bron |
|---|---|---|---|---|---|
| Master | LTM | TBD | TBD | TBD | TBD |
| Publishing | LTM | TBD | TBD | TBD | TBD |
| Neighboring rights | LTM | TBD | TBD | TBD | TBD |
| Sync | LTM | TBD | TBD | TBD | TBD |
| Overig | LTM | TBD | TBD | TBD | TBD |

### VALUATION — METHODEN

| Methode | Basis | Multiple/rate | Uitkomst | Bron/onderbouwing |
|---|---|---|---|---|
| LTM multiple | TBD | TBD | TBD | TBD |
| NTM multiple | TBD | TBD | TBD | TBD |
| DCF | TBD | TBD | TBD | TBD |

### VALUATION — RANGE

| Waarde-ID | Low | Base | High | Asking price | Minimum acceptabel |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### AANNAMES & SENSITIVITEIT

| Waarde-ID | Aanname | Base case | Downside | Upside | Bron |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De range- en aannameblokken vormen via `Waarde-ID` inhoudelijk één waarderingsrecord._

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen valuation zonder herleidbare financiële actuals.
>
> **02** — Geen buyer-facing valuation zonder Rights Audit.
>
> **03** — Iedere multiple/rate heeft bron of expliciet `TBD`.
>
> **04** — Level 4 → Sophia conform governance.

## 07 · RESULTAAT

- Low/base/high valuation range.
- Asking price / minimum acceptabel als beslisinput.
- Transparante aannames voor Deal Memo.

## 08 · KWALITEITSCONTROLE

- Actuals hebben periode en bron.
- Multiples/rates hebben bron/onderbouwing.
- Range en sensitiviteit koppelen via Waarde-ID.
- Geen forecast of marktmultiple wordt als feit gepresenteerd zonder bron/aannames.

## 09 · GOEDKEURING

CM MONEY AGENT; vóór buyer-facing gebruik conform deal-governance; Level 4 → Sophia.

## 10 · OVERDRACHT

- → Deal Memo
- → Buyer Pipeline
- → Data Room

## 11 · LEIDENDE BRON

GitHub = valuation-spec · Drive = werkkopie/evidence · ClickUp = uitvoering · Moneybird = financiële waarheid. Royalty statements/financial evidence blijven bron voor inkomstenactuals.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL]/03_WAARDERING_VERKOOPPAKKET` · `YYYY-MM-DD_[ASSET]_VALUATION_vX.Y`

## 13 · AI-INSTRUCTIES

- Verzin nooit actuals, multiples, forecast, asking price of assumptions; onbekend = `TBD`.
- Benoem altijd bron of expliciete aanname.
- Behoud A4-portret; gebruik gekoppelde Waarde-ID-blokken.
- Rights Audit moet worden gecontroleerd vóór buyer-facing output.
- Moneybird/royaltybron blijft financiële waarheid.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Waardering vastgesteld | Make → Deal Memo | Valuation-sectie vullen | Waarde-ID→Reference, Low→Low, Base→Base, High→High, Asking price→Asking price, Minimum acceptabel→Minimum |
| Financial actual gewijzigd | Make | Heraudit valuation | Lane→Lane, Periode→Period, Actual→Actual, Bron→Source |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM MONEY AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, bron/periode-verplichting, Waarde-ID, sensitiviteitsblok en valide Deal Memo mappings toegevoegd. | CM MONEY AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën/evidence._
