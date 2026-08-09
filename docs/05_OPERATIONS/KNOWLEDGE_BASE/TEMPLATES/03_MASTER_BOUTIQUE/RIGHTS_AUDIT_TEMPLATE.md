<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — RIGHTS AUDIT TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Rights Audit |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM PROSPECT AGENT · CM CONTROL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LEGAL |
| Approval | Ja — vóór buyer-facing of diligencegebruik |

## 02 · DOEL

Rechtenaudit die per Werk-ID controleert of claims, metadata, chain of title, restrictions en evidence uit het Music Rights Register voldoende zijn voor deal- of diligencegebruik.

## 03 · GEBRUIKSMOMENT

- Voor buyer-facing Deal Memo.
- Due diligence.
- Chain-of-title-review.
- Materiële wijziging in Rights Register.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Music Rights Register | Ja | Rights Register |
| Brondocumenten/evidence | Ja | Legal evidence |
| Deal scope | Indien deal | Deal Memo |

## 05 · WERKTEMPLATE

### AUDIT — CLAIM

| Audit-ID | Werk-ID | Rights type | Claim | Bron/evidence | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### AUDIT — CONTROLES

| Audit-ID | Metadata | Chain of title | Shares | Restricties | Disputes/liens |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### FINDINGS & MITIGATIE

| Finding-ID | Audit-ID | Bevinding | Risico | Impact | Mitigatie | Eigenaar |
|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

### FINDING — OPVOLGING

| Finding-ID | Deadline | Status | Bewijs oplossing | Laatst bijgewerkt |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

_De auditblokken koppelen via Audit-ID/Werk-ID; de findingblokken vormen via Finding-ID één finding-record._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Audit status | `UNVERIFIED` · `PARTIAL` · `VERIFIED` · `BLOCKED` |
| Finding risico | `LOW` · `MEDIUM` · `HIGH` · `CRITICAL` |
| Finding status | `OPEN` · `IN_PROGRESS` · `RESOLVED` · `ACCEPTED_RISK` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen `VERIFIED` zonder herleidbare bron/evidence.
>
> **02** — `BLOCKED` audit of open `HIGH/CRITICAL` finding blokkeert buyer-facing gebruik tenzij expliciet conform governance geaccepteerd.
>
> **03** — AI corrigeert geen shares of chain-of-title-gaten uit zichzelf.

## 07 · RESULTAAT

- Auditstatus per work/right claim.
- Findings met risk, owner en mitigatie.
- Verificatie-input terug naar Rights Register en Deal Memo.

## 08 · KWALITEITSCONTROLE

- Iedere auditregel heeft Audit-ID en Werk-ID.
- Iedere finding heeft Finding-ID, risico, owner en status.
- `VERIFIED` vereist evidence.
- Findings worden niet stilzwijgend gesloten.

## 09 · GOEDKEURING

CM LEGAL AGENT vóór buyer-facing/diligencegebruik; risk acceptance conform CM governance.

## 10 · OVERDRACHT

- → Music Rights Register
- → Deal Memo
- → Data Room
- → ClickUp legal findings

## 11 · LEIDENDE BRON

GitHub = audit-specificatie · Drive = workcopy/evidence · ClickUp = finding-uitvoering · Moneybird = financiële waarheid. Legal evidence blijft bron voor verificatie.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL]/01_RECHTEN_REGISTER` of `07_LEGAL/LEGAL_REVIEW` volgens workflow.

## 13 · AI-INSTRUCTIES

- Verzin nooit evidence, ownership, shares, status of oplossing; onbekend = `TBD`.
- Alleen brononderbouwde claims mogen `VERIFIED` zijn.
- Behoud A4-portret; gebruik gekoppelde Audit-ID/Finding-ID-blokken.
- Geen vertrouwelijke evidence in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Auditstatus gewijzigd | Make → Rights workflow | Verification terugschrijven | Werk-ID→Record ID, Status→Verification status |
| Finding `OPEN`/`IN_PROGRESS` | Make → ClickUp | LEGAL-taak | Finding-ID→External ID, Bevinding→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status, Risico→Priority |
| Finding `RESOLVED` | Make → Rights workflow | Heraudit triggeren | Audit-ID→Reference, Bewijs oplossing→Evidence reference |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM LEGAL AGENT |
| 2026-08-10 | V2.2 | Audit-ID/Werk-ID/Finding-ID-architectuur, A4-portret-blokken, risk/status-enums en diligence automation mappings toegevoegd. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën/evidence._
