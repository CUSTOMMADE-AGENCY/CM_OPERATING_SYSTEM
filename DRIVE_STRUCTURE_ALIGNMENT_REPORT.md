# Drive Structure Alignment Report

## Oude structuur

De vorige operationele rootstructuur in `create-cm-drive-structure.gs` was:

```text
OS_CUSTOMMADE
├── 00_INBOX
├── 01_BRIEFINGS
├── 02_PIPELINE
├── 03_CLIENTS
├── 04_DEALS
├── 05_BUSINESS
├── 06_MARKETING
└── 07_ARCHIVE
```

Daarbij functioneerden `05_BUSINESS` en `06_MARKETING` als operationele verzamelroots:

```text
05_BUSINESS
├── 01_FINANCE
├── 02_LEGAL
├── 03_HR
└── 04_CURSUS_MASTERCLASSES

06_MARKETING
├── 01_BRAND
├── 02_CONTENT
├── 03_SOCIALMEDIA
└── 04_NETWORK
```

## Nieuwe structuur

De aangepaste operationele rootstructuur in `create-cm-drive-structure.gs` is nu:

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

## Gewijzigde roots

| Status | Root |
| --- | --- |
| Toegevoegd / leidend gemaakt | `00_ADMIN` |
| Toegevoegd / leidend gemaakt | `01_MASTER_BOUTIQUE` |
| Toegevoegd / leidend gemaakt | `02_ARTIST_MANAGEMENT` |
| Behouden | `03_CLIENTS` |
| Behouden | `04_DEALS` |
| Toegevoegd / leidend gemaakt | `05_OPERATIONS` |
| Verplaatst naar eigen root | `06_FINANCE` |
| Verplaatst naar eigen root | `07_LEGAL` |
| Vervangt oude rootnummering | `08_MARKETING` |
| Verplaatst naar eigen root | `09_CONTENT` |
| Vervangt oude archiefroot | `99_ARCHIVE` |
| Verwijderd als operationele root | `00_INBOX` |
| Verwijderd als operationele root | `01_BRIEFINGS` |
| Verwijderd als operationele root | `02_PIPELINE` |
| Verwijderd als operationele root | `05_BUSINESS` |
| Verwijderd als operationele root | `06_MARKETING` |
| Verwijderd als operationele root | `07_ARCHIVE` |

## Gewijzigde subfolders

| Oude subfolderpositie | Nieuwe positie / status |
| --- | --- |
| `05_BUSINESS/01_FINANCE` | `06_FINANCE` is nu een eigen operationele root. |
| `05_BUSINESS/02_LEGAL` | `07_LEGAL` is nu een eigen operationele root. |
| `06_MARKETING/02_CONTENT` | `09_CONTENT` is nu een eigen operationele root. |
| `06_MARKETING` als root | Vervangen door `08_MARKETING`; marketing is geen oude `06_MARKETING`-root meer. |
| `03_CLIENTS/[ARTIST]/01_ADMIN` t/m `09_ARCHIVE` | Ongewijzigd behouden voor bestaande artist/client-dossiers. |

## Bevestiging alignment

`create-cm-drive-structure.gs` maakt nu dezelfde operationele rootlaag aan als de leidende governancekeuze uit `CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`. Finance, Legal en Content zijn geen subfolders onder oude verzamelroots meer, maar eigen roots. De oude root-logica voor `05_BUSINESS` en `06_MARKETING` is verwijderd, waardoor script en governance nu gelijk lopen.
