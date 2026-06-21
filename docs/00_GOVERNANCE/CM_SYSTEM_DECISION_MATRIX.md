# CM SYSTEM DECISION MATRIX

## 1. HOOFDREGEL

Binnen CM_OS geldt:

- GitHub = governance, playbooks, agent-definities, systeemdocumentatie
- Drive = opslag, assets, documenten, templates, bewijsstukken
- ClickUp = uitvoering, taken, planning, status
- Moneybird = financiële waarheid
- Gmail = correspondentie en bewijs van communicatie
- Make = automatisering en systeemkoppelingen
- Canva = design, decks, visuals, social assets
- Website CMS = publieke website
- ChatGPT / Claude = analyse, productie en ondersteuning; geen officiële opslag
- Approval Register = Google Sheet in Drive

## 2. SYSTEM OF RECORD MATRIX

| Onderwerp | Leidend systeem | Ondersteunend systeem | Eigenaar-agent | Bewijslocatie | Opmerking |
|---|---|---|---|---|---|
| Governance | GitHub | Drive | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | GitHub bevat de geldende governance-documentatie. |
| Agent-definities | GitHub | Drive | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | Agent-definities worden niet primair in chats opgeslagen. |
| Playbooks | GitHub | Drive | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | Drive kan exports of werkdocumenten bevatten. |
| SOP’s | GitHub | Drive | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | SOP-versiebeheer loopt via GitHub. |
| Prompts | GitHub | Drive | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | Productieprompts worden als systeemdocumentatie beheerd. |
| Templates | Drive | GitHub | CM VAULT AGENT | Drive template folders | GitHub documenteert de template-standaard. |
| Drive-structuur | GitHub | Drive | CM VAULT AGENT | GitHub repository + Drive | GitHub beschrijft de structuur; Drive bevat de uitvoering. |
| Taken | ClickUp | GitHub | CM OPS AGENT | ClickUp task record | ClickUp is leidend voor taakstatus en opvolging. |
| Planning | ClickUp | Drive | CM OPS AGENT | ClickUp planning views | Planning wordt in ClickUp bewaakt. |
| Projectstatus | ClickUp | GitHub | CM OPS AGENT | ClickUp project/status views | GitHub kan statusmethodiek documenteren. |
| Client management | ClickUp | Drive + Gmail | CM OPS AGENT | ClickUp + client folder in Drive | Communicatiebewijs blijft in Gmail. |
| Artist management | ClickUp | Drive + Gmail | CM OPS AGENT | ClickUp + artist folder in Drive | Artist assets en documenten staan in Drive. |
| Lead pipeline | ClickUp | Gmail + Drive | CM PROSPECT AGENT | ClickUp pipeline | Gmail bevat bewijs van outreach en replies. |
| Sponsorships | ClickUp | Drive + Gmail | CM PROSPECT AGENT | ClickUp deal/task + Drive | Contractuele stukken staan in Drive. |
| Partnerships | ClickUp | Drive + Gmail | CM PROSPECT AGENT | ClickUp deal/task + Drive | Besluiten met impact vereisen approval. |
| Brand deals | ClickUp | Drive + Gmail | CM PROSPECT AGENT | ClickUp deal/task + Drive | Contracten en assets staan in Drive. |
| Nieuwe zakelijke klanten | ClickUp | Drive + Gmail | CM PROSPECT AGENT | ClickUp pipeline + Drive client folder | Onboardingdocumentatie wordt in Drive opgeslagen. |
| Contracten | Drive | GitHub + Gmail | CM LEGAL AGENT | Drive contract folder | Getekende contracten staan in Drive. |
| NDA’s | Drive | Gmail | CM LEGAL AGENT | Drive legal folder | Gmail bevat verzend- en ontvangstbewijs. |
| Publishing | Drive | ClickUp + Moneybird | CM LEGAL AGENT | Drive rights/legal folder | Financiële verwerking loopt via Moneybird. |
| Licensing | Drive | ClickUp + Gmail | CM LEGAL AGENT | Drive licensing folder | Licentieafspraken vereisen bewijs in Drive. |
| Sync | Drive | ClickUp + Gmail | CM LEGAL AGENT | Drive sync/licensing folder | Outreachbewijs blijft in Gmail. |
| Catalog Acquisitions | Drive | ClickUp + Moneybird | CM LEGAL AGENT | Drive deal/data room folder | Deal execution wordt in ClickUp gevolgd. |
| Rechtenregister | Drive | GitHub | CM LEGAL AGENT | Drive rights register | GitHub kan de registerstandaard documenteren. |
| Facturen | Moneybird | Drive | CM MONEY AGENT | Moneybird invoice record | Moneybird is financiële waarheid. |
| Bonnen | Moneybird | Drive | CM MONEY AGENT | Moneybird attachment + Drive finance folder | Originele bewijsstukken kunnen in Drive staan. |
| Kwitanties | Moneybird | Drive | CM MONEY AGENT | Moneybird record | Drive dient als aanvullende opslag. |
| Banktransacties | Moneybird | Bankomgeving | CM MONEY AGENT | Moneybird transaction record | Bankomgeving is broninput; Moneybird is administratieve waarheid. |
| BTW | Moneybird | Drive | CM MONEY AGENT | Moneybird VAT records | Rapportages en aangiftebewijs kunnen in Drive staan. |
| Open posten | Moneybird | ClickUp | CM MONEY AGENT | Moneybird accounts receivable/payable | ClickUp kan opvolgtaken bevatten. |
| Cashflow | Moneybird | Drive | CM MONEY AGENT | Moneybird reports | Forecastdocumenten kunnen in Drive staan. |
| Revenue tracking | Moneybird | Drive + ClickUp | CM MONEY AGENT | Moneybird reports | Operationele opvolging loopt via ClickUp. |
| Forecasting | Moneybird | Drive | CM MONEY AGENT | Drive forecast file + Moneybird reports | Forecasts zijn analyses; financiële brondata blijft Moneybird. |
| Social content | Canva | Drive + ClickUp | CM SOCIAL AGENT | Canva design + Drive export folder | Publicatieplanning loopt via ClickUp. |
| Website content | Website CMS | GitHub + Drive | CM SOCIAL AGENT | Website CMS + Drive content folder | GitHub kan webgovernance documenteren. |
| SEO | Website CMS | GitHub + Drive | CM SOCIAL AGENT | Website CMS + SEO docs in Drive | SEO-richtlijnen kunnen in GitHub staan. |
| Nieuwsbrieven | Drive | Gmail + ClickUp | CM SOCIAL AGENT | Drive newsletter folder | Verzonden bewijs of campagnebewijs staat in Gmail of campagneomgeving. |
| Persberichten | Drive | Gmail + ClickUp | CM SOCIAL AGENT | Drive press folder | Media outreachbewijs blijft in Gmail. |
| Media outreach | Gmail | ClickUp + Drive | CM SOCIAL AGENT | Gmail thread | ClickUp bevat opvolging en status. |
| Approvals | Approval Register | Drive + ClickUp | CM CONTROL AGENT | Approval Register in Drive | Approval Register is leidend voor Level 4 en Sophia-besluiten. |
| Escalaties | ClickUp | GitHub + Gmail | CM CONTROL AGENT | ClickUp escalation task | Escalatieprotocollen staan in GitHub. |
| Automatiseringen | Make | GitHub | CM FLOW AGENT | Make scenario + GitHub docs | Make draait de automatisering; GitHub documenteert de governance. |
| Make scenario’s | Make | GitHub | CM FLOW AGENT | Make scenario + GitHub docs | Scenario-eigenaarschap ligt bij CM FLOW AGENT. |
| ClickUp automations | ClickUp | GitHub + Make | CM OPS AGENT | ClickUp automation settings | GitHub documenteert regels en afhankelijkheden. |
| GitHub workflows | GitHub | Make | CM VAULT AGENT + CM CONTROL AGENT | GitHub repository | Make kan koppelingen met workflows bevatten. |

