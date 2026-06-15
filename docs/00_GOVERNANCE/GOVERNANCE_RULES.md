# Governance-regels

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

1. Controleer vóór het aanmaken van nieuwe bestanden altijd eerst de goedgekeurde templatebron: `docs/03_SHARED_SERVICES/TEMPLATES/`.
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
9. Duplicate template-locaties zijn niet toegestaan. Operationele templates worden uitsluitend beheerd onder `docs/03_SHARED_SERVICES/TEMPLATES/`.
10. Drive mag werkbare kopieën bevatten, maar GitHub blijft de schone source of truth voor template-governance, SOPs, Playbooks en systeemdocumentatie.

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
6. Drive = opslag.
7. ClickUp = uitvoering.
8. Moneybird = financiële waarheid.
9. GitHub = governance, SOPs, Playbooks, template source of truth en systeemdocumentatie.
10. FIERCE en Custommade Agency blijven strikt gescheiden. Gebruik nooit FIERCE-governance, FIERCE-templates of FIERCE-mappen binnen Custommade Agency.

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
7. er geen vermenging is met FIERCE of andere entiteiten.