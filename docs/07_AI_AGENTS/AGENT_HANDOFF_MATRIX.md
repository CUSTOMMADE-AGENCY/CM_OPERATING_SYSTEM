# Agent Handoff Matrix

## Doel

Dit document legt vast wanneer een dossier, taak, document of beslissing binnen CM_OS van de ene agent naar de andere agent gaat. Een handoff is verplicht zodra de volgende actie buiten het eigenaarschap, de bevoegdheid of de governance-scope van de huidige agent valt.

## CM_OS governance regels voor handoffs

- Eén dossier, taak, document of beslissing heeft op elk moment exact één eigenaar-agent.
- De verzendende agent blijft eigenaar totdat de ontvangende agent de handoff accepteert.
- De ontvangende agent accepteert alleen handoffs met de vereiste output, documenten, context, risico’s en gevraagde approval gate.
- Agents bereiden voor, analyseren, structureren en adviseren; mensen keuren externe communicatie, commerciële commitments, juridische standpunten, financiële commitments en publicaties goed.
- GitHub is Source Of Truth voor governance, agentmatrices, playbooks en CM_OS-documentatie.
- ClickUp is Source Of Truth voor uitvoering, planning, status en delivery.
- Drive bewaart operationele bijlagen, bronbestanden, contractversies en clientdocumentatie.
- Moneybird is Source Of Truth voor facturen, betalingen, BTW, Open Posten, cashflow en financiële documenten.
- Gmail bewaart correspondentiecontext.
- Bij twijfel over routing, prioriteit, kwaliteit, eigenaarschap of conflict beslist **CM CONTROL AGENT**.
- Juridische, financiële, contractuele, privacy- en reputatierisico’s worden altijd gemarkeerd en waar nodig aan een menselijke owner of Sophia voorgelegd.

# 1. AGENT HANDOFF MATRIX

