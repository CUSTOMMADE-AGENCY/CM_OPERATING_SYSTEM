# **AGENT COMMUNICATION PROTOCOL**

> Versie: v1.0 · Status: CONCEPT / REVIEW_REQUIRED · Datum: 2026-07-03  
> Eigenaar: CM CONTROL AGENT · Beheer: CM VAULT AGENT  
> Scope: alle CM_OS-agents en agentcommunicatie via ChatGPT, Claude, Codex, automations, GitHub, ClickUp, Make, Drive, Gmail en Moneybird  
> Governancepositie: operationele berichtstandaard ondergeschikt aan `CM_AGENT_ARCHITECTURE.md`, `AGENT_RESPONSIBILITY_MATRIX.md`, `AGENT_HANDOFF_MATRIX.md` en `GOVERNANCE_RULES.md`

---

## **1. DOEL**

Dit protocol standaardiseert de berichtvorm tussen alle CM Agents. Het bestaat om requests, responses, statusupdates, escalaties, approvals, reviews, handoffs, errors en notificaties op exact dezelfde manier vast te leggen, ongeacht of de communicatie plaatsvindt via ChatGPT, Claude, Codex, Make, GitHub, ClickUp, Drive, Gmail, Moneybird of toekomstige agent- en automationlagen.

Het protocol operationaliseert bestaande governance. Het introduceert geen nieuwe agents, geen nieuwe verantwoordelijkheden, geen nieuwe bevoegdheden, geen nieuwe ownerships en geen nieuwe approval gates. Het zorgt alleen dat bestaande beslis-, handoff-, audit- en approvalinformatie consistent, machineleesbaar, auditbaar en reproduceerbaar wordt gecommuniceerd.

---

## **2. SCOPE**

Dit protocol geldt voor alle bestaande CM_OS-agents:

| Agent | Primair gebruik binnen dit protocol |
| --- | --- |
| CM CONTROL AGENT | Governance, prioriteit, routing, review, escalatie-inname en approvalbewaking. |
| CM FLOW AGENT | Bouw-, GitHub-, automation-, integratie- en systeemontwikkelcommunicatie. |
| CM OPS AGENT | Operationele uitvoering, ClickUp-statussen, planning en deliverycommunicatie. |
| CM VAULT AGENT | Source-of-truth, documentatie, templates, SOP's, playbooks, Drive- en archiefcommunicatie. |
| CM LEGAL AGENT | Contracten, rechten, compliance, legal review en juridische voorwaarden. |
| CM MONEY AGENT | Moneybird, facturen, ontvangsten, open posten, cashflow en financiële waarheid. |
| CM SOCIAL AGENT | Content, website, SEO, nieuwsbrief, pers en publicatievoorbereiding. |
| CM PROSPECT AGENT | Leads, deals, partnerships, sponsorships, pipeline en commerciële briefings. |

Het protocol is ook geschikt voor toekomstige agents en automations, maar autoriseert die niet zelfstandig. Nieuwe agents, live activering, nieuwe systemen of governancewijzigingen blijven onder de bestaande approval- en architectuurregels vallen.

---

## **3. GOVERNANCEPOSITIE**

