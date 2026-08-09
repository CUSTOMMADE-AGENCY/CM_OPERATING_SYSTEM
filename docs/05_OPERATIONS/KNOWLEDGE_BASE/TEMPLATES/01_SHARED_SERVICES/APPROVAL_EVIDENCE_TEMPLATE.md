<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — APPROVAL EVIDENCE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services / Governance |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM LEGAL AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | GOVERNANCE |
| Approval | Bepaald door de onderliggende actie |

## 02 · PURPOSE

Bewijsstuk van een verleende goedkeuring: wat is goedgekeurd, door wie, wanneer en op welk niveau. Onderbouwt Level 3/4-beslissingen.

## 03 · TRIGGER

- Elke approval die vastgelegd moet worden.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Onderwerp approval | Ja | Actie |
| Approver + niveau | Ja | Governance |
| Datum | Ja | Actie |

## 05 · WORKING TEMPLATE

### Approval-record

| Onderwerp | Approver | Niveau | Datum | Referentie |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Elke approval verwijst naar het Approval Register waar van toepassing.
>
> **02** — Geen actie op Level 4 zonder Sophia-approval.

## 07 · OUTPUT

- Vastgelegd bewijsstuk gekoppeld aan het dossier en het register.

## 08 · QUALITY CONTROL

- Approver, niveau en datum aanwezig.

## 09 · APPROVAL

Niveau volgt de onderliggende actie; registratie door CM CONTROL AGENT.

## 10 · HANDOFF

- → 07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]/02_CONTRACT` of `07_LEGAL/EVIDENCE`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Approval vastgelegd | Make → Sheets | Register-regel | Onderwerp→Row, Niveau→Field |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM CONTROL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
