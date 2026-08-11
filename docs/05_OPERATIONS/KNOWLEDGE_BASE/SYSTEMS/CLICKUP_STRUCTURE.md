# ClickUp Structure

> Canonieke structuur — besluit 2026-08-07: de **compacte `CUSTOMMADE AGENCY`-structuur (B)**.
> De eerdere 6-folder `CM`-structuur is gedeprecate. De gedetailleerde execution-mapping
> (folders, lijsten, statussen, custom fields, approval gates, handoffs) staat in
> `CLICKUP_MAPPING.md`, hoofdstuk "Compacte ClickUp-mapping voor CM_OS agents".

## Doel

Definieer hoe execution, Pipeline en taken worden georganiseerd binnen één centrale CM Space.

## Centrale Space

ClickUp gebruikt exact één centrale Space:

`CUSTOMMADE AGENCY`

Er worden geen aparte Spaces aangemaakt. Business lanes bestaan als folders binnen deze ene Space.

```text
CUSTOMMADE AGENCY
├── PIPELINE
├── CLIENTS
├── OPERATIONS
├── DEAL DESK
└── MARKETING
```

## Folderdoel en eigenaar-agent

| Folder | Doel | Eigenaar-agent |
|---|---|---|
| `PIPELINE` | Leads, partnerships, sponsorships, brand deals, product placement, sampling, event-activaties, endorsements en nieuwe zakelijke klanten. | CM PROSPECT AGENT |
| `CLIENTS` | Client- én artist-delivery: onboarding, artist management, planning, roadmaps, releases, maandcycli, meeting follow-up en operationele uitvoering. | CM OPS AGENT |
| `OPERATIONS` | Governance, approvals, escalaties, flow-/systeemissues, operationele blokkades, SOP's, templates, automations en uitvoerende finance-taken. | CM CONTROL · CM MONEY · CM FLOW · CM VAULT |
| `DEAL DESK` | Contracten, NDA's, rights/deal reviews, publishing/licensing/sync en onderhandelingsdossiers. | CM LEGAL AGENT |
| `MARKETING` | Content, website, SEO, persberichten, media outreach, social en publicatieplanning. | CM SOCIAL AGENT |

> Artist onboarding/management heeft **geen aparte folder**; het valt als lijsten onder
> `CLIENTS` (`Artist Onboarding`, `Artist Roadmaps`, `Monthly Management`, …).

## Regels

- Elke actieve Workflow heeft een owner en deadline.
- Elke ClickUp-taak heeft exact één `Agent Owner` (zie folder-eigenaars hierboven).
- Taken bevatten context, source links, status en required evidence.
- Pipeline-stages moeten beslismomenten en blockers zichtbaar maken.
- Elke taak bevat een GitHub source link waar een workflow of SOP bestaat.
- Elke client-, artist- of dealtaak bevat een Google Drive folder link naar de juiste `OS_CUSTOMMADE`-map: artists onder `02_ARTIST_MANAGEMENT`, commerciële relaties onder `03_CLIENTS`, deals onder `04_DEALS`.
- Nieuwe business lanes worden eerst als folder of list in `CUSTOMMADE AGENCY` ingericht; een nieuwe Space vereist expliciete governancewijziging.

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