1. `AGENT_HANDOFF_MATRIX.md` blijft leidend voor wanneer werk inhoudelijk wordt overgedragen.
2. `AGENT_COMMUNICATION_PROTOCOL.md` bepaalt alleen hoe agents hun berichten structureren.
3. Bij conflict winnen, in deze volgorde:
   1. `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md`
   2. `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`
   3. `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
   4. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. Escalatie-inhoud, escalatieniveaus en routes blijven bepaald door `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`.
5. Dit protocol mag nooit worden gebruikt om een handoff, approval, ownership of uitvoeringsbevoegdheid te forceren die niet al uit bestaande governance volgt.

---

## **4. PRINCIPES**

| Principe | Regel |
| --- | --- |
| Eén eigenaar | Elk bericht noemt exact één Owner Agent die verantwoordelijk is voor de eerstvolgende actie. |
| Eén opdracht | Elk REQUEST, HANDOFF of APPROVAL_REQUEST bevat één afgebakende opdracht of beslissing. |
| Geen vrije interpretatie | Context, verwachte output, risico, approval en deadline worden expliciet gemaakt. |
| Machineleesbaar | Vaste velden, vaste statussen en vaste berichttypes worden consequent gebruikt. |
| Auditbaar | Elk bericht bevat evidence, timestamp, owner, status en herleidbare referenties. |
| Reproduceerbaar | Besluiten, testresultaten, changed files, rollback en dependencies worden zo vastgelegd dat een reviewer de route kan reconstrueren. |
| Governance first | Bij twijfel over scope, owner, risico of approval: niet uitvoeren, maar escaleren. |
| Approval gates expliciet | Approval Required en Approval Owner zijn verplicht, ook wanneer approval niet nodig is. |
| Geen uitvoering zonder owner | Werk start pas wanneer Owner Agent, Target Agent, status en expected output bekend zijn. |
| Source-of-truth respect | GitHub, ClickUp, Drive, Gmail en Moneybird worden gebruikt volgens hun bestaande governancepositie. |

---

## **5. BERICHTTYPES**

| Message Type | Doel |
| --- | --- |
| REQUEST | Een agent vraagt een andere agent om een afgebakende actie, analyse of output. |
| RESPONSE | Antwoord op een REQUEST, HANDOFF, REVIEW of APPROVAL_REQUEST. |
| STATUS | Voortgangsupdate zonder ownershipoverdracht. |
| ESCALATION | Melding dat eigenaar, risico, deadline, governance of approval niet binnen normale uitvoering kan worden opgelost. |
| APPROVAL_REQUEST | Formeel verzoek om expliciete goedkeuring van de bestaande approval owner. |
| APPROVAL_RESPONSE | Formele GO, NO_GO, APPROVED, REJECTED of voorwaardenreactie op een approval request. |
| REVIEW | Verzoek of uitkomst van inhoudelijke, technische, governance-, legal-, finance- of source-of-truth-review. |
| HANDOFF | Formele overdracht van een dossier, taak, document of beslissing volgens `AGENT_HANDOFF_MATRIX.md`. |
| ERROR | Foutmelding met impact, safe stop, rollback en next action. |
| NOTIFICATION | Informatieve melding zonder gevraagde actie of ownershipoverdracht. |

---

## **6. VERPLICHTE VELDEN PER BERICHT**

Alle berichttypes gebruiken minimaal deze velden. Wanneer een veld niet van toepassing is, moet de waarde `N/A` worden gebruikt; het veld mag niet worden weggelaten.

| Veld | Definitie |
| --- | --- |
| Message ID | Unieke ID van dit bericht, bijvoorbeeld `MSG-20260703-FLOW-001`. |
| Request ID | Overkoepelende ID van het verzoek of dossier, bijvoorbeeld `REQ-20260703-ADR-001`. |
| Message Type | Eén van de vaste berichttypes uit sectie 5. |
| Owner Agent | Agent die eigenaar is van de eerstvolgende actie of beslissing. |
| Source Agent | Agent die het bericht verzendt. |
| Target Agent | Agent of owner aan wie het bericht is gericht. |
| Priority | `LOW`, `NORMAL`, `HIGH`, `URGENT` of `CRITICAL`. |
| Status | Eén van de vaste statussen uit sectie 7. |
| Reason | Waarom dit bericht wordt gestuurd. |
| Context | Korte feitelijke context, inclusief governance- of bronverwijzingen. |
| Expected Output | Concrete output, beslissing of reactie die wordt verwacht. |
| Evidence | Links, PR's, ClickUp-taken, Drive-paden, Gmail-threads, Moneybird-referenties, testlogs of documenten. |
| Dependencies | Afhankelijkheden, blockers, systemen, approvals of input van andere agents. |
| Approval Required | `YES` of `NO`. |
| Approval Owner | Sophia, CM CONTROL AGENT, menselijke owner, domeinagent of `N/A`, conform bestaande governance. |
| Risk Level | `LOW`, `MEDIUM`, `HIGH` of `CRITICAL`. |
| Deadline | Datum/tijd of `N/A`. |
| Timestamp | ISO-achtige datum/tijd met timezone, bijvoorbeeld `2026-07-03T12:00:00Z`. |

---

## **7. STATUSMODEL**

| Status | Betekenis |
| --- | --- |
| NEW | Bericht of verzoek is aangemaakt maar nog niet bevestigd. |
| ACKNOWLEDGED | Target Agent heeft ontvangst bevestigd; eigenaar is nog niet noodzakelijk veranderd. |
| IN_PROGRESS | Owner Agent werkt aan de afgesproken output. |
| WAITING | Wacht op input, evidence, deadline of reguliere reactie. |
| BLOCKED | Kan niet verder zonder beslissing, owner, approval of ontbrekende dependency. |
| READY_FOR_REVIEW | Output is klaar voor review. |
| REVIEW_REQUIRED | Review is verplicht voordat uitvoering, merge, publicatie of activatie mag plaatsvinden. |
| APPROVED | Vereiste approval is gegeven binnen bestaande governance. |
| REJECTED | Verzoek of output is afgewezen. |
| DONE | Afgesproken output is afgerond en evidence is vastgelegd. |
| CANCELLED | Verzoek is stopgezet met reden en, waar nodig, rollback of archivering. |

---

## **8. MESSAGE SCHEMAS**

### **8.1 REQUEST**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke bericht-ID. |
| Request ID | Ja | Overkoepelende request-ID. |
| Message Type | Ja | `REQUEST`. |
| Owner Agent | Ja | Agent die de eerstvolgende actie moet bezitten. |
| Source Agent | Ja | Verzendende agent. |
| Target Agent | Ja | Ontvangende agent. |
| Priority | Ja | Prioriteit. |
| Status | Ja | Meestal `NEW`. |
| Reason | Ja | Waarom de request nodig is. |
| Context | Ja | Feiten, scope en relevante governance. |
| Expected Output | Ja | Eén concrete output. |
| Evidence | Ja | Relevante bronlinks of `N/A`. |
| Dependencies | Ja | Benodigde input of `N/A`. |
| Approval Required | Ja | `YES` of `NO`. |
| Approval Owner | Ja | Bestaande approval owner of `N/A`. |
| Risk Level | Ja | Risico-inschatting. |
| Deadline | Ja | Deadline of `N/A`. |
| Timestamp | Ja | Datum/tijd. |

### **8.2 RESPONSE**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Nieuwe unieke bericht-ID. |
| Request ID | Ja | ID van oorspronkelijke request. |
| Message Type | Ja | `RESPONSE`. |
| Owner Agent | Ja | Owner van de volgende actie na response. |
| Source Agent | Ja | Reagerende agent. |
| Target Agent | Ja | Agent die antwoord ontvangt. |
| Priority | Ja | Overgenomen of aangepast met reden. |
| Status | Ja | `ACKNOWLEDGED`, `DONE`, `WAITING`, `BLOCKED` of andere vaste status. |
| Reason | Ja | Antwoordreden. |
| Context | Ja | Antwoord en besliscontext. |
| Expected Output | Ja | Volgende output of `N/A`. |
| Evidence | Ja | Bewijs van output. |
| Dependencies | Ja | Resterende afhankelijkheden. |
| Approval Required | Ja | `YES` of `NO`. |
| Approval Owner | Ja | Bestaande approval owner of `N/A`. |
| Risk Level | Ja | Actueel risico. |
| Deadline | Ja | Nieuwe deadline of `N/A`. |
| Timestamp | Ja | Datum/tijd. |

### **8.3 STATUS**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Lopend verzoek of dossier. |
| Message Type | Ja | `STATUS`. |
| Owner Agent | Ja | Huidige owner. |
| Source Agent | Ja | Statusverzendende agent. |
| Target Agent | Ja | Ontvanger(s). |
| Priority | Ja | Actuele prioriteit. |
| Status | Ja | Actuele vaste status. |
| Reason | Ja | Waarom status wordt gegeven. |
| Context | Ja | Voortgang, blockers, veranderingen. |
| Expected Output | Ja | Volgende stap. |
| Evidence | Ja | ClickUp, GitHub, Drive of andere bron. |
| Dependencies | Ja | Open dependencies. |
| Approval Required | Ja | `YES` of `NO`. |
| Approval Owner | Ja | Owner of `N/A`. |
| Risk Level | Ja | Actueel risico. |
| Deadline | Ja | Deadline. |
| Timestamp | Ja | Datum/tijd. |

### **8.4 ESCALATION**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Dossier-ID. |
| Message Type | Ja | `ESCALATION`. |
| Owner Agent | Ja | CM CONTROL AGENT of toegestane directe owner volgens `ESCALATION_PROTOCOLS.md`. |
| Source Agent | Ja | Escalerende agent. |
| Target Agent | Ja | CM CONTROL AGENT, Sophia of beide conform escalatieregels. |
| Priority | Ja | `NORMAL`, `URGENT` of `CRITICAL`, passend bij escalatieniveau. |
| Status | Ja | Meestal `BLOCKED` of `REVIEW_REQUIRED`. |
| Reason | Ja | Eén zin: wat is het probleem. |
| Context | Ja | WAT, IMPACT, VOORSTEL en NODIG VAN SOPHIA waar van toepassing. |
| Expected Output | Ja | Concrete beslissing of actie. |
| Evidence | Ja | Logs, links, documenten, screenshots of `N/A`. |
| Dependencies | Ja | Wat blokkeert vervolg. |
| Approval Required | Ja | Meestal `YES` bij escalatie met besluitbehoefte. |
| Approval Owner | Ja | Sophia, CM CONTROL AGENT of menselijke owner volgens bestaande regels. |
| Risk Level | Ja | `MEDIUM`, `HIGH` of `CRITICAL`. |
| Deadline | Ja | Escalatietermijn uit `ESCALATION_PROTOCOLS.md`. |
| Timestamp | Ja | Datum/tijd. |

### **8.5 APPROVAL_REQUEST**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Dossier-ID. |
| Message Type | Ja | `APPROVAL_REQUEST`. |
| Owner Agent | Ja | Approval owner of routing-owner. |
| Source Agent | Ja | Aanvragende agent. |
| Target Agent | Ja | Approval owner. |
| Priority | Ja | Urgentie van besluit. |
| Status | Ja | `REVIEW_REQUIRED` of `WAITING`. |
| Reason | Ja | Waarom approval verplicht is. |
| Context | Ja | Besluitopties, scope, governancegrond en risico. |
| Expected Output | Ja | `APPROVED`, `REJECTED`, voorwaarden of GO/NO_GO. |
| Evidence | Ja | PR, contract, concept, testlog, Moneybird-/Drive-/ClickUp-referentie. |
| Dependencies | Ja | Input die nog nodig is. |
| Approval Required | Ja | `YES`. |
| Approval Owner | Ja | Sophia, CM CONTROL AGENT of menselijke owner conform bestaande governance. |
| Risk Level | Ja | Risico. |
| Deadline | Ja | Deadline voor besluit. |
| Timestamp | Ja | Datum/tijd. |

### **8.6 APPROVAL_RESPONSE**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Gekoppeld aan approval request. |
| Message Type | Ja | `APPROVAL_RESPONSE`. |
| Owner Agent | Ja | Agent die na approval/reject de volgende actie bezit. |
| Source Agent | Ja | Approval owner. |
| Target Agent | Ja | Aanvragende agent. |
| Priority | Ja | Actuele prioriteit. |
| Status | Ja | `APPROVED`, `REJECTED`, `WAITING` of `CANCELLED`. |
| Reason | Ja | Beslissing en eventuele voorwaarden. |
| Context | Ja | Scope van de approval; wat wel/niet is goedgekeurd. |
| Expected Output | Ja | Volgende actie of `N/A`. |
| Evidence | Ja | Approvalbewijs. |
| Dependencies | Ja | Voorwaarden of follow-ups. |
| Approval Required | Ja | `NO` na afgeronde approval, tenzij vervolgapproval nodig is. |
| Approval Owner | Ja | Owner van eventuele vervolgapproval of `N/A`. |
| Risk Level | Ja | Rest-risico. |
| Deadline | Ja | Deadline vervolgactie of `N/A`. |
| Timestamp | Ja | Datum/tijd. |

### **8.7 REVIEW**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Reviewdossier. |
| Message Type | Ja | `REVIEW`. |
| Owner Agent | Ja | Review-owner. |
| Source Agent | Ja | Verzendende agent. |
| Target Agent | Ja | Reviewer of ontvanger. |
| Priority | Ja | Reviewprioriteit. |
| Status | Ja | `READY_FOR_REVIEW`, `REVIEW_REQUIRED`, `APPROVED` of `REJECTED`. |
| Reason | Ja | Wat moet worden gereviewd. |
| Context | Ja | Reviewscope en criteria. |
| Expected Output | Ja | Reviewuitkomst, red flags, required changes. |
| Evidence | Ja | PR, changed files, testlogs, documenten. |
| Dependencies | Ja | Open vragen of dependencies. |
| Approval Required | Ja | `YES` of `NO`. |
| Approval Owner | Ja | Owner of `N/A`. |
| Risk Level | Ja | Risico. |
| Deadline | Ja | Reviewdeadline. |
| Timestamp | Ja | Datum/tijd. |

### **8.8 HANDOFF**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Dossier-ID. |
| Message Type | Ja | `HANDOFF`. |
| Owner Agent | Ja | Verzendende agent totdat acceptatie is vastgelegd; daarna ontvangende agent. |
| Source Agent | Ja | Overdragende agent. |
| Target Agent | Ja | Ontvangende agent volgens `AGENT_HANDOFF_MATRIX.md`. |
| Priority | Ja | Handoffprioriteit. |
| Status | Ja | `NEW`, `ACKNOWLEDGED` of `IN_PROGRESS`. |
| Reason | Ja | Handofftrigger uit matrix. |
| Context | Ja | Scope, dossier, risico en governancegrens. |
| Expected Output | Ja | Vereiste output uit matrix. |
| Evidence | Ja | Vereiste documenten en links. |
| Dependencies | Ja | Open dependencies. |
| Approval Required | Ja | Volgens matrix. |
| Approval Owner | Ja | Volgens matrix of `N/A`. |
| Risk Level | Ja | Risico. |
| Deadline | Ja | Deadline of `N/A`. |
| Timestamp | Ja | Datum/tijd. |

### **8.9 ERROR**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Gekoppeld verzoek of incident. |
| Message Type | Ja | `ERROR`. |
| Owner Agent | Ja | Agent die safe stop, herstel of escalatie bezit. |
| Source Agent | Ja | Agent of automation die fout meldt. |
| Target Agent | Ja | Owner, CM CONTROL AGENT of systeemowner. |
| Priority | Ja | Impactgebaseerd. |
| Status | Ja | `BLOCKED`, `WAITING` of `CANCELLED`. |
| Reason | Ja | Error type en korte omschrijving. |
| Context | Ja | Affected system, impact, attempted action, safe stop en rollback needed. |
| Expected Output | Ja | Next action of besluit. |
| Evidence | Ja | Logs, run ID's, screenshots, PR, task, Moneybird-/Drive-/Gmail-referenties. |
| Dependencies | Ja | Herstelafhankelijkheden. |
| Approval Required | Ja | `YES` bij mutatie, rollback met impact of externe gevolgen. |
| Approval Owner | Ja | Bestaande owner. |
| Risk Level | Ja | Actueel risico. |
| Deadline | Ja | Hersteldeadline. |
| Timestamp | Ja | Datum/tijd. |

### **8.10 NOTIFICATION**

| Veld | Verplicht | Waarde / instructie |
| --- | --- | --- |
| Message ID | Ja | Unieke ID. |
| Request ID | Ja | Gerelateerd dossier of `N/A`. |
| Message Type | Ja | `NOTIFICATION`. |
| Owner Agent | Ja | Huidige owner of `N/A` bij puur informatief. |
| Source Agent | Ja | Verzendende agent. |
| Target Agent | Ja | Ontvanger(s). |
| Priority | Ja | Meestal `LOW` of `NORMAL`. |
| Status | Ja | `DONE` of actuele status. |
| Reason | Ja | Waarom de melding relevant is. |
| Context | Ja | Feitelijke update. |
| Expected Output | Ja | `N/A` tenzij kennisname gevraagd is. |
| Evidence | Ja | Bronlinks of `N/A`. |
| Dependencies | Ja | `N/A` of open afhankelijkheden. |
| Approval Required | Ja | Meestal `NO`. |
| Approval Owner | Ja | `N/A` of bestaande owner. |
| Risk Level | Ja | Meestal `LOW`. |
| Deadline | Ja | `N/A` of kennisnamedeadline. |
| Timestamp | Ja | Datum/tijd. |

---

## **9. CONTROL → FLOW VOORBEELD**

Scenario: ADR accepted, execution PR requested, no merge without CONTROL approval.

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-20260703-CONTROL-001` |
| Request ID | `REQ-20260703-ADR-EXEC-001` |
| Message Type | `REQUEST` |
| Owner Agent | CM FLOW AGENT |
| Source Agent | CM CONTROL AGENT |
| Target Agent | CM FLOW AGENT |
| Priority | HIGH |
| Status | NEW |
| Reason | ADR is accepted en moet als execution PR worden uitgewerkt. |
| Context | ADR is door CONTROL geaccepteerd voor uitvoering. FLOW mag bouwen binnen bestaande scope. Geen nieuwe architectuur, agents, verantwoordelijkheden of handoffregels. |
| Expected Output | Execution PR met implementatie, changed files, testresultaten, risico's en rollbackplan. |
| Evidence | GitHub ADR-link: `[ADR-link]`; Decision Log: `[decision-link]`; ClickUp taak: `[task-link]`. |
| Dependencies | CONTROL review vóór merge. Geen merge zonder expliciete CONTROL approval. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT |
| Risk Level | MEDIUM |
| Deadline | `2026-07-04T17:00:00Z` |
| Timestamp | `2026-07-03T09:00:00Z` |

