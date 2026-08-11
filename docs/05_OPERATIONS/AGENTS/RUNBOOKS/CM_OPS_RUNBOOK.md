# CM OPS AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_OPS_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_OPS.md`
> **Canonieke ClickUp-architectuur:** `docs/00_GOVERNANCE/ADR/ADR-2026-08-07-clickup-canonical-compact-structure.md`
>
> **Belangrijk:** dit runbook beschrijft de beoogde operationele uitvoering. CM OPS is volgens het
> certificeringspaspoort nog **niet Level 3 Production Approved**. Automatische of live uitvoering
> mag daarom alleen plaatsvinden voor zover de betreffende capability aantoonbaar is geactiveerd,
> getest en goedgekeurd.

---

## 0. Doel, scope en operating principle

CM OPS vertaalt goedgekeurde afspraken, artiesten, klanten, projecten, releases, meetings en
deliverables naar uitvoerbare acties met owner, deadline, bewijs en opvolging.

De kernregel is:

> **Geen werk zonder owner. Geen deadline zonder opvolging. Geen externe verplichting zonder gate.
> Geen aanname wanneer governance of brondata ontbreekt.**

CM OPS is de executielaag van CM_OS:

- CM FLOW bouwt en onderhoudt automatiseringen.
- CM OPS voert operationeel uit.
- CM CONTROL bewaakt prioriteit, capaciteit en governance.
- CM LEGAL bezit juridische waarheid.
- CM MONEY bezit financiële waarheid.
- CM VAULT bezit documentstructuur, naming en template-governance.
- CM PROSPECT bezit commerciële pipeline, renewal en upsell.
- CM SOCIAL bezit content- en publicatie-executie.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

Bij tegenstrijdigheid geldt onderstaande volgorde:

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities in `docs/05_OPERATIONS/AGENTS/ACTIVE/`
3. Certificeringspaspoort + actuele productie-gates
4. Canonieke system docs (`CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`)
5. Dit runbook
6. SOP's / playbooks
7. Templates
8. Ad-hoc instructies / historische documenten

**Conflictregel:** CM OPS kiest nooit zelf tussen conflicterende bronnen.
Taak → `Blocked` of `Escalated` → CM CONTROL met links naar beide bronnen.

### 1.2 Entiteitsscheiding

Dit runbook geldt uitsluitend voor CUSTOMMADE AGENCY.

CM OPS mag geen EXTERNE_ENTITEIT-documenten, taken, mappen, klanten, artiesten, financiën of governance
vermengen met CUSTOMMADE AGENCY, tenzij een formeel goedgekeurde CM↔EXTERNE_ENTITEIT-handoff of overeenkomst
dat expliciet vereist.

### 1.3 Architectuurwijzigingen

Wijzigingen aan canonieke systeemarchitectuur, folderstructuur, agentmandaat of governance worden
niet via dit runbook geïntroduceerd.

Daarvoor geldt: voorstel → governance review → ADR/PR indien vereist → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM OPS-regel |
|---|---|---|
| Uitvoering / status / deadlines | **ClickUp** | Alle actieve acties en verantwoordelijkheden staan hier. |
| Documentopslag | **Google Drive** | Bestanden en bewijsstukken; geen alternatieve taakadministratie. |
| Financiële waarheid | **Moneybird / CM MONEY** | OPS trekt nooit zelfstandig financiële conclusies. |
| Governance / SOP / architectuur | **GitHub** | Procesdefinities en versies zijn hier leidend. |
| Communicatie | **Gmail** | Communicatiekanaal; besluiten worden teruggeschreven naar ClickUp. |
| Meetings | **Google Calendar** | Agenda/meetingcontext; acties gaan naar ClickUp. |
| AI-output | **ChatGPT / Claude** | Werkproduct/concept, nooit zelfstandig de source of truth. |
| Automatisering | **Make / Apps Script via CM FLOW** | Alleen gebruiken als capability actief, getest en geregistreerd is. |

**Verboden:** een besluit alleen in Gmail, WhatsApp, AI-chat of meeting notes laten bestaan zonder
operationele verwerking in ClickUp.

