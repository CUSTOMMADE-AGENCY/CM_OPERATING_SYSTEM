# CM Agent Lifecycle

> Versie: v1.0 · Status: **GOVERNANCE STANDARD** · Datum: 2026-06-30  
> Eigenaar: CM CONTROL AGENT  
> Beheer: CM VAULT AGENT  
> Gerelateerd: `AGENT_CERTIFICATION_STANDARD.md`

---

## 1. Doel

Dit document beschrijft de volledige levenscyclus van een AI-agent binnen het CM Operating System. Het zorgt dat agents niet ad hoc ontstaan, maar volgens dezelfde kwaliteitsstandaard worden ontworpen, gebouwd, getest, gecertificeerd, beheerd en uitgefaseerd.

De lifecycle is verplicht voor:

- nieuwe agents;
- grote wijzigingen aan bestaande agents;
- agents die nieuwe systeemrechten krijgen;
- agents die naar een hoger autonomieniveau gaan;
- agents die worden uitgefaseerd of vervangen.

---

## 2. Lifecycle-overzicht

```text
Idee
  ↓
Ontwerp
  ↓
Governance Review
  ↓
Documentatie
  ↓
Build
  ↓
Test
  ↓
Certificering
  ↓
Production
  ↓
Monitoring
  ↓
Optimalisatie
  ↓
Uitfasering
```

Elke stap heeft een duidelijke eigenaar, output en gate. Een agent mag niet naar de volgende stap wanneer de gate niet is gehaald.

---

## 3. Lifecycle-stappen

| Stap | Doel | Primaire eigenaar | Minimale output | Gate |
| --- | --- | --- | --- | --- |
| Idee | Bepalen waarom de agent nodig is. | Aanvrager + CM CONTROL AGENT | Conceptbeschrijving en probleemstelling. | Past binnen CM_OS-strategie. |
| Ontwerp | Scope, rol en grenzen uitwerken. | Owner-agent + CM CONTROL AGENT | Agentontwerp, scope, inputs, outputs en verboden acties. | Geen overlap of conflict met bestaande agents. |
| Governance Review | Controleren of de agent bestuurbaar is. | CM CONTROL AGENT | Governancebesluit en approvalroute. | Level 1 mogelijk. |
| Documentatie | Alle verplichte documenten maken. | CM VAULT AGENT + owner-agent | SOP, workflow, playbook, README, testplan en logspecificatie. | Documentatieset compleet. |
| Build | Technische inrichting bouwen. | CM FLOW AGENT + owner-agent | Make Scenario, integraties, rechtenmodel, fallback en rollback. | Alleen testomgeving actief. |
| Test | Functionele en red team tests uitvoeren. | Owner-agent + reviewer | Testresultaten, incidenten en fixes. | Level 2 afgerond. |
| Certificering | Score en productiegereedheid bepalen. | CM CONTROL AGENT | Certificeringsmatrix en agentpaspoort. | Score en safety gates gehaald. |
| Production | Agent gecontroleerd activeren. | Menselijke owner + CM FLOW AGENT | Productie-activation record en monitoringafspraken. | Level 3 of Level 4 goedgekeurd. |
| Monitoring | Werking en risico's volgen. | Owner-agent + support | Logs, incidentrapporten en periodieke checks. | Geen open kritieke issues. |
| Optimalisatie | Agent verbeteren zonder governanceverlies. | Owner-agent + CM CONTROL AGENT | Change request, impactanalyse en updateplan. | Herbeoordeling indien scope of rechten wijzigen. |
| Uitfasering | Agent veilig stoppen of vervangen. | CM CONTROL AGENT + CM VAULT AGENT | Deactivation record, archief en overdracht. | Geen actieve afhankelijkheden meer. |

---

## 4. Gates per fase

### 4.1 Idee-gate

Een idee mag alleen door naar ontwerp wanneer:

- het probleem concreet is;
- er geen bestaande agent is die de taak al dekt;
- de verwachte waarde duidelijk is;
- het risico voorlopig acceptabel lijkt;
- er een beoogde owner is.

### 4.2 Ontwerp-gate

Een agentontwerp moet minimaal bevatten:

- naam;
- doel;
- scope;
- niet-scope;
- inputs;
- outputs;
- systemen;
- owner;
- support;
- escalatiepad;
- verboden acties;
- verwachte autonomie;
- afhankelijkheden van andere agents.

### 4.3 Governance-gate

CM CONTROL AGENT controleert:

