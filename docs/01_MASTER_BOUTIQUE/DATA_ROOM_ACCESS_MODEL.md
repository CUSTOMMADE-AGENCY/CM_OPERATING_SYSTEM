# Data Room Access Model

## Doel

Beheer toegang tot gevoelige dealmaterialen via gefaseerde disclosure.

## Toegangsniveaus

| Niveau | Content | Vereiste |
|---|---|---|
| Teaser | Niet-vertrouwelijke samenvatting | Interne approval |
| Level 1 | Geredigeerd financieel en catalogusoverzicht | Buyer-kwalificatie en NDA |
| Level 2 | Gedetailleerde statements, contracten en metadata | Goedgekeurde Buyer en deal lead-approval |
| Level 3 | Zeer gevoelige juridische, fiscale of closing-documenten | Strikte need-to-know approval |

## Regels

- Deel nooit getekende contracten of volledige statements zonder juiste approval.
- Registreer per Buyer welke toegang is verleend, wanneer en door wie.
- Trek toegang in wanneer de Buyer afhaakt, deadlines mist of disclosure-regels schendt.
- Gebruik watermarks en access logs waar mogelijk.

## Kwaliteitschecks

- Geen vertrouwelijke data zonder juiste approval of NDA.
- Elke status, eigenaar en eerstvolgende actie is vastgelegd in ClickUp.
- Deliverables en bronbestanden staan in de juiste Google Drive-map.

## Opslag- en toolgrenzen

- GitHub bewaart deze Workflow, Governance, SOP en systeemdocumentatie.
- Google Drive bewaart live clientmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.
