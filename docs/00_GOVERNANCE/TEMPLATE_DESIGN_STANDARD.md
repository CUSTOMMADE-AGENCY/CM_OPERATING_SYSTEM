# TEMPLATE DESIGN STANDARD

## DOEL

Dit document definieert de ontwerpstandaard voor alle CM-bestanden en operationele artifacts. De standaard geldt organisatiebreed voor Sheets, Docs, PDF's, dashboards, control towers, trackers, registers, templates, rapportages en andere door CM, agents of scripts gegenereerde bestanden.

Templates en bestanden zijn operationele tools: direct bruikbaar, compact, actiegericht, herkenbaar en foutbestendig.

## KERNPRINCIPE

Een CM-bestand moet binnen ongeveer 10 seconden scanbaar zijn. De gebruiker moet direct begrijpen wat het bestand is, wat belangrijk is, welke beslispoorten gelden en wat de volgende stap is.

## CANONICAL CM VISUAL SYSTEM

De goedgekeurde GINIIO Royalty Control cockpit-layout is vanaf 19-08-2026 de visuele referentie voor CM-bestanden.

De stijl is:

- clean en premium;
- veel functionele witruimte;
- zwart/wit;
- Montserrat;
- duidelijke visuele hiërarchie;
- dunne zwarte of lichtgrijze scheidingslijnen;
- compacte zwarte tabelheaders met witte tekst;
- KPI-/statusblokken zonder decoratieve kleur;
- geen zware kleurvlakken zonder functionele reden;
- geen visuele drukte, gradients, schaduwen of decoratieve illustraties;
- managementinformatie bovenaan, detailinformatie daaronder;
- acties en status direct zichtbaar.

### Logo-contrast — harde regel

Het officiële `Cm`-beeldmerk mag NOOIT onleesbaar of als een wit-op-wit / zwart-op-zwart blok worden geplaatst.

Toegestaan zijn uitsluitend:

1. **witte achtergrond + zwart `Cm`-logo**; of
2. **zwarte achtergrond + wit `Cm`-logo**.

Het logo wordt clean, zonder zichtbaar achtergrondblok, kader of tegel geplaatst wanneer het asset transparantie ondersteunt. Het logo blijft proportioneel en mag nooit worden uitgerekt, vervormd, geroteerd, gerecolord of opnieuw getekend.

## TOEPASSING PER BESTANDSTYPE

### Sheets / dashboards / control towers

- branded cockpit/header bovenaan;
- management-KPI's en urgente acties eerst;
- zwart/witte tabelheaders;
- detailtabs functioneel en machine-readable;
- geen decoratieve kleuren;
- cockpit en datalaag visueel gescheiden.

### Docs / rapporten / PDF's

- dezelfde visuele hiërarchie vertaald naar pagina-opmaak;
- clean voorblad of documentheader;
- `Cm`-logo volgens de contrastregel;
- duidelijke titel, subtitel/metadata en secties;
- tabellen en callout-blokken in zwart/wit;
- voldoende witruimte;
- geen onnodige grafische elementen.

### Overige bestanden / exports

Wanneer het formaat branding ondersteunt, wordt dezelfde CM-look toegepast. Wanneer branding technisch niet mogelijk is, blijven naamgeving, taal, structuur en metadata conform governance.

## VERPLICHTE CM ARTIST ROYALTY SHEET

Voor iedere actieve Custommade Agency managementartiest is de Royalty Sheet een verplichte operationele template/control layer.

Canonieke locatie:

`02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE/ROYALTYSHEET/[ARTIST]_ROYALTY_SHEET`

De Royalty Sheet gebruikt verplicht de canonical clean CM-dashboardlayout uit deze standaard en `GOOGLE_SHEETS_DESIGN_STANDARD.md`.

Minimale functionele onderdelen:

- cockpit met management-KPI's, open acties en deadlines;
- neighboring rights / master- en labelafspraken;
- auteursrechten, publishing en track-splits;
- split approvals en evidence-links;
- statement- en royaltycycli;
- ontvangen statements en betalingen;
- advance / recoupment-positie waar relevant;
- contract- en accountingreferenties;
- reminder- en follow-uplogica richting ClickUp.

