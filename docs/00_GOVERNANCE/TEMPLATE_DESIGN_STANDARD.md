# TEMPLATE DESIGN STANDARD

## DOEL

Dit document definieert de ontwerpstandaard voor alle CM-templates. Templates zijn operationele tools: direct bruikbaar, compact, actiegericht en foutbestendig.

Templates zijn geen SOP's, essays, rapporten of consultancydocumenten.

## KERNPRINCIPE

Een template moet binnen ongeveer 10 seconden scanbaar zijn. De gebruiker moet direct begrijpen wat het document is, wat ingevuld moet worden, welke beslispoorten gelden en wat de volgende stap is.

## ONTWERPPRINCIPES

Alle templates zijn:

- overzichtelijk;
- direct bruikbaar;
- praktisch;
- actiegericht;
- compact;
- consistent;
- machine-readable waar automation is voorzien;
- printbaar zonder handmatige heropmaak.

## DESIGN STANDAARD

| Onderdeel | Standaard |
|---|---|
| Papier | A4-portret |
| Lettertype | Montserrat |
| Body | 10 pt; in compacte werk-tabellen alleen kleiner indien nodig voor leesbaarheid |
| Hoofdtitels | Heading 2, vet, hoofdletters |
| Subtitels | Heading 3, vet, hoofdletters |
| Kleuren | Zwart/wit; geen decoratieve kleuren |
| Emoji's | Niet gebruiken in canonieke/machine-readable velden; visuele presentatie alleen wanneer een onderliggende tekststatus behouden blijft |
| Logo | CM-logo rechtsboven waar het documentformaat dit ondersteunt |
| Taal | Nederlands; gangbare industry-/machine-termen mogen Engels blijven |

## GOOGLE SHEETS

Voor alle Google Sheets, dashboards, cockpits, trackers, registers en control towers is `docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md` verplicht aanvullend leidend.

Daarbij geldt organisatiebreed minimaal:

- Montserrat;
- zwart `#000000` als primaire header-/titelkleur;
- wit `#FFFFFF` als headertekst;
- Nederlands als standaardtaal;
- geen donkerblauw `#1f2a44` als CM-headerkleur;
- gecontroleerde, machine-readable statussen;
- een scanbare cockpit voor managementdashboards;
- geen eigen afwijkend design system per agent of script.

## TABELLEN EN PRINTBAARHEID

- Gebruik tabellen, checklists, KPI-blokken, statussen, beslismomenten en actiepunten waar mogelijk.
- Vermijd brede tabellen die kolomkoppen woord voor woord laten afbreken.
- A4-portret is de standaard voor documenttemplates; operationele Google Sheets volgen de specifieke Google Sheets governance.
- Gebruik niet standaard mixed portrait/landscape.
- Als één record te veel velden heeft, splits het in logisch gekoppelde blokken.
- Geef expliciet aan dat gekoppelde blokken samen één record vormen.
- Gebruik waar nodig een recordsleutel om blokken betrouwbaar te koppelen voor automation.
- Registers met veel velden worden gegroepeerd per functie, bijvoorbeeld Identiteit / Rechten / Financieel / Verificatie.

## MACHINE-READABILITY

- Kolomnamen zijn stabiel en eenduidig.
- Automation mapt alleen naar velden die daadwerkelijk in de werktemplate bestaan.
- Statusvelden gebruiken gecontroleerde waarden als automation ervan afhankelijk is.
- Onbekende waarden = `TBD`.
- Geen fictieve bedragen, approvalgrenzen, rechtenclaims of statussen.

## VERMIJDEN

Geen lange paragrafen, essays, overmatige toelichtingen, dubbele vragen, theoretische uitleg, consultancy-jargon, open tekstvelden zonder doel, parallelle formats of brede onleesbare tabellen.

## KWALITEITSTEST

Een template is alleen goedgekeurd wanneer:

1. een stagiair deze zelfstandig kan gebruiken;
2. de gebruiker geen extra uitleg nodig heeft;
3. het document direct tot actie leidt;
4. de output consistent is;
5. de template op het toepasselijke formaat bruikbaar en waar relevant printbaar is;
6. automation mappings naar bestaande velden verwijzen;
7. eventuele gekoppelde tabelblokken ondubbelzinnig hetzelfde record representeren;
8. Google Sheets voldoen aan `GOOGLE_SHEETS_DESIGN_STANDARD.md`.

## REFERENTIE

`ARTIST_ROADMAP_TEMPLATE` V2.2 is de referentie voor A4-portret, Nederlandstalige structuur, gekoppelde werkblokken en automation-consistentie.

Voor Google Sheets is `GOOGLE_SHEETS_DESIGN_STANDARD.md` de organisatiebrede visuele en functionele referentie.

## CM REGEL

Een template moet voelen als een operationele tool — niet als een notitieblok, rapport of consultancydocument.