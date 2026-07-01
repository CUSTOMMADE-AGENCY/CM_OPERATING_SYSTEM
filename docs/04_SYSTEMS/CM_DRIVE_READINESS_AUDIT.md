# CM DRIVE READINESS AUDIT

## Doel

De **CM Drive Readiness Audit V1** is de officiële read-only controleprocedure voor de live Google Drive-omgeving van CM voordat automatische of semi-automatische Drive-acties worden toegestaan.

Deze audit bestaat om te bewijzen dat de Drive-structuur, governance-afbakening, compliance-regels en risicobeheersing overeenkomen met de CM OS Baseline V1.0 en de officiële Drive source of truth:

- `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
- `docs/04_SYSTEMS/DRIVE_MAPPING.md`
- `docs/00_GOVERNANCE/CM_OS_BASELINE_REVIEW.md`
- `docs/00_GOVERNANCE/CM_OS_RELEASES.md`

Deze audit is verplicht vóór iedere automatische Drive-actie, waaronder:

- livegang van CM VAULT AGENT;
- livegang van CM FLOW AGENT;
- automatische Drive-acties;
- Make-scenario's die bestanden of mappen kunnen wijzigen;
- Drive cleanup, archivering, herstructurering of template-uitrol.

De audit geeft uitsluitend een GO / NO-GO advies. Een GO uit deze audit is geen automatische toestemming om wijzigingen uit te voeren; uitvoering vereist altijd de governancevoorwaarden onder **Definitie van GO**.

## Scope

Deze audit controleert uitsluitend:

- structuur;
- governance;
- compliance;
- risico's.

Deze audit is **READ-ONLY**.

Tijdens deze audit is het verboden om:

- bestanden of mappen te verplaatsen;
- bestanden of mappen te hernoemen;
- bestanden of mappen te verwijderen;
- rechten, shares of ownership aan te passen;
- Make-scenario's uit te voeren;
- automatische acties te starten;
- archiveeracties uit te voeren;
- templates te kopiëren, vervangen of opschonen.

Toegestane handelingen zijn alleen:

- controleren;
- vergelijken met de source of truth;
- inventariseren;
- rapporteren;
- risico's classificeren;
- aanbevelingen formuleren.

## Audit Checklist

Gebruik de invulbare scorekaart in `docs/04_SYSTEMS/CM_DRIVE_READINESS_SCORECARD.md` als operationele checklist. Noteer per controlepunt bewijs, score, risico en aanbevolen actie.

### ROOT

Controleer de live Drive-root tegen de goedgekeurde governance-root.

□ Bestaat `OS_CUSTOMMADE`.

□ `OS_CUSTOMMADE` is de enige actieve operationele CM Drive-root.

□ Geen oude roots actief.

□ Geen verboden roots aanwezig of in actief gebruik.

□ Geen parallelle rootstructuren naast `OS_CUSTOMMADE`.

□ Rootlaag bevat uitsluitend de goedgekeurde hoofdstructuur:

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

### ARTIST MANAGEMENT

Controleer `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.

□ Alle artiesten staan direct onder `02_ARTIST_MANAGEMENT` als `[ARTIST_NAME]`.

