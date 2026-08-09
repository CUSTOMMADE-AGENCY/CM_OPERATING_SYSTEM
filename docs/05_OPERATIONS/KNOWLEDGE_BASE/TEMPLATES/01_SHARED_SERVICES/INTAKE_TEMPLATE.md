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
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · DOEL

Gestructureerde intake voor een nieuw artist-, client-, partner- of dealdossier zodat classificatie, scope, stakeholders, owner en vervolgstap vanaf het begin eenduidig zijn.

## 03 · GEBRUIKSMOMENT

- Start van een nieuw dossier.
- Herstart van een samenwerking.
- Overdracht tussen agents of teams.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Naam en type dossier | Ja | Aanvraag / lead |
| Primaire stakeholder | Ja | Intake |
| Scope / gevraagde dienst | Ja | Aanvraag / proposal |
| Herkomst lead | Nee | CRM / ClickUp |
| Bestaande contract-/rights-context | Indien relevant | Legal / dossierbron |

## 05 · WERKTEMPLATE

### DOSSIER-IDENTIFICATIE

| Veld | Waarde | Bron |
|---|---|---|
| Naam | TBD | TBD |
| Type | TBD | TBD |
| Herkomst | TBD | TBD |
| Owner agent | TBD | TBD |
| Aanmaakdatum | TBD | TBD |
| Gewenst resultaat | TBD | TBD |

### SCOPE

| Onderdeel | In scope | Prioriteit | Opmerking |
|---|---|---|---|
| Management | TBD | TBD | TBD |
| Career Strategy | TBD | TBD | TBD |
| Deals & Rights | TBD | TBD | TBD |
| Project / overig | TBD | TBD | TBD |

### STAKEHOLDERS

| Rol | Naam | Organisatie | Contact-referentie | Autoriteit |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### VOLGENDE STAP

| Actie | Eigenaar | Deadline | Status |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Volgende stap status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen actief dossier zonder vastgesteld dossiertype en owner.
>
> **02** — Bij onduidelijke scope of classificatie → CM OPS AGENT.
>
> **03** — Geen vertrouwelijke clientdata in de GitHub-specificatie.

## 07 · RESULTAAT

- Gekwalificeerde intake.
- Dossier-onboarding gestart.
- ClickUp-volgende stap met eigenaar en deadline.

## 08 · KWALITEITSCONTROLE

- Dossiertype, owner en gewenst resultaat zijn ingevuld.
- Scope is expliciet in/out of `TBD`.
- Stakeholders gebruiken contact-referenties in plaats van onnodige gevoelige gegevens.
- Volgende stap heeft owner, deadline en gecontroleerde status.

## 09 · GOEDKEURING

Level 1 — CM OPS AGENT. Vastlegging conform geldende approval governance wanneer vereist.

## 10 · OVERDRACHT

- → Client/artist onboarding
- → ClickUp
- → Drive dossierstructuur

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_INTAKE_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit type, scope, stakeholder, owner of deadline; onbekend = `TBD`.
- Gebruik contact-referenties waar mogelijk; sla geen onnodige persoonsgegevens in de spec op.
- Behoud A4-portret en compacte tabellen.
- Maak geen parallelle intake-template.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Intake voltooid | Make → ClickUp | Onboardingtaak aanmaken | Naam→Taak/List, Owner agent→Assignee, Gewenst resultaat→Description |
| Volgende stap toegevoegd | Make → ClickUp | Actie aanmaken | Actie→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Dossier gekwalificeerd | Make → Drive | Dossierstructuur selecteren | Type→Foldertemplate |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, scope- en vervolgstapblokken, gecontroleerde status en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
