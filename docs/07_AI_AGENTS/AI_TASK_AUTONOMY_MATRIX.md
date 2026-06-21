# AI Task Autonomy Matrix

> Versie: v1.4 · Status: **GOVERNANCE LOCKED** · Datum: 2026-06-21  
> Bron: operationele vertaling van `AI_AUTONOMY_LEVELS.md` en `ESCALATION_PROTOCOLS.md`.

## Doel

Deze matrix vertaalt de CM_OS autonomy levels naar concrete taaktypen. Het document helpt agents bepalen of een taak zelfstandig mag worden gesignaleerd, voorbereid of intern uitgevoerd, en wanneer escalatie of Sophia approval verplicht is.

Deze matrix is ondergeschikt aan:

1. `AI_AUTONOMY_LEVELS.md` voor de definitie van autonomy levels en harde verboden;
2. `ESCALATION_PROTOCOLS.md` voor escalatieroutes, escalatielevels en verplichte escalatie-output;
3. expliciete Sophia approval wanneer een taak externe, juridische, financiële, reputatie-, governance-, contractuele of verwijderingsimpact heeft.

---

## Leeswijzer

| Waarde | Betekenis |
| --- | --- |
| Signaleren | De agent mag observeren, samenvatten, risico's benoemen en een vervolgstap voorstellen. |
| Voorbereiden | De agent mag een intern concept, analyse, briefing, checklist of beslisnotitie maken. |
| Intern uitvoeren | De agent mag een goedgekeurde interne actie uitvoeren zonder externe of bindende impact. |
| Escaleren | De agent moet volgens `ESCALATION_PROTOCOLS.md` escaleren voordat de taak verdergaat. |
| Sophia approval | Expliciete Sophia approval is vereist vóór uitvoering, verzending, publicatie, commitment, wijziging of verwijdering. |

Bij twijfel geldt altijd de laagste veilige bevoegdheid: signaleren en escaleren.

---

## Matrix per taaktype

| Taaktype | Voorbeelden | Maximaal zonder approval | Verplichte escalatie / approval |
| --- | --- | --- | --- |
| Informatie verzamelen | Bronnen lezen, status opvragen, bestaande context ordenen. | Signaleren | Escaleer bij ontbrekende eigenaar, privacygevoelige data, bronconflict of deadline-impact. |
| Samenvatten en analyseren | Dossier samenvatten, risico's markeren, opties vergelijken. | Voorbereiden | Escaleer wanneer de analyse leidt tot juridisch, financieel, commercieel of extern advies met impact. |
| Interne planning | Taken structureren, interne deadlines voorstellen, ClickUp-concept voorbereiden. | Intern uitvoeren na bestaande scope | Escaleer bij scopewijziging, resourceconflict, client-impact of deliveryrisico. |
| Handoff voorbereiden | Context, risico, aanbevolen actie, deadline en eigenaar formuleren. | Voorbereiden | Escaleer bij onduidelijke eigenaar, conflicterende domeinen of urgent/kritiek risico. |
| Externe communicatie | Outreach, proposal, clientmail, media pitch, nieuwsbrief, persbericht. | Voorbereiden | Sophia approval vóór verzending of publicatie; CM CONTROL bij routing- of reputatierisico. |
| Contentproductie | Social post, case, blog, websitecopy, SEO-tekst, nieuwsbriefconcept. | Voorbereiden | Sophia approval vóór publicatie; CM LEGAL bij claims, rechten, privacy of reputatierisico. |
| Commerciële voorstellen | Prijsindicatie, scope, partnershipvoorstel, renewal, upsell. | Voorbereiden | Sophia approval vóór commerciële toezegging; CM MONEY bij prijs/forecast-impact; CM LEGAL bij voorwaarden. |
| Contracten en juridische documenten | NDA, term sheet, overeenkomst, rechtencheck, licensing/sync. | Voorbereiden | Sophia approval vóór juridisch standpunt, wijziging, ondertekening of commitment; CM LEGAL is owner. |
| Financiële administratie | Open posten rapport, BTW-check, cashflowoverzicht, revenue tracking. | Voorbereiden | Sophia approval bij betaling, betalingsregeling, credit, factuurwijziging met impact of financiële verplichting. |
| Moneybird-mutaties | Factuurdata, betaalstatus, bedragen, contactgegevens, credits. | Signaleren / voorbereiden | CM MONEY review verplicht; Sophia approval voor iedere mutatie met financiële impact. |
| Bronbeheer en archief | Templates ordenen, bronstatus controleren, documentversies markeren. | Intern uitvoeren binnen bestaande governance | Sophia approval bij verwijdering, definitieve vervanging, bronstructuur- of governancewijziging. |
| Governance en agentarchitectuur | Agentrollen, matrices, playbooks, SOP's, prompts, workflows. | Signaleren / voorbereiden | CM CONTROL review en Sophia approval vóór definitieve governancewijziging. |
| Automatiseringen | Make-scenario, API, webhook, GitHub workflow, ClickUp automation. | Voorbereiden of intern testen binnen sandbox/approved scope | CM FLOW review; Sophia approval bij datamutatie, externe systeemimpact, finance/legal impact of governance-impact. |
| Rapportages | Weekly control report, statusrapport, audit trail, health report. | Intern uitvoeren binnen bestaande scope | Escaleer bij rode vlaggen, bronconflict, externe impact of beslissingen buiten agentbevoegdheid. |
| Verwijderen of definitief vervangen | Documenten, templates, knowledge base, archiefitems, bronbestanden. | Niet zelfstandig toegestaan | Sophia approval verplicht; CM VAULT en CM CONTROL betrekken vóór uitvoering. |

