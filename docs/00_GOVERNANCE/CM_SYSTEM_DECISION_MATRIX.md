# CM SYSTEM DECISION MATRIX

> Versie: v1.1 · Status: Operationeel · Datum: 2026-07-01
> Pad: `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`
> Eigenaar: CM CONTROL AGENT · Goedkeuring: Sophia

**Governance-prioriteit:** Bij conflict met `DECISION_LOG.md`, `CM_OS_LOCKED_DECISIONS` of `AS_BUILT_DOCUMENTATION.md` zijn die documenten leidend.

-----

## 1. HOOFDREGEL

Binnen CM_OS heeft ieder systeem één primaire rol en iedere rij in de System of Record Matrix heeft exact één Owner Agent. Support Agents mogen ondersteunen, maar worden nooit mede-eigenaar.

| Systeem | Primaire rol |
|---|---|
| GitHub | Governance, playbooks, agent-definities, systeemdocumentatie, template-governance en template-standaarden |
| Drive | Opslag, assets, documenten, operationele templatekopieën, werkbestanden, exports en bewijsstukken |
| ClickUp | Uitvoering, taken, planning en status |
| Moneybird | Financiële waarheid |
| Gmail | Correspondentie en bewijs van communicatie |
| Make | Automatisering en systeemkoppelingen |
| Canva | Design, decks, visuals en social assets |
| Website CMS | Publieke website |
| ChatGPT / Claude | Analyse, productie en ondersteuning; geen officiële opslag |
| APPROVAL_LOG | Governance-specificatie in GitHub; operationele approval audit trail als Google Sheet in Drive |

-----

## 2. SYSTEM OF RECORD MATRIX

