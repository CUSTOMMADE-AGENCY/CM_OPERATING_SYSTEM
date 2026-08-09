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
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · PURPOSE

Generiek registeroverzicht voor een dossier-domeinmap (Releases, Booking, Social, Press/EPK, Archive). Vul `[DOMEIN]` in per gebruik.

## 03 · TRIGGER

- Als index binnen een domeinmap.
- Bij het bijhouden van items, status en locatie.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Domein | Ja | Dossier |
| Items | Ja | Domeinmap |

## 05 · WORKING TEMPLATE

### Register — [DOMEIN]

| Item | Status | Eigenaar | Locatie | Datum |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |
| TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Superseded items verwijzen naar het archief.
>
> **02** — Geen losse bestanden zonder registratie.

## 07 · OUTPUT

- Actuele index van de domeinmap.

## 08 · QUALITY CONTROL

- Elk item heeft status, eigenaar en locatie.

## 09 · APPROVAL

Level 1 — CM OPS AGENT.

## 10 · HANDOFF

- → Betreffende domeinmap

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]/[DOMEINMAP]`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Item toegevoegd | Make → ClickUp | Register-regel | Item→Row |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM OPS AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
