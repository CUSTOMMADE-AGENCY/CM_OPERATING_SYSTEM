# CM MONEY — Moneybird Open-Items Check (Make Scenario Spec)

> Versie: v1.0 · Status: **REVIEW — niet gebouwd/geactiveerd** · Datum: 2026-07-03
> Eigenaar: CM MONEY AGENT · Bouw/beheer: CM FLOW AGENT · Controle: CM CONTROL AGENT
>
> **Build-ready specificatie.** Operationaliseert het register-item "Moneybird open-items
> check" uit `MAKE_SCENARIO_MAP.md` (IDEA → REVIEW). Dit document beschrijft het ontwerp;
> het bouwt of activeert nog niets in het Make-productieaccount. Live bouw gebeurt pas na
> approval en met een goedgekeurde Moneybird-koppeling (zie Deployment).

## 1. Probleem & doel

Openstaande verkoopfacturen worden nu niet systematisch opgevolgd. Dit scenario laat
CM MONEY wekelijks de open posten in Moneybird **signaleren** en per achterstallige factuur
een **follow-up task in ClickUp** aanmaken, plus één overzichtsmail. Dit bedient CM MONEY's
kerntaak *Open posten review* en de KPI's *open posten >30/60 dagen: 0 zonder actie/escalatie*.

CM MONEY **signaleert en rapporteert** — het verstuurt geen betalingsherinneringen aan
klanten, wijzigt geen facturen en start geen incasso (dat vereist Sophia). Moneybird blijft
de financiële waarheid; de automation leest alleen.

## 2. Architectuur (flow)

```
[Schedule: wekelijks ma 09:30 Europe/Amsterdam]
   → Moneybird: lijst open/late verkoopfacturen (read-only)
   → Iterator per factuur
       → Filter: due_date > 14 dagen geleden
       → ClickUp: zoek bestaande task op factuur-ID (dedup)
       → Filter: alleen als task nog niet bestaat
       → ClickUp: maak follow-up task (gemapte velden + factuur-ID)
   → Aggregator: verzamel verwerkte + bestaande posten
   → Gmail: verstuur HTML-overzichtsmail naar info@custommade.agency
   → (Error handler op elke module → foutmail + safe stop)
```

## 3. Trigger

| | |
|---|---|
| Type | Timed (Make Scheduler) |
| Cadans | Wekelijks, maandag **09:30** Europe/Amsterdam |
| Grens | Alleen lezen/aanmaken; geen datamutatie in Moneybird; geen externe klantcommunicatie |

## 4. Modules (Make)

| # | App / actie | Doel |
|---|---|---|
| 1 | **Schedule** | Wekelijkse trigger ma 09:30. |
| 2 | **Moneybird → List sales invoices** (filter `state = open,late`) | Haal openstaande verkoopfacturen op (read-only token). |
| 3 | **Iterator** | Loop per factuur. |
| 4 | **Filter** | Alleen facturen met `due_date` ouder dan 14 dagen. |
| 5 | **ClickUp → Search/Get tasks** (Open Posten-lijst, filter op factuur-ID) | Dedup-controle: bestaat er al een follow-up task? |
| 6 | **Filter** | Alleen doorgaan als er nog géén task bestaat. |
| 7 | **ClickUp → Create task** | Maak follow-up task met gemapte velden + factuur-ID in custom field. |
| 8 | **Aggregator** | Verzamel nieuwe + reeds bestaande open posten per leeftijdscategorie. |
| 9 | **Gmail → Send email** (of Make Email) | HTML-overzicht naar `info@custommade.agency`. |

## 5. Datamapping (Moneybird-factuur → ClickUp-task)

| ClickUp-veld | Bron (Moneybird) |
|---|---|
| Task naam | `Open post — {contact.company_name} — {reference}` |
| Custom field `moneybird_invoice_id` | `invoice.id` (dedup-sleutel) |
| Bedrag | `total_price_incl_tax` |
| Vervaldatum | `due_date` |
| Dagen te laat | `today − due_date` |
| Contact | `contact.company_name` / `contact.firstname lastname` |
| Link | Moneybird factuur-URL |
| Prioriteit | 14–29 dgn = Normal · 30–59 = High · 60+ = Urgent |

## 6. Leeftijdscategorieën & escalatie