| Onderwerp | Leidend systeem | Ondersteunend systeem | Owner Agent | Support Agents | Bewijslocatie | Opmerking |
|---|---|---|---|---|---|---|
| Governance | GitHub | Drive | CM CONTROL AGENT | CM VAULT AGENT | GitHub repository | GitHub bevat de geldende governance-documentatie; CM CONTROL AGENT is eigenaar van governance. CM VAULT AGENT ondersteunt repositorystructuur, source hygiene en documentatiebeheer. |
| Agent-definities | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository | Agent-definities worden in GitHub beheerd; Drive bevat hoogstens werkkopieën of exports. |
| Playbooks | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository | Playbooks zijn systeemdocumentatie; governance review loopt via CM CONTROL AGENT waar nodig. |
| SOP’s | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository | SOP-versiebeheer loopt via GitHub; Drive bevat operationele kopieën of werkdocumenten. |
| Prompts | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository | Productieprompts worden als systeemdocumentatie beheerd. |
| Templates | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository + Drive template folders | GitHub is leidend voor template-governance en template-standaarden; Drive bevat alleen operationele kopieën, werkbestanden of exports. |
| Drive-structuur | GitHub | Drive | CM VAULT AGENT | CM CONTROL AGENT | GitHub repository + Drive | GitHub beschrijft de bestaande Drive-structuur; Drive bevat de uitvoering. |
| Taken | ClickUp | GitHub | CM OPS AGENT |  | ClickUp task record | ClickUp is leidend voor taakstatus en opvolging. |
| Planning | ClickUp | Drive | CM OPS AGENT |  | ClickUp planning views | Planning wordt in ClickUp bewaakt. |
| Projectstatus | ClickUp | GitHub | CM OPS AGENT |  | ClickUp project/status views | GitHub kan statusmethodiek documenteren. |
| Client management | ClickUp | Drive, Gmail | CM OPS AGENT |  | ClickUp + client folder in Drive | Communicatiebewijs blijft in Gmail. |
| Artist management | ClickUp | Drive, Gmail | CM OPS AGENT |  | ClickUp + artist folder in Drive | Artist assets en documenten staan in Drive. |
| Lead pipeline | ClickUp | Gmail, Drive | CM PROSPECT AGENT |  | ClickUp pipeline | Gmail bevat bewijs van outreach en replies. |
| Sponsorships | ClickUp | Drive, Gmail | CM PROSPECT AGENT | CM LEGAL AGENT | ClickUp deal/task + Drive | Contractuele stukken staan in Drive; juridische review loopt via CM LEGAL AGENT waar nodig. |
| Partnerships | ClickUp | Drive, Gmail | CM PROSPECT AGENT | CM LEGAL AGENT | ClickUp deal/task + Drive | Besluiten met impact vereisen approval; juridische review loopt via CM LEGAL AGENT waar nodig. |
| Brand deals | ClickUp | Drive, Gmail | CM PROSPECT AGENT | CM LEGAL AGENT | ClickUp deal/task + Drive | Dealstatus staat in ClickUp; contractuele vastlegging wordt door CM LEGAL AGENT ondersteund. |
| Nieuwe zakelijke klanten | ClickUp | Drive, Gmail | CM PROSPECT AGENT | CM OPS AGENT | ClickUp pipeline + Drive client folder | Onboardingdocumentatie wordt in Drive opgeslagen; operationele overdracht loopt via CM OPS AGENT. |
| Contracten | Drive | GitHub, Gmail | CM LEGAL AGENT |  | Drive contract folder | Getekende contracten staan in Drive. |
| NDA’s | Drive | Gmail | CM LEGAL AGENT |  | Drive legal folder | Gmail bevat verzend- en ontvangstbewijs. |
| Publishing | Drive | ClickUp, Moneybird | CM LEGAL AGENT | CM MONEY AGENT | Drive rights/legal folder | Financiële verwerking loopt via Moneybird. |
| Licensing | Drive | ClickUp, Gmail | CM LEGAL AGENT |  | Drive licensing folder | Licentieafspraken vereisen bewijs in Drive. |
| Sync | Drive | ClickUp, Gmail | CM LEGAL AGENT |  | Drive sync/licensing folder | Outreachbewijs blijft in Gmail. |
| Catalog Acquisitions | Drive | ClickUp, Moneybird | CM LEGAL AGENT | CM MONEY AGENT | Drive deal/data room folder | Deal execution wordt in ClickUp gevolgd; financiële verwerking loopt via Moneybird. |
| Rechtenregister | Drive | GitHub | CM LEGAL AGENT | CM VAULT AGENT | Drive rights register | GitHub kan de registerstandaard documenteren. |
| Facturen | Moneybird | Drive | CM MONEY AGENT |  | Moneybird invoice record | Moneybird is financiële waarheid. |
| Bonnen | Moneybird | Drive | CM MONEY AGENT |  | Moneybird attachment + Drive finance folder | Originele bewijsstukken kunnen in Drive staan. |
| Kwitanties | Moneybird | Drive | CM MONEY AGENT |  | Moneybird record | Drive dient als aanvullende opslag. |
| Banktransacties | Moneybird | Bankomgeving | CM MONEY AGENT |  | Moneybird transaction record | Bankomgeving is broninput; Moneybird is administratieve waarheid. |
| BTW | Moneybird | Drive | CM MONEY AGENT |  | Moneybird VAT records | Rapportages en aangiftebewijs kunnen in Drive staan. |
| Open posten | Moneybird | ClickUp | CM MONEY AGENT | CM OPS AGENT | Moneybird accounts receivable/payable | ClickUp kan opvolgtaken bevatten. |
| Cashflow | Moneybird | Drive | CM MONEY AGENT |  | Moneybird reports | Forecastdocumenten kunnen in Drive staan. |
| Revenue tracking | Moneybird | Drive, ClickUp | CM MONEY AGENT | CM OPS AGENT | Moneybird reports | Operationele opvolging loopt via ClickUp. |
| Forecasting | Moneybird | Drive | CM MONEY AGENT |  | Drive forecast file + Moneybird reports | Forecasts zijn analyses; financiële brondata blijft Moneybird. |
| Social content | Canva | Drive, ClickUp | CM SOCIAL AGENT |  | Canva design + Drive export folder | Publicatieplanning loopt via ClickUp. |
| Website content | Website CMS | GitHub, Drive | CM SOCIAL AGENT | CM VAULT AGENT | Website CMS + Drive content folder | GitHub kan webgovernance documenteren. |
| SEO | Website CMS | GitHub, Drive | CM SOCIAL AGENT |  | Website CMS + SEO docs in Drive | SEO-richtlijnen kunnen in GitHub staan. |
| Nieuwsbrieven | Drive | Gmail, ClickUp | CM SOCIAL AGENT |  | Drive newsletter folder | Verzonden bewijs of campagnebewijs staat in Gmail of campagneomgeving. |
| Persberichten | Drive | Gmail, ClickUp | CM SOCIAL AGENT |  | Drive press folder | Media outreachbewijs blijft in Gmail. |
| Media outreach | Gmail | ClickUp, Drive | CM SOCIAL AGENT |  | Gmail thread | ClickUp bevat opvolging en status. |
| Approvals | APPROVAL_LOG | Drive, ClickUp | CM CONTROL AGENT | CM FLOW AGENT | `docs/00_GOVERNANCE/APPROVAL_LOG.md` + `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` | `APPROVAL_LOG.md` is de governance-specificatie; CM_APPROVAL_REGISTER in Drive is de enige operationele approval audit trail. Er wordt geen tweede approval-register gebruikt. |
| Escalaties | ClickUp | GitHub, Gmail | CM CONTROL AGENT |  | ClickUp escalation task | Escalatieprotocollen staan in GitHub. |
| Automatiseringen | Make | GitHub | CM FLOW AGENT | CM VAULT AGENT | Make scenario + GitHub docs | Make draait de automatisering; GitHub documenteert de governance. |
| Make scenario’s | Make | GitHub | CM FLOW AGENT | CM VAULT AGENT | Make scenario + GitHub docs | Scenario-eigenaarschap ligt bij CM FLOW AGENT. |
| ClickUp automations | ClickUp | GitHub, Make | CM FLOW AGENT | CM OPS AGENT | ClickUp automation settings + GitHub docs | Automationlogica wordt gedocumenteerd in GitHub. |
| GitHub workflows | GitHub | Make | CM FLOW AGENT | CM VAULT AGENT, CM CONTROL AGENT | GitHub repository | CM FLOW AGENT is eigenaar van workflowlogica; CM VAULT AGENT ondersteunt repositorystructuur en CM CONTROL AGENT ondersteunt governance review. |