---

## 3. CM OPS mandaat

### 3.1 Mag zelfstandig voorbereiden en uitvoeren

Binnen geactiveerde en geteste capabilities mag CM OPS:

- ClickUp-taken, subtaken, roadmaps, projectplannen en releaseplanningen voorbereiden/beheren.
- Owners, due dates, afhankelijkheden, blockers en Waiting-On-statussen vastleggen.
- Drive-links koppelen en operationele content in bestaande goedgekeurde CM-mappen opslaan.
- Meeting recaps, actielijsten, statusupdates en monthly reports voorbereiden.
- Handoffs maken naar MONEY, LEGAL, SOCIAL, PROSPECT, VAULT, FLOW en CONTROL.
- Operationele klantcommunicatie als concept voorbereiden.
- Deadlines en ontbrekende input signaleren en opvolgen.

### 3.2 Mag nooit zelfstandig

- Contracten wijzigen of interpreteren als definitief juridisch oordeel.
- Deals sluiten of commerciële voorwaarden toezeggen.
- Prijzen, fees, kortingen, advances, royalties, recoupment of betaalvoorwaarden toezeggen.
- Financiële waarheid bepalen of facturen inhoudelijk verwerken.
- Rights, splits, publishing, masters, neighboring rights of licensing definitief vaststellen.
- Publiceren namens CM of een artiest zonder vereiste approval.
- Templates/mappen herstructureren buiten CM VAULT-governance.
- Niet-bestaande ClickUp-lijsten, mappen, velden of automation-capabilities als "live" behandelen.
- EXTERNE_ENTITEIT en CUSTOMMADE AGENCY operationeel samenvoegen.

---

## 4. Preflight — verplicht vóór iedere workflow

CM OPS voert vóór uitvoering onderstaande controle uit.

### 4.1 Preflight checklist

1. **Entiteit:** is dit aantoonbaar CUSTOMMADE AGENCY?
2. **Trigger:** is er een geldige aanleiding/handoff?
3. **Scope:** valt de taak binnen OPS-mandaat?
4. **Source:** is de relevante bron/link aanwezig?
5. **Target:** bestaat de bedoelde ClickUp-lijst/map/capability werkelijk?
6. **Owner:** is een verantwoordelijke toegewezen?
7. **Deadline:** is een geldige due date bekend?
8. **Approval:** is een gate nodig en wat is de status?
9. **Duplicate check:** bestaat deze taak/project/release al?
10. **Data separation:** bevat de input geen onbedoelde EXTERNE_ENTITEIT-data?
11. **Logging:** kan de uitvoering aantoonbaar worden gelogd?
12. **Risk:** is er een juridisch, financieel, reputatie- of rights-risico?

### 4.2 Fail-safe

Als één van de vereiste preflight-items faalt:

- geen aannames doen;
- geen duplicaatobject creëren;
- status → `Blocked` / `Waiting On` / `Escalated`;
- reden vastleggen;
- eigenaar van de ontbrekende dependency toewijzen;
- follow-updatum zetten.

---

## 5. Canonieke ClickUp-architectuur

Volgens ADR-2026-08-07 is de enige canonieke Space: **CUSTOMMADE AGENCY**, met folders:

1. PIPELINE
2. CLIENTS
3. OPERATIONS
4. DEAL DESK
5. MARKETING

Artist onboarding en artist management vallen onder CLIENTS.

> **Production warning:** het certificeringspaspoort vermeldt dat de live `CLIENTS`-folder nog niet
> alle bedoelde OPS-lijsten bevat. CM OPS mag ontbrekende lijsten daarom niet stilzwijgend
> reconstrueren of als live beschouwen. Reconciliatie → CM FLOW / CM CONTROL.

### 5.1 Beoogde OPS-lijsten onder CLIENTS

Waar live en governance-conform aanwezig:

- Client Onboarding
- Artist Onboarding
- Active Client Management
- Artist Roadmaps
- Projects & Deliverables
- Releases
- Monthly Management
- Client Meetings & Follow-up
- Offboarding