□ Controleer dat `02_ARTIST_MANAGEMENT` geen directe operationele submappen bevat zoals `01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `06_FINANCE`, `07_SOCIALMEDIA`, `08_PRESS_EPK` of `09_ARCHIVE`.

□ Controleer dat deze 9 submappen uitsluitend binnen `[ARTIST_NAME]` staan.

□ Controleer dat geen statuslagen bestaan onder `02_ARTIST_MANAGEMENT`; ClickUp beheert status en Pipeline.

□ Er staan geen artiestendossiers onder `03_CLIENTS`, oude roots of parallelle structuren.

□ Iedere artistfolder bevat minimaal:

```text
01_ADMIN
02_CONTRACT
03_STRATEGY
04_RELEASES
05_BOOKING
06_FINANCE
07_SOCIALMEDIA
08_PRESS_EPK
09_ARCHIVE
```

□ Artistfolders gebruiken `07_SOCIALMEDIA`; `07_CONTENT` en losse `SOCIALMEDIA` worden gemarkeerd als legacy migration required.

□ Artist-specifieke werkbestanden staan in het juiste artistdossier en niet in GitHub of rootniveau.

### DEALS

Controleer `OS_CUSTOMMADE/04_DEALS`.

□ `04_DEALS` bestaat onder `OS_CUSTOMMADE`.

□ Iedere dealcase bevat minimaal:

```text
00_START_HIER
01_RECHTEN_REGISTER
02_CONTRACTEN_BEWIJS
03_WAARDERING_VERKOOPPAKKET
04_OUTREACH_CLICKUP
99_ARCHIEF
```

□ De oude Engelse dealstructuur is niet als standaardstructuur actief.

□ Data Room-, LOI-, APA-, Closing- en Success Fee-mappen bestaan alleen wanneer de deal aantoonbaar de due diligence fase heeft bereikt.

□ Dealstatus, rechteninformatie, contractbewijs en waarderingsmateriaal zijn in de juiste submappen geplaatst.

□ Afgeronde of superseded dealbestanden staan in `99_ARCHIEF` of centrale archieflocaties, niet in actieve werkmappen.

### CLIENTS

Controleer `OS_CUSTOMMADE/03_CLIENTS`.

□ `03_CLIENTS` bevat uitsluitend:

- bedrijven;
- merken;
- media;
- sponsors;
- opdrachtgevers;
- partners.

□ `03_CLIENTS` bevat geen artiesten.

□ Clientdossiers bevatten geen dealcases die onder `04_DEALS` thuishoren.

□ Clientdossiers bevatten geen financiële bronadministratie die onder `06_FINANCE` of Moneybird thuishoort.

□ Clientdossiers bevatten waar passend een start-/intakemap en archiefmap.

### LEGAL

Controleer `OS_CUSTOMMADE/07_LEGAL` en juridische opslaglocaties binnen artist-, client- en dealdossiers.

□ Approval Register bestaat op de officiële locatie:

```text
OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER
```

□ Er is geen tweede of alternatief approval-register in actief gebruik.

□ Contractlocaties volgen de Drive Mapping per documenttype.

□ Bewijsstukken staan bij het juiste dossier, de juiste contractlocatie of de juiste dealmap.

□ Level 4 approvals, externe verplichtingen, publicaties, contracten en financiële toezeggingen zijn terug te vinden in de officiële approval trail.

□ Juridische documenten staan niet los op rootniveau of in algemene operationele mappen zonder dossiercontext.

### FINANCE

Controleer `OS_CUSTOMMADE/06_FINANCE` en financiële mappen binnen dossiers.

□ `06_FINANCE` bestaat onder `OS_CUSTOMMADE`.

□ Financiële bronadministratie staat niet buiten de finance-governance of Moneybird-context.

□ Operationele documenten staan niet in `06_FINANCE` tenzij zij financiële bewijsfunctie hebben.

□ Facturen, bonnen, kwitanties, belastingdocumenten, bankdocumenten en admin exports zijn herkenbaar geplaatst.

□ Financiële toezeggingen en correcties hebben approval-bewijs wanneer vereist.

### TEMPLATE COMPLIANCE

Controleer templategebruik in Drive tegen de GitHub-templatebron.

□ Werkbare kopieën zijn aanwezig waar operationeel nodig.

□ Templatebron is uitsluitend GitHub, met name `docs/03_SHARED_SERVICES/TEMPLATES/`.

□ Drive bevat alleen werkbare kopieën, ingevulde versies of exports.

□ Geen dubbele templatebronnen in Drive.

□ Geen lokale templatevarianten die als nieuwe source of truth worden gebruikt.

□ Templatekopieën zijn herkenbaar als kopie, ingevulde versie of export.

### DUPLICATEN

Controleer dubbele of legacy structuren.

□ Geen dubbele mappen op rootniveau.

□ Geen dubbele artiesten.

□ Geen dubbele dealcases.

□ Geen dubbele clientdossiers.

□ Geen legacy folders in actief gebruik.

□ Legacy materiaal staat alleen in `99_ARCHIVE/LEGACY_ROOTS`, `99_ARCHIVE/REVIEW_HOLD` of een goedgekeurde dossierarchiveerlocatie.

□ Mogelijke duplicaten zijn gemarkeerd voor owner review en niet automatisch samengevoegd of verwijderd.

### SHARING

Controleer sharingstatus en externe toegang.

□ Geen ongecontroleerde open shares.

□ Externe shares zijn dossiermatig verklaarbaar.

□ Contracten, financiële documenten, bewijsstukken en persoonsgegevens hebben geen onnodig brede toegang.

□ Publieke links zijn geïdentificeerd en risicogeclassificeerd.

□ Shares met oud personeel, externe leveranciers of onbekende accounts zijn opgenomen als bevinding voor owner review.

□ De audit past geen rechten aan; alle sharingbevindingen worden alleen gerapporteerd.

### FILE QUALITY

Controleer bestandskwaliteit en plaatsing.

□ Bestandsnamen zijn begrijpelijk, herleidbaar en vrij van `final_final`-achtige chaos waar mogelijk.

□ Losse bestanden op rootniveau zijn geïdentificeerd.

□ Lege mappen zijn geïdentificeerd, maar niet verwijderd.

□ Bestanden hebben voldoende dossiercontext.

□ Ad-hoc exports, oude sheets en superseded bestanden staan niet in actieve werkmappen tenzij er een actuele reden is.

□ Gevoelige bestanden staan niet in algemene of verkeerd gedeelde mappen.

### ARCHIVE

Controleer `OS_CUSTOMMADE/99_ARCHIVE`.

□ `99_ARCHIVE` bestaat onder `OS_CUSTOMMADE`.

□ `99_ARCHIVE` wordt niet actief gebruikt als werkmap.

□ Archive bevat alleen afgerond, legacy, superseded, hold- of jaargebonden materiaal.

□ Contracten, facturen, bonnen, kwitanties, juridische dossiers en bewijsstukken worden niet verwijderd.

□ Archiefacties zijn niet uitgevoerd tijdens de audit.

□ Materiaal dat mogelijk naar archive moet, staat op een hold-/reviewlijst en wacht op approval.

## Scoremodel

Scoor elk onderdeel van de audit op een percentage van 0 tot 100%.

| Score | Kleur | Betekenis |
| --- | --- | --- |
| 95-100% | Groen | Gereed voor volgende governance review. Geen critical issues. Alleen kleine of geen verbeterpunten. |
| 80-94% | Oranje | Beperkt gereed. Verbeteracties nodig vóór automatische acties. Geen live mutaties zonder owner review en CM CONTROL approval. |
| 0-79% | Rood | Niet gereed. NO-GO voor automatische Drive-acties, Make-mutaties, live cleanup en autonome agentacties. |

Bereken naast deelscores ook een totaalscore. De totaalscore is alleen geldig wanneer alle critical findings afzonderlijk zijn beoordeeld; een critical issue veroorzaakt altijd NO-GO, ook bij een totaalscore boven 95%.

## Risicoclassificatie

Classificeer iedere bevinding als volgt:

### CRITICAL

Directe blocker voor livegang of automatische Drive-acties.

Voorbeelden:

- ontbrekende of verkeerde root;
- parallelle actieve rootstructuur;
- artiesten structureel onder `03_CLIENTS`;
- ontbrekend Approval Register;
- open shares op contracten, finance, persoonsgegevens of bewijsstukken;
- Make-scenario of agent kan mutaties uitvoeren zonder approval;
- geen rollbackplan of hold-lijst vóór mutaties.

### HIGH

Hoog risico dat vóór GO moet worden opgelost of formeel door CM CONTROL moet worden geaccepteerd.

Voorbeelden:

- dubbele artiesten of dealcases;
- juridische of financiële documenten op verkeerde locaties;
- templatebron in Drive in plaats van GitHub;
- legacy folders in actief gebruik;
- ontbrekende contract- of bewijscontext.

### MEDIUM

Beheersbaar risico dat correctieplanning vereist vóór of direct na gecontroleerde livegang.

Voorbeelden:

- lege mappen zonder duidelijke status;
- inconsistente bestandsnamen;
- beperkte mapafwijkingen zonder compliance-impact;
- incomplete dossierstartmappen.

### LOW

Klein verbeterpunt zonder directe governance- of compliance-impact.

Voorbeelden:

- cosmetische naamgevingsissues;
- beperkte documentatie-aanvullingen;
- kleine metadata- of rapportageverbeteringen.

## Output

Na iedere audit wordt het standaardrapport aangemaakt als:

```text
CM_DRIVE_READINESS_REPORT.md
```

Het rapport bevat minimaal:

- samenvatting;
- auditdatum;
- auditor;
- gebruikte source of truth;
- scopebevestiging read-only;
- totaalscore;
- score per onderdeel;
- bevindingen;
- risico's;
- aanbevolen acties;
- hold-lijst;
- rollback-/fallbackstatus;
- open approvals;
- GO / NO-GO.

Aanbevolen rapportstructuur:

```markdown
# CM DRIVE READINESS REPORT

