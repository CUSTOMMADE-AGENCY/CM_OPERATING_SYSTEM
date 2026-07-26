# TEMPLATE_GAP_LOG_SPEC
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Owner Agent

CM VAULT AGENT

## Support Agents

CM CONTROL AGENT

## Doel

Specificatie voor het vastleggen van template-gaps, ontbrekende velden en situaties waarin een bestaande template niet volledig past.

## Wanneer gebruiken

Gebruik dit log wanneer een agent een template wil gebruiken maar verplichte velden mist, de workflow niet past, of een nieuw bestand nodig lijkt.

## Niet gebruiken voor

- Clientdata.
- Vertrouwelijke details.
- Ad-hoc eigen formats zonder governancebesluit.
- Getekende documenten of operationele exports.

## Verplichte velden

| Veld | Doel | Verplicht | Opmerking |
| --- | --- | --- | --- |
| Gap ID | Unieke referentie | Ja | Bijvoorbeeld GAP-YYYYMMDD-001 |
| Template naam | Betrokken template | Ja | Exacte naam uit index |
| Workflow | Gekoppelde workflow | Ja | Korte verwijzing |
| Gap omschrijving | Wat ontbreekt of wringt | Ja | Feitelijk en kort |
| Impact | Operationeel risico | Ja | Laag, middel, hoog |
| Tijdelijke oplossing | Toegestane workaround | Nee | Geen parallel format introduceren |
| Owner Agent | Wie beoordeelt | Ja | Bestaande rol gebruiken |
| Besluit | Aanpassen, afwijzen, later reviewen | Ja | Na review invullen |
| Status | Open, in review, opgelost, afgewezen | Ja | Geen template-status vervangen |
| Reviewdatum | Wanneer beoordeeld wordt | Ja | ISO-datum aanbevolen |

## Proces

1. Controleer eerst de template-index.
2. Gebruik de best passende template.
3. Leg de gap vast in het operationele TEMPLATE_GAP_LOG.
4. Verwijs in TEMPLATE_USAGE_REPORT naar de gap.
5. Verbeter de GitHub-specificatie pas na governance-review.

## Kwaliteitscheck

- Eén gap per regel of item.
- Geen gevoelige case-inhoud.
- Concrete impact en gewenste aanpassing.
- Geen nieuwe template of eigen format zonder approval.

## Status

ACTIVE

## Reviewritme

Maandelijks bij actieve cases en ieder kwartaal als onderdeel van template review.
