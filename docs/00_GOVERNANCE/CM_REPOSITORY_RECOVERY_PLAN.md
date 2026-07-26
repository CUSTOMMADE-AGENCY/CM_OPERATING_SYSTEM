# CM Repository Recovery Plan

## Doel

De repository terugbrengen naar één consistente, uitvoerbare en vindbare Source of Truth voor het CM Operating System.

## Status

- Status: `ACTIEF`
- Build freeze: `ACTIEF`
- Fase 1-uitvoeringsbranch: `codex/voer-fase-1-governance-consolidatie-uit`
- Fase 1-status: `GOEDGEKEURD / GEMERGED`
- Fase 1-merge: PR #194 is gemerged naar `main`
- Fase 1-post-merge review: handmatig inhoudelijk akkoord
- Fase 1-procesincident: PR #194 is gemerged vóór de vereiste expliciete review
- Owner: Sophia / CM CONTROL

## Governancevoorrang

Tijdens de actieve recovery heeft dit Recovery Plan voorrang op de V1.0-production-baseline. De baseline-ADR blijft behouden met status `SUPERSEDED_FOR_RECOVERY`. Na afsluiting van recovery vereist herstel of vervanging van de baseline een expliciet besluit.

## Scope

1. Governance-documenten onderling gelijkzetten.
2. GitHub structureren volgens de actuele CM-domeinen.
3. Workflows, SOPs, Playbooks, Automations, Agents en Knowledge Base centraliseren onder `docs/05_OPERATIONS/`.
4. Business lanes controleren op duplicaten, verkeerde locaties en ontbrekende documentatie.
5. Templates pas na afronding van de recovery beoordelen.

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
| 3 | Operations Consolidatie | OPEN |
| 4 | Business Lanes Audit | OPEN |
| 5 | Drive-validatie | OPEN |
| 6 | Template Recovery | GEBLOKKEERD |

## Build freeze

Tijdens de recovery:

- geen nieuwe templates;
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
