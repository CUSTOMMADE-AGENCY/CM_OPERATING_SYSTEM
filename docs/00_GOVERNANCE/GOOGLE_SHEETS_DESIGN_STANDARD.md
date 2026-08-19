# GOOGLE SHEETS DESIGN STANDARD

## DOEL

Deze standaard is verplicht voor alle Google Sheets van Custommade Agency, waaronder dashboards, cockpits, trackers, registers, artist-management sheets, KPI-overzichten, deal- en rights-overzichten, control towers en operationele werkbladen.

Deze standaard vult `TEMPLATE_DESIGN_STANDARD.md` aan. De goedgekeurde GINIIO Royalty Control cockpit-layout is de canonical visuele referentie.

## REIKWIJDTE

Geldt voor alle nieuwe Sheets, door agents/scripts gegenereerde Sheets, centrale dashboards/control towers, artist-management dashboards en bestaande Sheets bij migratie/redesign. Afwijkingen alleen na expliciete approval van Sophia / CM CONTROL.

## CANONICAL DASHBOARD LAYOUT

Een CM-dashboard/cockpit volgt deze visuele architectuur:

1. bovenaan een clean branded header met `Cm`-logo, titel, functionele subtitel en relevante metadata;
2. veel witte ruimte en een duidelijke horizontale scheiding onder de header;
3. management-KPI's direct onder de header in compacte, lichte KPI-blokken;
4. urgente/komende acties in overzichtelijke secties;
5. zwarte tabelheaders met witte tekst;
6. witte body met zwarte tekst en subtiele lichtgrijze grid/scheidingslijnen;
7. actievelden kort, duidelijk en operationeel;
8. navigatie/bronverwijzingen onderaan of logisch bij de sectie;
9. detaildata blijft op aparte machine-readable tabs;
10. geen visuele drukte, gradients, decoratieve kleuren of zware schaduwen.

## LOGO EN CONTRAST — HARD GATE

Het officiële Custommade Agency `Cm`-beeldmerk is verplicht op iedere CM Sheet met visuele header/cockpit.

Slechts twee combinaties zijn toegestaan:

- **witte achtergrond + zwart `Cm`-logo**; of
- **zwarte achtergrond + wit `Cm`-logo**.

Verboden:

- wit logo op witte achtergrond;
- zwart logo op zwarte achtergrond;
- een zichtbaar wit/zwart vierkant of tegel rond het logo wanneer de header zelf die kleur niet heeft;
- logo vervormen, uitrekken, roteren, recoloren of opnieuw tekenen;
- door agents gegenereerde alternatieve logo-interpretaties.

Standaard voor de canonical clean cockpit is **witte achtergrond + zwart `Cm`-logo**. Een zwarte header met wit logo is toegestaan wanneer bewust voor een volledige zwarte headerbalk wordt gekozen.

Een workbook mag niet als `CM_CONFORM` worden gemarkeerd wanneer deze contrastregel niet wordt gehaald.

## TAAL

Professioneel Nederlands is standaard. Gangbare muziek-, business-, rights-, data- en machine-termen mogen Engels blijven wanneer functioneel logisch, zoals DSP, ISRC, master, publishing, neighboring rights, sync, recoupment, release, booking, KPI, ROI, pipeline en API.

## TYPOGRAFIE

| Onderdeel | Standaard |
|---|---|
| Lettertype | Montserrat |
| Body | 10 pt standaard |
| Compacte tabellen | 8–9 pt toegestaan |
| Tabelheaders | vet, 8–10 pt |
| Sectiekoppen | vet, 10–12 pt |
| Cockpittitel | vet, circa 16–18 pt |

## KLEUREN

- Primair zwart `#000000`.
- Wit `#FFFFFF`.
- Lichtgrijs uitsluitend voor subtiele functionele scheiding.
- Donkerblauw `#1f2a44` is geen CM-standaard.
- Geen decoratieve merkkleuren in operationele Sheets.
- Statusbetekenis nooit uitsluitend via kleur communiceren.

## COCKPITINHOUD

Waar relevant bevat de cockpit:

- actuele managementstatus;
- belangrijkste KPI's;
- open beslissingen/gates;
- risico's/blokkades;
- eerstvolgende acties;
- owners;
- laatste update;
- snelle links naar leidende bronnen.

De gebruiker moet binnen circa 10 seconden kunnen zien waar aandacht, besluitvorming en uitvoering nodig zijn.

## TABELLEN

- Lokale tabelheaders zwart met witte, vette Montserrat-tekst.
- Kopregel bevriezen wanneer nuttig.
- Tekstterugloop waar nodig.
- Geen onnodig brede kolommen.
- Geen merged cells in machine-readable datatabellen.
- Merged cells alleen in visuele cockpit/header/sectiebalken.
- Onbekende waarden = `TBD`.

## DATA EN BRONNEN

- Drive = opslag, documentatie, bewijs en bronbestanden.
- ClickUp = uitvoering.
- Moneybird = financiële waarheid.
- GitHub = governance, templatespecificaties en automationlogica.
- Dashboard vat samen maar creëert geen alternatieve financiële of rights-waarheid.

## AUTOMATION EN ENFORCEMENT

Alle scripts/agents die CM Sheets maken of formatteren moeten centraal afdwingen:

- `FONT_FAMILY = Montserrat`;
- `PRIMARY = #000000`;
- `ON_PRIMARY = #FFFFFF`;
- canonical `Cm`-logo;
- geldige logo/background-combinatie;
- Nederlands als standaardtaal;
- gecontroleerde statussen;
- geen decoratieve kleuren;
- geen emoji's in machine-readable statussen.

## KWALITEITSCHECK

Een Google Sheet is pas CM-conform wanneer:

- [ ] canonical `Cm`-logo aanwezig is;
- [ ] logo zwart-op-wit of wit-op-zwart is;
- [ ] geen zichtbaar ongewenst logo-blok/tegel aanwezig is;
- [ ] logo proportioneel en onvervormd is;
- [ ] Montserrat is toegepast;
- [ ] cockpit clean, ruim en binnen circa 10 seconden scanbaar is;
- [ ] tabelheaders zwart/wit zijn;
- [ ] standaardtaal Nederlands is;
- [ ] statussen gecontroleerde waarden gebruiken;
- [ ] bronnen zijn gelinkt en niet onnodig gedupliceerd;
- [ ] ClickUp uitvoering blijft;
- [ ] Moneybird financiële waarheid blijft;
- [ ] automation mappings naar bestaande velden verwijzen.

## GOVERNANCE

Owner: CM OPS / CM CONTROL
Approval voor afwijkingen: Sophia / CM CONTROL

Deze branding geldt uitsluitend voor Custommade Agency. FIERCE gebruikt eigen governance en assets.

## CM REGEL

Canonical clean dashboard. Witte achtergrond + zwart `Cm` als standaard. Zwarte achtergrond + wit `Cm` als toegestaan alternatief. Montserrat. Zwart/wit. Veel functionele witruimte. Scanbaar. Operationeel. Machine-readable waar nodig.