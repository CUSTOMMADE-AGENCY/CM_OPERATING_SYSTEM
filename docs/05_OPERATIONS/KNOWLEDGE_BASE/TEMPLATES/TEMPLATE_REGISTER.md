# TEMPLATE REGISTER
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Owner Agent

CM VAULT AGENT

## Support Agents

CM CONTROL AGENT

## DOEL

Dit register is de operationele template mapping voor Custommade Agency. Het beschrijft welke templatebron leidend is, waar de werkbare kopie hoort te landen en welke agent of eigenaar verantwoordelijk is voor beheer en review.

## GOVERNANCE

| Onderwerp | Regel |
| --- | --- |
| Taal | Alle interne template-instructies zijn in professioneel Nederlands. Agentnamen blijven Engels. |
| Source of truth | GitHub bewaart de schone templatebron onder `docs/03_SHARED_SERVICES/TEMPLATES/`. |
| Operationele kopieën | Ingevulde versies worden opgeslagen in Google Drive, ClickUp, Gmail of Google Sheets/PDF/e-mail, afhankelijk van het proces. |
| Ondertekening | Ondertekening loopt via Google Sheets/PDF/e-mail. Er wordt geen extern ondertekenplatform opgenomen in de huidige template mapping. |
| Mailbox | `info@custommade.agency` is de leidende mailbox voor centrale externe communicatie en templatebeheer in Gmail. |
| Moneybird | Moneybird is alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten; eigenaar is CM MONEY AGENT. |
| Make | Make heeft 1 gedocumenteerd scenario: CM VAULT V1. Status: INACTIEF / TEST REQUIRED. Niet live totdat testlog, fallback en CM CONTROL approval zijn vastgelegd. |
| Canva | Canva heeft nog geen Brand Kit en staat in deze mapping als `nog te bouwen`. |
| Deals | Deal legal, contracts en approvals vallen onder CM LEGAL AGENT. Deal memo, partnership, pipeline en outreach vallen onder CM PROSPECT AGENT. |

## TEMPLATE MAPPING

