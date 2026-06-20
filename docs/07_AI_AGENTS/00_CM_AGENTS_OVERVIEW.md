# CM Agents Overview

## Doel

Dit overzicht beschrijft de actieve agentstructuur volgens **CM Agent Architecture V1.4**. Het document is bedoeld als snelle routekaart voor eigenaarschap, handoffs en verplichte goedkeuringen binnen de CM-agentlaag.

## Leidende principes

- Alles werkt vanuit één actieve agentarchitectuur: **CM Agent Architecture V1.4**.
- Er worden geen nieuwe agents toegevoegd buiten de actieve agentnamen hieronder.
- Elke taak heeft één primaire agenteigenaar.
- Bij twijfel wordt niet uitgevoerd, maar geëscaleerd naar **CM CONTROL AGENT**.
- Agents mogen voorbereiden, analyseren, structureren en signaleren; mensen keuren goed.
- Verwijderen van bronnen gebeurt nooit zonder expliciete bevestiging.

## Actieve agents

| Agent | Laag | Kernvraag | Primair eigenaarschap |
| --- | --- | --- | --- |
| CM CONTROL AGENT | Sturing | Moeten we dit doen? | Governance, prioriteiten, routing, kwaliteitscontrole, besluitvoorbereiding en escalatie. |
| CM OPS AGENT | Executie | Hoe voeren we dit uit? | Projectmanagement, artist management, planning, deliverables, Gmail-templates via `info@custommade.agency` en subsidietrajecten. |
| CM MONEY AGENT | Executie | Klopt dit financieel? | `06_FINANCE`, Moneybird, BTW, Open Posten, Cashflow, facturatie-opvolging, betaalstatussen, royalty facturen, commission tracking en revenue share controles. |
| CM PROSPECT AGENT | Executie | Hoe krijgen we nieuwe business? | Leads, outreach, partnerships, sales, proposals, pipeline management, renewals, upsells, Sponsorships, Brand Partnerships, Product Placement, Sampling, Event Activaties en Endorsements. |
| CM LEGAL AGENT | Bescherming | Is dit juridisch correct? | Contracten, publishing, licensing, sync, management agreements, compliance, deal reviews, `04_DEALS` en `07_LEGAL`. |
| CM SOCIAL AGENT | Executie | Hoe communiceren we dit? | Content, socials, thought leadership, case studies, personal branding, website content, SEO strategie, Website SEO, zoekwoordonderzoek en organische zichtbaarheid. |
| CM VAULT AGENT | Infrastructuur | Waar staat de waarheid? | Drive, templates, SOP’s, prompts, playbooks, Knowledge Base, governance, brand assets, contract templates, proposal templates en case studies. |
| CM FLOW AGENT | Infrastructuur | Hoe automatiseren we dit? | Make, API’s, Webhooks, ClickUp automations, GitHub workflows, repository automatisering, document synchronisatie, integraties, systeemgezondheid, monitoring en automatiseringen. |

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
