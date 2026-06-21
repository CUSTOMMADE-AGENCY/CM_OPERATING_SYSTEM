# Agent Responsibility Matrix

## Doel

Deze matrix wijst per domein exact één eigenaar-agent aan. Ondersteunende agents leveren input, voeren deelchecks uit of bereiden werk voor, maar nemen nooit het eigenaarschap over. Bij conflict, overlap of ontbrekende scope beslist **CM CONTROL AGENT**.

## Kernregels

- Eén domein heeft exact één eigenaar-agent.
- Geen dubbele eigenaarschap: de kolom **Eigenaar Agent** bevat per domein één agent.
- Ondersteunende agents mogen adviseren, signaleren en voorbereiden, maar niet zelfstandig besluiten buiten hun rol.
- GitHub is de Source Of Truth voor governance, matrices, SOP's, prompts, playbooks, workflows en CM_OS-documentatie.
- Moneybird is de financiële waarheid voor omzet, facturen, inkomend geld, bank, BTW, open posten, cashflow en financiële rapportage.
- Drive is opslag voor documenten, bijlagen, assets, contractkopieën, archiefbestanden en werkmateriaal.
- ClickUp is uitvoering voor taken, planning, projectstatussen, deadlines, opvolging en operationele routing.
- Approval gates zijn verplicht vóór externe toezeggingen, publicatie, ondertekening, financiële verplichtingen of systeemwijzigingen.

## Uitvoeringsafspraken

1. **Startpunt:** bepaal eerst het domein in deze matrix.
2. **Owner:** wijs de taak toe aan de bijbehorende eigenaar-agent.
3. **Support:** tag alleen ondersteunende agents wanneer hun input nodig is voor uitvoering of controle.
4. **Approval:** haal de approval gate op vóór de actie live gaat, extern wordt gedeeld of financieel/juridisch bindend wordt.
5. **Registratie:** leg het eindresultaat vast in de Source Of Truth en koppel uitvoerende taken in ClickUp waar nodig.
6. **Escalatie:** bij twijfel over eigenaar, prioriteit of risico escaleert de uitvoerende agent naar **CM CONTROL AGENT**.

## Responsibility matrix

