# Agent Responsibility Matrix

## Doel

Deze matrix wijst per domein exact één eigenaar-agent aan. Ondersteunende agents mogen input leveren, maar nemen geen eigenaarschap over. Bij conflict of onduidelijkheid beslist **CM CONTROL AGENT**.

## Governance regels

- Eén domein heeft exact één eigenaar-agent.
- Eén taak heeft exact één eigenaar-agent.
- Geen dubbele eigenaarschap toestaan.
- GitHub is Source Of Truth voor governance, matrices, playbooks en CM_OS-documentatie.
- Drive is opslag.
- ClickUp is uitvoering.
- Moneybird is financiële waarheid.
- Gmail is correspondentie.
- ChatGPT/Claude is analyse en productie, niet de formele Source Of Truth.

## Responsibility matrix

| Domein | Eigenaar Agent | Ondersteunende Agenten | Approval Gate | Source Of Truth |
| --- | --- | --- | --- | --- |
| Governance | CM CONTROL AGENT | CM VAULT AGENT, CM FLOW AGENT | Sophia bij strategische/business-impact | GitHub |
| Projectmanagement | CM OPS AGENT | CM CONTROL AGENT, CM VAULT AGENT | CM CONTROL bij scope- of prioriteitswijziging | ClickUp |
| Artist Management | CM OPS AGENT | CM LEGAL AGENT, CM SOCIAL AGENT, CM MONEY AGENT | Sophia bij externe commitments | ClickUp |
| Client Management | CM OPS AGENT | CM PROSPECT AGENT, CM LEGAL AGENT, CM MONEY AGENT | CM CONTROL bij escalatie; Sophia bij commitments | ClickUp |
| Sponsorships | CM PROSPECT AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM OPS AGENT | Sophia bij commerciële toezegging | GitHub + Drive |
| Partnerships | CM PROSPECT AGENT | CM LEGAL AGENT, CM OPS AGENT, CM SOCIAL AGENT | Sophia bij commerciële toezegging | GitHub + Drive |
| Brand Deals | CM PROSPECT AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM OPS AGENT | Sophia bij dealcommitment | GitHub + Drive |
| Contracten | CM LEGAL AGENT | CM MONEY AGENT, CM OPS AGENT | Sophia bij ondertekening of wijziging | GitHub + Drive |
| NDA's | CM LEGAL AGENT | CM PROSPECT AGENT, CM OPS AGENT | Sophia bij afwijkende voorwaarden | GitHub + Drive |
| Publishing | CM LEGAL AGENT | CM MONEY AGENT, CM VAULT AGENT | Sophia bij rechtencommitment | GitHub + Drive |
| Licensing | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT | Sophia bij licentiecommitment | GitHub + Drive |
| Sync | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM SOCIAL AGENT | Sophia bij syncdeal of rechtenclaim | GitHub + Drive |
| Catalog Acquisitions | CM LEGAL AGENT | CM MONEY AGENT, CM CONTROL AGENT | Sophia altijd bij acquisitiecommitment | GitHub + Drive |
| Moneybird | CM MONEY AGENT | CM OPS AGENT, CM FLOW AGENT | Sophia bij financiële commitments | Moneybird |
| Facturen | CM MONEY AGENT | CM OPS AGENT, CM LEGAL AGENT | Sophia bij afwijkende betalingsafspraken | Moneybird |
| BTW | CM MONEY AGENT | CM CONTROL AGENT | Sophia bij materiële fiscale risico’s | Moneybird |
| Cashflow | CM MONEY AGENT | CM CONTROL AGENT | Sophia bij cashflowbeslissingen | Moneybird |
| Open Posten | CM MONEY AGENT | CM OPS AGENT, CM PROSPECT AGENT | Sophia bij betalingsregeling of dispuut | Moneybird |
| Forecasting | CM MONEY AGENT | CM PROSPECT AGENT, CM CONTROL AGENT | CM CONTROL bij prioriteitsimpact; Sophia bij commitment | Moneybird + GitHub |
| Website | CM SOCIAL AGENT | CM FLOW AGENT, CM VAULT AGENT, CM CONTROL AGENT | Menselijke approval vóór publicatie | GitHub + Website/CMS |
| SEO | CM SOCIAL AGENT | CM FLOW AGENT, CM VAULT AGENT | CM CONTROL bij strategische wijziging | GitHub + Website/CMS |
| Social Media | CM SOCIAL AGENT | CM OPS AGENT, CM LEGAL AGENT, CM PROSPECT AGENT | Menselijke approval vóór publicatie | GitHub + social kanalen |
| Nieuwsbrief | CM SOCIAL AGENT | CM OPS AGENT, CM LEGAL AGENT, CM PROSPECT AGENT | Menselijke approval vóór verzending | GitHub + mailingtool/Gmail |
| Persberichten | CM SOCIAL AGENT | CM LEGAL AGENT, CM CONTROL AGENT | Sophia bij reputatie- of juridische impact | GitHub + Drive |
| Media Outreach | CM SOCIAL AGENT | CM PROSPECT AGENT, CM LEGAL AGENT | Sophia bij gevoelige externe communicatie | Gmail + GitHub |
| Templates | CM VAULT AGENT | CM CONTROL AGENT, CM LEGAL AGENT, CM SOCIAL AGENT | CM CONTROL bij governance-impact | GitHub + Drive |
| SOP's | CM VAULT AGENT | CM CONTROL AGENT, CM OPS AGENT | CM CONTROL bij proceswijziging | GitHub |
| Prompts | CM VAULT AGENT | Alle agents als inputleverancier | CM CONTROL bij governance-impact | GitHub |
| Playbooks | CM VAULT AGENT | CM CONTROL AGENT, betreffende eigenaar-agent | CM CONTROL en Sophia bij architectuurwijziging | GitHub |
| Knowledge Base | CM VAULT AGENT | Alle agents als inputleverancier | CM CONTROL bij bronstructuurwijziging | GitHub + Drive |
| Automatisering | CM FLOW AGENT | CM CONTROL AGENT, CM OPS AGENT, CM VAULT AGENT | CM CONTROL bij data-/systeemimpact | GitHub |
| Make | CM FLOW AGENT | CM OPS AGENT, CM MONEY AGENT, CM VAULT AGENT | CM CONTROL bij scenario met datamutatie | Make + GitHub |
| ClickUp Automations | CM FLOW AGENT | CM OPS AGENT, CM CONTROL AGENT | CM CONTROL bij status-/routingimpact | ClickUp + GitHub |
| GitHub Workflows | CM FLOW AGENT | CM CONTROL AGENT, CM VAULT AGENT | CM CONTROL bij repository- of release-impact | GitHub |
