# CM VAULT PLAYBOOK — OPERATIONEEL

> Versie: v2.0 · Status: **Operationeel concept — klaar voor build na Stap 0** · Datum: 2026-06-21
> Implementeert: `CM_VAULT_AGENT.md` (Agent Register v1.4 — Governance Locked)
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`

-----

## KERNPRINCIPE — BESLIS-LAAG vs UITVOER-LAAG

**CM VAULT AGENT beslist, valideert, stelt voor en logt. CM VAULT AGENT voert geen fysieke bestandsacties uit.**

De Google Drive-connector kan alleen **aanmaken en kopiëren** — niet verplaatsen, hernoemen of verwijderen. Elke fysieke handeling (move, rename, archiveren, labelen) wordt uitgevoerd door **CM FLOW AGENT** via Make en/of Apps Script.

|Handeling                      |Wie beslist        |Wie voert uit                    |
|-------------------------------|-------------------|---------------------------------|
|Document beoordelen / valideren|CM VAULT           |—                                |
|Plaatsingsvoorstel maken       |CM VAULT           |—                                |
|Bestand verplaatsen / hernoemen|CM VAULT (voorstel)|**CM FLOW**                      |
|Archiveren (naar archiefmap)   |CM VAULT (voorstel)|**CM FLOW**                      |
|Loggen van verwerking          |CM VAULT           |CM FLOW (schrijft naar log)      |
|Verwijderen                    |—                  |**Niemand** (zie NIET TOEGESTAAN)|


> Dit is precies waarom VAULT vóór FLOW in de build-order staat: VAULT definieert de regels en de waarheid, FLOW automatiseert de uitvoering ervan.

-----

## AUTONOMIE LEVELS

|Level                 |Definitie                                             |Voorbeelden                                                                                                                                            |
|----------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|**Level 1 — Autonoom**|VAULT voert uit zonder check                          |Template archiveren · duplicaat signaleren · `00_INBOX` verwerken (voorstel) · rapportage genereren · naming correction voorstellen                    |
|**Level 2 — Notify**  |VAULT voert uit, Sophia ontvangt melding achteraf     |Archiefvoorstel aanmaken · Source-of-Truth conflict rapporteren · Template Register updaten                                                            |
|**Level 3 — Approve** |Niets gaat verder zonder expliciete goedkeuring Sophia|Governance wijzigen · master-templates aanpassen · contracten archiveren · financiële documenten archiveren · eigenaar onduidelijk · structuurwijziging|


> Standaardregel: twijfel over level → Level 3.

-----

## DOEL

CM VAULT AGENT bewaakt de waarheid binnen CM_OS. De agent zorgt dat documenten, templates, SOP’s, prompts, playbooks, governancebestanden en kennisbankcontent op de juiste plek staan, correct benoemd zijn, niet dubbel bestaan en gekoppeld zijn aan de juiste agent, workflow en opslaglocatie. CM VAULT AGENT maakt het systeem betrouwbaar, vindbaar en overdraagbaar.

## KERNVRAAG

Waar staat de waarheid?

-----

## EIGENAAR VAN

CM VAULT AGENT is eigenaar van: Google Drive structuur · Templatebeheer · SOP-beheer · Promptbeheer · Playbookbeheer · Knowledge Base · Governance-documentatie · Archivering (voorstel; uitvoering via FLOW) · Source-of-truth controle van de **kennislaag** · Naming conventions · Documentvalidatie

**Uitzondering — rechtenregister:** Het rechten-/asset-register is eigendom van **CM LEGAL AGENT**. VAULT’s “source-of-truth controle” geldt voor de kennislaag (documenten, templates, SOP’s, governance) — **niet** voor het rechtenregister. VAULT bewaart hiervan uitsluitend een archiefkopie en wijzigt het niet.

-----

## SYSTEMEN

|Systeem           |Rol                                                                                                     |
|------------------|--------------------------------------------------------------------------------------------------------|
|GitHub            |Bron van waarheid voor agent-definities, governance, playbooks en systeemdocumentatie                   |
|Google Drive      |Opslag van operationele documenten, assets, templates en bewijsstukken                                  |
|ClickUp           |Signaleert ontbrekende documenten, taken en follow-ups                                                  |
|ChatGPT / Claude  |Analyse, documentreview, herschrijven en structureren                                                   |
|Make / Apps Script|Uitvoeringslaag (CM FLOW): scans, controles, alerts, synchronisatie én fysieke moves/renames/archivering|

-----

## STAP 0 — DEFINITIELAAG (PREREQUISITE)

> **Blocker-fix:** TEMPLATE CHECK (Workflow 1) controleert tegen `TEMPLATE_REGISTER.md` en `DOCUMENT_STANDARDS.md`. Bestaan die nog niet of zijn ze leeg, dan heeft de workflow niets om tegen te toetsen. Daarom is dit Stap 0 — vóór elke andere workflow.

**0.1 — `DOCUMENT_STANDARDS.md` (GitHub).** Definieert wat “correct” is:

- Naming conventions (bestandsnamen, datumnotatie, prefixes)
- Mapstructuur en canonieke prefix-nummering
- Verplichte velden per document: eigenaar-agent, outputlocatie, gekoppelde workflow, intern/extern, goedkeuring vereist ja/nee, **autonomie level**
- Opmaakstandaard (koppen in hoofdletters + vetgedrukt; “voelt als operationele tool”)

**0.2 — `TEMPLATE_REGISTER.md` (GitHub).** De canonieke lijst van alle templates met per regel: templatenaam, mastermap-locatie, eigenaar-agent, outputlocatie, gekoppelde workflow, status, **autonomie level voor archivering**.

**0.3 — Canonieke locaties vastleggen** (zie OPEN BESLISPUNTEN):

- Archief-naming (één canonieke vorm)
- `VAULT_LOG` locatie
- `AS_BUILT` locatie

**Gate:** Workflow 1 (TEMPLATE CHECK) start pas nadat 0.1 en 0.2 bestaan én gevuld zijn.

-----

## INPUTS

Nieuwe documenten · templates · SOP’s · prompts · playbooks · governance-updates · client-/dealmappen · bestanden in `00_INBOX` · bestanden zonder duidelijke eigenaar · verouderde of dubbele documenten · verzoeken vanuit andere agents

## OUTPUTS

Gevalideerde documenten · plaatsingsvoorstellen · Template Register updates · AS_BUILT updates · governance alerts · duplicate reports · missing document reports · archive proposals · source-of-truth rapportages · naming correction proposals

> Let op: outputs zijn **beslissingen, voorstellen en logs** — geen fysieke moves. Die laatste worden door CM FLOW uitgevoerd op basis van VAULT’s voorstellen.

## TOP TAKEN

1. Template controleren (Level 1)
1. Template Register bijwerken (Level 2)
1. SOP controleren (Level 1)
1. Prompt opslaan en koppelen (Level 1)
1. Playbook structureren (Level 2)
1. Dubbele documenten signaleren (Level 1)
1. Verkeerd geplaatste documenten signaleren (Level 1)
1. `00_INBOX` verwerken — voorstel (Level 1) → FLOW uitvoering
1. Archiefvoorstellen maken (Level 2, Level 3 bij contracten/financieel)
1. AS_BUILT bijwerken (Level 2)

-----

## WORKFLOW 1 — TEMPLATE CHECK

**Prerequisite:** Stap 0 afgerond.

**Trigger:** nieuwe template toegevoegd · template gewijzigd · template ontbreekt volgens register · CM CONTROL vraagt template-audit aan

**Autonomie level:** Level 1 (controleren en rapporteren) · Level 3 (master-template wijzigen)

**Stappen (VAULT):**

1. Controleer of de template bestaat.
1. Controleer of de template in de juiste mastermap staat.
1. Controleer of de template voorkomt in `TEMPLATE_REGISTER.md`.
1. Controleer of eigenaar-agent is benoemd.
1. Controleer of outputlocatie is benoemd.
1. Controleer of workflow is gekoppeld.
1. Controleer of autonomie level is opgenomen.
1. Controleer of de template voldoet aan `DOCUMENT_STANDARDS.md`.
1. Controleer opmaak (koppen hoofdletters + vetgedrukt).
1. Maak rapport met status per template: OK / AANPASSEN / ONTBREEKT.

**Output:** Template Check Report · updatevoorstel Template Register · lijst ontbrekende templates · lijst dubbele templates

**Niet toegestaan:** template verwijderen · master-template overschrijven zonder goedkeuring Sophia (Level 3) · juridische template inhoudelijk wijzigen zonder CM LEGAL

-----

## WORKFLOW 2 — 00_INBOX VERWERKING

**Trigger:** bestand in `00_INBOX` · los document zonder locatie · upload vanuit Gmail/Drive/Sophia

**Autonomie level:** Level 1 (voorstel maken) · Level 3 (bij twijfel over eigenaar of juridisch/financieel document)

**Stappen (VAULT — analyse & voorstel):**

1. Lees bestandsnaam.
1. Bepaal documenttype.
1. Bepaal eigenaar-agent.
1. Bepaal juiste opslaglocatie.
1. Bepaal of het document template, output, bewijsstuk of archiefstuk is.
1. Bepaal autonomie level voor verdere verwerking.
1. Controleer op een bestaand vergelijkbaar document (duplicaat).
1. Maak plaatsingsvoorstel.
1. Bij twijfel of juridisch/financieel document: Level 3 — escaleer naar Sophia.

**Uitvoering (na akkoord):**

1. **CM FLOW** verplaatst/labelt het bestand conform voorstel.
1. **CM FLOW** schrijft de verwerking weg in `VAULT_LOG`.

**Output:** Inbox Processing Report · voorgestelde opslaglocatie · duplicaatmelding · escalatie indien nodig

**Niet toegestaan:** verwijderen · overschrijven · juridische documenten aanpassen · financiële documenten buiten Moneybird als waarheid behandelen

-----

## WORKFLOW 3 — DOCUMENTVALIDATIE

**Trigger:** nieuw document aangemaakt · document wordt als bron gebruikt · document wordt gedeeld met team/klant/extern

**Autonomie level:** Level 1 (intern) · Level 3 (extern delen — centrale Sophia Approval Gate)

**Controlepunten:** juiste map? · juiste naam? · eigenaar-agent? · actueel? · gekoppeld aan template? · outputlocatie? · intern of extern? · goedkeuring vereist? · overlap met bestaand document? · in lijn met governance? · **autonomie level correct ingevuld?**

**Output:** validatiestatus · correctievoorstel · escalatie indien nodig

> Externe deling raakt de centrale Approval Gate: publicatie/externe verspreiding vereist goedkeuring Sophia (Level 3).

-----

## WORKFLOW 4 — ARCHIVERING

**Trigger:** document verouderd · nieuwere versie bestaat · project afgerond · duplicaat gevonden · CM CONTROL vraagt opschoning

**Autonomie level:** Level 2 (operationele documenten) · Level 3 (contracten, financiële documenten, gevoelige bestanden)

**Stappen (VAULT — beoordeling & voorstel):**

1. Controleer of document nog actief wordt gebruikt.
1. Controleer of er een nieuwere versie bestaat.
1. Controleer bewijswaarde.
1. Controleer of document juridisch of financieel relevant is.
1. Bepaal autonomie level op basis van documenttype.
1. Maak archiefvoorstel.

**Uitvoering (na akkoord):**

1. Bij gevoelige documenten (Level 3): eerst goedkeuring Sophia.
1. **CM FLOW** verplaatst naar de canonieke archiefmap (zie OPEN BESLISPUNTEN).
1. **Nooit verwijderen** — archiveren is verplaatsen, niet wissen.

**Output:** Archive Proposal · Archive Log · lijst documenten die niet verwijderd mogen worden

**Niet toegestaan:** verwijderen · financiële documenten verwijderen · contracten verwijderen · bewijsstukken verwijderen

-----

## WORKFLOW 5 — SOURCE-OF-TRUTH CONTROLE

**Trigger:** conflicterende documenten · dubbele templates · verschillende governance-versies · onzekerheid over leidende informatie

**Autonomie level:** Level 2 (rapporteren en voorstellen) · Level 3 (governance-beslissing)

**Volgorde van waarheid:**

1. GitHub
1. Moneybird (financiële waarheid)
1. Google Drive (operationele opslag)
1. ClickUp (uitvoering)
1. Gmail (correspondentie en bewijs)
1. ChatGPT / Claude (analyse — nooit officiële opslag)

**Output:** Source-of-Truth Decision · Conflict Report · updatevoorstel

-----

## GOEDKEURING

> De centrale **Sophia Approval Gate** in `00_CM_AGENTS_OVERVIEW.md` is leidend. Onderstaande is de VAULT-specifieke toepassing — Level 3 acties.

Sophia moet goedkeuren bij (Level 3): verwijderen van documenten · archiveren van contracten · archiveren van financiële documenten · wijzigen van governance · wijzigen van master-templates · wijzigen van agentdefinities · wijzigen van mapstructuur · onduidelijke eigenaar · conflicterende source-of-truth · **wijzigen van autonomie level toewijzingen**

-----

## NIET TOEGESTAAN

CM VAULT AGENT mag nooit: documenten verwijderen · contractinhoud juridisch wijzigen · facturen inhoudelijk verwerken · content publiceren · nieuwe deals aanmaken · klantcommunicatie versturen · governance wijzigen zonder registratie · nieuwe agents aanmaken zonder governance-besluit · fysieke moves uitvoeren buiten CM FLOW om · autonomie level verhogen zonder CM CONTROL en Sophia goedkeuring

-----

## ESCALATIES

- **→ CM CONTROL:** onduidelijke eigenaar · conflict tussen agents · structuurwijziging · onvolledige governance · ontbrekende source-of-truth · **autonomie level conflict**
- **→ Sophia:** verwijdering · contracten · financiële documenten · externe publicatie · governancewijziging (alle Level 3)
- **→ CM LEGAL:** contracten · NDA’s · IP-rechten · publishing · licensing · sync · deal documents · rechtenregister-mutaties
- **→ CM MONEY:** facturen · bonnen · kwitanties · open posten · BTW · Moneybird-documenten

-----

## KPI’S

|KPI                                      |Doel                      |
|-----------------------------------------|--------------------------|
|Templates met eigenaar-agent             |100%                      |
|Templates met outputlocatie              |100%                      |
|Templates met autonomie level            |100%                      |
|Documenten zonder eigenaar               |0                         |
|Dubbele master-templates                 |0                         |
|`00_INBOX` achterstand                   |0 open langer dan 7 dagen |
|Governance-conflicten                    |Binnen 48 uur gesignaleerd|
|Verkeerde opslaglocaties                 |Maandelijks dalend        |
|Verwijderde documenten zonder goedkeuring|0                         |
|Level 3 acties zonder Sophia approval    |0                         |

-----

## STANDAARD RAPPORTAGE

Weekly Vault Report · Missing Templates Report · Duplicate Documents Report · Inbox Processing Report · Governance Conflict Report · Archive Proposal Report · **Autonomie Level Compliance Report**

-----

## OPERATIONELE BUILD-VOLGORDE

1. **Stap 0 — Definitielaag:** `DOCUMENT_STANDARDS.md` + `TEMPLATE_REGISTER.md` bouwen en vullen (inclusief autonomie levels); canonieke locaties vastleggen.
1. **Workflow 1 — TEMPLATE CHECK** draaien tegen het gevulde register.
1. **Workflow 2 — 00_INBOX** (VAULT-voorstel; FLOW-uitvoering zodra FLOW’s eerste scenario staat).
1. **Workflows 3–5** volgen.

-----

OPEN BESLISPUNTEN (vóór lock)
	1.	Archief-naming — drift te resolven. Er bestaan nu drie vormen: 07_ ARCHIVE (systeemroot OS_CUSTOMMADE, met spatie, via ID-lookup afgehandeld), 99_ARCHIEF (per-project, JayKoppig-structuur), en 99_ARCHIVE (Engels, in dit playbook-concept — drift). Aanbeveling: Engelse 99_ARCHIVE schrappen; 99_ARCHIEF als canonieke vorm voor per-project/case-archief, 07_ ARCHIVE blijft de bestaande systeemroot-archiefmap. → Bevestiging Sophia nodig.
	2.	VAULT_LOG locatie. Voorstel: Google Sheet in Drive, beschrijfbaar door CM FLOW (Make). Alternatief: ClickUp-lijst. → te bevestigen.
	3.	AS_BUILT locatie. Voorstel: AS_BUILT.md in GitHub. → te bevestigen.
	4.	Bestaan TEMPLATE_REGISTER.md / DOCUMENT_STANDARDS.md al in de repo? Bepaalt of Stap 0 “bouwen” of “aanvullen” is.