| Domein | Eigenaar Agent | Ondersteunende Agenten | Approval Gate | Source Of Truth |
| --- | --- | --- | --- | --- |
| Governance | CM CONTROL AGENT | CM VAULT AGENT, CM FLOW AGENT | Sophia bij strategische of business-impact | GitHub |
| Prioriteiten | CM CONTROL AGENT | CM OPS AGENT, CM MONEY AGENT, CM PROSPECT AGENT | Sophia bij strategische herprioritering | GitHub + ClickUp |
| Escalaties | CM CONTROL AGENT | Betreffende eigenaar-agent, CM OPS AGENT | Sophia bij extern, juridisch, financieel of reputatierisico | GitHub + ClickUp |
| Artist Management | CM OPS AGENT | CM LEGAL AGENT, CM SOCIAL AGENT, CM MONEY AGENT | Sophia bij externe commitments of scopewijziging | ClickUp + Drive |
| Client Management | CM OPS AGENT | CM PROSPECT AGENT, CM LEGAL AGENT, CM MONEY AGENT | CM CONTROL bij escalatie; Sophia bij commitments | ClickUp + Drive |
| Projectmanagement | CM OPS AGENT | CM CONTROL AGENT, CM VAULT AGENT, CM FLOW AGENT | CM CONTROL bij scope-, planning- of prioriteitswijziging | ClickUp |
| Releases | CM OPS AGENT | CM SOCIAL AGENT, CM LEGAL AGENT, CM MONEY AGENT | Sophia vóór releasecommitment of externe deadline | ClickUp + Drive |
| Sponsorships | CM PROSPECT AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM OPS AGENT | Sophia bij commerciële toezegging | GitHub + Drive |
| Partnerships | CM PROSPECT AGENT | CM LEGAL AGENT, CM OPS AGENT, CM SOCIAL AGENT | Sophia bij commerciële toezegging | GitHub + Drive |
| Brand Deals | CM PROSPECT AGENT | CM LEGAL AGENT, CM MONEY AGENT, CM OPS AGENT | Sophia bij dealcommitment | GitHub + Drive |
| Nieuwe zakelijke klanten | CM PROSPECT AGENT | CM OPS AGENT, CM LEGAL AGENT, CM MONEY AGENT | Sophia bij voorstel, offerte of commerciële toezegging | GitHub + ClickUp + Drive |
| Contracten | CM LEGAL AGENT | CM MONEY AGENT, CM OPS AGENT | Sophia bij ondertekening of wijziging | GitHub + Drive |
| NDA's | CM LEGAL AGENT | CM PROSPECT AGENT, CM OPS AGENT | Sophia bij afwijkende voorwaarden | GitHub + Drive |
| Publishing | CM LEGAL AGENT | CM MONEY AGENT, CM VAULT AGENT | Sophia bij rechtencommitment | GitHub + Drive |
| Licensing | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT | Sophia bij licentiecommitment | GitHub + Drive |
| Sync | CM LEGAL AGENT | CM PROSPECT AGENT, CM MONEY AGENT, CM SOCIAL AGENT | Sophia bij syncdeal of rechtenclaim | GitHub + Drive |
| Catalog Acquisitions | CM LEGAL AGENT | CM MONEY AGENT, CM CONTROL AGENT | Sophia altijd bij acquisitiecommitment | GitHub + Drive |
| Rechten Register | CM LEGAL AGENT | CM VAULT AGENT, CM MONEY AGENT | CM CONTROL bij structuurwijziging; Sophia bij rechtenconflict | GitHub + Drive |
| Moneybird | CM MONEY AGENT | CM OPS AGENT, CM FLOW AGENT | Sophia bij financiële commitments | Moneybird |
| Facturen | CM MONEY AGENT | CM OPS AGENT, CM LEGAL AGENT | Sophia bij afwijkende betalingsafspraken | Moneybird |
| Inkomend | CM MONEY AGENT | CM OPS AGENT, CM PROSPECT AGENT | Sophia bij onverklaarde of betwiste ontvangst | Moneybird |
| Bank | CM MONEY AGENT | CM CONTROL AGENT | Sophia bij bankmutaties buiten reguliere reconciliatie | Moneybird |
| BTW | CM MONEY AGENT | CM CONTROL AGENT | Sophia bij materiële fiscale risico's | Moneybird |
| Open Posten | CM MONEY AGENT | CM OPS AGENT, CM PROSPECT AGENT | Sophia bij betalingsregeling of dispuut | Moneybird |
| Cashflow | CM MONEY AGENT | CM CONTROL AGENT, CM PROSPECT AGENT | Sophia bij cashflowbeslissingen of financiële verplichting | Moneybird |
| Revenue Tracking | CM MONEY AGENT | CM LEGAL AGENT, CM OPS AGENT, CM VAULT AGENT | CM CONTROL bij rapportagewijziging; Sophia bij revenue-dispuut | Moneybird + GitHub |
| Forecasting | CM MONEY AGENT | CM PROSPECT AGENT, CM CONTROL AGENT | CM CONTROL bij prioriteitsimpact; Sophia bij commitment | Moneybird + GitHub |
| Website | CM SOCIAL AGENT | CM FLOW AGENT, CM VAULT AGENT, CM CONTROL AGENT | Menselijke approval vóór publicatie | GitHub + Drive |
| SEO | CM SOCIAL AGENT | CM FLOW AGENT, CM VAULT AGENT | CM CONTROL bij strategische wijziging | GitHub |
| Social Media | CM SOCIAL AGENT | CM OPS AGENT, CM LEGAL AGENT, CM PROSPECT AGENT | Menselijke approval vóór publicatie | GitHub + Drive |
| Nieuwsbrief | CM SOCIAL AGENT | CM OPS AGENT, CM LEGAL AGENT, CM PROSPECT AGENT | Menselijke approval vóór verzending | GitHub + Drive |
| Persberichten | CM SOCIAL AGENT | CM LEGAL AGENT, CM CONTROL AGENT | Sophia bij reputatie- of juridische impact | GitHub + Drive |
| Media Outreach | CM SOCIAL AGENT | CM PROSPECT AGENT, CM LEGAL AGENT | Sophia bij gevoelige externe communicatie | GitHub + Drive |
| Templates | CM VAULT AGENT | CM CONTROL AGENT, CM LEGAL AGENT, CM SOCIAL AGENT | CM CONTROL bij governance-impact | GitHub + Drive |
| SOP's | CM VAULT AGENT | CM CONTROL AGENT, CM OPS AGENT | CM CONTROL bij proceswijziging | GitHub |
| Prompts | CM VAULT AGENT | Alle agents als inputleverancier | CM CONTROL bij governance-impact | GitHub |
| Playbooks | CM VAULT AGENT | CM CONTROL AGENT, betreffende eigenaar-agent | CM CONTROL en Sophia bij architectuurwijziging | GitHub |
| Knowledge Base | CM VAULT AGENT | Alle agents als inputleverancier | CM CONTROL bij bronstructuurwijziging | GitHub + Drive |
| Archief | CM VAULT AGENT | CM OPS AGENT, CM LEGAL AGENT, CM MONEY AGENT | CM CONTROL bij archiefstructuurwijziging | Drive + GitHub |
| Make | CM FLOW AGENT | CM OPS AGENT, CM MONEY AGENT, CM VAULT AGENT | CM CONTROL bij scenario met datamutatie | GitHub + ClickUp |
| ClickUp Automations | CM FLOW AGENT | CM OPS AGENT, CM CONTROL AGENT | CM CONTROL bij status-, routing- of taakimpact | GitHub + ClickUp |
| GitHub Workflows | CM FLOW AGENT | CM CONTROL AGENT, CM VAULT AGENT | CM CONTROL bij repository- of release-impact | GitHub |
| Integraties | CM FLOW AGENT | CM CONTROL AGENT, CM OPS AGENT, CM MONEY AGENT, CM VAULT AGENT | CM CONTROL bij dataflow-, security- of systeemimpact | GitHub |
