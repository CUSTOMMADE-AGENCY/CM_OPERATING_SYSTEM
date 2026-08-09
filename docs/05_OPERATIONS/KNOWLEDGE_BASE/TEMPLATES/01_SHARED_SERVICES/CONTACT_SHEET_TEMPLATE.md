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
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | LOW |
| Approval | CM OPS AGENT — Level 1 |

## 02 · PURPOSE

Overzicht van sleutelcontacten en rollen per dossier. Verwijst naar de bron van de contactgegevens; bevat zelf geen persoons- of privégegevens.

## 03 · TRIGGER

- Dossieraanmaak of teamwijziging.
- Overdracht tussen agents.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Rollen en aanspreekpunten | Ja | Intake / dossier |
| Contact-records | Ja | Google Contacts / Gmail / Drive |

## 05 · WORKING TEMPLATE

### Contacten (referentie, geen privégegevens)

| Rol | Naam | Organisatie | Contact-record / referentie | Preferred channel | Autoriteit | Status |
|---|---|---|---|---|---|---|
| Primair aanspreekpunt | TBD | TBD | TBD | TBD | TBD | TBD |
| Finance | TBD | TBD | TBD | TBD | TBD | TBD |
| Legal | TBD | TBD | TBD | TBD | TBD | TBD |
| Content / Social | TBD | TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen persoons- of privégegevens in dit bestand; alleen verwijzen naar de bron.
>
> **02** — Primair aanspreekpunt is altijd gemarkeerd.

## 07 · OUTPUT

- Actueel contactoverzicht met verwijzing naar de bronrecords.

## 08 · QUALITY CONTROL

- Elke rol heeft een aanspreekpunt of TBD.
- Geen e-mailadressen/telefoonnummers in het bestand.

## 09 · APPROVAL

Level 1 — CM OPS AGENT.

## 10 · HANDOFF

- → 01_ADMIN dossier
- → Onboarding

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_CONTACTSHEET_vX.Y`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Contact toegevoegd | Make → Google Contacts | Record koppelen | Naam→Contact, Referentie→Link |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM OPS AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._