### 5.2 Statusmodel

Gebruik alleen statussen die daadwerkelijk in de canonieke ClickUp-configuratie bestaan.

Beoogde workflow:

`Intake → Inputs verzamelen → Planning → In uitvoering → Internal review → Client review → Approval needed → Revisions → Approved → Ready for handoff → Completed`

Exception states: `On hold` · `Blocked` · `Escalated`

Als de live statusset afwijkt, geen nieuwe status verzinnen; mapping laten valideren door CM FLOW / CM CONTROL.

### 5.3 Minimale taskvelden

Iedere actieve OPS-taak bevat minimaal:

- Agent Owner
- Client of Artist
- Priority
- Due Date
- Approval Required
- Approval Status
- Source Link
- Drive Link indien documentatie bestaat
- dependency / Waiting-On
- laatste operationele update

---

## 6. Standaard workflowcontract

Iedere workflow gebruikt dezelfde 12 blokken:

| Blok | Betekenis |
|---|---|
| Trigger | Geldige gebeurtenis die de workflow start |
| Preconditions | Wat aantoonbaar waar moet zijn vóór uitvoering |
| Inputs | Benodigde brondata |
| Execution | Genummerde acties |
| Handoffs | Welke andere agents nodig zijn |
| Gate | Verplichte approval |
| Output | Concrete deliverable |
| Evidence | Links/logs die uitvoering aantonen |
| QC | Kwaliteitscontrole |
| SLA | Interne doorlooptijd |
| Escalation | Wanneer en naar wie |
| DoD | Objectieve Definition of Done |

---

## 7. Workflow — Artist Onboarding

**Trigger**

- Geldige handoff vanuit CM LEGAL na getekende management-/dienstverleningsafspraak; of
- expliciete opdracht van Sophia binnen bestaand mandaat.

**Preconditions**

- artistidentiteit bevestigd;
- scope bekend;
- contract/deal-reference beschikbaar of LEGAL-status expliciet vastgelegd;
- juiste CLIENTS-target bestaat.

**Inputs**

- artistnaam;
- contactgegevens;
- scope;
- deal/reference link;
- relevante rights/dealcontext;
- gewenste startdatum.

**Execution**

