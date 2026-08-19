# Artist Folder Standard

## Doel

Dit document legt de officiële CM-standaard vast voor artistfolders in Google Drive. De standaard voorkomt dubbele mapnamen, losse legacy-structuren en verwarring tussen artist-, client- en dealdossiers.

## Scope

Deze standaard geldt voor alle artistdossiers onder:

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Artists worden niet onder `OS_CUSTOMMADE/03_CLIENTS` beheerd. `03_CLIENTS` is uitsluitend bedoeld voor merken, bedrijven, sponsors, opdrachtgevers en media partners.

## Definitieve artistfolder-standaard

Elke actieve CM-managementartiest gebruikt exact deze genummerde structuur:

```text
ARTIST_NAME
├── 01_ADMIN
├── 02_CONTRACT
├── 03_STRATEGY
├── 04_RELEASES
├── 05_BOOKING
├── 06_FINANCE
│   └── ROYALTYSHEET
│       └── [ARTIST]_ROYALTY_SHEET
├── 07_SOCIALMEDIA
├── 08_PRESS_EPK
└── 09_ARCHIVE
```

## Folderdefinities

| Folder | Gebruik |
|---|---|
| `01_ADMIN` | Intake, contactgegevens, operationele instructies, meeting notes en algemene administratie. |
| `02_CONTRACT` | Managementafspraken, artist agreements, rechtenafspraken, juridische documenten en getekende contractreferenties. |
| `03_STRATEGY` | Positionering, roadmap, brand direction, campagneplanning, briefingdocumenten en managementstrategie. |
| `04_RELEASES` | Releaseplanning, release-assets, distributor-informatie, masters/context en release-campagnes. |
| `05_BOOKING` | Booking, riders, shows, live-aanvragen, partnerschappen rond optredens en relevante production notes. |
| `06_FINANCE` | Budgetten, royaltyreferenties, factuurreferenties en financiële werkbestanden. Moneybird blijft financiële waarheid. Iedere actieve CM-managementartiest heeft verplicht `06_FINANCE/ROYALTYSHEET/[ARTIST]_ROYALTY_SHEET`. |
| `07_SOCIALMEDIA` | Social content, contentplanning, platform-assets, captions en kanaalreferenties. |
| `08_PRESS_EPK` | Press kit, biografie, foto's, logo's, persmateriaal, media-assets en EPK-export. |
| `09_ARCHIVE` | Afgeronde, superseded of niet-actieve artistdocumenten die binnen het artistdossier bewaard moeten blijven. |

## ROYALTYSHEET — VERPLICHTE ARTIST CONTROL LAYER

Voor iedere actieve CM-managementartiest is de volgende locatie verplicht:

`02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE/ROYALTYSHEET/[ARTIST]_ROYALTY_SHEET`

De Royalty Sheet bevat minimaal:

- neighboring rights / master- en labelafspraken;
- auteursrechten en track-splits;
- split approvals en evidence-links;
- statement- en royaltycycli;
- ontvangen statements en betalingen;
- recoupment / advance-positie waar relevant;
- contract- en accountingreferenties;
- reminder- en follow-uplogica richting ClickUp.

De Sheet volgt verplicht `GOOGLE_SHEETS_DESIGN_STANDARD.md` en de canonical CM clean dashboardlayout. Drive is de rights/documentatiebron, ClickUp doet uitvoering en Moneybird blijft de financiële waarheid.

Bestandsnaam is exact: `[ARTIST]_ROYALTY_SHEET`.

Dit geldt uitsluitend voor actieve Custommade Agency managementartiesten. FIERCE-artiesten vallen hier niet automatisch onder.

## Governance-regels

- Gebruik geen legacy-mapnamen als standaard, waaronder `05_BOOKING_PARTNERSHIPS`, `07_CONTENT`, losse `SOCIALMEDIA`, `Presskit`, `Contracten`, `Royalties`, `Boekingen` of `Algemeen`.
- De submap `ROYALTYSHEET` onder `06_FINANCE` is voor actieve CM-managementartiesten verplicht en is geen optionele extra map.
- Maak geen artistfolders aan onder `OS_CUSTOMMADE/03_CLIENTS`.
- Maak buiten de verplichte `ROYALTYSHEET` alleen extra subfolders aan wanneer de inhoud dat vereist.
- Verplaats, hernoem of archiveer bestaande artistcontent alleen na owner-review, rechtencheck en actieve-linkcontrole.
- Bij conflict tussen deze standaard en oudere documentatie is dit document leidend, tenzij een nieuwer locked governance-besluit expliciet anders bepaalt.

## Relatie met andere governance-documenten

- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` beschrijft de volledige CM Drive-rootstructuur en verwijst naar deze artistfolder-standaard.
- `docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md` is leidend voor de Royalty Sheet-layout.
- `docs/00_GOVERNANCE/WORKFLOW_DOCUMENTATION.md` beschrijft hoe workflows hun system of record en completion standard moeten vastleggen.
- `scripts/google-drive/create-cm-drive-structure.gs` moet dezelfde artistfolder-standaard inclusief `06_FINANCE/ROYALTYSHEET` aanmaken voor nieuwe of ontbrekende artistfolders.
