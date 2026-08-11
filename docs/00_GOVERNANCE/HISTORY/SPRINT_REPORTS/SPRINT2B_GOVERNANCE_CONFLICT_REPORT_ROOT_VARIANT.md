> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# SPRINT2B Governance Conflict Report

## Scope

Vergelijking van:

- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
- `docs/00_GOVERNANCE/CM_OPERATING_MODEL.md`
- `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`

Doel: alle conflicten zichtbaar maken tussen huidige Drive governance, locked decisions en operating model vóór migratie.

## Governance hiërarchie

De locked decisions bepalen de leidende governance voor Week 1. Bij conflicten is de governance-prioriteit uit het locked-decision document leidend:

1. `DECISION_LOG.md`
2. `CM_OS_LOCKED_DECISIONS_*`
3. `GOVERNANCE_RULES.md`
4. `AUDIT_REPORTS`
5. `README`
6. AI-aanbevelingen

`DRIVE_STRUCTURE.md` erkent expliciet dat de locked decision leidend is bij conflict. Dit rapport gebruikt daarom de locked decisions als primaire conflict-resolutiebron.

## Executive summary

Er zijn geen blokkerende governance-conflicten gevonden tussen de huidige Drive governance en de locked decisions voor de kernpunten Drive root, artist/client scheiding, Moneybird, GitHub/Drive-grenzen en CM/FIERCE-scheiding.

Wel zijn er migratie-aandachtspunten en gedeeltelijke dekkingsgaten:

- Het operating model beschrijft de volledige Master Boutique workflow inclusief Data Room, LOI, APA, Closing en Success Fee, terwijl de Drive governance deze folders pas toestaat vanaf due diligence.
- Het operating model noemt Google Drive generiek als opslag, terwijl locked decisions en Drive governance Drive specifieker positioneren als operationele working environment voor live dossiers, documenten, deliverables en rapportages.
- Het operating model noemt ClickUp als uitvoering, maar mist de locked-decision eis van één centrale CM Space met folders.
- Het operating model noemt shared services, maar maakt niet expliciet dat `docs/03_SHARED_SERVICES/` geen Drive-rootfolder is.
- Het operating model bevat geen expliciete borging van Pure shims, PDF Governance of strikte CM/FIERCE-scheiding.

Conclusie: inhoudelijk is de Drive governance grotendeels in lijn met de locked decisions. De migratie is governance-technisch mogelijk, mits de genoemde aandachtspunten als aanvullingen of migratiecontroles worden meegenomen.

## Conflictmatrix

