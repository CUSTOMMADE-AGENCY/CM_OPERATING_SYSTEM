# Agent Handoff Matrix

## Doel

Dit document beschrijft exact wanneer een dossier van de ene CM_OS-agent naar een andere agent gaat. Een handoff is verplicht zodra de volgende stap buiten het primaire eigenaarschap van de huidige agent valt.

## Handoff principes

- Eén dossier heeft op elk moment exact één eigenaar-agent.
- De ontvangende agent accepteert alleen een handoff met de vereiste output en documenten.
- De verzendende agent blijft verantwoordelijk totdat de ontvangende agent de handoff accepteert.
- GitHub is Source Of Truth voor deze matrix en governance.
- ClickUp registreert uitvoering en status.
- Drive bewaart operationele bijlagen en bronbestanden.
- Moneybird is leidend voor financiële status.
- Gmail bewaart correspondentiecontext.
- Bij twijfel of conflict beslist CM CONTROL AGENT.

## Handoff matrix

| Van Agent | Naar Agent | Trigger | Vereiste Output | Vereiste Documenten | Approval Nodig Ja/Nee | Eindresultaat |
| --- | --- | --- | --- | --- | --- | --- |
| CM PROSPECT AGENT | CM LEGAL AGENT | Lead of opportunity wordt concreet genoeg voor NDA, term sheet, contract, dealstructuur, rechtenvraag of commerciële toezegging. | Dealbriefing met partijen, voorstel, commerciële voorwaarden, risico’s en gewenste uitkomst. | Leadfiche, correspondentie, voorstel, conceptvoorwaarden, relevante assets, rechteninformatie indien beschikbaar. | Ja, bij juridische of commerciële commitment. | LEGAL neemt dossier over voor dealreview, contractcheck of NDA-proces. |
| CM LEGAL AGENT | CM OPS AGENT | Contract, NDA, deal of rechtenkader is juridisch gereviewd en operationeel uitvoerbaar. | Goedgekeurde uitvoeringsbriefing met verplichtingen, deadlines, deliverables, beperkingen en risico’s. | Contract/NDA, legal review, onderhandelnotities, rechtenoverzicht, deliverablelijst. | Ja, bij ondertekening of externe verplichting. | OPS plant uitvoering in ClickUp en bewaakt delivery. |
| CM OPS AGENT | CM SOCIAL AGENT | Project, clientcase, artistmoment of deliverable vraagt om content, social post, websitecopy, nieuwsbrief of persbericht. | Contentbriefing met doel, doelgroep, kanaal, timing, claims, assets en publicatierisico’s. | Projectbrief, goedgekeurde boodschap, assets, beeldrechten, relevante correspondentie, planning. | Ja, vóór publicatie. | SOCIAL produceert conceptcontent en routeert voor publicatiegoedkeuring. |
| CM OPS AGENT | CM MONEY AGENT | Uitvoering leidt tot facturatie, inkoop, budgetbewaking, betaalstatus, cashflowimpact of financiële controle. | Finance briefing met bedrag, partij, deadline, kostenplaats, betaalafspraak en contractreferentie. | Contract/dealreferentie, offerte, PO indien aanwezig, factuurdata, deliverablestatus, projectcode. | Ja, bij financiële commitment of betalingsafspraak. | MONEY verwerkt of controleert financiële status in Moneybird. |
| CM MONEY AGENT | CM LEGAL AGENT | Financiële afwijking raakt contractvoorwaarden, betalingstermijnen, revenue share, commission, rechten of disputen. | Finance issue memo met afwijking, bedragen, data, betrokken partijen en gewenste juridische beoordeling. | Moneybird-export, facturen, betaalhistorie, contractreferentie, correspondentie, berekening. | Ja, bij juridisch standpunt of claim. | LEGAL beoordeelt contractpositie en adviseert vervolgstap. |
| CM MONEY AGENT | CM PROSPECT AGENT | Finance signaleert renewalkans, upsellkans, betalingsgedrag dat commerciële opvolging vraagt of openstaande commerciële afspraak. | Commerciële finance signalering met klant, kans, waarde, timing en context. | Moneybird-overzicht, historische facturen, contract/dealreferentie, pipelinecontext. | Nee, tenzij nieuw commercieel commitment wordt voorgesteld. | PROSPECT kwalificeert commerciële opvolging en zet pipelineactie uit. |
| CM SOCIAL AGENT | CM PROSPECT AGENT | Contentinteractie, websitelead, mediarespons of social engagement wijst op commerciële kans. | Lead signalering met bron, contact, interesse, contentcontext en voorgestelde opvolging. | Analytics/screenshot, interactie, contactdata, campagnecontext, relevante contentlink. | Nee, tenzij externe commerciële toezegging nodig is. | PROSPECT kwalificeert lead en start outreach/pipelineactie. |
| CM VAULT AGENT | CM CONTROL AGENT | Bronstructuur, template, SOP, playbook, Knowledge Base of archiefwijziging heeft governance-impact of conflicteert met bestaande waarheid. | Governance wijzigingsvoorstel met reden, scope, impact, risico en rollback-optie. | Huidige bron, voorgestelde wijziging, changelog, betrokken documenten, impactanalyse. | Ja, bij governance-impact of verwijdering. | CONTROL beslist routing, prioriteit en eventuele Sophia-escalatie. |
| CM FLOW AGENT | CM CONTROL AGENT | Automatisering, Make scenario, ClickUp automation, GitHub workflow of integratie wijzigt data, status, routing of externe systemen. | Automatiseringsvoorstel met trigger, actie, data-impact, risico, testplan en monitoring. | Procesflow, systeemlijst, API/webhook-specificatie, testresultaten, rollbackplan. | Ja, bij data- of systeemimpact. | CONTROL keurt governance en prioriteit; daarna kan FLOW bouwen/testen. |
| CM CONTROL AGENT | CM OPS AGENT | Besluit of prioriteit is vastgesteld en vraagt operationele uitvoering. | Uitvoeringsopdracht met eigenaar, prioriteit, scope, deadline en constraints. | Besluitnotitie, prioriteitenlijst, relevante context, governancevoorwaarden. | Nee, tenzij externe commitment volgt. | OPS voert projectmatig uit. |
| CM CONTROL AGENT | CM VAULT AGENT | Governancebesluit vraagt documentatie, indexering, bronstructuur of playbookupdate. | Documentatieopdracht met gewenste wijziging, locatie, versie en deadline. | Besluitnotitie, oude bron, nieuwe bron, changelogvereisten. | Nee, tenzij verwijdering of bronvervanging met impact. | VAULT werkt Source Of Truth bij. |
| CM LEGAL AGENT | CM MONEY AGENT | Dealterms bevatten facturatie, voorschotten, revenue share, commission, royalty of betaalcondities. | Financiële legal briefing met contractuele bedragen en voorwaarden. | Contract, term sheet, betalingsschema, revenue share afspraken, BTW-relevante gegevens. | Ja, bij financiële commitment. | MONEY richt controle, facturatie of forecast in. |
| CM PROSPECT AGENT | CM OPS AGENT | Opportunity is gewonnen en juridisch/financieel voldoende geborgd voor onboarding of delivery. | Client/project onboarding briefing met scope, doelen, deadlines en contactpersonen. | Goedgekeurd voorstel, contractstatus, contactdata, kickoffnotities, deliverables. | Ja, als deal nog niet formeel goedgekeurd is. | OPS neemt client/project in uitvoering. |
| CM SOCIAL AGENT | CM LEGAL AGENT | Content bevat claims, derde partijen, beeld/muziekrechten, endorsements, product placement of gevoelige juridische context. | Legal content review briefing met claimlijst en publicatiedoel. | Conceptcopy, assets, bronlinks, rechteninformatie, publicatieplanning. | Ja, vóór publicatie bij juridische impact. | LEGAL geeft red flags en publicatievoorwaarden. |
| CM OPS AGENT | CM CONTROL AGENT | Scopewijziging, prioriteitsconflict, resourceconflict of deliveryrisico ontstaat. | Escalatiememo met probleem, impact, opties en aanbeveling. | Projectplan, ClickUp-status, correspondentie, planning, risicolog. | Ja, bij business-impact. | CONTROL beslist prioriteit, routing of escalatie naar Sophia. |

