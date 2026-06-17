# SPRINT 2G — DRY RUN (PROJECTIE, ZONDER MUTATIES)

**Type:** Projectie op basis van de gelockte 2G-config + de live Drive-staat (read-only gelezen).
**Geen mutaties:** geen moves, geen deletes, geen archivering, geen aanmaak.
**Root:** `OS _CUSTOMMADE`, ID `0B2aV9TqyUPDzd0F1WEd1RkVxNFk`.

> **Belangrijk:** dit is een *projectie*, geen uitgevoerde script-run. De echte log ontstaat pas
> wanneer de bijgewerkte config (`SAFE_ROOTS_MIGRATION_CONFIG_2G.gs`) in het migratiescript staat
> en de dry-run-functie draait. Verwachte uitkomst staat hieronder.

-----

## Geprojecteerde regels

|Volgorde|Locatie                                     |Doel                                                           |Actie                                       |Geprojecteerde status                     |Review|
|:------:|:-------------------------------------------|:--------------------------------------------------------------|:-------------------------------------------|:-----------------------------------------|:----:|
|0       |`00_ADMIN`                                  |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`00_INBOX`                                  |—                                                              |behouden                                    |**KEPT_ROOT (2G-1)**                      |—     |
|0       |`01_MASTER_BOUTIQUE`                        |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`02_ARTIST_MANAGEMENT`                      |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`03_CLIENTS`                                |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`04_DEALS`                                  |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`05_OPERATIONS`                             |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`06_FINANCE`                                |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`07_LEGAL`                                  |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`08_MARKETING`                              |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`09_CONTENT`                                |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|0       |`99_ARCHIVE`                                |—                                                              |doelroot-readiness                          |**TARGET_PRESENT**                        |—     |
|1       |`00_GOVERNANCE` *(broer)*                   |`00_ADMIN/GOVERNANCE_REFERENCE`                                |governance-referentie                       |DRY_RUN_ROOT_REVIEW                       |Ja    |
|2       |`00_INBOX/_SCHOONMAAK_TE_SORTEREN`          |HOLD                                                           |classificeren                               |HOLD_OWNER_REVIEW                         |Ja    |
|2       |`00_INBOX/TO-SORT`                          |HOLD                                                           |classificeren                               |HOLD_OWNER_REVIEW                         |Ja    |
|3       |`01_ARTIST_MANAGEMENT`                      |`02_ARTIST_MANAGEMENT`                                         |samenvoegen                                 |**LOCKED_MAPPING (2G-3)**                 |Nee   |
|3       |`01_ARTIST_MANAGEMENT/<alle artistdossiers>`|`02_ARTIST_MANAGEMENT/<artist>`                                |samenvoegen                                 |DRY_RUN_SIMULATED                         |Nee   |
|5       |`02_MASTER_BOUTIQUE`                        |`01_MASTER_BOUTIQUE` + `04_DEALS`                              |opsplitsen                                  |DRY_RUN_ROOT_REVIEW                       |Ja    |
|6       |`03_EXECUTIVE`                              |`00_ADMIN`/`06_FINANCE`/`07_LEGAL`                             |opsplitsen                                  |DRY_RUN_ROOT_REVIEW                       |Ja    |
|4       |`04_BUSINESS`                               |`03_CLIENTS`/`04_DEALS`/`05_OPERATIONS`/`06_FINANCE`/`07_LEGAL`|opsplitsen                                  |DRY_RUN_ROOT_REVIEW                       |Ja    |
|7       |`05_MARKETING`                              |`08_MARKETING`/`09_CONTENT`/`03_CLIENTS`                       |opsplitsen                                  |DRY_RUN_ROOT_REVIEW                       |Ja    |
|3-8     |`06_PROJECTS`                               |per dossier / HOLD                                             |classificeren                               |DRY_RUN_ROOT_REVIEW                       |Ja    |
|3-8     |`06_PROJECTS/• EVENTS`                      |HOLD                                                           |classificeren                               |HOLD_OWNER_REVIEW                         |Ja    |
|8-10    |`07_ ARCHIVE` *(spatie)*                    |`99_ARCHIVE`                                                   |inventariseren + samenvoegen; shims behouden|**FOUND → DRY_RUN_ROOT_REVIEW (2G-4 fix)**|Ja    |

-----

## Statusoverzicht (projectie 2G vs werkelijke 2F-run)

|Status             |2F (19:09)|2G (projectie)|Verschil                         |
|:------------------|:--------:|:------------:|:-------------------------------:|
|TARGET_MISSING     |11        |**0**         |✅ opgelost (roots bestaan nu)    |
|SOURCE_NOT_FOUND   |1         |**0**         |✅ opgelost (07_ ARCHIVE via ID)  |
|UNEXPECTED_ROOT    |1         |**0**         |✅ opgelost (07_ ARCHIVE herkend) |
|TARGET_PRESENT     |0         |12            |nieuw                            |
|KEPT_ROOT          |0         |1             |00_INBOX (2G-1)                  |
|LOCKED_MAPPING     |0         |1 (+children) |01→02 (2G-3)                     |
|DRY_RUN_ROOT_REVIEW|8         |7             |01_ARTIST nu LOCKED i.p.v. review|
|HOLD_OWNER_REVIEW  |3         |3             |ongewijzigd                      |

-----

## Controlepunten

|Controlepunt                       |Vereist|Projectie 2G             |Conclusie             |
|:----------------------------------|:-----:|:------------------------|:---------------------|
|DRY_RUN aan                        |Ja     |Ja                       |PASS                  |
|Drive-mutaties uit                 |Ja     |Ja                       |PASS                  |
|Alle 12 doel-roots aanwezig        |Ja     |Ja (12/12)               |PASS                  |
|Geen SOURCE_NOT_FOUND              |Ja     |0                        |PASS                  |
|Geen UNEXPECTED_ROOT               |Ja     |0                        |PASS                  |
|HOLD-items uitgesloten van migratie|Ja     |3/3                      |PASS                  |
|Owner-sign-off op review-bronroots |Ja     |7 openstaand             |**OPEN**              |
|Go/No-Go live                      |—      |NO-GO (per instructie 2G)|NO-GO LIVE; GO DRY RUN|

-----

## Volgende stap om de échte log te genereren

1. Plak `SAFE_ROOTS_MIGRATION_CONFIG_2G.gs` in het migratiescript (vervang oude SOURCE/TARGET/KEEP-config).
1. Plak `OS_CUSTOMMADE_target_structure.gs` in het target-structure project (00_INBOX-root).
1. Draai de dry-run-functie (DRY_RUN = TRUE, execution disabled).
1. Verwacht resultaat: 0× TARGET_MISSING, 0× SOURCE_NOT_FOUND, 0× UNEXPECTED_ROOT — exact zoals hierboven.

*Einde dry-run-projectie 2G.*