| ID | Thema | Drive governance | Locked decisions | Operating model | Conflictstatus | Resolutie |
| --- | --- | --- | --- | --- | --- | --- |
| C01 | Drive root | `OS_CUSTOMMADE` met vaste rootfolders | Drive briefing-roots zijn leidend | Google Drive = opslag | Geen direct conflict; operating model is minder specifiek | Behoud `OS_CUSTOMMADE` als operationele root en behandel operating model als high-level systeemoverzicht. |
| C02 | Artist dossiers | Artists blijven onder `02_ARTIST_MANAGEMENT` en niet onder `03_CLIENTS` | Zelfde locked decision | Artist Management is aparte revenue engine | Geen conflict | Migratie mag artists niet naar `03_CLIENTS` verplaatsen. |
| C03 | Client dossiers | `03_CLIENTS` alleen voor merken, bedrijven, sponsors, opdrachtgevers en media partners | Zelfde locked decision | Artist Management en Master Boutique zijn aparte engines, maar clients worden niet nader afgebakend | Geen direct conflict; operating model is incompleet | Gebruik Drive governance voor concrete clientfolder-afbakening. |
| C04 | Master Boutique deals | Deals onder `04_DEALS`; lean dealstructuur tot due diligence | Drive briefing-roots leidend; artists/clients gescheiden | Workflow bevat Data Room, LOI, Due Diligence, APA, Closing, Success Fee | Potentieel timingconflict | Data Room/LOI/APA/Closing/Success Fee folders pas aanmaken vanaf due diligence; operating model blijft workflow, niet folderstructuur. |
| C05 | Oude Engelse dealstructuur | Niet meer toegestaan als standaard Drive-structuur | Drive-governance moet aansluiten op briefing-roots | Master Boutique workflow gebruikt Engelse fasen | Potentieel naamgevingsconflict | Gebruik Nederlandse lean Drive-structuur als folderstandaard; Engelse workflowtermen mogen procesfasen blijven. |
| C06 | GitHub versus Drive | GitHub is source of truth voor governance/SOPs/workflows/playbooks/systeemdocumentatie; Drive is operationele workspace | Zelfde principe | GitHub = governance/source of truth; Google Drive = opslag | Geen conflict, maar operating model is minder precies | Interpreteer Google Drive in operating model als operationele opslag/workspace, niet als governance source of truth. |
| C07 | Shared services | `docs/03_SHARED_SERVICES/` is geen Drive-rootfolder | Drive briefing-roots leidend | Shared services bevat Client Onboarding, Proposals, Email Templates, Communication, Meetings, File Management | Potentieel structuurconflict | Shared services blijven GitHub-documentatiedomein; client- of artist-specifieke uitvoering hoort in relevante Drive-folder. |
| C08 | ClickUp | ClickUp bewaart uitvoering, pipeline-fases, eigenaren, deadlines en taakbewijs | Eén centrale CM Space met folders; geen parallelle CM Spaces | ClickUp = uitvoering | Geen inhoudelijk conflict; operating model mist Space-regel | Voeg migratiecontrole toe: alle ClickUp-inrichting moet binnen één CM Space vallen. |
| C09 | Moneybird | Moneybird blijft financiële waarheid | Moneybird is financiële waarheid | Moneybird = financiële waarheid | Geen conflict | Geen migratieblokkade. |
| C10 | Gmail | Gmail bewaart correspondentie en goedgekeurde communicatietemplates | Niet expliciet behalve Drive/AI/output governance | Gmail = communicatie | Geen direct conflict | Gmail blijft communicatiesysteem; templates mogen niet als governance source of truth boven GitHub gelden. |
| C11 | AI tooling | Niet expliciet behalve repository-hygiëne en governance-source grenzen | AI-agent output moet in lijn zijn met locked decisions; geen FIERCE-output in CM OS | ChatGPT/Claude/Codex = analyse en verbetering | Geen conflict, maar operating model is minder strikt | AI-output moet locked decisions en governance-prioriteit volgen. |
| C12 | Pure shims | Niet benoemd | Pure shims blijven behouden zolang actief gelinkt | Niet benoemd | Dekkingsgat, geen inhoudelijk conflict | Migratie mag shims niet verwijderen zonder inventarisatie en gecontroleerde verwijzingsomzetting. |
| C13 | CM/FIERCE scheiding | Niet expliciet benoemd in Drive-structuur | CM en FIERCE strikt gescheiden | Niet benoemd | Dekkingsgat, geen inhoudelijk conflict | Migratie moet controleren dat geen FIERCE-bestanden, templates of governance in CM Drive/repo terechtkomen. |
| C14 | PDF Governance | Niet benoemd | Operationele rapporten bestaan als `.md` en `.pdf`; PDF primaire leesversie voor Sophia | Niet benoemd | Dekkingsgat, mogelijk procesconflict | Voor operationele rapporten in Drive moet naast `.md` ook `.pdf` bestaan; repo-bronbestanden kunnen `.md` blijven tenzij als operationeel Drive-rapport gepubliceerd. |
| C15 | Getekende contracten en vertrouwelijke bestanden | Niet committen in repository; Drive bewaart signed documents en live dossiers | Drive is operationele environment; GitHub blijft schoon | Geen getekende contracten of vertrouwelijke clientbestanden in GitHub | Geen conflict | Migratie moet contracten en vertrouwelijke bestanden in Drive houden, niet in GitHub. |
| C16 | Dubbele documenten/workflows | Repository-hygiëne en verschillende systeemgrenzen | Governance priority en locked decisions leidend | Geen dubbele documenten/workflows | Geen conflict | Duplicaten tijdens migratie archiveren volgens governance-prioriteit. |

