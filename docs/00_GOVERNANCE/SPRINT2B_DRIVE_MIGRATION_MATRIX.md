# SPRINT 2B — DRIVE MIGRATION MATRIX

**Versie:** v2G (bijgewerkt na Sprint 2G governance lock, 17 juni 2026)
**Root:** `OS _CUSTOMMADE` (let op spatie), ID `0B2aV9TqyUPDzd0F1WEd1RkVxNFk`
**Bronherkenning:** per folder-ID (2G-4). Namen zijn labels.
**Uitvoering:** DRY RUN only. Geen live migratie, geen verplaatsing, geen delete, geen archivering.

-----

## 1. Permanente doel-roots (12) — 2G

|Doel-root             |ID                                 |Bron                                |Status       |
|:---------------------|:----------------------------------|:-----------------------------------|:------------|
|`00_ADMIN`            |`1gaDQm1QP44sbuUVbS8kkFFe_ul9RxRfE`|Nieuw (17 jun)                      |TARGET       |
|`00_INBOX`            |`1_R9vxd6x9hB0yGpnx7_f178Rin_uBwOi`|Bestaand (8 jun) — **2G-1 behouden**|TARGET / KEEP|
|`01_MASTER_BOUTIQUE`  |`1izvO63CpCDdEJm1_bmYX3xCsbklsqg-J`|Nieuw                               |TARGET       |
|`02_ARTIST_MANAGEMENT`|`19kyr2gXs-QT-ehvgtRIzNOf5As01k0Sy`|Nieuw                               |TARGET       |
|`03_CLIENTS`          |`12k8NabqqHAvc-W7RRec_a9inhQTR3pqt`|Nieuw                               |TARGET       |
|`04_DEALS`            |`1ZKY7qOVggqThgY1VHcXv70uNdQvVPNpJ`|Nieuw                               |TARGET       |
|`05_OPERATIONS`       |`1G7ZW2WZCOosUM8kySJ9drvfvuUgrTAMS`|Nieuw                               |TARGET       |
|`06_FINANCE`          |`1Yxs29O5zC0bC9VR-SjnEUc6ojR6620uK`|Nieuw                               |TARGET       |
|`07_LEGAL`            |`1gj-glzUt9n5fa38-jSZtR-5H2f3eh48X`|Nieuw                               |TARGET       |
|`08_MARKETING`        |`1sgz_QOmWrK-pQ2fOv_Qw-X-LPw6RZGQc`|Nieuw                               |TARGET       |
|`09_CONTENT`          |`1INi8P1nmqnHAOMyMORjKZkLI7N2wZOZH`|Nieuw                               |TARGET       |
|`99_ARCHIVE`          |`1oXB_PIK_MqOQwDXRHk0AWMTrLHGnzzgE`|Nieuw                               |TARGET       |


> Dubbel-`00` (`00_ADMIN` + `00_INBOX`) is per 2G-1 bewust geaccepteerd.

-----

## 2. Bron-roots → doel (na 2G)

