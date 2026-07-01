# ClickUp Structure

## Doel

Definieer hoe execution, Pipeline en taken worden georganiseerd binnen één centrale CM Space.

## Centrale Space

ClickUp gebruikt exact één centrale Space:

`CM`

Er worden geen aparte Spaces aangemaakt voor Master Boutique, Artist Management, Shared Operations of Internal Governance. Die onderdelen bestaan als folders binnen dezelfde `CM` Space.

```text
CM
├── Artist Management
├── Master Boutique / Deals
├── Clients
├── Pipeline
├── Shared Operations
└── Governance & Systems
```

## Folderdoel

- `Artist Management` — artist execution workflows, monthly management, release strategy, brandbook, partnerships en offboarding; gekoppelde Drive-dossiers staan onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.
- `Master Boutique / Deals` — catalogus-, buyer-, data-room-, LOI-, APA-, closing- en success-fee execution.
- `Clients` — merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties; geen artiestendossiers.
- `Pipeline` — pre-client/pre-deal qualification, Fit Checks, opportunity stages en parked/rejected leads.
- `Shared Operations` — gedeelde operationele taken, templates, meetings, communications en file-management execution.
- `Governance & Systems` — repository, automation, AI-agent, Drive, ClickUp en systems tasks.

## Regels

- Elke actieve Workflow heeft een owner en deadline.
- Taken bevatten context, source links, status en required evidence.
- Pipeline-stages moeten beslismomenten en blockers zichtbaar maken.
- Elke taak bevat een GitHub source link waar een workflow of SOP bestaat.
- Elke client-, artist- of dealtaak bevat een Google Drive folder link naar de juiste `OS_CUSTOMMADE`-map: artists onder `02_ARTIST_MANAGEMENT`, commerciële relaties onder `03_CLIENTS`, deals onder `04_DEALS`.
- Nieuwe business lanes worden eerst als folder of list in `CM` ingericht; een nieuwe Space vereist expliciete governancewijziging.

## Opslag- en toolgrenzen

- GitHub bewaart Workflow, Governance, SOP en systeemdocumentatie.
- Google Drive bewaart live briefings, clientmappen, dealmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.
- Moneybird blijft financiële waarheid voor facturatie, omzet, kosten, debiteuren, crediteuren en financiële rapportage.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.
