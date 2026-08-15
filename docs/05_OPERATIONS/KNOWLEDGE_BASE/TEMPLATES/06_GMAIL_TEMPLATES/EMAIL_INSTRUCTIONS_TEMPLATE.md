<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — EMAIL COMMUNICATION STANDARD

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Communication Standard |
| Onderdeel van | CM Template Library / Gmail Templates |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM VAULT AGENT · CM SOCIAL AGENT · CM FLOW AGENT |
| Status | ACTIVE — V2.3 |
| Versie | V2.3 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Sophia — goedgekeurd voor CM-breed gebruik |

## 02 · DOEL

Centrale e-mailcommunicatiestandaard voor `info@custommade.agency`: één consistente tone-of-voice, correcte threading, één vaste goedgekeurde CM-handtekening en inhoudelijke autoriteit per domein. Deze standaard geldt voor alle CM-agents die Gmail lezen, concepten voorbereiden of e-mailworkflows aansturen.

## 03 · GEBRUIKSMOMENT

- Opstellen of wijzigen van een e-mailtemplate.
- Opstellen van een conceptantwoord op een bestaand Gmail-bericht.
- Opstellen van een nieuwe e-mail wanneer Sophia dit expliciet vraagt.
- Routeren van inkomende/uitgaande communicatie naar de juiste domein-owner.
- Automatiseren van conceptmails of opvolging.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Domein/onderwerp | Ja | Aanvraag / e-mailcontext |
| Doel van de mail | Ja | Workflow |
| Origineel Gmail `message_id` | Ja bij reply | Gmail |
| Ontvangerreferentie | Ja bij extern | Gmail / Contact Sheet / Contacts |
| Tone-of-voice | Ja | Brand/communication standard |
| Approvalniveau | Indien vereist | Governance |
| Handtekeningbron | Ja | Goedgekeurde CM Gmail-signature voor `info@custommade.agency` |

## 05 · WERKTEMPLATE

### COMMUNICATIE — TONE

| Onderdeel | Standaard |
|---|---|
| Stem | Professioneel, direct, warm en inhoudelijk precies |
| Opening | Contextspecifiek; geen generieke opening wanneer de thread context biedt |
| Kern | Kortste volledige antwoord dat inhoudelijk correct is |
| Call-to-action | Expliciet wanneer een vervolgactie nodig is |
| Afsluiting | Conform goedgekeurde CM Gmail-signature |
| Handtekening | Exact de centrale goedgekeurde CM Gmail-signature; agents mogen deze niet herschrijven of zelfstandig variëren |

### GMAIL — THREADING & DRAFTREGELS

| Situatie | Verplichte actie |
|---|---|
| Bestaand Gmail-bericht waarop moet worden geantwoord | Maak een echte reply in dezelfde thread met het originele Gmail `message_id`. |
| Sophia vraagt om een concept op een bestaande mail | Sla het antwoord als Gmail Draft op in dezelfde thread; niet als losse nieuwe mail. |
| Sophia vraagt expliciet om een nieuwe mail | Maak een nieuwe Gmail Draft zonder `reply_message_id`. |
| Concept/draft | Niet verzenden zonder expliciete verzendopdracht en toepasselijke approval gate. |
| Handtekening | Voeg exact de centrale goedgekeurde CM-handtekening voor `info@custommade.agency` toe, inclusief goedgekeurde HTML/opmaak waar technisch ondersteund. |
| Onderwerpregel bij reply | Behoud de bestaande thread/subject; maak geen parallelle onderwerpregel. |
| Ontvanger bij reply | Gebruik de werkelijke afzender/ontvangers uit de Gmail-thread; niet raden. |

**Harde regel:** wanneer een bestaand bericht beschikbaar is, is `reply_message_id` de standaard. Een losse nieuwe e-mail is alleen toegestaan wanneer Sophia expliciet om een nieuwe mail vraagt of wanneer aantoonbaar geen relevante bestaande thread bestaat.

### CENTRALE HANDTEKENINGBRON

- Mailbox: `info@custommade.agency`.
- Er bestaat één centrale, goedgekeurde CM-handtekening.
- Agents mogen de handtekening niet parafraseren, inkorten, uitbreiden of opnieuw ontwerpen.
- De operationele signature-inhoud en HTML/opmaak worden in Gmail beheerd; GitHub legt de gebruiksregel vast, niet persoonlijke of dynamische signature-assets.
- Wanneer exacte HTML/opmaak technisch niet kan worden behouden, moet de draft worden gemarkeerd voor review vóór verzending; de agent mag geen eigen alternatieve signature ontwerpen.

### COMMUNICATIE — DOMEINROUTING

