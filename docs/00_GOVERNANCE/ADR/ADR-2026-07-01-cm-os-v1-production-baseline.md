# ADR-2026-07-01 — CM OS V1 Production Baseline

> **Recoverystatus:** `SUPERSEDED_FOR_RECOVERY`
> **Actuele opvolger tijdens recovery:** `docs/00_GOVERNANCE/HISTORY/RECOVERY_REPORTS/CM_REPOSITORY_RECOVERY_PLAN.md`
> De V1.0-production-baseline blijft als ADR behouden, maar is tijdens de actieve recovery niet leidend.

## Status

`SUPERSEDED_FOR_RECOVERY`

## Datum

2026-07-01

## Context

CM Operating System V1.0 is vastgesteld als production baseline. De bestaande architectuur is voldoende compleet, consistent en veilig om als officiële governance-baseline te gelden.

## Besluit

De volgende architectuuronderdelen zijn vastgesteld en production-ready verklaard:

- Drive Structure
- Folder Standards
- Map Specifications
- Governance
- Templates
- Workflows
- SOPs
- Playbooks
- Agent Passports

Vanaf deze release worden architectuurwijzigingen uitsluitend doorgevoerd via een formele ADR en Pull Request.

## Impact

- De V1.0-architectuur geldt als leidende production baseline.
- Directe architectuurwijzigingen zonder ADR en Pull Request zijn niet toegestaan.
- Bestaande governance-, template-, workflow-, SOP-, playbook- en agentdocumentatie blijft leidend totdat een geaccepteerde ADR anders bepaalt.

## Migratie

Geen technische migratie vereist voor deze baseline.

## Rollback

Niet van toepassing. Een toekomstige correctie of vervanging van dit besluit vereist een nieuwe ADR en Pull Request.
