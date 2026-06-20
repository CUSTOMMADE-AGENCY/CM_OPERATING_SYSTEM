# CM Agent Migration Notes V1.4

## Doel

Deze migratienotities leggen vast hoe oude of verkeerde CM-agentnamen zijn gemapt naar de definitieve CM Agent Register V1.4 agentstructuur.

## Definitieve agents

Alleen onderstaande acht agents zijn leidend:

1. CM CONTROL AGENT
2. CM OPS AGENT
3. CM MONEY AGENT
4. CM PROSPECT AGENT
5. CM SOCIAL AGENT
6. CM LEGAL AGENT
7. CM VAULT AGENT
8. CM FLOW AGENT

## Agentbestandencontrole

De bestaande agentbestanden in `docs/07_AI_AGENTS` zijn gecontroleerd. De oude agentdocumenten zijn niet verwijderd, maar verplaatst naar `docs/07_AI_AGENTS/99_LEGACY_AGENTS/`.

| Oud agentbestand | Oude agentnaam | Nieuwe leidende agent | Migratiereden |
| --- | --- | --- | --- |
| `CM_ADMIN_ASSISTANT.md` | CM Admin Assistant | CM OPS AGENT | Operationele administratie, task lists en meeting summaries vallen onder operations delivery. |
| `CM_ARTIST_MANAGER.md` | CM Artist Manager | CM OPS AGENT | Artist management, deliverables, meetings en KPI-bewaking vallen onder OPS. |
| `CM_BRAND_PARTNERSHIP_HUNTER.md` | CM Brand Partnership Hunter | CM PROSPECT AGENT | Brand partnerships zijn prospecting, sales en partnership pipeline. |
| `CM_BUYER_HUNTER.md` | CM Buyer Hunter | CM PROSPECT AGENT | Buyer research en outreach horen bij business development en pipeline management. |
| `CM_CLIENT_ONBOARDING_AGENT.md` | CM Client Onboarding Agent | CM OPS AGENT | Nieuwe client-, artist- en projectuitvoering valt onder OPS. |
| `CM_DEAL_HUNTER.md` | CM Deal Hunter | CM LEGAL AGENT | Dealtypes, deal reviews en `04_DEALS` vallen onder LEGAL. Er wordt geen aparte CM DEALS AGENT aangemaakt. |
| `CM_KNOWLEDGE_MANAGER.md` | CM Knowledge Manager | CM VAULT AGENT | Knowledge Base, governance, SOP’s, playbooks en bronstructuur vallen onder VAULT. |
| `CM_NETWORK_HUNTER.md` | CM Network Hunter | CM PROSPECT AGENT | Netwerkrelaties, introducers en opportunity mapping ondersteunen prospecting en sales. |
| `CM_OPERATIONS_MANAGER.md` | CM Operations Manager | CM OPS AGENT | Operations management is geconsolideerd in OPS. |
| `CM_PROJECT_MANAGER.md` | CM Project Manager | CM OPS AGENT | Projectmanagement, deadlines en dependency tracking vallen onder OPS. |
| `AGENTS/CM_MONEY_AGENT.md` | CM Money Agent | CM MONEY AGENT | Nieuwe V1.4-agent voor `06_FINANCE`, Moneybird, BTW, Open Posten en Cashflow. |
| `CM_RELEASE_MANAGER.md` | CM Release Manager | CM OPS AGENT | Releasecampagnes, planning en campaign status vallen onder operationele delivery. |
| `CM_RIGHTS_AUDITOR.md` | CM Rights Auditor | CM LEGAL AGENT | Rechten, publishing, licensing, compliance en due diligence vallen onder LEGAL. |
| `CM_SYNC_HUNTER.md` | CM Sync Hunter | CM LEGAL AGENT | Sync, clearance, licensing en rechtenrisico’s vallen onder LEGAL. |

## Actieve documentatie

- `CM_AGENT_REGISTER.md` is de officiële bron van waarheid voor agentnamen, eigenaarschap en routing.
- `CM_AGENT_GOVERNANCE.md` verwijst alleen naar de definitieve V1.4 agents.
- Legacy agentdocumenten blijven beschikbaar voor historische context in `99_LEGACY_AGENTS/`, maar zijn niet leidend.
