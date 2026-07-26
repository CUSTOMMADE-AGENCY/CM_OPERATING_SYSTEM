# CM_OS — AGENT OVERVIEW

> Versie: v1.4 · Status: **GOVERNANCE LOCKED** · Datum: 2026-06-21  
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`  
> Bron: officiële agent-specificatie CM_OS. Dit bestand is leidend voor de onderlinge structuur; per-agent specs staan in `docs/05_OPERATIONS/AGENTS/ACTIVE/`.

---

## GOVERNANCE-REFERENTIES

- Autonomy levels en Sophia approval gates staan in `AI_AUTONOMY_LEVELS.md`.
- De taakgerichte autonomy-toepassing staat in `AI_TASK_AUTONOMY_MATRIX.md`.
- Escalatielevels, escalatieroutes en verplichte escalatie-output staan in `ESCALATION_PROTOCOLS.md`.
- Agentcertificering, productiepoorten en agentpaspoorten staan in `AGENT_CERTIFICATION_STANDARD.md`.
- De volledige agentlevenscyclus van idee tot uitfasering staat in `AGENT_LIFECYCLE.md`.
- De operationele berichtstandaard voor requests, reviews, handoffs, approvals, errors en evidence staat in `AGENT_COMMUNICATION_PROTOCOL.md`; dit protocol vervangt de handoff-matrix niet.

## AGENTS — OVERZICHT

| Agent | Kernvraag | Laag | Eigenaar van | Belangrijkste output |
|---|---|---|---|---|
| CM CONTROL AGENT | Moeten we dit doen? | Sturing | Prioriteiten, escalaties, governance, besluitvorming | Weekly Control Report |
| CM OPS AGENT | Hoe voeren we dit uit? | Executie | Projecten, releases, management, client delivery | Projectplan, roadmap, statusupdate |
| CM PROSPECT AGENT | Hoe krijgen we nieuwe business? | Executie | Sponsorships, partnerships, brand deals, nieuwe zakelijke klanten | Prospect Brief, Sponsor Brief, Opportunity Report |
| CM SOCIAL AGENT | Hoe maken we dit zichtbaar? | Executie | Social media, website, SEO, nieuwsbrief, cases, blogs, persbericht, media outreach | Contentkalender, publicatievoorstel, media pitch |
| CM MONEY AGENT | Wat is de financiële waarheid? | Executie | Moneybird, facturen, inkomend, bank, BTW, open posten, cashflow, revenue tracking, forecasting | Open Posten Rapport, BTW Gereedheid Rapport, Cashflow Rapport |
| CM LEGAL AGENT | Is dit juridisch correct? | Bescherming | Contracten, rechten, deals, compliance, disputes | Contract Review, Red Flag Report, Rights Audit |
| CM VAULT AGENT | Waar staat de waarheid? | Infrastructuur | Drive, templates, SOP’s, prompts, playbooks, knowledge base, governance, archief | Source-of-Truth Report, Template Check, Archive Proposal |
| CM FLOW AGENT | Hoe automatiseren we dit? | Infrastructuur | Make, API’s, webhooks, ClickUp automations, GitHub workflows, integraties | Automation Spec, Flow Health Report |

---

## VERPLICHTE GOEDKEURING SOPHIA — APPROVAL GATE

De onderstaande acties vereisen **expliciete goedkeuring van Sophia** vóór uitvoering:

- Ondertekenen van overeenkomsten
- Publicatie van content
- Verzenden van externe outreach of voorstellen
- Nieuwe financiële verplichtingen
- Nieuwe partnerships
- Prijsafspraken of commerciële toezeggingen
- Wijzigingen in governance
- Wijzigingen in agent-definities
- Wijzigingen in mapstructuur
- Verwijderen van documenten
- Verwijderen van templates
- Verwijderen van kennisbankcontent

Bij twijfel: escaleren naar **CM CONTROL AGENT** volgens `ESCALATION_PROTOCOLS.md`. CM CONTROL bewaakt de gate, maar kan deze niet zelfstandig opheffen. Autonomy-grenzen staan in `AI_AUTONOMY_LEVELS.md`; taaktoepassing staat in `AI_TASK_AUTONOMY_MATRIX.md`.

---

## HIËRARCHIE

```text
CM CONTROL AGENT
│
├── CM OPS AGENT
├── CM PROSPECT AGENT
├── CM LEGAL AGENT
├── CM SOCIAL AGENT
├── CM MONEY AGENT
├── CM VAULT AGENT
└── CM FLOW AGENT
```

---

## KERN-HANDOFFS

```text
LEAD
 └─> CM PROSPECT AGENT
       └─> CM LEGAL AGENT
             └─> CM OPS AGENT
                   ├─> CM SOCIAL AGENT
                   ├─> CM MONEY AGENT
                   └─> CM PROSPECT AGENT

ALLE DOCUMENTEN       ──> CM VAULT AGENT
ALLE AUTOMATISERINGEN ──> CM FLOW AGENT
ESCALATIES            ──> CM CONTROL AGENT
```

---

## GOVERNANCE-PRINCIPES

- Eén taak heeft één eigenaar.
- GitHub = source of truth.
- Drive = opslag.
- ClickUp = executie.
- Moneybird = financiële waarheid.
- Gmail = correspondentie en bewijs.
- ChatGPT/Claude = analyse en productie, geen officiële opslag.
- Deals vallen onder **CM LEGAL AGENT**.
- Moneybird valt onder **CM MONEY AGENT**.
- 04_DEALS en 07_LEGAL blijven aparte Drive-mappen, maar vallen beide onder **CM LEGAL AGENT**.
- 06_FINANCE valt onder **CM MONEY AGENT**.
