# CM Release Notes

## Repository Recovery — Fase 2 Operations Consolidation — 2026-07-26

### Status

`UITGEVOERD / IN REVIEW`

Knowledge Base, algemene Playbooks, organisatiebrede SOPs en Workflows, Automation-documentatie en actieve/legacy Agent-documentatie zijn in de verplichte volgorde geconsolideerd onder `docs/05_OPERATIONS/`. Afwijkende rootvarianten van drie Agent-playbooks zijn behouden. Templates, business lanes en live technische logica bleven buiten scope. Zie `docs/00_GOVERNANCE/PHASE_2_OPERATIONS_CONSOLIDATION_REPORT.md`.

---

## Repository Recovery — Fase 1 Governance Consolidation — 2026-07-26

### Status

`GOEDGEKEURD / GEMERGED`

Fase 1 is uitgevoerd via branch `codex/voer-fase-1-governance-consolidatie-uit` en via PR #194 gemerged naar `main`. De handmatige post-merge review heeft inhoudelijk akkoord gegeven.

Procesincident: PR #194 is gemerged vóór de vereiste expliciete review. Voor toekomstige recovery-PR's geldt daarom: geen merge zonder geslaagde CM CONTROL-review of expliciete Sophia-approval.

### Wijzigingen

- Recoverygovernance expliciet boven de V1.0-production-baseline geplaatst.
- Baseline-ADR behouden en gemarkeerd als `SUPERSEDED_FOR_RECOVERY`.
- Eén actieve `GOVERNANCE_RULES.md` vastgesteld; voormalige rootversie historisch behouden.
- Map Specifications inhoudelijk op root- en childniveau vergeleken en integraal naar Governance verplaatst.
- Governance-historystructuur met `BASELINES`, `AUDITS`, `RECOVERY_REPORTS`, `SPRINT_REPORTS` en `SUPERSEDED` ingericht.
- Historische documenten voorzien van status en actuele opvolger.
- Markdown-links en tekstuele padreferenties op de moves gecontroleerd en geremedieerd.

### Niet gewijzigd

Templates zijn volledig bevroren gebleven. Knowledge Base, Playbooks, Agents, Automations, Shared Services en business lanes zijn niet gemigreerd.

### Details

Zie `docs/00_GOVERNANCE/PHASE_1_GOVERNANCE_CONSOLIDATION_REPORT.md`.

---

## Repository Recovery — 2026-07-15

### Status

`IN REVIEW`

### Wijzigingen

- README aangepast aan de actuele CM-domeinstructuur.
- `docs/05_OPERATIONS/` ingericht als centrale operationele documentatielaag.
- Submappen toegevoegd voor Workflows, SOPs, Playbooks, Automations, Agents en Knowledge Base.
- AS_BUILT_DOCUMENTATION aangepast aan de actuele GitHub- en Drive-root.
- Repository Recovery Plan toegevoegd.
- Source of Truth, Governance Matrix, Change Impact Matrix, Repository Checklist en Repository Health toegevoegd.
- Operations Index toegevoegd.
- Architecture Decisions toegevoegd.
- Build freeze vastgelegd.
- Templates expliciet buiten deze recoveryfase gehouden.

### Breaking changes

- `05_KNOWLEDGE_BASE`, `06_PLAYBOOKS` en `07_AI_AGENTS` zijn niet langer de gewenste canonieke hoofdmappen.
- De gewenste canonieke locaties vallen onder `docs/05_OPERATIONS/`.
- Bestaande inhoud wordt pas na inventarisatie gecontroleerd gemigreerd; er is in deze release niets verwijderd.

### Open punten

- Bestaande content in oude locaties inventariseren.
- Governance-documenten verder gelijkzetten.
- Links en dubbele documenten auditen.
- Business lanes controleren.
- Template Recovery pas daarna starten.
