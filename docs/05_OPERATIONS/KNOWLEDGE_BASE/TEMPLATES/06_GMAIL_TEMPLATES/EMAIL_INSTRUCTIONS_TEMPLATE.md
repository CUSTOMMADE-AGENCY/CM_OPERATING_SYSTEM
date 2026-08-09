<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — EMAIL COMMUNICATION STANDARD

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Communication Standard |
| Onderdeel van | CM Template Library / Gmail Templates |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM VAULT AGENT · CM SOCIAL AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij externe templates of materiële wijziging |

## 02 · DOEL

Centrale e-mailcommunicatiestandaard voor `info@custommade.agency`: één consistente tone-of-voice, met inhoudelijke autoriteit per domein. De standaard voorkomt dat Social automatisch eigenaar wordt van juridische, financiële, operationele of dealcommunicatie.

## 03 · GEBRUIKSMOMENT

- Opstellen of wijzigen van een e-mailtemplate.
- Routeren van inkomende/uitgaande communicatie naar de juiste domein-owner.
- Automatiseren van conceptmails of opvolging.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Domein/onderwerp | Ja | Aanvraag / e-mailcontext |
| Doel van de mail | Ja | Workflow |
| Ontvangerreferentie | Ja bij extern | Contact Sheet / Contacts |
| Tone-of-voice | Ja | Brand/communication standard |
| Approvalniveau | Indien vereist | Governance |

## 05 · WERKTEMPLATE

### COMMUNICATIE — TONE

| Onderdeel | Standaard |
|---|---|
| Stem | TBD |
| Opening | TBD |
| Kern | TBD |
| Call-to-action | TBD |
| Afsluiting | TBD |
| Handtekening | TBD |

### COMMUNICATIE — DOMEINROUTING

| Domein | Owner agent | Type communicatie | Approvalregel |
|---|---|---|---|
| OPS | CM OPS AGENT | Clients/artists/operations | TBD |
| PROSPECT | CM PROSPECT AGENT | Deals/partnerships/outreach | TBD |
| LEGAL | CM LEGAL AGENT | Rights/contracten/claims | TBD |
| MONEY | CM MONEY AGENT | Finance/facturen/incasso | TBD |
| SOCIAL | CM SOCIAL AGENT | PR/media/marketing | TBD |

### E-MAILTEMPLATE

| Template-ID | Domein | Doel | Onderwerpregel | Status |
|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD |

### E-MAILTEMPLATE — INHOUD & OPVOLGING

| Template-ID | Kernboodschap | Call-to-action | Owner | Opvolgtermijn | Approval-ref |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_De twee e-mailtemplateblokken vormen via `Template-ID` inhoudelijk één template-record._

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Template status | `DRAFT` · `READY_FOR_APPROVAL` · `ACTIVE` · `SUPERSEDED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Inhoudelijke autoriteit volgt het domein, niet automatisch Social.
>
> **02** — Juridische/financiële claims worden niet verzonnen of zelfstandig uitgebreid.
>
> **03** — Externe templates en gevoelige communicatie volgen toepasselijke approval governance.
>
> **04** — Geen ontvangergegevens in de GitHub-specificatie; gebruik contactreferenties.

## 07 · RESULTAAT

- Consistente, domein-correcte e-mailtemplates.
- Duidelijke owner/approvalroute.
- Automatiserbare opvolging.

## 08 · KWALITEITSCONTROLE

- Domein-owner is expliciet.
- Templateblokken koppelen via Template-ID.
- Call-to-action en opvolgtermijn zijn duidelijk of `TBD`.
- Status gebruikt gecontroleerde waarden.

## 09 · GOEDKEURING

CM CONTROL + relevante domein-owner wanneer governance dit vereist; client-facing/gevoelige inhoud conform toepasselijke approvalregels.

## 10 · OVERDRACHT

- → Gmail templates/drafts
- → Domein-owner
- → ClickUp follow-up indien nodig

## 11 · LEIDENDE BRON

GitHub = communicatiestandaard/spec · Gmail = operationele e-mail/draft · ClickUp = opvolging · Drive = evidence waar nodig · Moneybird = financiële waarheid.

## 12 · OPSLAG

Gmail voor operationele templates/drafts; Drive `[DOSSIER]/05_COMMUNICATION` voor relevante evidence/export.

## 13 · AI-INSTRUCTIES

- Bepaal eerst het domein en de inhoudelijke owner.
- Verzin nooit juridische/financiële feiten, ontvangers of approval; onbekend = `TBD`.
- Gebruik contactreferenties; geen persoonsgegevens in de GitHub-spec.
- Behoud A4-portret voor eventuele exports.
- Maak geen parallelle communicatiestandaard.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Template `ACTIVE` | Make → Gmail workflow | Template beschikbaar maken | Template-ID→External ID, Domein→Route, Onderwerpregel→Subject, Owner→Owner |
| Opvolgtermijn bereikt | Make → ClickUp | Follow-up taak | Template-ID→Reference, Owner→Assignee, Opvolgtermijn→Due date, Call-to-action→Description |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, domeinrouting, Template-ID, gecontroleerde statussen en geldige Gmail/ClickUp mappings toegevoegd. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Gmail bevat operationele templates/drafts._