| Van Agent | Naar Agent | Trigger | Vereiste Output | Vereiste Documenten | Approval Nodig | Resultaat |
| --- | --- | --- | --- | --- | --- | --- |
| CM PROSPECT AGENT | CM LEGAL AGENT | Een lead, opportunity, sponsor-, brand-, licensing-, sync- of partnershipkans wordt concreet genoeg voor NDA, term sheet, contract, rechtenvraag, dealstructuur of commerciële toezegging. | Dealbriefing met partijen, contactpersonen, voorstel, commerciële voorwaarden, beoogde dealstructuur, risico’s, afhankelijkheden en gewenste juridische beoordeling. | Leadfiche, pipelinecontext, correspondentie, voorstel/conceptterms, assets, rechteninformatie, relevante deadlines en eerdere afspraken. | Ja, bij juridische interpretatie, onderhandeling, externe commitment of afwijkende voorwaarden. | LEGAL neemt het dossier over voor NDA-, contract-, rechten-, compliance- of dealreview en bepaalt juridische voorwaarden voor vervolgstappen. |
| CM LEGAL AGENT | CM OPS AGENT | Contract, NDA, rechtenkader, dealreview of juridische voorwaarden zijn voldoende beoordeeld om operationeel uit te voeren. | Uitvoeringsbriefing met scope, deliverables, verplichtingen, deadlines, beperkingen, risico’s, approved claims en escalatiepunten. | Contract/NDA, legal review, onderhandelnotities, rechtenoverzicht, deliverablelijst, approvalnotitie en relevante correspondentie. | Ja, bij ondertekening, externe verplichting, clientcommitment of juridisch risico. | OPS zet het dossier om naar uitvoering, planning, ClickUp-taken en deliverybewaking. |
| CM OPS AGENT | CM SOCIAL AGENT | Een project, clientcase, artistmoment, deliverable of campagne vraagt om content, social post, websitecopy, nieuwsbrief, case study of persbericht. | Contentbriefing met doel, doelgroep, kernboodschap, kanaal, timing, assets, claims, publicatierisico’s en gewenste call-to-action. | Projectbrief, goedgekeurde boodschap, assets, beeld-/muziekrechten, planning, relevante correspondentie en eventuele legal voorwaarden. | Ja, vóór publicatie of verzending; extra approval bij claims, reputatie- of juridische impact. | SOCIAL creëert conceptcontent en routeert deze naar review en publicatiegoedkeuring. |
| CM OPS AGENT | CM MONEY AGENT | Uitvoering veroorzaakt facturatie, inkoop, budgetbewaking, betaalstatus, cashflowimpact, revenue share, commission tracking of financiële controle. | Finance briefing met bedrag, partij, kostenplaats/projectcode, factuurmoment, deadline, betaalafspraak, contractreferentie en deliverystatus. | Contract/dealreferentie, offerte, PO indien aanwezig, factuurdata, deliverablestatus, projectcode, BTW-context en relevante correspondentie. | Ja, bij financiële commitment, betalingsafspraak, prijsafwijking of cashflowimpact. | MONEY verwerkt, controleert of monitort de financiële status in Moneybird en signaleert blokkades. |
| CM OPS AGENT | CM PROSPECT AGENT | Tijdens uitvoering ontstaat een renewalkans, upsellkans, nieuwe scope, referral, commerciële vraag of pipelinekans. | Commerciële signalering met klant, behoefte, context, mogelijke waarde, timing, delivery-inzichten en voorgestelde opvolging. | Projectstatus, clientfeedback, deliverables, correspondentie, scope-overzicht, performance-informatie en eventuele openstaande vragen. | Nee, tenzij een nieuwe commerciële toezegging, prijsindicatie of externe outreach wordt voorgesteld. | PROSPECT kwalificeert de kans en verwerkt deze in outreach, proposal of pipeline-opvolging. |
| CM MONEY AGENT | CM LEGAL AGENT | Financiële afwijking raakt contractvoorwaarden, betalingstermijnen, revenue share, commission, royalty, rechten, disputen, incasso of claimpositie. | Finance issue memo met afwijking, bedragen, data, betrokken partijen, contractuele vraag, risico-inschatting en gewenste juridische beoordeling. | Moneybird-export, facturen, betaalhistorie, contractreferentie, correspondentie, berekening, open posten en relevante terms. | Ja, bij juridisch standpunt, claim, betalingsregeling, dispuut of contractwijziging. | LEGAL beoordeelt contractpositie en adviseert juridische vervolgstap, risico’s en communicatievoorwaarden. |
| CM MONEY AGENT | CM PROSPECT AGENT | Finance signaleert renewalkans, upsellkans, betalingsgedrag met commerciële impact, aflopend contract, forecastkans of openstaande commerciële afspraak. | Commerciële finance signalering met klant, waarde, timing, historische omzet, openstaande afspraak, kansinschatting en aanbevolen opvolging. | Moneybird-overzicht, historische facturen, contract-/dealreferentie, betaalstatus, pipelinecontext en relevante correspondentie. | Nee, tenzij nieuw commercieel commitment, betalingsafspraak of prijsvoorstel wordt gedaan. | PROSPECT kwalificeert de commerciële opvolging en zet pipeline-, renewal- of upsellactie uit. |
| CM SOCIAL AGENT | CM PROSPECT AGENT | Contentinteractie, websitelead, mediarespons, nieuwsbriefreactie, social engagement of campagneperformance wijst op commerciële kans. | Lead signalering met bron, contact, interesse, contentcontext, gedragssignaal, urgentie en voorgestelde opvolging. | Analytics/screenshot, interactie, contactdata, campagnecontext, contentlink, consentstatus indien relevant en notities. | Nee, tenzij externe commerciële toezegging of outreach met gevoelige claims nodig is. | PROSPECT kwalificeert de lead en start outreach, pipelineopvolging of voorstelvoorbereiding. |
| CM VAULT AGENT | CM CONTROL AGENT | Bronstructuur, template, SOP, playbook, Knowledge Base, archiefwijziging of documentstandaard heeft governance-impact of conflicteert met bestaande waarheid. | Governance wijzigingsvoorstel met reden, scope, impact, betrokken bronnen, risico’s, afhankelijkheden en rollback-optie. | Huidige bron, voorgestelde wijziging, changelog, betrokken documenten, impactanalyse, versiecontext en eventuele conflictnotities. | Ja, bij governance-impact, verwijdering, bronvervanging, structuurwijziging of conflictsituatie. | CONTROL beslist routing, prioriteit, approval gate en eventuele escalatie naar menselijke owner of Sophia. |
| CM FLOW AGENT | CM CONTROL AGENT | Automatisering, Make scenario, ClickUp automation, GitHub workflow, webhook, API of integratie wijzigt data, status, routing, notificaties of externe systemen. | Automatiseringsvoorstel met trigger, actie, data-impact, systeemimpact, risico’s, testplan, monitoring en rollbackplan. | Procesflow, systeemlijst, API-/webhookspecificatie, mapping, testresultaten, loggingplan, rollbackplan en governance-impactanalyse. | Ja, bij data-, status-, routing-, repository-, finance-, legal- of systeemimpact. | CONTROL keurt governance, prioriteit en risico’s; daarna kan FLOW bouwen, testen, monitoren of terugdraaien. |
| CM CONTROL AGENT | CM OPS AGENT | Besluit, prioriteit, escalatie-uitkomst of governancekader vraagt operationele uitvoering. | Uitvoeringsopdracht met eigenaar, prioriteit, scope, deadline, beperkingen, beslissingen en kwaliteitslat. | Besluitnotitie, prioriteitenlijst, relevante context, governancevoorwaarden en afhankelijkheden. | Nee, tenzij de uitvoering leidt tot externe commitment of scopewijziging. | OPS plant en voert het projectmatig uit in ClickUp. |
| CM CONTROL AGENT | CM VAULT AGENT | Governancebesluit vraagt documentatie, bronstructuur, indexering, template-, SOP-, playbook- of Knowledge Base-update. | Documentatieopdracht met gewenste wijziging, locatie, versie, bronstatus, deadline en changelogvereiste. | Besluitnotitie, oude bron, nieuwe bron, changelogvereisten, betrokken documenten en impactnotities. | Nee, tenzij verwijdering, bronvervanging of governancewijziging met impact plaatsvindt. | VAULT werkt Source Of Truth, index en archiefstructuur bij. |
| CM LEGAL AGENT | CM MONEY AGENT | Dealterms bevatten facturatie, voorschotten, revenue share, commission, royalty, BTW-relevante afspraken of betaalcondities. | Financiële legal briefing met contractuele bedragen, timing, voorwaarden, uitzonderingen, risico’s en benodigde Moneybird-inrichting. | Contract, term sheet, betalingsschema, revenue share-afspraken, BTW-context, factuurvereisten en relevante legal notities. | Ja, bij financiële commitment of afwijkende betalingsafspraak. | MONEY richt controle, facturatie, forecast, open-postenbewaking of revenue-sharecontrole in. |
| CM SOCIAL AGENT | CM LEGAL AGENT | Content bevat claims, derde partijen, beeld-/muziekrechten, endorsements, product placement, testimonials, privacydata of gevoelige juridische context. | Legal content review briefing met concept, claimlijst, publicatiedoel, rechtenstatus, risico’s en concrete reviewvragen. | Conceptcopy, assets, bronlinks, rechteninformatie, publicatieplanning, kanaalcontext en approvals tot nu toe. | Ja, vóór publicatie bij juridische, reputatie-, privacy- of rechtenimpact. | LEGAL geeft red flags, voorwaarden, disclaimers of blokkades voor publicatie. |
| CM OPS AGENT | CM CONTROL AGENT | Scopewijziging, prioriteitsconflict, resourceconflict, deliveryrisico, kwaliteitsissue of workflowconflict ontstaat. | Escalatiememo met probleem, impact, opties, aanbeveling, deadline en gevraagde beslissing. | Projectplan, ClickUp-status, correspondentie, planning, risicolog, afhankelijkheden en relevante outputs. | Ja, bij business-impact, client-impact, prioriteitswijziging of escalatie naar menselijke owner. | CONTROL beslist prioriteit, routing, eigenaarschap, oplossing of escalatie. |

