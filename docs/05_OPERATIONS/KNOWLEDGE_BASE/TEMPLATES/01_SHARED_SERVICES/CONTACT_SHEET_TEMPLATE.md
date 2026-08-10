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
| Status | ACTIVE — V2.3 |
| Versie | V2.3 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · DOEL

Eén actueel overzicht van sleutelcontacten, teamrollen, verantwoordelijkheden en beslisautoriteit per dossier. Dit template vervangt de noodzaak voor een aparte Team Roster-template.

## 03 · GEBRUIKSMOMENT

- Dossieraanmaak / onboarding.
- Team- of stakeholderwijziging.
- Overdracht tussen agents.
- Voorbereiding van teamcoördinatie, approvals of communicatie.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Rollen en aanspreekpunten | Ja | Intake / dossier |
| Contactrecords | Ja | Google Contacts / directory |
| Verantwoordelijkheid | Ja | Scope / teamafspraak |
| Autoriteit / beslisrol | Ja | Contract / dossiercontext |

## 05 · WERKTEMPLATE

### CONTACT — IDENTITEIT

| Contact-ID | Rol | Naam | Organisatie | Contact-record |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### TEAM — VERANTWOORDELIJKHEID

| Contact-ID | Werkgebied | Verantwoordelijkheid | Primair aanspreekpunt? | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### CONTACT — WERKAFSPRAKEN & AUTORITEIT

| Contact-ID | Voorkeurskanaal | Autoriteit | Approval-/escalatierol | Beschikbaarheid/opmerking |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

_De drie blokken vormen via `Contact-ID` één contact-/teamrecord._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Contact status | `ACTIVE` · `INACTIVE` · `TBD` |
| Primair aanspreekpunt? | `YES` · `NO` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen aparte Team Roster naast deze Contact Sheet.
>
> **02** — Elk actief dossier heeft een primair aanspreekpunt of expliciet `TBD`.
>
> **03** — Autoriteit/approvalrol wordt niet aangenomen; bron moet bekend zijn of `TBD`.
>
> **04** — Geen onnodige persoonsgegevens in de GitHub-specificatie.

## 07 · RESULTAAT

- Eén actueel contact- én teamoverzicht.
- Rollen, verantwoordelijkheden en decision authority zijn zichtbaar zonder dubbele registraties.

## 08 · KWALITEITSCONTROLE

- Alle blokken koppelen via Contact-ID.
- Voor actieve teamleden zijn werkgebied en verantwoordelijkheid ingevuld.
- Primair aanspreekpunt is zichtbaar.
- Autoriteit/approvalrol is expliciet en onderbouwd.

## 09 · GOEDKEURING

Level 1 — CM OPS AGENT.

## 10 · OVERDRACHT

- → Client/artist onboarding
- → Gmail/Calendar recipient resolution
- → ClickUp stakeholder- en assignee-context
- → kwartaal/teamreview als bron

## 11 · LEIDENDE BRON

GitHub = spec · Drive = werkkopie · Google Contacts/directory = contactgegevens · ClickUp = uitvoering.

## 12 · OPSLAG

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_CONTACTSHEET_vX.Y`

## 13 · AI-INSTRUCTIES

- Maak geen aparte Team Roster wanneer deze template past.
- Verzin nooit contactdata, verantwoordelijkheid, autoriteit of voorkeurskanaal; onbekend = `TBD`.
- Gebruik contact-referenties in plaats van gevoelige gegevens.
- Behoud A4-portret; de blokken blijven via Contact-ID gekoppeld.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Contact/teamlid toegevoegd/gewijzigd | Make → contactworkflow | Bronrecord koppelen | Contact-ID→Record ID, Naam→Name, Rol→Role, Status→Status |
| Primair aanspreekpunt `YES` | Make → ClickUp | Dossiercontact bijwerken | Contact-ID→Reference, Naam→Primary stakeholder, Rol→Role |
| Contact `INACTIVE` | Make → ClickUp | Stakeholder-/teamreview | Contact-ID→Reference, Rol→Description, Verantwoordelijkheid→Context |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM OPS AGENT |
| 2026-08-10 | V2.2 | A4-portret via gekoppelde contactblokken en Contact-ID. | CM OPS AGENT |
| 2026-08-10 | V2.3 | Team Roster-functionaliteit geïntegreerd: verantwoordelijkheid, primary contact en approval/escalatierol zonder parallel template. | CM OPS AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare kopieën._
