<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DEAL NEGOTIATION TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Deal Tool |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM PROSPECT AGENT |
| Support agents | CM LEGAL AGENT · CM MONEY AGENT · CM CONTROL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | FINANCIAL / LEGAL |
| Approval | Ja — conform deal- en approval governance; Level 4 → Sophia |

## 02 · DOEL

Operationele onderhandelingstool voor deals rond masters, catalogus, publishing, licensing, sync, neighboring rights en commerciële partnerships. Legt per Deal-ID de onderhandelingspositie, voorstellen, concessies, red flags, approvals en next move vast zonder het Deal Memo, contract of Buyer Pipeline te vervangen.

## 03 · GEBRUIKSMOMENT

- Zodra een gekwalificeerde deal daadwerkelijk in onderhandeling gaat.
- Bij ontvangen offer, counter-offer of gewijzigde voorwaarden.
- Voor interne voorbereiding van een call/meeting met tegenpartij.
- Voor approval vóór concessies of commitment.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal Memo | Ja | Deal Memo Template |
| Valuation / financiële bandbreedte | Indien financieel | Valuation / Moneybird / statements |
| Rights-status | Ja | Rights Register / Rights Audit |
| Tegenpartij & pipeline-stage | Ja | Buyer Pipeline / ClickUp |
| Approvalkaders | Ja | CM approval governance |

## 05 · WERKTEMPLATE

### DEAL — CONTEXT

| Deal-ID | Type deal | Tegenpartij | Asset / rights scope | Stage | Eigenaar |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### POSITIE — ECONOMICS

| Deal-ID | Onderwerp | Onze positie | Tegenpartij | Doelwaarde | Ondergrens / fallback |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### POSITIE — TERMS & RIGHTS

| Deal-ID | Onderwerp | Onze positie | Tegenpartij | Non-negotiable | Legal status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### OFFER LOG

| Offer-ID | Deal-ID | Datum | Van | Type | Kernvoorstel |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### OFFER LOG — ECONOMICS

| Offer-ID | Waarde | Upfront | Earn-out / backend | Holdback | Fee / participation |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### OFFER LOG — TERMS

| Offer-ID | Rights scope | Term | Territory | Exclusiviteit | Opmerking |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De Offer-ID-blokken vormen inhoudelijk één offer-record. Meerdere offers/counters gebruiken elk een eigen Offer-ID binnen dezelfde Deal-ID._

### CONCESSIES & RED FLAGS

| Deal-ID | Punt | Type | Impact | Toegestaan? | Approval nodig |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### BESLUIT & NEXT MOVE

| Deal-ID | Besluit | Volgende actie | Eigenaar | Deadline | Approval status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Stage | `LEAD` · `QUALIFIED` · `DILIGENCE` · `CLOSING` · `CLOSED` |
| Offer type | `INITIAL` · `COUNTER` · `REVISED` · `FINAL` |
| Punt type | `ECONOMIC` · `RIGHTS` · `LEGAL` · `OPERATIONAL` |
| Toegestaan? | `YES` · `NO` · `CONDITIONAL` · `TBD` |
| Approval status | `NOT_REQUIRED` · `PENDING` · `APPROVED` · `REJECTED` |
| Legal status | `CLEAR` · `OPEN` · `BLOCKED` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen concessie onder minimum/fallback of buiten rights scope zonder toepasselijke approval.
>
> **02** — `BLOCKED` legal/rights status blokkeert commitment.
>
> **03** — Geen finale acceptatie zonder Deal Memo, actuele economics en vereiste approval.
>
> **04** — Level 4-beslissingen → Sophia.
>
> **05** — Mondelinge afspraken worden als concept gelogd totdat bewijs/contract beschikbaar is.

## 07 · RESULTAAT

- Actueel negotiation record per Deal-ID.
- Traceerbaar offer- en concession-log.
- Duidelijke next move, owner, deadline en approvalstatus.
- Input voor Deal Memo, Buyer Pipeline en Legal/closing.

## 08 · KWALITEITSCONTROLE

- Elke offer heeft Offer-ID en Deal-ID.
- Economics en rights-termen zijn herleidbaar naar bron/Deal Memo.
- Elke concessie heeft impact en approvalstatus.
- Next move heeft eigenaar en deadline.
- Geen fictieve offers, bedragen, rights of approvals.

## 09 · GOEDKEURING

Conform geldende CM deal- en approval governance; Level 4 → Sophia.

## 10 · OVERDRACHT

- → Deal Memo
- → Buyer Pipeline / ClickUp
- → Legal / contractvorming
- → Data Room / Closing waar van toepassing

## 11 · LEIDENDE BRON

GitHub = template-specificatie · Drive = negotiation werkkopie/evidence · ClickUp = pipeline/uitvoering · Moneybird/royalty statements = financiële actuals · Rights Register/Legal evidence = rechtenbron.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL]/04_OUTREACH_CLICKUP` of `03_WAARDERING_VERKOOPPAKKET` · `YYYY-MM-DD_[DEAL]_DEAL_NEGOTIATION_vX.Y`

## 13 · AI-INSTRUCTIES

- Verzin nooit offers, bedragen, rights, fallback-posities of approval.
- Onbekend = `TBD`; mondelinge informatie expliciet markeren totdat bewijs beschikbaar is.
- Gebruik officiële deal stages uit `DEAL_PIPELINE_CLICKUP_REFERENCE`.
- Behoud A4-portret; gebruik Deal-ID en Offer-ID om gekoppelde blokken te verbinden.
- Geen confidential evidence of getekende contracten in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Nieuw offer toegevoegd | Make → ClickUp | Negotiation update | Deal-ID→External ID, Offer-ID→Reference, Type→Offer type, Datum→Date, Kernvoorstel→Description |
| Approval status `PENDING` | Make → ClickUp | Approval-taak | Deal-ID→Reference, Besluit→Task, Eigenaar→Assignee, Deadline→Due date, Approval status→Status |
| Legal status `BLOCKED` | Make → ClickUp | Legal finding | Deal-ID→Reference, Onderwerp→Task, Legal status→Status |
| Besluit `APPROVED` / finale acceptatie | Make → Deal Memo / Closing | Dealstatus bijwerken | Deal-ID→Reference, Stage→Status, Volgende actie→Next action |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-08-10 | V2.2 | Eerste canonical Deal Negotiation Template met Deal-ID/Offer-ID, economics, terms, concessions, approvals en officiële pipeline-koppeling. | CM PROSPECT AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare negotiation-kopieën/evidence._
