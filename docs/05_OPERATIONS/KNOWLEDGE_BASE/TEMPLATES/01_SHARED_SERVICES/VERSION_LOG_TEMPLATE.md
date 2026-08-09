<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — VERSION LOG TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services / Governance |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM OPS AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | CM CONTROL AGENT — Level 1 |

## 02 · DOEL

Traceerbaar versielog voor een document of deliverable: welke versies bestaan, welke wijziging is gedaan, wie eigenaar is en welke versie momenteel leidend is.

## 03 · GEBRUIKSMOMENT

- Documenten/deliverables met meerdere versies.
- Voor client-facing, legal of governance-documenten waarbij versiecontrole nodig is.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Document-ID / naam | Ja | Dossier |
| Versie | Ja | Werkbestand |
| Wijzigingsomschrijving | Ja | Auteur / changelog |
| Bestandslocatie | Ja | Drive |

## 05 · WERKTEMPLATE

### VERSIELOG

| Versie-ID | Versie | Datum | Wijziging | Eigenaar | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### BESTANDSREFERENTIE

| Versie-ID | Document-ID/naam | Bestandslocatie | Approval-ref | Opmerking |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

_De twee blokken vormen via `Versie-ID` inhoudelijk één versie-record._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Versiestatus | `DRAFT` · `CURRENT` · `SUPERSEDED` · `ARCHIVED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Per document is maximaal één versie `CURRENT`.
>
> **02** — `SUPERSEDED`/`ARCHIVED` versies worden niet als actuele output gebruikt.
>
> **03** — Bestandslocatie wordt niet aangenomen; onbekend = `TBD`.

## 07 · RESULTAAT

- Traceerbare versiehistorie met één leidende/current versie.

## 08 · KWALITEITSCONTROLE

- Beide blokken gebruiken dezelfde Versie-ID.
- Per document maximaal één `CURRENT`.
- Versie, datum, eigenaar en locatie zijn bekend of expliciet `TBD`.
- Status gebruikt gecontroleerde waarden.

## 09 · GOEDKEURING

Level 1 — CM CONTROL AGENT; hogere approval volgt het onderliggende documenttype.

## 10 · OVERDRACHT

- → Betreffende domeinmap
- → Archiveerworkflow wanneer status wijzigt

## 11 · LEIDENDE BRON

GitHub = spec · Drive = bestands-/werkkopiebron · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/[DOMEINMAP]` naast het document waarvoor het log wordt gebruikt.

## 13 · AI-INSTRUCTIES

- Verzin nooit een versie, locatie, approval of wijziging; onbekend = `TBD`.
- Markeer nooit twee versies van hetzelfde document als `CURRENT`.
- Behoud A4-portret; gekoppelde blokken gebruiken Versie-ID.
- Geen parallel version log wanneer een bestaand log bij het document bestaat.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Versie `CURRENT` | Make → Drive workflow | Current-bestand markeren/naamconventie controleren | Versie-ID→Reference, Versie→Version, Bestandslocatie→File reference, Status→Status |
| Oude `CURRENT` wordt `SUPERSEDED` | Make → Archive workflow | Archiveeractie | Versie-ID→Reference, Bestandslocatie→Source, Status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, Versie-ID, gekoppeld bestandsblok, gecontroleerde statussen en archiveerbare mappings toegevoegd. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
