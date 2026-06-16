# Sprint 2A — Drive Inventory Requirements

## Status

**Inventarisatiestatus:** GEREED VOOR INVENTARISATIE
**Migratiestatus:** NIET GEREED VOOR MIGRATIE

Dit document bepaalt exact welke informatie eerst verzameld moet worden voordat de daadwerkelijke Google Drive-migratie van Custommade Agency kan worden uitgevoerd.

Er worden in Sprint 2A geen bestanden verplaatst, geen mappen hernoemd, geen shortcuts verwijderd en geen legacy roots opgeschoond. Sprint 2A levert alleen de verplichte inventaris op waarmee Sprint 2 veilig kan worden uitgevoerd.

## Governancebasis

Deze requirements volgen de vastgelegde governance in onderstaande prioriteit:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md`
5. `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md`

## Doel van de inventarisatie

De inventarisatie moet aantonen:

1. welke bestaande Drive-mappen en bestanden binnen CM-scope vallen;
2. welke mappen artist-, client-, deal-, operations-, finance-, legal-, marketing-, content-, admin-, archive-, shim-, FIERCE- of onbekende scope hebben;
3. wie eigenaar en beslisser is per map;
4. welke actieve links, shortcuts, automatiseringen of externe verwijzingen bestaan;
5. welke items veilig kunnen worden verplaatst, samengevoegd, behouden of gearchiveerd;
6. welke items op `HOLD` moeten blijven;
7. welke migratiecontrolepunten verplicht zijn voor go/no-go.

## Benodigde Drive export

Voor migratie is een actuele Drive export of Drive-inventaris nodig met minimaal onderstaande velden.

| Veld | Verplicht | Doel |
|---|---:|---|
| Drive item ID | Ja | Unieke identificatie zodat namen en paden niet als enige bron worden gebruikt. |
| Itemnaam | Ja | Herkenbare map- of bestandsnaam. |
| Itemtype | Ja | Folder, file, shortcut, shared drive item, Google Doc, Sheet, PDF of ander type. |
| Huidig volledig pad | Ja | Bepaalt huidige locatie en legacy-root. |
| Parent folder ID | Ja | Nodig voor verplaatsing, duplicaatcontrole en shortcutanalyse. |
| Eigenaar/account | Ja | Bepaalt wie inhoudelijk mag beslissen. |
| Gedeeld met | Ja | Controle op toegangsrechten en vertrouwelijkheid. |
| Laatst gewijzigd | Ja | Bepaalt actualiteit en archive-kandidaat. |
| Gewijzigd door | Ja | Bepaalt operationele betrokkenheid. |
| Bestandsgrootte of itemcount | Ja, waar beschikbaar | Helpt migratierisico en omvang inschatten. |
| URL | Ja | Nodig voor linkcontrole en post-migratievalidatie. |
| Shortcut target ID | Ja, indien shortcut | Voorkomt het breken of dubbel migreren van shims. |
| Bronroot | Ja | Bepaalt of een map uit oude roots, briefing-roots of `OS_CUSTOMMADE` komt. |
| CM/FIERCE-indicatie | Ja | Borgt strikte scheiding. |
| Vertrouwelijkheidsindicatie | Ja | Signaleert legal, finance, contracten, clientdata en rechtenbewijs. |

### Ontbrekende data

De huidige governance en migratieplanning geven de doelstructuur en regels, maar bevatten nog niet de operationele Drive-data die nodig is voor uitvoering. De volgende data ontbreekt nog:

1. actuele export van alle bestaande top-level Drive-mappen en relevante subfolders;
2. volledige item-ID's, parent-ID's en URLs;
3. exacte huidige paden per map en shortcut;
4. actuele owners en beslissers per map;
5. actuele sharing permissions per map;
6. lijst met actieve Drive shortcuts en pure shims;
7. linkinventarisatie vanuit ClickUp, Gmail, Google Docs, Sheets, automation, scripts en AI-agent instructies;
8. duplicaatlijst met canonical naam per artist, client en deal;
9. FIERCE-uitsluitlijst;
10. lijst met gemengde, onbekende of governance-conflicterende mappen;
11. Moneybird-status per finance-gerelateerde map;
12. legal/confidentiality-status per legal-, contract- en rights-map;
13. migratie-eigenaar per map;
14. migratieactie per map: behouden, verplaatsen, samenvoegen, archiveren, uitsluiten of `HOLD`.

## Benodigde folderinventaris

Elke relevante folder moet worden opgenomen in een inventarislijst met minimaal:

| Veld | Verplicht | Toelichting |
|---|---:|---|
| Huidige map | Ja | Volledig huidig pad. |
| Huidige root | Ja | Bijvoorbeeld oude briefing-root, legacy-root of `OS_CUSTOMMADE`. |
| Maptype | Ja | Artist, client, deal, operations, finance, legal, marketing, content, admin, archive, shim, FIERCE of onbekend. |
| Canonical naam | Ja | Leidende naam na migratie. |
| Nieuwe locatie | Ja, behalve bij `HOLD` | Doelpad binnen `OS_CUSTOMMADE`. |
| Actie | Ja | Behouden, verplaatsen, samenvoegen, archiveren, uitsluiten of `HOLD`. |
| Status | Ja | Te reviewen, goedgekeurd, geblokkeerd, gemigreerd of gevalideerd. |
| Risico | Ja | Laag, middel, hoog of kritiek. |
| Reden risico | Ja | Korte onderbouwing. |
| Open punten | Ja | Wat nog ontbreekt vóór migratie. |

### Classificatieregels

1. Artiestendossiers horen onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`.
2. `OS_CUSTOMMADE/03_CLIENTS` is uitsluitend voor merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.
3. Deal-, catalog sale-, rights brokerage-, licensing-, sync-, sponsorship- en endorsementdossiers horen onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`.
4. Operations is geen dumpfolder; alleen interne proces-, planning-, tooling- en uitvoeringswerkbestanden horen onder `05_OPERATIONS`.
5. Finance-content in Drive is alleen bewijs of referentie; Moneybird blijft financiële waarheid.
6. Generieke legalcontent hoort onder `07_LEGAL`; dossier-specifiek legal bewijs hoort bij het relevante artist-, client- of dealdossier.
7. FIERCE-content wordt uitgesloten van CM-migratie.
8. Pure shims blijven behouden zolang actieve links niet zijn omgezet.

## Benodigde ownerinventaris

Elke map moet een inhoudelijke owner en migratiebeslisser hebben.

| Ownerinformatie | Verplicht | Toelichting |
|---|---:|---|
| Huidige Drive owner | Ja | Account dat eigenaar is in Google Drive. |
| Inhoudelijke owner | Ja | Persoon die kan bepalen wat de map is. |
| Migratiebeslisser | Ja | Persoon die verplaatsen/samenvoegen/archiveren mag goedkeuren. |
| Backup owner | Aanbevolen | Nodig bij afwezigheid of onduidelijke ownership. |
| Business lane | Ja | Master Boutique, Artist Management, Clients, Deals, Operations, Finance, Legal, Marketing of Content. |
| Reviewdatum | Ja | Datum waarop owner akkoord of blokkade heeft gegeven. |
| Besluit | Ja | Go, no-go, `HOLD`, uitsluiten of extra review. |

### Owner-HOLD

Een item krijgt automatisch `HOLD` wanneer:

- geen inhoudelijke owner bekend is;
- owner en Drive-eigenaar verschillen en inhoudelijke goedkeuring ontbreekt;
- meerdere owners verschillende doelpaden aanwijzen;
- de map confidential/legal/finance/rightholder-informatie bevat zonder bevoegde reviewer;
- de map mogelijk FIERCE-content bevat.

## Benodigde linkinventarisatie

Voor elke map en shortcut moet worden vastgesteld of actieve verwijzingen bestaan.

| Linkbron | Wat controleren | Verplicht vóór migratie |
|---|---|---:|
| ClickUp | Tasks, descriptions, attachments, custom fields, docs en dashboards | Ja |
| Gmail | E-mailtemplates, gedeelde links, lopende threads en klantcommunicatie | Ja |
| Google Docs/Sheets/Slides | Interne hyperlinks, references, embedded links en indexbestanden | Ja |
| Drive shortcuts | Shortcut target, bronmap en doelmap | Ja |
| Automations | Apps Script, Make, Zapier of andere flows | Ja |
| AI-agent instructies | Prompts, workflows, README's en systeemdocumentatie met Drive-links | Ja |
| Externe stakeholders | Buyer-, client-, artist-, counsel- of partnerlinks | Ja, indien extern gedeeld |

### Link-HOLD

Een item blijft op `HOLD` wanneer:

1. actieve links bestaan en geen updateplan beschikbaar is;
2. een pure shim nog actief wordt gebruikt;
3. externe stakeholders toegang hebben zonder migratiecommunicatieplan;
4. een automation afhankelijk is van padnaam, folder-ID of shortcut;
5. ClickUp of Gmail nog naar oude locatie verwijst.

## HOLD-criteria

Een folder of bestand mag niet worden gemigreerd en krijgt status `HOLD` wanneer één of meer criteria gelden.

| HOLD-criterium | Voorbeeld | Vereiste oplossing |
|---|---|---|
| Onbekende classificatie | Mapnaam is algemeen of gemengd | Owner-review en classificatie toevoegen. |
| Onbekende owner | Geen inhoudelijke eigenaar bekend | Owner of beslisser aanwijzen. |
| FIERCE-risico | FIERCE naam, template, klant of governance zichtbaar | Uitsluiten of apart laten reviewen. |
| Artist/client-conflict | Artist staat onder clientstructuur | Herclassificeren naar `02_ARTIST_MANAGEMENT`. |
| Deal/lane-conflict | Deal staat onder business lane-root | Doelpad onder `04_DEALS` vastleggen. |
| Legal-onduidelijkheid | Contracten, claims of rights evidence zonder context | Legal reviewer en dossiercontext toevoegen. |
| Finance-onduidelijkheid | Budget, factuur, royalty of Moneybird-export zonder bronstatus | Moneybird-status bevestigen. |
| Actieve linkafhankelijkheid | ClickUp, Gmail of automation verwijst naar oude locatie | Linkupdateplan maken. |
| Duplicaat zonder canonical keuze | Twee folders voor dezelfde artist/client/deal | Leidende map en samenvoegplan vastleggen. |
| Toegangsrisico | Te brede sharing op legal/finance/clientdata | Permission review uitvoeren vóór verplaatsing. |
| Shim-afhankelijkheid | Shortcut of shim nog actief gelinkt | Shim behouden en linkomzetting plannen. |

## Risico's

| Risico | Impact | Inventarisatie-eis |
|---|---|---|
| Artists worden als clients gemigreerd | Hoog | Artistlijst en aliasvarianten verplicht matchen tegen `03_CLIENTS`. |
| Actieve links breken | Hoog | Linkinventarisatie en updateplan verplicht vóór verplaatsing. |
| FIERCE-content belandt in CM | Kritiek | FIERCE-scan en uitsluitlijst verplicht. |
| Moneybird wordt vervangen door Drive-spreadsheets | Hoog | Finance-mappen krijgen Moneybird-status en bronnotitie. |
| Legal bewijs raakt uit dossiercontext | Hoog | Legalcontent classificeren als generiek of dossier-specifiek. |
| Duplicaten worden blind samengevoegd | Hoog | Canonical naam, ownerbesluit en samenvoegnotitie verplicht. |
| Confidential data krijgt verkeerde toegang | Kritiek | Sharing permissions review verplicht voor legal/finance/client/rechtencontent. |
| Legacy roots blijven operationeel | Middel | Elke legacy-root krijgt migratie- of archivebesluit. |
| Archive wordt dumpfolder | Middel | Archivepad krijgt broncontext, datum en reden. |
| Pure shims verdwijnen te vroeg | Middel | Shims blijven staan tot actieve linkcontrole is afgerond. |

## Hoe ontbrekende data wordt verzameld

### Stap 1 — Drive export maken

Maak een export of inventaris van alle relevante Drive roots met item-ID, parent-ID, URL, type, owner, sharing, modified date en shortcutinformatie. Gebruik bij voorkeur Google Drive API, Google Apps Script of een beheerexport die IDs en permissions bewaart.

### Stap 2 — Folderinventaris invullen

Vul per map `docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` in. Classificeer elke map, bepaal de canonical naam en zet de voorgestelde doelroot klaar.

### Stap 3 — Owners valideren

Vraag per map bevestiging van de inhoudelijke owner. Zonder ownerbesluit blijft de map `HOLD`.

### Stap 4 — Linkinventarisatie uitvoeren

Controleer alle actieve verwijzingen vanuit ClickUp, Gmail, Drive shortcuts, Google Docs/Sheets/Slides, automation en AI-agent instructies. Noteer per linkbron of de link behouden, vervangen of uitgefaseerd moet worden.

### Stap 5 — Risico en HOLD bepalen

Ken per item een risico en status toe. Zet items met governanceconflict, ontbrekende owner, FIERCE-risico, legal/finance-onduidelijkheid of actieve linkafhankelijkheid op `HOLD`.

### Stap 6 — Go/no-go voorbereiden

Maak een definitieve migratielijst met alleen items die volledig zijn geclassificeerd, gevalideerd en vrijgegeven. Items met `HOLD` blijven buiten de daadwerkelijke migratie.

## Verplichte informatie vóór migratie

Geen Drive-migratie mag starten zonder onderstaande informatie.

1. Volledige Drive export of inventaris met item-ID's, paden, owners, sharing en URLs.
2. Folderinventaris met huidige map, maptype, canonical naam, nieuwe locatie, actie, risico en status.
3. Ownerinventaris met inhoudelijke owner, migratiebeslisser en reviewbesluit.
4. Linkinventarisatie inclusief ClickUp, Gmail, Docs/Sheets/Slides, shortcuts, automation en AI-agent instructies.
5. FIERCE-uitsluitlijst.
6. Artistlijst en aliasvarianten om artist/client-conflicten te voorkomen.
7. Deal-lijst en classificatie van actieve, verlopen, test- en due-diligence cases.
8. Finance-lijst met Moneybird-status.
9. Legal/confidentiality-lijst met toegangsreview.
10. Duplicaatlijst met canonical folders en samenvoegbesluiten.
11. Shimlijst met actieve linkstatus.
12. HOLD-lijst met reden, owner en oplossingsactie.
13. Migratiecontrolepunten en post-migratie validatieplan.

## Migratiecontrolepunten

### Pre-migratie controlepunten

- `OS_CUSTOMMADE` en alle elf goedgekeurde rootfolders bestaan.
- Geen nieuwe rootstructuur is ontworpen buiten locked governance.
- Elke te migreren map heeft een owner, actie, doelpad en status `goedgekeurd`.
- Alle `HOLD`-items zijn uitgesloten van de migratiebatch.
- Alle FIERCE-items zijn uitgesloten.
- Alle artistdossiers zijn gepland onder `02_ARTIST_MANAGEMENT`.
- Alle commerciële clients zijn gepland onder `03_CLIENTS`.
- Alle actieve deals zijn gepland onder `04_DEALS`.
- Finance-items zijn gecontroleerd tegen Moneybird.
- Legal- en confidential-items hebben permission review gehad.
- Linkupdateplan is beschikbaar voor actieve links, shortcuts en automations.

### Controlepunten tijdens migratie

- Verplaats alleen items uit de goedgekeurde migratielijst.
- Kopieer niet blind; voorkom dubbele operationele dossiers.
- Behoud pure shims zolang ze actief gelinkt zijn.
- Archiveer legacy-content alleen met broncontext en reden.
- Stop direct wanneer een item een nieuw governancebesluit vereist.

### Post-migratie controlepunten

- Geen actieve artistmap staat onder `03_CLIENTS`.
- Geen actieve dealmap staat buiten `04_DEALS`.
- Geen FIERCE-content staat binnen `OS_CUSTOMMADE`.
- Geen oude root is nog operationeel in gebruik.
- ClickUp-, Gmail-, Drive shortcut- en automation-links zijn bijgewerkt of bewust behouden als shim.
- Moneybird blijft financiële waarheid.
- Toegangsrechten voor legal, finance, client en rights-content zijn opnieuw gecontroleerd.
- Migratielog bevat datum, actie, owner, bronpad, doelpad en uitzonderingen.

## Definitieve migratiechecklist

Gebruik deze checklist pas nadat de inventarisatie is afgerond.

| # | Check | Status |
|---:|---|---|
| 1 | Drive export bevat alle relevante roots, mappen, IDs, URLs, owners, sharing en shortcutinformatie. | Nog te vullen |
| 2 | Elke map is geclassificeerd als artist, client, deal, operations, finance, legal, marketing, content, admin, archive, shim, FIERCE of onbekend. | Nog te vullen |
| 3 | Elke map heeft een inhoudelijke owner en migratiebeslisser. | Nog te vullen |
| 4 | Elke map heeft een voorgestelde nieuwe locatie of bewuste uitsluiting. | Nog te vullen |
| 5 | Alle artistmappen zijn gecontroleerd tegen `02_ARTIST_MANAGEMENT`. | Nog te vullen |
| 6 | `03_CLIENTS` bevat geen artistdossiers in de migratielijst. | Nog te vullen |
| 7 | Alle actieve deals zijn gepland onder `04_DEALS`. | Nog te vullen |
| 8 | Finance-items zijn gecontroleerd tegen Moneybird. | Nog te vullen |
| 9 | Legal- en confidential-items hebben toegangsreview gehad. | Nog te vullen |
| 10 | FIERCE-content is uitgesloten. | Nog te vullen |
| 11 | Pure shims en shortcuts zijn geïnventariseerd. | Nog te vullen |
| 12 | ClickUp-links zijn geïnventariseerd. | Nog te vullen |
| 13 | Gmail-links en gedeelde externe links zijn geïnventariseerd. | Nog te vullen |
| 14 | Google Docs/Sheets/Slides-links zijn geïnventariseerd. | Nog te vullen |
| 15 | Automations en AI-agent instructies met Drive-afhankelijkheden zijn geïnventariseerd. | Nog te vullen |
| 16 | Duplicaten hebben een canonical naam en samenvoegbesluit. | Nog te vullen |
| 17 | Alle `HOLD`-items hebben reden, owner en oplossingsactie. | Nog te vullen |
| 18 | Go/no-go is alleen gegeven voor volledig gevalideerde items. | Nog te vullen |
| 19 | Post-migratie validatieplan is beschikbaar. | Nog te vullen |
| 20 | Migratiebatch bevat geen item zonder owner, doelpad, actie, risico en status. | Nog te vullen |

GEREED VOOR INVENTARISATIE