## Detailanalyse per brondocument

### 1. Huidige Drive governance versus locked decisions

#### Geen conflict: Drive als operationele working environment

Beide documenten stellen dat Drive de operationele plek is voor live dossiers, documenten en deliverables, terwijl GitHub de schone governance/source-of-truth laag blijft.

Migratie-impact: geen blokkade. De Drive-migratie moet wel voorkomen dat governance-documentatie, SOPs en systeemdocumentatie als operationele root in Drive worden gedupliceerd.

#### Geen conflict: artist/client scheiding

Beide documenten leggen dezelfde scheiding vast:

- Artists blijven onder `02_ARTIST_MANAGEMENT`.
- `03_CLIENTS` is alleen voor merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.

Migratie-impact: geen artistfolders onder `03_CLIENTS` aanmaken of verplaatsen.

#### Geen conflict: Moneybird

Beide documenten positioneren Moneybird als financiële waarheid.

Migratie-impact: financiële mappen in Drive mogen ondersteunend zijn, maar niet leidend worden voor facturatie, omzet, kosten, debiteuren, crediteuren of rapportage.

#### Dekkingsgat: Pure shims

De locked decisions bevatten een expliciete shim-regel, maar de Drive governance bevat geen aparte shim-sectie.

Migratie-impact: vóór opschonen of archiveren moet worden gecontroleerd of shims nog actief gelinkt zijn vanuit documenten, flows, Drive, ClickUp, automatiseringen of AI-agent instructies.

#### Dekkingsgat: CM/FIERCE scheiding

De locked decisions borgen een strikte scheiding tussen CM en FIERCE. De Drive governance beschrijft alleen CM Drive-structuur en noemt FIERCE niet expliciet.

Migratie-impact: vóór migratie moet worden gecontroleerd dat geen FIERCE-bestanden, FIERCE-governance of FIERCE-templates in `OS_CUSTOMMADE` of CM-repo terechtkomen.

#### Dekkingsgat: PDF Governance

De locked decisions eisen dat operationele rapporten in Drive als `.md` en `.pdf` bestaan, met PDF als primaire leesversie voor Sophia. De Drive governance noemt deze PDF-regel niet.

Migratie-impact: als rapporten vanuit deze repository operationeel in Drive worden geplaatst, moet per rapport een PDF-versie worden gegenereerd naast het bronbestand.

### 2. Huidige Drive governance versus operating model

#### Potentieel conflict: Master Boutique workflow versus lean dealstructuur

Het operating model beschrijft de volledige Master Boutique workflow van introducer tot Success Fee. De Drive governance schrijft daarentegen voor dat dealdossiers onder `04_DEALS` starten met een lean Nederlandse structuur zolang de deal de due diligence fase niet heeft bereikt.

Dit is geen inhoudelijk conflict als de workflow en folderstructuur gescheiden worden geïnterpreteerd:

- Operating model = procesfasen.
- Drive governance = toegestane folderstructuur per dealfase.

Migratie-impact: maak Data Room-, LOI-, APA-, Closing- en Success Fee-mappen niet standaard aan bij intake; doe dit pas wanneer de deal due diligence bereikt.

#### Potentieel conflict: Engelse workflowtermen versus Nederlandse Drive-structuur

Het operating model gebruikt Engelse Master Boutique fasen zoals `Data Room`, `INDICATIVE OFFER`, `LOI`, `Due Diligence`, `APA`, `CLOSING` en `Success Fee`. De Drive governance verbiedt de oude Engelse dealstructuur als standaard Drive-structuur.