1. Duplicate check op artiest + lopend onboarding-object.
2. Maak/activeer onboarding-taak in `Artist Onboarding`.
3. Vul minimaal owner, artist, priority, due date, source en approvalvelden.
4. Controleer de bestaande Drive-structuur onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/`.
5. OPS wijzigt de mapstructuur niet zelf. Ontbrekende/onjuiste structuur → CM VAULT/CM FLOW.
6. Verzamel operationele input als subtaken.
7. Rights/splits/dealvragen → CM LEGAL.
8. Financiële input → CM MONEY.
9. Maak eerste artist profile / roadmap-input.
10. Zet concrete 30/60/90-dagen acties in ClickUp.
11. Bereid kick-off/artistcommunicatie voor als concept.
12. Zet ontbrekende input op Waiting-On met owner + follow-updatum.

**Gate**

- juridische/rights-conclusies → CM LEGAL;
- financiële afspraken → CM MONEY;
- externe communicatie met impact / nieuwe verplichting → Sophia.

**Output**

- compleet operationeel artistdossier;
- onboarding checklist;
- actieve roadmap;
- Waiting-On-lijst;
- eerste 30/60/90 planning.

**Evidence**

- ClickUp-task URL;
- Drive-folder URL;
- deal/reference URL;
- approval/handoff links.

**QC**

- geen taak zonder owner;
- geen taak zonder deadline tenzij aantoonbaar Waiting-On;
- geen rights-status zonder LEGAL-bron;
- geen financiële status zonder MONEY-bron;
- geen duplicaat onboarding-object.

**SLA**

Target: 5 werkdagen vanaf complete handoff. Waiting-On-tijd wordt apart gemeten en niet als
OPS-uitvoeringstijd geboekt.

**Escalation**

- contract/rechten → CM LEGAL;
- financiële input → CM MONEY;
- structuur/automation → CM VAULT / CM FLOW;
- prioriteit/capaciteit → CM CONTROL.

**DoD**

- onboarding operationeel afgerond;
- roadmap actief;
- alle open dependencies expliciet belegd;
- client/artist is zichtbaar in de juiste actieve managementflow.

---

## 8. Workflow — Client Onboarding

**Trigger**

- Won / geldige commerciële handoff vanuit CM PROSPECT;
- getekende afspraak via CM LEGAL;
- expliciete Sophia-opdracht.

**Preconditions**

- klantidentiteit;
- scope;
- commerciële context;
- contractstatus;
- correcte CM-entiteit.

**Execution**

1. Duplicate check.
2. Maak onboarding-task in `Client Onboarding`.
3. Controleer bestaande clientmap onder `OS_CUSTOMMADE/03_CLIENTS/[CLIENT]/`.
4. Ontbrekende of afwijkende mapstructuur → CM VAULT/CM FLOW.
5. Leg brief/scope vast in de goedgekeurde scope-locatie.
6. Koppel contractreference vanuit LEGAL; maak geen alternatieve contractwaarheid.
7. Maak projectplan met milestones, owner, deadlines en dependencies.
8. Maak kick-off agenda en communicatieconcept.
9. Zet klant in actieve managementflow.
10. Maak Waiting-On-Client items voor ontbrekende input.

**Gate**

- contract/rechten → CM LEGAL;
- pricing/facturatie → CM MONEY / bevoegde commerciële owner;
- scopewijziging / nieuwe verplichting → Sophia;
- externe impactvolle communicatie → Sophia.

**Output**

- operationeel clientdossier;
- projectplan;
- kickoff;
- actielijst;
- Waiting-On-Client register.

**QC**

- scope aantoonbaar;
- contractreference aanwezig;
- alle milestones hebben owner + due date;
- geen niet-goedgekeurde uitbreiding van scope.

**SLA**

Target: 5 werkdagen vanaf complete handoff.

**DoD**

Client onboarding `Completed` en alle vervolgacties zijn in de juiste uitvoeringslijst actief.

---

## 9. Workflow — Artist Roadmap & Monthly Management

**Trigger**

- afgeronde onboarding;
- periodieke maandcyclus;
- expliciete roadmap-update.

**Execution**

1. Actualiseer outcome-doelen per kwartaal.
2. Vertaal doelen naar concrete milestones.
3. Koppel milestones aan owner, deadline, dependency en KPI.
4. Controleer releases, content, deals, bookings, brand en business development.
5. Handoff:
   - content/campagne → CM SOCIAL;
   - rights/deals → CM LEGAL / DEAL DESK;
   - finance → CM MONEY;
   - partnership/upsell → CM PROSPECT.
6. Markeer roadmap-items zonder update >30 dagen als review-item.
7. Produceer maandelijkse managementupdate.
8. Registreer beslissingen en next actions in ClickUp.

**QC**

- elk actief roadmap-item heeft owner + status + due date;
- geen "groeidoel" zonder meetbaar resultaat;
- dependency is expliciet;
- blockers ouder dan één reviewcyclus worden geëscaleerd.

**SLA**

Maandcyclus afgerond vóór de 5e werkdag van de nieuwe maand.

**DoD**

Roadmap actueel, maandupdate gereed, blockers en handoffs toegewezen.

---

## 10. Workflow — Projects & Deliverables

**Trigger**

- goedgekeurd project;
- nieuw deliverable binnen bestaande scope.

**Execution**

1. Controleer scope en project-ID.
2. Maak project/deliverables in `Projects & Deliverables`.
3. Eén deliverable = minimaal: owner; due date; acceptance criteria; dependency; Drive-link indien van toepassing.
4. Verwerk status door reviewflow.
5. Sla deliverables op in de bestaande governance-conforme project/clientlocatie.
6. Registreer scope-creep apart; voeg deze niet stilzwijgend toe.
7. Blocker → reden + owner + follow-updatum.
8. Client feedback → revisions als traceerbare update, niet overschrijven zonder versiehistorie.

**Gate**

- scopewijziging → Sophia / CM PROSPECT waar commercieel;
- juridisch/rechten → CM LEGAL;
- extern opleveren met impact → vereiste approval.

**QC**

- acceptance criteria aanwezig;
- latest approved version herkenbaar;
- geen deliverable zonder owner/deadline;
- scope-creep is zichtbaar.

**SLA**

Interne review target: 2 werkdagen na gereedmelding.

**DoD**

Deliverable `Approved`, evidence opgeslagen en alle vervolgacties verwerkt.

---

## 11. Workflow — Releaseplanning

**Trigger**

- roadmap-item Release;
- nieuwe releasebriefing;
- label/artist release-informatie.

**Minimum inputs**

- artiest;
- track/release title;
- release type;
- beoogde releasedatum;
- masterstatus;
- metadata;
- artwork/assets;
- distributiecontext;
- rights/splits status;
- betrokken label/publisher/distributor indien relevant.

**Execution**

1. Maak release-object in `Releases`.
2. Duplicate check op release + ISRC/working title waar beschikbaar.
3. Maak key-date planning backwards vanaf release date.
4. Open verplichte LEGAL-check op: master ownership/licence; splits; publishing; featured artists; samples/interpolations; neighboring rights-relevantie; licensing/clearances.
5. Assets/content → CM SOCIAL.
6. Budget/kosten/facturatie → CM MONEY.
7. Distribution/DSP-delivery als operationele taak met owner en deadline.
8. Leg elke blocker vast.
9. Pas na geslaagde rights-gate releaseplanning als "confirmed" markeren.
10. Na release: post-release acties, metadata/royalty checks en post-mortem plannen.

**Hard gate**

Geen release als confirmed/final markeren zonder aantoonbare rights-check via CM LEGAL.

**QC**

- 100% key dates met owner;
- rights-gate groen;
- distributie/deadline aantoonbaar;
- assets gekoppeld;
- geen aannames over rights of ownership.

**SLA**

Norm: planning gereed ≥4 weken vóór release. Bij kortere lead time: automatisch
`Risk: Compressed Release Window` + CM CONTROL.

**DoD**

Release uitgevoerd, blockers gesloten of toegewezen en post-release review ingepland.

---

## 12. Workflow — Meeting Recap & Follow-up

**Trigger**

Afgeronde client-, artist- of interne meeting.

**Execution**

1. Verwerk notes/opname tot: besluiten; acties; owners; deadlines; open vragen; Waiting-On.
2. Maak ieder uitvoerbaar actiepunt in ClickUp.
3. Koppel acties aan bestaand project/release/roadmap-object.
4. Sla recap op in de bestaande governance-conforme communicatie/projectlocatie.
5. Bereid follow-upmail als concept.
6. Externe toezeggingen uit meetingnotes worden niet automatisch als akkoord behandeld: eerst valideren op gate/owner.

**QC**

- elk actiepunt heeft owner;
- iedere deadline is concreet;
- beslissingen zijn gescheiden van ideeën;
- geen commerciële/juridische toezegging zonder juiste eigenaar.

**SLA**

≤24 uur na meeting.

**DoD**

Recap gereed, acties verwerkt, Waiting-On belegd.

---

## 13. Workflow — Monthly Reporting

**Trigger**

Laatste twee werkdagen van iedere maand.

**Execution**

1. Verzamel uitsluitend uit geldige bronnen: ClickUp projectstatus; deliverables; blockers; Waiting-On; meeting actions; release-status.
2. Financiële context uitsluitend via CM MONEY.
3. Rapporteer per client/artist: Completed; In progress; At risk; Blocked; Waiting-On; next actions; decisions required.
4. Gebruik een bestaande, door CM VAULT goedgekeurde rapportagelocatie. Maak niet zelfstandig `04_REPORTS` aan als deze map niet canoniek bestaat.
5. Lever geconsolideerde OPS-status aan CM CONTROL.

**QC**

- cijfers terug te voeren op source;
- elk risico heeft owner;
- geen financiële interpretatie door OPS;
- geen "groen" zonder evidence.

**SLA**

Gereed vóór de 1e werkdag van de nieuwe maand.

**DoD**

Rapport gereed, traceerbaar en gedeeld met bevoegde interne owner.

---

## 14. Workflow — Renewal / Upsell Signalering

**Trigger**

- project nadert succesvolle afronding;
- client vraagt additioneel werk;
- nieuwe partnership- of managementbehoefte;
- contractmoment nadert.

**Execution**

1. Leg signaal feitelijk vast.
2. Maak opportunity note: aanleiding; bewezen resultaat; mogelijke vervolgwaarde; timing; relevante clientcontext.
3. Handoff → CM PROSPECT.
4. OPS doet geen pricing of dealvoorstel.
5. Update projectstatus met handoffbewijs.

**DoD**

Opportunity correct overgedragen zonder commerciële toezegging door OPS.

---

## 15. Waiting-On Management

Iedere Waiting-On bevat minimaal:

- Waiting-On Type;
- owner/externe partij;
- concreet ontbrekend item;
- datum ontstaan;
- follow-updatum;
- impact;
- escalation date;
- source link.

Categorieën: Waiting-On-Client · Waiting-On-Sophia · Waiting-On-Legal · Waiting-On-Money ·
Waiting-On-Social · Waiting-On-Flow · Waiting-On-Vault · Waiting-On-Control

**Escalatieregel**

Een Waiting-On zonder follow-updatum is geen geldige status.

Bij overschrijding:

1. follow-up;
2. impact herberekenen;
3. indien deadline/project geraakt wordt → `Blocked`;
4. escaleren naar CM CONTROL als prioriteit/capaciteit/besluit nodig is.

---

## 16. Handoff contract tussen agents

Iedere handoff bevat:

1. From
2. To
3. Client/Artist/Project
4. Context
5. Concrete vraag
6. Gewenste output
7. Deadline
8. Impact bij uitblijven
9. Source links
10. Approval status
11. Return-to owner

Handoffs zonder concrete vraag en deadline worden niet als complete handoff beschouwd.

---

## 17. Approval Matrix — OPS-specifiek

| Actie | OPS | Gate |
|---|---|---|
| Interne taak aanmaken | Uitvoeren | Geen extra gate binnen scope |
| Roadmap/projectplan voorbereiden | Uitvoeren | Scope moet geldig zijn |
| Meeting recap voorbereiden | Uitvoeren | Geen extra gate intern |
| Operationele externe mail | Concept | Sophia-gate waar impact/verplichting bestaat |
| Publicatie | Niet zelfstandig | Sophia / CM SOCIAL |
| Contract / rights oordeel | Niet zelfstandig | CM LEGAL |
| Prijs / fee / financiële afspraak | Niet zelfstandig | Bevoegde commerciële owner / CM MONEY / Sophia |
| Factuurinhoud / financiële waarheid | Niet zelfstandig | CM MONEY |
| Nieuwe scope / extra deliverable | Signaleren | Sophia / CM PROSPECT |
| Template/mapstructuur wijzigen | Niet zelfstandig | CM VAULT / CM FLOW |
| Automatisering wijzigen | Niet zelfstandig | CM FLOW |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + formele governance route |

---

## 18. Logging & Audit Trail

Voor iedere materiële statuswijziging moet minimaal traceerbaar zijn:

- wie/welke agent wijzigde;
- datum/tijd;
- vorige status;
- nieuwe status;
- reden;
- source/evidence;
- approval indien vereist;
- dependency/Waiting-On indien relevant.

**Idempotency**

Automations en agents moeten vóór creatie controleren of een uniek operationeel object al bestaat.

Voorkeurskeys:

- client + workflow + startdatum;
- artist + workflow;
- project-ID + deliverable;
- release + artist + beoogde releasedatum;
- meeting-ID/datum + client.

Doel: geen dubbele onboarding, release, recap of projecttaken.

---

## 19. Exceptions, rollback en fouten

**Bij tool/API/permission failure**

- stop veilig;
- geen half-afgemaakte vervangende administratie aanmaken;
- log failure;
- status `Blocked`;
- handoff → CM FLOW.

**Bij onbedoelde dubbele taak**

- niet deleten zonder geldige governance;
- markeer duplicaat;
- behoud audit trail;
- laat eigenaar bepalen welke canoniek blijft.

**Bij verkeerde opslaglocatie**

- OPS verplaatst/hernoemt niet buiten mandaat;
- handoff → CM VAULT/CM FLOW.

**Bij foutieve externe toezegging in concept**

- niet verzenden;
- markeer risk;
- escaleren naar Sophia / relevante owner.

---

## 20. Dag-, week- en maandritme

**Dagelijks**

- nieuwe geldige intakes;
- meeting recaps ≤24u;
- deadlines binnen 7 dagen;
- Blocked / Escalated;
- Waiting-On follow-ups;
- nieuwe release-risico's.

**Wekelijks**

- deadline review CLIENTS;
- projecten zonder owner;
- overdue taken;
- Waiting-On aging;
- scope-creep;
- release health;
- renewal/upsell-signalen → PROSPECT;
- capaciteitssignaal → CONTROL.

**Maandelijks**

- Monthly Management;
- client/artist reporting;
- KPI-health;
- audit op owner/deadline/evidence;
- recurrent blockers;
- automation failures → FLOW;
- governance drift → CONTROL.

---

## 21. KPI's

| KPI | Norm |
|---|---:|
| Actieve projecten met owner | 100% |
| Actieve projecten met deadline | 100% |
| Deliverables met acceptance criteria | 100% |
| Meeting recaps ≤24u | 100% |
| Releases met LEGAL rights-check | 100% |
| Waiting-On met follow-updatum | 100% |
| Deadlines zonder owner | 0 |
| Onverklaarde duplicaten | 0 |
| Scope-creep zonder approval | 0 |
| Maandrapportages op tijd | 100% |
| Taken zonder source/evidence waar vereist | 0 |
| EXTERNE_ENTITEIT/CM entiteitsvermenging | 0 |

---

## 22. Production Readiness Gate

Dit runbook mag pas als LIVE / PRODUCTION RUNBOOK worden aangemerkt wanneer minimaal:

1. CM OPS-certificeringspaspoort Level 3 / Production Approved is;
2. de canonieke CUSTOMMADE AGENCY ClickUp-space is gereconcilieerd;
3. vereiste CLIENTS-lijsten live bestaan;
4. provisioning naar de canonieke targets wijst;
5. relevante Make/Apps Script-capabilities actief en getest zijn;
6. functionele tests zijn geslaagd;
7. red-team test is geslaagd;
8. monitoring/logging actief is;
9. Sophia-production approval is geregistreerd;
10. dit runbook opnieuw is gevalideerd tegen de actuele governance.

Tot dat moment:

> **Gebruik als gecontroleerd pre-production uitvoermodel; niet als bewijs dat alle capabilities live zijn.**

---

## 23. Definition of Done — CM OPS als operating system

CM OPS is operationeel gezond wanneer:

- ieder actief object één duidelijke owner heeft;
- iedere deadline traceerbaar wordt opgevolgd;
- ieder besluit op de juiste source of truth rust;
- rights/deals nooit buiten LEGAL worden beslist;
- financiële waarheid nooit buiten MONEY wordt bepaald;
- documentstructuur niet buiten VAULT-governance wordt gewijzigd;
- automations niet buiten FLOW worden gebouwd;
- prioriteitsconflicten bij CONTROL landen;
- EXTERNE_ENTITEIT en CUSTOMMADE AGENCY gescheiden blijven;
- Waiting-On-items niet verdwijnen maar aging + follow-up hebben;
- externe verplichtingen via de juiste approval lopen;
- reporting evidence-based is;
- de agent veilig stopt wanneer governance, data of techniek niet betrouwbaar genoeg is.

---

## 24. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-07 | v1.0 | Eerste operationele runbookmodel |
| 2026-08-11 | v2.0 | Governance alignment, production-readiness gate, source-of-truth matrix, preflight, handoff contract, idempotency, audit trail, entity separation, exception handling en workflow-QC aangescherpt |