## Samenvatting

## Scope en read-only bevestiging

## Source of truth

## Score

## Bevindingen

## Risico's

## Hold-lijst

## Aanbevolen acties

## Rollback- en fallbackstatus

## Owner review

## CM CONTROL approval

## GO / NO-GO
```

## Governance

CM VAULT AGENT mag binnen deze audit:

- inventariseren;
- rapporteren;
- controleren;
- vergelijken met source of truth;
- risico's signaleren;
- scorekaarten invullen;
- conceptbevindingen voorbereiden.

CM VAULT AGENT mag **NOOIT** zonder CM CONTROL approval:

- bestanden of mappen verplaatsen;
- bestanden of mappen verwijderen;
- bestanden of mappen hernoemen;
- bestanden of mappen archiveren;
- shares of rechten aanpassen;
- templates vervangen;
- Make-scenario's starten;
- automatische Drive-mutaties uitvoeren.

CM FLOW AGENT en Make mogen vóór GO uitsluitend scenario's ontwerpen, documenteren en read-only validaties voorbereiden. Live scenario-uitvoering die bestanden of mappen kan wijzigen is verboden totdat aan de Definitie van GO is voldaan.

CM CONTROL AGENT bewaakt:

- auditvalidatie;
- owner review;
- approvalstatus;
- uitzonderingen;
- GO / NO-GO besluitvorming;
- escalatie bij conflict.

## Definitie van GO

Drive mag pas worden aangepast wanneer alle onderstaande voorwaarden aantoonbaar zijn voltooid:

- audit voltooid;
- totaalscore ≥95%;
- geen critical issues;
- rollbackplan aanwezig;
- hold-lijst aanwezig;
- owner review afgerond;
- CM CONTROL approval vastgelegd;
- scope van de voorgenomen mutatie is expliciet beschreven;
- Make-/agentactie is getest in veilige of read-only context;
- fallbackprocedure is bekend bij de owner;
- gevoelige dossiers, legal, finance en open shares zijn apart beoordeeld.

Als één van deze voorwaarden ontbreekt, is het resultaat automatisch **NO-GO** voor automatische Drive-acties en Make-mutaties.