## 1. Lead Lifecycle

| Fase | Eigenaar Agent | Handoff moment | Output |
| --- | --- | --- | --- |
| Lead signalering | CM PROSPECT AGENT of CM SOCIAL AGENT | SOCIAL draagt contentleads over aan PROSPECT. | Leadfiche met bron en context. |
| Kwalificatie | CM PROSPECT AGENT | Naar LEGAL bij NDA, rechtenvraag of dealterms. | Gekwalificeerde lead en voorstelrichting. |
| Voorstel | CM PROSPECT AGENT | Naar LEGAL bij juridisch relevante voorwaarden. | Proposal draft en commerciële voorwaarden. |
| Deal review | CM LEGAL AGENT | Naar MONEY bij financiële voorwaarden; naar OPS na akkoord. | Legal review en dealvoorwaarden. |
| Onboarding | CM OPS AGENT | Naar SOCIAL of MONEY zodra content of facturatie nodig is. | Projectbrief en ClickUp-opzet. |

## 2. Client Lifecycle

| Fase | Eigenaar Agent | Handoff moment | Output |
| --- | --- | --- | --- |
| Intake | CM OPS AGENT | Naar CONTROL bij prioriteitsconflict. | Intakebriefing. |
| Contractuele borging | CM LEGAL AGENT | Naar OPS na juridische akkoordstatus. | Contractstatus en uitvoeringsvoorwaarden. |
| Delivery | CM OPS AGENT | Naar SOCIAL bij communicatiebehoefte; naar MONEY bij facturatie. | Projectplan, deliverables en statusupdates. |
| Finance | CM MONEY AGENT | Naar LEGAL bij disputen; naar PROSPECT bij renewal/upsell. | Factuurstatus, open posten en signaleringen. |
| Retentie | CM PROSPECT AGENT | Naar OPS bij nieuwe scope; naar LEGAL bij nieuwe dealterms. | Renewal- of upsellvoorstel. |