---

## **10. FLOW → CONTROL VOORBEELD**

Scenario: execution PR ready for review, changed files, test results, risks, rollback.

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-20260703-FLOW-001` |
| Request ID | `REQ-20260703-ADR-EXEC-001` |
| Message Type | `REVIEW` |
| Owner Agent | CM CONTROL AGENT |
| Source Agent | CM FLOW AGENT |
| Target Agent | CM CONTROL AGENT |
| Priority | HIGH |
| Status | READY_FOR_REVIEW |
| Reason | Execution PR is klaar voor CONTROL review. |
| Context | FLOW heeft de ADR-uitvoering geïmplementeerd binnen bestaande scope en zonder governancewijziging. |
| Expected Output | CONTROL review: approve, request changes of reject. Merge pas na expliciete CONTROL approval. |
| Evidence | PR: `[pr-link]`; changed files: `[file-1]`, `[file-2]`; tests: `markdownlint PASS`, `link-check PASS`; rollback: revert PR commit of close PR without merge. |
| Dependencies | CONTROL review; eventuele Sophia approval alleen als bestaande governance dit vereist. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT |
| Risk Level | MEDIUM |
| Deadline | `2026-07-04T17:00:00Z` |
| Timestamp | `2026-07-03T11:30:00Z` |

---

## **11. CONTROL → OPS VOORBEELD**

Scenario: operationele uitvoeringsopdracht, ClickUp als uitvoering, Drive als opslag.

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-20260703-CONTROL-OPS-001` |
| Request ID | `REQ-20260703-OPS-001` |
| Message Type | `HANDOFF` |
| Owner Agent | CM CONTROL AGENT totdat OPS accepteert; daarna CM OPS AGENT |
| Source Agent | CM CONTROL AGENT |
| Target Agent | CM OPS AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Besluit en prioriteit vragen operationele uitvoering. |
| Context | CONTROL routeert uitvoering naar OPS conform handoff-governance. ClickUp is uitvoering; Drive is opslag voor bijlagen en werkmateriaal. |
| Expected Output | ClickUp-taken met owner, deadline, status, deliverables en Drive-referenties. |
| Evidence | Besluitnotitie: `[github-or-drive-link]`; ClickUp parent task: `[task-link]`; Drive map: `[drive-link]`. |
| Dependencies | OPS-capaciteit; eventuele externe commitments vereisen bestaande approval gate. |
| Approval Required | NO |
| Approval Owner | N/A |
| Risk Level | LOW |
| Deadline | `2026-07-08T17:00:00Z` |
| Timestamp | `2026-07-03T12:00:00Z` |

