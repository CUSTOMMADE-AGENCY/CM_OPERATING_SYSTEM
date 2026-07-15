# CM Architecture Decisions

## Doel

Register voor architectuurbesluiten met structurele impact op het CM Operating System.

## Besluiten

### ADR-001 — Actuele domeinstructuur

**Datum:** 2026-07-15  
**Status:** Goedgekeurd  
**Besluit:** GitHub gebruikt de actuele CM-domeinen `00_GOVERNANCE` tot en met `09_CONTENT`. Organisatiebrede operationele systeemdocumentatie staat onder `05_OPERATIONS`.

### ADR-002 — Operations-classificatie

**Datum:** 2026-07-15  
**Status:** Goedgekeurd  
**Besluit:** `05_OPERATIONS` bevat `WORKFLOWS`, `SOPS`, `PLAYBOOKS`, `AUTOMATIONS`, `AGENTS` en `KNOWLEDGE_BASE`.

### ADR-003 — Agents staan niet onder SOPs

**Datum:** 2026-07-15  
**Status:** Goedgekeurd  
**Besluit:** Agents hebben een eigen canonieke map. Een Agent gebruikt Workflows, voert taken uit volgens SOPs, gebruikt Playbooks voor scenario's, raadpleegt Knowledge Base en kan door Automations worden ondersteund.

### ADR-004 — Repository Recovery Build Freeze

**Datum:** 2026-07-15  
**Status:** Actief  
**Besluit:** Tijdens de recovery worden geen nieuwe templates, Agents, Automations of inhoudelijke structuren toegevoegd buiten de recovery-scope.

### ADR-005 — Templates buiten huidige recovery-scope

**Datum:** 2026-07-15  
**Status:** Goedgekeurd  
**Besluit:** Templates blijven voorlopig ongewijzigd. Templateconsolidatie en hernoeming volgen pas na afronding van governance- en repositoryherstel.
