# Operations Index

## Doel

Centrale navigatiekaart voor organisatiebrede operationele documentatie binnen CM.

## Structuur

| Categorie | Locatie | Functie |
|---|---|---|
| Workflows | `docs/05_OPERATIONS/WORKFLOWS/` | Volledige ketens van trigger tot output |
| SOPs | `docs/05_OPERATIONS/SOPS/` | Exacte werkwijze voor terugkerende taken |
| Playbooks | `docs/05_OPERATIONS/PLAYBOOKS/` | Beslisregels, scenario's en aanpakken |
| Automations | `docs/05_OPERATIONS/AUTOMATIONS/` | Technische uitvoering, triggers, logging en fallback |
| Agents | `docs/05_OPERATIONS/AGENTS/` | Rollen, scope, permissions, tools en escalation |
| Knowledge Base | `docs/05_OPERATIONS/KNOWLEDGE_BASE/` | Referentiekennis en vakinhoud |

## Relatie

```text
Agent
↓ gebruikt
Workflow
↓ voert taken uit volgens
SOP
↓ gebruikt bij uitzonderingen
Playbook
↓ raadpleegt
Knowledge Base
↓ wordt ondersteund door
Automation
```

## Registratie

Fase 2 heeft de operationele documenten gecontroleerd geconsolideerd. Nieuwe of verplaatste documenten worden alleen geregistreerd nadat de canonieke bestemming, eigenaar, duplicaatstatus en linkimpact zijn gecontroleerd. Zie `docs/00_GOVERNANCE/PHASE_2_OPERATIONS_CONSOLIDATION_REPORT.md`.