# 2. LEAD LIFECYCLE

Lead → Prospect → Legal → Ops → Social → Money

| Stap | Eigenaar | Input | Output | Approval gate |
| --- | --- | --- | --- | --- |
| Lead | CM SOCIAL AGENT of CM PROSPECT AGENT | Websitelead, social interactie, referral, inbound e-mail, campagne-response of netwerkintro. | Leadfiche met bron, contactdata, context, interesse, urgentie en eerste kwalificatie. | Menselijke approval als externe opvolging namens CM gevoelige claims of commerciële toezegging bevat. |
| Prospect | CM PROSPECT AGENT | Leadfiche, contactgeschiedenis, commerciële behoefte, pipelinecontext en relevante assets. | Gekwalificeerde prospect, opvolgstrategie, conceptvoorstel of dealbriefing. | Approval bij outreach met commerciële toezegging, prijsindicatie, onderhandeling of proposal richting externe partij. |
| Legal | CM LEGAL AGENT | Dealbriefing, conceptterms, NDA-/contractvraag, rechteninformatie en correspondentie. | Legal review, risicopunten, contractvoorwaarden, go/no-go-advies of goedgekeurde legal briefing. | Menselijke/Sophia approval bij juridische interpretatie, ondertekening, contractwijziging, rechtenclaim of hoog risico. |
| Ops | CM OPS AGENT | Goedgekeurde legal briefing, scope, deliverables, deadlines, contactpersonen en beperkingen. | Projectplan, ClickUp-structuur, onboardingbriefing, deliverableplanning en escalatiepunten. | CM CONTROL of menselijke approval bij scope-, prioriteits-, resource- of clientcommitment-impact. |
| Social | CM SOCIAL AGENT | Projectbrief, boodschap, assets, rechtenstatus, kanaalkeuze en planning. | Conceptcontent, publicatieplanning, distributievoorstel en performance-trackingplan. | Menselijke approval vóór publicatie/verzending; LEGAL approval bij claims, rechten of reputatierisico. |
| Money | CM MONEY AGENT | Contract/dealreferentie, factuurmoment, bedrag, BTW-context, projectcode en deliverystatus. | Moneybird-inrichting, factuurstatus, open-postenbewaking, cashflowsignaal en finance reporting. | Menselijke approval bij financiële commitment, afwijkende betalingsafspraak, korting, creditnota of dispuut. |

