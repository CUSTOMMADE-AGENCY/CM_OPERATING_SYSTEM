# Agile Operating Cycle

## Purpose

Het CM Operating System moet niet alleen structuur geven, maar zichzelf blijven verbeteren wanneer tools, AI, music rights workflows, DSP-processen, klantbehoeften en dealstructuren veranderen.

Dit is geen corporate Scrum. Dit is een lean verbetercadans voor Custommade Agency: kort, praktisch, bruikbaar en direct gekoppeld aan werk dat daadwerkelijk wordt uitgevoerd.

## Principles

- Lean boven complex.
- Gebruik boven perfectie.
- Data boven gevoel.
- Automatiseren waar herhaling zit.
- Menselijke controle bij strategie, deals en legal.
- Geen tool toevoegen zonder duidelijke ROI.
- Geen workflow behouden als niemand hem gebruikt.
- Geen duplicatie.
- Geen systeemwijziging zonder documentatie.

## Weekly Operations Review

**Frequentie:** wekelijks.

**Doel:** kleine fricties snel zichtbaar maken en oplossen voordat ze structurele vertraging veroorzaken.

**Vragen:**

- Welke taken blijven liggen?
- Welke templates of workflows worden niet gebruikt?
- Waar vraagt iemand steeds opnieuw uitleg?
- Welke klant, release, pitch, rights-case of deal loopt risico?
- Welke handmatige taak kwam deze week meerdere keren terug?
- Welke kleine verbetering kan direct worden uitgevoerd?

**Output:**

- Maximaal drie concrete verbeteracties.
- Update van relevante taken, owners of statussen.
- Nieuwe automation-ideeën naar `AUTOMATION_BACKLOG.md`.
- Geen grote systeemwijzigingen zonder change control.

## Monthly System Review

**Frequentie:** maandelijks.

**Doel:** controleren of het CM Operating System nog klopt met het dagelijkse gebruik.

**Vragen:**

- Welke workflows zijn gebruikt en welke niet?
- Welke templates besparen tijd en welke blijven leeg?
- Waar ontstaat verwarring in Drive, ClickUp, CRM, rights-admin of projectstructuur?
- Welke klantvragen of dealtypes vragen om een nieuw template, SOP of playbook?
- Welke data laat zien dat een workflow te traag, dubbel of onduidelijk is?
- Welke automatisering zou structureel tijd besparen?

**Output:**

- Kleine updates aan templates, workflows of governance-documenten.
- Besluiten naar `DECISION_LOG.md` wanneer ze systeemimpact hebben.
- Automation-kandidaten naar `AUTOMATION_BACKLOG.md`.
- GitHub issue of pull request wanneer documentatie moet wijzigen.

## Quarterly Tool Review

**Frequentie:** elk kwartaal.

**Doel:** bepalen of CM nog de juiste tools gebruikt en of nieuwe AI-, rights-, finance-, CRM- of automation-tools aantoonbare waarde hebben.

**Vragen:**

- Welke tools worden actief gebruikt?
- Welke tools kosten geld maar leveren weinig op?
- Welke nieuwe tools verdienen een WATCH- of TEST-status?
- Welke bestaande tool moet worden vervangen, samengevoegd of verwijderd?
- Welke tool kan omzet, snelheid, kwaliteit of foutreductie verbeteren?
- Welke risico's bestaan rond data, privacy, rechten, contracten of klantinformatie?

**Evaluatiecriteria:**

- ROI.
- Tijdsbesparing.
- Gebruiksgemak.
- Integratie met bestaande stack.
- Dataveiligheid en legal fit.
- Kosten.
- Schaalbaarheid.
- Menselijke controle op strategische, commerciële en juridische keuzes.

**Output:**

- Toolstatus bijwerken in `AI_TOOL_RADAR.md`.
- Keep / test / replace / reject-besluit per relevante tool.
- Nieuwe automatiseringen naar `AUTOMATION_BACKLOG.md`.
- Geen adoptie zonder duidelijke use case, owner, kosteninschatting en reviewdatum.

