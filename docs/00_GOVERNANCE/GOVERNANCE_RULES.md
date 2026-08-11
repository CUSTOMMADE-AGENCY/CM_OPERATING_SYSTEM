# Governance-regels

## Leidende beslissingen

De leidende governance voor CM_OS staat in:

- `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
- `docs/00_GOVERNANCE/DECISION_LOG.md`

Bij conflict geldt de Governance Prioriteit:

1. `DECISION_LOG.md`
2. `CM_OS_LOCKED_DECISIONS_*`
3. `GOVERNANCE_RULES.md`
4. `AUDIT_REPORTS`
5. `README`
6. AI-aanbevelingen

Geen AI-agent mag governance wijzigen zonder eerst `DECISION_LOG.md` te controleren.

## Systeemrollen

- GitHub = governance/source of truth
- Google Drive = opslag
- ClickUp = uitvoering
- Moneybird = financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten
- Gmail = communicatie; `info@custommade.agency` is de leidende mailbox
- ChatGPT/Claude/Codex = analyse en verbetering
- Ondertekening = Google Sheets/PDF/e-mail
- Make = automatiseringslaag. Make heeft 1 gedocumenteerd scenario: CM VAULT V1. Status: INACTIEF / TEST REQUIRED. Niet live totdat testlog, fallback en CM CONTROL approval zijn vastgelegd.
- Canva = visuele tooling, maar de Brand Kit is nog te bouwen

## PDF Governance

Alle operationele rapporten moeten bestaan als:

- `Bestandsnaam.md`
- `Bestandsnaam.pdf`

PDF is de primaire leesversie voor Sophia. Het `.md`-bestand blijft het bronbestand.

PDF Governance is verplicht voor:

- README
- TEMPLATE_USAGE_REPORT
- TEMPLATE_GAP_LOG
- RESTRUCTURE_REPORT
- FINAL_CLEANUP_REPORT
- AUDIT_REPORT
- GOVERNANCE_REPORT

## Doel

Deze regels beschermen het operating system van Custommade Agency Int. B.V. tegen ongecontroleerde bestandsdumping. GitHub is de gestructureerde source of truth voor hoe de business draait.

## Repository-regels

1. GitHub bevat uitsluitend Workflows, Governance, SOPs, Playbooks en systeemdocumentatie.
2. Google Drive bevat live clientmappen, getekende documenten, deliverables en bestanden.
3. ClickUp bevat uitvoering, Pipeline en taken.
4. Gmail bevat communicatietemplates en correspondentie.
5. Commit geen vertrouwelijke clientinformatie.
6. Commit geen getekende contracten.
7. Maak geen dubbele mappen voor hetzelfde proces.
8. Gebruik geen `final_final`-naamgeving.
9. Elk document moet een duidelijke eigenaar, doel en toepassingsgebied hebben.
10. Wijzigingen in processen moeten via commits en review verlopen.

## Verplichte template-governance

Voor elk nieuw CM-project, clientdossier, dealdossier, catalog-sale dossier, artist-management dossier, buyer package, Data Room, Pipeline of AI-agent output geldt: bestaande CM-templates zijn leidend.

1. Controleer vóór het aanmaken van nieuwe bestanden altijd eerst de goedgekeurde templatebron: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/`.
2. Maak geen nieuwe losse spreadsheets, trackers, briefs, registers of dealdocumenten wanneer er al een bestaand CM-template voor hetzelfde doel bestaat.
3. Gebruik bestaande templates door ze te kopiëren naar de operationele projectmap in Google Drive en ze case-specifiek te hernoemen.
4. Nieuwe templates mogen alleen worden aangemaakt als er aantoonbaar geen passend bestaand template is.
5. Wanneer een bestaand template tekortschiet, maak dan geen vervangend eigen format. Leg de afwijking vast in `TEMPLATE_GAP_LOG.md`.
6. Elke projectmap die door een AI-agent, automation of externe tool wordt aangemaakt, moet een `TEMPLATE_USAGE_REPORT.md` bevatten.
7. `TEMPLATE_USAGE_REPORT.md` vermeldt minimaal:
   - welke bestaande templates zijn geraadpleegd;
   - welke templates zijn gekopieerd;
   - welke templates niet relevant waren;
   - welke nieuwe bestanden zijn aangemaakt;
   - waarom nieuwe bestanden nodig waren;
   - welke governance-afwijkingen of template-gaps zijn geconstateerd.
8. Template-afwijkingen moeten worden teruggekoppeld naar GitHub zodat de bron-template kan worden verbeterd in plaats van dat er parallelle formats ontstaan.
9. Duplicate template-locaties zijn niet toegestaan. Operationele templates worden uitsluitend beheerd onder `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/`.
10. Drive mag werkbare kopieën bevatten, maar GitHub blijft de schone source of truth voor template-governance, SOPs, Playbooks en systeemdocumentatie.

