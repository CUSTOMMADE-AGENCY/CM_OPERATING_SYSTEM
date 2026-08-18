# GOOGLE SHEETS DESIGN STANDARD

## DOEL

Deze standaard is verplicht voor alle Google Sheets van Custommade Agency, waaronder dashboards, cockpits, trackers, registers, artist-management sheets, KPI-overzichten, deal- en rights-overzichten, control towers en operationele werkbladen.

Deze standaard vult `TEMPLATE_DESIGN_STANDARD.md` aan. Bij Google Sheets is dit document leidend voor visuele en functionele opmaak.

## REIKWIJDTE

Geldt voor:

- alle nieuwe Google Sheets;
- alle door agents of scripts gegenereerde Google Sheets;
- alle centrale CM-dashboards en control towers;
- alle artist-management dashboards;
- alle bestaande Sheets zodra deze inhoudelijk of technisch worden gemigreerd.

Afwijkingen zijn alleen toegestaan na expliciete approval van Sophia / CM CONTROL en moeten in het wijzigingslog worden vastgelegd.

## TAAL

- Standaardtaal is professioneel Nederlands.
- Gangbare muziek-, business-, rights-, data- en machine-termen mogen Engels blijven wanneer vertaling onnatuurlijk of functioneel onjuist is, waaronder: DSP, ISRC, master, publishing, neighboring rights, sync, recoupment, release, booking, KPI, ROI, pipeline en API.
- Geen willekeurige mix van Nederlandse en Engelse statussen, headers of instructietekst.
- Client-facing en interne managementteksten zijn Nederlands tenzij expliciet anders besloten.

## TYPOGRAFIE

| Onderdeel | Standaard |
|---|---|
| Lettertype | Montserrat |
| Body / reguliere cellen | 10 pt standaard |
| Compacte werk-tabellen | 8 pt toegestaan indien nodig voor scanbaarheid |
| Tabelheaders | Montserrat, vet, 9–10 pt |
| Sectiekoppen | Montserrat, vet, 10–12 pt, hoofdletters |
| Dashboard-/cockpittitel | Montserrat, vet, 16 pt |

Een script of agent mag niet terugvallen op Arial, Calibri of een willekeurig ander lettertype wanneer Montserrat beschikbaar is.

## KLEUREN

CM gebruikt voor operationele Sheets een zwart/wit-systeem.

| Onderdeel | Kleur |
|---|---|
| Primaire header / titelbalk | Zwart `#000000` |
| Headertekst | Wit `#FFFFFF` |
| Body | Wit `#FFFFFF` |
| Bodytekst | Zwart `#000000` |
| Subtiele functionele scheiding | Lichtgrijs toegestaan |

Regels:

- Donkerblauw `#1f2a44` is GEEN CM-standaard en mag niet meer worden gebruikt als primaire CM-headerkleur.
- Geen decoratieve merkkleuren in operationele Sheets.
- Kleur mag alleen functioneel worden gebruikt wanneer betekenis noodzakelijk is en die betekenis ook tekstueel zichtbaar blijft.
- Een status mag nooit uitsluitend door kleur worden gecommuniceerd.

## DASHBOARD / COCKPIT

Een managementdashboard begint met één scanbare cockpit. Deze bevat waar relevant minimaal:

1. actuele managementstatus;
2. belangrijkste KPI's;
3. open beslissingen / gates;
4. risico's en blokkades;
5. eerstvolgende acties;
6. owners;
7. laatste update;
8. snelle links naar leidende bronnen.

Een cockpit is geen rapport. De gebruiker moet binnen circa 10 seconden kunnen zien waar aandacht, besluitvorming en uitvoering nodig zijn.

## TABELLEN

- Rij 1 of de lokale tabelheader is zwart met witte, vette Montserrat-tekst.
- Kopregel wordt bevroren wanneer dit de bruikbaarheid verbetert.
- Tekstterugloop staat aan waar nodig.
- Kolombreedtes worden afgestemd op leesbaarheid; geen onnodig brede kolommen.
- Geen samengevoegde cellen in machine-readable datatabellen.
- Samengevoegde cellen zijn alleen toegestaan voor visuele titel- of sectiebalken in een cockpit.
- Onbekende waarden = `TBD` tenzij een gecontroleerde statuslijst een andere waarde voorschrijft.

## STATUSSEN

Statuswaarden moeten per template gecontroleerd en machine-readable zijn. Gebruik de canonieke statusset van het betreffende proces of register.

Geen emoji's in canonieke statuswaarden of machine-readable velden.

Voor visuele dashboards mag een aparte presentatiekolom bestaan, maar automation moet mappen op de onderliggende canonieke tekstwaarde.

## DATA EN BRONNEN

- Drive = opslag, documentatie, bewijs en operationele bronbestanden.
- ClickUp = uitvoering.
- Moneybird = financiële waarheid.
- GitHub = governance, templatespecificaties en automationlogica.
- Een dashboard mag brondata samenvatten maar creëert geen alternatieve financiële of rights-waarheid.
- Bronlinks moeten naar het leidende bestand wijzen; bronbestanden niet dupliceren om een dashboard te vullen.

## AUTOMATION EN ENFORCEMENT

Alle scripts die CM Google Sheets maken of formatteren moeten de centrale designwaarden gebruiken en minimaal afdwingen:

- `FONT_FAMILY = Montserrat`;
- `PRIMARY = #000000`;
- `ON_PRIMARY = #FFFFFF`;
- Nederlands als standaardtaal;
- gecontroleerde statuswaarden;
- geen decoratieve kleuren;
- geen emoji's in machine-readable statusvelden.

Nieuwe scripts mogen geen eigen afwijkend design system hardcoden wanneer dezelfde waarde centraal kan worden hergebruikt.

## BESTAANDE SHEETS

Bestaande Sheets worden niet destructief herschreven alleen vanwege deze standaard. Bij eerstvolgende inhoudelijke update, migratie of redesign moeten zij naar deze standaard worden gebracht.

Migraties moeten:

- idempotent zijn waar praktisch mogelijk;
- bestaande data behouden;
- geen bronbestanden dupliceren;
- geen user-entered data wissen;
- wijzigingen loggen;
- bij risicovolle wijzigingen eerst een DRY_RUN ondersteunen.

## KWALITEITSCHECK

Een Google Sheet is pas CM-conform wanneer:

- [ ] Montserrat is toegepast;
- [ ] primaire headers zwart zijn;
- [ ] headertekst wit is;
- [ ] standaardtaal Nederlands is;
- [ ] Engelse termen alleen functioneel/industry-specifiek zijn;
- [ ] cockpit/dashboard binnen circa 10 seconden scanbaar is;
- [ ] statussen gecontroleerde waarden gebruiken;
- [ ] geen emoji's in machine-readable statusvelden staan;
- [ ] bronnen zijn gelinkt en niet onnodig gedupliceerd;
- [ ] ClickUp-uitvoering niet als tweede taakadministratie in Drive wordt nagebouwd;
- [ ] Moneybird financiële waarheid blijft;
- [ ] automation mappings naar bestaande velden verwijzen.

## GOVERNANCE

Owner: CM OPS / CM CONTROL
Approval voor afwijkingen: Sophia / CM CONTROL
Review: bij wijziging van de CM design systematiek of minimaal jaarlijks.

## CM REGEL

Zwart/wit. Montserrat. Nederlands. Scanbaar. Operationeel. Machine-readable waar nodig. Geen eigen designinterpretatie door agents of scripts.