| Leeftijd | Actie (binnen scope) |
|---|---|
| 14–29 dagen | Follow-up task in ClickUp (owner CM MONEY). |
| 30–59 dagen | Task met prioriteit High; markeer in overzichtsmail. |
| 60+ dagen | Prioriteit Urgent + **Waiting-On-Sophia-item** (handoff → CONTROL/Sophia). **Geen** automatische herinnering/incasso. |

## 7. Foutafhandeling & retries

- Elke externe module krijgt een **error handler**; bij API-fout: `break` met retry (3×, exponentieel) en daarna doorgaan met de volgende factuur (geen halve run).
- Bij een niet-herstelbare fout (auth, rate limit): **safe stop** + foutmail naar `info@custommade.agency` met module, fout en next action.
- Idempotent: de dedup-controle (stap 5–6) zorgt dat een herhaalde of half-mislukte run geen dubbele tasks maakt.

## 8. Fallback (zonder Make)

Handmatige Moneybird-review van open posten en manuele ClickUp-taak per achterstallige
factuur, conform de CM MONEY-taak *Open posten review*.

## 9. Governance & grenzen

- **Read-only op Moneybird**; nooit facturen wijzigen/verwijderen (passport: NIET TOEGESTAAN).
- **Geen externe klantcommunicatie** vanuit dit scenario; herinneringen/incasso alleen via Sophia.
- Output blijft in ClickUp (uitvoering) en Gmail (interne rapportage); **geen financiële data in GitHub**.
- Handoffs conform passport: 60+ → CONTROL/Sophia; wanbetaling/geschil → LEGAL.

## 10. Beveiliging

- Moneybird-koppeling via een **Make-connection met een read-scoped API-token**; token staat
  uitsluitend in Make, niet in GitHub.
- Minimale dataveld-selectie (stap 5 datamapping); geen volledige factuur-PDF's door de flow.
- Toegang tot de ClickUp Open Posten-lijst beperkt tot CM MONEY/CM OPS.

## 11. Testplan

1. **Testdata:** ≥3 fictieve open facturen in Moneybird (14, 35, 65 dagen te laat).
2. Run handmatig (Make "Run once") → controleer: 3 tasks aangemaakt met juiste prioriteit + factuur-ID.
3. **Dedup-test:** run nogmaals → 0 nieuwe tasks (bestaande herkend).
4. **Leeftijd-test:** 65-dagen-factuur genereert Waiting-On-Sophia-item.
5. **Fouttest:** ongeldige Moneybird-token → safe stop + foutmail, geen tasks.
6. Controleer overzichtsmail: correcte totalen per categorie.
7. Run-history: geen onbedoelde mutaties in Moneybird.

## 12. Deployment (dormant-first)

1. Bouw het scenario in Make met status **INACTIVE**.
2. Koppel de read-scoped Moneybird-connection en de ClickUp Open Posten-lijst.
3. Voer het testplan (sectie 11) uit met testdata → run-history schoon.
4. CM CONTROL toetst trigger, output, fallback, governance en risico.
5. **Activeren pas na expliciete Sophia-approval** (productie-automation).
6. Registreer scenario-owner, monitoring en changelog; zet register-status op ACTIVE.

## 13. Monitoring

- Wekelijkse controle van de Make run-history (CM FLOW).
- Foutmails naar `info@custommade.agency`; herhaalde fouten → CONTROL.
- KPI-koppeling: open posten >30/60 dagen zonder actie/escalatie = 0.

## 14. Bediende KPI's (uit CM MONEY-passport)

- Open posten ouder dan 30 dagen: 0 zonder actie.
- Open posten ouder dan 60 dagen: 0 zonder escalatie.
- Facturen zonder opvolging: 0.

## 15. Verwijzingen

- `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_MONEY_AGENT.md` (passport, leidend)
- `docs/05_OPERATIONS/AUTOMATIONS/MAKE_SCENARIO_MAP.md` (register-item)
- `docs/05_OPERATIONS/AGENTS/AGENT_HANDOFF_MATRIX.md` · `docs/05_OPERATIONS/AGENTS/ESCALATION_PROTOCOLS.md`
- `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/06_FINANCE.md` · `docs/06_FINANCE/FINANCE_INTAKE_SOP.md`

## Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-07-03 | v1.0 | Eerste build-ready spec voor de Moneybird Open-Items Check. Register-status IDEA → REVIEW. Nog niet gebouwd/geactiveerd. |
