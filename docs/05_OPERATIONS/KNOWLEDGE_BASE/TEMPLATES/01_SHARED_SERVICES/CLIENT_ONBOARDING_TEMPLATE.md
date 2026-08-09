<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CLIENT ONBOARDING TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT · CM MONEY AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Ja — vóór live gebruik |

## 02 · DOEL

Complete onboarding-gate voor een nieuwe client of artist. De template controleert contract, scope, billing, systemen, stakeholders, rights-context, KPI's en approval voordat het dossier operationeel live gaat.

## 03 · GEBRUIKSMOMENT

- Nieuwe client of artist wordt operationeel ingericht.
- Herstart van een samenwerking.
- Materiële scopewijziging die her-onboarding vereist.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Contractstatus | Ja | 02_CONTRACT / Legal |
| Scope | Ja | Proposal / opdrachtbevestiging |
| Billinggegevens | Ja | Moneybird / Finance |
| Dossier- en systeemtoegang | Ja | Drive / ClickUp / Gmail |
| Stakeholders | Ja | Contact Sheet |
| Rights-context | Indien relevant | Rights Register / Legal |

## 05 · WERKTEMPLATE

### ONBOARDING — CONTRACT & SCOPE

| Poort-ID | Onderdeel | Status | Eigenaar | Bewijs/bron |
|---|---|---|---|---|
| P01 | Contractstatus bevestigd | TBD | TBD | TBD |
| P02 | Scope bevestigd | TBD | TBD | TBD |
| P03 | Approvalvoorwaarden bekend | TBD | TBD | TBD |

### ONBOARDING — SYSTEMEN & FINANCE

| Poort-ID | Onderdeel | Status | Eigenaar | Bewijs/bron |
|---|---|---|---|---|
| P04 | Moneybird-relatie / billing ingericht | TBD | TBD | TBD |
| P05 | Drive-dossier aangemaakt | TBD | TBD | TBD |
| P06 | ClickUp-dossier aangemaakt | TBD | TBD | TBD |
| P07 | Gmail/contactcontext ingericht | TBD | TBD | TBD |

### ONBOARDING — OPERATIE

| Poort-ID | Onderdeel | Status | Eigenaar | Bewijs/bron |
|---|---|---|---|---|
| P08 | Stakeholder list compleet | TBD | TBD | TBD |
| P09 | Rights/document request uitgevoerd | TBD | TBD | TBD |
| P10 | Communicatieritme vastgesteld | TBD | TBD | TBD |
| P11 | KPI-baseline vastgesteld | TBD | TBD | TBD |
| P12 | Roadmap/werkplan gestart | TBD | TBD | TBD |
| P13 | Privacy/access review afgerond | TBD | TBD | TBD |
| P14 | Go-live approval vastgelegd | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Poort status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen operationele go-live zolang verplichte poorten niet `DONE` zijn.
>
> **02** — Go-live approval is verplicht.
>
> **03** — Een `BLOCKED` poort heeft altijd eigenaar en benoemde oorzaak/bron.
>
> **04** — Geen wachtwoorden of vertrouwelijke clientdata in de GitHub-specificatie.

## 07 · RESULTAAT

- Volledig ingericht dossier.
- Go-live status aantoonbaar.
- ClickUp-onboarding en operationele overdracht gereed.

## 08 · KWALITEITSCONTROLE

- Alle verplichte poorten gebruiken gecontroleerde statuswaarden.
- Iedere poort heeft eigenaar en bewijs/bron of `TBD`.
- Billing is herleidbaar naar Moneybird.
- Contract- en rightsclaims zijn herleidbaar naar Legal-bronnen.

## 09 · GOEDKEURING

Vóór live gebruik conform geldende CM approval governance; client-facing escalatie naar Sophia / CM CONTROL waar vereist.

## 10 · OVERDRACHT

- → Operationele workflow
- → Artist Roadmap / werkplan
- → KPI Template
- → ClickUp

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_ONBOARDING_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit contractstatus, billing, rights, approval, owner of poortstatus; onbekend = `TBD`.
- Gebruik alleen gecontroleerde statuswaarden.
- Behoud A4-portret; onboarding is opgesplitst in logische poortblokken met stabiele Poort-ID.
- Geen wachtwoorden, getekende documenten of vertrouwelijke clientdata in de spec.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Poort toegevoegd/gewijzigd | Make → ClickUp | Onboarding-subtask bijwerken | Poort-ID→External ID, Onderdeel→Taak, Eigenaar→Assignee, Status→Status |
| P04 `DONE` | Make | Finance-context bevestigen | Poort-ID→Reference, Bewijs/bron→Source |
| Alle verplichte poorten `DONE` | Make → ClickUp | Go-live status | Dossier→List, P14→Approval gate |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, A4-portret via drie poortblokken, stabiele Poort-ID, gecontroleerde status en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
