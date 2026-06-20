# Ownership Rules — CM Agent Register V1.4

## Doel

Dit document legt vast welke CM-agent eigenaar is van welk domein en wanneer eigenaarschap moet worden overgedragen.

## Agent ownership table V1.4

| Domein | Primaire eigenaar | Notes |
| --- | --- | --- |
| Governance, prioriteiten en kwaliteit | CM CONTROL AGENT | Beslist over routing en escalatie. |
| Projectmanagement, artist management, planning en deliverables | CM OPS AGENT | Finance is vanaf V1.4 uitgesloten. |
| `06_FINANCE` | CM MONEY AGENT | Overgenomen van CM OPS AGENT. |
| Moneybird | CM MONEY AGENT | Financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. |
| BTW | CM MONEY AGENT | Controle, signalering en voorbereide opvolging. |
| Open Posten | CM MONEY AGENT | Betaalstatussen en debiteuren-/crediteurenopvolging. |
| Cashflow | CM MONEY AGENT | Monitoring, forecast-input en blokkadesignalering. |
| Leads, outreach, sales en proposals | CM PROSPECT AGENT | Commerciële commitments vereisen goedkeuring. |
| Content, socials en website content | CM SOCIAL AGENT | Publicatie vereist goedkeuring. |
| Contracten, deals, publishing, licensing en compliance | CM LEGAL AGENT | Inclusief `04_DEALS` en `07_LEGAL`. |
| Drive, templates, SOP’s, prompts, playbooks en Knowledge Base | CM VAULT AGENT | Archiveert alleen; verwijdert niet. |
| Make, API’s, webhooks en automations | CM FLOW AGENT | Test en monitoring verplicht. |

## Overdrachtsregel V1.4

Alles wat raakt aan `06_FINANCE`, Moneybird, BTW, Open Posten of Cashflow wordt niet meer door CM OPS AGENT beheerd, maar door CM MONEY AGENT. CM OPS AGENT blijft verantwoordelijk voor operationele planning en context rondom finance-afhankelijkheden.