---

## **12. FLOW → VAULT VOORBEELD**

Scenario: documentatie-update, source-of-truth check, template of SOP alignment.

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-20260703-FLOW-VAULT-001` |
| Request ID | `REQ-20260703-DOCS-001` |
| Message Type | `REQUEST` |
| Owner Agent | CM VAULT AGENT |
| Source Agent | CM FLOW AGENT |
| Target Agent | CM VAULT AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Bouwoutput vraagt documentatie-update en source-of-truth controle. |
| Context | FLOW heeft technische wijziging voorbereid; VAULT controleert of documentatie, template- of SOP-alignement klopt met GitHub als source of truth en Drive als opslag. |
| Expected Output | Source-of-truth check, template/SOP alignment-notitie en eventuele documentatie-update of REVIEW_REQUIRED-melding. |
| Evidence | PR: `[pr-link]`; technische spec: `[doc-link]`; betrokken SOP/template: `[path-or-link]`. |
| Dependencies | Geen verwijdering, verplaatsing of bronvervanging zonder bestaande approval. |
| Approval Required | NO |
| Approval Owner | N/A |
| Risk Level | LOW |
| Deadline | `2026-07-05T17:00:00Z` |
| Timestamp | `2026-07-03T13:00:00Z` |

---

## **13. APPROVAL GATES**

Dit protocol introduceert geen nieuwe approvalregels. Sophia approval is verplicht wanneer bestaande governance dat verplicht stelt, waaronder minimaal de bestaande categorieën hieronder:

| Categorie | Regel binnen dit protocol |
| --- | --- |
| Externe communicatie | Bericht moet `Approval Required = YES` tonen vóór verzending of publicatie wanneer bestaande governance menselijke/Sophia approval vereist. |
| Contracten | Geen ondertekening, contractwijziging of juridisch bindende toezegging zonder bestaande LEGAL- en Sophia-route. |
| Financiële commitments | Geen betalingsafspraak, prijsafwijking, commitment, credit, korting of cashflowbesluit zonder bestaande finance approval. |
| Governancewijzigingen | Geen wijziging van locked governance, agentdefinities, matrices of architectuur zonder bestaand governanceproces en Sophia approval. |
| Data-mutating automations | Geen live activatie van datamuterende Make-, Apps Script-, ClickUp-, GitHub- of integratieflow zonder testlog, rollbackplan en bestaande CONTROL/Sophia approval. |
| Publicatie | Geen content, website, nieuwsbrief, persbericht of externe output live zonder bestaande menselijke approval. |
| Verwijdering of verplaatsing van bronnen | Geen delete, move, rename, bronvervanging of archiefstructuurwijziging met impact zonder bestaande approval. |

Elke approval-aanvraag moet expliciet vermelden: de owner, de gevraagde beslissing, de evidence, de scope van de approval en wat niet onder de approval valt.

---

## **14. HANDOFF RULES**

Dit protocol vat alleen samen hoe handoffs worden gecommuniceerd. De inhoudelijke handoffregels, triggers, vereiste outputs, vereiste documenten, approvalbehoefte en resultaat blijven bepaald door `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`.

Communicatieregels voor handoffs:

1. Gebruik altijd Message Type `HANDOFF`.
2. Noem de matrix-trigger in `Reason`.
3. Noem vereiste output en documenten in `Expected Output` en `Evidence`.
4. De verzendende agent blijft owner totdat de ontvangende agent de handoff accepteert met status `ACKNOWLEDGED` of `IN_PROGRESS`.
5. Als owner, risico, approval of scope onduidelijk is, wordt geen handoff uitgevoerd maar een `ESCALATION` naar CM CONTROL AGENT gestuurd.

---

## **15. ESCALATION RULES**

Dit protocol vat alleen samen hoe escalaties worden gecommuniceerd. De inhoudelijke escalatieregels, niveaus, routes en reactietijden blijven bepaald door `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`.

Communicatieregels voor escalaties:

1. Gebruik altijd Message Type `ESCALATION`.
2. Gebruik in `Priority` het bijpassende niveau: `NORMAL`, `URGENT` of `CRITICAL`.
3. Neem in `Context` minimaal op: WAT, IMPACT, VOORSTEL en NODIG VAN SOPHIA waar van toepassing.
4. CM CONTROL logt escalaties in ClickUp conform bestaande escalatie-logging.
5. Bij KRITIEK geldt safe stop: afhankelijke uitvoering pauzeert totdat de bevoegde owner of Sophia reageert.

---

## **16. ERROR HANDLING**

Elke fout wordt gemeld met Message Type `ERROR`. Een foutmelding bevat in `Reason` en `Context` minimaal:

| Onderdeel | Verplichte inhoud |
| --- | --- |
| Error type | Bijvoorbeeld automation failure, missing source, permission issue, data conflict, test failure, integration error, broken reference. |
| Affected system | GitHub, ClickUp, Drive, Gmail, Moneybird, Make, Apps Script, website/CMS of ander systeem. |
| Impact | Wat is geraakt, wie is geraakt en wat gebeurt er als niets wordt gedaan. |
| Attempted action | Welke actie of automation werd geprobeerd. |
| Safe stop | Welke uitvoering is gestopt of gepauzeerd om schade te voorkomen. |
| Rollback needed | `YES` of `NO`, inclusief rollbackrichting wanneer bekend. |
| Owner | Agent die herstel, escalatie of safe stop bezit. |
| Next action | Concrete volgende stap, deadline en approvalbehoefte. |

Een ERROR mag geen stille retry of live mutatie starten wanneer dit data, status, routing, financiële informatie, externe communicatie of governance raakt. Dan is eerst bestaande owner-/approvalroute nodig.

---

## **17. EVIDENCE EN LOGGING**

Evidence wordt vastgelegd in het systeem dat binnen bestaande governance de waarheid of opslagfunctie draagt.

| Systeem | Evidence / logging rol |
| --- | --- |
| GitHub | Governance, PR evidence, commits, ADR's, matrices, SOP's, playbooks, agents, changelogs, repository reviews en technische source-of-truth. |
| ClickUp | Uitvoering, operationele taken, statussen, deadlines, routing, blockers, escalatielogs en deliveryplanning. |
| Drive | Opslag, bijlagen, contractkopieën, assets, werkmateriaal, archiefbestanden en operationele documenten. |
| Gmail | Correspondentie, externe communicatiecontext, verzendbewijs, threadhistorie en approvalcontext wanneer via e-mail gegeven. |
| Moneybird | Financiële waarheid voor facturen, bonnen, kwitanties, betalingen, open posten, BTW, cashflow en financiële documenten. |
| Make / Apps Script | Run history, scenario logs, execution traces, error logs en automation test evidence; governance-evidence blijft in GitHub/ClickUp. |

Berichten mogen evidence linken of samenvatten, maar mogen geen vertrouwelijke clientinformatie, getekende contracten of gevoelige financiële details in GitHub dupliceren wanneer bestaande governance dat verbiedt.

---

## **18. EXECUTIVE EXAMPLES**

### **18.1 CONTROL → FLOW: execution PR na accepted ADR**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-001` |
| Request ID | `REQ-EX-001` |
| Message Type | REQUEST |
| Owner Agent | CM FLOW AGENT |
| Source Agent | CM CONTROL AGENT |
| Target Agent | CM FLOW AGENT |
| Priority | HIGH |
| Status | NEW |
| Reason | Accepted ADR vraagt uitvoering in PR. |
| Context | Bouw binnen accepted ADR; geen merge zonder CONTROL approval. |
| Expected Output | Execution PR met tests en rollback. |
| Evidence | ADR-link, Decision Log-link, ClickUp-task. |
| Dependencies | CONTROL review vóór merge. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT |
| Risk Level | MEDIUM |
| Deadline | `2026-07-04T17:00:00Z` |
| Timestamp | `2026-07-03T09:00:00Z` |