## 3. BESLISREGELS

### Bij twijfel over uitvoering

ClickUp is leidend.

### Bij twijfel over opslag

Drive is leidend.

### Bij twijfel over governance

GitHub is leidend.

### Bij twijfel over geld

Moneybird is leidend.

### Bij twijfel over communicatie

Gmail is leidend.

### Bij twijfel over automatisering

Make + GitHub documentatie zijn leidend.

### Bij twijfel over approval

Approval Register in Drive is leidend.

## 4. CONFLICTREGELS

- Moneybird wint bij financiële status.
- GitHub wint bij governance.
- Drive wint bij documenten en assets.
- Gmail wint bij bewijs van verzonden/ontvangen communicatie.
- ClickUp wint bij taakstatus.
- Approval Register wint bij Sophia-besluiten.
- Bij conflict tussen systemen escaleert CM CONTROL AGENT.

## 5. APPROVAL REGISTER

Approval Register staat in:

`OS_CUSTOMMADE/00_ADMIN/05_APPROVALS/APPROVAL_REGISTER/CM_APPROVAL_REGISTER`

Approval Register wordt gebruikt voor:

- Level 4 approvals
- Sophia decisions
- externe communicatie
- publicaties
- contracten
- financiële toezeggingen
- governancewijzigingen
- documentverwijdering

## 6. AGENT EIGENAARSCHAP

- GitHub governance → CM VAULT AGENT + CM CONTROL AGENT
- Drive opslag → CM VAULT AGENT
- ClickUp uitvoering → CM OPS AGENT
- Moneybird → CM MONEY AGENT
- Gmail correspondentie → afhankelijk van agent
- Make → CM FLOW AGENT
- Canva / Website → CM SOCIAL AGENT
- Contracten / Rechten → CM LEGAL AGENT
- Leads / Partnerships → CM PROSPECT AGENT
- Approvals → CM CONTROL AGENT

## 7. VERWIJZINGEN

- [AGENT_RESPONSIBILITY_MATRIX](../07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md)
- [AGENT_HANDOFF_MATRIX](../07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md)
- [AI_AUTONOMY_LEVELS](../07_AI_AGENTS/AI_AUTONOMY_LEVELS.md)
- [AI_TASK_AUTONOMY_MATRIX](../07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md)
- [ESCALATION_PROTOCOLS](../07_AI_AGENTS/ESCALATION_PROTOCOLS.md)
- [00_CM_AGENTS_OVERVIEW](../07_AI_AGENTS/00_CM_AGENTS_OVERVIEW.md)