## Lean Nederlandse Drive-structuur voor CM-cases

Nieuwe operationele Google Drive-projectmappen binnen Custommade Agency starten lean, Nederlandstalig en overzichtelijk. Een AI-agent, automation of externe tool mag niet standaard tien Engelse dataroom-mappen aanmaken wanneer de case nog in intake-, document request-, rights verification- of vroege verkoopfase zit.

### Standaardstructuur voor CM PROSPECT / Master Boutique cases

Voor catalog sale, master resale, rights brokerage, buyer prospecting en CM PROSPECT-cases is de standaard Drive-structuur:

```text
00_START_HIER
01_RECHTEN_REGISTER
02_CONTRACTEN_BEWIJS
03_WAARDERING_VERKOOPPAKKET
04_OUTREACH_CLICKUP
99_ARCHIEF
```

### Betekenis per map

| Map | Functie |
|---|---|
| `00_START_HIER` | README, status, instructies, document request, governance-rapporten, template usage en gap logs. |
| `01_RECHTEN_REGISTER` | Tracklist, ISRC's, master ownership, publishing splits, royalty statements index, catalog data, streamingdata en rights register. |
| `02_CONTRACTEN_BEWIJS` | Chain of title, producer agreements, feature agreements, distributor agreements, verkoopakkoorden, approvals, claims en juridisch bewijs. |
| `03_WAARDERING_VERKOOPPAKKET` | Valuation, Deal Memo, Buyer Package, Data Room samenvatting, final export en buyer-facing verkoopmateriaal. |
| `04_OUTREACH_CLICKUP` | Buyer lead list, outreach-notities, ClickUp-referenties en opvolging. Uitvoering blijft in ClickUp; Drive bevat alleen referentie en opslag. |
| `99_ARCHIEF` | Superseded bestanden, oude ad-hoc sheets, exports en bestanden die niet meer leidend zijn. |

### Volledigheid binnen lean structuur

Lean betekent minder mappen, niet minder inhoud. Alle due-diligence onderdelen blijven verplicht, maar worden gebundeld in logische hoofdmappen.

Voor master resale / catalog sale moeten minimaal vindbaar zijn:

- tracklist;
- ISRC's;
- master ownership;
- publishing ownership;
- split sheets;
- chain of title;
- producer agreements;
- feature agreements;
- distributor agreements;
- recoupment-status;
- royalty statements;
- streamingdata;
- valuation;
- Deal Memo;
- Buyer Package;
- approvals van rights holders;
- claims/conflicten/openstaande afspraken;
- TEMPLATE_USAGE_REPORT;
- TEMPLATE_GAP_LOG.

### Wanneer uitbreiden naar full Data Room

Data Room-, LOI-, APA-, Closing- en Success Fee-mappen of substructuren worden pas aangemaakt wanneer een deal de due diligence fase bereikt. Concrete buyer interest of vroege outreach is daarvoor niet genoeg; tot due diligence blijft de standaard lean dealstructuur leidend.

Tot dat moment blijft de case lean. De diligence-voorbereidende inhoud zit dan functioneel verdeeld over:

- `01_RECHTEN_REGISTER` voor rechten- en catalogusdata;
- `02_CONTRACTEN_BEWIJS` voor juridisch bewijs;
- `03_WAARDERING_VERKOOPPAKKET` voor waardering, buyer package en final export.

### Taalregel voor Drive-mappen

Operationele Drive-mappen worden in professioneel Nederlands benoemd. Industry-termen zoals Rights Register, Deal Memo, Buyer Package, Data Room, Due Diligence, Master Rights, Publishing Rights, Neighbouring Rights, LOI en APA mogen in bestandsnamen, sheets, tabs en buyer-facing documenten blijven staan wanneer dat professioneel of marktconform is.

## Templategebruik per business lane

### 01 Master Boutique

Voor catalogus-, master-, publishing-, rechtenacquisitie-, buyer-, Data Room-, LOI-, APA- en transactieWorkflows moeten minimaal de relevante templates uit de CM-templatebron worden gecontroleerd.

Voor master resale, catalog sale en rights brokerage cases zijn in ieder geval relevant:

- `MUSIC_RIGHTS_REGISTER`
- `DEAL_MEMO_TEMPLATE`
- `DEAL_PIPELINE_CLICKUP_REFERENCE`
- `ACTION_TRACKER_CLICKUP_REFERENCE`
- relevante Data Room-, Due Diligence-, LOI-, APA- en Buyer Package templates zodra aanwezig

Een catalog-sale of master-resale case mag pas buyer-facing worden gemaakt nadat de gebruikte templates en eventuele gaps zijn vastgelegd in `TEMPLATE_USAGE_REPORT.md`.

### 02 Artist Management

Voor artist-client dossiers, management, release planning, brandpositionering, retainers en artist roadmaps moeten bestaande artist-management en client-deliverable templates worden gebruikt, waaronder waar relevant:

