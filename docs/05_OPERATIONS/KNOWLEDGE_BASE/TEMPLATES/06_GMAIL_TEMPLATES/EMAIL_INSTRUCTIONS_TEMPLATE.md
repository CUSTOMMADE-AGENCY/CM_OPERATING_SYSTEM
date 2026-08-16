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
| Status | ACTIVE — V2.4 |
| Versie | V2.4 |
| Datum | AUGUSTUS 2026 |
| Risico | MEDIUM |
| Approval | Sophia — goedgekeurd voor CM-breed Gmail-gebruik |

## 02 · DOEL

Centrale e-mailcommunicatiestandaard voor `info@custommade.agency`. Deze standaard bepaalt hoe alle CM-agents Gmail lezen, inhoudelijk beoordelen, concepten opstellen, threaded replies maken, informatie controleren, commitments voorkomen, opvolging routeren en escaleren.

De standaard geldt uitsluitend voor Custommade Agency en uitsluitend voor Gmail. WhatsApp, DM en LinkedIn vallen voorlopig buiten scope.

## 03 · GEBRUIKSMOMENT

- Opstellen of wijzigen van een e-mailtemplate.
- Opstellen van een conceptantwoord op een bestaand Gmail-bericht.
- Opstellen van een nieuwe e-mail wanneer Sophia dit expliciet vraagt.
- Inhoudelijk beoordelen van een Gmail-thread.
- Routeren van communicatie naar de juiste domein-owner.
- Bepalen of een e-mail actie, approval, opvolging of escalatie vereist.
- Automatiseren van Gmail-concepten of opvolging.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Relevante Gmail-thread | Ja bij reply | Gmail |
| Origineel Gmail `message_id` | Ja bij reply | Gmail |
| Domein/onderwerp | Ja | Gmail-context / Workflow |
| Inhoudelijke owner | Ja | Agent Responsibility Matrix |
| Doel van de mail | Ja | Workflow / aanvraag |
| Ontvangerreferentie | Ja bij extern | Gmail / Contacts |
| Feiten en afspraken | Indien genoemd | Geldige Source of Truth |
| Approvalniveau | Indien vereist | Governance |
| Handtekeningbron | Ja | Goedgekeurde CM Gmail-signature voor `info@custommade.agency` |

## 05 · WERKTEMPLATE

### COMMUNICATIE — BASISSTIJL

| Onderdeel | Standaard |
|---|---|
| Algemeen | Professioneel, zakelijk, menselijk, direct, duidelijk en zelfverzekerd zonder arrogant te worden. |
| Opening | Contextspecifiek; geen generieke AI-opening wanneer de thread context biedt. |
| Kern | Kortste volledige antwoord dat inhoudelijk correct en bruikbaar is. |
| Structuur | Context → kernboodschap → actie → deadline/next step, voor zover relevant. |
| Call-to-action | Expliciet wanneer een vervolgactie nodig is. |
| Afsluiting | Conform goedgekeurde CM Gmail-signature. |
| Handtekening | Exact de centrale goedgekeurde CM Gmail-signature; agents mogen deze niet herschrijven of zelfstandig variëren. |

### COMMUNICATIE — TOON PER CONTEXT

| Context | Toon |
|---|---|
| Artist / artist management | Warmer, persoonlijker, betrokken en oplossingsgericht, zonder professionaliteit of duidelijke grenzen te verliezen. |
| Client / operations | Warm, duidelijk, professioneel en oplossingsgericht. |
| Prospect / outreach | Scherp, commercieel, premium en compact. |
| Partnership | Relationeel, strategisch en professioneel. |
| Deal / rights | Precies, zakelijk en met minimale interpretatieruimte. |
| Finance | Feitelijk, concreet, deadlinegericht en zonder emotionele framing. |
| Legal | Neutraal, zorgvuldig, brongebonden en dossierbestendig. |
| Conflict / escalatie | Kalm, feitelijk, chronologisch waar nodig en geschikt voor dossieropbouw. |

### GMAIL — THREADING & DRAFTREGELS

