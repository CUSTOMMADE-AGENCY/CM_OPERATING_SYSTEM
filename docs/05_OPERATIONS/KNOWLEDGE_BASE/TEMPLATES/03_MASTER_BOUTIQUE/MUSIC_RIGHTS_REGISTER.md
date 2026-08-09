<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — MUSIC RIGHTS REGISTER

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

Volledige rechten-dataset per werk — de basis voor catalog value, due diligence en transacties. Één regel per werk met master-, publishing-, neighbouring- en verificatievelden.

## 03 · TRIGGER

- Catalog sale, master resale, rights brokerage, diligencevoorbereiding.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Werken/catalogus | Ja | 02_CONTRACT / distributor |
| Royalty statements | Ja | 06_FINANCE |
| Bewijsstukken | Ja | 07_LEGAL/EVIDENCE |

## 05 · WORKING TEMPLATE

### Rights register (één regel per werk)

| Track title | Artist | ISRC | ISWC | Release date | Master owner | Master % | Label | Distributor | Writer | Writer share | Publisher | Publishing share | PRO/CMO | Neighbouring holder | Performer share | Territory | Term | Restrictions | Excl./non-excl. | Advance | Recoupment balance | Lien/encumbrance | Dispute/claim | Source document | Evidence location | Verification status | Last verified | Verified by |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen onbewezen rechtenclaim zonder bronbewijs.
>
> **02** — Verification status verplicht per regel vóór buyer-facing gebruik.
>
> **03** — Disputes/liens expliciet gemarkeerd.

## 07 · OUTPUT

- Geverifieerd rechtenregister; basis voor Deal Memo, Rights Audit en Valuation.

## 08 · QUALITY CONTROL

- Elke regel heeft ISRC/ISWC of TBD.
- Verification status en bron aanwezig.
- Shares tellen op tot 100% of TBD.

## 09 · APPROVAL

Ja — vóór buyer-facing of diligencegebruik.

## 10 · HANDOFF

- → Deal Memo
- → Rights Audit
- → Valuation

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `04_DEALS/[DEAL]/01_RECHTEN_REGISTER`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Regel geverifieerd | Make → Sheets | Diligence-status | Track→Row, Status→Field |
| Dispute gemarkeerd | Make → ClickUp | LEGAL-taak | Track→Task |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM LEGAL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
