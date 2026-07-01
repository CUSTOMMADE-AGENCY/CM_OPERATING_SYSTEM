# DEAL_MEMO_TEMPLATE

## Doel

Compact dealoverzicht voor catalog sale, master resale of rights brokerage.

## Wanneer gebruiken

Bij dealkwalificatie, buyer-facing voorbereiding of interne approval.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

Master Boutique Agent

## Support Agents

Rights Agent; Deal Agent; CM CONTROL

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/DEAL_MEMO_TEMPLATE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Deal memo workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Dealtype | Catalog sale/master resale/rights brokerage | Ja | Intake |  |
| Assets | Catalogus of rechtenpakket | Ja | Rights register | Geen volledige data in template |
| Indicatieve waarde | Waarderingsrange indien beschikbaar | Nee | Valuation | Geen ingevulde bedragen |
| Risico’s | Rights/diligence risico’s | Ja | Audit |  |

## Output

- Schone, kopieerbare documentspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Deal snapshot | Kerngegevens | Ja |
| Rights summary | Rechtenstatus | Ja |
| Commercial view | Waarde en koperfit | Ja |
| Approval | Beslissingen en voorwaarden | Ja |

## Approval

Ja, vóór buyer-facing gebruik. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

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