| Templatebron | Toepassing | Primaire eigenaar | Operationele output | Systeem of kanaal | Status |
| --- | --- | --- | --- | --- | --- |
| `CLIENT_PROFILE_TEMPLATE.md` | Clientcontext, Scope, rollen, doelen en contactgegevens vastleggen. | CM OPS AGENT | Kopie in `01_ADMIN` van het relevante client- of artistdossier. | Google Drive en ClickUp-link | Goedgekeurd |
| `CLIENT_ONBOARDING_TEMPLATE.md` | Onboardingcheck voor contract, betaling, finance-check, Drive, ClickUp, kick-off en assets. | CM OPS AGENT met finance-check door CM MONEY AGENT | Onboardingdocument, bijbehorende ClickUp-taken en finance-output naar `06_FINANCE` wanneer betaling, BTW, Open Posten of Cashflow geraakt wordt. | Google Drive en ClickUp | Goedgekeurd |
| `EMAIL_INSTRUCTIONS_TEMPLATE.md` | Tone of Voice, CTA's, attachments, escalatie en communicatieregels vastleggen. | CM OPS AGENT | Communicatie-instructie voor team, freelancers, interns en AI-agents. | Gmail via `info@custommade.agency` en ClickUp | Goedgekeurd |
| `DO_NOTS_TEMPLATE.md` | Verboden acties, approvals, deal restrictions en escalatiecontacts vastleggen. | CM CONTROL AGENT | Risicoregister of instructie in het relevante dossier. | Google Drive en ClickUp | Goedgekeurd |
| `EMAIL_TEMPLATES.md` | Reusable e-mailflows en standaardantwoorden beheren. | CM OPS AGENT | Gmail-template of conceptmail. | Gmail via `info@custommade.agency` | Goedgekeurd |
| `GMAIL_TEMPLATES.md` | Gmail-templatecatalogus en communicatiedoeleinden beheren. | CM OPS AGENT | Gmail-templatecatalogus. | Gmail via `info@custommade.agency` | Goedgekeurd |
| `ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | Artist onboarding structureren. | CM OPS AGENT | Artist onboardingdocument in `01_ADMIN`. | Google Drive en ClickUp | Goedgekeurd |
| `ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | Brand Audit voor artistpositionering en risico's uitvoeren. | CM OPS AGENT | Auditdocument in `03_STRATEGY`. | Google Drive en ClickUp | Goedgekeurd |
| `ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | Artist roadmap, milestones, KPI's en dependencies plannen. | CM OPS AGENT | Roadmap in `03_STRATEGY`. | Google Drive en ClickUp | Goedgekeurd |
| `ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | Releasestrategie, planning, budget en approvals vastleggen. | CM OPS AGENT | Release strategy in `04_RELEASES`. | Google Drive en ClickUp | Goedgekeurd |
| `ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | Maandelijkse managementupdates en actiepunten structureren. | CM OPS AGENT | Monthly management report. | Google Drive en ClickUp | Goedgekeurd |
| `CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md` | Client-facing artist audit opleveren. | CM OPS AGENT | PDF of documentdeliverable. | Google Drive en e-mail | Goedgekeurd |
| `CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | Business audit en verbeterpunten opleveren. | CM OPS AGENT | PDF of documentdeliverable. | Google Drive en e-mail | Goedgekeurd |
| `CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | Rights audit en rechtenrisico's vastleggen. | CM LEGAL AGENT | Rights audit in deal-, artist- of legalcontext. | Google Drive | Goedgekeurd |
| `CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md` | Client-facing release strategy opleveren. | CM OPS AGENT | PDF of documentdeliverable. | Google Drive en e-mail | Goedgekeurd |
| `CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md` | Client-facing roadmap opleveren. | CM OPS AGENT | PDF of documentdeliverable. | Google Drive en e-mail | Goedgekeurd |
| `CLIENT_DELIVERABLES/MONTHLY_REPORT_TEMPLATE.md` | Maandrapportage voor clients opleveren. | CM OPS AGENT | PDF of documentdeliverable. | Google Drive en e-mail | Goedgekeurd |
| `CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md` | Management proposal structureren. | CM PROSPECT AGENT | Proposal-PDF en e-mail. | Google Drive en e-mail | Goedgekeurd |
| `CLICKUP/*` | ClickUp task templates en setup-instructies. | CM FLOW AGENT | Taken, lists en reusable ClickUp-structuren. | ClickUp | Goedgekeurd |
| Make scenario templates | Automatiseringsscenario's. | CM FLOW AGENT | Geen actieve scenario-output. | Make | Make heeft 1 gedocumenteerd scenario: CM VAULT V1. Status: INACTIEF / TEST REQUIRED. Niet live totdat testlog, fallback en CM CONTROL approval zijn vastgelegd. |
| Canva Brand Kit templates | Brand assets, visuele formats en huisstijlbouw. | CM SOCIAL AGENT | Nog geen Brand Kit-output. | Canva | Nog te bouwen: Canva heeft nog geen Brand Kit. |
| Ondertekening templates | Ondertekenbare documenten en approvals. | CM LEGAL AGENT | PDF en e-mailthread met akkoord of ondertekening. | Google Sheets/PDF/e-mail | Goedgekeurd via Google Sheets/PDF/e-mail. |
| Moneybird finance templates | Facturen, bonnen, kwitanties, BTW-signalen, Open Posten en Cashflow-input. | CM MONEY AGENT | Financieel document, Moneybird-referentie of finance-signaal. | Moneybird en `06_FINANCE` | Goedgekeurd binnen finance-scope. |
| `08_START_HIER/START_HIER_04_DEALS_TEMPLATE.md` | Startdocument voor een dealdossier. | CM LEGAL AGENT | Startkopie in `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER`. | Google Drive | Goedgekeurd |
| `08_START_HIER/START_HIER_05_OPERATIONS_TEMPLATE.md` | Startdocument voor de operationele werklaag. | CM CONTROL AGENT | Startkopie in `05_OPERATIONS/00_START_HIER`. | Google Drive | Goedgekeurd |
| `08_START_HIER/START_HIER_06_FINANCE_TEMPLATE.md` | Startdocument voor de finance-werklaag. | CM MONEY AGENT | Startkopie in `06_FINANCE/00_START_HIER`. | Google Drive | Goedgekeurd |
| `08_START_HIER/START_HIER_07_LEGAL_TEMPLATE.md` | Startdocument voor de juridische werklaag. | CM LEGAL AGENT | Startkopie in `07_LEGAL/00_START_HIER`. | Google Drive | Goedgekeurd |
| `08_START_HIER/START_HIER_08_MARKETING_TEMPLATE.md` | Startdocument voor de marketingwerklaag. | CM SOCIAL AGENT | Startkopie in `08_MARKETING/00_START_HIER`. | Google Drive | Goedgekeurd |
| `08_START_HIER/START_HIER_09_CONTENT_TEMPLATE.md` | Startdocument voor de contentwerklaag. | CM SOCIAL AGENT | Startkopie in `09_CONTENT/00_START_HIER`. | Google Drive | Goedgekeurd |

## MAP- EN AGENTREGELS

| Domein | Regel | Agent |
| --- | --- | --- |
| `04_DEALS` | Operationele dealdossiers, rechtenbewijs, waardering en buyer-facing dealmateriaal. | CM LEGAL AGENT |
| `07_LEGAL` | Generieke legal governance, contracttemplates, juridische bewijsstukken en legal reviewdossiers. | CM LEGAL AGENT |
| `03_SHARED_SERVICES/TEMPLATES` | Templatebron en template governance. | CM VAULT AGENT |
| Gmail | Centrale mailbox en templates worden beheerd vanuit `info@custommade.agency`. | CM OPS AGENT |
| `06_FINANCE` | Finance-output, Moneybird-referenties, BTW, Open Posten en Cashflow-signalen vallen onder CM MONEY AGENT. | CM MONEY AGENT |
| Make | Make heeft 1 gedocumenteerd scenario: CM VAULT V1. Status: INACTIEF / TEST REQUIRED. Niet live totdat testlog, fallback en CM CONTROL approval zijn vastgelegd. | CM FLOW AGENT |
| Canva | Brand Kit ontbreekt nog; visuele templatebasis is nog te bouwen. | CM SOCIAL AGENT |

## REVIEWRITME

- Review dit register minimaal per kwartaal.
- Werk dit register direct bij bij wijzigingen in templatebron, tooling, ondertekening, mailboxgebruik, finance-scope of agenteigenaarschap.
- Nieuwe templates mogen pas operationeel worden gebruikt nadat eigenaar, outputlocatie, status en reviewritme zijn vastgelegd.