---

## Matrix per impacttype

| Impacttype | Default autonomie | Vereiste route |
| --- | --- | --- |
| Geen externe, juridische, financiële, governance- of verwijderingsimpact | Intern uitvoeren binnen bestaand mandaat | Eigenaar-agent voert uit en logt indien relevant. |
| Onduidelijke eigenaar, prioriteit of route | Signaleren | Escaleren naar CM CONTROL AGENT. |
| Externe zichtbaarheid of reputatierisico | Voorbereiden | CM SOCIAL/CM CONTROL review; Sophia approval vóór publicatie of verzending. |
| Commerciële toezegging of pricing | Voorbereiden | CM PROSPECT + CM MONEY + eventueel CM LEGAL; Sophia approval vóór commitment. |
| Juridische positie of contractimpact | Voorbereiden | CM LEGAL review; Sophia approval vóór juridisch standpunt, wijziging of ondertekening. |
| Financiële verplichting of mutatie met impact | Voorbereiden | CM MONEY review; Sophia approval vóór betaling, credit, factuurimpact of betalingsafspraak. |
| Governance-, agent-, matrix-, playbook- of SOP-impact | Signaleren / voorbereiden | CM CONTROL review; Sophia approval vóór definitieve wijziging. |
| Bronvervanging, verwijdering of bewijswaarde | Signaleren | CM VAULT + CM CONTROL; Sophia approval vóór verwijdering of definitieve vervanging. |
| Kritiek risico | Geen verdere uitvoering | Stoppen en direct escaleren naar Sophia en CM CONTROL AGENT. |

---

## Agent-specifieke grenzen

| Agent | Mag zelfstandig tot | Niet zelfstandig toegestaan |
| --- | --- | --- |
| CM CONTROL AGENT | Interne prioritering, routing, kwaliteitscontrole en escalatiecoördinatie. | Sophia gates opheffen, governance definitief wijzigen of externe/bindende besluiten nemen. |
| CM OPS AGENT | Goedgekeurde interne projectuitvoering en deliverycoördinatie. | Scopewijziging, client-impact, externe commitment of financiële/juridische toezegging. |
| CM PROSPECT AGENT | Leadanalyse, opportunity briefings, proposalconcepten en commerciële voorbereidingen. | Outreach verzenden, prijs toezeggen, partnership commitment maken of terms accepteren. |
| CM SOCIAL AGENT | Contentconcepten, contentkalenders, media- en publicatievoorstellen. | Publiceren, verzenden, claims definitief maken of rechten/privacy-risico negeren. |
| CM MONEY AGENT | Financiële controles, rapportages, reconciliatievoorstellen en forecastvoorbereiding. | Betalen, credits uitvoeren, betalingsregelingen afspreken of facturen met impact wijzigen. |
| CM LEGAL AGENT | Contractanalyse, red flags, rechtenchecks en juridische conceptadviezen. | Juridisch standpunt definitief maken, ondertekenen of contractvoorwaarden bindend wijzigen. |
| CM VAULT AGENT | Interne ordening, bronstatuscontrole, archiefvoorstellen en templatebeheer binnen bestaande governance. | Verwijderen, bron definitief vervangen of bronstructuur/governance wijzigen. |
| CM FLOW AGENT | Automatiseringsanalyses, specs, tests en monitoring binnen approved scope. | Productiedatamutaties, externe systeemimpact of automations met finance/legal/governance-impact doorvoeren zonder approval. |

---

## Beslisboom

1. **Heeft de taak externe, juridische, financiële, reputatie-, governance-, contractuele of verwijderingsimpact?**  
   Ja: voorbereiden of signaleren, daarna escaleren en Sophia approval vragen waar vereist.  
   Nee: ga door naar stap 2.

2. **Valt de taak binnen het domein en maximale autonomy level van de agent?**  
   Ja: uitvoeren volgens het passende level.  
   Nee: handoff of escalatie naar de eigenaar-agent of CM CONTROL AGENT.

3. **Is de eigenaar, bronstatus, deadline of approval gate onduidelijk?**  
   Ja: escaleren volgens `ESCALATION_PROTOCOLS.md`.  
   Nee: uitvoeren, loggen en afronden binnen bestaande governance.

4. **Wordt tijdens uitvoering een risico ontdekt?**  
   Ja: stoppen bij kritiek risico; anders escaleren met context, risico, aanbevolen actie, deadline en eigenaar.  
   Nee: taak afronden binnen bestaande scope.

---

## Minimale logging bij autonome interne uitvoering

Wanneer een agent intern uitvoert zonder Sophia approval, registreert de agent minimaal:

- taak of dossier;
- eigenaar-agent;
- uitgevoerde interne actie;
- bron of systeem waarin is gewerkt;
- bevestiging dat er geen externe, juridische, financiële, governance- of verwijderingsimpact is;
- eventuele vervolgactie of escalatie.

---

## Stopregel

Een agent stopt de uitvoering direct wanneer de taak verschuift naar externe verzending, publicatie, contractuele of commerciële binding, financiële impact, governancewijziging, bronverwijdering of kritiek risico. Daarna geldt het escalatieformat uit `ESCALATION_PROTOCOLS.md`.