Bestandsnaam is exact `[ARTIST]_ROYALTY_SHEET`. De structuur en datavelden mogen niet per artiest willekeurig afwijken; artistdata verschilt, maar het governed template blijft gelijk.

Drive is opslag/rechtenbewijs, ClickUp is uitvoering en Moneybird blijft financiële waarheid. Deze verplichting geldt uitsluitend voor CM-managementartiesten; FIERCE wordt niet automatisch gecombineerd.

## ONTWERPPRINCIPES

Alle CM-bestanden zijn:

- overzichtelijk;
- direct bruikbaar;
- praktisch;
- actiegericht;
- compact;
- consistent;
- machine-readable waar automation is voorzien;
- printbaar zonder handmatige heropmaak waar relevant.

## DESIGN STANDAARD

| Onderdeel | Standaard |
|---|---|
| Lettertype | Montserrat |
| Body | 10 pt; compactere tabellen 8–9 pt indien nodig |
| Hoofdtitels | vet, duidelijk dominant |
| Sectietitels | vet, compact, functioneel |
| Kleuren | Zwart/wit; lichtgrijs uitsluitend voor subtiele scheiding |
| Logo | Canonical `Cm`; zwart op wit of wit op zwart |
| Taal | Nederlands; gangbare industry-/machine-termen mogen Engels blijven |
| Emoji's | Niet gebruiken in canonieke/machine-readable velden |

## GOOGLE SHEETS

Voor Google Sheets, dashboards, cockpits, trackers, registers en control towers is `docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md` verplicht aanvullend leidend.

## TABELLEN EN PRINTBAARHEID

- Gebruik tabellen, checklists, KPI-blokken, statussen, beslismomenten en actiepunten waar mogelijk.
- Vermijd brede tabellen die kolomkoppen woord voor woord laten afbreken.
- Geen samengevoegde cellen in machine-readable datatabellen.
- Gebruik gekoppelde blokken wanneer één record te veel velden heeft.
- Registers met veel velden worden gegroepeerd per functie, bijvoorbeeld Identiteit / Rechten / Financieel / Verificatie.

## MACHINE-READABILITY

- Kolomnamen zijn stabiel en eenduidig.
- Automation mapt alleen naar velden die daadwerkelijk bestaan.
- Statusvelden gebruiken gecontroleerde waarden.
- Onbekende waarden = `TBD`.
- Geen fictieve bedragen, approvalgrenzen, rechtenclaims of statussen.

## VERMIJDEN

Geen lange onnodige paragrafen, overmatige toelichtingen, consultancy-jargon, open tekstvelden zonder doel, parallelle formats, brede onleesbare tabellen, decoratieve kleurensystemen, gradients, zware schaduwen, logo-tegels of slecht logo-contrast.

## KWALITEITSTEST

Een CM-bestand is alleen goedgekeurd wanneer:

1. het zelfstandig bruikbaar is;
2. de gebruiker geen extra uitleg nodig heeft;
3. het direct tot inzicht, besluit of actie leidt;
4. output consistent is;
5. automation mappings naar bestaande velden verwijzen;
6. het visueel aansluit op de canonical clean CM-layout;
7. het `Cm`-logo correct contrasteert: zwart-op-wit of wit-op-zwart;
8. het geen zichtbaar logo-achtergrondblok bevat tenzij de volledige header bewust zwart is met wit logo;
9. Google Sheets aanvullend voldoen aan `GOOGLE_SHEETS_DESIGN_STANDARD.md`;
10. een actieve CM-managementartiest beschikt over de verplichte `[ARTIST]_ROYALTY_SHEET` op de governed Drive-locatie.

## GOVERNANCE

Owner: CM OPS / CM CONTROL
Approval voor afwijkingen: Sophia / CM CONTROL

Deze standaard geldt uitsluitend voor Custommade Agency. FIERCE heeft eigen governance en branding en wordt niet automatisch gecombineerd met CM.

## CM REGEL

Clean. Zwart/wit. Montserrat. Canonical `Cm`. Zwart logo op wit óf wit logo op zwart. Veel functionele witruimte. Scanbaar. Operationeel. Geen eigen designinterpretatie door agents of scripts.
