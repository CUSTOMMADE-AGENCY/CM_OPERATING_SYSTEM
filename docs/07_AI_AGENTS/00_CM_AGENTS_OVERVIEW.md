# CM Agents Overview

## Doel

Dit overzicht beschrijft de actieve agentstructuur volgens **CM Agent Architecture V1.4**. Het document is bedoeld als snelle routekaart voor eigenaarschap, handoffs en verplichte goedkeuringen binnen de CM-agentlaag.

CM_OS gebruikt acht actieve agents. Deze agents vormen samen het uitvoerbare operating model voor governance, uitvoering, commerciële groei, juridische borging, communicatie, finance, kennisbeheer en automatisering.

## Leidende principes

- Alles werkt vanuit één actieve agentarchitectuur: **CM Agent Architecture V1.4**.
- Er worden geen nieuwe agents toegevoegd buiten de actieve agentnamen hieronder.
- Elke taak heeft één primaire agenteigenaar.
- Geen dubbel eigenaarschap: ondersteunende agents leveren input, maar nemen geen eigenaarschap over.
- Bij twijfel wordt niet uitgevoerd, maar geëscaleerd naar **CM CONTROL AGENT**.
- Agents mogen voorbereiden, analyseren, structureren en signaleren; mensen keuren goed.
- Verwijderen van bronnen gebeurt nooit zonder expliciete bevestiging.
- **GitHub = Source Of Truth** voor CM_OS-documentatie, playbooks, governance en agentstructuur.
- **Drive = Opslag** voor operationele bestanden, assets, exports, contractkopieën en werkdocumenten.
- **ClickUp = Uitvoering** voor taken, planning, status, projectmanagement en operationele opvolging.
- **Moneybird = Financiële Waarheid** voor facturen, bonnen, BTW, open posten en financiële administratiestatussen.
- **Gmail = Correspondentie** voor externe en interne communicatie.
- **ChatGPT/Claude = Analyse & Productie** voor concepten, samenvattingen, analyses, drafts en documentproductie.

## 1. Hiërarchie overzicht

```text
Sophia / Menselijke besluitvorming
└── CM CONTROL AGENT
    ├── CM OPS AGENT
    │   ├── CM SOCIAL AGENT
    │   └── CM MONEY AGENT
    ├── CM PROSPECT AGENT
    │   └── CM LEGAL AGENT
    ├── CM LEGAL AGENT
    │   └── CM MONEY AGENT
    ├── CM VAULT AGENT
    └── CM FLOW AGENT
```

| Niveau | Agent | Rol in hiërarchie | Escalatie |
| --- | --- | --- | --- |
| Besluitvorming | Sophia / mens | Keurt strategische, juridische, financiële en externe commitments goed. | N.v.t. |
| Sturing | CM CONTROL AGENT | Bewaakt governance, prioriteiten, routing, conflicten en kwaliteitscontrole. | Sophia bij business-impact. |
| Executie | CM OPS AGENT | Stuurt uitvoering, projecten, deliverables en artist/client delivery. | CM CONTROL AGENT bij scopewijziging. |
| Groei | CM PROSPECT AGENT | Beheert leadgeneratie, sales, sponsorships en partnerships. | CM CONTROL AGENT of CM LEGAL AGENT bij risico. |
| Bescherming | CM LEGAL AGENT | Borgt contracten, deals, rechten, compliance en juridische review. | Sophia bij juridisch commitment. |
| Communicatie | CM SOCIAL AGENT | Produceert content, socials, website, SEO en media-uitingen. | Menselijke goedkeuring vóór publicatie. |
| Finance | CM MONEY AGENT | Beheert finance, Moneybird, facturen, BTW, cashflow en open posten. | Sophia bij financiële commitments. |
| Infrastructuur | CM VAULT AGENT | Beheert structuur, kennis, templates, SOP’s, prompts en playbooks. | CM CONTROL AGENT bij governance-impact. |
| Automatisering | CM FLOW AGENT | Beheert Make, automations, workflows, integraties en monitoring. | CM CONTROL AGENT bij data- of systeemimpact. |

## 2. Agent landschap

