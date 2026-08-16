# AI Agents

## Doel

Definieer veilig gebruik van AI agents binnen het operating system.

## Toegestaan gebruik

- SOP-verbeteringen opstellen op basis van niet-vertrouwelijke inputs.
- Interne procesnotities samenvatten.
- Task checklists maken op basis van goedgekeurde Workflows.
- Documentatie controleren op consistentie.

## Verboden gebruik

- Vertrouwelijke clientdata buiten goedgekeurde systemen verwerken.
- Juridische, financiële of commerciële commitments namens CM doen.
- AI-output zonder menselijke review als operationeel beleid gebruiken.

## Opslag- en toolgrenzen

- GitHub bewaart deze Workflow, Governance, SOP en systeemdocumentatie.
- Google Drive bewaart live clientmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.

## Gmail — verplichte CM-brede communicatiestandaard

Alle CM-agents die Gmail lezen, e-mailconcepten voorbereiden of Gmail-workflows aansturen volgen verplicht:

`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/06_GMAIL_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md`

Deze centrale standaard bevat zowel de technische Gmail-regels als de inhoudelijke communicatieregels. Per-agent parallelle communicatiestandaarden zijn niet toegestaan.

Minimale harde regels:

- `info@custommade.agency` is de standaardmailbox voor CM-communicatie.
- Bestaande correspondentie wordt als echte reply in dezelfde Gmail-thread opgesteld met het originele Gmail `message_id` / `reply_message_id`.
- Een conceptantwoord op een bestaande mail mag niet als losse nieuwe e-mail worden aangemaakt.
- Een nieuwe e-mail wordt alleen aangemaakt wanneer Sophia dit expliciet vraagt of aantoonbaar geen relevante bestaande thread bestaat.
- Iedere CM-draft gebruikt exact de centrale goedgekeurde Gmail-handtekening; agents mogen deze niet herschrijven, inkorten, uitbreiden of opnieuw ontwerpen.
- Een verzoek om een concept/draft is geen verzendopdracht. Externe verzending blijft onder de toepasselijke approval gates.
- De relevante thread-context wordt gelezen vóór inhoudelijke drafting.
- Inhoudelijke autoriteit volgt de Owner Agent uit de Agent Responsibility Matrix.
- Feiten, bedragen, percentages, rights, contractvoorwaarden en commitments worden gecontroleerd tegen de geldige Source of Truth; bij twijfel geldt `REVIEW_REQUIRED`.
- Artistcommunicatie mag warmer, persoonlijker en meer betrokken zijn dan overige zakelijke CM-communicatie, zonder zakelijke grenzen of approval governance te verliezen.
- `Reply All`, CC/BCC en attachments worden bewust gecontroleerd; niet automatisch aannemen.
- Nieuwe afspraken of deadlines uit e-mail worden beoordeeld op noodzakelijke ClickUp-opvolging.
- De inhoudelijke communicatiestandaard geldt voorlopig alleen voor Gmail; WhatsApp, DM en LinkedIn vallen buiten scope.
- Gmail-signature-inhoud en HTML-opmaak worden operationeel in Gmail beheerd; GitHub bevat de gebruiksregel en niet een parallelle signaturekopie.
- FIERCE en Custommade Agency blijven strikt gescheiden.

Bij technisch onvermogen om threading of de exacte signature te behouden, of bij materiële inhoudelijke onzekerheid, stopt de agent vóór verzending en markeert de output voor review. Er wordt geen alternatieve eigen werkwijze geïntroduceerd.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.
