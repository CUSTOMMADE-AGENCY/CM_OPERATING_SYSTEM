# CM_OS — LOCKED DECISIONS

**Status:** Bindend. GitHub is source of truth. Wijzigen kan alleen via een nieuw, gedateerd besluit.
**Laatste update:** Sprint 2G — 17 juni 2026

-----

## Eerder gelockte besluiten (governance-audit)

|#  |Besluit                                                                          |Status|
|:-:|:--------------------------------------------------------------------------------|:-----|
|G1 |Briefing-roots vervangen conflicterende OS_CUSTOMMADE Drive-structuren.          |LOCKED|
|G2 |Eén CM-Space met folders vervangt elk multi-Space ClickUp-model.                 |LOCKED|
|G3 |Shims worden behouden of gearchiveerd op basis van uitsluitend actieve links.    |LOCKED|
|G4 |Moneybird is financiële source of truth; geen ClickUp/Drive-duplicatie deze fase.|LOCKED|

-----

## Sprint 2G — nieuwe locks (17 juni 2026)

|#       |Besluit                                                                |Implicatie                                                                                                                                                                                                                                  |Geraakte artefacten                                            |
|:------:|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
|**2G-1**|**`00_INBOX` blijft permanente root.**                                 |Niet langer een op-te-splitsen bron. Wordt erkend als 12e permanente doel-root. Dubbel-`00` (`00_ADMIN` + `00_INBOX`) is bewust geaccepteerd. Children blijven HOLD voor classificatie.                                                     |Target-structure script, migratiescript, matrix, dry run       |
|**2G-2**|**Artist Management blijft onder `02_ARTIST_MANAGEMENT`.**             |De open sub-beslissing (`03_CLIENTS` vs `02_ARTIST_MANAGEMENT`) is hiermee gesloten ten gunste van `02`. `03_CLIENTS` is uitsluitend voor niet-artist clients/brands. Artist-dossiers routen standaard naar `02`.                           |Migratiescript (routingregel), matrix                          |
|**2G-3**|**Legacy `01_ARTIST_MANAGEMENT` migreert naar `02_ARTIST_MANAGEMENT`.**|Mapping is nu LOCKED i.p.v. review. Alle child-artistdossiers → `02_ARTIST_MANAGEMENT/<artist>`. Uitvoering blijft achter goedkeuring (geen live migratie in 2G).                                                                           |Migratiescript (SOURCE→TARGET), matrix, dry run                |
|**2G-4**|**Script ondersteunt legacy-bron `07_ ARCHIVE` (mét spatie).**         |Bronherkenning wordt **ID-gebaseerd** (`0B2aV9TqyUPDzRTRreGNBZWxWd2s`) i.p.v. naam-gebaseerd. Dit lost de 2F-fout `ERROR_MISSING_SOURCE_OR_TARGET` (oorzaak: spatie-mismatch) structureel op. Doel: `99_ARCHIVE`, shims behouden, na review.|Migratiescript (SOURCE-config + lookup-logica), matrix, dry run|

-----

## Afgeleide governance-regels (uit 2G)

1. **Bronherkenning per folder-ID, niet per naam.** Namen met spaties/typo’s (`OS _CUSTOMMADE`, `07_ ARCHIVE`) mogen het script nooit meer breken. ID is de sleutel; naam is alleen label.
1. **`00_INBOX` is intake, geen opslag.** Inhoud wordt geclassificeerd en doorgesluisd; de root zelf blijft permanent bestaan.
1. **Artist-default = `02_ARTIST_MANAGEMENT`.** Twijfel tussen artist en client → artist wint, tenzij expliciet een niet-artist brand/client.
1. **Geen live mutatie zonder (a) bijgewerkt script, (b) schone dry run zonder TARGET_MISSING/SOURCE_NOT_FOUND, (c) owner-sign-off per review-bronroot.**

-----

## Bekende opschoonpunten (geen actie in 2G — alleen geregistreerd)

- **`00_ADMIN/INBOX`** (leeg, vandaag aangemaakt): wordt na 2G-1 overbodig naast de permanente `00_INBOX`-root. Verwijderen/negeren is een aparte ownerbeslissing — **niet** in deze fase (geen deletes).
- **`OS _CUSTOMMADE`** root-naam bevat een spatie. Werkt via ID; eventuele rename is optioneel en los te besluiten.

*Einde besluitenregister.*