- alignment met CM Agent Governance;
- overlap met bestaande agents;
- risico voor clientdata, geld, contracten en externe communicatie;
- benodigde menselijke approval gates;
- voorlopig certificeringsniveau.

### 4.4 Documentatie-gate

CM VAULT AGENT controleert of de verplichte documentatieset compleet, vindbaar en consistent is met de source of truth.

### 4.5 Build-gate

CM FLOW AGENT controleert:

- test- en productieomgevingen zijn gescheiden;
- systeemrechten zijn minimaal noodzakelijk;
- logging staat aan;
- fallback en rollback zijn beschikbaar;
- geen verboden acties technisch mogelijk zijn zonder menselijke approval.

### 4.6 Test-gate

De agent moet slagen voor:

- functionele testcases;
- foutafhandeling;
- red team scenario's;
- loggingcontrole;
- rollbackcontrole;
- escalatiecontrole.

### 4.7 Certificerings-gate

De agent wordt beoordeeld volgens `AGENT_CERTIFICATION_STANDARD.md`. Productie is alleen mogelijk wanneer de score, veiligheidsregels en approval gates gehaald zijn.

### 4.8 Production-gate

Productieactivatie vereist:

- expliciete menselijke approval;
- agentpaspoort;
- monitoringafspraak;
- rollbackplan;
- incidentroute;
- bevestiging van systeemrechten.

---

## 5. Change management

Elke wijziging aan een agent wordt geclassificeerd.

| Change type | Voorbeelden | Vereiste actie |
| --- | --- | --- |
| Minor | Tekstuele documentatie-update, verduidelijking, typo. | Change log bijwerken. |
| Standard | Nieuwe testcase, kleine workflowverbetering, extra logging. | Review door owner-agent en CM VAULT AGENT. |
| Major | Nieuwe systeemkoppeling, nieuwe output, scope-uitbreiding. | Governance review en hercertificering. |
| Critical | Nieuwe autonomie, nieuwe productierechten, security-impact. | Volledige lifecycle-gate vanaf Governance Review. |

---

## 6. Monitoring na productie

Voor productie-agents moet minimaal worden bewaakt:

- aantal runs of acties;
- fouten en timeouts;
- escalaties;
- rollbackmomenten;
- permission errors;
- outputkwaliteit;
- afwijkingen van scope;
- incidenten met klantdata;
- wijzigingen in systeemrechten;
- open verbeteracties.

Monitoringfrequentie:

| Agentstatus | Minimale reviewfrequentie |
| --- | --- |
| Beta | Wekelijks |
| Production Approved | Maandelijks |
| Autonomous | Tweewekelijks of vaker bij hoog risico |
| Voorwaardelijk goedgekeurd | Volgens hersteldeadline |

---

## 7. Uitfasering

Een agent wordt uitgefaseerd wanneer:

- de taak niet meer nodig is;
- de agent wordt vervangen;
- de governance niet meer klopt;
- securityrisico's te hoog zijn;
- performance onvoldoende blijft;
- documentatie of ownership ontbreekt;
- incidenten aantonen dat de agent niet veilig genoeg is.

Uitfasering vereist:

- stopzetten van automatiseringen;
- intrekken van systeemrechten;
- archiveren van documentatie;
- vastleggen van reden en datum;
- overdracht van open taken;
- update van agentregister en relevante indexen;
- bewaren van audit trails volgens CM-governance.

---

## 8. Rollen en verantwoordelijkheden

| Rol | Verantwoordelijkheid |
| --- | --- |
| Aanvrager | Signaleert behoefte en levert context. |
| Owner-agent | Is inhoudelijk verantwoordelijk voor scope, output en dagelijkse werking. |
| CM CONTROL AGENT | Bewaakt governance, certificering, gates en escalatie. |
| CM VAULT AGENT | Bewaakt documentatie, source of truth en archivering. |
| CM FLOW AGENT | Bewaakt technische inrichting, automatisering, logging en systeemrisico's. |
| Menselijke owner | Keurt productie, externe impact, geld, contracten en governance-impact goed. |

---

## 9. Relatie met certificering

De lifecycle beschrijft **hoe** een agent door het systeem beweegt. De certificeringsstandaard bepaalt **of** de agent volwassen en veilig genoeg is voor het gewenste niveau.

Samen vormen deze documenten het kwaliteitsfundament voor een schaalbare agentorganisatie binnen CM:

- lifecycle = proces;
- certificering = kwaliteitslat;
- agentpaspoort = auditkaart;
- monitoring = blijvende controle;
- hercertificering = jaarlijkse borging.
