# Sprint 2E — Partial Live Migration Plan

## Doel

Dit plan bereidt een **gedeeltelijke live migratie** voor van alleen veilige `OS_CUSTOMMADE` roots. De migratie is beperkt tot roots waarvoor de doelroot eenduidig is, geen conflictregels gelden en geen gevoelige of uitgesloten content wordt meegenomen.

## Scope en harde randvoorwaarden

### Migreren toegestaan

Alleen onderstaande roots mogen in de partial live migratie worden meegenomen:

- `01_ARTIST_MANAGEMENT` → `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`
- `02_MASTER_BOUTIQUE` → `OS_CUSTOMMADE/01_MASTER_BOUTIQUE`
- `05_MARKETING` → `OS_CUSTOMMADE/08_MARKETING` / `OS_CUSTOMMADE/09_CONTENT`

### Niet migreren / HOLD

Onderstaande roots blijven volledig buiten de live migratie:

- `00_INBOX`
- `04_BUSINESS`
- `06_PROJECTS/EVENTS`
- `07_ARCHIVE`

### Niet-onderhandelbare migratieregels

1. **Geen verwijderingen.** Bronnen blijven bestaan totdat post-migratiecontrole, owner-acceptatie en linkvalidatie zijn afgerond.
2. **Geen archivering zonder review.** Archiefacties zijn uitgesloten van deze partial live migratie.
3. **Geen FIERCE-content meenemen.** Elk FIERCE-signaal leidt tot directe uitsluiting en `HOLD`.
4. **Geen legal/finance/rechten zonder owner-check.** Contracten, rechtenbewijzen, financiële stukken, deal-evidence en privacygevoelige data worden niet live gemigreerd zonder expliciete owner-review.
5. **Alleen roots zonder conflictregels live uitvoeren.** Zodra een root, item of submap gemengde classificatie, onbekende eigenaar, conflicterende bestemming of gevoelige inhoud bevat, gaat dat onderdeel naar `HOLD`.
6. **Geen bulk-correcties tijdens live migratie.** De live run voert alleen goedgekeurde verplaatsingen uit; naamopschoning, deduplicatie en consolidatie worden apart gereviewd.

## Veilige migratielijst

| Bronroot | Toegestane doelroot | Live-actie | Veiligheidsvoorwaarde | Status |
|---|---|---|---|---|
| `01_ARTIST_MANAGEMENT` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` | Verplaatsen of koppelen aan de definitieve artist-management-root. | Alleen artist-managementcontent zonder FIERCE-signaal, zonder legal/finance/rechtenblokkade en zonder targetconflict. | **GO onder voorwaarden** |
| `02_MASTER_BOUTIQUE` | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` | Verplaatsen of koppelen aan de definitieve Master Boutique-root. | Alleen operationele Master Boutique-content die niet onder deal-rights, legal, finance of buyer-confidential evidence valt. | **GO onder voorwaarden** |
| `05_MARKETING` | `OS_CUSTOMMADE/08_MARKETING` | Verplaatsen van algemene marketingstrategie, planning, campagnes, brandmateriaal en niet-rechtengevoelige marketingoperatie. | Alleen CM-marketingcontent zonder FIERCE-signaal en zonder contentrechten- of clientconflict. | **GO onder voorwaarden** |
| `05_MARKETING` | `OS_CUSTOMMADE/09_CONTENT` | Verplaatsen van contentproductie, formats, publicatie-assets en contentkalenders. | Alleen content waarvoor eigenaarschap, publicatiestatus en CM-context duidelijk zijn; geen FIERCE-assets of rechtenonduidelijkheid. | **GO onder voorwaarden** |

## Item-level live criteria

Een item binnen de veilige roots mag alleen live worden gemigreerd als alle onderstaande controles `PASS` zijn:

| Controle | Vereist resultaat |
|---|---|
| Bronroot is een van de toegestane roots. | `01_ARTIST_MANAGEMENT`, `02_MASTER_BOUTIQUE` of `05_MARKETING`. |
| Doelroot is eenduidig. | Exact één doelpad binnen `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`, `OS_CUSTOMMADE/01_MASTER_BOUTIQUE`, `OS_CUSTOMMADE/08_MARKETING` of `OS_CUSTOMMADE/09_CONTENT`. |
| Geen FIERCE-signaal. | Naam, pad, metadata en ownercontext bevatten geen FIERCE-indicatie. |
| Geen legal/finance/rechtencontent zonder owner-check. | Bij twijfel: niet migreren, maar `HOLD_OWNER_REVIEW`. |
| Geen gemengde classificatie. | Item hoort inhoudelijk bij één root en één businessdoel. |
| Geen conflictregel. | Geen bestaande governance-regel wijst naar een andere root of reviewroute. |
| Geen archiefactie nodig. | Deze partial live migratie archiveert niets. |
| Geen delete-actie nodig. | Deze partial live migratie verwijdert niets. |

## Uitgesloten HOLD-lijst

