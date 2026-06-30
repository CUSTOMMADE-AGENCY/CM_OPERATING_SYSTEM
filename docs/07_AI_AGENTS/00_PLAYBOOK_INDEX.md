# CM AI Agent Playbook Index

## Doel

Deze index is het centrale register voor alle Sophia-approved playbooks van de actieve CM Agent Architecture V1.4 agentlaag. Het document maakt per playbook zichtbaar welke agent eigenaar is, waar het playbook staat, wat de status is en welke workflows eraan gekoppeld zijn.

## Registerregels

- GitHub is Source Of Truth voor playbooks, versies, status en changelog.
- CM VAULT AGENT beheert de index en bewaakt vindbaarheid.
- CM CONTROL AGENT bewaakt governance, prioriteit en architectuurwijzigingen.
- De eigenaar-agent is inhoudelijk verantwoordelijk voor het eigen playbook.
- Playbookwijzigingen met governance-impact vereisen CM CONTROL review en eventueel Sophia approval.
- Er worden geen playbooks toegevoegd buiten de acht actieve agents zonder expliciete governancebeslissing.

## Centraal playbook register

| Playbook Naam | Agent | Locatie | Status | Versie | Laatste Update | Eigenaar | Gekoppelde Workflows |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `CM_CONTROL_PLAYBOOK.md` | CM CONTROL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_CONTROL_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM CONTROL AGENT | Governance review, prioritering, escalatie, agent routing, approval gate management. |
| `CM_OPS_PLAYBOOK.md` | CM OPS AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_OPS_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM OPS AGENT | Projectmanagement, artist/client delivery, planning, ClickUp uitvoering, Gmail templates. |
| `CM_PROSPECT_PLAYBOOK.md` | CM PROSPECT AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_PROSPECT_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM PROSPECT AGENT | Leadgeneratie, outreach, partnerships, sponsorships, proposals, renewals, upsells. |
| `CM_LEGAL_PLAYBOOK.md` | CM LEGAL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_LEGAL_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM LEGAL AGENT | Contractreview, NDA review, deal review, publishing, licensing, sync, rechtencontrole. |
| `CM_SOCIAL_PLAYBOOK.md` | CM SOCIAL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_SOCIAL_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM SOCIAL AGENT | Contentproductie, social media, websitecopy, SEO, nieuwsbrief, persberichten, media outreach. |
| `CM_MONEY_PLAYBOOK.md` | CM MONEY AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM MONEY AGENT | Moneybird, facturatie, BTW, cashflow, open posten, forecasting, revenue share, commission tracking. |
| `CM_VAULT_PLAYBOOK.md` | CM VAULT AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_VAULT_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM VAULT AGENT | Templates, SOP’s, prompts, playbooks, Knowledge Base, Drive ordening, bronbeheer. |
| `CM_FLOW_PLAYBOOK.md` | CM FLOW AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md` | Sophia-approved | V1.4 | 2026-06-21 | CM FLOW AGENT | Make, ClickUp Automations, GitHub Workflows, API’s, webhooks, monitoring, integraties. |

## Bestaande playbook samenvatting

| Agentnaam | Doel | Eigenaar | Locatie | Status |
| --- | --- | --- | --- | --- |
| CM CONTROL AGENT | Sturing, prioriteit, routing, kwaliteitscontrole en escalatie binnen de agentlaag. | CM CONTROL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_CONTROL_PLAYBOOK.md` | Sophia-approved |
| CM OPS AGENT | Operationele uitvoering, projectmanagement, planning en deliverables. | CM OPS AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_OPS_PLAYBOOK.md` | Sophia-approved |
| CM PROSPECT AGENT | Leads, outreach, partnerships, sales, proposals, pipeline, renewals en upsells. | CM PROSPECT AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_PROSPECT_PLAYBOOK.md` | Sophia-approved |
| CM LEGAL AGENT | Contracten, publishing, licensing, sync, management agreements, compliance, deal reviews, `04_DEALS` en `07_LEGAL`. | CM LEGAL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_LEGAL_PLAYBOOK.md` | Sophia-approved |
| CM SOCIAL AGENT | Content, socials, thought leadership, case studies, personal branding, website content, SEO en organische zichtbaarheid. | CM SOCIAL AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_SOCIAL_PLAYBOOK.md` | Sophia-approved |
| CM MONEY AGENT | `06_FINANCE`, Moneybird, BTW, Open Posten, Cashflow, facturatie-opvolging, betaalstatussen en financiële controles. | CM MONEY AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md` | Sophia-approved |
| CM VAULT AGENT | Drive, templates, SOP’s, prompts, playbooks, Knowledge Base, governance, assets en bronstructuur. | CM VAULT AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_VAULT_PLAYBOOK.md` | Sophia-approved |
| CM FLOW AGENT | Make, API’s, webhooks, ClickUp automations, GitHub workflows, repository automatisering, document synchronisatie en monitoring. | CM FLOW AGENT | `docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md` | Sophia-approved |

## Playbook lifecycle

| Stap | Eigenaar | Actie | Approval Gate |
| --- | --- | --- | --- |
| Signaal | Betreffende eigenaar-agent | Signaleert dat playbookupdate nodig is. | Geen, tenzij direct governance-impact. |
| Draft | CM VAULT AGENT + eigenaar-agent | Verwerkt wijziging in Markdown en bewaakt structuur. | CM CONTROL bij proces- of governancewijziging. |
| Review | CM CONTROL AGENT | Controleert consistentie met CM_OS governance en agentarchitectuur. | Sophia bij strategische impact. |
| Publicatie | CM VAULT AGENT | Werkt GitHub Source Of Truth bij. | Menselijke goedkeuring bij definitieve publicatie. |
| Uitvoering | Eigenaar-agent | Past playbook toe in dagelijkse workflow. | Volgens betreffende playbook en approval gates. |

## Gekoppelde governance documenten

- `docs/07_AI_AGENTS/00_CM_AGENTS_OVERVIEW.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
- `docs/07_AI_AGENTS/CM_AGENT_GOVERNANCE.md`
- `docs/07_AI_AGENTS/OWNERSHIP_RULES.md`
- `docs/07_AI_AGENTS/AGENT_CERTIFICATION_STANDARD.md`
- `docs/07_AI_AGENTS/AGENT_LIFECYCLE.md`
