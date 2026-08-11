# CM_OS — Agent Execution & Control: 3 Opties

> Versie: v1.0 · Status: **BESLISDOCUMENT (pre-production)** · Datum: 2026-08-11
> Beantwoordt per agent: **hoe voert hij uit · waarmee is hij geconnect · welke tools · welke
> handelingen · waar vind je zijn werk terug · hoe controleer je alles.**

## Jouw kaders (uit de intake)

- **Uitvoeringsmodel:** ik adviseer **per agent** het beste model.
- **Tools:** huidige stack (ClickUp · Make · Drive · Gmail · Moneybird · GitHub · Canva · LinkedIn),
  **plus enkele nieuwe tools als die duidelijk beter zijn**.
- **Autonomie:** **per agent verschillend**.
- **Controlepunt:** een **Google Sheet** als dat slim is.

### Is een Google Sheet slim als controlepunt? — Ja, als "Control Tower"

Niet als plek waar het werk gebeurt (dat blijft ClickUp/Drive/Moneybird), maar als **read-only
overzichtsblad** dat automatisch wordt gevoed (Apps Script/Make) met per agent: status, open items,
Waiting-On, KPI's en escalaties. Eén tabblad per agent + een cockpit-tab. Goedkoop, vertrouwd,
Google-native. Best-in-class zou een echt dashboard/database zijn (zie Optie 1), maar de Sheet is voor
jullie schaal ruim voldoende en het snelst live.

---

## De drie uitvoeringsmodellen (bouwstenen)

| Model | Wat het is | Sterk voor |
|---|---|---|
| **A. Automatisering** | No-code flows (Make) + Apps Script die op schedule/trigger draaien; AI alleen voor tekst/analyse. | Deterministisch, connectief, terugkerend werk (audits, open-posten-checks, folder-provisioning). |
| **B. AI-assistent** | Een custom GPT / Claude Project per agent dat jij (of een flow) prompt met de agent-instructie (paspoort + runbook). Mens of flow in de loop. | Redeneren, opstellen, reviewen (proposals, contract-review, content, Go/No-Go). |
| **C. Autonome AI-agent** | Een agent-runtime die zelf op schedule draait, redeneert én via gekoppelde tools handelt binnen scope, met gates. | Echt zelfstandig werk end-to-end; hoogste "slimheid", meeste inrichting/observability nodig. |

De drie opties hieronder combineren deze bouwstenen anders.

---

## Optie 1 — De beste die bestaat (best-in-class)

- **Uitvoering:** elke agent als **autonome AI-agent** (model C) op een agent-orchestratieplatform,
  met een centrale orchestrator (CM CONTROL). LLM = Claude/GPT; tool-toegang via **MCP-connectors**.
- **Connecties/tools:** MCP/API-koppelingen naar Drive, Gmail, ClickUp, Moneybird, GitHub, Canva +
  een **vector-/state-geheugen** (agent-memory) en een **observability-/audit-database**.
  Voorbeeld-categorieën: agent-framework (Claude Agent SDK / LangGraph / n8n-AI / Relevance AI / Lindy),
  workflow-engine, secrets-manager, monitoring.
- **Handelingen:** volledige workflows end-to-end binnen scope; approval-gates via de orchestrator.
- **Waar werk landt:** systemen van record blijven (ClickUp/Drive/Moneybird) + een **audit-DB** met
  volledige trace per actie.
- **Controle:** een echt **dashboard** (live status, logs, kosten, incidenten) + alerting.
- **Autonomie:** hoog, per agent instelbaar met harde guardrails.
- **Kosten/complexiteit:** **hoog**; nieuwe platforms, dev- en onderhoudscapaciteit (CM FLOW + developer).
- **Voordeel/nadeel:** maximaal krachtig en schaalbaar · maar overgedimensioneerd voor de huidige
  schaal en het duurst/complexst om te bouwen en te beheren.

## Optie 2 — De beste met je huidige systemen

- **Uitvoering:** hybride **A + B**. De "handen" = **Make-scenario's + Apps Script** (schedule/trigger,
  systeemkoppeling). Het "brein" = **een custom GPT / Claude Project per agent** (paspoort + runbook als
  instructie), aangeroepen waar redeneren nodig is (Make heeft AI-modules; of jij prompt de agent).
- **Connecties/tools:** alles binnen de huidige stack — ClickUp, Drive, Gmail, Moneybird, GitHub,
  Canva, LinkedIn — gekoppeld via Make/Apps Script. Geen nieuwe platforms.
- **Handelingen:** deterministische acties via Make/Apps Script (folders, taken, checks, mails-als-concept);
  AI levert concepten/reviews; alles wat muteert/extern is via gate.
- **Waar werk landt:** ClickUp (uitvoering) + Drive (deliverables) + Moneybird (finance) + GitHub
  (governance) + **Google Sheet "Agent Control Tower"** als roll-up.
- **Controle:** de **Control Tower Sheet** (Apps Script/Make-gevoed) + **wekelijkse CM CONTROL digest-mail**.
- **Autonomie:** per agent instelbaar, maar in de praktijk lager/"gescript" (minder vrij redeneren).
- **Kosten/complexiteit:** **laag**; je bouwt op wat er is, zelf te beheren.
- **Voordeel/nadeel:** snelst live, goedkoop, past op jullie realiteit · maar minder "slim/flexibel"
  en het AI-brein zit los van de flows (meer handmatige glue, beperkter agent-geheugen).

## Optie 3 — Combinatie van 1 & 2  *(aanbevolen)*

