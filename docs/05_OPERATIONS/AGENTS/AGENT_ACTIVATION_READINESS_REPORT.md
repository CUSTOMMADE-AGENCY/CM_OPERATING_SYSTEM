# CM AGENT ACTIVATION READINESS REPORT

> Versie: v1.0 · Status: **RAPPORT — GEEN STATUSWIJZIGING** · Datum: 2026-08-05
> Eigenaar: CM CONTROL AGENT · Beheer: CM VAULT AGENT
> Aanleiding: verzoek accounteigenaar "de agenten activeren"; gekozen scope: readiness-rapport eerst.
>
> **Dit document activeert niets.** Het is besluitvormingsondersteuning: per agent het
> huidige certificeringsniveau, wat ontbreekt voor Level 3 (Production Approved) en wat
> Sophia expliciet moet goedkeuren. Leidend blijven `AGENT_CERTIFICATION_STANDARD.md`,
> `AGENT_LIFECYCLE.md`, `AGENT_READINESS_CHECKLIST.md`, `CM_AGENT_ACTIVATION_STRATEGY.md`
> en `MAKE_SCENARIO_MAP.md`.

---

## 1. Eindoordeel

**Geen enkele agent is nu gereed voor Level 3 (Production Approved).**

De agentlaag is governance- en documentatietechnisch sterk (alle 8 paspoorten zijn
`GOVERNANCE LOCKED` en volgen de 18-sectiestandaard), maar de **technische, test- en
certificeringspoorten zijn nog niet gehaald**. Alle agents staan feitelijk op
**Level 1 — Governance Approved**: beschreven, maar nog niet actief.

De bindende beperking is niet de documentatie maar de **uitvoeringslaag**: de
automatiseringen die de agents "pull-based" laten werken staan grotendeels op `IDEA`,
er zijn nog geen ingevulde agentpaspoorten met certificeringsscore, en er is geen
geregistreerde functionele- of red-team-test. De activatiestrategie zelf staat nog op
`Concept`.

Sophia-approval voor activatie is bevestigd, maar approval is slechts **één** van zeven
production-gates — de overige zes moeten eerst groen.

---

## 2. Certificeringsmodel (referentie)

Bron: `AGENT_CERTIFICATION_STANDARD.md`.

| Level | Naam | Kernregel |
|---|---|---|
| 0 | Concept | Alleen idee/documentatie; geen systeemtoegang. |
| 1 | Governance Approved | Volledig beschreven op papier, nog niets actief. |
| 2 | Test Approved | Alleen testdata, volledige logging. |
| 3 | Production Approved | Productie binnen afgebakende rechten en scope. |
| 4 | Autonomous | Controleren/rapporteren/corrigeren binnen harde guardrails. |

**Level 3 vereist minimaal 90/100 én alle production-gates groen.** Een veiligheid-FAIL,
ontbrekende owner, ontbrekend escalatiepad of ontbrekende logging blokkeert productie —
ongeacht de totaalscore.

---

## 3. Huidige status per agent

Certificeringsniveau afgeleid uit de paspoorten en het ontbreken van ingevulde
agentpaspoorten/scores. "Autonomy Level" in de paspoorten is het *mandaat*, niet het
*certificeringsniveau*.

| Agent | Laag | Build-fase | Huidig cert-niveau | Paspoort ingevuld | Verste automation |
|---|---|---|---|---|---|
| CM FLOW AGENT | Infrastructuur | 1 | Level 1 | Nee | CM VAULT V1 (`BUILD`) |
| CM VAULT AGENT | Infrastructuur | 1 | Level 1 | Nee | CM VAULT V1 (`BUILD`) |
| CM OPS AGENT | Executie | 2 | Level 1 | Nee | Onboarding/approval-triggers (`IDEA`) |
| CM MONEY AGENT | Executie | 2 | Level 1 | Nee | Moneybird open-items (`REVIEW`) |
| CM LEGAL AGENT | Bescherming | 2 | Level 1 | Nee | Nog niet geregistreerd |
| CM SOCIAL AGENT | Executie | 2 | Level 1 | Nee | Nog niet geregistreerd |
| CM PROSPECT AGENT | Executie | 2 | Level 1 | Nee | Nog niet geregistreerd |
| CM CONTROL AGENT | Sturing | 3 | Level 1 | Nee | Weekly digest (`IDEA`) |