## 3. Deal Lifecycle

| Fase | Eigenaar Agent | Handoff moment | Output |
| --- | --- | --- | --- |
| Opportunity | CM PROSPECT AGENT | Naar LEGAL bij concrete dealstructuur. | Dealbriefing. |
| Juridische review | CM LEGAL AGENT | Naar MONEY voor finance checks. | Risicoanalyse, contractpunten en rechtencheck. |
| Financiële check | CM MONEY AGENT | Naar LEGAL bij afwijkingen of contractimpact. | Bedragencheck, betaalvoorwaarden en forecastimpact. |
| Goedkeuring | CM CONTROL AGENT / Sophia | Naar OPS na akkoord. | Besluit, voorwaarden en prioriteit. |
| Uitvoering | CM OPS AGENT | Naar SOCIAL voor communicatie; naar MONEY voor facturatie. | Deliveryplan. |

## 4. Content Lifecycle

| Fase | Eigenaar Agent | Handoff moment | Output |
| --- | --- | --- | --- |
| Briefing | CM OPS AGENT | Naar SOCIAL bij contentbehoefte. | Contentbriefing. |
| Productie | CM SOCIAL AGENT | Naar LEGAL bij claims, rechten of gevoelige context. | Contentconcept. |
| Review | CM LEGAL AGENT / CM CONTROL AGENT | Naar mens/Sophia bij risico of publicatie-impact. | Red flags en goedkeuringsadvies. |
| Publicatie | Menselijke goedkeuring + CM SOCIAL AGENT | Naar PROSPECT bij leadreacties. | Gepubliceerde content en performance-signalen. |
| Commerciële opvolging | CM PROSPECT AGENT | Naar LEGAL/OPS bij deal of project. | Leadopvolging. |

## 5. Finance Lifecycle

| Fase | Eigenaar Agent | Handoff moment | Output |
| --- | --- | --- | --- |
| Financiële trigger | CM OPS AGENT / CM LEGAL AGENT | Naar MONEY bij bedragen, facturatie of betaalcondities. | Finance briefing. |
| Administratieve controle | CM MONEY AGENT | Naar LEGAL bij contractafwijking. | Moneybird-status, BTW-check, open posten. |
| Cashflowbewaking | CM MONEY AGENT | Naar CONTROL bij prioriteits- of cashflowrisico. | Cashflow alert en forecast. |
| Dispuut of afwijking | CM LEGAL AGENT | Naar MONEY na juridisch advies. | Juridisch standpunt en vervolgactie. |
| Commerciële kans | CM MONEY AGENT | Naar PROSPECT bij renewal/upsell. | Finance signalering. |
