# MUSIC_RIGHTS_REGISTER
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Doel

Register-specificatie voor master-, publishing- en catalogusrechten.

## Wanneer gebruiken

Bij catalog sale, master resale, rights brokerage en diligencevoorbereiding.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

CM LEGAL AGENT

## Support Agents

CM PROSPECT AGENT

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/MUSIC_RIGHTS_REGISTER.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Rights register workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Track | Werk/titel identificatie | Ja | Client/metadata | Geen ingevulde tracks |
| ISRC | Recording identifier | Ja | Distributor/metadata |  |
| Master owner | Eigenaar masterrechten | Ja | Contract bewijs |  |
| Publishing split | Publishing verdeling | Ja | Split sheets |  |
| Claim status | Conflicten of open punten | Ja | Rights audit |  |

## Output

- Schone, kopieerbare registerspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Tab | Doel | Verplicht |
| --- | --- | --- |
| Catalogus | Track- en recordingdata | Ja |
| Master Rights | Eigendom en bewijs | Ja |
| Publishing Rights | Splits en publishing | Ja |
| Claims | Open claims en risico’s | Ja |

## Approval

Ja, vóór buyer-facing of diligencegebruik. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

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
| 2026-07-01 | Eerste template-specificatie toegevoegd aan centrale CM Template Library. | CM VAULT AGENT |
