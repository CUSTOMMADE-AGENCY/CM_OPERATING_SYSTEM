# Drive Structure Alignment Report

## Status

GOVERNANCE CONSISTENT

## Leidende beslissing

`docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md` is leidend. Drive-documentatie en het Drive-script zijn uitgelijnd op de locked rootlaag, artists-as-clients en de lean Nederlandse dealstructuur.

## Goedgekeurde rootstructuur

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

## Clientstructuur

Artists worden als clients behandeld. Alle artist- en clientdossiers staan onder `OS_CUSTOMMADE/03_CLIENTS`.

```text
CLIENT_OR_ARTIST_NAME
├── 01_ADMIN
├── 02_CONTRACT
├── 03_STRATEGY
├── 04_RELEASES
├── 05_BOOKING_PARTNERSHIPS
├── 06_FINANCE
├── 07_SOCIALMEDIA
├── 08_PRESS_EPK
└── 09_ARCHIVE
```

## Lean Nederlandse dealstructuur

Master Boutique- en dealdossiers staan onder `OS_CUSTOMMADE/04_DEALS` en gebruiken standaard deze lean Nederlandse structuur:

```text
DEAL_OR_ASSET_NAME
├── 01_RECHTEN_REGISTER
├── 02_CONTRACTEN_BEWIJS
└── 03_WAARDERING_VERKOOPPAKKET
```

Full Data Room-substructuren worden pas uitgesplitst bij expliciete buyer-facing fase-approval.

## Script-alignment

`create-cm-drive-structure.gs` maakt dezelfde rootlaag aan als deze governance. Het script maakt geen oude rootlaag aan en bevat geen oude Engelse dealstructuur als standaardstructuur.

## Conclusie

GOVERNANCE CONSISTENT
