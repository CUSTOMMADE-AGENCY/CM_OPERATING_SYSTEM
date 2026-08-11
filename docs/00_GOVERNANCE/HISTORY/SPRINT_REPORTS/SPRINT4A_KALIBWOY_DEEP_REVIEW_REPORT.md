> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 4A — KALIBWOY Deep Review Report

**Status:** REVIEW-HOLD ONLY

**Datum scan:** 2026-06-17

**Scope:** `01_ARTIST_MANAGEMENT/KALIBWOY`

**Post-merge governance correction:** na merge van PR #77 is de booking/rider target-route gecorrigeerd naar de canonieke CM Drive-root `05_BOOKING`. Deze correctie wijzigt alleen de review-only target-route voor de KALIBWOY rider mapping; er wordt geen live migratie toegevoegd, geen Drive-map aangemaakt, niets verplaatst en niets verwijderd.

## Doel

Dit remediation report legt de actuele risk-folder scan van `KALIBWOY` vast en vertaalt de aangetroffen legacy- en nieuwe structuren naar een review-only migratiemapping.

Dit document is uitsluitend een governance- en remediation-reviewdocument. Er worden geen Drive-bestanden verplaatst, geen mappen aangemaakt, geen items gearchiveerd en geen bestanden verwijderd.

## Conclusie actuele risk-folder scan

`KALIBWOY` is niet direct migratie-klaar.

De artistmap bevat een nieuwe structuur én legacy mappen met royalties, contracten, algemene assets en projecten. Er mag geen live migratie plaatsvinden vóór finance/legal/rights/release review.

De risk-folder scan bevestigt dat gevoelige inhoudstypen niet generiek mogen worden opgesplitst, samengevoegd, verplaatst, verwijderd of gearchiveerd zonder inhoudelijke owner- en specialist-review.

## Niet-onderhandelbare remediation-regels

1. Geen bestanden verplaatsen.
2. Geen mappen aanmaken.
3. Geen deletes.
4. Geen archivering.
5. Geen live migratie.
6. Contracten vereisen legal/rights check.
7. Royalties vereisen finance/rights check.
8. Sync/film-items vereisen sync/licensing review.
9. Release-items vereisen release/masters review.
10. Alleen dit remediation report vastleggen.

## Risk-folder classificatie

| Risk-folder / item                                           | Classificatie                 | Vereiste review vóór migratie  | Remediation-notitie                                                                                                       |
| ------------------------------------------------------------ | ----------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `KALIBWOY/Royalties/2016`                                    | `HOLD_FINANCE_RIGHTS_REVIEW`  | Finance/rights check           | Royaltymateriaal mag pas na inhoudelijke finance- en rights-review naar de finance/royalties-structuur worden voorbereid. |
| `KALIBWOY/Royalties/2017`                                    | `HOLD_FINANCE_RIGHTS_REVIEW`  | Finance/rights check           | Royaltymateriaal mag pas na inhoudelijke finance- en rights-review naar de finance/royalties-structuur worden voorbereid. |
| `KALIBWOY/Royalties/2018`                                    | `HOLD_FINANCE_RIGHTS_REVIEW`  | Finance/rights check           | Royaltymateriaal mag pas na inhoudelijke finance- en rights-review naar de finance/royalties-structuur worden voorbereid. |
| `KALIBWOY/Royalties/SpinninRecords20192...`                  | `HOLD_FINANCE_RIGHTS_REVIEW`  | Finance/rights check           | Statement- of DSP-achtig materiaal vereist bron-, periode-, partij- en rechtencontrole vóór mapping.                      |
| `KALIBWOY/Contracten/MASTER LICENTIE OVEREENKOMST King Kong` | `HOLD_LEGAL_RIGHTS_REVIEW`    | Legal/rights check             | Masterlicentie vereist controle op partijen, rechten, looptijd, territorium, exploitatie en verplichtingen.               |
| `KALIBWOY/Contracten/ARTIESTEN-KALIBWOY.pdf/docx`            | `HOLD_LEGAL_RIGHTS_REVIEW`    | Legal/rights check             | Artist- of managementovereenkomst vereist contractclassificatie en rechtencheck vóór mapping.                             |
| `KALIBWOY/Algemeen/logo files`                               | `HOLD_ASSET_REVIEW`           | Brand/content owner check      | Logo-assets vereisen bestemmingcheck tussen press/EPK en social/content vóór eventuele normalisatie.                      |
| `KALIBWOY/Algemeen/KALIBWOY VIDEO-FOTOSHOOT RIDER`           | `HOLD_BOOKING_RIDER_REVIEW`   | Booking/production owner check | Rider mag pas na inhoudelijke booking- en production-review worden voorbereid.                                            |
| `KALIBWOY/• PROJECTEN/Podium Zwart 2023`                     | `HOLD_EVENT_REVIEW`           | Event/project owner check      | Eventmap vereist controle op verplichtingen, deliverables, rechten en eventuele financiële afwikkeling.                   |
| `KALIBWOY/• PROJECTEN/Kalibwoy Album 2023 BDMNR`             | `HOLD_RELEASE_MASTERS_REVIEW` | Release/masters review         | Release-item vereist controle op masters, metadata, rechten, distributie en releaseverplichtingen.                        |
| `KALIBWOY/• PROJECTEN/Film`                                  | `HOLD_SYNC_OR_ARCHIVE_REVIEW` | Sync/licensing review          | Film-item vereist sync/licensing beoordeling en archive-besluit vóór verdere route.                                       |
| `KALIBWOY/• PROJECTEN/Mocro maffia`                          | `HOLD_SYNC_OR_ARCHIVE_REVIEW` | Sync/licensing review          | Sync/film-gerelateerd item vereist licensing-, rights- en archive-review vóór verdere route.                              |
| `KALIBWOY/• PROJECTEN/Projecten`                             | `HOLD_LEGACY_PROJECT_REVIEW`  | Legacy project owner check     | Generieke legacy-projectmap vereist inhoudelijke uitsplitsing vóór mapping of sluiting.                                   |

