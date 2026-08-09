<img src="../../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# TEMPLATE ARCHITECTURE STANDARD — V2

## Status

`ACTIVE` — leidend voor alle CM-templates. Vervangt `TEMPLATE_ARCHITECTUURSTANDAARD.md` (V1, 14 onderdelen), die op `SUPERSEDED` staat.

## Doel

V2 maakt van iedere template één **machine-readable operating tool** met dezelfde vaste structuur, zodat dezelfde template zonder interpretatie bruikbaar is door:

`Sophia → medewerker → stagiair → ChatGPT → Claude → Make → ClickUp`

Een template is geen samenvattingskaart of inhoudsopgave, maar bevat **werkruimte** (ingevulde-tabel-structuren) waar direct in gewerkt en waaruit geautomatiseerd wordt.

## Verplichte structuur — 15 secties

Elke template bevat exact deze secties, in deze volgorde en nummering:

| # | Sectie | Inhoud |
|---|---|---|
| 01 | DOCUMENT CONTROL | Metadata-tabel: type, onderdeel van, entity, owner + support agent, status, versie, datum, risico, approval. |
| 02 | PURPOSE | Eén alinea: waarvoor de tool dient en welk resultaat hij oplevert. |
| 03 | TRIGGER | Concrete gebeurtenissen die de template activeren. |
| 04 | INPUT | Tabel: benodigde input, verplicht ja/nee, bron. |
| 05 | WORKING TEMPLATE | De echte werkruimte: één of meer tabellen met kolommen die ingevuld worden. Dit is het hart van de template. |
| 06 | DECISION GATES | Niet-onderhandelbare poorten/voorwaarden (zwart callout). Geen voortgang zonder. |
| 07 | OUTPUT | Wat de template oplevert en waarheen het gaat. |
| 08 | QUALITY CONTROL | Controlepunten vóór overdracht/publicatie. |
| 09 | APPROVAL | Wie keurt goed, op welk niveau, hoe vastgelegd. |
| 10 | HANDOFF | Naar welk systeem/rol de output gaat. |
| 11 | SYSTEM OF RECORD | GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid. |
| 12 | STORAGE | Drive-pad + naamconventie. |
| 13 | AI INSTRUCTIONS | Regels voor agents/automation; nooit verzinnen; onbekend = `TBD`; verwijs naar de index. |
| 14 | AUTOMATION HOOKS | Tabel: trigger → systeem → actie → field mapping (Make/ClickUp). |
| 15 | CHANGELOG | Tabel: datum, versie, wijziging, owner. |

## Statusregel

Een template mag alleen `ACTIVE` zijn wanneer **alle 15 secties aanwezig** zijn en de WORKING TEMPLATE echte werk-tabellen bevat. Voldoet een template daar niet aan, dan is de status `DRAFT` of `NEEDS_REVIEW`.

## Huisstijl

Templates volgen `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md`: Montserrat, bold uppercase koppen met scheidingslijn, metadata-tabel bovenaan, zwarte callout-blokken, geen kleuren buiten zwart/wit. Het **CM-logo** staat rechtsboven in elke template.

## Machine-readability

- Elke werk-tabel heeft een vaste kolomkop-set zodat Make/ClickUp erop kunnen mappen (sectie 14).
- Lege waarden zijn `TBD`, nooit weggelaten.
- Registers en logs zijn tabellen, geen vrije tekst.

## AI-instructies (algemeen)

- Agents controleren eerst de Template Index (`00_TEMPLATE_INDEX.md`) vóór het aanmaken van nieuwe output.
- Agents verzinnen nooit ontbrekende informatie; onbekend = `TBD`.
- Agents maken geen parallelle of dubbele template-locaties aan (zie `99_ARCHIVE_SUPERSEDED`).
- Afwijkingen → `TEMPLATE_GAP_LOG`; gebruik → `TEMPLATE_USAGE_REPORT`.

## Migratie

De 24+ bestaande templates worden naar V2 gemigreerd (P2). Master Boutique krijgt aanvullende diepte (P3): Music Rights Register, Deal Memo, Rights Audit, Valuation, Data Room, Buyer Pipeline.

## Changelog

| Datum | Versie | Wijziging | Owner |
| --- | --- | --- | --- |
| 2026-07-27 | V2.0 | Eerste vaststelling 15-sectie machine-readable standaard; vervangt V1 (14 onderdelen). | CM CONTROL AGENT |
