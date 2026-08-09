<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — MONTHLY REPORT TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Reporting |
| Onderdeel van | CM Template Library / Reporting |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM MONEY AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Ja — vóór externe/client-facing verzending |

## 02 · DOEL

Maandelijkse scanbare rapportage voor management- of clientretainers met highlights, KPI's, inkomsten/financials, acties, risico's en beslispunten. Het rapport vat leidende bronsystemen samen en wordt zelf geen alternatieve financiële of operationele waarheid.

## 03 · GEBRUIKSMOMENT

- Maandafsluiting.
- Managementreview.
- Client-facing maandrapportage.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| KPI-set | Ja | KPI Template |
| Acties/status | Ja | ClickUp |
| Financiële actuals | Indien relevant | Moneybird / royaltybron |
| Roadmap/mijlpalen | Ja | Artist Roadmap / werkplan |
| Besluiten/risico's | Indien relevant | Meeting Recap / dossier |

## 05 · WERKTEMPLATE

### MAANDOVERZICHT

| Veld | Waarde |
|---|---|
| Periode | TBD |
| Primair resultaat | TBD |
| Belangrijkste highlight | TBD |
| Grootste aandachtspunt | TBD |
| Beslissing nodig | TBD |

### KPI'S

| KPI | Actueel | Doel | Trend | Bron | Opmerking |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### FINANCIEEL

| Inkomstenlane / metric | Actueel | Doel | Forecast | Verschil | Bron |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### ACTIES

| Actie-ID | Actie | Eigenaar | Deadline | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### RISICO'S & MITIGATIE

| Risico-ID | Risico | Impact | Mitigatie | Eigenaar | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Trend | `UP` · `FLAT` · `DOWN` · `TBD` |
| Actiestatus | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |
| Risicostatus | `OPEN` · `MITIGATING` · `CLOSED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen ongefilterde datadump; alleen managementrelevante informatie.
>
> **02** — Financiële actuals hebben benoemde bron en worden niet door AI verzonnen.
>
> **03** — Client-facing verzending vereist approval.
>
> **04** — Open `BLOCKED` acties of materiële risico's mogen niet uit de samenvatting worden weggelaten.

## 07 · RESULTAAT

- Goedgekeurd maandrapport.
- Acties/risico's teruggekoppeld naar ClickUp.
- Gearchiveerde rapportkopie in Drive.

## 08 · KWALITEITSCONTROLE

- KPI's hebben actual, doel, trend en bron.
- Financials zijn herleidbaar naar Moneybird/benoemde bron.
- Acties en risico's hebben stabiele IDs, owner en status.
- Samenvatting correspondeert met onderliggende data.

## 09 · GOEDKEURING

Intern conform workflow; vóór externe/client-facing verzending volgens geldende approval governance.

## 10 · OVERDRACHT

- → Client/management
- → ClickUp
- → Drive archief/reporting

## 11 · LEIDENDE BRON

GitHub = rapportspecificatie · Drive = rapportkopie/export · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/06_FINANCE` of `[DOSSIER]/04_DELIVERABLES` volgens dossierfunctie · `YYYY-MM_[ENTITY]_MONTHLY_REPORT_vX.Y`

## 13 · AI-INSTRUCTIES

- Gebruik uitsluitend benoemde bronnen; verzin nooit KPI's, financials, status of risico's.
- Onbekend = `TBD`.
- Behoud A4-portret; splits brede onderwerpen in afzonderlijke blokken.
- Finance actuals komen uit Moneybird/benoemde bron; ClickUp blijft actiebron.
- Geen vertrouwelijke clientdata in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Maand-close | Make → rapportworkflow | Rapport vullen | KPI→KPI, Actueel→Actual, Doel→Target, Trend→Trend, Bron→Source |
| Actie toegevoegd/gewijzigd | Make ↔ ClickUp | Actiestatus synchroniseren | Actie-ID→External ID, Actie→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status |
| Rapport approved | Make → Gmail/Drive | Verzenden/archiveren | Periode→Period, rapportbestand→Attachment/Archive |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, finance/risico-blokken, stabiele Actie-/Risico-IDs, bronregels en valide automation mappings toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend rapportkopieën/exports._
