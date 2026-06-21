# Escalation Protocols

## Doel

Dit document beschrijft wanneer en hoe CM_OS-agents escaleren naar Sophia, CM CONTROL AGENT en gespecialiseerde owner-agents. Escalatie is verplicht zodra risico, eigenaarschap, bevoegdheid, deadline of impact buiten de normale taakruimte valt.

## Required output bij iedere escalatie

Iedere escalatie bevat minimaal:

| Veld | Vereiste inhoud |
| --- | --- |
| Context | Dossier, betrokken partijen, bron, huidige status en relevante voorgeschiedenis. |
| Risico | Juridisch, financieel, operationeel, reputatie-, governance-, data- of deliveryrisico. |
| Aanbevolen actie | Concrete volgende stap, inclusief opties als er meerdere routes zijn. |
| Deadline | Beslis- of actiedatum, inclusief reden voor urgentie. |
| Eigenaar | Agent of persoon die verantwoordelijk is voor opvolging. |

---

## Escalatielevels

| Level | Definitie | Reactie |
| --- | --- | --- |
| Normaal | Er is onduidelijkheid, afhankelijkheid of beperkte impact, maar geen directe schade of harde deadline. | Escaleer in de reguliere workflow met volledige context en aanbevolen actie. |
| Urgent | Er is een naderende deadline, mogelijke externe impact, financiële/juridische exposure of blokkade op uitvoering. | Escaleer direct naar de eigenaar-agent en CM CONTROL AGENT; markeer deadline expliciet. |
| Kritiek | Er is direct risico op schade, verkeerde publicatie, contractuele fout, betalingsfout, dataverlies, governancebreuk of reputatieschade. | Stop uitvoering, escaleer direct naar Sophia en CM CONTROL AGENT, en voer geen verdere actie uit zonder approval. |

---

## Escalatie naar Sophia

Escalatie naar Sophia is verplicht bij:

- externe communicatie met commerciële, juridische, reputatie- of strategische impact;
- publicatie of verzending van content;
- contract, NDA, term sheet, offerte, prijsafspraak of partnershipcommitment;
- betaling, betalingsregeling, factuurwijziging met impact, creditnota of financiële verplichting;
- governancewijziging, agentwijziging, matrixwijziging, bronstructuurwijziging of playbookwijziging;
- verwijdering of definitieve vervanging van documenten, templates, kennisbankcontent of archiefitems;
- conflicten tussen agents die niet door CM CONTROL AGENT kunnen worden opgelost;
- kritieke escalaties.

## Escalatie naar CM CONTROL AGENT

Escalatie naar CM CONTROL AGENT is verplicht bij:

- twijfel over eigenaar, prioriteit, routing of approval gate;
- conflicten tussen agents of domeinen;
- scopewijzigingen, resourceconflicten, deliveryrisico's of kwaliteitsissues;
- governance-impact of afwijking van bestaande matrices/playbooks;
- urgente of kritieke escalaties die coördinatie vragen;
- situaties waarin een agent het eigen autonomy level dreigt te overschrijden.

## Escalatie naar CM LEGAL AGENT

Escalatie naar CM LEGAL AGENT is verplicht bij:

- contracten, NDA's, term sheets, rechten, licensing, sync, publishing of catalogusvragen;
- claims, endorsements, privacydata, beeld-/muziekrechten of reputatierisico in content;
- disputen, incasso, aansprakelijkheid, non-compliance of juridische interpretatie;
- commerciële afspraken met juridische voorwaarden of afwijkende terms.

## Escalatie naar CM MONEY AGENT

Escalatie naar CM MONEY AGENT is verplicht bij:

- facturen, betalingen, open posten, bank, BTW, cashflow, revenue tracking of forecasting;
- nieuwe financiële verplichtingen, afwijkende betaalafspraken, kortingen, credits of write-offs;
- financiële afwijkingen tussen contract, voorstel, Moneybird of projectstatus;
- financiële signalen met commerciële of juridische impact.

## Escalatie naar CM VAULT AGENT

Escalatie naar CM VAULT AGENT is verplicht bij:

- bronstatus, archivering, templates, SOP's, prompts, playbooks of knowledge base;
- onduidelijkheid over Source Of Truth of documentversie;
- dossiercompleetheid, bewijswaarde, audit trail of archiefstructuur;
- voorgenomen bronvervanging, verplaatsing of verwijdering.

## Escalatie naar CM FLOW AGENT

Escalatie naar CM FLOW AGENT is verplicht bij:

- Make-scenario's, API's, webhooks, ClickUp automations, GitHub workflows of integraties;
- dataflow-, status-, routing-, notificatie- of systeemimpact;
- automatiseringsfouten, ontbrekende logging, rollbackbehoefte of monitoringrisico;
- handmatige processen die structureel automatiseringskandidaat zijn.

---

## Escalatie triggers per agent

| Agent | Escaleren bij | Escalatie naar |
| --- | --- | --- |
| CM CONTROL AGENT | Strategische onzekerheid, governance-impact, kritieke risico's, onoplosbare agentconflicten of Sophia approval gate. | Sophia |
| CM OPS AGENT | Scopewijziging, deliveryblokkade, client-impact, resourceconflict, projectrisico of externe commitment. | CM CONTROL AGENT; Sophia bij externe of bindende impact |
| CM PROSPECT AGENT | Prijsindicatie, proposal, commerciële toezegging, outreach, partnershipterms of dealstructuur. | CM LEGAL AGENT, CM MONEY AGENT, CM CONTROL AGENT; Sophia bij commitment |
| CM SOCIAL AGENT | Publicatie, nieuwsbrief, media outreach, claims, reputatierisico, rechtenvraag of privacygevoelige content. | CM LEGAL AGENT, CM CONTROL AGENT; Sophia vóór publicatie/verzending |
| CM MONEY AGENT | Betaling, factuurwijziging, credit, betalingsregeling, cashflowrisico, BTW-risico, open-postenconflict of finance/legal mismatch. | CM LEGAL AGENT, CM CONTROL AGENT; Sophia bij financiële impact |
| CM LEGAL AGENT | Ondertekening, contractwijziging, juridisch standpunt, dispuut, rechtenconflict, compliance-risico of dealblokkade. | CM CONTROL AGENT; Sophia bij juridische of bindende impact |
| CM VAULT AGENT | Source Of Truth-conflict, governancewijziging, archiefconflict, bronvervanging, templatewijziging of verwijderingsverzoek. | CM CONTROL AGENT; Sophia bij governance of verwijdering |
| CM FLOW AGENT | Automatisering met data-, status-, routing-, repository-, finance-, legal- of externe systeemimpact. | CM CONTROL AGENT; CM VAULT AGENT bij bronstructuur; Sophia bij impact |

---

## Escalatieformat

Gebruik dit format bij iedere escalatie:

```text
ESCALATIELEVEL: Normaal / Urgent / Kritiek
NAAR: Sophia / CM CONTROL AGENT / CM LEGAL AGENT / CM MONEY AGENT / CM VAULT AGENT / CM FLOW AGENT
CONTEXT: ...
RISICO: ...
AANBEVOLEN ACTIE: ...
DEADLINE: ...
EIGENAAR: ...
BRONNEN / BIJLAGEN: ...
```

## Stopregel

Bij kritieke escalatie stopt de uitvoerende agent alle acties die het risico kunnen vergroten. Hervatten mag pas na expliciete beslissing van Sophia of, wanneer er geen Sophia gate is, CM CONTROL AGENT.
