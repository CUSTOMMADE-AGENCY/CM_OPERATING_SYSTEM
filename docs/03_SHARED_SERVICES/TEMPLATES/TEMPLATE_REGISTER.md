# TEMPLATE REGISTER

## DOEL

Dit register is de operationele template mapping voor Custommade Agency. Het beschrijft welke templatebron leidend is, waar de werkbare kopie hoort te landen en welke agent of eigenaar verantwoordelijk is voor beheer en review.

## GOVERNANCE

| Onderwerp | Regel |
| --- | --- |
| Taal | Alle interne template-instructies zijn in professioneel Nederlands. Agentnamen blijven Engels. |
| Source of truth | GitHub bewaart de schone templatebron onder `docs/03_SHARED_SERVICES/TEMPLATES/`. |
| Operationele kopieën | Ingevulde versies worden opgeslagen in Google Drive, ClickUp, Gmail of PDF/e-mail, afhankelijk van het proces. |
| Ondertekening | Ondertekening loopt via Google Sheets/PDF/e-mail. Er wordt geen extern ondertekenplatform opgenomen in de huidige template mapping. |
| Mailbox | `info@custommade.agency` is de leidende mailbox voor centrale externe communicatie en templatebeheer in Gmail. |
| Moneybird | Moneybird is alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. |
| Make | Make heeft nu 0 scenario's en staat in deze mapping als `nog in te richten`. |
| Canva | Canva heeft nog geen Brand Kit en staat in deze mapping als `nog te bouwen`. |
| Deals | DEALS valt onder CM LEGAL AGENT. `04_DEALS` en `07_LEGAL` blijven aparte Google Drive-mappen, maar beide vallen onder CM LEGAL AGENT. |

## TEMPLATE MAPPING

| Templatebron | Toepassing | Primaire eigenaar | Operationele output | Systeem of kanaal | Status |
| --- | --- | --- | --- | --- | --- |
| `CLIENT_PROFILE_TEMPLATE.md` | Clientcontext, Scope, rollen, doelen en contactgegevens vastleggen. | CM OPS AGENT | Kopie in `01_ADMIN` van het relevante client- of artistdossier. | Google Drive en ClickUp-link | Goedgekeurd |
| `CLIENT_ONBOARDING_TEMPLATE.md` | Onboardingcheck voor contract, betaling, Drive, ClickUp, kick-off en assets. | CM OPS AGENT | Onboardingdocument en bijbehorende ClickUp-taken. | Google Drive en ClickUp | Goedgekeurd |
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
| `CLICKUP/*` | ClickUp task templates en setup-instructies. | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren. | ClickUp | Goedgekeurd |
| Make scenario templates | Automatiseringsscenario's. | CM FLOW AGENT | Geen actieve scenario-output. | Make | Nog in te richten: Make heeft nu 0 scenario's. |
| Canva Brand Kit templates | Brand assets, visuele formats en huisstijlbouw. | CM SOCIAL AGENT | Nog geen Brand Kit-output. | Canva | Nog te bouwen: Canva heeft nog geen Brand Kit. |
| Ondertekening templates | Ondertekenbare documenten en approvals. | CM LEGAL AGENT | Google Sheet, PDF en e-mailthread met akkoord of ondertekening. | Google Sheets/PDF/e-mail | Goedgekeurd via Google Sheets/PDF/e-mail. |
| Moneybird finance templates | Facturen, bonnen, kwitanties en financiële documenten. | CM OPS AGENT | Financieel document of Moneybird-referentie. | Moneybird | Goedgekeurd binnen finance-scope. |

## MAP- EN AGENTREGELS

| Domein | Regel | Agent |
| --- | --- | --- |
| `04_DEALS` | Operationele dealdossiers, rechtenbewijs, waardering en buyer-facing dealmateriaal. | CM LEGAL AGENT |
| `07_LEGAL` | Generieke legal governance, contracttemplates, juridische bewijsstukken en legal reviewdossiers. | CM LEGAL AGENT |
| `03_SHARED_SERVICES/TEMPLATES` | Templatebron en template governance. | CM VAULT AGENT |
| Gmail | Centrale mailbox en templates worden beheerd vanuit `info@custommade.agency`. | CM OPS AGENT |
| Make | Automatiseringen staan nog niet live; scenario's zijn nog in te richten. | CM FLOW AGENT |
| Canva | Brand Kit ontbreekt nog; visuele templatebasis is nog te bouwen. | CM SOCIAL AGENT |

## REVIEWRITME

- Review dit register minimaal per kwartaal.
- Werk dit register direct bij bij wijzigingen in templatebron, tooling, ondertekening, mailboxgebruik, finance-scope of agenteigenaarschap.
- Nieuwe templates mogen pas operationeel worden gebruikt nadat eigenaar, outputlocatie, status en reviewritme zijn vastgelegd.
