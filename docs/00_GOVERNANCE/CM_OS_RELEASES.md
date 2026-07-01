# CM Operating System Releases

## Doel

Dit document vormt het officiële release-register van het CM Operating System.

Iedere release legt vast:

- releasedatum
- versie
- status
- wijzigingen
- impact
- migratie
- breaking changes
- goedkeuring

Dit document is de enige bron van waarheid voor officiële CM OS releases.

---

## Release Statussen

Concept

In Review

Goedgekeurd

Actief

Vervangen

Gearchiveerd

---

## Release Register

### CM OS Baseline V1.0

Status:
ACTIEF

Releasedatum:
2026-07-01

Beschrijving:

Eerste governance-baseline van het volledige CM Operating System.

Deze baseline bevriest de architectuur zodat toekomstige wijzigingen uitsluitend via governance verlopen.

Bevat onder andere:

- Drive Structure
- Folder Standards
- Map Specifications
- Governance
- Templates
- Workflows
- SOPs
- Playbooks
- Agent Passports
- Drive Governance
- GitHub Governance
- Agent Governance
- Template Governance
- Document Governance
- Decision Matrix
- Responsibility Matrix
- Agent Lifecycle
- Agent Certification
- Agent Readiness
- Template Architecture
- Template Register
- Template Index

---

## Frozen Documents

De volgende documenten vallen onder CM OS Baseline V1.0 en zijn bevroren als governance-baseline:

- `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
- `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
- `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md`
- `docs/04_SYSTEMS/DRIVE_MAPPING.md`
- `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_READINESS_CHECKLIST.md`
- `docs/07_AI_AGENTS/AGENT_CERTIFICATION_STANDARD.md`
- `docs/07_AI_AGENTS/AGENT_LIFECYCLE.md`
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_ARCHITECTUURSTANDAARD.md`
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- `docs/03_SHARED_SERVICES/TEMPLATES/00_TEMPLATE_INDEX.md`

---

## Governance Regel

Vanaf Baseline V1.0 is de architectuur production-ready en bevroren. Architectuurwijzigingen mogen uitsluitend plaatsvinden via:

- formele Architecture Decision Record (ADR) in `docs/00_GOVERNANCE/ADR/`
- `CM_SYSTEM_DECISION_MATRIX.md`
- `DECISION_LOG.md`
- Pull Request
- CM CONTROL AGENT review
- goedkeuring door repository owner

Architectuurwijzigingen mogen nooit rechtstreeks op main plaatsvinden en mogen niet buiten de ADR + PR-route worden doorgevoerd.

---

## Breaking Changes

Voor V1.0:

Geen.

---

## Migratie

Niet van toepassing.

---

## Volgende geplande release

CM OS V1.1

Status:
Gepland

Doel:

- Drive Cleanup
- CM VAULT AGENT
- CM FLOW AGENT
- eerste Make-scenario's
- eerste AI-uitvoering