Scenariostatussen komen uit `MAKE_SCENARIO_MAP.md`. Geen enkel scenario staat op
`ACTIVE`; CM VAULT V1 (`BUILD`) is het verst, Moneybird open-items (`REVIEW`) volgt.

---

## 4. Production Gate — status op agentlaag-niveau

Bron: `AGENT_CERTIFICATION_STANDARD.md` §9. Geldt voor alle agents tenzij anders vermeld.

| Gate | Eigenaar | Status | Toelichting |
|---|---|---|---|
| Governance | CM CONTROL | ✅ | Scope, owner, approval-gates en verboden acties zijn `GOVERNANCE LOCKED` vastgelegd. |
| Documentatie | CM VAULT | ✅ | Alle 8 paspoorten volgen de 18-sectiestandaard en zijn vindbaar. |
| Techniek | CM FLOW | ❌ | Geen scenario op `ACTIVE`; rechten/logging/rollback niet productie-geverifieerd. |
| Functionele test | Owner-agent + reviewer | ❌ | Geen testregistratie (§7) aanwezig. |
| Red team test | CM CONTROL / reviewer | ❌ | Geen red-team-registratie (§8) aanwezig. |
| Certificeringsscore + paspoort | CM CONTROL | ❌ | Geen agent heeft een ingevuld paspoort of score ≥90/100 (§6, §11). |
| Approval | Sophia | ✅ | Bevestigd voor het activatietraject; blijft per production-status expliciet vereist. |
| Monitoring | Owner-agent + support | ❌ | Monitoringritme is beschreven, maar niet actief (niets draait live). |

**Vier tot vijf van de zeven gates zijn nog rood** (Techniek, Functionele test, Red team,
Certificering, Monitoring). Governance, Documentatie en Approval zijn groen.

---

## 5. Wat ontbreekt per agent voor Level 3

### CM FLOW AGENT (Infrastructuur, fase 1) — *randvoorwaarde voor alle andere agents*
- CM VAULT V1 van `BUILD` → `ACTIVE` afronden (monitoring, alerts, run-history-check).
- Trigger-laag inrichten waarop fase 2 draait; rechten minimaal noodzakelijk + logging aan.
- Ingevuld agentpaspoort, functionele test, red-team-test, score ≥90.

### CM VAULT AGENT (Infrastructuur, fase 1) — *dichtst bij productie*
- CM VAULT V1 productie-activeren en monitoring vastleggen.
- Functionele + red-team-test (verkeerde map, dubbel bestand, Drive offline, poging tot delete).
- Ingevuld agentpaspoort en score. Risicoprofiel laag (leest/ordent/archiveert, verwijdert nooit).

### CM OPS AGENT (Executie, fase 2)
- Scenario's "Artist onboarding trigger", "Approval follow-up reminder" en "Client setup
  folder creation" van `IDEA` → `TEST`/`BUILD`/`ACTIVE`.
- Functionele + red-team-test; ingevuld paspoort en score.
- Afhankelijk van live CM FLOW trigger-laag.

### CM MONEY AGENT (Executie, fase 2)
- "Moneybird open-items check" van `REVIEW` → `TEST` → productie; spec ligt klaar
  (`CM_MONEY_MONEYBIRD_OPEN_ITEMS_SPEC.md`).
- Red-team-test met nadruk op poging tot financiële actie (moet veilig stoppen).
- Ingevuld paspoort en score. Geen datamutatie/betaalacties zonder Sophia.

### CM LEGAL AGENT (Bescherming, fase 2)
- Signalering op contract-/rechtenvervaldata is nog **niet als Make-scenario geregistreerd** —
  eerst opnemen in `MAKE_SCENARIO_MAP.md` (`IDEA` → verder).