Dit is vooral een naamgevings- en standaardisatieconflict.

Migratie-impact: behoud Engelse termen als proceslabels waar nodig, maar gebruik de Nederlandse lean folderstructuur als Drive-standaard.

#### Dekkingsgat: shared services als GitHub-domein

Het operating model noemt shared services als bedrijfsfunctie. De Drive governance verduidelijkt dat `docs/03_SHARED_SERVICES/` een GitHub-documentatiedomein is en geen Google Drive-rootfolder.

Migratie-impact: maak geen `03_SHARED_SERVICES` of vergelijkbare shared-services rootfolder aan onder `OS_CUSTOMMADE`, tenzij later expliciet als locked decision toegevoegd.

### 3. Locked decisions versus operating model

#### Geen conflict: kernsystemen

Het operating model noemt dezelfde hoofdsystemen: GitHub, Google Drive, ClickUp, Moneybird, Gmail en AI-tools. Dit sluit in hoofdlijnen aan op de locked decisions.

#### Dekkingsgat: ClickUp Space-regel

De locked decisions eisen één centrale CM Space met folders. Het operating model zegt alleen `ClickUp = uitvoering`.

Migratie-impact: ClickUp-migratie of -mapping moet expliciet aantonen dat er geen parallelle CM Spaces worden aangemaakt voor dezelfde governance- of uitvoeringslaag.

#### Dekkingsgat: governance priority

De locked decisions leggen een governance-prioriteit vast. Het operating model noemt alleen algemene governance-eisen en verbiedt dubbele documenten/workflows, maar bevat geen verwijzing naar de priority stack.

Migratie-impact: bij migratieconflicten moet de priority stack uit locked decisions worden gebruikt, niet het operating model als hoogste bron.

#### Dekkingsgat: CM/FIERCE en Pure shims

Het operating model bevat geen expliciete regels over CM/FIERCE-scheiding of Pure shims.

Migratie-impact: deze onderwerpen moeten via locked decisions worden gecontroleerd, ook als ze in het operating model ontbreken.

## Migratiecontroles vóór uitvoering

Voer vóór migratie minimaal deze controles uit:

1. Controleer of alle Drive-rootfolders onder `OS_CUSTOMMADE` vallen.
2. Controleer dat alle artistdossiers onder `02_ARTIST_MANAGEMENT` blijven.
3. Controleer dat `03_CLIENTS` geen artistdossiers bevat.
4. Controleer dat dealdossiers onder `04_DEALS` de lean Nederlandse structuur gebruiken tot due diligence.
5. Controleer dat Data Room-, LOI-, APA-, Closing- en Success Fee-mappen niet te vroeg zijn aangemaakt.
6. Controleer dat geen oude Engelse dealstructuur als standaard wordt gebruikt.
7. Controleer dat ClickUp binnen één centrale CM Space wordt gemapt.
8. Controleer dat Moneybird financiële source of truth blijft.
9. Controleer dat Pure shims geïnventariseerd zijn voordat ze worden verwijderd of gearchiveerd.
10. Controleer dat geen FIERCE-content in CM governance, Drive, templates, processen of AI-output zit.
11. Controleer dat operationele Drive-rapporten waar vereist als `.md` én `.pdf` bestaan.
12. Controleer dat getekende contracten en vertrouwelijke clientbestanden niet in GitHub staan.
13. Controleer dat `docs/03_SHARED_SERVICES/` niet als Drive-rootfolder wordt gerepliceerd.

## Eindoordeel

De huidige Drive governance is voldoende in lijn met de locked decisions en het operating model om migratie voor te bereiden. Er zijn geen harde conflicten die migratie principieel blokkeren.

De migratie is echter alleen verantwoord als de dekkingsgaten rond ClickUp Space, Pure shims, CM/FIERCE-scheiding, PDF Governance en dealfase-afhankelijke folderaanmaak expliciet als migratiecontroles worden uitgevoerd.

GEREED VOOR MIGRATIE
