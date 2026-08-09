<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DATA ROOM TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Data Room Control |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM LEGAL AGENT · CM PROSPECT AGENT · CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LEGAL / CONFIDENTIAL |
| Approval | Access alleen na toepasselijke NDA/qualification/approval |

## 02 · DOEL

Controleerbare data room-index en access log voor due diligence. Legt vast welke documentcategorieën beschikbaar zijn, welke buyer toegang heeft, onder welke voorwaarden en wanneer toegang vervalt zonder vertrouwelijke inhoud in de template-specificatie te dupliceren.

## 03 · GEBRUIKSMOMENT

- Buyer bereikt diligence-fase.
- Data room wordt geopend of gewijzigd.
- Nieuwe buyer/access request.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal-ID | Ja | Deal Memo |
| Rights Audit | Ja | Rights Audit |
| Valuation / financial pack | Indien gedeeld | Valuation / Finance |
| NDA-status | Ja vóór access indien vereist | Legal evidence |
| Buyer qualification | Ja vóór gated access | Buyer Pipeline |

## 05 · WERKTEMPLATE

### DOCUMENTINDEX

| Document-ID | Categorie | Document/referentie | Locatie | Classificatie | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### ACCESS — BUYER

| Access-ID | Buyer | Deal-ID | Qualification | NDA-status | Accessniveau |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### ACCESS — GELDIGHEID

| Access-ID | Verleend door | Startdatum | Vervalt | Status | Bewijsreferentie |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De accessblokken vormen via `Access-ID` één access-record._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Documentstatus | `MISSING` · `READY` · `WITHHELD` · `SUPERSEDED` |
| Classificatie | `INTERNAL` · `CONFIDENTIAL` · `HIGHLY_CONFIDENTIAL` |
| NDA-status | `NOT_REQUIRED` · `PENDING` · `SIGNED` · `EXPIRED` |
| Accessniveau | `NONE` · `LIMITED` · `FULL` |
| Accessstatus | `PENDING` · `ACTIVE` · `EXPIRED` · `REVOKED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen gated access zonder geldige voorwaarden volgens Legal/governance.
>
> **02** — Full access vereist de toepasselijke approval.
>
> **03** — Access logging is verplicht; geen mondelinge/ontraceerbare toegang.
>
> **04** — Een buyer met `EXPIRED`/`REVOKED` access mag geen actieve toegang behouden.

## 07 · RESULTAAT

- Gecontroleerde documentindex.
- Traceerbare buyer-access records.
- Input voor Buyer Pipeline en Legal review.

## 08 · KWALITEITSCONTROLE

- Documenten hebben Document-ID, locatie en classificatie.
- Accessblokken koppelen via Access-ID.
- NDA/qualification/accessstatus zijn expliciet.
- Geen vertrouwelijke documentinhoud staat in de spec.

## 09 · GOEDKEURING

Access volgens geldende NDA-, qualification- en approval-governance; full access escaleren waar vereist.

## 10 · OVERDRACHT

- → Buyer Pipeline
- → Legal evidence
- → ClickUp diligence tasks

## 11 · LEIDENDE BRON

GitHub = data-room-specificatie · Drive = daadwerkelijke data room/evidence · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL]/02_CONTRACTEN_BEWIJS` of goedgekeurde data-roomlocatie.

## 13 · AI-INSTRUCTIES

- Verzin nooit NDA, qualification, access of documentstatus; onbekend = `TBD`.
- Deel/verplaats geen data-roomdocumenten vanuit deze template; alleen refereren en status beheren.
- Behoud A4-portret; accessblokken koppelen via Access-ID.
- Geen confidential documentinhoud in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Access request | Make → ClickUp | Qualification/access review | Access-ID→External ID, Buyer→Taak/Buyer, Deal-ID→Reference, NDA-status→Custom field, Accessniveau→Custom field |
| Access `ACTIVE` | Make → access workflow | Toegang uitvoeren | Access-ID→Reference, Buyer→Buyer, Accessniveau→Access level, Vervalt→Expiry |
| Access `EXPIRED`/`REVOKED` | Make → access workflow | Toegang intrekken | Access-ID→Reference, Status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Document-ID/Access-ID, A4-portret accessblokken, classificatie/NDA/access-enums en veilige access mappings toegevoegd. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Drive bevat de daadwerkelijke data room/evidence._