### **18.2 FLOW → CONTROL: PR ready for review**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-002` |
| Request ID | `REQ-EX-001` |
| Message Type | REVIEW |
| Owner Agent | CM CONTROL AGENT |
| Source Agent | CM FLOW AGENT |
| Target Agent | CM CONTROL AGENT |
| Priority | HIGH |
| Status | READY_FOR_REVIEW |
| Reason | PR is klaar voor governance- en kwaliteitsreview. |
| Context | Implementatie afgerond binnen scope. |
| Expected Output | Approve, request changes of reject. |
| Evidence | PR-link, changed files, testlog, rollbackplan. |
| Dependencies | CONTROL approval. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT |
| Risk Level | MEDIUM |
| Deadline | `2026-07-04T17:00:00Z` |
| Timestamp | `2026-07-03T11:00:00Z` |

### **18.3 CONTROL → OPS: uitvoeringsopdracht**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-003` |
| Request ID | `REQ-EX-003` |
| Message Type | HANDOFF |
| Owner Agent | CM CONTROL AGENT totdat OPS accepteert; daarna CM OPS AGENT |
| Source Agent | CM CONTROL AGENT |
| Target Agent | CM OPS AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Governancebesluit vraagt operationele uitvoering. |
| Context | Uitvoering hoort in ClickUp; bijlagen in Drive. |
| Expected Output | ClickUp-plan met owners, deadlines en deliverables. |
| Evidence | Besluitnotitie, ClickUp-task, Drive-map. |
| Dependencies | OPS-capaciteit. |
| Approval Required | NO |
| Approval Owner | N/A |
| Risk Level | LOW |
| Deadline | `2026-07-08T17:00:00Z` |
| Timestamp | `2026-07-03T12:00:00Z` |

