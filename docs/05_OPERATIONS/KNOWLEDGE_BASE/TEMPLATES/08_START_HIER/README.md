# START_HIER Templates

Deze directory bevat de START_HIER-templates voor de `00_START_HIER`-startmappen onder `OS_CUSTOMMADE`. Elke template levert het oriëntatiedocument dat als startpunt in de betreffende Drive-map hoort: doel van de map, wat er wel en niet in hoort, owner, source of truth, approvalregels en eerste stappen.

Alle START_HIER-templates volgen [`../TEMPLATE_ARCHITECTUURSTANDAARD.md`](../TEMPLATE_ARCHITECTUURSTANDAARD.md) en zijn inhoudelijk afgestemd op de bijbehorende Map Specification onder `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/`.

## Templates

| Template | Drive-map | Owner Agent |
|---|---|---|
| [`START_HIER_04_DEALS_TEMPLATE.md`](START_HIER_04_DEALS_TEMPLATE.md) | `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER` | CM LEGAL AGENT |
| [`START_HIER_07_LEGAL_TEMPLATE.md`](START_HIER_07_LEGAL_TEMPLATE.md) | `07_LEGAL/00_START_HIER` | CM LEGAL AGENT |

## Governance-notitie

De leidende Drive-boom staat in `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` (production baseline). Alleen `04_DEALS` heeft in de baseline een `00_START_HIER`.

De START_HIER-templates voor `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING` en `09_CONTENT` zijn verwijderd (GAP-021, oplossing B): deze roots zijn in de baseline én in hun Map Specifications root-only, dus zij hebben geen `00_START_HIER`-startmap.

`START_HIER_07_LEGAL_TEMPLATE.md` blijft behouden op basis van de huidige `07_LEGAL.md`-spec; of `07_LEGAL/00_START_HIER` live bestaat wordt afgestemd onder GAP-017 in `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md`.
