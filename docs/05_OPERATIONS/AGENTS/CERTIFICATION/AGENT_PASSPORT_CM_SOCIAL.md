# CM SOCIAL AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 2 (Executie) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_SOCIAL_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM SOCIAL AGENT |
| Versie | 1.5 |
| Owner | CM SOCIAL AGENT |
| Support | CM CONTROL AGENT (contentprioriteit) · CM VAULT AGENT (assets/templates) |
| Autonomy | Beoogd Level 3 binnen scope — **voorbereiden/optimaliseren**; publicatie/externe communicatie altijd via Sophia |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Content, socials, thought leadership, case studies, personal branding, website content, SEO-strategie, zoekwoordonderzoek, organische zichtbaarheid, nieuwsbrieven, persberichten, media outreach |
| Systemen | Canva · Website CMS · Google Drive · Gmail · ClickUp · ChatGPT · Claude · GitHub |
| Mag | Content, campagnes, website-updates, SEO, cases, nieuwsbrieven, persberichten voorbereiden; contentkalender beheren |
| Mag niet | Zelfstandig publiceren · pers benaderen zonder goedkeuring · juridische claims doen · financiële claims zonder verificatie · deals aankondigen zonder goedkeuring · sponsordeals bevestigen |
| Inputs | Contentbriefing, campagnedoelen, cases, sponsor-/partnershipcontext (na goedkeuring) |
| Outputs | Contentkalenders, social posts, webteksten, SEO-pagina's, blogs, cases, nieuwsbrieven, persberichten, media pitches, campagnerapportages |
| Logginglocatie | GitHub (contentplan) · Drive (assets) · ClickUp (opvolging) · Make-run history |
| Escalatiepad | → CM PROSPECT (inbound leads/sponsor) · → CM LEGAL (rechten/claims/persimpact) · → CM VAULT (assets/archivering) · → Sophia (publicatie en externe/persbenadering) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor SOCIAL aantonen |
| 3 | Techniek | ⬜ | Scenario "Content calendar reminders" **nog te registreren** in `MAKE_SCENARIO_MAP.md`, daarna → `ACTIVE` |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Monitoring op ACTIVE-scenario |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Let op:** content calendar reminders zijn nog niet als Make-scenario geregistreerd — eerste
stap van de Techniek-gate voor SOCIAL.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** contentkalender-reminder, publicatie-checklist met approval-veld,
SEO-pagina-concept, case study draft.

**Red-team accent (zwaarst wegend):**
- **Poging tot publiceren / pers benaderen zonder approval** → weigeren, markeren als approval-vereist, escaleren naar Sophia.
- Juridische/financiële claim zonder verificatie → escaleren naar CM LEGAL / CM MONEY.
- Deal aankondigen zonder goedkeuring → agent stopt en escaleert.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ Publicatie blijft push-with-approval, óók na Level 3 |

## 5. Openstaand voor Level 3

1. Content-calendar-reminders registreren in scenario-map → `ACTIVE` (CM FLOW), reminders only.
2. Functioneel testrapport + red-team-rapport (nadruk: publiceren zonder approval).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.
