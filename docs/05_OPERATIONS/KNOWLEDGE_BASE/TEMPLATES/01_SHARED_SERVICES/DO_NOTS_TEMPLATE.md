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
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij wijziging |

## 02 · PURPOSE

Operationele lijst met grenzen, verboden acties en escalatiepunten voor mensen en agents.

## 03 · TRIGGER

- Onboarding, agent-instructies, workflow-controles.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Grenzen per lane | Ja | Governance |
| Escalatieregels | Ja | CM CONTROL AGENT |

## 05 · WORKING TEMPLATE

### Do nots

| Verbod | Reden | Escalatie | Toegestane route |
|---|---|---|---|
| TBD | TBD | TBD | TBD |
| TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Twijfel over bevoegdheid of scope → escaleer.
>
> **02** — Vertrouwelijke of juridische impact → escaleer.
>
> **03** — Alles met Level 4-gevolgen → Sophia.

## 07 · OUTPUT

- Vastgelegde grenzen gekoppeld aan workflows/agents.

## 08 · QUALITY CONTROL

- Elke do-not heeft reden en escalatie.
- Scanbaar binnen 10 seconden.

## 09 · APPROVAL

Ja — bij wijziging (CM CONTROL AGENT).

## 10 · HANDOFF

- → Agent-instructies
- → Betreffende workflow

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]` of agent-context

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Do-not gewijzigd | Make → Agents | Instructie updaten | Regel→Agent guardrail |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM CONTROL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