## Voorgestelde review-only mapping

| Actueel item                                                 | Voorgestelde bestemming / status                                                               | Check vereist                  | Migratiestatus |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------ | -------------- |
| `KALIBWOY/Royalties/2016`                                    | `02_ARTIST_MANAGEMENT/KALIBWOY/06_FINANCE/Royalties`                                           | Finance/rights check           | `HOLD_REVIEW`  |
| `KALIBWOY/Royalties/2017`                                    | `02_ARTIST_MANAGEMENT/KALIBWOY/06_FINANCE/Royalties`                                           | Finance/rights check           | `HOLD_REVIEW`  |
| `KALIBWOY/Royalties/2018`                                    | `02_ARTIST_MANAGEMENT/KALIBWOY/06_FINANCE/Royalties`                                           | Finance/rights check           | `HOLD_REVIEW`  |
| `KALIBWOY/Royalties/SpinninRecords20192...`                  | `02_ARTIST_MANAGEMENT/KALIBWOY/06_FINANCE/Royalties/Statements_or_DSP`                         | Finance/rights check           | `HOLD_REVIEW`  |
| `KALIBWOY/Contracten/MASTER LICENTIE OVEREENKOMST King Kong` | `02_ARTIST_MANAGEMENT/KALIBWOY/02_CONTRACT/Master Rights`                                      | Legal/rights check             | `HOLD_REVIEW`  |
| `KALIBWOY/Contracten/ARTIESTEN-KALIBWOY.pdf/docx`            | `02_ARTIST_MANAGEMENT/KALIBWOY/02_CONTRACT/Management_or_Artist_Agreement`                     | Legal/rights check             | `HOLD_REVIEW`  |
| `KALIBWOY/Algemeen/logo files`                               | `02_ARTIST_MANAGEMENT/KALIBWOY/08_PRESS_EPK` or `02_ARTIST_MANAGEMENT/KALIBWOY/07_SOCIALMEDIA` | Brand/content owner check      | `HOLD_REVIEW`  |
| `KALIBWOY/Algemeen/KALIBWOY VIDEO-FOTOSHOOT RIDER`           | `02_ARTIST_MANAGEMENT/KALIBWOY/05_BOOKING/RIDERS`                                 | Booking/production owner check | `HOLD_REVIEW`  |
| `KALIBWOY/• PROJECTEN/Podium Zwart 2023`                     | `HOLD_EVENT_REVIEW`                                                                            | Event/project owner check      | `HOLD_REVIEW`  |
| `KALIBWOY/• PROJECTEN/Kalibwoy Album 2023 BDMNR`             | `02_ARTIST_MANAGEMENT/KALIBWOY/04_RELEASES`                                                    | Release/masters review         | `HOLD_REVIEW`  |
| `KALIBWOY/• PROJECTEN/Film`                                  | `HOLD_SYNC_OR_ARCHIVE_REVIEW`                                                                  | Sync/licensing review          | `HOLD_REVIEW`  |
| `KALIBWOY/• PROJECTEN/Mocro maffia`                          | `HOLD_SYNC_OR_ARCHIVE_REVIEW`                                                                  | Sync/licensing review          | `HOLD_REVIEW`  |
| `KALIBWOY/• PROJECTEN/Projecten`                             | `HOLD_LEGACY_PROJECT_REVIEW`                                                                   | Legacy project owner check     | `HOLD_REVIEW`  |

## Review-gates vóór live migratie

Voordat `KALIBWOY` verder mag worden voorbereid voor live migratie, moeten minimaal de volgende review-gates zijn afgerond:

- Finance- en rights-review op alle royaltyjaren, statements en DSP-gerelateerde documenten.
- Legal- en rights-review op alle contracten, masterlicenties, artist agreements en management agreements.
- Brand/content-review op logo-, press-, EPK- en socialmedia-assets.
- Booking/production-review op riders en shoot-gerelateerde production assets.
- Event/project-review op `Podium Zwart 2023` en vergelijkbare projectdossiers.
- Release/masters-review op `Kalibwoy Album 2023 BDMNR` en andere release-items.
- Sync/licensing-review op film-, serie-, Mocro Maffia- en andere sync-gerelateerde items.
- Legacy-projectreview op generieke projectmappen voordat eventuele mapping, opsplitsing of sluiting wordt voorgesteld.

## Remediation status

De actuele risk-folder scan ondersteunt geen live migratie van `KALIBWOY`. Alle genoemde routes zijn uitsluitend review-only mappings. `KALIBWOY` blijft `HOLD_DEEP_REVIEW` totdat finance/legal/rights/release/sync/asset owner-reviews zijn afgerond en expliciet zijn goedgekeurd.

GEREED VOOR KALIBWOY MIGRATION REVIEW
