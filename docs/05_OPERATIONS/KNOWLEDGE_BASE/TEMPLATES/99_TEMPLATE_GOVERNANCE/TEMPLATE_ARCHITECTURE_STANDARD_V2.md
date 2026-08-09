<img src="../../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# TEMPLATE ARCHITECTURE STANDARD — V2.2

## STATUS

`ACTIVE` — leidend voor alle CM-templates. V2.2 bouwt voort op V2.0 en maakt de Artist Roadmap V2.2 de referentie voor operationele opbouw, printbaarheid en automation-consistentie.

## DOEL

Iedere CM-template is één **machine-readable operationele tool** die zonder extra interpretatie bruikbaar is door medewerker, stagiair, AI-agent, Make en ClickUp. De template bevat echte werkruimte en geen lege samenvattingskaart.

## VERPLICHTE STRUCTUUR — 15 SECTIES

Elke template bevat exact deze secties, in deze volgorde:

| # | Sectie | Inhoud |
|---|---|---|
| 01 | DOCUMENT CONTROL | Type, onderdeel, entity, owner/support, status, versie, datum, risico, approval. |
| 02 | DOEL | Waarvoor de tool dient en welk resultaat hij oplevert. |
| 03 | GEBRUIKSMOMENT | Concrete gebeurtenissen die de template activeren. |
| 04 | BENODIGDE INPUT | Input, verplicht ja/nee, bron. |
| 05 | WERKTEMPLATE | De echte invulbare werkruimte. |
| 06 | BESLISPOORTEN | Niet-onderhandelbare voorwaarden vóór voortgang. |
| 07 | RESULTAAT | Concrete output. |
| 08 | KWALITEITSCONTROLE | Controlepunten vóór overdracht/publicatie. |
| 09 | GOEDKEURING | Wie keurt goed en wanneer. |
| 10 | OVERDRACHT | Naar welk systeem/rol de output gaat. |
| 11 | LEIDENDE BRON | GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid. |
| 12 | OPSLAG | Drive-pad + naamconventie. |
| 13 | AI-INSTRUCTIES | Nooit verzinnen; onbekend = `TBD`; index eerst; bronregels respecteren. |
| 14 | AUTOMATISERINGSKOPPELINGEN | Trigger → systeem → actie → veldmapping. |
| 15 | WIJZIGINGSLOG | Datum, versie, wijziging, owner. |

## TAALSTANDAARD

- Zichtbare structuur, toelichting en kolomkoppen zijn Nederlandstalig.
- Gangbare muziekindustrietermen mogen Engels blijven wanneer vertaling minder precies is, waaronder master, publishing, neighboring rights, sync, DSP, KPI, pipeline, rights, release en deal.
- Technische machinewaarden mogen Engels blijven, bijvoorbeeld `OPEN`, `BLOCKED`, `IN_PROGRESS`, `QUALIFIED`.

## A4-PORTRET EN PRINTREGEL

- Alle standaardtemplates worden ontworpen voor **A4-portret**.
- Mixed portrait/landscape binnen één template is niet toegestaan als standaardoplossing.
- Werk-tabellen met te veel kolommen worden opgesplitst in **logisch gekoppelde blokken** die samen één record vormen.
- Elk gekoppeld blok moet expliciet vermelden dat de blokken inhoudelijk hetzelfde record vormen.
- Een werk-tabel blijft bij voorkeur op maximaal circa 6–7 praktisch leesbare kolommen per blok.
- Registers met extreem veel velden worden functioneel opgesplitst in blokken per record, bijvoorbeeld Identiteit, Rechten, Financieel en Verificatie.

## MACHINE-READABILITY

- Elke automation mapping in sectie 14 verwijst letterlijk naar een bestaand veld in sectie 05.
- Velden waarop Make/ClickUp mappen gebruiken gecontroleerde waarden; geen vrije statustekst.
- Lege waarden zijn `TBD`, nooit stilzwijgend weggelaten.
- Registers en logs zijn tabellen, geen vrije tekst.
- Gesplitste werkblokken gebruiken een stabiele recordsleutel waar nodig zodat automation weet welke blokken bij elkaar horen.

## BRONREGELS

- GitHub is leidend voor template-specificaties en governance.
- Drive bevat werkbare kopieën, ingevulde operationele documenten en exports.
- ClickUp beheert uitvoering, taken, owners, deadlines en operationele status wanneer daarvoor een ClickUp-workflow bestaat.
- Moneybird blijft financiële waarheid voor daadwerkelijke financiële transacties/actuals.
- Rights Register / Legal evidence blijft leidend voor geverifieerde rechtenclaims; templates mogen deze bron niet vervangen.

## STATUSREGEL

Een template mag alleen `ACTIVE` zijn wanneer:

1. alle 15 secties aanwezig zijn;
2. sectie 05 echte werk-tabellen bevat;
3. alle verplichte velden bestaan;
4. sectie 14 alleen naar bestaande bronvelden mappt;
5. eventuele statusvelden gecontroleerde waarden hebben;
6. A4-portret leesbaar blijft of brede tabellen correct zijn opgesplitst;
7. geen bedragen, approvalgrenzen, rechtenclaims of clientdata worden verzonnen.

Anders is de status `DRAFT` of `NEEDS_REVIEW`.

## HUISSTIJL

Templates volgen `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md`: Montserrat, vetgedrukte uppercase koppen, duidelijke tabellen, zwart/wit, CM-logo rechtsboven, compact en binnen circa 10 seconden scanbaar.

## AI-INSTRUCTIES — ALGEMEEN

- Controleer eerst `00_TEMPLATE_INDEX.md`.
- Maak geen parallelle of dubbele template wanneer een canonical template bestaat.
- Verzin nooit ontbrekende informatie; onbekend = `TBD`.
- Gebruik alleen de benoemde bronsystemen.
- Behoud A4-portret en splits brede werkvelden in gekoppelde blokken.
- Log gaps in `TEMPLATE_GAP_LOG`; log gebruik in `TEMPLATE_USAGE_REPORT`.

## REFERENTIETEMPLATE

`02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_TEMPLATE.md` V2.2 is de eerste goedgekeurde referentietemplate voor deze standaard.

## WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Eerste 15-sectie machine-readable standaard. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige secties, A4-portret als norm, brede tabellen als gekoppelde blokken, gecontroleerde statussen en harde veldmapping-consistentie toegevoegd. | CM CONTROL AGENT |
