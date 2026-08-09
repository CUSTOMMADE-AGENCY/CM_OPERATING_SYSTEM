<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — APPROVAL EVIDENCE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services / Governance |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM LEGAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | GOVERNANCE |
| Approval | Bepaald door onderliggende actie |

## 02 · DOEL

Compact bewijsrecord van een verleende of geweigerde goedkeuring: onderwerp, besluit, approver, niveau, datum, voorwaarden en bewijsreferentie. Dit bewijsstuk ondersteunt het operationele Approval Register maar vervangt dat register niet.

## 03 · GEBRUIKSMOMENT

- Iedere approval die aantoonbaar moet worden vastgelegd.
- Level 3/4-beslissing.
- Budget-, client-facing-, legal- of governance-gate wanneer bewijs vereist is.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Onderwerp / actie | Ja | Workflow / dossier |
| Approver | Ja | Governance |
| Approvalniveau | Ja | Governance |
| Besluit | Ja | Approval evidence / communicatie |
| Bewijsreferentie | Ja | Gmail / Drive / registerbron |

## 05 · WERKTEMPLATE

### APPROVAL-RECORD

| Approval-ID | Onderwerp | Besluit | Approver | Niveau | Datum |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### APPROVAL-VOORWAARDEN & BEWIJS

| Approval-ID | Voorwaarden | Geldig tot | Bewijsreferentie | Dossierreferentie | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De twee blokken vormen via `Approval-ID` inhoudelijk één approval-record. Het operationele audit trail blijft in het geldende CM Approval Register._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Besluit | `APPROVED` · `REJECTED` · `CONDITIONAL` · `TBD` |
| Status | `VALID` · `EXPIRED` · `SUPERSEDED` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen approval zonder identificeerbare approver en bewijsreferentie.
>
> **02** — Level 4 vereist Sophia-approval conform governance.
>
> **03** — Een `CONDITIONAL` besluit moet voorwaarden expliciet vastleggen.
>
> **04** — Approval Evidence vervangt het operationele Approval Register niet.

## 07 · RESULTAAT

- Traceerbaar approval-bewijsstuk.
- Input voor Approval Register en betrokken workflow.

## 08 · KWALITEITSCONTROLE

- Beide blokken gebruiken dezelfde Approval-ID.
- Approver, niveau, datum, besluit en bewijsreferentie zijn ingevuld of expliciet `TBD`.
- Besluit/status gebruiken gecontroleerde waarden.
- Geen approval wordt afgeleid uit stilte of aannames.

## 09 · GOEDKEURING

Niveau volgt de onderliggende actie; governance-registratie door CM CONTROL AGENT.

## 10 · OVERDRACHT

- → CM Approval Register
- → Betrokken dossier/workflow
- → ClickUp gate indien van toepassing

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie/evidence · ClickUp = uitvoering · Moneybird = financiële waarheid. Operationeel approval audit trail = geldend CM Approval Register.

## 12 · OPSLAG

Drive: `[DOSSIER]/02_CONTRACT` of `07_LEGAL/EVIDENCE` volgens workflow.

## 13 · AI-INSTRUCTIES

- Verzin nooit approval, approver, niveau, datum, voorwaarden of bewijs; onbekend = `TBD`.
- Controleer geldende approval governance vóór interpretatie.
- Behoud A4-portret; gekoppelde approvalblokken gebruiken Approval-ID.
- Geen vertrouwelijke bewijsinhoud in de GitHub-specificatie; alleen referenties.
- Maak geen parallel approvalregister.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Approval-record compleet | Make → Approval Register | Registerregel aanmaken/bijwerken | Approval-ID→ID, Onderwerp→Subject, Besluit→Decision, Approver→Approver, Niveau→Level, Datum→Date, Bewijsreferentie→Evidence |
| Status `EXPIRED` | Make → ClickUp | Reviewtaak | Approval-ID→Reference, Onderwerp→Taak, Geldig tot→Due date |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, Approval-ID, besluit/status-enums, voorwaarden/bewijsblok en register-veilige automation mappings toegevoegd. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën/evidence._