-----

## 3. BESLISREGELS

- Bij twijfel over uitvoering is ClickUp leidend.
- Bij twijfel over opslag is Drive leidend, behalve wanneer GitHub expliciet de governance- of standaardenbron is.
- Bij twijfel over governance is GitHub leidend.
- Bij twijfel over template-governance of template-standaarden is GitHub leidend.
- Bij twijfel over operationele templatekopieën, werkbestanden of exports is Drive leidend.
- Bij twijfel over geld is Moneybird leidend.
- Bij twijfel over communicatie is Gmail leidend.
- Bij twijfel over automatisering zijn Make en GitHub-documentatie samen leidend: Make voor actieve uitvoering, GitHub voor governance en versiehistorie.
- Bij twijfel over approvals geldt één waarheid: `docs/00_GOVERNANCE/APPROVAL_LOG.md` definieert de governance-specificatie en `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` is de enige operationele approval audit trail.
- Een Support Agent mag adviseren, valideren of uitvoeren, maar overschrijft nooit de Owner Agent.

-----

## 4. CONFLICTREGELS

| Conflict | Leidende bron | Regel |
|---|---|---|
| Locked decisions, besluitlog of as-built documentatie | `DECISION_LOG.md`, `CM_OS_LOCKED_DECISIONS`, `AS_BUILT_DOCUMENTATION.md` | Deze documenten zijn leidend boven deze matrix. |
| Financiële status | Moneybird | Factuurstatus, open posten, BTW en banktransacties worden bepaald door Moneybird. |
| Governance | GitHub | GitHub bevat de definitieve systeemdocumentatie. |
| Template-governance en template-standaarden | GitHub | GitHub documenteert de geldende template-governance en template-standaarden. |
| Operationele templatekopieën, werkbestanden en exports | Drive | Drive bevat alleen operationele kopieën, werkbestanden en exports. |
| Documenten en assets | Drive | Drive is de primaire opslaglocatie voor documenten, assets en bewijsstukken. |
| Bewijs van communicatie | Gmail | Gmail is de originele verzend- en ontvangstbron. |
| Taakstatus | ClickUp | ClickUp is de operationele uitvoeringsbron. |
| Sophia-besluiten en Level 4 approvals | APPROVAL_LOG | De governance-specificatie staat in `docs/00_GOVERNANCE/APPROVAL_LOG.md`; de operationele audit trail staat in Drive op `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`. |
| Automatiseringsuitvoering | Make | Make is leidend voor actieve scenario-uitvoering. |
| Automatiseringsgovernance | GitHub | GitHub is leidend voor documentatie, versiehistorie en governance van automatisering. |

