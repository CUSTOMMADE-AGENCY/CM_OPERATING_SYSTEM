# CM ARCHITECTURE MAP

## DOEL

Dit document geeft één helder overzicht van hoe het CM Operating System samenwerkt over GitHub, Google Drive, ClickUp, Gmail, Make en ChatGPT / AI Agents. Het doel is om per systeem scherp te houden waar informatie thuishoort, hoe werk door het systeem beweegt en welke tool leidend is per type activiteit.

## KERNREGEL

- GitHub = HOE
- Drive = WAT
- ClickUp = DOEN
- Gmail = COMMUNICEREN
- Make = AUTOMATISEREN
- ChatGPT / AI Agents = DENKEN + VOORBEREIDEN

## SYSTEEMROLLEN

| SYSTEEM | ROL | BEWAART | BEWAART NIET | VOORBEELDEN |
|---|---|---|---|---|
| GitHub | Governance- en documentatielaag: beschrijft hoe CM werkt. | Governance, Workflows, SOPs, Playbooks, templates en as-built systeemdocumentatie. | Live clientbestanden, getekende contracten, financiële bronadministratie of losse werkexports. | SOPs, workflowbeschrijvingen, governancebesluiten, systeemmappings, template-standaarden. |
| Google Drive | Operationele bestandslaag: bewaart wat wordt gemaakt, ontvangen of opgeleverd. | Live clientmappen, getekende documenten, deliverables, finance, legal, content en archieven. | Procesgovernance als primaire waarheid, taakstatussen of automatiseringslogica. | Clientdossiers, contracten, briefings, buyer packages, rapportages, contentbestanden. |
| ClickUp | Uitvoeringslaag: organiseert wat gedaan moet worden. | Taken, owners, deadlines, Pipeline, status, checklists, blockers en taakgeschiedenis. | Definitieve documenten, contracten, governance als primaire bron of e-mailarchief. | Onboardingtaken, dealstappen, managementacties, deadlines, approvals, follow-ups. |
| Gmail | Communicatielaag: voert en bewaart correspondentie. | Communicatie, communicatietemplates, verzonden en ontvangen correspondentie. | Taakmanagement, dossierstructuur, governance of definitieve deliverable-opslag. | Clientmails, partnerupdates, outreach, approvals per e-mail, template-antwoorden. |
| Make | Automatiseringslaag: verbindt systemen en voert afgesproken handoffs uit. | Scenarios, triggers, routing, acties, syncs, foutafhandeling en automatiseringslogica. | Bronbestanden, governancebesluiten of menselijke besluitvorming. | ClickUp-taak maakt Drive-map, reminder bij deadline, Gmail- of Slack-notificatie, status-sync. |
| ChatGPT / AI Agents | Denk- en voorbereidingslaag: ondersteunt analyse, voorbereiding en gecontroleerde uitvoering. | Samenvattingen, analyses, concepten, checklists, beslissingsvoorbereiding en uitvoeringsvoorstellen. | Ongecontroleerde besluiten, vertrouwelijke data buiten goedgekeurde systemen of bindende commitments namens CM. | SOP-review, intake-samenvatting, conceptmail, dealanalyse, checklistvoorstel, documentcontrole. |

## DATAFLOW

1. Governance wordt vastgelegd in GitHub: hier staat hoe processen, workflows, SOPs, playbooks, templates en systeemafspraken werken.
2. Werkbestanden en deliverables worden opgeslagen in Google Drive: hier staat wat daadwerkelijk wordt gemaakt, ontvangen, ondertekend, gedeeld of gearchiveerd.
3. Uitvoering wordt gepland en gevolgd in ClickUp: hier staan taken, owners, deadlines, Pipeline-stappen, bewijs van voortgang en taakgeschiedenis.
4. Communicatie loopt via Gmail: hier worden client-, partner- en interne berichten verstuurd, ontvangen en teruggevonden.
5. Make automatiseert overdrachten tussen systemen: bijvoorbeeld het aanmaken van mappen, taken, reminders, notificaties en statusupdates.
6. ChatGPT / AI Agents ondersteunen denken en voorbereiding: zij analyseren context, maken concepten, signaleren ontbrekende informatie en bereiden gecontroleerde acties voor, maar vervangen geen governance of menselijke approval.

## WERKING IN DE PRAKTIJK

Een standaard workflow begint bij een goedgekeurde werkwijze in GitHub, krijgt bijbehorende bestanden in Google Drive, wordt als uitvoerbare taak of Pipeline-stap beheerd in ClickUp, wordt gecommuniceerd via Gmail en kan via Make deels automatisch worden gerouteerd. ChatGPT / AI Agents helpen bij analyse, voorbereiding, samenvatting en kwaliteitscontrole, zolang de output wordt gecontroleerd voordat deze operationeel of extern wordt gebruikt.

## PRAKTISCHE BESLISBOOM

1. **Contract?**
   - Google Drive.
   - Artist client: `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`.
   - Master Boutique: `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/04_LEGAL`.
   - Nooit GitHub.
   - Maak een follow-up task in ClickUp als er actie nodig is.

2. **Task of follow-up?**
   - ClickUp.
   - Nooit Drive als task list.
   - Nooit Gmail als task tracker.

3. **Client file of deliverable?**
   - Google Drive.
   - Artist client folder of Master Boutique folder.
   - Nooit GitHub.

4. **SOP, Workflow, Playbook of governance?**
   - GitHub.

5. **Email of extern gesprek?**
   - Gmail.
   - Belangrijke uitkomst wordt een ClickUp task of Drive document als dat nodig is.

6. **Automation idea?**
   - Eerst GitHub Automation Backlog.
   - Pas bouwen in Make na approval.

## SNELLE VOORBEELDEN

| Situatie | Waar hoort het? | Waarom |
|---|---|---|
| Getekend managementcontract | Google Drive: artist `02_CONTRACT` | Dit is een definitief contract en clientdossier, geen governance. |
| Factuur | Google Drive: finance/clientmap | Dit is financiële bronadministratie of een clientbestand. |
| Release artwork | Google Drive: artist client folder | Dit is een contentbestand/deliverable. |
| Brand Audit final | Google Drive: Master Boutique folder | Dit is een finale deliverable voor een client. |
| Follow-up met buyer | ClickUp | Dit is een actie met owner, status en deadline. |
| Nieuwe SOP | GitHub | Dit beschrijft hoe CM werkt. |
| Meeting action | ClickUp | Dit is uitvoerbaar werk dat opgevolgd moet worden. |
| Email met akkoord | Gmail; indien nodig Drive of ClickUp | Gmail bewaart de correspondentie; akkoord kan actie of documentatie nodig maken. |
| Royalty statement | Google Drive: finance/clientmap | Dit is een client- of financieel brondocument. |
| Data Room document | Google Drive: juiste client- of Master Boutique-folder | Dit is een extern deelbaar dossierdocument. |

## BESLISREGEL BIJ TWIJFEL

- Gaat het over de afgesproken werkwijze? Zet het in GitHub.
- Gaat het over een bestand, contract, deliverable of dossier? Zet het in Google Drive.
- Gaat het over actie, planning, status of verantwoordelijkheid? Zet het in ClickUp.
- Gaat het over correspondentie? Gebruik Gmail.
- Gaat het over herhaalbare overdracht tussen systemen? Automatiseer via Make.
- Gaat het over analyse, voorbereiding of conceptvorming? Gebruik ChatGPT / AI Agents met menselijke controle.
