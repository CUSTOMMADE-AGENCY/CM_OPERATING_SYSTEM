> **Historische status:** `HISTORISCH — NIET UITVOEREN`
> **Actuele opvolger:** `docs/00_GOVERNANCE/HISTORY/RECOVERY_REPORTS/CM_REPOSITORY_RECOVERY_PLAN.md` (templates blijven bevroren tot een expliciet goedgekeurde latere fase)
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# TEMPLATE MIGRATION PLAN

## Doel en scope

Dit migratieplan inventariseert alle repositorybestanden die als template zijn aangemerkt op basis van bestandsnaam en/of template-registerverwijzing. Dit plan verplaatst niets, verwijdert niets en legt alleen de beoogde toekomstige masterlocatie vast binnen `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES`.

## Bronnen gecontroleerd

- `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md`
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- Repository-scan op bestandsnamen met `template`.

## Migratie-afspraken

| Regel | Toepassing |
| --- | --- |
| Nieuwe masterlocatie | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES` |
| GitHub-actie in deze wijziging | Alleen dit migratieplan toegevoegd. |
| Drive-actie in deze wijziging | Geen. |
| Verplaatsen/verwijderen | Niet uitgevoerd. |
| Outputlocatie | Overgenomen uit `TEMPLATE_REGISTER.md` waar expliciet aanwezig; anders afgeleid uit domein/registerregels. |

## Template migratiematrix

| Template | Huidige locatie | Nieuwe locatie binnen `00_ADMIN/03_TEMPLATES` | Eigenaar-agent | Outputlocatie volgens `TEMPLATE_REGISTER.md` | Opmerking |
| --- | --- | --- | --- | --- | --- |
| CLIENT_PROFILE_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | CM OPS AGENT | Kopie in `01_ADMIN` van het relevante client- of artistdossier; Google Drive en ClickUp-link. | Geregistreerd en goedgekeurd. |
| CLIENT_ONBOARDING_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md` | CM OPS AGENT | Onboardingdocument en bijbehorende ClickUp-taken; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| EMAIL_INSTRUCTIONS_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | CM OPS AGENT | Communicatie-instructie voor team, freelancers, interns en AI-agents; Gmail via `info@custommade.agency` en ClickUp. | Geregistreerd en goedgekeurd. |
| DO_NOTS_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/DO_NOTS_TEMPLATE.md` | CM CONTROL AGENT | Risicoregister of instructie in het relevante dossier; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| EMAIL_TEMPLATES.md | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_TEMPLATES.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/EMAIL_TEMPLATES.md` | CM OPS AGENT | Gmail-template of conceptmail via `info@custommade.agency`. | Geregistreerd en goedgekeurd. |
| GMAIL_TEMPLATES.md | `docs/03_SHARED_SERVICES/TEMPLATES/GMAIL_TEMPLATES.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/GMAIL_TEMPLATES.md` | CM OPS AGENT | Gmail-templatecatalogus via `info@custommade.agency`. | Geregistreerd en goedgekeurd. |
| ARTIST_ONBOARDING_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | CM OPS AGENT | Artist onboardingdocument in `01_ADMIN`; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| BRAND_AUDIT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | CM OPS AGENT | Auditdocument in `03_STRATEGY`; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| ROADMAP_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | CM OPS AGENT | Roadmap in `03_STRATEGY`; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| RELEASE_STRATEGY_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | CM OPS AGENT | Release strategy in `04_RELEASES`; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| MONTHLY_MANAGEMENT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | CM OPS AGENT | Monthly management report; Google Drive en ClickUp. | Geregistreerd en goedgekeurd. |
| ARTIST_AUDIT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md` | CM OPS AGENT | PDF of documentdeliverable; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| BUSINESS_AUDIT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | CM OPS AGENT | PDF of documentdeliverable; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| RIGHTS_AUDIT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | CM LEGAL AGENT | Rights audit in deal-, artist- of legalcontext; Google Drive. | Geregistreerd en goedgekeurd. |
| RELEASE_STRATEGY_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md` | CM OPS AGENT | PDF of documentdeliverable; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| ARTIST_ROADMAP_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md` | CM OPS AGENT | PDF of documentdeliverable; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| MONTHLY_REPORT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MONTHLY_REPORT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/MONTHLY_REPORT_TEMPLATE.md` | CM OPS AGENT | PDF of documentdeliverable; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| MANAGEMENT_PROPOSAL_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md` | CM PROSPECT AGENT | Proposal-PDF en e-mail; Google Drive en e-mail. | Geregistreerd en goedgekeurd. |
| ARTIST_ONBOARDING_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ONBOARDING_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/ARTIST_ONBOARDING_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| BRAND_AUDIT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/BRAND_AUDIT_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| ARTIST_BRANDBOOK_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_BRANDBOOK_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/ARTIST_BRANDBOOK_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| ARTIST_ROADMAP_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ROADMAP_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/ARTIST_ROADMAP_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| RELEASE_STRATEGY_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/RELEASE_STRATEGY_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/RELEASE_STRATEGY_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| MONTHLY_MANAGEMENT_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/MONTHLY_MANAGEMENT_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/MONTHLY_MANAGEMENT_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| DEAL_NEGOTIATION_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`; inhoudelijke deals vallen in register onder CM LEGAL AGENT. |
| BRAND_PARTNERSHIP_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_PARTNERSHIP_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/BRAND_PARTNERSHIP_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| ARTIST_OFFBOARDING_TEMPLATE.md | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_OFFBOARDING_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/CLICKUP/ARTIST_OFFBOARDING_TEMPLATE.md` | CM OPS AGENT | Taken, lists en reusable ClickUp-structuren; ClickUp. | Valt onder registerregel `CLICKUP/*`. |
| DRIVE_INVENTORY_TEMPLATE.md | `docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` | `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` | Niet vastgelegd | Niet expliciet vastgelegd in `TEMPLATE_REGISTER.md`. Waarschijnlijke output: Drive-inventory export/working document binnen governance of admin review. | Templatebestand buiten templatebibliotheek; eigenaar ontbreekt. |

## Ontbrekende templates

| Template | Bron/signaal | Verwachte eigenaar-agent | Verwachte outputlocatie | Actie nodig |
| --- | --- | --- | --- | --- |
| Make scenario templates | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` noemt deze als nog in te richten. | CM FLOW AGENT | Geen actieve scenario-output; Make. | Aanmaken zodra Make-scenario's worden ontworpen. |
| Canva Brand Kit templates | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` noemt deze als nog te bouwen. | CM SOCIAL AGENT | Canva Brand Kit-output. | Aanmaken zodra Brand Kit bestaat. |
| Ondertekening templates | Register noemt een categorie, maar geen concrete templatebestanden. | CM LEGAL AGENT | Google Sheet, PDF en e-mailthread met akkoord of ondertekening. | Concrete bronbestanden vastleggen of expliciet als extern systeemtemplate labelen. |
| Moneybird finance templates | Register noemt een categorie, maar geen concrete templatebestanden. | CM OPS AGENT | Financieel document of Moneybird-referentie. | Concrete bronbestanden vastleggen of expliciet als Moneybird-only labelen. |
| DEAL_MEMO_TEMPLATE | Governance noemt dit als relevant template voor catalog/master/publishing/rechtenacquisitie. | CM LEGAL AGENT | Deal- of legalcontext; Google Drive. | Template ontbreekt als bestand en in template-registermapping. |
| RELEASE_KICKOFF_TEMPLATE | Governance noemt dit als relevante artist-client template. | CM OPS AGENT | Artist/release-dossier, vermoedelijk `04_RELEASES` en ClickUp. | Template ontbreekt als bestand en in template-registermapping. |
| Data Room templates | Governance noemt relevante Data Room-templates zodra aanwezig. | CM LEGAL AGENT | Data Room / dealdossier; Google Drive. | Templatefamilie ontbreekt als concrete bestanden. |
| Due Diligence templates | Governance noemt relevante Due Diligence-templates zodra aanwezig. | CM LEGAL AGENT | Deal- of legalcontext; Google Drive. | Templatefamilie ontbreekt als concrete bestanden. |
| LOI templates | Governance noemt relevante LOI-templates zodra aanwezig. | CM LEGAL AGENT | Deal- of legalcontext; Google Drive/e-mail. | Templatefamilie ontbreekt als concrete bestanden. |
| APA templates | Governance noemt relevante APA-templates zodra aanwezig. | CM LEGAL AGENT | Deal- of legalcontext; Google Drive/e-mail. | Templatefamilie ontbreekt als concrete bestanden. |
| Buyer Package templates | Governance noemt relevante Buyer Package-templates zodra aanwezig. | CM LEGAL AGENT | Buyer-facing dealmateriaal; Google Drive/e-mail. | Templatefamilie ontbreekt als concrete bestanden. |
| Rights-check/action-tracker templates | Governance noemt deze als relevante artist-client templates. | CM LEGAL AGENT / CM OPS AGENT | Artist-, rights- of ClickUp-dossier. | Concrete bronbestanden ontbreken. |

## Dubbele templates

| Templatenaam | Locaties | Beoordeling |
| --- | --- | --- |
| ARTIST_ONBOARDING_TEMPLATE.md | `ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md`; `CLICKUP/ARTIST_ONBOARDING_TEMPLATE.md` | Functioneel dubbel: inhoudelijke documenttemplate versus ClickUp task-template. Naam kan verwarring veroorzaken. |
| BRAND_AUDIT_TEMPLATE.md | `ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md`; `CLICKUP/BRAND_AUDIT_TEMPLATE.md` | Functioneel dubbel: inhoudelijke documenttemplate versus ClickUp task-template. Naam kan verwarring veroorzaken. |
| ARTIST_ROADMAP_TEMPLATE.md / ROADMAP_TEMPLATE.md | `CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md`; `CLICKUP/ARTIST_ROADMAP_TEMPLATE.md`; `ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | Overlappende roadmapfamilie met verschillende outputkanalen. |
| RELEASE_STRATEGY_TEMPLATE.md | `ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md`; `CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md`; `CLICKUP/RELEASE_STRATEGY_TEMPLATE.md` | Driedubbele naam/functiefamilie: interne strategie, client deliverable en ClickUp task-template. |
| MONTHLY_MANAGEMENT_TEMPLATE.md | `ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md`; `CLICKUP/MONTHLY_MANAGEMENT_TEMPLATE.md` | Functioneel dubbel: inhoudelijke documenttemplate versus ClickUp task-template. |
| TEMPLATE_REGISTER.md | `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md`; `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` | Dubbele registerlocatie; niet zelf een template, maar wel governance-risico voor eigenaar/outputwaarheid. |

## Verouderde templates

| Template/locatie | Reden | Advies |
| --- | --- | --- |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_ARTIST_BRANDBOOK_FLOW.md` | Legacy/archiefbestand; flow, geen actieve templatebron. | Niet migreren als template; archief behouden. |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_MONTHLY_MANAGEMENT_FLOW.md` | Legacy/archiefbestand; flow, geen actieve templatebron. | Niet migreren als template; archief behouden. |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_RELEASE_STRATEGY_FLOW.md` | Legacy/archiefbestand; flow, geen actieve templatebron. | Niet migreren als template; archief behouden. |
| `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md` | Verwijst naar `docs/03_SHARED_SERVICES/TEMPLATES/` als GitHub-templatebron, terwijl de master templatebibliotheek in Drive `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES` is. | Register harmoniseren met migratiebesluit; niet verwijderen. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` | Operationele mapping is actueler voor agenten, maar staat naast het hogere register. | Eén leidende registerlocatie aanwijzen na migratie. |

## Templates zonder eigenaar

| Template | Locatie | Status |
| --- | --- | --- |
| DRIVE_INVENTORY_TEMPLATE.md | `docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` | Geen expliciete eigenaar-agent in template-registermapping. |
| TEMPLATE_DESIGN_STANDARD.md | `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` | Geen templatebron maar template-governancestandaard; geen eigenaar-agent expliciet in template-registermapping. |
| Concrete Make scenario templates | Niet aanwezig als bestanden. | Categorie heeft eigenaar CM FLOW AGENT, maar concrete templates ontbreken. |
| Concrete Canva Brand Kit templates | Niet aanwezig als bestanden. | Categorie heeft eigenaar CM SOCIAL AGENT, maar concrete templates ontbreken. |
| Concrete ondertekening templates | Niet aanwezig als bestanden. | Categorie heeft eigenaar CM LEGAL AGENT, maar concrete templates ontbreken. |
| Concrete Moneybird finance templates | Niet aanwezig als bestanden. | Categorie heeft eigenaar CM OPS AGENT, maar concrete templates ontbreken. |

## Niet als template gemigreerd

| Bestand | Reden |
| --- | --- |
| `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` | Governance-/ontwerpstandaard voor templates; geen operationele template-output. |
| `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md` | Register, geen template. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` | Register, geen template. |