### **18.4 OPS → MONEY: factuurmoment**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-004` |
| Request ID | `REQ-EX-004` |
| Message Type | HANDOFF |
| Owner Agent | CM OPS AGENT totdat MONEY accepteert; daarna CM MONEY AGENT |
| Source Agent | CM OPS AGENT |
| Target Agent | CM MONEY AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Deliverable milestone veroorzaakt factuurmoment. |
| Context | Moneybird is financiële waarheid; OPS levert delivery- en contractreferentie. |
| Expected Output | Factuurcheck, Moneybird-status en open-postenbewaking. |
| Evidence | Contractreferentie, deliverystatus, projectcode, ClickUp-task. |
| Dependencies | Bedrag en BTW-context moeten compleet zijn. |
| Approval Required | YES |
| Approval Owner | Sophia of menselijke finance owner bij afwijking/commitment; anders conform bestaande Moneybird-route. |
| Risk Level | MEDIUM |
| Deadline | `2026-07-05T12:00:00Z` |
| Timestamp | `2026-07-03T12:30:00Z` |

### **18.5 OPS → SOCIAL: contentbriefing**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-005` |
| Request ID | `REQ-EX-005` |
| Message Type | HANDOFF |
| Owner Agent | CM OPS AGENT totdat SOCIAL accepteert; daarna CM SOCIAL AGENT |
| Source Agent | CM OPS AGENT |
| Target Agent | CM SOCIAL AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Projectmoment vraagt contentproductie. |
| Context | Conceptcontent mag niet publiceren zonder bestaande menselijke approval. |
| Expected Output | Contentconcept met kanaal, copy, assets, CTA en reviewroute. |
| Evidence | Projectbrief, assets, rechtenstatus, planning. |
| Dependencies | Legal review bij claims, rechten of reputatierisico. |
| Approval Required | YES |
| Approval Owner | Menselijke owner vóór publicatie; CM LEGAL AGENT bij juridische impact. |
| Risk Level | MEDIUM |
| Deadline | `2026-07-06T17:00:00Z` |
| Timestamp | `2026-07-03T13:00:00Z` |

