# CM_SYSTEM_DECISION_MATRIX.md

> Versie: v1.0 · Status: Operationeel · Datum: 2026-06-21
> Pad: `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md`
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`
> Eigenaar: CM CONTROL AGENT · Goedkeuring: Sophia

-----

## 1. HOOFDREGEL

Binnen CM_OS geldt per systeem één primaire rol:

|Systeem              |Primaire rol                                                         |
|---------------------|---------------------------------------------------------------------|
|**GitHub**           |Governance, playbooks, agent-definities, systeemdocumentatie         |
|**Drive**            |Opslag, assets, documenten, templates, bewijsstukken                 |
|**ClickUp**          |Uitvoering, taken, planning, status                                  |
|**Moneybird**        |Financiële waarheid                                                  |
|**Gmail**            |Correspondentie en bewijs van communicatie                           |
|**Make**             |Automatisering en systeemkoppelingen                                 |
|**Canva**            |Design, decks, visuals, social assets                                |
|**Website CMS**      |Publieke website                                                     |
|**ChatGPT / Claude** |Analyse, productie en ondersteuning — geen officiële opslag          |
|**Approval Register**|Google Sheet in Drive — bron van waarheid voor alle Level 4 besluiten|

-----

## 2. SYSTEM OF RECORD MATRIX

|Onderwerp               |Leidend systeem          |Ondersteunend systeem   |Eigenaar-agent        |Bewijslocatie                             |Opmerking                                                        |
|------------------------|-------------------------|------------------------|----------------------|------------------------------------------|-----------------------------------------------------------------|
|Governance              |GitHub                   |Drive                   |CM VAULT + CM CONTROL |GitHub repo                               |Playbooks en agent-definities altijd in GitHub                   |
|Agent-definities        |GitHub                   |Drive                   |CM VAULT              |GitHub repo                               |Definitie in GitHub, werkkopie mag in Drive staan                |
|Playbooks               |GitHub                   |Drive                   |CM VAULT              |GitHub repo                               |Drive-versie is altijd secundair                                 |
|SOP’s                   |GitHub                   |Drive                   |CM VAULT              |GitHub repo                               |Operationele SOP’s in Drive, masterdefinitie in GitHub           |
|Prompts                 |GitHub                   |Drive                   |CM VAULT              |GitHub repo                               |Prompts zijn systeemdocumentatie                                 |
|Templates               |Drive                    |GitHub                  |CM VAULT              |Drive — mastermap                         |Template Register in GitHub, fysieke templates in Drive          |
|Drive-structuur         |GitHub                   |Drive                   |CM VAULT              |GitHub repo                               |Structuurdefinitie in GitHub, uitvoering in Drive                |
|Taken                   |ClickUp                  |—                       |CM OPS                |ClickUp                                   |Enige bron van waarheid voor taakstatus                          |
|Planning                |ClickUp                  |Drive                   |CM OPS                |ClickUp                                   |Projectplanning in ClickUp, documenten in Drive                  |
|Projectstatus           |ClickUp                  |Drive                   |CM OPS                |ClickUp                                   |Status altijd in ClickUp, niet in losse Drivebestanden           |
|Client management       |ClickUp                  |Drive                   |CM OPS                |ClickUp + Drive                           |Contactinfo en dossier in Drive, acties in ClickUp               |
|Artist management       |ClickUp                  |Drive                   |CM OPS                |ClickUp + Drive                           |Contactinfo en dossier in Drive, acties in ClickUp               |
|Lead pipeline           |ClickUp                  |Drive                   |CM PROSPECT           |ClickUp                                   |Leadstatus in ClickUp, onderzoek en docs in Drive                |
|Sponsorships            |ClickUp                  |Drive + Gmail           |CM PROSPECT           |Drive (contract) + Gmail (correspondentie)|Dealstatus in ClickUp, contract in Drive                         |
|Partnerships            |ClickUp                  |Drive + Gmail           |CM PROSPECT           |Drive (contract) + Gmail (correspondentie)|Dealstatus in ClickUp, contract in Drive                         |
|Brand deals             |ClickUp                  |Drive + Gmail           |CM PROSPECT + CM LEGAL|Drive (contract) + Gmail                  |Contract leidend via CM LEGAL                                    |
|Nieuwe zakelijke klanten|ClickUp                  |Drive + Gmail           |CM PROSPECT           |ClickUp (status) + Drive (dossier)        |Onboarding via CM OPS na akkoord                                 |
|Contracten              |Drive                    |Gmail                   |CM LEGAL              |Drive                                     |Ondertekende versie in Drive is leidend                          |
|NDA’s                   |Drive                    |Gmail                   |CM LEGAL              |Drive                                     |Ondertekende versie in Drive is leidend                          |
|Publishing              |Drive                    |GitHub (rechtenregister)|CM LEGAL              |Drive                                     |Splits en registratie gedocumenteerd in Drive                    |
|Licensing               |Drive                    |Gmail                   |CM LEGAL              |Drive                                     |Overeenkomst in Drive, correspondentie in Gmail                  |
|Sync                    |Drive                    |Gmail                   |CM LEGAL              |Drive                                     |Pre-clearance documentatie in Drive                              |
|Catalog Acquisitions    |Drive                    |Gmail + Moneybird       |CM LEGAL              |Drive                                     |Waardering en bewijsstukken in Drive                             |
|Rechtenregister         |Drive                    |GitHub                  |CM LEGAL              |Drive                                     |Eigendom CM LEGAL, archiefkopie bij CM VAULT                     |
|Facturen                |Moneybird                |Drive                   |CM MONEY              |Moneybird                                 |Moneybird is altijd leidend voor financiële status               |
|Bonnen                  |Moneybird                |Drive                   |CM MONEY              |Moneybird + Drive (scan)                  |Fysieke scan in Drive, status in Moneybird                       |
|Kwitanties              |Moneybird                |Drive                   |CM MONEY              |Moneybird + Drive                         |Zelfde als bonnen                                                |
|Banktransacties         |Moneybird                |—                       |CM MONEY              |Moneybird                                 |Geen alternatieve bron                                           |
|BTW                     |Moneybird                |Drive                   |CM MONEY              |Moneybird                                 |Aangiftes gearchiveerd in Drive                                  |
|Open posten             |Moneybird                |ClickUp                 |CM MONEY              |Moneybird                                 |Actieopvolging in ClickUp                                        |
|Cashflow                |Moneybird                |Drive                   |CM MONEY              |Moneybird                                 |Forecasts en analyses in Drive                                   |
|Revenue tracking        |Moneybird                |Drive                   |CM MONEY              |Moneybird                                 |Rapportages in Drive                                             |
|Forecasting             |Drive                    |Moneybird               |CM MONEY              |Drive                                     |Forecast is analyse — Drive; actuele cijfers altijd uit Moneybird|
|Social content          |Drive                    |Canva                   |CM SOCIAL             |Drive (archief) + Canva (assets)          |Gepubliceerde content gearchiveerd in Drive                      |
|Website content         |Website CMS              |Drive                   |CM SOCIAL             |Website CMS                               |Werkkopieën in Drive, publicatie via CMS                         |
|SEO                     |Drive                    |Website CMS             |CM SOCIAL             |Drive                                     |Zoekwoordonderzoek en rapportages in Drive                       |
|Nieuwsbrieven           |Drive                    |Gmail                   |CM SOCIAL             |Drive (inhoud) + Gmail (verzending)       |Verstuurde versie bewaard in Drive                               |
|Persberichten           |Drive                    |Gmail                   |CM SOCIAL             |Drive                                     |Definitieve versie in Drive, verzending via Gmail                |
|Media outreach          |Gmail                    |Drive                   |CM SOCIAL             |Gmail                                     |Correspondentie leidend in Gmail, plan in Drive                  |
|Approvals               |Approval Register (Drive)|ClickUp                 |CM CONTROL            |Drive — Approval Register                 |Enige bron van waarheid voor Level 4 besluiten                   |
|Escalaties              |ClickUp                  |Gmail                   |CM CONTROL            |ClickUp + Gmail                           |Status in ClickUp, correspondentie in Gmail                      |
|Automatiseringen        |Make                     |GitHub                  |CM FLOW               |GitHub (documentatie) + Make (uitvoering) |Scenario’s in Make, documentatie in GitHub                       |
|Make scenario’s         |Make                     |GitHub                  |CM FLOW               |GitHub                                    |Scenario-documentatie altijd in GitHub                           |
|ClickUp automations     |ClickUp                  |GitHub                  |CM FLOW AGENT         |GitHub                                    |Automationlogica gedocumenteerd in GitHub                        |
|GitHub workflows        |GitHub                   |—                       |CM FLOW AGENT + CM VAULT AGENT + CM CONTROL AGENT|GitHub                                    |GitHub is enige bron voor eigen workflows                        |

-----

## 3. BESLISREGELS

### Bij twijfel over uitvoering

**ClickUp is leidend.**
Taakstatus, eigenaar en deadline staan in ClickUp. Geen andere bron overschrijft dit.

### Bij twijfel over opslag

**Drive is leidend.**
Documenten, templates, assets en bewijsstukken staan in Drive. Losse bestanden buiten Drive zijn niet officieel.

### Bij twijfel over governance

**GitHub is leidend.**
Playbooks, agent-definities en systeemdocumentatie in GitHub zijn de enige geldige versie. Drive-kopieën zijn secundair.

### Bij twijfel over geld

**Moneybird is leidend.**
Factuurstatus, open posten, BTW en banktransacties worden uitsluitend bepaald door Moneybird. Spreadsheets en Drive-documenten zijn ondersteunend.

### Bij twijfel over communicatie

**Gmail is leidend.**
Bewijs van verzonden of ontvangen communicatie staat in Gmail. Samenvattingen in ClickUp of Drive zijn ondersteunend.

### Bij twijfel over automatisering

**Make + GitHub documentatie zijn leidend.**
Actieve scenario’s staan in Make. Documentatie en versiehistorie staan in GitHub.

### Bij twijfel over approval

**Approval Register in Drive is leidend.**
Geen Level 4 actie is geldig zonder rij in het Approval Register. Goedkeuring via andere kanalen (chat, mondeling) wordt pas geldig na registratie.

-----

## 4. CONFLICTREGELS

Bij conflicterende informatie tussen systemen geldt de volgende rangorde:

|Conflict               |Winnend systeem              |Reden                               |
|-----------------------|-----------------------------|------------------------------------|
|Financiële status      |**Moneybird**                |Enige geautoriseerde financiële bron|
|Governance             |**GitHub**                   |Definitieve systeemdocumentatie     |
|Documenten en assets   |**Drive**                    |Primaire opslaglocatie              |
|Bewijs van communicatie|**Gmail**                    |Originele verzend- en ontvangstbron |
|Taakstatus             |**ClickUp**                  |Operationele uitvoeringsbron        |
|Sophia-besluiten       |**Approval Register (Drive)**|Enige geautoriseerde beslissingsbron|

**Bij conflict tussen twee systemen:** CM CONTROL AGENT escaleert direct naar Sophia. Geen agent lost een systeemconflict zelfstandig op.

-----

## 5. APPROVAL REGISTER

Het Approval Register is de enige geldige bron voor Level 4 besluiten binnen CM_OS.

**Locatie:**

```text
OS_CUSTOMMADE/00_ADMIN/05_APPROVALS/APPROVAL_REGISTER/CM_APPROVAL_REGISTER
```

**Format:** Google Sheet in Drive — één tabblad per maand, één rij per verzoek.

**Eigenaar:** CM CONTROL AGENT

**Het Approval Register wordt gebruikt voor:**

- Level 4 approvals
- Sophia decisions
- Externe communicatie
- Publicaties
- Contracten
- Financiële toezeggingen
- Governancewijzigingen
- Documentverwijdering

**Regel:** een Level 4 actie zonder bijbehorende rij in het Approval Register is niet geldig, ongeacht of Sophia mondeling of via een ander kanaal goedkeuring heeft gegeven. Registratie is onderdeel van de goedkeuring.

-----

## 6. AGENT EIGENAARSCHAP

|Systeem / Domein     |Eigenaar-agent       |Toelichting                                                                             |
|---------------------|---------------------|----------------------------------------------------------------------------------------|
|GitHub governance    |CM VAULT + CM CONTROL|VAULT bewaakt structuur en inhoud, CONTROL bewaakt naleving                             |
|Drive opslag         |CM VAULT             |Structuur, naming, archivering en validatie                                             |
|ClickUp uitvoering   |CM OPS               |Taken, planning, projectstatus                                                          |
|Moneybird            |CM MONEY             |Facturen, open posten, BTW, cashflow                                                    |
|Gmail correspondentie|Afhankelijk van agent|Elke agent is verantwoordelijk voor eigen correspondentie; CM CONTROL bewaakt escalaties|
|Make automatisering  |CM FLOW              |Scenario’s, integraties, automatiseringen                                               |
|Canva / Website CMS  |CM SOCIAL            |Design, visuals, social assets, website content                                         |
|Contracten / Rechten |CM LEGAL             |Alle juridische documenten, rechtenregister, deals                                      |
|Leads / Partnerships |CM PROSPECT          |Pipeline, outreach, sponsorships, brand deals                                           |
|Approvals            |CM CONTROL           |Approval Register, Level 4 bewaking, escalaties                                         |
|GitHub workflows / repository automation|CM FLOW AGENT + CM VAULT AGENT + CM CONTROL AGENT|Workflowlogica en repository automation onder gedeeld eigenaarschap|

-----

## 7. VERWIJZINGEN

|Document                   |Pad                                               |
|---------------------------|--------------------------------------------------|
|Agent Responsibility Matrix|`docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md`|
|Agent Handoff Matrix       |`docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`       |
|AI Autonomy Levels         |`docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`         |
|AI Task Autonomy Matrix    |`docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md`    |
|Escalation Protocols       |`docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`       |
|CM Agents Overview         |`docs/07_AI_AGENTS/00_CM_AGENTS_OVERVIEW.md`      |
