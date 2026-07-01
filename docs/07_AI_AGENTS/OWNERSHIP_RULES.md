# Ownership Rules — CM Agent Register V1.4

## Doel

Dit document legt vast welke CM-agent eigenaar is van welk domein en wanneer eigenaarschap moet worden overgedragen.

## Agent ownership table V1.4

| Domein | Laag | Primaire eigenaar | Notes |
| --- | --- | --- | --- |
| Governance, prioriteiten, kwaliteit en beslissingsbevoegdheid | Sturing | CM CONTROL AGENT | Beslist over routing en escalatie. |
| Projectmanagement, artist management, planning en deliverables | Executie | CM OPS AGENT | Finance is vanaf V1.4 uitgesloten. |
| `06_FINANCE`, royalty facturen, commission tracking en revenue share controles | Executie | CM MONEY AGENT | Overgenomen van CM OPS AGENT. |
| Moneybird | Executie | CM MONEY AGENT | Financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. |
| BTW | Executie | CM MONEY AGENT | Controle, signalering en voorbereide opvolging. |
| Open Posten | Executie | CM MONEY AGENT | Betaalstatussen en debiteuren-/crediteurenopvolging. |
| Cashflow | Executie | CM MONEY AGENT | Monitoring, forecast-input en blokkadesignalering. |
| Leads, outreach, sales, proposals, sponsorships, brand partnerships, product placement, sampling, event activaties en endorsements | Executie | CM PROSPECT AGENT | Commerciële commitments vereisen goedkeuring. |
| Content, socials, website content, SEO strategie, Website SEO, zoekwoordonderzoek en organische zichtbaarheid | Executie | CM SOCIAL AGENT | Publicatie vereist goedkeuring. |
| Contracten, deals, publishing, licensing en compliance | Bescherming | CM LEGAL AGENT | Inclusief `04_DEALS` en `07_LEGAL`. |
| Drive, templates, SOP’s, prompts, playbooks en Knowledge Base | Infrastructuur | CM VAULT AGENT | Archiveert alleen; verwijdert niet. |
| Make, API’s, webhooks, automations, GitHub workflows, repository automatisering en document synchronisatie | Infrastructuur | CM FLOW AGENT | Test en monitoring verplicht. |

## Overdrachtsregel V1.4

Alles wat raakt aan `06_FINANCE`, Moneybird, BTW, Open Posten of Cashflow wordt niet meer door CM OPS AGENT beheerd, maar door CM MONEY AGENT. CM OPS AGENT blijft verantwoordelijk voor operationele planning en context rondom finance-afhankelijkheden.
