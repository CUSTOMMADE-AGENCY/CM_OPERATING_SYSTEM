<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — ACTION TRACKER (CLICKUP REFERENCE)

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Reference |
| Onderdeel van | CM Template Library / ClickUp References |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM FLOW AGENT |
| Support agents | CM VAULT AGENT · CM OPS AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LOW |
| Approval | Nee, tenzij workflow-/statuswijziging |

## 02 · DOEL

Referentiespecificatie voor acties die in ClickUp worden uitgevoerd. Definieert minimale velden, gecontroleerde statussen en mappingregels zodat templates taken kunnen genereren zonder de uitvoering buiten ClickUp te dupliceren.

## 03 · GEBRUIKSMOMENT

- Iedere template die acties naar ClickUp overdraagt.
- Nieuwe action automation.
- Review van taakstatussen of veldmappings.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| ClickUp-lijst / workflow | Ja | ClickUp |
| Bronrecord / template | Ja | GitHub/Drive bron |
| Owner | Ja | Bronrecord |
| Deadline | Indien van toepassing | Bronrecord |

## 05 · WERKTEMPLATE

### ACTION RECORD

| Actie-ID | Actie | Bronreferentie | Eigenaar | Deadline | Status |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### CLICKUP KOPPELING

| Actie-ID | ClickUp-lijst | ClickUp Task ID | Prioriteit | Laatst gesynchroniseerd |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

_De twee blokken vormen via `Actie-ID` inhoudelijk één action-record. ClickUp blijft systeem van uitvoering._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Status | `NOT_STARTED` · `IN_PROGRESS` · `BLOCKED` · `DONE` |
| Prioriteit | `LOW` · `NORMAL` · `HIGH` · `URGENT` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Taken worden niet als parallelle uitvoeringslijst in Drive/GitHub beheerd.
>
> **02** — Automation gebruikt alleen bronvelden die daadwerkelijk bestaan.
>
> **03** — Een `BLOCKED` taak behoudt bronreferentie en eigenaar.

## 07 · RESULTAAT

- Eenduidige ClickUp action mapping voor alle CM-templates.

## 08 · KWALITEITSCONTROLE

- Actieblokken koppelen via Actie-ID.
- Iedere actieve taak heeft owner en bronreferentie.
- Status/prioriteit gebruiken gecontroleerde waarden.
- ClickUp Task ID wordt niet verzonnen.

## 09 · GOEDKEURING

Geen inhoudelijke approval voor normaal gebruik; workflow-/statusdefinitiewijzigingen door CM FLOW AGENT conform governance.

## 10 · OVERDRACHT

- → ClickUp
- → Bronworkflow voor statusfeedback waar ingericht

## 11 · LEIDENDE BRON

GitHub = mapping-specificatie · ClickUp = uitvoering/status · Drive = bron/evidence waar van toepassing · Moneybird = financiële waarheid.

## 12 · OPSLAG

ClickUp = operationele actiebron. GitHub bevat alleen deze referentiespecificatie.

## 13 · AI-INSTRUCTIES

- Verzin nooit ClickUp Task ID, owner, deadline of status; onbekend = `TBD`.
- Dupliceer geen operationele tasklist buiten ClickUp.
- Gebruik alleen gecontroleerde statuswaarden.
- Gebruik Actie-ID voor koppeling met bronrecords.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Bronactie aangemaakt/gewijzigd | Make → ClickUp | Taak aanmaken/bijwerken | Actie-ID→External ID, Actie→Task, Eigenaar→Assignee, Deadline→Due date, Status→Status, Bronreferentie→Source reference |
| ClickUp status gewijzigd | Make → bronworkflow | Statusfeedback indien toegestaan | Actie-ID→External ID, Status→Status, ClickUp Task ID→Task ID |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM FLOW AGENT |
| 2026-08-10 | V2.2 | Actie-ID, gekoppelde ClickUp-ref, gecontroleerde status/prioriteit en geldige bidirectionele mappings toegevoegd. | CM FLOW AGENT |

---

_Leidende bron: GitHub voor specificatie; ClickUp voor uitvoering._
