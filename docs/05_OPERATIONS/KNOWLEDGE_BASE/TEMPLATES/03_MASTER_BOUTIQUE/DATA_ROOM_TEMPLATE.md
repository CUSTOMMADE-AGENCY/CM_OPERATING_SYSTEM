<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DATA ROOM TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM LEGAL AGENT · CM PROSPECT AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | LEGAL / CONFIDENTIAL |
| Approval | Ja — access alleen na NDA + Buyer Qualification |

## 02 · PURPOSE

Index en access-control van de deal data room: welke documenten aanwezig zijn, wie toegang heeft en onder welke voorwaarden. Beschermt vertrouwelijke informatie.

## 03 · TRIGGER

- Buyer bereikt diligence-fase.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal Memo + Valuation | Ja | Deal Memo |
| Rights Audit | Ja | Rights Audit |
| NDA | Ja | 07_LEGAL |

## 05 · WORKING TEMPLATE

### Document index

| Document | Categorie | Locatie | Vertrouwelijk | Status |
|---|---|---|---|---|
| Rights register | Rights | TBD | Ja | TBD |
| Royalty statements | Financials | TBD | Ja | TBD |
| Contracts | Legal | TBD | Ja | TBD |
| Valuation | Financials | TBD | Ja | TBD |
| Chain of title | Legal | TBD | Ja | TBD |

### Access log

| Buyer | NDA | Qualification | Toegang verleend | Door | Vervalt |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen access zonder getekende NDA én afgeronde Buyer Qualification.
>
> **02** — Sophia-approval voor Full Data Room access.
>
> **03** — Access logging altijd actief.

## 07 · OUTPUT

- Gecontroleerde data room met access log.

## 08 · QUALITY CONTROL

- Elke buyer heeft NDA + qualification vastgelegd.
- Alle documenten geïndexeerd.

## 09 · APPROVAL

Ja — access alleen na NDA + Buyer Qualification; Full access → Sophia.

## 10 · HANDOFF

- → Buyer Pipeline
- → 07_LEGAL

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `04_DEALS/[DEAL]/02_CONTRACTEN_BEWIJS`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Access aangevraagd | Make → ClickUp | Qualification-check | Buyer→Task |
| NDA getekend | Make → Docusign/Sheets | Access log | Buyer→Row |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM CONTROL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
