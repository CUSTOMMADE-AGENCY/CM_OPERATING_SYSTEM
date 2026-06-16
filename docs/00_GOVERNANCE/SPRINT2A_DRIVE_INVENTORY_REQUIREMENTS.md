# Sprint 2A — Drive Inventory Requirements

## Status

**Inventarisatiestatus:** GEREED OM INVENTARISATIE TE STARTEN  
**Migratiestatus:** NIET GEREED VOOR MIGRATIE

Dit document bepaalt exact welke informatie nodig is om de daadwerkelijke Google Drive-migratie van Custommade Agency uit te voeren. Sprint 2A is een inventarisatiefase: er worden geen Drive-bestanden verplaatst, verwijderd, hernoemd, samengevoegd of opnieuw gedeeld voordat alle verplichte inventarisdata is vastgelegd en gevalideerd.

## Doel

Het doel van Sprint 2A is om de ontbrekende Drive-informatie zichtbaar te maken en om per huidige map een onderbouwd migratiebesluit te kunnen nemen. De migratie mag pas starten wanneer per relevante map duidelijk is:

1. wat de huidige locatie en inhoud is;
2. wie eigenaar en beslisser is;
3. welke governanceclassificatie geldt;
4. welke nieuwe locatie binnen `OS_CUSTOMMADE` verplicht is;
5. welke actieve links, shortcuts, ClickUp-verwijzingen, Gmail-verwijzingen of AI-agentinstructies geraakt worden;
6. welke risico's, HOLD-criteria en controlepunten van toepassing zijn.

## Governancebasis