- Functionele + red-team-test (ontbrekend contract, poging tot contractwijziging).
- Ingevuld paspoort en score.

### CM SOCIAL AGENT (Executie, fase 2)
- "Content calendar reminders" nog **niet als scenario geregistreerd** — eerst opnemen.
- Red-team-test met nadruk op poging tot externe publicatie (publicatie vereist altijd approval).
- Ingevuld paspoort en score.

### CM PROSPECT AGENT (Executie, fase 2)
- "Pipeline follow-up reminders" nog **niet als scenario geregistreerd** — eerst opnemen.
- Functionele + red-team-test (poging tot externe outreach zonder approval).
- Ingevuld paspoort en score.

### CM CONTROL AGENT (Sturing, fase 3) — *als laatste*
- "Weekly consolidated agent digest" van `IDEA` → productie (aggregeert pas zinvol als
  fase 1 + 2 live zijn).
- GitHub-activation (events/audits/verdicts) staat in `CM_AGENT_ACTIVATION_STRATEGY.md`,
  maar dat document is nog `Concept`.
- Ingevuld paspoort en score; red-team op governance-omzeiling/promptinjectie.

---

## 6. Wat Sophia expliciet moet goedkeuren

Naast de reeds gegeven approval op het traject vereisen de volgende stappen elk een
expliciet Sophia-akkoord (conform de approval-gate in `00_CM_AGENTS_OVERVIEW.md` en de
FLOW-uitsluiting "agents activeren zonder Sophia approval"):

1. **Activatiestrategie `Concept` → goedgekeurd** — `CM_AGENT_ACTIVATION_STRATEGY.md` van
   status Concept naar vastgesteld tillen (dit is een governancewijziging).
2. **Per-agent production-status (Level 3)** — pas nadat de gates groen zijn en het
   agentpaspoort is ingevuld; één akkoord per agent, niet collectief.
3. **Live datamuterende / externe automatiseringen** — elk scenario dat data wijzigt of
   extern communiceert (Gmail-verzending, ClickUp-mutatie, Drive-schrijfacties).
4. **Behoud van de vaste approval-gates ná activatie** — ondertekenen, publiceren,
   externe outreach, financiële verplichtingen, prijsafspraken en governancewijzigingen
   blijven push-with-approval, óók voor een geactiveerde agent.

---

## 7. Aanbevolen activatievolgorde

Volgt de bestaande Build-fases uit `CM_AGENT_ACTIVATION_STRATEGY.md` — infrastructuur eerst,
sturing als laatste:

```text
Fase 1  Infrastructuur   CM FLOW + CM VAULT     (trigger-laag + Drive-waarheid live)
   ↓
Fase 2  Executie         OPS · MONEY · LEGAL · SOCIAL · PROSPECT   (per domein triggers)
   ↓
Fase 3  Sturing          CM CONTROL             (geconsolideerde digest naar Sophia)
```

Per agent geldt binnen zijn fase telkens dezelfde route: scenario naar `TEST` → functionele
test → red-team-test → paspoort invullen + score → Sophia-approval → `ACTIVE` + monitoring.

---

## 8. Voorgestelde volgende stap

Twee routes, afhankelijk van wat je wilt:

- **A — Activatiedossier klaarzetten (governance/documentatie in deze repo):** per agent een
  ingevuld agentpaspoort + productie-activatierecord opstellen, `CM_AGENT_ACTIVATION_STRATEGY.md`
  van Concept naar goedgekeurd, en de ontbrekende scenario's (LEGAL/SOCIAL/PROSPECT) in de
  scenario-map registreren — alles review-ready voor Sophia's per-agent akkoord.
- **B — Live bedrading bouwen (buiten deze repo):** de feitelijke Make-scenario's,
  Apps-Script-triggers en ClickUp/Moneybird-koppelingen. Dit gebeurt op die externe platforms;
  in de repo kan ik alleen de build-specs en scenario-map bijwerken.

Aanbeveling: begin met **A voor CM FLOW en CM VAULT** (fase 1), omdat de hele executielaag
technisch op hun trigger-laag en Drive-waarheid steunt.
