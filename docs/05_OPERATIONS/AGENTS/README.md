# AGENTS

## Doel

Canonieke documentatie voor actieve agentrollen, architectuur, governance, standaarden, bevoegdheidsgrenzen en escalatie. Fase 2 wijzigt geen bevoegdheden.

## Canonieke registers

- Agent Register: `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md`
- Actieve passports: `docs/05_OPERATIONS/AGENTS/ACTIVE/`
- Operationele runbooks (hoe elke agent uitvoert): `docs/05_OPERATIONS/AGENTS/RUNBOOKS/`
- Agent build specs (hoe elke agent gebouwd is): `docs/05_OPERATIONS/AGENTS/CM_AGENT_BUILD_SPECS.md`
- ClickUp-reconciliatie (welke lijst voedt welke agent-tab): `docs/05_OPERATIONS/AGENTS/CM_AGENT_CLICKUP_RECONCILIATION.md`
- Control Tower deploy-runbook (fase 2 live zetten): `docs/05_OPERATIONS/AGENTS/CM_AGENT_CONTROL_TOWER_DEPLOY_RUNBOOK.md`
- Certificeringsdossier (pad naar Level 3): `docs/05_OPERATIONS/AGENTS/CERTIFICATION/`
- Activation readiness report: `docs/05_OPERATIONS/AGENTS/AGENT_ACTIVATION_READINESS_REPORT.md`
- Legacy audittrail: `docs/05_OPERATIONS/AGENTS/HISTORY/LEGACY/`
- Playbook Index: `docs/05_OPERATIONS/PLAYBOOKS/PLAYBOOK_INDEX.md`

## Statusregel

Alleen passports in `ACTIVE/` zijn actief. Bestanden in `HISTORY/LEGACY/` zijn niet actief en verwijzen naar het actuele register.

## Canonieke capability-status

Connection state, permissions, actions, capability state, evidence/trace en failure policy staan centraal in `AGENT_CAPABILITY_REGISTER.md`. Alle agentlagen moeten dit register volgen; een toolvermelding bewijst geen connection.
