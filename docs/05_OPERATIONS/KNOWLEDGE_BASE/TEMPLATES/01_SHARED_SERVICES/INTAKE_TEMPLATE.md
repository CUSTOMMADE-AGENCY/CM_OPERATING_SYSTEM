<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — INTAKE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT · CM PROSPECT AGENT |
| Status | ACTIVE — V2.3 |
| Versie | V2.3 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW / COMMERCIAL |
| Approval | CM OPS AGENT; artist Fit Check Go/No-Go conform workflow |

## 02 · DOEL

Gestructureerde intake én kwalificatie voor een nieuw artist-, client-, partner- of dealdossier. Voor artist leads bevat deze template de CM Fit Check, zodat geen aparte Fit Check-template nodig is.

## 03 · GEBRUIKSMOMENT

- Start van een nieuw dossier of lead.
- Herstart van een samenwerking.
- Overdracht tussen agents of teams.
- Artist lead vóór Brand Audit / betaalde voorfase.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Naam en type dossier | Ja | Aanvraag / lead |
| Primaire stakeholder | Ja | Intake |
| Gevraagde dienst / hulpvraag | Ja | Aanvraag |
| Budgetindicatie | Voor artist/client lead | Lead / gesprek |
| Urgentie / gewenste start | Voor artist/client lead | Lead / gesprek |
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

### HULPVRAAG & SCOPE-INDICATIE

| Onderdeel | Gevraagd / relevant | Prioriteit | Opmerking |
|---|---|---|---|
| Management | TBD | TBD | TBD |
| Career Strategy | TBD | TBD | TBD |
| Deals & Rights | TBD | TBD | TBD |
| Project / overig | TBD | TBD | TBD |

### STAKEHOLDERS

| Rol | Naam | Organisatie | Contact-referentie | Autoriteit |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### CM FIT CHECK — ALLEEN BIJ ARTIST/CLIENT LEAD

| Criterium | Beoordeling | Onderbouwing / bron |
|---|---|---|
| Strategic fit met CM | TBD | TBD |
| Budget fit | TBD | TBD |
| Urgentie / timing | TBD | TBD |
| Commercieel potentieel | TBD | TBD |
| Uitvoerbaarheid / capaciteit | TBD | TBD |
| Risico / blocker | TBD | TBD |
| Aanbevolen eerstvolgende dienst | TBD | TBD |

### FIT BESLUIT

| Besluit | Beslisser | Reden | Volgende stap |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

### VOLGENDE STAP

| Actie | Eigenaar | Deadline | Status |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Fit beoordeling | `POSITIVE` · `CONDITIONAL` · `NEGATIVE` · `TBD` |
| Fit besluit | `GO` · `NO_GO` · `REVIEW` · `NOT_APPLICABLE` |
| Volgende stap status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen actief dossier zonder vastgesteld dossiertype en owner.
>
> **02** — Voor artist/client leads: geen Brand Audit of verdere investering zonder Fit besluit `GO` of expliciete `REVIEW`-approval.
>
> **03** — Fit-beoordelingen hebben onderbouwing; geen aannames over budget, rechten of capaciteit.
>
> **04** — Geen vertrouwelijke clientdata in de GitHub-specificatie.

## 07 · RESULTAAT

- Gekwalificeerde intake.
- Voor artist/client leads: gedocumenteerd CM Fit besluit.
- Duidelijke volgende stap in ClickUp.

## 08 · KWALITEITSCONTROLE

- Dossiertype, owner en gewenst resultaat zijn ingevuld.
- Gevraagde scope is expliciet.
- Fit Check wordt alleen gebruikt waar relevant en bevat onderbouwing.
- Volgende stap heeft owner, deadline en gecontroleerde status.

## 09 · GOEDKEURING

CM OPS AGENT voor intake; artist/client Go/No-Go conform Artist Client Workflow en geldende approval governance.

## 10 · OVERDRACHT

- `GO` → Brand Audit / passende betaalde voorfase
- `REVIEW` → approval / aanvullende informatie
- `NO_GO` → ClickUp sluiten / nette afwijzing
- Daarna → Client/artist onboarding pas na contract/payment gate

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_INTAKE_vX.Y`

## 13 · AI-INSTRUCTIES

- Maak geen aparte CM Fit Check-template; gebruik dit Fit Check-blok.
- Verzin nooit budget, fit, scope, stakeholder, owner of deadline; onbekend = `TBD`.
- Een fit-score is adviserend; de workflow/approval bepaalt de doorgang.
- Behoud A4-portret en compacte tabellen.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Intake voltooid | Make → ClickUp | Lead/intaketaak bijwerken | Naam→Task/Entity, Owner agent→Assignee, Gewenst resultaat→Description |
| Fit besluit `GO` | Make → ClickUp | Brand Audit / vervolgfase openen | Naam→Entity, Besluit→Gate, Aanbevolen eerstvolgende dienst→Next phase |
| Fit besluit `NO_GO` | Make → ClickUp | Lead sluiten | Naam→Entity, Besluit→Status, Reden→Comment |
| Volgende stap toegevoegd | Make → ClickUp | Actie aanmaken | Actie→Task, Eigenaar→Assignee, Deadline→Due date, Status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur en automation mappings toegevoegd. | CM OPS AGENT |
| 2026-08-10 | V2.3 | CM Fit Check geïntegreerd; aparte Fit Check-template bewust geschrapt om duplicatie te voorkomen. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
