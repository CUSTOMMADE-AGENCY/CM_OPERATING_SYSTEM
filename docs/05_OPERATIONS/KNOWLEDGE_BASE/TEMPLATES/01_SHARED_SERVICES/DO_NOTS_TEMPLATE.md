<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — DO NOTS TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij wijziging |

## 02 · DOEL

Operationele guardrail-lijst met verboden acties, reden, risiconiveau, escalatieroute en toegestane alternatieve route voor mensen, agents en automations.

## 03 · GEBRUIKSMOMENT

- Onboarding.
- Agent-instructies.
- Workflow- en automation-review.
- Nieuwe governancebeperking.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Verbod / grens | Ja | Governance |
| Reden / risico | Ja | Governance / owner |
| Escalatieroute | Ja | CM CONTROL AGENT |
| Toegestane route | Ja | Workflow / governance |

## 05 · WERKTEMPLATE

### GUARDRAILS

| Regel-ID | Verbod / grens | Risico | Escalatie | Toegestane route | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Risico | `LOW` · `MEDIUM` · `HIGH` · `CRITICAL` |
| Regel status | `ACTIVE` · `SUPERSEDED` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Twijfel over bevoegdheid, scope of governance → escaleren; niet zelf invullen.
>
> **02** — Juridische, financiële of vertrouwelijke impact zonder duidelijke bevoegdheid → escaleren.
>
> **03** — Level 4-gevolgen → Sophia conform governance.
>
> **04** — Een guardrail mag niet worden omzeild via een parallelle workflow of template.

## 07 · RESULTAAT

- Eenduidige guardrails die naar agents/workflows kunnen worden doorgegeven.

## 08 · KWALITEITSCONTROLE

- Iedere regel heeft stabiele Regel-ID.
- Iedere actieve regel heeft risico, escalatie en toegestane route.
- Status en risico gebruiken gecontroleerde waarden.
- Geen dubbele of tegenstrijdige guardrails.

## 09 · GOEDKEURING

Wijzigingen: CM CONTROL AGENT; escalatie conform geldende governance.

## 10 · OVERDRACHT

- → Agent-instructies
- → Workflow/automation guardrails
- → Governance review

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

GitHub = canonical spec; Drive alleen werkbare kopie indien operationeel nodig.

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index en leidende governance.
- Verzin nooit nieuwe verboden acties of uitzonderingen; onbekend = `TBD` en escaleer.
- Negeer nooit een `ACTIVE` guardrail.
- Behoud A4-portret en compacte tabellen.
- Maak geen parallelle guardrail-lijst.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Regel `ACTIVE`/gewijzigd | Make → agent/workflow config | Guardrail bijwerken | Regel-ID→Rule ID, Verbod / grens→Rule, Risico→Risk, Escalatie→Escalation, Status→Status |
| Regel `SUPERSEDED` | Make → agent/workflow config | Guardrail uitschakelen | Regel-ID→Rule ID, Status→Status |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, Regel-ID, risico/status-enums en valide automation mappings toegevoegd. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
