<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — RIGHTS AUDIT TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM PROSPECT AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | LEGAL |
| Approval | Ja — vóór buyer-facing of diligencegebruik |

## 02 · PURPOSE

Rechtenaudit die per werk verifieert of rechten, metadata en chain of title kloppen — de kwaliteitscontrole op de Music Rights Register vóór een deal.

## 03 · TRIGGER

- Deal-verificatie, due diligence, chain-of-title-check.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Music Rights Register | Ja | Rights Register |
| Bronbewijs | Ja | 07_LEGAL/EVIDENCE |

## 05 · WORKING TEMPLATE

### Audit per werk

| Track | Rights type | Claim | Bron | Bewijs aanwezig | Metadata OK | Chain of title | Bevinding | Status |
|---|---|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

### Findings & risk

| Bevinding | Risico | Impact op waarde | Mitigatie | Owner |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen "verified" zonder bronbewijs.
>
> **02** — Openstaande findings blokkeren buyer-facing gebruik.

## 07 · OUTPUT

- Auditrapport; verification status terug naar Rights Register.

## 08 · QUALITY CONTROL

- Elke regel heeft bevinding en status.

## 09 · APPROVAL

Ja — vóór buyer-facing of diligencegebruik.

## 10 · HANDOFF

- → Rights Register
- → Deal Memo
- → Data Room

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `07_LEGAL/LEGAL_REVIEW` of `04_DEALS/[DEAL]/01_RECHTEN_REGISTER`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Audit afgerond | Make → Sheets | Register verification | Track→Status |
| Finding geopend | Make → ClickUp | LEGAL-taak | Finding→Task |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM LEGAL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
