# CM Repository Recovery Plan

## Doel

De repository terugbrengen naar één consistente, uitvoerbare en vindbare Source of Truth voor het CM Operating System.

## Status

- Status: `ACTIEF`
- Build freeze: `ACTIEF` (template-onderdeel vrijgegeven — zie Build freeze)
- Template Recovery (Sprint 6): `VRIJGEGEVEN` op autorisatie van de accounteigenaar (2026-07-26)
- Fase 1-uitvoeringsbranch: `codex/voer-fase-1-governance-consolidatie-uit`
- Fase 2-branch: `codex/phase-2-operations-consolidation`
- Fase 2-status: `UITGEVOERD / IN REVIEW`
- Fase 1-status: `GOEDGEKEURD / GEMERGED` via PR #194 naar `main`; de handmatige post-merge review heeft inhoudelijk akkoord gegeven
- Owner: Sophia / CM CONTROL

## Governancevoorrang

Tijdens de actieve recovery heeft dit Recovery Plan voorrang op de V1.0-production-baseline. De baseline-ADR blijft behouden met status `SUPERSEDED_FOR_RECOVERY`. Na afsluiting van recovery vereist herstel of vervanging van de baseline een expliciet besluit.

## Scope

1. Governance-documenten onderling gelijkzetten.
2. GitHub structureren volgens de actuele CM-domeinen.
3. Workflows, SOPs, Playbooks, Automations, Agents en Knowledge Base centraliseren onder `docs/05_OPERATIONS/`.
4. Business lanes controleren op duplicaten, verkeerde locaties en ontbrekende documentatie.
5. Templates worden in Sprint 6 (Template Recovery) beoordeeld, aangevuld en aan de Drive-structuur gekoppeld. Sprint 6 is vrijgegeven op autorisatie van de accounteigenaar.

## Vastgestelde structuur

```text
docs/
├── 00_GOVERNANCE
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
│   ├── WORKFLOWS
│   ├── SOPS
│   ├── PLAYBOOKS
│   ├── AUTOMATIONS
│   ├── AGENTS
│   └── KNOWLEDGE_BASE
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
└── 09_CONTENT
```

## Sprints

| Sprint | Onderwerp | Status |
|---|---|---|
| 1 | Governance Foundation | ACTIEF |
| 2 | Repository Governance Layer | ACTIEF |
| 3 | Operations Consolidatie | UITGEVOERD / IN REVIEW |
| 4 | Business Lanes Audit | OPEN |
| 5 | Drive-validatie | OPEN |
| 6 | Template Recovery | VRIJGEGEVEN |

## Build freeze

Tijdens de recovery:

- **template-freeze opgeheven** (Sprint 6 vrijgegeven op autorisatie van de accounteigenaar, 2026-07-26): templates mogen worden aangemaakt, aangevuld en aan de Drive-structuur gekoppeld volgens `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/TEMPLATE_PLACEMENT_MAP.md`;
- geen nieuwe Agents;
- geen nieuwe Automations;
- geen nieuwe operationele structuren buiten dit plan;
- geen verwijderingen zonder expliciete goedkeuring;
- geen merge naar `main` zonder geslaagde CM CONTROL-review of expliciete Sophia-approval.

Procesincident Fase 1: PR #194 is gemerged vóór de vereiste expliciete review. Dit is achteraf inhoudelijk akkoord bevonden in de handmatige post-merge review en verandert de aangescherpte mergeregel niet.

## Oplevercriteria

De recovery is klaar wanneer:

1. README, AS_BUILT, DRIVE_STRUCTURE en Governance elkaar niet tegenspreken.
2. Alle operationele documenttypen één canonieke locatie hebben.
3. Oude hoofdmappen zijn geïnventariseerd en gecontroleerd gemigreerd.
4. Alle interne documentatie professioneel Nederlands gebruikt.
5. Alle links en verwijzingen kloppen.
6. De Repository Checklist volledig is afgevinkt.
7. Sophia de herstel-PR expliciet heeft goedgekeurd.

## Changelog

- 2026-07-15: recoverybranch aangemaakt.
- 2026-07-15: README aangepast aan actuele domeinstructuur.
- 2026-07-15: `docs/05_OPERATIONS/` en zes operationele categorieën aangemaakt.
- 2026-07-15: AS_BUILT aangepast.
- 2026-07-15: templates buiten scope geplaatst tot Sprint 6.
- 2026-07-26: Fase 1 via branch `codex/voer-fase-1-governance-consolidatie-uit` en PR #194 gemerged naar `main`; handmatige post-merge review inhoudelijk akkoord, met het te vroege mergen als procesincident geregistreerd.

- 2026-07-26: Fase 2 Operations Consolidation uitgevoerd op reviewbranch; niet gemerged.
- 2026-07-26: Template Placement Map toegevoegd (PR #204) als voorbereidend Sprint 6-materiaal.
- 2026-07-26: template build-freeze opgeheven en Sprint 6 (Template Recovery) vrijgegeven op expliciete autorisatie van de accounteigenaar; gap-templates aangemaakt en Drive-uitrol gestart.
