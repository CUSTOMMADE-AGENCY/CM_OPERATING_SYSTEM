# SPRINT 2G — GOVERNANCE LOCK REPORT

**Datum:** 17 juni 2026
**Scope:** Governance lock + script-update. **Geen** live migratie, geen verplaatsing, geen delete, geen archivering.
**Source of truth:** GitHub. Deze set is bedoeld voor commit onder `docs/00_GOVERNANCE/` en `scripts/`.

-----

## 1. Wat is vastgelegd

Vier besluiten zijn LOCKED. Volledige register: `CM_OS_LOCKED_DECISIONS.md`.

|#   |Besluit                                               |Kern-effect                                                                   |
|:--:|:-----------------------------------------------------|:-----------------------------------------------------------------------------|
|2G-1|`00_INBOX` blijft permanente root                     |Wordt 12e doel-root; niet langer op-te-splitsen bron; dubbel-`00` geaccepteerd|
|2G-2|Artist Management blijft onder `02_ARTIST_MANAGEMENT` |Open sub-beslissing gesloten; `03_CLIENTS` alleen voor niet-artist clients    |
|2G-3|Legacy `01_ARTIST_MANAGEMENT` → `02_ARTIST_MANAGEMENT`|Mapping LOCKED i.p.v. review                                                  |
|2G-4|Script ondersteunt legacy-bron `07_ ARCHIVE` (spatie) |Bronherkenning per folder-ID; lost 2F-fout structureel op                     |

-----

## 2. Belangrijke vondst tijdens uitvoering

Er zijn **twee** scripts, geen één:

1. **Target-structure creator** (“Naamloos project”) — maakt de doel-roots. Hier had ik de volledige bron; besluit 2G-1 is er volledig in verwerkt.
1. **Migratie/dry-run script** — produceert de dry-run-log. Hiervan had ik alleen de **output**, niet de broncode. De besluiten 2G-2/3/4 zijn daarom geleverd als **autoritatieve config** om in dat script te plakken.

Dit verklaart ook 2F: de target-creator kende `00_INBOX` alleen als subfolder onder `00_ADMIN`, en het migratiescript zocht naar `07_ARCHIVE` zonder spatie. Beide zijn nu rechtgezet.

-----

## 3. Wat is bijgewerkt (per artefact)

|Artefact               |Bestand                                   |Wijziging                                                                                                   |
|:----------------------|:-----------------------------------------|:-----------------------------------------------------------------------------------------------------------|
|Besluitenregister      |`CM_OS_LOCKED_DECISIONS.md`               |4 nieuwe locks + afgeleide regels + opschoonpunten                                                          |
|Migratiematrix         |`SPRINT2B_DRIVE_MIGRATION_MATRIX.md` → v2G|12 doel-roots, ID-gebaseerde bronnen, 01→02 LOCKED, 07_ ARCHIVE FOUND, 00_INBOX KEEP, artist-routing        |
|Target-structure script|`OS_CUSTOMMADE_target_structure.gs`       |`00_INBOX` als permanente root; `INBOX` weg uit `00_ADMIN`                                                  |
|Migratie/dry-run config|`SAFE_ROOTS_MIGRATION_CONFIG_2G.gs`       |`TARGET_ROOTS` (12), `KEEP_ROOTS_BY_ID`, `SOURCE_ROOTS_BY_ID` (ID-gekeyd), `classifyRoot_()`, artist-default|
|Nieuwe dry run         |`SPRINT2G_DRY_RUN_PROJECTED.md`           |Projectie zonder mutaties: 0× missing/not-found/unexpected                                                  |

-----

## 4. Voor/na — de drie 2F-blokkers

|2F-blokker                           |Status na 2G                                                               |
|:------------------------------------|:--------------------------------------------------------------------------|
|`07_ ARCHIVE` niet matchbaar (spatie)|✅ Opgelost — bron nu per ID (`0B2aV9TqyUPDzRTRreGNBZWxWd2s`) → `99_ARCHIVE`|
|`00_INBOX` governance-conflict       |✅ Opgelost — permanente root (2G-1)                                        |
|Open sub-beslissing artist-mappen    |✅ Opgelost — naar `02_ARTIST_MANAGEMENT` (2G-2)                            |

-----

## 5. Dry-run-projectie (samenvatting)

Volledig: `SPRINT2G_DRY_RUN_PROJECTED.md`.

|Status          |2F |2G-projectie|
|:---------------|:-:|:----------:|
|TARGET_MISSING  |11 |**0**       |
|SOURCE_NOT_FOUND|1  |**0**       |
|UNEXPECTED_ROOT |1  |**0**       |


> Dit is een projectie op basis van de gelockte regels + live Drive-staat, **geen** uitgevoerde run. De echte log ontstaat na het plakken van de config en het draaien van de dry-run-functie (zie §7).

-----

## 6. GO / NO-GO

### Voor Sprint 2G: ✅ uitgevoerd — governance lock + script-update gereed. ⛔ NO-GO live (per instructie).

De drie structurele blokkers uit 2F zijn weg. Wat nog tussen “nu” en een live migratie staat:

1. **Owner-sign-off** op de 7 review-bronroots: `00_GOVERNANCE`, `02_MASTER_BOUTIQUE`, `03_EXECUTIVE`, `04_BUSINESS`, `05_MARKETING`, `06_PROJECTS`, `07_ ARCHIVE`.
1. **Echte** (niet geprojecteerde) dry-run-run met de bijgewerkte config → bevestigen dat het 0× missing/not-found/unexpected is.
1. **Opschoonbeslissing** `00_ADMIN/INBOX` (leeg, overbodig naast `00_INBOX`). Niet in deze fase — geen deletes.

-----

## 7. Volgende stap (om de échte log te krijgen)

1. Commit deze 5 bestanden naar GitHub (`docs/00_GOVERNANCE/` + `scripts/`).
1. Plak `SAFE_ROOTS_MIGRATION_CONFIG_2G.gs` in het migratiescript (vervang oude config).
1. Plak `OS_CUSTOMMADE_target_structure.gs` in het target-structure project.
1. Draai de dry-run-functie (DRY_RUN = TRUE). Verwachte uitkomst = de projectie in §5.

> Ik kan Apps Script niet zelf uitvoeren. Wil je dat ik de echte dry-run via Make laat triggeren, of doe je het handmatig in de Apps Script-editor? Beide kan — zeg het maar.

*Einde rapport 2G.*