| Root / patroon | HOLD-reden | Vereiste review vóór latere migratie |
|---|---|---|
| `00_INBOX` | Intake-root met onbekende of gemengde classificatie; niet geschikt voor directe live migratie. | Item-level classificatie, owner mapping, FIERCE-scan, linkcontrole en privacycheck. |
| `04_BUSINESS` | Kan clients, deals, operations, legal, finance of rechten bevatten; doelroot niet veilig eenduidig. | Business-ownerbesluit per item, classificatie naar `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE` of `07_LEGAL`. |
| `06_PROJECTS/EVENTS` | Events kunnen artist-, client-, deal-, operations- of contentcontext bevatten; hoog risico op actieve verplichtingen. | Eventtype, owner, deliverables, rechten, facturatie, actieve links en status per event vastleggen. |
| `07_ARCHIVE` | Archief mag niet zonder review worden geconsolideerd; actieve dossiers en shortcuts kunnen in archive zitten. | Broncontext, archiefreden, actieve-dossiercheck, shortcut/linkcontrole en owner-acceptatie. |
| Elk pad met `FIERCE`-signaal | CM/FIERCE-scheiding mag niet worden geschonden. | Uitsluiten van CM-migratie tenzij expliciet bewezen is dat het geen FIERCE-content is. |
| Legal-, finance-, contract-, rights-, royalty- of chain-of-title-content | Gevoelige inhoud vereist owner- en permissioncheck. | Owner-review, legal/finance/rechtenvalidatie en doelpadbesluit. |
| Unknown, mixed, duplicate of conflicterende items | Geen veilige live target. | Handmatige review en expliciete migratiebeslissing. |

## Live-run volgorde

1. **Freeze window bevestigen.** Tijdens de live run geen handmatige wijzigingen in de drie toegestane bronroots.
2. **Preflight export draaien.** Maak een actuele itemlijst met ID, parent-ID, pad, owner, modified date, sharingstatus en voorgesteld doelpad.
3. **HOLD-filters toepassen.** Sluit `00_INBOX`, `04_BUSINESS`, `06_PROJECTS/EVENTS`, `07_ARCHIVE`, FIERCE-signalen en gevoelige/legal/finance/rechtenitems uit.
4. **Targetvalidatie uitvoeren.** Controleer dat elk overblijvend item exact één doelroot heeft.
5. **Live migratie per root uitvoeren.** Volgorde:
   1. `01_ARTIST_MANAGEMENT` → `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`
   2. `02_MASTER_BOUTIQUE` → `OS_CUSTOMMADE/01_MASTER_BOUTIQUE`
   3. `05_MARKETING` → `OS_CUSTOMMADE/08_MARKETING` / `OS_CUSTOMMADE/09_CONTENT`
6. **Post-run controle uitvoeren.** Vergelijk bron- en doelinventaris, controleer itemaantallen, linktoegang en sharing.
7. **Owner sign-off vastleggen.** Geen bronroot sluiten of archiveren zonder expliciete acceptatie.

## Rollback/checklist

### Preflight rollback-voorwaarden

- [ ] Actuele export van bron- en doelstructuur is opgeslagen.
- [ ] Alle live-acties hebben bron-ID, doel-ID, originele parent-ID en timestamp in het migratielog.
- [ ] Alle `HOLD`-items zijn expliciet uitgesloten en niet gewijzigd.
- [ ] Er zijn geen delete- of archive-acties in de live-run opgenomen.
- [ ] Owner/contactpersoon voor elke toegestane root is bekend.

### Rollback-acties bij incident

1. **Stop live-run direct** bij FIERCE-hit, legal/finance/rechtenhit, targetconflict, permissionfout of onverwachte root.
2. **Gebruik migratielog** om verplaatste items terug te zetten naar hun originele parent-ID.
3. **Herstel sharing alleen op basis van export**, niet op basis van aannames.
4. **Markeer betrokken item als `HOLD_INCIDENT_REVIEW`.**
5. **Voer verschilcontrole uit** tussen preflight export en herstelde bronstructuur.
6. **Herstart niet automatisch.** Een nieuwe live-run vereist owner-acceptatie en aangepast plan.

### Post-run checklist

- [ ] Geen items verwijderd.
- [ ] Geen items gearchiveerd.
- [ ] Geen `00_INBOX`, `04_BUSINESS`, `06_PROJECTS/EVENTS` of `07_ARCHIVE` items verplaatst.
- [ ] Geen FIERCE-content gemigreerd.
- [ ] Geen legal/finance/rechtencontent zonder owner-check gemigreerd.
- [ ] Alle gemigreerde items staan onder de juiste toegestane doelroot.
- [ ] Alle uitgesloten items staan nog op hun oorspronkelijke locatie of expliciet op `HOLD`.
- [ ] Link- en sharingcontrole is afgerond.
- [ ] Owner sign-off is vastgelegd.

## Go/No-Go conclusie

| Controlepunt | Status |
|---|---|
| Scope beperkt tot veilige roots. | **PASS** |
| HOLD-roots expliciet uitgesloten. | **PASS** |
| Geen verwijderingen toegestaan. | **PASS** |
| Geen archivering zonder review. | **PASS** |
| FIERCE-content uitgesloten. | **PASS onder preflight-scan** |
| Legal/finance/rechten uitgesloten zonder owner-check. | **PASS onder preflight-scan** |
| Alleen conflictvrije roots live. | **PASS onder targetvalidatie** |
| Rollbackpad beschikbaar. | **PASS indien migratielog volledig is** |

**Conclusie:** de partial live migratie is alleen verantwoord als de preflight export, FIERCE-scan, owner-check voor gevoelige uitzonderingen, targetvalidatie en rollbacklog vóór uitvoering volledig zijn afgerond. Binnen die voorwaarden is de beperkte scope geschikt voor partial live migratie.

GEREED VOOR PARTIAL LIVE MIGRATIE