# 3. CLIENT LIFECYCLE

Nieuwe klant → onboarding → uitvoering → facturatie → reporting → renewal

| Stap | Eigenaar | Handoff moment | Vereiste output | Approval gate |
| --- | --- | --- | --- | --- |
| Nieuwe klant | CM PROSPECT AGENT | Prospect is akkoord op voorstel of klaar voor contract-/onboardingroute. | Clientbriefing met scope, contactpersonen, doelstellingen, dealstatus en verwachtingen. | Approval bij commerciële toezegging of contractuele start. |
| Onboarding | CM OPS AGENT | Contractuele en commerciële basis is voldoende duidelijk voor projectinrichting. | Onboardingplan, ClickUp-opzet, kickoff-agenda, deliverables en communicatieafspraken. | CM CONTROL bij prioriteitsconflict; menselijke approval bij clientcommitments. |
| Uitvoering | CM OPS AGENT | Project loopt en vraagt delivery, planning, coördinatie of stakeholdermanagement. | Statusupdates, deliverables, risicolog, beslispunten en voortgang in ClickUp. | Approval bij scopewijziging, extra kosten of externe commitments. |
| Facturatie | CM MONEY AGENT | Factuurmoment, voorschot, milestone, expense, royalty, commission of revenue share is bereikt. | Moneybird-factuur, betaalstatus, open-postenoverzicht en cashflowupdate. | Approval bij bedrag, betalingsafspraak, korting, correctie of dispuut. |
| Reporting | CM OPS AGENT met input van CM MONEY AGENT en CM SOCIAL AGENT | Rapportagemoment of clientreview is gepland. | Clientreport met delivery, resultaten, finance-status, learnings en vervolgstappen. | Menselijke approval vóór verzending naar client. |
| Renewal | CM PROSPECT AGENT | Lopende klant toont verlengings-, upsell- of nieuwe-scopepotentieel. | Renewal-/upsellvoorstel, pipelineactie en eventuele legal/ops briefing. | Approval bij prijs, voorwaarden, contractwijziging of externe toezegging. |

# 4. DEAL LIFECYCLE

Opportunity → review → contract → uitvoering → facturatie → archivering

| Stap | Eigenaar | Handoff moment | Vereiste output | Approval gate |
| --- | --- | --- | --- | --- |
| Opportunity | CM PROSPECT AGENT | Kans is concreet genoeg voor review of onderhandeling. | Dealbriefing met partijen, waarde, doel, timing, risico’s en voorgestelde structuur. | Approval bij commerciële commitment of onderhandelingsmandaat. |
| Review | CM LEGAL AGENT met input van CM MONEY AGENT | Dealterms, rechten, bedragen of risico’s moeten worden beoordeeld. | Legal/finance review met red flags, voorwaarden, bedragencheck en go/no-go-advies. | Menselijke/Sophia approval bij juridische of financiële impact. |
| Contract | CM LEGAL AGENT | Terms zijn afgestemd en moeten juridisch worden vastgelegd. | Contract/NDA/term sheet, reviewnotities en ondertekenadvies. | Altijd menselijke/Sophia approval vóór ondertekening of externe verplichting. |
| Uitvoering | CM OPS AGENT | Contractuele basis is akkoord en delivery kan starten. | Projectplan, deliverableplanning, verantwoordelijkheden, deadlines en risicolog. | CM CONTROL bij scope- of prioriteitswijziging; menselijke approval bij clientcommitments. |
| Facturatie | CM MONEY AGENT | Contractueel factuurmoment of milestone is bereikt. | Moneybird-factuur, betaalstatus, forecastupdate en open-postenbewaking. | Approval bij afwijkende betaalafspraak, credit, korting of dispuut. |
| Archivering | CM VAULT AGENT | Deal is afgerond, beëindigd of moet als bron worden opgeslagen. | Compleet dealdossier met contract, correspondentie, approvals, facturen, deliverables en lessons learned. | CM CONTROL approval bij governance-impact of dossierconflict. |