Bij conflict tussen systemen escaleert CM CONTROL AGENT naar Sophia. Geen agent lost een systeemconflict zelfstandig op wanneer de leidende bron niet eenduidig kan worden vastgesteld.

-----

## 5. APPROVAL LOG

Er is één waarheid voor approvals binnen CM_OS:

- `docs/00_GOVERNANCE/APPROVAL_LOG.md` is de governance-specificatie voor approvalregels, structuur, statussen en rapportage.
- `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` is de enige operationele approval audit trail in Google Drive.

De operationele audit trail wordt gebruikt voor:

- Level 4 approvals
- Sophia decisions
- externe communicatie
- publicaties
- contracten
- financiële toezeggingen
- governancewijzigingen
- documentverwijdering

Een Level 4 actie zonder bijbehorende rij in de operationele approval audit trail is niet geldig, ongeacht of Sophia mondeling of via een ander kanaal goedkeuring heeft gegeven. Registratie is onderdeel van de goedkeuring.

-----

## 6. AGENT EIGENAARSCHAP

| Systeem / Domein | Owner Agent | Support Agents | Toelichting |
|---|---|---|---|
| GitHub governance | CM CONTROL AGENT | CM VAULT AGENT | CM CONTROL AGENT is eigenaar van governance; CM VAULT AGENT ondersteunt repositorystructuur, source hygiene en documentatiebeheer. |
| Drive opslag | CM VAULT AGENT |  | Structuur, naming, archivering en validatie. |
| ClickUp uitvoering | CM OPS AGENT |  | Taken, planning en projectstatus. |
| Moneybird | CM MONEY AGENT |  | Facturen, open posten, BTW en cashflow. |
| Gmail correspondentie | Domein-owner volgens System of Record Matrix | CM CONTROL AGENT bij escalaties/approval | Correspondentie-eigenaarschap volgt het domein: CM OPS, CM PROSPECT, CM LEGAL, CM MONEY, CM SOCIAL of CM CONTROL, afhankelijk van de context. CM CONTROL AGENT ondersteunt alleen bij escalaties en approvals. |
| Make automatisering | CM FLOW AGENT | CM VAULT AGENT | Scenario’s, integraties en automatiseringen; documentatie wordt in GitHub ondersteund door CM VAULT AGENT. |
| Canva / Website CMS | CM SOCIAL AGENT |  | Design, visuals, social assets en website content. |
| Contracten / Rechten | CM LEGAL AGENT |  | Juridische documenten, rechtenregister en deals. |
| Leads / Partnerships | CM PROSPECT AGENT | CM LEGAL AGENT | Pipeline, outreach, sponsorships en brand deals; juridische ondersteuning waar nodig. |
| Approvals | CM CONTROL AGENT | CM FLOW AGENT | APPROVAL_LOG, Level 4 bewaking en escalaties; automatisering wordt ondersteund door CM FLOW AGENT. |
| GitHub workflows / repository automation | CM FLOW AGENT | CM VAULT AGENT, CM CONTROL AGENT | CM FLOW AGENT beheert workflowlogica; CM VAULT AGENT ondersteunt repositorystructuur en CM CONTROL AGENT ondersteunt governance review. |

-----

## 7. VERWIJZINGEN

| Document | Pad |
|---|---|
| Approval Log | `docs/00_GOVERNANCE/APPROVAL_LOG.md` |
| Agent Responsibility Matrix | `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md` |
| Agent Handoff Matrix | `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| AI Task Autonomy Matrix | `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md` |
| Escalation Protocols | `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md` |
| CM Agents Overview | `docs/07_AI_AGENTS/00_CM_AGENTS_OVERVIEW.md` |
