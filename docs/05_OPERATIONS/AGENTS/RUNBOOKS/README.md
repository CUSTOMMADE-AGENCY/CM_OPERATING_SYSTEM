# CM_OS — Operationele Runbooks

> Status: **PRE-PRODUCTION** · Standaard: v2.0 · Datum: 2026-08-11

## Doel

Waar de agentpaspoorten (`../ACTIVE/`) beschrijven **wat** een agent is, beschrijven deze runbooks
**hoe** elke agent zijn workflows exact uitvoert — verankerd in het echte substraat (canonieke
ClickUp-structuur per ADR-2026-08-07, Drive `OS_CUSTOMMADE`, Make/Apps Script, Moneybird, Gmail).

Bruikbaar door mensen én als operating-basis voor de AI-agents. Elk runbook volgt dezelfde
governance-hardened v2.0-structuur: bronhiërarchie + conflictregel, entiteitsscheiding (CM↔FIERCE),
source-of-truth-matrix, mandaat, preflight, 12-blok workflowcontract, Waiting-On, handoff-contract,
approval matrix, logging/audit + idempotency, exceptions, ritme, KPI's, production-readiness gate en DoD.

## Runbooks

| Agent | Runbook | Primaire ClickUp-folder | Kern-gate |
|---|---|---|---|
| CM OPS | `CM_OPS_RUNBOOK.md` | `CLIENTS` | Extern/publiceren/finance → Sophia |
| CM MONEY | `CM_MONEY_RUNBOOK.md` | `OPERATIONS` (finance-lijsten) | Betaling/BTW-indiening/incasso → Sophia |
| CM LEGAL | `CM_LEGAL_RUNBOOK.md` | `DEAL DESK` | Ondertekening/verplichting → Sophia |
| CM PROSPECT | `CM_PROSPECT_RUNBOOK.md` | `PIPELINE` | Externe benadering/voorstel → Sophia |
| CM SOCIAL | `CM_SOCIAL_RUNBOOK.md` | `MARKETING` | Publicatie/persbenadering → Sophia |
| CM VAULT | `CM_VAULT_RUNBOOK.md` | `OPERATIONS` (docopdrachten) | Verwijdert nooit; governance → CONTROL/ADR |
| CM FLOW | `CM_FLOW_RUNBOOK.md` | `OPERATIONS` (flow/automation) | Activatie/datamutatie → CM CONTROL + Sophia |
| CM CONTROL | `CM_CONTROL_RUNBOOK.md` | `OPERATIONS` (eigenaar) | Mergt/activeert nooit; finale GO → Sophia |

## Statusregel

Alle runbooks zijn **PRE-PRODUCTION**: ze beschrijven de beoogde doeltoestand. Een runbook wordt pas
LIVE/PRODUCTION na de production-readiness gate (§production van elk runbook): agent op Level 3,
substraat gereconcilieerd, capabilities getest/geactiveerd, functionele + red-team tests geslaagd,
monitoring actief en Sophia-production approval geregistreerd.

## Relatie met de rest van het dossier

- Certificering/gates per agent: `../CERTIFICATION/`
- Canonieke ClickUp-structuur: `../../KNOWLEDGE_BASE/SYSTEMS/CLICKUP_STRUCTURE.md` + ADR-2026-08-07
- Scenario-status: `../../AUTOMATIONS/MAKE_SCENARIO_MAP.md`
