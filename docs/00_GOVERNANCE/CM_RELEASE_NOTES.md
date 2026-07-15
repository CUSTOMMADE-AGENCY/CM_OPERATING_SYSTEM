# CM Release Notes

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
