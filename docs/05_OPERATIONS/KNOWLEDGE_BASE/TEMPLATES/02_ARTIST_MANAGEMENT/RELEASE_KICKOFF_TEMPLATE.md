<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — RELEASE KICKOFF TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Artist Management |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM SOCIAL AGENT · CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Ja — bij campaign approval |

## 02 · DOEL

Operationele kickoff voor een releasecampagne. De template zet de goedgekeurde Release Strategy om in concrete poorten, owners, deadlines en ClickUp-uitvoering zonder rights-, asset- of approvalgaten.

## 03 · GEBRUIKSMOMENT

- Start van releaseproductie.
- Start van campagne-uitvoering.
- Herstart na een geblokkeerde release.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Release Strategy | Ja | Release Strategy Template |
| Release-info | Ja | Artist Roadmap |
| Rights status | Ja | Rights Register / Release Strategy |
| Assets | Ja | Release-dossier |
| Goedgekeurd budget | Ja | Release Strategy / approval evidence |

## 05 · WERKTEMPLATE

### KICKOFF-POORTEN

| Onderdeel | Status | Eigenaar | Deadline | Bron/bewijs |
|---|---|---|---|---|
| Release-info compleet | TBD | TBD | TBD | TBD |
| Audio-assets compleet | TBD | TBD | TBD | TBD |
| Visual assets compleet | TBD | TBD | TBD | TBD |
| Metadata/credits compleet | TBD | TBD | TBD | TBD |
| Rights status `CLEAR` | TBD | TBD | TBD | TBD |
| Distributie gereed | TBD | TBD | TBD | TBD |
| Campaign approval | TBD | TBD | TBD | TBD |

### UITVOERING

| Actie | Eigenaar | Deadline | Status | ClickUp-ref |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Kickoff status | `NOT_STARTED` · `IN_PROGRESS` · `READY` · `BLOCKED` · `DONE` |
| Uitvoering status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen kickoff naar uitvoering zolang verplichte release-info ontbreekt.
>
> **02** — Geen uitvoering richting livegang zolang Rights status niet `CLEAR` is.
>
> **03** — Geen campagne-uitgaven zonder toepasselijke approval.
>
> **04** — Geblokkeerde poort krijgt altijd eigenaar en opvolgdeadline.

## 07 · RESULTAAT

- Goedgekeurde kickoff.
- ClickUp-uitvoering met owners en deadlines.
- Expliciete blockers en vervolgstappen.

## 08 · KWALITEITSCONTROLE

- Elke poort heeft status, eigenaar en bron/bewijs.
- Iedere blocker heeft deadline.
- Iedere ClickUp-mapping verwijst naar bestaande velden.
- Geen vrije statuswaarden.

## 09 · GOEDKEURING

Ja — bij campaign approval; financiële toezeggingen conform CM approval governance.

## 10 · OVERDRACHT

- → ClickUp campagne
- → Artist Roadmap
- → Release Strategy

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[ARTIST]/04_RELEASES` · `YYYY-MM-DD_[ARTIST]_[RELEASE]_RELEASE_KICKOFF_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit status, owner, deadline, rights-clearance of approval; onbekend = `TBD`.
- Gebruik alleen gecontroleerde statuswaarden.
- Behoud A4-portret en maximaal praktisch leesbare tabelbreedte.
- Geen clientdata of getekende documenten in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Kickoff-poort toegevoegd/gewijzigd | Make → ClickUp | Poorttaak bijwerken | Onderdeel→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Status `BLOCKED` | Make → ClickUp | Blocker-opvolgtaak | Onderdeel→Taak, Eigenaar→Assignee, Deadline→Due date |
| Kickoff `READY` | Make → ClickUp | Campagne-uitvoering starten | Actie→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, uitvoeringsblok, gecontroleerde statussen, bron/bewijs en valide ClickUp-mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
