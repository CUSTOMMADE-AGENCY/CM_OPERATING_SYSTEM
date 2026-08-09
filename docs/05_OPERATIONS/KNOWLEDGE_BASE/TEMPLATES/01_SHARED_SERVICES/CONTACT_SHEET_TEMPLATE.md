<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CONTACT SHEET TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · DOEL

Actueel overzicht van sleutelcontacten, rollen en beslisautoriteit per dossier zonder onnodige persoonsgegevens in de template zelf. Contactgegevens blijven in het daarvoor bestemde contactsysteem; deze template verwijst naar het bronrecord.

## 03 · GEBRUIKSMOMENT

- Dossieraanmaak.
- Team- of stakeholderwijziging.
- Overdracht tussen agents.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Rollen en aanspreekpunten | Ja | Intake / dossier |
| Contactrecords | Ja | Google Contacts / directory |
| Autoriteit / beslisrol | Ja | Dossier / contractcontext |

## 05 · WERKTEMPLATE

### CONTACT — IDENTITEIT

| Contact-ID | Rol | Naam | Organisatie | Contact-record |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### CONTACT — WERKAFSPRAKEN

| Contact-ID | Voorkeurskanaal | Autoriteit | Beschikbaarheid/opmerking | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

_De twee contactblokken vormen via `Contact-ID` inhoudelijk één contact-record._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Contact status | `ACTIVE` · `INACTIVE` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen privé-e-mailadressen, telefoonnummers of andere onnodige persoonsgegevens in deze template-specificatie.
>
> **02** — Elk actief dossier heeft een primair aanspreekpunt of expliciet `TBD`.
>
> **03** — Autoriteit wordt niet aangenomen; bron moet bekend zijn of `TBD`.

## 07 · RESULTAAT

- Actueel contactoverzicht met bronreferenties en beslisrollen.

## 08 · KWALITEITSCONTROLE

- Contactblokken koppelen via Contact-ID.
- Rollen en autoriteit zijn expliciet.
- Geen gevoelige contactgegevens in de template-specificatie.
- Status gebruikt gecontroleerde waarden.

## 09 · GOEDKEURING

Level 1 — CM OPS AGENT.

## 10 · OVERDRACHT

- → Dossier onboarding
- → Gmail/Calendar recipient resolution
- → ClickUp stakeholdercontext

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_CONTACTSHEET_vX.Y`

## 13 · AI-INSTRUCTIES

- Controleer eerst de Template Index.
- Verzin nooit contactdata, autoriteit of voorkeurskanaal; onbekend = `TBD`.
- Gebruik contact-referenties in plaats van gevoelige gegevens.
- Behoud A4-portret; identiteit en werkafspraken blijven via Contact-ID gekoppeld.
- Maak geen parallel contactoverzicht.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Contact toegevoegd/gewijzigd | Make → contactworkflow | Bronrecord koppelen | Contact-ID→Record ID, Naam→Name, Contact-record→Reference, Status→Status |
| Contact `INACTIVE` | Make → ClickUp | Stakeholder-review | Contact-ID→Reference, Rol→Description |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, A4-portret via gekoppelde contactblokken, Contact-ID en gecontroleerde status toegevoegd. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
