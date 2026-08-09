<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — INTAKE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · PURPOSE

Gestructureerde intake van een nieuw artist-, client- of partnerdossier, zodat het correct wordt geopend, herkend, beheerd en overgedragen.

## 03 · TRIGGER

- Start van een nieuw dossier.
- Herstart van een samenwerking of overdracht tussen agents.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Naam en type dossier | Ja | Aanvraag |
| Primaire stakeholder | Ja | Intake |
| Scope en diensten | Ja | Proposal |
| Herkomst lead | Nee | CRM / ClickUp |

## 05 · WORKING TEMPLATE

### Dossier-identificatie

| Veld | Waarde |
|---|---|
| Naam | TBD |
| Type (artist/client/partner) | TBD |
| Herkomst | TBD |
| Owner agent | TBD |
| Aanmaakdatum | TBD |

### Stakeholders

| Rol | Naam | Organisatie | Contact-referentie | Autoriteit |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen dossier zonder ingevulde intake.
>
> **02** — Bij twijfel over classificatie: escaleer naar CM OPS AGENT.
>
> **03** — Geen clientdata in de specificatie.

## 07 · OUTPUT

- Basisdossier geopend in Drive.
- Onboarding-workflow gestart.

## 08 · QUALITY CONTROL

- Dossiertype bepaald.
- Primaire stakeholder vastgelegd.
- Naamconventie gevolgd.

## 09 · APPROVAL

Level 1 — CM OPS AGENT. Vastgelegd via Approval Evidence.

## 10 · HANDOFF

- → Dossier-onboarding workflow
- → ClickUp onboardingtaak

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_INTAKE_vX.Y`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Intake voltooid | Make → ClickUp | Onboardingtaak aanmaken | Dossier→List, Owner→Assignee |
| Dossier aangemaakt | Make → Drive | Standaard-submappen | Type→Foldertemplate |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM OPS AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
