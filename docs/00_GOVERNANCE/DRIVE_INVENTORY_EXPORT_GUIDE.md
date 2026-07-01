# Drive Inventory Export Guide

## Doel

Deze guide beschrijft hoe de volledige `OS_CUSTOMMADE` Google Drive-structuur naar Google Sheets wordt geëxporteerd voor Sprint 2A inventarisatie en Sprint 2 migratievoorbereiding.

De export is **alleen inventariserend**. Het script verplaatst, hernoemt, verwijdert, archiveert, deelt of maakt geen Drive-content aan.

## Governancebasis

Gebruik deze guide samen met:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
3. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
4. `docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md`
5. `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md`
6. `docs/00_GOVERNANCE/SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md`

Belangrijke uitgangspunten:

- GitHub is governance/source of truth.
- Google Drive is opslag.
- Moneybird blijft financiële waarheid.
- CM en FIERCE blijven strikt gescheiden.
- Pure shims blijven behouden zolang actieve links niet zijn omgezet.
- Sprint 2A inventariseert alleen; migratie start pas na review en go/no-go.

## Scriptlocatie

Gebruik:

```text
scripts/google-drive/export-drive-inventory.gs
```

Het script maakt of vult een Google Sheet met:

1. `Drive Inventory` — één regel per map vanaf de opgegeven root folder ID.
2. `Sprint 2A Summary` — rootinformatie, exporttimestamp en aantallen per migratieactie.

De export schrijft direct bij start een zichtbare statusregel naar `Drive Inventory`:

```text
STATUS | Script gestart | timestamp
```

Als een map niet kan worden gelezen, schrijft het script een foutregel in dezelfde sheet:

```text
ERROR | folderId | folderName | errorMessage
```

Daardoor is er altijd zichtbaar bewijs in de output-Sheet, ook als Drive-lezen gedeeltelijk faalt.

## Installatie

1. Open [Google Apps Script](https://script.google.com/) met het Google-account dat leesrechten heeft op de `OS_CUSTOMMADE` Drive-root.
2. Maak een nieuw Apps Script-project of open een bestaand CM-beheerproject.
3. Kopieer de volledige inhoud van `scripts/google-drive/export-drive-inventory.gs` naar het Apps Script-project.
4. Vul bovenaan het script `ROOT_FOLDER_ID` in met de folder-ID van de echte `OS_CUSTOMMADE` root.
5. Optioneel: vul `OUTPUT_SPREADSHEET_ID` in wanneer de export in een bestaande spreadsheet moet worden geschreven.
6. Sla het Apps Script-project op.

## Autorisatie

Bij de eerste run vraagt Google om autorisatie voor Drive en Sheets.

Sta alleen autorisaties toe voor het beheeraccount dat de inventarisatie uitvoert. Het script heeft rechten nodig om:

- folders en directe child-items te lezen;
- owner- en wijzigingsinformatie te lezen wanneer het account daar toegang toe heeft;
- een Google Sheet aan te maken of een bestaande Sheet te vullen.

Het script gebruikt geen schrijfacties in Drive. De enige schrijfactie is het vullen van de output-spreadsheet.

## Uitvoeren

Voer de export altijd in twee stappen uit:

1. Selecteer in Apps Script eerst de functie `testDriveInventoryExport`.
2. Klik op **Run**. Deze test exporteert alleen de root en de eerste laag folders.
3. Autoriseer het script wanneer Google daarom vraagt.
4. Controleer in de output-Sheet of de `STATUS | Script gestart | timestamp`-regel zichtbaar is en of eventuele `ERROR | folderId | folderName | errorMessage`-regels verklaarbaar zijn.
5. Controleer **Executions** of **Logs** in Apps Script; elke verwerkte folder wordt als volledig pad gelogd.
6. Selecteer daarna pas de functie `exportDriveInventory`.
7. Klik opnieuw op **Run** voor de volledige inventarisatie binnen de ingestelde diepte.
8. Kopieer de gelogde spreadsheet-URL.
9. Deel de output-Sheet alleen met reviewers die volgens governance toegang mogen hebben tot de inventaris.

> Let op: bovenaan het script staat `const MAX_DEPTH = 2` als veilige testoptie voor `exportDriveInventory`. Laat deze waarde staan voor een eerste beperkte run en verhoog of verwijder de dieptelimiet pas nadat de testexport goed is gecontroleerd.

## Exportbestand

De tab `Drive Inventory` bevat per map deze kolommen:

| Kolom | Betekenis |
|---|---|
| Folder ID | Unieke Drive-ID van de map. |
| Folder naam | Naam van de map in Drive. |
| Volledig pad | Pad vanaf de opgegeven root. |
| Parent folder | Naam van de primaire parentfolder. |
| Root folder | Eerste mapniveau onder `OS_CUSTOMMADE`. |
| Governance root | Goedgekeurde OS_CUSTOMMADE-root wanneer herkend. |
| Eigenaar | Drive-owner indien beschikbaar voor het uitvoerende account. |
| Aantal bestanden | Aantal directe bestanden in de map. |
| Aantal submappen | Aantal directe submappen in de map. |
| Laatst gewijzigd | Laatste wijzigingsdatum van de map. |
| Migratieactie | Voorlopige actie: `behouden`, `verplaatsen`, `samenvoegen`, `archiveren` of `handmatige review`. |
| Opmerking | Automatische toelichting en review-instructie. |
| Folder URL | Directe link naar de Drive-map. |
| Parent folder ID | Drive-ID van de primaire parentfolder. |
| Export timestamp | Moment waarop de regel is geëxporteerd. |

De migratieactie is een **voorstel voor review**, geen definitief migratiebesluit.

## Interpretatie van resultaten

Gebruik de export in deze volgorde:

1. Filter eerst op `handmatige review`.
   - Onbekende roots, FIERCE-signalen en governance-conflicten moeten vóór elke migratie worden opgelost.
2. Filter op `verplaatsen`.
   - Controleer of de map naar de juiste governance-root moet, bijvoorbeeld artiesten naar `02_ARTIST_MANAGEMENT`.
3. Filter op `samenvoegen`.
   - Bepaal de canonical map, owner, duplicaatrisico's en samenvoegplan.
4. Filter op `archiveren`.
   - Archiveer alleen na ownerbevestiging en linkcontrole.
5. Filter op `behouden`.
   - Behouden betekent alleen dat geen automatische conflictindicator is gevonden; owner-, link- en risicoreview blijven verplicht.

## Governance roots

De export herkent deze roots:

| Root folder | Governance root |
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

## Beperkingen

- De export telt directe bestanden en directe submappen, niet het volledige subtree-totaal.
- Ownerinformatie kan ontbreken wanneer het uitvoerende account onvoldoende rechten heeft; het script vult dan `OWNER_UNKNOWN`.
- Metadata kan ontbreken of niet leesbaar zijn voor specifieke folders; het script vult dan `ERROR_METADATA` waar mogelijk en schrijft een `ERROR`-regel wanneer een folder niet verwerkt kan worden.
- Google Apps Script-runtime kan bij zeer grote Drives time-outs geven; het script verwerkt folders in batches en schrijft tussentijds naar de Sheet, maar exporteer indien nodig per root of verhoog de operationele runstrategie.
- De export is een momentopname. Maak vlak vóór migratie opnieuw een export.