| Situatie | Verplichte actie |
|---|---|
| Bestaand Gmail-bericht waarop moet worden geantwoord | Maak een echte reply in dezelfde thread met het originele Gmail `message_id`. |
| Sophia vraagt om een concept op een bestaande mail | Sla het antwoord als Gmail Draft op in dezelfde thread; niet als losse nieuwe mail. |
| Sophia vraagt expliciet om een nieuwe mail | Maak een nieuwe Gmail Draft zonder `reply_message_id`. |
| Concept/draft | Niet verzenden zonder expliciete verzendopdracht en toepasselijke approval gate. |
| Handtekening | Voeg exact de centrale goedgekeurde CM-handtekening voor `info@custommade.agency` toe, inclusief goedgekeurde HTML/opmaak waar technisch ondersteund. |
| Onderwerpregel bij reply | Behoud de bestaande thread/subject. |
| Ontvanger bij reply | Gebruik de werkelijke afzender/ontvangers uit Gmail; niet raden. |
| Reply all | Niet automatisch. Beoordeel per ontvanger of betrokkenheid nog noodzakelijk is. |
| CC/BCC | Voeg niemand toe zonder functionele reden; deel geen informatie breder dan noodzakelijk. |

**Harde regel:** wanneer een bestaand bericht beschikbaar is, is `reply_message_id` de standaard. Een losse nieuwe e-mail is alleen toegestaan wanneer Sophia expliciet om een nieuwe mail vraagt of wanneer aantoonbaar geen relevante bestaande thread bestaat.

### THREAD-CONTEXT — VERPLICHTE INHOUDELIJKE CHECK

Voordat een reply-draft wordt opgesteld:

1. Lees de relevante eerdere berichten in de thread.
2. Identificeer open vragen, toezeggingen, deadlines, bedragen, percentages, attachments en eerder afgesproken next steps.
3. Vraag geen informatie opnieuw op wanneer deze al aantoonbaar beschikbaar is in de relevante CM-systemen.
4. Controleer waar nodig ClickUp, Drive, Moneybird of juridische bronstukken volgens de Source of Truth-regels.
5. Gebruik geen verouderde afspraak wanneer later in de thread een wijziging is bevestigd.

### INHOUDELIJKE AUTORITEIT

| Domein | Owner agent | Mag inhoudelijk bepalen | Sophia approval verplicht bij |
|---|---|---|---|
| CONTROL | CM CONTROL AGENT | Governance, escalatie, prioriteit, besluitvorming | Governance-impact of bindend besluit |
| OPS | CM OPS AGENT | Clients, artists, planning, delivery, releases, operations | Externe commitments of scopewijziging |
| PROSPECT | CM PROSPECT AGENT | Leads, partnerships, outreach, commerciële kansen | Externe outreach, voorstel, pricing of commerciële toezegging |
| LEGAL | CM LEGAL AGENT | Rights, contracten, claims, dealstructuur, legal review | Juridisch standpunt, contractwijziging of commitment |
| MONEY | CM MONEY AGENT | Facturen, open posten, cashflow, finance-status | Betalingsafspraak, incasso, BTW of financiële commitment |
| SOCIAL | CM SOCIAL AGENT | PR, media, marketing, contentcommunicatie | Publicatie of externe verzending |
| VAULT | CM VAULT AGENT | Documentatie, source-of-truth, opslagcontext | Geen externe inhoudelijke toezegging zonder domein-owner |
| FLOW | CM FLOW AGENT | Technische Gmail-flow, automation en integraties | Live datamutatie of verzendende automation |

Support Agents mogen informatie voorbereiden, maar nemen nooit de inhoudelijke autoriteit van de Owner Agent over.

### FEITEN, AFSPRAKEN EN COMMITMENTS

Een agent maakt expliciet onderscheid tussen:

- bevestigd feit;
- bestaande afspraak;
- voorstel;
- aanname;
- nog te bevestigen informatie.

**Nooit zelfstandig verzinnen of bevestigen:**

- akkoord op voorwaarden;
- nieuwe deadlines;
- pricing of fee;
- master ownership;
- publishing splits;
- neighboring rights;
- royaltypercentages;
- advances;
- recoupment-status;
- looptijd of territory;
- licensingvoorwaarden;
- commission / Success Fee;
- betalingsdatum of betalingsregeling;
- contractuele of juridische positie.

Bij twijfel, ontbrekende bron of tegenstrijdige informatie: `REVIEW_REQUIRED`. Niet invullen op basis van waarschijnlijkheid of AI-geheugen.

### SOURCE OF TRUTH — E-MAILINHOUD

