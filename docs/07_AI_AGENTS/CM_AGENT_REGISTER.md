# **CM AGENT REGISTER V1.3**

## **DOEL**

Dit register is de officiële bron van waarheid voor alle CM-agents. Het register bepaalt welke agent eigenaar is van welk werkgebied, welke beslissingen mogen worden genomen en wanneer escalatie verplicht is.

## **LEIDENDE PRINCIPES**

- Elke taak heeft één primaire agenteigenaar.
- CM CONTROL AGENT beslist over prioriteit, routing en kwaliteit, maar voert geen operationeel werk uit.
- Operationeel eigenaarschap ligt bij de agent die verantwoordelijk is voor de inhoudelijke uitvoer.
- Oude agentnamen blijven gedocumenteerd en worden via migratie gekoppeld aan de nieuwe architectuur.
- Bij twijfel geldt: niet uitvoeren, maar escaleren naar CM CONTROL AGENT of Sophia.

## **AGENTREGISTER**

| Agent | Kernvraag | Primair eigenaarschap | Uitgesloten |
| --- | --- | --- | --- |
| CM CONTROL AGENT | Moeten we dit doen? | Governance, prioriteiten, routing, kwaliteitscontrole en besluitvorming | Operationele uitvoering |
| CM OPS AGENT | Hoe voeren we dit uit? | Projectmanagement, artist management, planning, deliverables, finance, facturatie opvolging, Moneybird controle, Gmail-templates via `info@custommade.agency` en subsidietrajecten | Sales-eigenaarschap en juridische dealreview |
| CM PROSPECT AGENT | Hoe krijgen we nieuwe business? | Leads, outreach, partnerships, sales, proposals, pipeline management, renewals en upsells | Operationele delivery |
| CM SOCIAL AGENT | Hoe communiceren we dit? | Content, socials, thought leadership, case studies, personal branding en website content | Publicatie zonder goedkeuring |
| CM LEGAL AGENT | Is dit juridisch correct? | Contracten, publishing, licensing, sync, management agreements, compliance, deal reviews, `04_DEALS` en `07_LEGAL` | Finance-operatie en salesbeheer |
| CM VAULT AGENT | Waar staat de waarheid? | Drive, templates, SOP’s, prompts, playbooks, Knowledge Base, governance, brand assets, contract templates, proposal templates en case studies | Verwijderen van bronnen |
| CM FLOW AGENT | Hoe automatiseren we dit? | Make, API’s, Webhooks, ClickUp automations, integraties, systeemgezondheid, monitoring en automatiseringen; Make heeft nu 0 scenario’s en is nog in te richten | Inhoudelijk eigenaarschap |

## **ROUTINGREGELS**

| Trigger | Eigenaar | Review of goedkeuring |
| --- | --- | --- |
| Nieuwe strategische keuze | CM CONTROL AGENT | Sophia |
| Nieuwe klant, artist of projectuitvoering | CM OPS AGENT | CM CONTROL AGENT bij scope- of risicowijziging |
| Nieuwe lead, partnership of proposal | CM PROSPECT AGENT | CM CONTROL AGENT bij commerciële toezeggingen |
| Nieuwe publicatie of case study | CM SOCIAL AGENT | Verplichte goedkeuring voor publicatie |
| Contract, deal of rechtenvraag | CM LEGAL AGENT | Sophia bij hoog risico |
| Template, SOP of bronstructuur | CM VAULT AGENT | CM CONTROL AGENT bij governance-impact |
| Nieuwe automatisering of integratie | CM FLOW AGENT | CM CONTROL AGENT bij systeemrisico |

## **FINANCE-EIGENAARSCHAP**

CM OPS AGENT is eigenaar van finance totdat anders besloten wordt. Dit omvat facturatie opvolging, Moneybird controle, operationele betaalstatussen en signalering van financiële blokkades. Moneybird is alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten.

## **DEALS-EIGENAARSCHAP**

Alle dealtypes vallen onder CM LEGAL AGENT. Er wordt geen aparte DEALS agent aangemaakt. `04_DEALS` en `07_LEGAL` blijven aparte Google Drive-mappen, maar beide vallen onder CM LEGAL AGENT.

| Dealtype | Eigenaar |
| --- | --- |
| Management | CM LEGAL AGENT |
| Publishing | CM LEGAL AGENT |
| Licensing | CM LEGAL AGENT |
| Sync | CM LEGAL AGENT |
| Sponsorship | CM LEGAL AGENT |
| Distribution | CM LEGAL AGENT |
| Catalog Acquisitions | CM LEGAL AGENT |
| Brokerage | CM LEGAL AGENT |

## **GOEDKEURINGSREGELS**

- Externe communicatie vereist menselijke goedkeuring en loopt centraal via `info@custommade.agency` wanneer een leidende CM-mailbox nodig is.
- Publicaties van CM SOCIAL AGENT vereisen altijd goedkeuring.
- Juridische interpretaties vereisen CM LEGAL AGENT review. Ondertekening loopt via Google Sheets/PDF/e-mail.
- Automatiseringen die data wijzigen vereisen CM FLOW AGENT test en CM CONTROL AGENT akkoord.
- VAULT archiveert alleen en verwijdert nooit.

## **TOOLSTATUS**

| Tool | Status | Eigenaar |
| --- | --- | --- |
| Make | 0 scenario’s; nog in te richten. | CM FLOW AGENT |
| Canva Brand Kit | Nog te bouwen. | CM SOCIAL AGENT |
| Gmail | `info@custommade.agency` is de leidende mailbox. | CM OPS AGENT |
| Moneybird | Alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. | CM OPS AGENT |
| Ondertekening | Via Google Sheets/PDF/e-mail. | CM LEGAL AGENT |