| Domein | Owner agent | Type communicatie | Approvalregel |
|---|---|---|---|
| CONTROL | CM CONTROL AGENT | Governance, escalatie, prioriteit, besluitvorming | Sophia bij governance-impact of bindend besluit |
| OPS | CM OPS AGENT | Clients/artists/operations | Sophia bij externe commitments of scopewijziging |
| PROSPECT | CM PROSPECT AGENT | Deals/partnerships/outreach | Sophia vóór externe outreach, voorstel of commerciële toezegging |
| LEGAL | CM LEGAL AGENT | Rights/contracten/claims | Sophia bij juridisch standpunt, contractwijziging of commitment |
| MONEY | CM MONEY AGENT | Finance/facturen/incasso | Sophia bij betalingsafspraak, incasso, BTW of financiële commitment |
| SOCIAL | CM SOCIAL AGENT | PR/media/marketing | Sophia vóór publicatie of externe verzending |
| VAULT | CM VAULT AGENT | Documentatie/source-of-truth | Geen externe verzending zonder toepasselijke domein-owner en approval |
| FLOW | CM FLOW AGENT | Gmail automation/integraties | Geen live datamuterende of verzendende automation zonder CONTROL/Sophia approval |

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
> **04** — Geen ontvangergegevens in de GitHub-specificatie; gebruik Gmail-/contactreferenties.
>
> **05** — Bestaande correspondentie wordt als threaded reply opgesteld met het originele Gmail `message_id`.
>
> **06** — Een concept is een Draft en wordt niet verzonden zonder expliciete verzendopdracht.
>
> **07** — De centrale CM-handtekening wordt exact hergebruikt en niet door agents herschreven.
>
> **08** — FIERCE-mailboxen, FIERCE-templates en FIERCE-governance vallen buiten deze standaard.

## 07 · RESULTAAT

- Consistente, domein-correcte e-mailtemplates.
- Reply-concepten blijven in de juiste Gmail-thread.
- Eén herkenbare en centraal beheerde CM-handtekening.
- Duidelijke owner/approvalroute.
- Automatiserbare opvolging zonder ongecontroleerde verzending.

## 08 · KWALITEITSCONTROLE

- Domein-owner is expliciet.
- Bij reply is het originele Gmail `message_id` gebruikt.
- Draft staat in dezelfde thread als het bronbericht.
- Goedgekeurde CM-handtekening is aanwezig.
- Er is geen parallelle nieuwe mail aangemaakt wanneer reply mogelijk was.
- Templateblokken koppelen via Template-ID.
- Call-to-action en opvolgtermijn zijn duidelijk of `TBD`.
- Status gebruikt gecontroleerde waarden.
- Externe verzending heeft de juiste approval gate.

## 09 · GOEDKEURING

CM CONTROL + relevante domein-owner wanneer governance dit vereist; client-facing/gevoelige inhoud conform toepasselijke approvalregels. Sophia approval blijft verplicht waar de Agent Architecture of Responsibility Matrix dit voorschrijft.

## 10 · OVERDRACHT

- → Gmail templates/drafts
- → Domein-owner
- → ClickUp follow-up indien nodig
- → CM FLOW AGENT voor technische Gmail-automation of integratie

## 11 · LEIDENDE BRON

GitHub = communicatiestandaard/spec · Gmail = operationele e-mail/draft + signaturebron · ClickUp = opvolging · Drive = evidence waar nodig · Moneybird = financiële waarheid.

## 12 · OPSLAG

Gmail voor operationele templates/drafts en signature; Drive `[DOSSIER]/05_COMMUNICATION` voor relevante evidence/export waar de dossierstructuur dit voorschrijft.

## 13 · AI-INSTRUCTIES

- Bepaal eerst het domein en de inhoudelijke owner.
- Bij bestaande correspondentie: lees de relevante Gmail-thread en gebruik het originele `message_id` voor de reply-draft.
- Maak geen losse nieuwe mail wanneer een reply in dezelfde thread mogelijk en bedoeld is.
- Gebruik standaard `info@custommade.agency` voor CM-communicatie.
- Gebruik exact de goedgekeurde centrale CM-handtekening; verzin of wijzig de handtekening niet.
- Verzend niets wanneer Sophia om een concept/draft vraagt.
- Maak alleen een nieuwe mail wanneer Sophia dit expliciet vraagt of er geen relevante bestaande thread is.
- Verzin nooit juridische/financiële feiten, ontvangers of approval; onbekend = `TBD`.
- Gebruik contactreferenties; geen persoonsgegevens in de GitHub-spec.
- Maak geen parallelle communicatiestandaard.
- Vermeng FIERCE en Custommade Agency nooit.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Template `ACTIVE` | Make → Gmail workflow | Template beschikbaar maken | Template-ID→External ID, Domein→Route, Onderwerpregel→Subject, Owner→Owner |
| Reply-draft gevraagd | Gmail workflow | Draft in bestaande thread maken | Gmail message ID→`reply_message_id`, afzender→To, thread subject→Subject, approved signature→Signature |
| Nieuwe mail expliciet gevraagd | Gmail workflow | Nieuwe Draft maken | Contactref→To, onderwerp→Subject, approved signature→Signature |
| Opvolgtermijn bereikt | Make → ClickUp | Follow-up taak | Template-ID→Reference, Owner→Assignee, Opvolgtermijn→Due date, Call-to-action→Description |

**Automation gate:** automatische verzending is niet toegestaan binnen deze standaard. Een verzendende Gmail-automation vereist afzonderlijke technische documentatie, testlog, rollback/fallback, CM CONTROL review en Sophia approval.

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, domeinrouting, Template-ID, gecontroleerde statussen en geldige Gmail/ClickUp mappings toegevoegd. | CM CONTROL AGENT |
| 2026-08-16 | V2.3 | CM-brede Gmail-regel toegevoegd: bestaande correspondentie altijd als threaded reply-draft met origineel `message_id`; `info@custommade.agency` standaardmailbox; één centrale onveranderde CM-handtekening; nieuwe mail alleen op expliciet verzoek; draft nooit automatisch verzenden. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Gmail bevat operationele templates/drafts en de centrale signaturebron._