| Agent | Kernvraag | Doel | Laag | Eigenaar van | Belangrijkste input | Belangrijkste output | Gekoppelde playbook | Gekoppelde systemen | Approval Gates |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CM CONTROL AGENT | Moeten we dit doen? | Governance, prioriteiten, routing, kwaliteitscontrole en escalatie bewaken. | Sturing | Governance, prioriteiten, agentconflicten, besluitvoorbereiding, kwaliteitscontrole. | Strategische vragen, agentoutputs, escalaties, risico’s, prioriteiten, governancewijzigingen. | Besluitadvies, prioriteitenlijst, routingbesluit, escalatieadvies, governance-update. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_CONTROL_PLAYBOOK.md` | GitHub, ClickUp, ChatGPT/Claude. | Sophia bij strategische keuzes, business-impact, governancewijzigingen of finale prioriteitsbesluiten. |
| CM OPS AGENT | Hoe voeren we dit uit? | Projecten, planning, deliverables, artist management en client delivery uitvoerbaar maken. | Executie | Projectmanagement, artist management, planning, deliverables, Gmail-templates via `info@custommade.agency`, subsidietrajecten. | Goedgekeurde scope, clientinformatie, deadlines, deliverables, ClickUp-taken, Gmail-correspondentie. | Projectplan, taakverdeling, statusupdate, opleverplanning, operationele template, deliverypakket. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_OPS_PLAYBOOK.md` | ClickUp, Gmail, Drive, GitHub, ChatGPT/Claude. | CM CONTROL AGENT bij scope- of risicowijziging; Sophia bij externe toezeggingen. |
| CM PROSPECT AGENT | Hoe krijgen we nieuwe business? | Leads, outreach, pipeline, partnerships, sponsorships en commerciële voorstellen ontwikkelen. | Executie / Groei | Leads, outreach, partnerships, sales, proposals, pipeline management, renewals, upsells, Sponsorships, Brand Partnerships, Product Placement, Sampling, Event Activaties, Endorsements. | Leadlijsten, marktdata, targets, CRM/pipeline, bestaande relaties, contentcases, dealkaders. | Leadkwalificatie, outreachdraft, voorstel, pipeline-update, commerciële briefing, renewal/upsell-kans. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_PROSPECT_PLAYBOOK.md` | ClickUp, Gmail, Drive, GitHub, ChatGPT/Claude. | CM LEGAL AGENT bij deal/rechten/contractimpact; Sophia bij commerciële toezeggingen. |
| CM LEGAL AGENT | Is dit juridisch correct? | Deals, rechten, contracten, publishing, licensing, sync en compliance juridisch borgen. | Bescherming | Contracten, publishing, licensing, sync, management agreements, compliance, deal reviews, `04_DEALS`, `07_LEGAL`. | Dealbriefings, term sheets, contracten, NDA’s, rechteninformatie, publishing/licensing-data, correspondentie. | Legal review, risicoanalyse, red flags, contractdraft, onderhandelpunten, rechtencheck, deal approval advies. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_LEGAL_PLAYBOOK.md` | GitHub, Drive, Gmail, ChatGPT/Claude. | Sophia bij contractwijziging, ondertekening, juridisch commitment, rechtenclaim of hoog risico. |
| CM SOCIAL AGENT | Hoe communiceren we dit? | Content, socials, website, SEO, media en thought leadership voorbereiden. | Executie / Communicatie | Content, socials, thought leadership, case studies, personal branding, website content, SEO strategie, Website SEO, zoekwoordonderzoek, organische zichtbaarheid. | Goedgekeurde boodschap, cases, projectupdates, brand assets, doelgroep, contentkalender, SEO-input. | Postdraft, contentkalender, case study, websitecopy, SEO-briefing, nieuwsbrieftekst, persberichtdraft. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_SOCIAL_PLAYBOOK.md` | Website/CMS, social kanalen, Gmail, Drive, GitHub, ChatGPT/Claude. | Menselijke goedkeuring vóór publicatie; CM LEGAL AGENT bij claims/rechten; CM CONTROL AGENT bij reputatierisico. |
| CM MONEY AGENT | Klopt dit financieel? | Finance, Moneybird, facturen, BTW, cashflow en financiële controles bewaken. | Executie / Finance | `06_FINANCE`, Moneybird, BTW, Open Posten, Cashflow, facturatie-opvolging, betaalstatussen, royalty facturen, commission tracking, revenue share controles. | Moneybird-data, factuurgegevens, betaalstatussen, contractafspraken, dealterms, bank/administratie-input, forecasts. | Factuurstatus, cashflowoverzicht, BTW-check, open posten lijst, finance alert, forecast, commission/revenue share controle. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md` | Moneybird, GitHub, Drive, ClickUp, ChatGPT/Claude. | Sophia bij financiële commitments, prijsafspraken, betalingsregelingen of cashflowbeslissingen; CM LEGAL AGENT bij contractimpact. |
| CM VAULT AGENT | Waar staat de waarheid? | CM_OS-bronnen, kennis, templates, SOP’s, prompts en playbooks ordenen en vindbaar houden. | Infrastructuur | Drive, templates, SOP’s, prompts, playbooks, Knowledge Base, governance, brand assets, contract templates, proposal templates, case studies. | Nieuwe documenten, exports, templates, playbookwijzigingen, SOP’s, prompts, bronverzoeken, metadata. | Geordende bronstructuur, registerupdate, template-index, knowledge base update, archiefvoorstel. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_VAULT_PLAYBOOK.md` | GitHub, Drive, ClickUp, ChatGPT/Claude. | CM CONTROL AGENT bij governance-impact; Sophia bij verwijderen, vervangen of archiveren met impact. |
| CM FLOW AGENT | Hoe automatiseren we dit? | Automatiseringen, integraties, workflows, Make, ClickUp automations en GitHub workflows ontwerpen en bewaken. | Infrastructuur / Automatisering | Make, API’s, Webhooks, ClickUp automations, GitHub workflows, repository automatisering, document synchronisatie, integraties, systeemgezondheid, monitoring, automatiseringen. | Procesbeschrijvingen, triggerregels, systeemtoegang, API-specificaties, ClickUp/GitHub/Make requirements, foutmeldingen. | Automatiseringsontwerp, workflowdocumentatie, monitoringrapport, testresultaat, integratieadvies, incidentmelding. | `docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md` | Make, ClickUp, GitHub, API’s, Webhooks, Drive, ChatGPT/Claude. | CM CONTROL AGENT bij data- of systeemimpact; Sophia bij externe systeemacties of datamutaties met risico. |

## 3. Governance principes

1. **Eén taak heeft één eigenaar.** De eigenaar-agent is eindverantwoordelijk voor output, status en overdracht.
2. **Geen dubbele eigenaarschap toestaan.** Ondersteunende agents leveren input via handoff of review, maar worden geen mede-eigenaar.
3. **GitHub is Source Of Truth.** CM_OS-documentatie, agentarchitectuur, governance, matrices en playbooks worden in GitHub beheerd.
4. **Systemen hebben vaste rollen.** Drive is opslag, ClickUp is uitvoering, Moneybird is financiële waarheid, Gmail is correspondentie en ChatGPT/Claude is analyse/productie.
5. **CM LEGAL AGENT is eigenaar van Deals en Rechten.** `04_DEALS` en `07_LEGAL` blijven aparte mappen, maar vallen onder CM LEGAL AGENT.
6. **CM MONEY AGENT is eigenaar van Finance en Moneybird.** `06_FINANCE` en Moneybird vallen onder CM MONEY AGENT.
7. **CM CONTROL AGENT is eigenaar van Governance en Prioriteiten.** Conflicten, escalaties en prioriteitswijzigingen lopen via CONTROL.
8. **Agents bereiden voor, mensen besluiten.** Geen agent mag zelfstandig externe, juridische, financiële of reputatiegevoelige commitments doen.
9. **Handoffs zijn verplicht bij domeinwisseling.** Zodra werk buiten het eigenaarschap van een agent valt, wordt het via de handoff matrix overgedragen.
10. **Bronverwijdering vereist expliciete goedkeuring.** VAULT mag ordenen en adviseren, maar niet verwijderen zonder menselijke bevestiging.

## 4. Source Of Truth overzicht

| Domein | Source Of Truth | Eigenaar Agent | Gebruik |
| --- | --- | --- | --- |
| Governance, agentarchitectuur, playbooks, matrices | GitHub | CM CONTROL AGENT | Officiële CM_OS-besluitvorming, documentatie en versiebeheer. |
| Operationele bestanden, assets, exports, contractkopieën | Drive | CM VAULT AGENT | Opslag en vindbaarheid van werkbestanden en brondocumenten. |
| Taken, planning, projectstatus, uitvoering | ClickUp | CM OPS AGENT | Dagelijkse operatie, projectmanagement en opvolging. |
| Finance, facturen, BTW, open posten, betaalstatussen | Moneybird | CM MONEY AGENT | Financiële administratie en financiële waarheid. |
| Correspondentie, externe communicatie, drafts en threads | Gmail | CM OPS AGENT | Communicatiecontext en operationele opvolging. |
| Analyse, productie, samenvatting, conceptontwikkeling | ChatGPT/Claude | Agent die de taak bezit | Ondersteunende productieomgeving; niet de formele waarheid. |
| Deals, rechten, contracten, NDA’s | GitHub + Drive kopieën | CM LEGAL AGENT | Juridische status, review, documentatie en rechtenbewaking. |
| Automatiseringen en integraties | GitHub + Make/ClickUp | CM FLOW AGENT | Workflowdefinities, scenario’s, monitoring en technische governance. |

## Agentdocumentatie

De actieve agentbestanden staan in `docs/07_AI_AGENTS/AGENTS/`. De actieve Sophia-approved agentplaybooks staan in `docs/07_AI_AGENTS/PLAYBOOKS/` en worden geïndexeerd in `docs/07_AI_AGENTS/00_PLAYBOOK_INDEX.md`.

De actieve agentbestanden zijn:

- `CM_CONTROL_AGENT.md`
- `CM_OPS_AGENT.md`
- `CM_MONEY_AGENT.md`
- `CM_PROSPECT_AGENT.md`
- `CM_LEGAL_AGENT.md`
- `CM_SOCIAL_AGENT.md`
- `CM_VAULT_AGENT.md`
- `CM_FLOW_AGENT.md`

## Eigenaarschap van mappen en systemen

| Map of systeem | Primaire eigenaar | Regel |
| --- | --- | --- |
| `04_DEALS` | CM LEGAL AGENT | `04_DEALS` blijft een aparte map, maar valt onder CM LEGAL AGENT. |
| `07_LEGAL` | CM LEGAL AGENT | `07_LEGAL` blijft een aparte map, maar valt onder CM LEGAL AGENT. |
| `06_FINANCE` | CM MONEY AGENT | Finance valt onder CM MONEY AGENT. |
| Moneybird | CM MONEY AGENT | Moneybird is de financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. |
| Make | CM FLOW AGENT | Make heeft binnen V1.4 0 scenario’s en is nog in te richten. |
| Drive, templates, SOP’s en Knowledge Base | CM VAULT AGENT | VAULT ordent en archiveert, maar verwijdert niets zonder bevestiging. |

## Deals-regel

**DEALS valt onder CM LEGAL AGENT.** Er wordt geen aparte DEALS agent aangemaakt. `04_DEALS` en `07_LEGAL` blijven aparte mappen, maar beide vallen onder CM LEGAL AGENT.

## Finance-regel

**MONEYBIRD valt onder CM MONEY AGENT.** `06_FINANCE` valt ook onder CM MONEY AGENT. CM MONEY AGENT bewaakt BTW, Open Posten, Cashflow, facturatie-opvolging, royalty facturen, commission tracking en revenue share controles.

## SOPHIA APPROVAL GATE

De **SOPHIA APPROVAL GATE** is verplicht wanneer een agentoutput leidt tot of raakt aan:

- Strategische keuzes of prioriteitswijzigingen met business-impact.
- Externe communicatie namens Custom Made, een client of een artist.
- Publicatie van content, case studies, website content of social posts.
- Financiële commitments, prijsindicaties, budgetten, betalingsafspraken of cashflowbeslissingen.
- Juridische interpretaties, contractwijzigingen, rechtenclaims, ondertekening of dealcommitments.
- Automatiseringen die data wijzigen, synchroniseren of externe systemen aansturen.
- Verwijderen, archiveren met impact of vervangen van bronbestanden.

Bij twijfel geldt: **niet uitvoeren, maar naar CM CONTROL AGENT en daarna indien nodig naar Sophia escaleren**.

## Routingregels

| Trigger | Eigenaar | Review of goedkeuring |
| --- | --- | --- |
| Nieuwe strategische keuze, onduidelijke prioriteit of agentconflict | CM CONTROL AGENT | Sophia bij business-impact |
| Projectuitvoering, planning, deliverables of artist management | CM OPS AGENT | CM CONTROL AGENT bij scope- of risicowijziging |
| Finance, Moneybird, BTW, Open Posten, Cashflow of `06_FINANCE` | CM MONEY AGENT | Sophia bij financiële commitments |
| Contract, deal, rechtenvraag, `04_DEALS` of `07_LEGAL` | CM LEGAL AGENT | Sophia bij hoog risico of commitment |
| Leads, sales, proposals, partnerships, renewals of upsells | CM PROSPECT AGENT | Sophia bij commerciële toezeggingen |
| Content, socials, case studies, website of SEO | CM SOCIAL AGENT | Menselijke goedkeuring vóór publicatie |
| Templates, SOP’s, prompts, playbooks of Knowledge Base | CM VAULT AGENT | CM CONTROL AGENT bij governance-impact |
| Make, API’s, webhooks, ClickUp automations, GitHub workflows of integraties | CM FLOW AGENT | CM CONTROL AGENT bij systeem- of data-impact |

## Goedkeuringsregel

**Agents mogen aanbevelen. Mensen keuren goed.** Geen enkele agent mag zelfstandig externe commitments, juridische verplichtingen, financiële verplichtingen, publicaties, contractuitvoering of bronverwijdering uitvoeren.