### **18.6 PROSPECT → LEGAL: dealbriefing**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-006` |
| Request ID | `REQ-EX-006` |
| Message Type | HANDOFF |
| Owner Agent | CM PROSPECT AGENT totdat LEGAL accepteert; daarna CM LEGAL AGENT |
| Source Agent | CM PROSPECT AGENT |
| Target Agent | CM LEGAL AGENT |
| Priority | HIGH |
| Status | NEW |
| Reason | Opportunity is concreet genoeg voor NDA, term sheet of contractreview. |
| Context | PROSPECT vraagt juridische beoordeling zonder commerciële commitment te doen. |
| Expected Output | Legal review met red flags, voorwaarden en go/no-go-advies. |
| Evidence | Dealbriefing, conceptterms, correspondentie, rechteninformatie. |
| Dependencies | Compleet partij- en rechtenoverzicht. |
| Approval Required | YES |
| Approval Owner | Sophia bij juridische interpretatie, onderhandeling, externe commitment of afwijkende voorwaarden. |
| Risk Level | HIGH |
| Deadline | `2026-07-05T17:00:00Z` |
| Timestamp | `2026-07-03T13:30:00Z` |

### **18.7 LEGAL → OPS: approved contractvoorwaarden naar uitvoering**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-007` |
| Request ID | `REQ-EX-007` |
| Message Type | HANDOFF |
| Owner Agent | CM LEGAL AGENT totdat OPS accepteert; daarna CM OPS AGENT |
| Source Agent | CM LEGAL AGENT |
| Target Agent | CM OPS AGENT |
| Priority | NORMAL |
| Status | NEW |
| Reason | Juridische voorwaarden zijn voldoende beoordeeld voor uitvoering. |
| Context | OPS voert alleen uit binnen goedgekeurde scope, deliverables, beperkingen en deadlines. |
| Expected Output | Projectplan, ClickUp-taken en deliverybewaking. |
| Evidence | Contract/NDA, legal review, deliverablelijst, approvalnotitie. |
| Dependencies | Geen afwijking van contractvoorwaarden zonder nieuwe approval. |
| Approval Required | YES |
| Approval Owner | Sophia bij ondertekening, externe verplichting, clientcommitment of juridisch risico. |
| Risk Level | MEDIUM |
| Deadline | `2026-07-08T17:00:00Z` |
| Timestamp | `2026-07-03T14:00:00Z` |