| Onderwerp | Leidende bron |
|---|---|
| Governance / standaarden / agentregels | GitHub |
| Uitvoering / planning / deadlines / tasks | ClickUp |
| Financiële waarheid | Moneybird |
| Correspondentie / bevestigingen | Gmail |
| Contracten / bewijs / operationele documenten | Drive binnen geldige governance |
| Juridische interpretatie / rights-context | CM LEGAL AGENT + geldige bronstukken |

Geen bedragen, percentages, rechten of contractvoorwaarden uit geheugen of eerdere AI-output overnemen wanneer een primaire bron beschikbaar of vereist is.

### ONTVANGERS, ATTACHMENTS EN LINKS

- Controleer bij reply of alle bestaande ontvangers nog relevant zijn.
- Gebruik `Reply All` niet automatisch.
- Voeg geen nieuwe CC/BCC toe zonder functionele reden.
- Wanneer de mail verwijst naar een attachment, controleer dat de juiste attachment daadwerkelijk beschikbaar is.
- Gebruik geen verouderde versie wanneer een nieuwere goedgekeurde versie bestaat.
- Deel geen vertrouwelijke deal-, rights-, legal- of finance-informatie breder dan noodzakelijk.
- Schrijf nooit “zie bijlage” wanneer geen bijlage is gekoppeld of aantoonbaar beschikbaar is.

### ONDERWERPREGELS

- Bij reply: bestaande subject behouden.
- Bij nieuwe mail: onderwerp moet concreet, scanbaar en dossiergeschikt zijn.
- Vermijd nietszeggende onderwerpen zoals `Update`, `Vraag` of `Even dit` wanneer een inhoudelijk onderwerp beschikbaar is.

Voorbeelden van logica, niet van verplichte tekst:

- `[ARTIST] — Release Planning — Approval Needed`
- `[ASSET] — NDA / Data Room Access`
- `[CLIENT] — Deliverable — Feedback Required`

### OPVOLGING EN CLICKUP

Wanneer e-mailcommunicatie een nieuwe actie, afspraak of deadline creëert, moet worden beoordeeld of een ClickUp-taak of update nodig is.

**Principe:** Gmail = communicatie. ClickUp = uitvoering.

Een draft kan daarom naast de e-mail ook een interne follow-up vereisen met:

- owner;
- due date;
- gewenste next action;
- bronreferentie naar Gmail-thread of dossier.

### INBOUND CLASSIFICATIE

Waar nuttig mag een inkomende Gmail-thread intern worden geclassificeerd als:

`FYI` · `ACTION_REQUIRED` · `APPROVAL_REQUIRED` · `CLIENT_REQUEST` · `DEAL` · `LEGAL` · `FINANCE` · `RIGHTS` · `MEETING` · `FOLLOW_UP` · `ESCALATION` · `IRRELEVANT`

Classificatie is routing-informatie en geen inhoudelijke beslissing.

### PRIORITEIT

| Prioriteit | Richtlijn |
|---|---|
| P1 | Vandaag: juridisch risico, dealdeadline, betalingsprobleem, releaseblocker, reputatierisico of andere tijdkritische blocker. |
| P2 | Binnen 1 werkdag: clientvraag, partnership, approval, projectbesluit of commercieel relevante opvolging. |
| P3 | Binnen 2–3 werkdagen: algemene follow-up, informatievraag of niet-kritische administratie. |

Bij conflict met een concrete contractuele of operationele deadline wint de concrete deadline.

### DRAFT QUALITY GATE

Voor een draft die aan Sophia wordt voorgelegd controleert de agent minimaal:

| Check | Vraag |
|---|---|
| FACTS | Zijn relevante feiten en afspraken gecontroleerd? |
| COMMITMENTS | Bevat de mail een nieuwe of impliciete toezegging? |
| MONEY | Worden bedragen, percentages, betaalvoorwaarden of financiële verwachtingen genoemd? |
| LEGAL / RIGHTS | Worden contracten, masters, publishing, neighboring rights, licensing, claims of rechten geïnterpreteerd? |
| RECIPIENTS | Zijn To/CC/BCC correct en noodzakelijk? |
| ATTACHMENTS | Zijn genoemde attachments/links aanwezig en juist? |
| ACTION | Is de next step duidelijk? |
| THREAD | Staat de draft in de juiste bestaande thread wanneer het een reply is? |
| SIGNATURE | Is de goedgekeurde CM-handtekening correct aanwezig? |

