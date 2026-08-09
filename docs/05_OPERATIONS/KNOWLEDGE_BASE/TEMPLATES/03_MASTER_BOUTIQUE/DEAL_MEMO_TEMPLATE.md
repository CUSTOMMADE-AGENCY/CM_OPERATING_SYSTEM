<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DEAL MEMO TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM PROSPECT AGENT |
| Support agents | CM LEGAL AGENT · CM CONTROL AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | FINANCIAL / LEGAL |
| Approval | Ja — vóór buyer-facing gebruik (Level 4 → Sophia) |

## 02 · PURPOSE

Volwaardige acquisition/sale tool voor catalog sale, master resale of rights brokerage: asset, financials, valuation, deal structure, diligence en transactiestatus in één memo.

## 03 · TRIGGER

- Dealkwalificatie, buyer-facing voorbereiding of interne approval.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Music Rights Register | Ja | Rights Register |
| Royalty statements | Ja | 06_FINANCE |
| Chain of title | Ja | 02_CONTRACT |

## 05 · WORKING TEMPLATE

### Asset

| Veld | Waarde |
|---|---|
| Type (catalog/track/master/publishing/neighbouring) | TBD |
| Aantal werken | TBD |
| Releaseperiode | TBD |
| Territory | TBD |
| Rights % aangeboden | TBD |
| Chain of title status | TBD |

### Financials

| Bron | LTM | 3-jr historie | Toelichting |
|---|---|---|---|
| Master royalties | TBD | TBD | TBD |
| Publishing royalties | TBD | TBD | TBD |
| Neighbouring rights | TBD | TBD | TBD |
| Sync | TBD | TBD | TBD |
| Other | TBD | TBD | TBD |
| Gross | TBD | TBD | TBD |
| Net | TBD | TBD | TBD |
| Recoupment status | TBD | TBD | TBD |
| Outstanding advances | TBD | TBD | TBD |

### Valuation

| Veld | Waarde |
|---|---|
| Valuation method | TBD |
| LTM multiple | TBD |
| NTM multiple | TBD |
| Asking price | TBD |
| Indicative offer | TBD |
| Minimum acceptable value | TBD |
| Assumptions | TBD |

### Deal structure

| Veld | Waarde |
|---|---|
| Assignment/licence | TBD |
| Perpetual/term | TBD |
| Territory | TBD |
| Exclusivity | TBD |
| Payment structure | TBD |
| Earn-out | TBD |
| Holdback | TBD |
| Seller participation | TBD |
| Broker/CM fee | TBD |

### Diligence

| Item | Status | Bewijs |
|---|---|---|
| Rights verified | TBD | TBD |
| Metadata verified | TBD | TBD |
| Royalty statements | TBD | TBD |
| Contracts | TBD | TBD |
| Disputes | TBD | TBD |
| Liens/encumbrances | TBD | TBD |
| Claims | TBD | TBD |
| Tax/VAT | TBD | TBD |
| Approval status | TBD | TBD |

### Transaction

| Stap | Status | Datum |
|---|---|---|
| NDA | TBD | TBD |
| Data room | TBD | TBD |
| Buyer stage | TBD | TBD |
| LOI | TBD | TBD |
| Due diligence | TBD | TBD |
| SPA/APA | TBD | TBD |
| Closing | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen buyer-facing gebruik zonder approval.
>
> **02** — Valuation onderbouwd en controleerbaar.
>
> **03** — Rechten geverifieerd via Rights Audit.
>
> **04** — Level 4-beslissingen naar Sophia.
>
> **05** — Geen data room access zonder NDA + Buyer Qualification.

## 07 · OUTPUT

- Buyer-facing deal memo; input voor Data Room en Buyer Pipeline.

## 08 · QUALITY CONTROL

- Financials, valuation en diligence compleet of TBD.
- Chain of title status bekend.

## 09 · APPROVAL

Ja — vóór buyer-facing gebruik; Level 4 → Sophia.

## 10 · HANDOFF

- → Data Room
- → Buyer Pipeline
- → 07_LEGAL

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `04_DEALS/[DEAL]/03_WAARDERING_VERKOOPPAKKET`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Memo approved | Make → ClickUp | Deal-kaart | Asset→Card, Stage→Status |
| Buyer stage change | Make → Pipeline | Status updaten | Stage→Status |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM PROSPECT AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