- `CLIENT_PROFILE_TEMPLATE`
- `BRAND_AUDIT_TEMPLATE`
- `BUSINESS_AUDIT_TEMPLATE`
- `RELEASE_STRATEGY_TEMPLATE`
- `RELEASE_KICKOFF_TEMPLATE`
- relevante rights-check en action-tracker templates

### 03 Shared Services

Shared Services beheert de templatebron en bewaakt dat templates niet versnipperen over Drive, losse exports, AI-output of clientmappen.

## AI-agent en automation regels

AI-agents, Claude, ChatGPT, Make-scenario's, Apps Scripts of andere automation tools mogen geen eigen formats introduceren zonder template-check.

Voor elke AI-agent output geldt:

1. Eerst templatebron controleren.
2. Daarna bestaande templates kopiëren en case-specifiek invullen.
3. Geen eigen kolomstructuren maken als een template al bestaat.
4. Bij ontbrekende velden een `TEMPLATE_GAP_LOG.md` aanmaken.
5. Aan het einde altijd een `TEMPLATE_USAGE_REPORT.md` opleveren.
6. Gebruik de lean Nederlandse Drive-structuur; Data Room-, LOI-, APA-, Closing- en Success Fee-mappen ontstaan pas wanneer de deal de due diligence fase bereikt.
7. Drive = opslag.
8. ClickUp = uitvoering.
9. Moneybird = financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten.
10. GitHub = governance, SOPs, Playbooks, template source of truth en systeemdocumentatie.
11. EXTERNE_ENTITEIT en Custommade Agency blijven strikt gescheiden. Gebruik nooit EXTERNE_ENTITEIT-governance, EXTERNE_ENTITEIT-templates of EXTERNE_ENTITEIT-mappen binnen Custommade Agency.



## Apps Script-governance

- `scripts/google-drive/create-cm-drive-structure.gs` is het PRIMARY script voor de approved Drive build van `OS_CUSTOMMADE`.
- `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` is uitsluitend SAFE ROOT REPAIR only en mag geen alternatieve Drive-rootstructuur introduceren.
- Scripts mogen geen Drive-content verwijderen, verplaatsen of hernoemen zonder Sophia approval.

## Tool- en ondertekeningsgovernance

- `info@custommade.agency` is de leidende mailbox voor centrale externe communicatie, Gmail-templates en opvolging.
- Ondertekening loopt via Google Sheets/PDF/e-mail. Er wordt geen extern ondertekenplatform opgenomen in de huidige CM-governance.
- Moneybird is alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten; Drive, ClickUp en Gmail mogen uitsluitend verwijzingen of bewijs bevatten.
- Make heeft 1 gedocumenteerd scenario: CM VAULT V1. Status: INACTIEF / TEST REQUIRED. Niet live totdat testlog, fallback en CM CONTROL approval zijn vastgelegd.
- Canva heeft nog geen Brand Kit. Brand Kit, brand assets en visuele templatebibliotheek blijven `nog te bouwen` totdat CM SOCIAL AGENT en CM CONTROL AGENT dit goedkeuren.
- DEALS valt onder CM LEGAL AGENT. `04_DEALS` en `07_LEGAL` blijven aparte Google Drive-mappen, maar beide vallen onder CM LEGAL AGENT.

## Taalgovernance

Alle interne documentatie wordt in professioneel Nederlands geschreven. Officiële CM-termen zoals Brand Audit, Business Audit, Data Room, Due Diligence, Success Fee, ClickUp, Google Drive, GitHub, Lead, Pipeline, Fit Check, Scope, Proposal, Onboarding, Upsell, Master Rights, Publishing Rights, Neighbouring Rights, LOI, APA, Asset, Buyer, Seller, Rights Holder, Dealflow, Workflow, Playbook, SOP, KPI en Dashboard blijven exact ongewijzigd.

## Reviewstandaard

Een document is pas klaar wanneer het actueel, vindbaar, niet-duplicatief en uitvoerbaar is. Als een proces verandert, moeten de relevante SOP, Workflow, Playbook en systeemdocumentatie tegelijk worden bijgewerkt.

Een projectmap of AI-output is pas governance-proof wanneer:

1. het juiste business-lane toepassingsgebied duidelijk is;
2. de templatebron is gecontroleerd;
3. bestaande templates zijn gebruikt waar mogelijk;
4. afwijkingen zijn vastgelegd;
5. ontbrekende templatebehoeften zijn teruggekoppeld naar GitHub;
6. de output overdraagbaar is naar ClickUp voor uitvoering;
7. de lean Nederlandse Drive-structuur wordt gebruikt zolang de deal de due diligence fase niet heeft bereikt;
8. er geen vermenging is met EXTERNE_ENTITEIT of andere entiteiten.
