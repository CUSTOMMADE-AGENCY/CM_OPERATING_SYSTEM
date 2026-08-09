<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — VALUATION TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM MONEY AGENT |
| Support agents | CM PROSPECT AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | FINANCIAL |
| Approval | Ja — vóór buyer-facing gebruik (Level 4 → Sophia) |

## 02 · PURPOSE

Onderbouwde waardering van een catalogus/asset op basis van historische en verwachte inkomsten, multiples en aannames.

## 03 · TRIGGER

- Deal-kwalificatie, prijsbepaling, buyer-facing voorbereiding.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Financials | Ja | Deal Memo / 06_FINANCE |
| Rights Audit | Ja | Rights Audit |
| Marktmultiples | Ja | Master Boutique kennis |

## 05 · WORKING TEMPLATE

### Income basis

| Lane | LTM | NTM forecast | Groei-aanname | Toelichting |
|---|---|---|---|---|
| Master | TBD | TBD | TBD | TBD |
| Publishing | TBD | TBD | TBD | TBD |
| Neighbouring | TBD | TBD | TBD | TBD |
| Sync | TBD | TBD | TBD | TBD |
| Other | TBD | TBD | TBD | TBD |

### Valuation

| Methode | Multiple | Waarde | Toelichting |
|---|---|---|---|
| LTM multiple | TBD | TBD | TBD |
| NTM multiple | TBD | TBD | TBD |
| DCF | TBD | TBD | TBD |

### Range & recommendation

| Veld | Waarde |
|---|---|
| Low | TBD |
| Base | TBD |
| High | TBD |
| Asking price | TBD |
| Minimum acceptable | TBD |
| Key assumptions | TBD |
| Sensitivities | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Elke waarde heeft methode en aannames.
>
> **02** — Geen buyer-facing waardering zonder Rights Audit.
>
> **03** — Level 4 → Sophia.

## 07 · OUTPUT

- Waarderingsrapport; input voor Deal Memo en Buyer Pipeline.

## 08 · QUALITY CONTROL

- Multiples en aannames onderbouwd.
- Range met low/base/high.

## 09 · APPROVAL

Ja — vóór buyer-facing gebruik; Level 4 → Sophia.

## 10 · HANDOFF

- → Deal Memo
- → Data Room

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
| Valuation vastgesteld | Make → Deal Memo | Valuation-sectie vullen | Waarde→Field |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM MONEY AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
