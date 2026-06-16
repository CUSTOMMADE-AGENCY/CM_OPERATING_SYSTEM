# Drive Inventory Template

## Doel

Gebruik dit template om per bestaande Google Drive-map vast te leggen wat de huidige situatie is, wie eigenaar is, waar de map naartoe moet, welke actie nodig is, welk risico geldt en wat de status is. Vul dit template in vóór daadwerkelijke Drive-migratie.

## Invulinstructie

- Eén regel per huidige map.
- Gebruik exacte mapnamen en doelpaden.
- Zet onduidelijke, gemengde, eigenaarloze of risicovolle mappen op `HOLD`.
- Plaats geen vertrouwelijke clientinhoud, contractinhoud of financiële exports in GitHub.
- Gebruik Drive IDs en metadata alleen als inventarisverwijzing; Drive blijft opslag, GitHub blijft governance.

## Statuswaarden

Gebruik één van deze statussen:

- `OPEN`
- `IN_REVIEW`
- `HOLD`
- `AKKOORD`
- `GEMIGREERD`
- `UITGESLOTEN`
- `GEARCHIVEERD`

## Actiewaarden

Gebruik één van deze acties:

- `BEHOUDEN`
- `VERPLAATSEN`
- `SAMENVOEGEN`
- `ARCHIVEREN`
- `UITSLUITEN`
- `HOLD`

## Risicowaarden

Gebruik één van deze risiconiveaus:

- `LAAG`
- `MIDDEL`
- `HOOG`

## Inventaristabel

| # | Huidige map | Eigenaar | Nieuwe locatie | Actie | Risico | Status |
|---:|---|---|---|---|---|---|
| 1 | `[huidige mapnaam + huidig pad]` | `[naam owner]` | `OS_CUSTOMMADE/[root]/[doelmap]` | `[BEHOUDEN / VERPLAATSEN / SAMENVOEGEN / ARCHIVEREN / UITSLUITEN / HOLD]` | `[LAAG / MIDDEL / HOOG] — [korte reden]` | `[OPEN / IN_REVIEW / HOLD / AKKOORD / GEMIGREERD / UITGESLOTEN / GEARCHIVEERD]` |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |

## Uitgebreide velden voor review

Gebruik onderstaande velden wanneer een map complex, risicovol, gedeeld, juridisch, financieel, gemengd of mogelijk duplicatief is.

| Veld | Invullen |
|---|---|
| Drive ID |  |
| Huidige root |  |
| Classificatie | `[artist / client / deal / operations / legal / finance / marketing / content / admin / archive / shim / FIERCE / onbekend / gemengd]` |
| Beslisser |  |
| Laatste activiteit | `[actief / slapend / onbekend / archiveerbaar]` |
| Linkafhankelijkheden | `[ClickUp / Gmail / Drive shortcut / Google Doc / GitHub / AI-agent / automation / extern / geen bekend]` |
| Duplicaatcheck | `[geen duplicaat / mogelijk duplicaat / confirmed duplicaat]` |
| Toegangscontrole nodig | `[ja / nee]` |
| Vertrouwelijkheid | `[normaal / intern / vertrouwelijk / legal / finance / client-sensitive]` |
| Moneybird-check nodig | `[ja / nee / n.v.t.]` |
| Legal-review nodig | `[ja / nee / n.v.t.]` |
| FIERCE-check | `[geen FIERCE / mogelijk FIERCE / FIERCE uitgesloten]` |
| HOLD-reden |  |
| Migratie-opmerking |  |

## Voorbeeldregel

| # | Huidige map | Eigenaar | Nieuwe locatie | Actie | Risico | Status |
|---:|---|---|---|---|---|---|
| 1 | `Legacy Drive/Artist/CALSEY` | `Artist Management owner` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/CALSEY` | `VERPLAATSEN` | `HOOG — actieve links en mogelijke contractbestanden eerst controleren` | `IN_REVIEW` |

GEREED VOOR INVENTARISATIE
