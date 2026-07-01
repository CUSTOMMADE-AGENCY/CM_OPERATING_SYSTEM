# Drive Inventory Template

## Doel

Gebruik dit template voor de Sprint 2A Drive-inventarisatie. Vul dit document of een spreadsheetvariant per bestaande Drive-map in voordat een map wordt verplaatst, samengevoegd, behouden, uitgesloten of gearchiveerd.

Een map zonder volledig ingevulde inventarisregel mag niet worden gemigreerd.

## Invulinstructie

- Gebruik één regel per huidige map.
- Gebruik het volledige huidige pad, niet alleen de mapnaam.
- Gebruik `HOLD` wanneer owner, risico, linkstatus, classificatie of nieuwe locatie nog niet duidelijk is.
- Vul geen vertrouwelijke clientinformatie, contractinhoud of financiële details in GitHub in; verwijs alleen naar Drive item ID, mapnaam, owner en status.
- FIERCE-content wordt niet naar CM gemigreerd en moet als `UITSLUITEN` of `HOLD - FIERCE REVIEW` worden gemarkeerd.

## Statuswaarden

Gebruik één van deze statuswaarden:

| Status | Betekenis |
|---|---|
| `TE INVENTARISEREN` | Map is gevonden maar nog niet volledig beoordeeld. |
| `OWNER REVIEW` | Owner of beslisser moet inhoudelijk akkoord geven. |
| `LINK REVIEW` | Actieve links, shortcuts of automation-afhankelijkheden moeten worden gecontroleerd. |
| `LEGAL/FINANCE REVIEW` | Legal, finance, contract-, rights- of Moneybird-status moet worden beoordeeld. |
| `HOLD` | Migratie is geblokkeerd tot open punten zijn opgelost. |
| `GOEDGEKEURD VOOR MIGRATIE` | Map is compleet beoordeeld en mag in een migratiebatch. |
| `UITSLUITEN` | Map valt buiten CM-migratie, bijvoorbeeld FIERCE of niet-relevant. |
| `GEMIGREERD` | Map is daadwerkelijk verplaatst of verwerkt. |
| `GEVALIDEERD` | Post-migratie controle is afgerond. |

## Actiewaarden

Gebruik één van deze actiewaarden:

| Actie | Betekenis |
|---|---|
| `BEHOUDEN` | Map staat al goed en blijft staan. |
| `VERPLAATSEN` | Map gaat naar een nieuwe locatie binnen `OS_CUSTOMMADE`. |
| `SAMENVOEGEN` | Map wordt samengevoegd met een canonical map. |
| `ARCHIVEREN` | Map gaat naar `99_ARCHIVE` met broncontext. |
| `UITSLUITEN` | Map valt buiten CM-migratie. |
| `HOLD` | Nog geen migratieactie toegestaan. |

## Risicowaarden

Gebruik één van deze risicowaarden:

| Risico | Betekenis |
|---|---|
| `LAAG` | Weinig afhankelijkheden; owner, actie en doelpad zijn duidelijk. |
| `MIDDEL` | Beperkte afhankelijkheden of duplicaatrisico. |
| `HOOG` | Legal, finance, rights, owner-, link- of governance-risico. |
| `KRITIEK` | FIERCE-risico, vertrouwelijke toegangsfout, actieve automation-afhankelijkheid of onduidelijke juridische/financiële status. |

## Inventaristabel

| Huidige map | Eigenaar | Nieuwe locatie | Actie | Risico | Status |
|---|---|---|---|---|---|
| `[Volledig huidig Drive-pad]` | `[Drive owner + inhoudelijke owner]` | `[OS_CUSTOMMADE/... of N.v.t.]` | `[BEHOUDEN / VERPLAATSEN / SAMENVOEGEN / ARCHIVEREN / UITSLUITEN / HOLD]` | `[LAAG / MIDDEL / HOOG / KRITIEK + korte reden]` | `[TE INVENTARISEREN / OWNER REVIEW / LINK REVIEW / LEGAL/FINANCE REVIEW / HOLD / GOEDGEKEURD VOOR MIGRATIE / UITSLUITEN / GEMIGREERD / GEVALIDEERD]` |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

## Uitgebreide velden per map

Gebruik deze velden wanneer de basistabel onvoldoende context geeft.

| Veld | Waarde |
|---|---|
| Drive item ID |  |
| Parent folder ID |  |
| URL |  |
| Huidige root |  |
| Maptype | `[artist / client / deal / operations / finance / legal / marketing / content / admin / archive / shim / FIERCE / onbekend]` |
| Canonical naam |  |
| Business lane |  |
| Drive owner |  |
| Inhoudelijke owner |  |
| Migratiebeslisser |  |
| Backup owner |  |
| Laatst gewijzigd |  |
| Gewijzigd door |  |
| Gedeeld met |  |
| Vertrouwelijkheidsindicatie |  |
| Moneybird-status |  |
| Legal-status |  |
| Linkstatus ClickUp |  |
| Linkstatus Gmail |  |
| Linkstatus Docs/Sheets/Slides |  |
| Shortcut/shim-status |  |
| Automation-afhankelijkheid |  |
| AI-agent instructie-afhankelijkheid |  |
| Duplicaat/canonical besluit |  |
| FIERCE-check |  |
| HOLD-reden |  |
| Open punten |  |
| Reviewdatum |  |
| Go/no-go besluit |  |
| Post-migratie validatie |  |

## Voorbeeldregel

| Huidige map | Eigenaar | Nieuwe locatie | Actie | Risico | Status |
|---|---|---|---|---|---|
| `Legacy Drive/Artist Clients/CALSEY` | `Drive owner: [account] / inhoudelijk: [owner]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/CALSEY` | `VERPLAATSEN` | `HOOG - artist stond mogelijk als client geclassificeerd en links moeten worden gecontroleerd` | `OWNER REVIEW` |
