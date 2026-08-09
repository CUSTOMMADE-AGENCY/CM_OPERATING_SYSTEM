<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CLIENT PROFILE TEMPLATE

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
| Approval | Ja — Sophia of CM CONTROL AGENT bij client-facing gebruik |

## 02 · DOEL

Compact intern dossierprofiel voor context, scope, service-lane, stakeholders en werkafspraken. Het profiel geeft agents snel voldoende context zonder contracten, wachtwoorden of gevoelige persoonsgegevens te dupliceren.

## 03 · GEBRUIKSMOMENT

- Onboarding.
- Herstart van samenwerking.
- Interne overdracht.
- Materiële scopewijziging.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Client-/entity-identificatie | Ja | Intake |
| Scope / service-lane | Ja | Proposal / contract summary |
| Stakeholders | Ja | Contact Sheet |
| Werkafspraken | Ja | Kickoff / Meeting Recap |

## 05 · WERKTEMPLATE

### PROFIEL

| Veld | Waarde | Bron |
|---|---|---|
| Entity/naam | TBD | Intake |
| Service-lane | TBD | TBD |
| Scope | TBD | TBD |
| Primair doel | TBD | TBD |
| Dossier-owner | TBD | TBD |
| Status | TBD | TBD |

### STAKEHOLDERS & COMMUNICATIE

| Onderdeel | Referentie/afspraak | Eigenaar |
|---|---|---|
| Primair aanspreekpunt | TBD | TBD |
| Stakeholders | Contact Sheet / TBD | TBD |
| Communicatieritme | TBD | TBD |
| Escalatieroute | TBD | TBD |

### WERKAFSPRAKEN

| Onderwerp | Afspraak | Eigenaar | Reviewdatum |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Profiel status | `ONBOARDING` · `ACTIVE` · `ON_HOLD` · `CLOSED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen scope of autoriteit aannemen; bron of `TBD` verplicht.
>
> **02** — Geen wachtwoorden, getekende contracten of gevoelige persoonsgegevens in de template-specificatie.
>
> **03** — Materiële scopewijziging vereist review van profiel en onboardingcontext.

## 07 · RESULTAAT

- Actueel, scanbaar dossierprofiel voor interne uitvoering.

## 08 · KWALITEITSCONTROLE

- Scope, primair doel en dossier-owner zijn duidelijk.
- Stakeholders verwijzen naar Contact Sheet.
- Status gebruikt gecontroleerde waarden.
- Werkafspraken hebben eigenaar en reviewdatum of `TBD`.

## 09 · GOEDKEURING

Interne updates: CM OPS AGENT. Client-facing gebruik of materiële scopewijziging conform geldende approval governance.

## 10 · OVERDRACHT

- → Onboarding
- → Artist Roadmap / werkplan
- → Meeting Recap

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_CLIENT_PROFILE_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit scope, owner, stakeholderautoriteit of werkafspraken; onbekend = `TBD`.
- Gebruik Contact Sheet als stakeholderreferentie.
- Behoud A4-portret en compacte blokken.
- Geen vertrouwelijke clientdata in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Profielstatus gewijzigd | Make → ClickUp | Dossierstatus bijwerken | Entity/naam→Reference, Dossier-owner→Assignee, Status→Status |
| Werkafspraak toegevoegd/gewijzigd | Make → ClickUp | Reviewactie | Onderwerp→Taak, Eigenaar→Assignee, Reviewdatum→Due date |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, bronkolommen, stakeholderreferenties, gecontroleerde status en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