|Bron-root                                     |Bron-ID                            |Type       |Doel                                                                   |Actie                                       |Status na 2G        |Review|
|:---------------------------------------------|:----------------------------------|:----------|:----------------------------------------------------------------------|:-------------------------------------------|:-------------------|:----:|
|`00_GOVERNANCE` *(broer op Shared Drive-root)*|`15gmbGd3UHgPhbHDZIySgk_Qqu2MCxYpK`|Transitie  |`00_ADMIN/GOVERNANCE_REFERENCE`                                        |governance-referentie (GitHub leidend)      |ROOT_REVIEW         |Ja    |
|`01_ARTIST_MANAGEMENT`                        |`0B2aV9TqyUPDzZ3I5ZTFnaWlYbUU`     |Legacy 2016|**`02_ARTIST_MANAGEMENT`**                                             |samenvoegen                                 |**LOCKED (2G-3)**   |Nee   |
|`02_MASTER_BOUTIQUE`                          |`1Z3S6xz7_zg3UjaNImBLn_JQuizQEYAYR`|Transitie  |`01_MASTER_BOUTIQUE` + `04_DEALS`                                      |opsplitsen                                  |ROOT_REVIEW         |Ja    |
|`03_EXECUTIVE`                                |`1lfgz8pYf9EDze1iJwv_vrOFsAeEW_OEM`|Transitie  |`00_ADMIN` / `06_FINANCE` / `07_LEGAL`                                 |opsplitsen                                  |ROOT_REVIEW         |Ja    |
|`04_BUSINESS`                                 |`0B2aV9TqyUPDzdk1pR3hlSlM4RFk`     |Legacy 2016|`03_CLIENTS` / `04_DEALS` / `05_OPERATIONS` / `06_FINANCE` / `07_LEGAL`|opsplitsen                                  |ROOT_REVIEW         |Ja    |
|`05_MARKETING`                                |`1UDYPPEKPH8WZV-Q2Gi-VY1mmIc6G83KE`|Transitie  |`08_MARKETING` / `09_CONTENT` / `03_CLIENTS`                           |opsplitsen                                  |ROOT_REVIEW         |Ja    |
|`06_PROJECTS`                                 |`1LqTYF95lkXQ5xGyGKYYpRAndjIk0dVUL`|Transitie  |per dossier / HOLD                                                     |classificeren                               |ROOT_REVIEW         |Ja    |
|`07_ ARCHIVE` *(spatie)*                      |`0B2aV9TqyUPDzRTRreGNBZWxWd2s`     |Legacy 2016|`99_ARCHIVE`                                                           |inventariseren + samenvoegen; shims behouden|**FOUND (2G-4 fix)**|Ja    |


> **2G-4:** `07_ ARCHIVE` werd in 2F niet gevonden door de spatie (`SKIPPED_SOURCE_NOT_FOUND` + `UNEXPECTED_ROOT`). Door ID-matching is de bron nu herkend.

-----

## 3. Behouden roots (geen bron) — 2G

|Root      |ID                                 |Regel                                                                                       |
|:---------|:----------------------------------|:-------------------------------------------------------------------------------------------|
|`00_INBOX`|`1_R9vxd6x9hB0yGpnx7_f178Rin_uBwOi`|**2G-1:** permanente intake-root. Niet opsplitsen. Children blijven HOLD voor classificatie.|

**HOLD-children (inhoud classificeren, root blijft staan):**

- `00_INBOX/_SCHOONMAAK_TE_SORTEREN` — `1Qbp7gMQbL8WPohbecx8rIE_Rvs3UimkR` — HOLD_OWNER_REVIEW
- `00_INBOX/TO-SORT` — `18V2hUsJ0aFqghUVcxY-7rzC9iIxUyJ4_` — HOLD_OWNER_REVIEW
- `06_PROJECTS/• EVENTS` — `0B2aV9TqyUPDzd0RfRmY5SHl0TnM` — HOLD_OWNER_REVIEW

-----

## 4. Artist-routing (2G-2)

- **Default voor artist-content:** `02_ARTIST_MANAGEMENT`.
- `03_CLIENTS` is uitsluitend voor niet-artist clients/brands (bv. `05_MARKETING/01_BRAND` → `03_CLIENTS/01_BRAND`).
- Bij twijfel artist vs client: **artist wint** → `02_ARTIST_MANAGEMENT`.

-----

## 5. Veiligheidsregels (ongewijzigd)

- Geen FIERCE-content gemigreerd door dit script.
- Geen getekende contracten naar GitHub.
- Moneybird blijft financiële source of truth; `06_FINANCE` is alleen referentie/werklaag.
- Data Room / LOI / APA / Closing / Success Fee niet standaard aangemaakt; alleen tijdens due diligence.

*Einde matrix v2G.*
