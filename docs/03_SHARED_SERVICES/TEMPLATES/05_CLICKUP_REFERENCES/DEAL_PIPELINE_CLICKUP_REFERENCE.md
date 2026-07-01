# DEAL_PIPELINE_CLICKUP_REFERENCE

## Doel

Referentiespecificatie voor dealpipeline-statussen en ClickUp-koppeling.

## Wanneer gebruiken

Bij Master Boutique pipeline, buyer outreach en dealopvolging.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

Deal Agent

## Support Agents

ClickUp Agent; Master Boutique Agent

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/05_CLICKUP_REFERENCES/DEAL_PIPELINE_CLICKUP_REFERENCE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Deal pipeline workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Deal ID | Unieke dealreferentie | Ja | ClickUp |  |
| Fase | Pipelinefase | Ja | ClickUp |  |
| Buyer/partner type | Type tegenpartij | Ja | Research | Geen vertrouwelijke namen in template |
| Next step | Volgende pipelineactie | Ja | ClickUp |  |

## Output

- Schone, kopieerbare spreadsheetspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Tab | Doel | Verplicht |
| --- | --- | --- |
| Pipeline | Dealreferenties per fase | Ja |
| Outreach | Contact- en opvolgreferenties | Ja |
| Approvals | Beslispunten en status | Ja |

## Approval

Ja, bij pipelinewijziging. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

## Kwaliteitscheck

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten.
- Duidelijke eigenaar, output en volgende stap.
- Geen parallel format als deze template past.

## Template Usage Report

Agents moeten bij gebruik vastleggen:
- welke template is geraadpleegd;
- of de template is gekopieerd;
- waar de operationele versie staat;
- welke afwijkingen of gaps zijn gevonden.

## Status

ACTIVE

Toegestane statussen: ACTIVE, DRAFT, NEEDS_REVIEW, DEPRECATED.

## Reviewritme

- Laatste review: 2026-07-01
- Volgende review: 2026-10-01
- Ritme: elk kwartaal of eerder bij governancewijziging.

## Wijzigingslog

| Datum | Wijziging | Owner |
| --- | --- | --- |
| 2026-07-01 | Eerste template-specificatie toegevoegd aan centrale CM Template Library. | Shared Services Agent |