Als één materiële check niet kan worden bevestigd: `REVIEW_REQUIRED`.

### CENTRALE HANDTEKENINGBRON

- Mailbox: `info@custommade.agency`.
- Er bestaat één centrale, goedgekeurde CM-handtekening.
- Agents mogen de handtekening niet parafraseren, inkorten, uitbreiden of opnieuw ontwerpen.
- De operationele signature-inhoud en HTML/opmaak worden in Gmail beheerd; GitHub legt de gebruiksregel vast, niet persoonlijke of dynamische signature-assets.
- Wanneer exacte HTML/opmaak technisch niet kan worden behouden, wordt de draft gemarkeerd voor review vóór verzending.

### GECONTROLEERDE STATUSSEN

| Veld | Toegestane waarden |
|---|---|
| Template status | `DRAFT` · `READY_FOR_APPROVAL` · `ACTIVE` · `SUPERSEDED` |
| Draft review | `READY` · `REVIEW_REQUIRED` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Inhoudelijke autoriteit volgt altijd de domein-owner.
>
> **02** — Juridische, financiële, commerciële en rights-feiten worden niet verzonnen of zelfstandig uitgebreid.
>
> **03** — Bij twijfel of ontbrekende bron: `REVIEW_REQUIRED`; liever geen toezegging dan een onbevestigde toezegging.
>
> **04** — Bestaande correspondentie wordt als threaded reply opgesteld met het originele Gmail `message_id`.
>
> **05** — Een concept is een Draft en wordt niet verzonden zonder expliciete verzendopdracht.
>
> **06** — De centrale CM-handtekening wordt exact hergebruikt en niet door agents herschreven.
>
> **07** — `Reply All` is nooit de automatische standaard.
>
> **08** — Relevante thread-context wordt gelezen vóór inhoudelijke drafting.
>
> **09** — Gmail-afspraken die uitvoering creëren worden waar nodig naar ClickUp vertaald.
>
> **10** — FIERCE-mailboxen, FIERCE-templates en FIERCE-governance vallen buiten deze standaard.
>
> **11** — Deze versie geldt voorlopig alleen voor Gmail; WhatsApp, DM en LinkedIn vallen buiten scope.

## 07 · RESULTAAT

- Consistente, domein-correcte e-mailcommunicatie.
- Warme en persoonlijke artistcommunicatie zonder verlies van zakelijke controle.
- Reply-concepten blijven in de juiste Gmail-thread.
- Feiten en commitments zijn brongebonden.
- Eén herkenbare en centraal beheerde CM-handtekening.
- Duidelijke owner/approvalroute.
- Minder dubbel uitvragen van informatie.
- Betere follow-up via ClickUp.
- Geen ongecontroleerde externe verzending.

## 08 · KWALITEITSCONTROLE

- Relevante thread-context is gelezen.
- Domein-owner is expliciet.
- Feiten zijn gecontroleerd tegen de juiste Source of Truth waar nodig.
- Bij reply is het originele Gmail `message_id` gebruikt.
- Draft staat in dezelfde thread als het bronbericht.
- Goedgekeurde CM-handtekening is aanwezig.
- Geen onbevestigde juridische, financiële, commerciële of rights-commitment.
- Ontvangers en attachments zijn gecontroleerd.
- Call-to-action en next step zijn duidelijk waar relevant.
- ClickUp-opvolging is beoordeeld wanneer de mail uitvoering creëert.
- Externe verzending heeft de juiste approval gate.

## 09 · ESCALATIECRITERIA

Escalatie naar CM CONTROL AGENT of relevante Owner Agent is verplicht bij:

- onduidelijke owner;
- tegenstrijdige bronnen;
- ontbrekende approval;
- juridisch, financieel, rights-, reputatie- of securityrisico;
- verzoek om een commitment buiten agentmandaat;
- onduidelijkheid over ontvangers of vertrouwelijkheid;
- technisch onvermogen om correcte threading of signature te behouden wanneer verzending wordt overwogen.

Sophia approval blijft verplicht waar Agent Architecture of Responsibility Matrix dit voorschrijft.

## 10 · OVERDRACHT