# 5. CONTENT LIFECYCLE

Project → content intake → creatie → approval → publicatie → archivering

| Stap | Eigenaar | Handoff moment | Vereiste output | Approval gate |
| --- | --- | --- | --- | --- |
| Project | CM OPS AGENT | Project of clientmoment vraagt om content of communicatie. | Projectcontext, doel, timing, doelgroep, boodschap en gewenste kanalen. | Approval bij strategische of clientgevoelige communicatie. |
| Content intake | CM SOCIAL AGENT | Contentbriefing is ontvangen en moet worden vertaald naar contentproductie. | Contentplan met format, kanaal, planning, assets, claims, CTA en reviewroute. | LEGAL gate als claims, rechten, endorsements of privacydata betrokken zijn. |
| Creatie | CM SOCIAL AGENT | Intake is compleet en assets/rechtenstatus zijn duidelijk genoeg. | Conceptcopy, captions, visualspecificatie, nieuwsbrieftekst, webcopy of persconcept. | Interne review verplicht vóór externe deling. |
| Approval | CM CONTROL AGENT, menselijke owner en waar nodig CM LEGAL AGENT | Concept is klaar voor publicatiebeslissing. | Approved versie, red flags, voorwaarden, publicatie-instructies en beslisnotitie. | Menselijke approval altijd vóór publicatie; LEGAL approval bij juridische of reputatie-impact. |
| Publicatie | CM SOCIAL AGENT | Approved content mag worden gepubliceerd of verzonden. | Gepubliceerde post/pagina/mail, publicatielog en performance-tracking. | Geen extra gate als approval expliciet is vastgelegd; opnieuw approval bij wijziging na goedkeuring. |
| Archivering | CM VAULT AGENT | Content is gepubliceerd, afgewezen of vervangen. | Archiefrecord met final asset, copy, publicatielink, approvalbewijs, bronbestanden en performance-samenvatting. | CM CONTROL approval bij governance-, template- of bronstructuurwijziging. |

# 6. FINANCE LIFECYCLE

Project → factuurmoment → Moneybird → betaling → reporting → archivering

| Stap | Eigenaar | Handoff moment | Vereiste output | Approval gate |
| --- | --- | --- | --- | --- |
| Project | CM OPS AGENT | Projectplanning of delivery bevat financieel relevant moment. | Finance briefing met projectcode, contractreferentie, deliverablestatus, bedrag en timing. | Approval bij financiële commitment of afwijking van contract/voorstel. |
| Factuurmoment | CM MONEY AGENT | Milestone, voorschot, maandelijkse fee, royalty, commission, revenue share of expense is factureerbaar. | Factuurcheck met bedrag, BTW, debiteur, omschrijving, bijlagen en betaaltermijn. | Menselijke approval bij nieuwe of afwijkende factuurafspraak. |
| Moneybird | CM MONEY AGENT | Factuur, bon, betaling, open post of correctie moet worden verwerkt. | Moneybird-registratie, factuurstatus, open-postenstatus en audit trail. | Approval bij creditnota, betalingsregeling, korting, write-off of correctie met impact. |
| Betaling | CM MONEY AGENT | Betaling is ontvangen, te laat, gedeeltelijk voldaan of betwist. | Betaalstatus, cashflowupdate, open-postenactie en eventuele escalatie. | LEGAL approval bij dispuut; CONTROL/menselijke approval bij cashflow- of relatie-impact. |
| Reporting | CM MONEY AGENT met input van CM OPS AGENT en CM PROSPECT AGENT | Periodieke finance-, project-, pipeline- of managementrapportage is nodig. | Finance report met omzet, open posten, cashflow, forecast, risico’s en commerciële signalen. | Menselijke approval vóór externe of managementgevoelige rapportage. |
| Archivering | CM VAULT AGENT | Financieel dossier is afgerond of moet auditbaar worden vastgelegd. | Archiefrecord met facturen, betaalbewijzen, contractreferenties, approvals, reports en relevante correspondentie. | CM CONTROL approval bij governance-impact, bronconflict of dataclassificatievraag. |
