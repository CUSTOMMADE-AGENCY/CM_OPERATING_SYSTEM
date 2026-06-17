# Artist Folder Standard

## Doel

Dit document legt de officiële CM-standaard vast voor artistfolders in Google Drive. De standaard voorkomt dubbele mapnamen, losse legacy-structuren en verwarring tussen artist-, client- en dealdossiers.

## Scope

Deze standaard geldt voor alle artistdossiers onder:

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Artists worden niet onder `OS_CUSTOMMADE/03_CLIENTS` beheerd. `03_CLIENTS` is uitsluitend bedoeld voor merken, bedrijven, sponsors, opdrachtgevers en media partners.

## Definitieve artistfolder-standaard

Elke artistfolder gebruikt waar relevant exact deze genummerde structuur:

```text
ARTIST_NAME
├── 01_ADMIN
├── 02_CONTRACT
├── 03_STRATEGY
├── 04_RELEASES
├── 05_BOOKING
├── 06_FINANCE
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
| `06_FINANCE` | Budgetten, royaltyreferenties, factuurreferenties en financiële werkbestanden. Moneybird blijft financiële waarheid. |
| `07_SOCIALMEDIA` | Social content, contentplanning, platform-assets, captions en kanaalreferenties. |
| `08_PRESS_EPK` | Press kit, biografie, foto's, logo's, persmateriaal, media-assets en EPK-export. |
| `09_ARCHIVE` | Afgeronde, superseded of niet-actieve artistdocumenten die binnen het artistdossier bewaard moeten blijven. |

## Governance-regels

- Gebruik geen legacy-mapnamen als standaard, waaronder `05_BOOKING_PARTNERSHIPS`, `07_CONTENT`, losse `SOCIALMEDIA`, `Presskit`, `Contracten`, `Royalties`, `Boekingen` of `Algemeen`.
- Maak geen artistfolders aan onder `OS_CUSTOMMADE/03_CLIENTS`.
- Maak alleen extra subfolders aan binnen de negen standaardfolders wanneer de inhoud dat vereist.
- Verplaats, hernoem of archiveer bestaande artistcontent alleen na owner-review, rechtencheck en actieve-linkcontrole.
- Bij conflict tussen deze standaard en oudere documentatie is dit document leidend, tenzij een nieuwer locked governance-besluit expliciet anders bepaalt.

## Relatie met andere governance-documenten

- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` beschrijft de volledige CM Drive-rootstructuur en verwijst naar deze artistfolder-standaard.
- `docs/00_GOVERNANCE/WORKFLOW_DOCUMENTATION.md` beschrijft hoe workflows hun system of record en completion standard moeten vastleggen.
- `scripts/google-drive/create-cm-drive-structure.gs` moet dezelfde artistfolder-standaard aanmaken voor nieuwe of ontbrekende artistfolders.