### **18.8 MONEY → CONTROL: cashflowrisico**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-008` |
| Request ID | `REQ-EX-008` |
| Message Type | ESCALATION |
| Owner Agent | CM CONTROL AGENT |
| Source Agent | CM MONEY AGENT |
| Target Agent | CM CONTROL AGENT |
| Priority | URGENT |
| Status | BLOCKED |
| Reason | Cashflowrisico vraagt prioriteits- of besluitrouting. |
| Context | WAT: verwacht tekort of betalingsrisico. IMPACT: operationele of financiële verplichtingen kunnen geraakt worden. VOORSTEL: prioriteitsbesluit en Sophia-route voorbereiden. NODIG VAN SOPHIA: beslissing bij financiële commitment. |
| Expected Output | CONTROL bepaalt route, prioriteit en eventuele Sophia escalation. |
| Evidence | Moneybird-overzicht, forecast, open posten, ClickUp-impact. |
| Dependencies | Actuele bank-/Moneybirdstatus en forecastinput. |
| Approval Required | YES |
| Approval Owner | Sophia bij cashflowbeslissingen of financiële verplichting. |
| Risk Level | HIGH |
| Deadline | `2026-07-04T12:00:00Z` |
| Timestamp | `2026-07-03T14:30:00Z` |

### **18.9 VAULT → CONTROL: source-of-truth conflict**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-009` |
| Request ID | `REQ-EX-009` |
| Message Type | ESCALATION |
| Owner Agent | CM CONTROL AGENT |
| Source Agent | CM VAULT AGENT |
| Target Agent | CM CONTROL AGENT |
| Priority | CRITICAL |
| Status | BLOCKED |
| Reason | Meerdere bronnen claimen dezelfde waarheid. |
| Context | WAT: source-of-truth conflict tussen GitHub/Drive-documenten. IMPACT: uitvoering kan verkeerde bron gebruiken. VOORSTEL: freeze wijzigingen, CONTROL beslist leidende bron en eventuele Sophia-route. NODIG VAN SOPHIA: approval bij bronvervanging of governance-impact. |
| Expected Output | Besluit over leidende bron, herstelroute en communicatie naar betrokken agents. |
| Evidence | Conflicterende documentlinks, changelog, impactanalyse. |
| Dependencies | Geen bronverplaatsing of verwijdering tot besluit. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT; Sophia bij governance-impact of bronvervanging. |
| Risk Level | CRITICAL |
| Deadline | `2026-07-03T16:30:00Z` |
| Timestamp | `2026-07-03T14:45:00Z` |

### **18.10 FLOW → CONTROL: automation risk / test failed**

| Veld | Waarde |
| --- | --- |
| Message ID | `MSG-EX-010` |
| Request ID | `REQ-EX-010` |
| Message Type | ERROR |
| Owner Agent | CM CONTROL AGENT |
| Source Agent | CM FLOW AGENT |
| Target Agent | CM CONTROL AGENT |
| Priority | URGENT |
| Status | BLOCKED |
| Reason | Automation test failed before live activation. |
| Context | Error type: test failure. Affected system: Make/ClickUp/Drive. Impact: datamutatie of routing kan fout lopen. Attempted action: test run. Safe stop: activation paused. Rollback needed: NO because not live; YES if test data must be cleaned via approved route. |
| Expected Output | CONTROL besluit of FLOW mag herstellen, opnieuw testen of escalation nodig is. |
| Evidence | Make run ID, testlog, scenario spec, rollbackplan. |
| Dependencies | Geen live activation zonder testlog, rollbackplan en bestaande approval. |
| Approval Required | YES |
| Approval Owner | CM CONTROL AGENT; Sophia bij datamuterende live activation of governance-impact. |
| Risk Level | HIGH |
| Deadline | `2026-07-04T12:00:00Z` |
| Timestamp | `2026-07-03T15:00:00Z` |

---

## **19. REVIEWRITME**

Dit protocol wordt gereviewd wanneer een van de volgende situaties optreedt:

1. `CM_AGENT_ARCHITECTURE.md`, `AGENT_RESPONSIBILITY_MATRIX.md` of `AGENT_HANDOFF_MATRIX.md` wijzigt.
2. Een repository review version drift, missing owner, duplicate source-of-truth of agentcommunicatieconflict signaleert.
3. Een nieuwe automationlaag of toekomstig agentkanaal wordt voorbereid, zonder dat dit protocol daarmee nieuwe bevoegdheden krijgt.
4. CM CONTROL AGENT vraagt review aan vanwege audit-, governance- of escalatiebevindingen.

Elke wijziging aan dit protocol moet via GitHub PR verlopen en mag bestaande governance niet herschrijven.