- **Kernidee:** huidige stack blijft het **systeem van record + connectielaag** (Make/Apps Script,
  ClickUp, Drive, Moneybird, GitHub, Control Tower Sheet). Voeg **één best-in-class stuk** toe waar het
  echt loont: een **AI-agent-laag** (Claude Projects/GPTs, of één lichte agent-orchestrator) die via
  **MCP/API** op de stack is aangesloten — voor de agents die echt moeten redeneren.
- **Per agent het juiste model** (zie tabel hieronder): automatisering waar het deterministisch is,
  AI-assistent/agent waar het redeneert.
- **Connecties/tools:** huidige stack + **max 1–2 nieuwe tools** ("enkele nieuwe tools als duidelijk
  beter"): een AI-agent-runtime en optioneel een lichte monitoring-laag. Rest blijft zoals het is.
- **Waar werk landt:** ongewijzigd (ClickUp/Drive/Moneybird/GitHub) + Control Tower Sheet.
- **Controle:** Control Tower Sheet + wekelijkse CM CONTROL digest; later uitbreidbaar naar een echt
  dashboard (Optie 1) zonder herbouw.
- **Autonomie:** per agent (tabel).
- **Kosten/complexiteit:** **middel**; grotendeels bestaande stack, gerichte investering.
- **Voordeel/nadeel:** de balans — snel live én slim waar het telt, groeipad naar Optie 1 · vraagt
  wel discipline in de gate-inrichting.

---

## Per-agent advies (Optie 3 uitgewerkt)

| Agent | Model (advies) | Autonomie | Kerntools / connect | Waar werk landt | Control Tower-feed |
|---|---|---|---|---|---|
| **CM VAULT** | A — automatisering | **Hoog** (leest/ordent, verwijdert nooit) | Apps Script · Drive · GitHub · Make | GitHub (registers) · Drive | Drive-readiness, duplicates |
| **CM FLOW** | A + B — bouwer + AI voor code | Bouwen autonoom; **activeren = gate** | Make · Apps Script · GitHub · ClickUp | GitHub · scenario-register | Flow health, incidenten |
| **CM OPS** | A + B — flow + AI-assist | **Zelfstandig binnen ClickUp-scope**; extern = gate | ClickUp · Drive · Gmail · Calendar · Make | ClickUp `CLIENTS` · Drive | Deadlines, deliverables, Waiting-On |
| **CM MONEY** | A + B — Moneybird-flow + AI read-only | **Signaleren autonoom; elke actie gated** | Moneybird · Make · ClickUp · Sheets | Moneybird · ClickUp `OPERATIONS` | Open posten, cashflow, BTW |
| **CM LEGAL** | B — AI-assistent, strakke gates | Review/advies autonoom; **tekenen = Sophia** | Claude/GPT · Drive · Gmail · ClickUp · Sheets | Drive `07_LEGAL/04_DEALS` · ClickUp `DEAL DESK` | Obligations, vervaldata, red flags |
| **CM PROSPECT** | B — AI-assist drafting | Prep autonoom; **outreach/voorstel = Sophia** | Claude/GPT · ClickUp · Gmail · LinkedIn · Canva | ClickUp `PIPELINE` | Pipeline-stages, follow-ups |
| **CM SOCIAL** | B — AI-assist drafting | Prep autonoom; **publicatie = Sophia** | Claude/GPT · Canva · CMS · Drive · ClickUp | ClickUp `MARKETING` · Drive `09_CONTENT` | Content calendar, publicatiestatus |
| **CM CONTROL** | B + orchestratie | Intern L3; **mergt/activeert nooit**, GO = Sophia | GitHub · ClickUp · Sheets · Gmail | GitHub (verdicts/Decision Log) · ClickUp `OPERATIONS` | Cockpit-tab: alle agents + escalaties |

**Lezen:** *A = automatisering (Make/Apps Script), B = AI-assistent/agent (Claude/GPT), gate = verplichte
approval (meestal Sophia).* De autonomie volgt exact de guardrails uit de runbooks.

---

## Hoe je alles controleert (alle opties)

1. **Control Tower Sheet** — één Google Sheet: per agent een tab (status, open items, Waiting-On, KPI's)
   + een **cockpit-tab** (rode vlaggen, escalaties, gate-wachtrij). Automatisch gevoed.
2. **CM CONTROL wekelijkse digest** — één mail naar `info@custommade.agency` met de highlights + wat op
   Sophia wacht.
3. **Audit trail** — elke materiële actie traceerbaar in het systeem van record (ClickUp/GitHub/Moneybird)
   conform de runbook-logspecificaties.
4. **Gate-wachtrij** — alles wat op approval wacht staat op één plek (Sheet-tab + ClickUp
   `Sophia approval needed`), zodat niets extern/bindend gebeurt zonder jouw akkoord.

---

## Aanbeveling & vervolg

**Aanbeveling: Optie 3.** Je houdt je huidige stack als fundament, voegt gericht AI-slimheid toe waar het
loont, en krijgt met de Control Tower Sheet + digest direct grip — met een groeipad naar Optie 1 zonder
herbouw. Start met de laagste-risico-agents (VAULT, FLOW) als proefopstelling, dan de executie-agents.

**Nodig van jou:** kies de optie (1 / 2 / 3). Bij Optie 3 daarna: (a) akkoord op de AI-agent-laag-keuze
(Claude Projects/GPTs of één orchestrator) en (b) go voor de Control Tower Sheet-opzet.