- → Gmail templates/drafts
- → Domein-owner
- → ClickUp follow-up indien nodig
- → CM FLOW AGENT voor technische Gmail-automation of integratie
- → CM CONTROL AGENT bij governance-, routing- of approvalconflict

## 11 · LEIDENDE BRON

GitHub = communicatiestandaard/spec · Gmail = operationele e-mail/draft + signaturebron · ClickUp = opvolging · Drive = operationele documenten/evidence · Moneybird = financiële waarheid.

## 12 · OPSLAG

Gmail voor operationele templates/drafts en signature. Drive bevat relevante dossier-evidence waar de geldige dossierstructuur dit voorschrijft. GitHub bevat geen clientmailinhoud of persoonlijke signaturekopie.

## 13 · AI-INSTRUCTIES

- Bepaal eerst het domein en de inhoudelijke owner.
- Lees bij reply de relevante Gmail-thread vóór drafting.
- Vraag geen informatie opnieuw wanneer deze aantoonbaar beschikbaar is in geldige CM-systemen.
- Gebruik bij bestaande correspondentie het originele `message_id` voor de reply-draft.
- Maak geen losse nieuwe mail wanneer een reply in dezelfde thread bedoeld is.
- Gebruik standaard `info@custommade.agency` voor CM-communicatie.
- Gebruik exact de goedgekeurde centrale CM-handtekening.
- Artistcommunicatie mag warmer, persoonlijker en meer betrokken zijn dan overige zakelijke CM-communicatie.
- Bij twijfel over feit, afspraak of commitment: `REVIEW_REQUIRED`.
- Verzin nooit juridische, financiële, commerciële of rights-feiten.
- Gebruik geen `Reply All` zonder ontvangercheck.
- Controleer genoemde attachments en links.
- Beoordeel of een afspraak of deadline naar ClickUp moet worden doorgezet.
- Verzend niets wanneer Sophia om een concept/draft vraagt.
- Vermeng FIERCE en Custommade Agency nooit.
- Pas deze standaard voorlopig alleen toe op Gmail.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Template `ACTIVE` | Make → Gmail workflow | Template beschikbaar maken | Template-ID→External ID, Domein→Route, Onderwerpregel→Subject, Owner→Owner |
| Reply-draft gevraagd | Gmail workflow | Thread lezen + Draft in bestaande thread maken | Gmail message ID→`reply_message_id`, afzender→To, thread subject→Subject, approved signature→Signature |
| Nieuwe mail expliciet gevraagd | Gmail workflow | Nieuwe Draft maken | Contactref→To, onderwerp→Subject, approved signature→Signature |
| Nieuwe afspraak/deadline uit Gmail | Gmail → ClickUp workflow | Follow-up voorbereiden | Gmail thread→Reference, Owner→Assignee, deadline→Due date, next action→Description |
| Materiële onzekerheid | Agent routing | `REVIEW_REQUIRED` | Risk type→Review reason, Owner→Reviewer |

**Automation gate:** automatische verzending is niet toegestaan binnen deze standaard. Een verzendende Gmail-automation vereist afzonderlijke technische documentatie, testlog, rollback/fallback, CM CONTROL review en Sophia approval.

## 15 · REVIEWRITME

- Review na materiële wijziging in Gmail-workflow, agentmandaat, Source of Truth of approval governance.
- Minimaal kwartaalreview door CM CONTROL AGENT met relevante support agents.
- Wijzigingen via branch, Pull Request en toepasselijke approval.

## 16 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM CONTROL AGENT |
| 2026-08-10 | V2.2 | Nederlandstalige structuur, domeinrouting, Template-ID, gecontroleerde statussen en geldige Gmail/ClickUp mappings toegevoegd. | CM CONTROL AGENT |
| 2026-08-16 | V2.3 | CM-brede Gmail-regel toegevoegd voor threaded replies, standaardmailbox, centrale signature en draft-only gedrag. | CM CONTROL AGENT |
| 2026-08-16 | V2.4 | Inhoudelijke communicatiestandaard toegevoegd: toon per context, warmere artistcommunicatie, thread-context, Source of Truth, owner authority, commitment guardrails, recipient/attachment checks, ClickUp-opvolging, inbound classificatie, prioriteiten en Draft Quality Gate. Scope voorlopig uitsluitend Gmail. | CM CONTROL AGENT |

---

_Leidende bron: GitHub. Gmail bevat operationele templates/drafts en de centrale signaturebron._