## Bi-Annual Strategy Review

**Frequentie:** twee keer per jaar.

**Doel:** controleren of het operating system nog aansluit op de strategie, services, klanten, dealstructuren en groeirichting van Custommade Agency.

**Vragen:**

- Welke services leveren de meeste marge, impact en strategische waarde op?
- Welke services kosten structureel te veel tijd?
- Welke klanttypes passen wel of niet bij CM?
- Welke dealstructuren komen vaker terug en moeten worden gestandaardiseerd?
- Welke music rights, DSP- of royaltyprocessen zijn veranderd?
- Welke diensten moeten worden geproductized, aangescherpt of gestopt?
- Welke AI- of automation-kansen veranderen de manier van werken wezenlijk?

**Output:**

- Update van serviceportfolio, pricing, klantcriteria of roadmap.
- Nieuwe of aangepaste playbooks waar nodig.
- Strategische besluiten naar `DECISION_LOG.md`.
- Tool- en automation-prioriteiten herijken.

## Change Control Rules

Elke structurele wijziging aan het CM Operating System moet traceerbaar zijn.

**Regels:**

- Gebruik een GitHub issue of duidelijke taak voor elk wijzigingsvoorstel met systeemimpact.
- Gebruik een pull request voor documentatie- of structuurwijzigingen.
- Leg de reden, impact, owner en reviewdatum vast bij belangrijke besluiten.
- Update bestaande documentatie direct wanneer een workflow, template of tool verandert.
- Verwijder of archiveer oude workflows wanneer een nieuwe versie live gaat.
- Voeg geen duplicaatdocumenten, duplicaatvelden of parallelle processen toe.
- Voeg geen tool toe zonder duidelijke use case, ROI, owner en reviewmoment.
- Laat strategie, deals en legal altijd door een mens controleren.

## Decision Log Rules

Het decision log is de vaste plek voor systeemkeuzes met blijvende impact.

**Vastleggen in `DECISION_LOG.md` wanneer:**

- Een workflow, tool, template, governance-regel of proces structureel verandert.
- Een tool wordt geadopteerd, vervangen of afgewezen.
- Een service-, klant-, deal- of rights-aanpak verandert.
- Een beslissing later geëvalueerd moet worden.

**Minimale velden:**

- Date.
- Decision.
- Why.
- Alternatives.
- Impact.
- Owner.
- Review date.

## AI & Tool Radar Rules

De AI & Tool Radar voorkomt losse tool-experimenten zonder richting.

**Regels:**

- Alle relevante tools worden bijgehouden in `AI_TOOL_RADAR.md`.
- Elke tool heeft één categorie, status, owner en reviewdatum.
- Alleen tools met duidelijke use case en ROI mogen naar TEST of ADOPT.
- WATCH betekent volgen, niet implementeren.
- TEST betekent beperkt experiment met duidelijke succescriteria.
- ADOPT betekent opgenomen in de officiële CM-stack.
- REJECT betekent bewust niet gebruiken.
- REPLACE betekent dat een bestaande tool wordt vervangen of uitgefaseerd.
- Tools voor strategie, deals, legal of rights mogen nooit zonder menselijke controle beslissingen nemen.

## Automation Backlog Rules

De automation backlog verzamelt herhalend werk dat slimmer, sneller of foutlozer kan.

**Regels:**

- Elke automation start als probleem, niet als toolwens.
- Voeg alleen items toe wanneer er herhaling, foutgevoeligheid of duidelijke tijdswinst is.
- Elke automation heeft een owner, status en prioriteit.
- Automatiseringen worden eerst klein getest voordat ze ACTIVE worden.
- Automatiseringen die niet meer gebruikt worden krijgen ARCHIVED.
- Automatisering mag geen onzichtbare risico's creëren rond rechten, geld, contracten of klantcommunicatie.

## CM Regel

Een systeem is alleen goed als het gebruikt wordt.

Als iets niet gebruikt wordt: versimpelen, automatiseren of verwijderen.