Deze requirements volgen de governanceprioriteit uit de gelockte CM_OS-governance:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md`
5. `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md`

Belangrijke locked uitgangspunten:

- GitHub is de source of truth voor governance, SOPs, Playbooks, templates en systeemdocumentatie.
- Google Drive is operationele opslag voor live dossiers, documenten, deliverables en rapportages.
- ClickUp is uitvoering, Pipeline, owners, deadlines en evidence.
- Moneybird blijft de financiële waarheid.
- `02_ARTIST_MANAGEMENT` blijft de primaire locatie voor alle artiestendossiers.
- `03_CLIENTS` bevat uitsluitend merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.
- `04_DEALS` bevat transacties, catalog sales, licensing, sync, sponsorships en endorsement deals.
- CM en FIERCE blijven strikt gescheiden.
- Pure shims blijven behouden zolang ze actief gelinkt zijn.

## Benodigde Drive export

De Drive export moet voldoende zijn om zonder openen van ieder individueel bestand te bepalen welke mappen bestaan, hoe ze heten, wie toegang heeft en waar actieve afhankelijkheden kunnen zitten.

### Verplichte exportvelden

| Veld | Verplicht | Doel |
|---|---:|---|
| Drive item ID | Ja | Stabiele identificatie, ook wanneer naam of locatie wijzigt. |
| Naam | Ja | Herkenning en duplicate-detectie. |
| Type | Ja | Onderscheid folder, file, shortcut, shared drive, Google Doc, Sheet, PDF of export. |
| Huidig pad | Ja | Bronlocatie voor migratiebesluit. |
| Parent folder ID | Ja | Controle op daadwerkelijke hiërarchie. |
| Eigenaar | Ja | Ownerinventaris en beslisrouting. |
| Gedeeld met | Ja | Toegangsrisico's en privacycontrole. |
| Link sharing status | Ja | Risico op openbare of te brede toegang. |
| Laatst gewijzigd | Ja | Actief, slapend of archiveerbaar bepalen. |
| Laatst gewijzigd door | Ja | Operationele eigenaar of recente gebruiker identificeren. |
| Aanmaakdatum | Ja | Legacy- en auditcontext. |
| Bestandsomvang of item count | Ja | Migratie-impact en controle op volledigheid. |
| Shortcut-doel | Ja, indien shortcut | Shims en actieve verwijzingen niet breken. |
| URL | Ja | Linkinventarisatie en post-migratiecontrole. |
| Beschrijving/notities | Indien beschikbaar | Context voor owner-review. |

### Exportscope

De export moet minimaal bevatten:

- alle top-level mappen rond CM en oude briefing-roots;
- alle mappen onder de beoogde `OS_CUSTOMMADE`-root;
- alle relevante subfolders binnen artist-, client-, deal-, operations-, legal-, finance-, marketing-, content- en archivecontext;
- alle shortcuts en shims die naar CM-content verwijzen;
- alle mappen met mogelijke FIERCE-verwijzing, alleen om ze uit te sluiten van CM-migratie;
- alle legacy roots zoals briefing-, pipeline-, business-, marketing-, archive- of shared-services achtige Drive-lagen.

## Benodigde folderinventaris

Per map moet een migratierecord worden ingevuld in `docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` of een daarvan afgeleide inventarissheet.

### Verplichte foldervelden

| Veld | Verplicht | Toelichting |
|---|---:|---|
| Huidige map | Ja | Exacte huidige mapnaam en pad. |
| Drive ID | Ja | Unieke Drive-ID van de map. |
| Huidige root | Ja | Bronroot of legacy-root. |
| Classificatie | Ja | Artist, client, deal, operations, legal, finance, marketing, content, admin, archive, shim, FIERCE, onbekend of gemengd. |
| Eigenaar | Ja | Persoon die inhoudelijk verantwoordelijk is. |
| Beslisser | Ja | Persoon die migratieactie mag goedkeuren. |
| Nieuwe locatie | Ja, tenzij HOLD | Doelpad binnen `OS_CUSTOMMADE`. |
| Actie | Ja | Behouden, verplaatsen, samenvoegen, archiveren, uitsluiten, HOLD. |
| Risico | Ja | Laag, middel, hoog plus korte reden. |
| Status | Ja | Open, in review, HOLD, akkoord, gemigreerd, uitgesloten, gearchiveerd. |
| Linkafhankelijkheden | Ja | ClickUp, Gmail, Drive shortcuts, documenten, AI-agents, externe links. |
| Toegangscontrole nodig | Ja | Ja/nee plus reden. |
| Duplicaatcheck | Ja | Geen duplicaat, mogelijk duplicaat, confirmed duplicaat. |
| Vertrouwelijkheid | Ja | Normaal, intern, vertrouwelijk, legal, finance, client-sensitive. |
| Laatste activiteit | Ja | Actief, slapend, onbekend of archiveerbaar. |

## Benodigde ownerinventaris

Voor daadwerkelijke migratie is een ownerinventaris nodig zodat geen map zonder verantwoordelijkheid wordt verplaatst.

### Verplichte ownerinformatie

| Informatie | Verplicht | Doel |
|---|---:|---|
| Map-owner | Ja | Inhoudelijke verantwoordelijkheid. |
| Migratiebeslisser | Ja | Goedkeuring van actie en doelpad. |
| Operationele gebruiker | Ja, indien afwijkend | Persoon/team dat dagelijks met de map werkt. |
| Legal/finance reviewer | Indien relevant | Controle op vertrouwelijkheid, bewijsstatus en Moneybird-context. |
| ClickUp-owner | Indien taakgerelateerd | Link met uitvoering en lopende taken. |
| Status bevestiging | Ja | Actief, inactief, afgerond, test, legacy, onbekend. |
| Escalatiepersoon | Ja bij HOLD | Wie beslist bij conflict of ontbrekende informatie. |

### Ownerregels

- Artistmappen worden altijd tegen `02_ARTIST_MANAGEMENT` gevalideerd.
- Commerciële relaties worden alleen als `03_CLIENTS` geclassificeerd wanneer ze merk, bedrijf, opdrachtgever, sponsor, media partner of commerciële relatie zijn.
- Dealmappen worden onder `04_DEALS` gepland, niet onder lane-documentatie.
- Finance-informatie mag Drive niet tot financiële waarheid maken; Moneybird-status moet worden gecontroleerd.
- Legal- en contractinformatie mag alleen na toegangsreview worden verplaatst.
- FIERCE-content krijgt geen CM-owner en wordt uitgesloten van CM-migratie.

## Benodigde linkinventarisatie

De linkinventarisatie is verplicht omdat actieve links, shortcuts en shims niet blind mogen worden verwijderd of gebroken.

### Te controleren linkbronnen

| Bron | Controle |
|---|---|
| ClickUp | Taken, beschrijvingen, custom fields, attachments, dashboards, templates en automations met Drive-links. |
| Gmail | Templates, lopende threads, gedeelde links en referenties in klantcommunicatie. |
| Drive shortcuts | Shortcuts naar oude roots, shims of dossiermappen. |
| Google Docs/Sheets/Slides | Interne links naar mappen, bewijsstukken, templates of deliverables. |
| GitHub-documentatie | Governance-, SOP-, workflow- of systeemdocumenten met Drive-padverwijzingen. |
| AI-agentinstructies | Agentdocs of prompts die oude padnamen, shims of roots noemen. |
| Automations/Apps Script | Hardcoded folder IDs, root IDs, template IDs en outputpaden. |
| Externe shares | Buyer-, client-, artist-, counsel- of partnerlinks. |

### Verplichte linkvelden

- bron van de link;
- brondocument of taak;
- oude URL of folder ID;
- doelmap;
- type afhankelijkheid;
- eigenaar van de link;
- moet behouden, omgezet of verwijderd worden;
- status van update;
- risico bij breuk.

## Welke data ontbreekt

Op basis van het Sprint 2-migratieplan ontbreekt de volgende data voordat daadwerkelijke migratie mag starten:

1. Actuele volledige Drive-export met folder-ID's, paden, owners, deelinstellingen en shortcutinformatie.
2. Volledige folderinventaris van bestaande top-level en relevante subfolders.
3. Owner- en beslissermapping per map.
4. Bevestigde classificatie per map: artist, client, deal, operations, legal, finance, marketing, content, admin, archive, shim, FIERCE, onbekend of gemengd.
5. Doelpad per map binnen `OS_CUSTOMMADE`.
6. Actielabel per map: behouden, verplaatsen, samenvoegen, archiveren, uitsluiten of HOLD.
7. Duplicaatinventaris met canonical naam en leidende versie.
8. Linkinventarisatie vanuit ClickUp, Gmail, Drive shortcuts, docs, GitHub, AI-agents en automations.
9. Shimlijst met actieve afhankelijkheden.
10. FIERCE-uitsluitlijst.
11. Legal/finance vertrouwelijkheids- en toegangsreview.
12. Moneybird-statuscontrole voor finance-gerelateerde mappen.
13. Lijst van onbekende of gemengde mappen die niet zonder review mogen migreren.
14. Migratiecontrolemomenten met verantwoordelijke reviewer.
15. Post-migratie validatieplan voor links, toegang, duplicaten en doelstructuur.

## Hoe deze data verzameld wordt

| Datatype | Verzameling | Output |
|---|---|---|
| Drive export | Exporteer metadata uit Google Drive of Admin/Drive tooling zonder content in GitHub te plaatsen. | Metadata-export buiten GitHub en samenvatting in inventaris. |
| Folderinventaris | Vul per relevante map het inventariestemplate in. | `DRIVE_INVENTORY_TEMPLATE`-records of inventarissheet. |
| Ownerinventaris | Review met operationele owners en beslissers per lane. | Ownerkolommen ingevuld en akkoordstatus per map. |
| Linkinventarisatie | Scan ClickUp, Gmail, Drive shortcuts, docs, GitHub, AI-agentdocs en automations op Drive-links en folder IDs. | Linkregister met updateactie. |
| Duplicaten | Vergelijk namen, aliases, folder IDs, inhoudstype en laatste activiteit. | Duplicaatlijst met canonical map. |
| FIERCE-uitsluiting | Zoek op FIERCE-namen, roots, templates en gedeelde context; label als uitgesloten. | FIERCE-uitsluitlijst. |
| Legal/finance review | Controleer vertrouwelijkheid, toegangsrechten, contractstatus en Moneybird-referentie. | Reviewstatus en eventuele HOLD. |
| HOLD-lijst | Verzamel alle mappen met ontbrekende owner, onduidelijke classificatie, conflict of te hoog risico. | HOLD-register met escalatiepersoon. |
| Controlepunten | Definieer pre-flight, pre-move, post-move en closure checks. | Migratiechecklist met reviewer. |

## Verplichte informatie vóór migratie

Een map mag pas worden gemigreerd wanneer de volgende informatie volledig is ingevuld:

1. huidige mapnaam, huidig pad en Drive ID;
2. classificatie volgens CM-governance;
3. eigenaar en migratiebeslisser;
4. nieuwe locatie binnen `OS_CUSTOMMADE`;
5. gekozen actie;
6. risico-inschatting en eventuele mitigatie;
7. status van linkinventarisatie;
8. status van duplicaatcheck;
9. status van toegangscontrole;
10. FIERCE-check;
11. Moneybird-check bij finance-inhoud;
12. legal/vertrouwelijkheidscheck bij contracten, claims, approvals of bewijsstukken;
13. HOLD-status indien één van bovenstaande punten ontbreekt of conflicteert.

## HOLD-criteria

Een map krijgt verplicht `HOLD` wanneer één of meer van onderstaande criteria geldt:

| HOLD-criterium | Reden |
|---|---|
| Geen eigenaar of beslisser bekend | Migratie kan niet verantwoord worden goedgekeurd. |
| Classificatie onbekend of gemengd | Risico op verkeerde root, duplicatie of datalek. |
| Mogelijke FIERCE-content | CM/FIERCE-scheiding is locked governance. |
| Artistmap staat of lijkt onder clientclassificatie te vallen | Artists mogen niet naar `03_CLIENTS`. |
| Dealmap staat buiten `04_DEALS` zonder duidelijke reden | Actieve deals moeten centraal onder `04_DEALS`. |
| Finance-map zonder Moneybird-status | Moneybird mag niet worden vervangen als financiële waarheid. |
| Legal/contractmap zonder toegangsreview | Risico op vertrouwelijkheids- of bewijsprobleem. |
| Actieve links of shims niet geïnventariseerd | Links mogen niet blind breken. |
| Mogelijk duplicaat zonder canonical beslissing | Samenvoegen kan leidende versies overschrijven. |
| Extern gedeelde map zonder share-review | Risico op toegangsfouten na verplaatsing. |
| Oude root met actieve automation | Hardcoded folder IDs kunnen breken. |
| Archiveerbare map met open claim, rights-, royalty- of success-fee punt | Archive kan lopende verplichting verbergen. |

## Risico's

| Risico | Impact | Preventie vóór migratie | Controle na migratie |
|---|---|---|---|
| Artistdossier wordt als client gemigreerd | Hoog | Artistlijst, aliases en `03_CLIENTS`-scan valideren. | Controle dat geen actieve artistmap onder `03_CLIENTS` staat. |
| Actieve links breken | Hoog | Linkinventarisatie per map verplicht. | Test ClickUp-, Gmail-, Drive-shortcut- en automationlinks. |
| FIERCE-content belandt in CM | Hoog | FIERCE-uitsluitlijst en pre-flight scan. | Controle op FIERCE-termen in gemigreerde mappen. |
| Moneybird wordt ondermijnd | Hoog | Finance alleen als bewijs/referentie classificeren. | Controle dat financiële waarheid in Moneybird blijft. |
| Legal/finance-toegang te breed | Hoog | Share- en ownerreview vóór migratie. | Permission audit na migratie. |
| Duplicaten worden fout samengevoegd | Hoog | Canonical map en leidende versie vooraf bepalen. | Controle op dubbele actieve mappen. |
| Shims worden te vroeg verwijderd | Middel | Shims pas archiveren na linkinventarisatie. | Controle op resterende shortcut- en linkafhankelijkheden. |
| Archive wordt dumpfolder | Middel | Archivepad met broncontext en migratiedatum verplicht. | Controle op archive-index en statusnotities. |
| Pre-due-diligence deal krijgt te zware Data Room-structuur | Middel | Lean Nederlandse dealstructuur afdwingen. | Controle op dealfase en substructuur. |
| GitHub krijgt vertrouwelijke Drive-content | Hoog | Alleen governance en metadata samenvatten; geen clientcontent committen. | Git diff controleren op vertrouwelijke inhoud. |

## Migratiecontrolepunten

### Controlepunt 0 — Pre-flight inventaris

- `OS_CUSTOMMADE` en alle goedgekeurde roots bestaan.
- Drive export is actueel.
- Alle relevante top-level mappen zijn opgenomen.
- FIERCE-uitsluitlijst is aangemaakt.
- Inventaristemplate is beschikbaar.

### Controlepunt 1 — Classificatie en ownership

- Elke map heeft classificatie.
- Elke map heeft eigenaar en beslisser.
- Artist-, client- en dealclassificaties zijn getoetst aan locked governance.
- Onbekende en gemengde mappen staan op HOLD.

### Controlepunt 2 — Link- en shimcontrole

- ClickUp-links zijn geïnventariseerd.
- Gmail-links zijn geïnventariseerd.
- Drive shortcuts en shims zijn geïnventariseerd.
- GitHub-, AI-agent- en automationverwijzingen zijn geïnventariseerd.
- Hardcoded folder IDs zijn bekend.

### Controlepunt 3 — Risico- en toegangsreview

- Legal- en contractmappen zijn gereviewd.
- Finance-mappen zijn tegen Moneybird gecontroleerd.
- Extern gedeelde mappen zijn gereviewd.
- Duplicaten hebben canonical beslissingen.
- Alle hoge risico's hebben mitigatie of HOLD.

### Controlepunt 4 — Go/no-go vóór verplaatsing

- Geen map met ontbrekende verplichte informatie staat op `akkoord`.
- Alle HOLD-items zijn uitgesloten van de migratiebatch.
- Migratiebatch bevat alleen maps met owner-akkoord.
- Terugdraaipad en post-migratiecontrole zijn bekend.

### Controlepunt 5 — Post-migratie validatie

- Doelpaden kloppen met `OS_CUSTOMMADE`-governance.
- Geen actieve artistmap staat onder `03_CLIENTS`.
- Geen actieve dealmap staat buiten `04_DEALS`.
- Oude roots zijn niet meer operationeel, tenzij shim/HOLD.
- Links, shortcuts en automations zijn bijgewerkt of bewust behouden.
- Rechten en share-instellingen zijn gecontroleerd.
- Uitzonderingen zijn vastgelegd in een migratielog.

## Definitieve migratiechecklist

Gebruik deze checklist per migratiebatch. Start geen daadwerkelijke verplaatsing zolang één verplicht item ontbreekt.

### A. Voorbereiding

- [ ] Drive export is actueel en bevat folder IDs, paden, owners, sharestatus en shortcuts.
- [ ] Inventaristemplate is ingevuld voor alle mappen in scope.
- [ ] `OS_CUSTOMMADE`-doelstructuur is gevalideerd.
- [ ] FIERCE-uitsluitlijst is compleet.
- [ ] HOLD-register is aangemaakt.

### B. Per map

- [ ] Huidige map, huidig pad en Drive ID zijn ingevuld.
- [ ] Classificatie is ingevuld.
- [ ] Eigenaar is ingevuld.
- [ ] Beslisser is ingevuld.
- [ ] Nieuwe locatie is ingevuld of map staat op HOLD.
- [ ] Actie is ingevuld.
- [ ] Risico en mitigatie zijn ingevuld.
- [ ] Linkafhankelijkheden zijn geïnventariseerd.
- [ ] Duplicaatcheck is afgerond.
- [ ] Toegangscontrole is afgerond.
- [ ] Legal/finance/Moneybird-check is afgerond indien relevant.
- [ ] FIERCE-check is afgerond.
- [ ] Status is `akkoord`, `uitgesloten` of `HOLD`.

### C. Batch go/no-go

- [ ] Er zitten geen `HOLD`-items in de migratiebatch.
- [ ] Alle owners hebben akkoord gegeven.
- [ ] Alle hoge risico's zijn gemitigeerd of uitgesloten.
- [ ] Linkupdates zijn voorbereid.
- [ ] Post-migratie validatie-owner is aangewezen.
- [ ] Terugdraaipad is bekend.

### D. Na migratie

- [ ] Doelpad en mapnaam gecontroleerd.
- [ ] Share-instellingen gecontroleerd.
- [ ] ClickUp-links gecontroleerd.
- [ ] Gmail- en externe links gecontroleerd.
- [ ] Drive shortcuts en shims gecontroleerd.
- [ ] AI-agent- en automationverwijzingen gecontroleerd.
- [ ] Duplicaten of oude roots opgeruimd, gearchiveerd of bewust behouden.
- [ ] Migratielog bijgewerkt.
- [ ] Uitzonderingen en lessons learned vastgelegd.

## Eindoordeel

De daadwerkelijke Drive-migratie is pas toegestaan na volledige inventarisatie, ownerreview, linkinventarisatie, HOLD-afhandeling en go/no-go per migratiebatch. Tot die tijd blijft Sprint 2 in analyse- en voorbereidingsstatus.

GEREED VOOR INVENTARISATIE
