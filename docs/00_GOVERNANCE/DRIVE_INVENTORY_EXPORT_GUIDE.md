# Drive Inventory Export Guide

## Doel

Deze guide beschrijft hoe de volledige `OS_CUSTOMMADE` Google Drive-inventaris naar Google Sheets wordt geëxporteerd voor Sprint 2 migratievoorbereiding.

De export is alleen inventariserend. Het script verplaatst, hernoemt, verwijdert en deelt geen mappen of bestanden.

## Script

Gebruik:

```text
scripts/google-drive/export-drive-inventory.gs
```

Het script maakt een Google Sheet met:

1. `Drive Inventory` — één regel per map onder `OS_CUSTOMMADE`.
2. `Sprint 2 Summary` — totaalregels, rootinformatie en aantallen per migratieactie.

## Verplichte exportvelden

De sheet bevat de volgende Sprint 2 velden:

| Kolom | Doel |
|---|---|
| Folder ID | Unieke Drive-identificatie voor migratie en validatie. |
| Folder naam | Herkenbare mapnaam. |
| Volledig pad | Volledig pad vanaf `OS_CUSTOMMADE`. |
| Parent folder | Naam van de primaire parentfolder. |
| Eigenaar | Drive owner indien beschikbaar voor het uitvoerende account. |
| Aantal bestanden | Aantal directe bestanden in de map. |
| Aantal submappen | Aantal directe submappen in de map. |
| Laatst gewijzigd | Laatste wijzigingsdatum van de map. |
| Huidige root | Eerste mapniveau onder `OS_CUSTOMMADE`. |
| Governance root | Goedgekeurde doelroot volgens CM-governance. |
| Migratieactie | Voorlopige actie: `behouden`, `verplaatsen`, `samenvoegen`, `archiveren` of `handmatige review`. |
| Review status | Sprint 2 reviewstatus voor owner/link/governance-controle. |
| Opmerking | Automatische toelichting op de voorlopige migratieactie. |
| Folder URL | Directe Drive-link naar de map. |
| Parent folder ID | Drive-ID van de primaire parentfolder. |
| Export timestamp | Moment waarop de exportregel is aangemaakt. |

## Voorbereiding

1. Open Google Apps Script via het Google-account dat leesrechten heeft op `OS_CUSTOMMADE`.
2. Maak een nieuw Apps Script-project of open een bestaand beheerproject.
3. Kopieer de inhoud van `scripts/google-drive/export-drive-inventory.gs` naar het project.
4. Stel bovenaan het script minimaal één van onderstaande opties in:
   - `OS_CUSTOMMADE_FOLDER_ID`: aanbevolen; gebruik de folder-ID van de echte `OS_CUSTOMMADE` root.
   - laat `OS_CUSTOMMADE_FOLDER_ID` leeg als het account precies één toegankelijke map met naam `OS_CUSTOMMADE` heeft.
5. Optioneel: vul `OUTPUT_SPREADSHEET_ID` in om een bestaande spreadsheet opnieuw te vullen.
6. Sla het Apps Script-project op.

## Uitvoering

1. Selecteer de functie `exportDriveInventory`.
2. Klik op **Run**.
3. Autoriseer Google Drive- en Google Sheets-toegang wanneer Google daarom vraagt.
4. Wacht tot de run is afgerond.
5. Open de spreadsheet-URL uit de Apps Script logs.

## Migratieactie-logica

De migratieactie is een eerste classificatie en geen definitieve go/no-go.

| Actie | Wanneer automatisch gebruikt |
|---|---|
| `behouden` | Map staat binnen een bekende governance root en er is geen automatische conflictindicator. |
| `verplaatsen` | Een bekende artiestenmap lijkt buiten `02_ARTIST_MANAGEMENT` te staan. |
| `samenvoegen` | De mapnaam bevat een duplicaat- of kopie-indicator. |
| `archiveren` | De mapnaam of het pad bevat archive-, archief-, old-, obsolete- of vervallen-signalen. |
| `handmatige review` | De map valt niet onder een bekende governance root. |

Definitieve migratie mag pas na owner-review, link-review en risico-review volgens `SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md`.

## Governance roots

De export gebruikt deze goedgekeurde roots:

| Root | Governance doelpad |
|---|---|
| `00_ADMIN` | `OS_CUSTOMMADE/00_ADMIN` |
| `01_MASTER_BOUTIQUE` | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` |
| `02_ARTIST_MANAGEMENT` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` |
| `03_CLIENTS` | `OS_CUSTOMMADE/03_CLIENTS` |
| `04_DEALS` | `OS_CUSTOMMADE/04_DEALS` |
| `05_OPERATIONS` | `OS_CUSTOMMADE/05_OPERATIONS` |
| `06_FINANCE` | `OS_CUSTOMMADE/06_FINANCE` |
| `07_LEGAL` | `OS_CUSTOMMADE/07_LEGAL` |
| `08_MARKETING` | `OS_CUSTOMMADE/08_MARKETING` |
| `09_CONTENT` | `OS_CUSTOMMADE/09_CONTENT` |
| `99_ARCHIVE` | `OS_CUSTOMMADE/99_ARCHIVE` |

## Sprint 2 gebruik

Gebruik de sheet als werkbestand voor de migratiebatch:

1. Filter op `Migratieactie = handmatige review` en los governance-rootconflicten eerst op.
2. Filter op `verplaatsen` en controleer of het voorgestelde doelpad klopt.
3. Filter op `samenvoegen` en bepaal de canonical map voordat er iets wordt samengevoegd.
4. Filter op `archiveren` en laat de owner bevestigen dat de map niet actief is.
5. Controleer `Aantal bestanden`, `Aantal submappen` en `Laatst gewijzigd` om omvang en risico te bepalen.
6. Vul aanvullende reviewkolommen toe in de spreadsheet waar nodig, zoals inhoudelijke owner, linkstatus, risico, besluitdatum en go/no-go.

## Go/no-go criteria

Een map mag alleen naar een Sprint 2 migratiebatch wanneer:

- Folder ID en Parent folder ID aanwezig zijn.
- Owner of migratiebeslisser bekend is.
- Governance root en doelpad bevestigd zijn.
- Actieve links, shortcuts, ClickUp-referenties, Gmail-links en automatiseringen zijn gecontroleerd.
- Legal-, finance-, rechten- en confidentialiteitsrisico's zijn beoordeeld.
- De migratieactie definitief is bevestigd als `behouden`, `verplaatsen`, `samenvoegen` of `archiveren`.

Gebruik `handmatige review` wanneer één van deze punten nog niet rond is.

## Beperkingen

- De export telt directe bestanden en directe submappen per map; het telt geen recursieve bestandsaantallen per subtree.
- Google Drive kan ownerinformatie beperken wanneer het uitvoerende account onvoldoende rechten heeft.
- Bij meerdere mappen met dezelfde naam `OS_CUSTOMMADE` gebruikt het script de eerste toegankelijke match als `OS_CUSTOMMADE_FOLDER_ID` leeg is.
- De export is een momentopname; maak vlak vóór migratie opnieuw een export.
