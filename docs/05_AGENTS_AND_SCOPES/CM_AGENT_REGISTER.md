# CM Agent Register

## Doel

Dit register legt vast welke CM-agents verantwoordelijk zijn voor welke domeinen, mappen, templates en workflows. Agentnamen blijven Engels; beschrijvingen en governance staan in het Nederlands.

## Leidende regels

- `info@custommade.agency` is de leidende mailbox voor intake, communicatie en opvolging.
- Ondertekening loopt via Google Sheets, PDF en e-mail.
- Moneybird is alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten.
- Make heeft op dit moment 0 scenario's en is nog in te richten.
- Canva heeft op dit moment nog geen Brand Kit en is nog te bouwen.
- Templates worden beheerd via `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`.
- Master-templates staan in `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES` en mogen uitsluitend door `CM VAULT AGENT` worden gewijzigd.

## Agentoverzicht

| Agent | Primaire verantwoordelijkheid | Primaire mappen | Template-eigenaarschap |
|---|---|---|---|
| `CM OPS AGENT` | Client onboarding, artist intake, roadmaps, audits, releaseplanning, reporting en meeting follow-up. | `02_ARTIST_MANAGEMENT`, `03_CLIENTS` | Gebruikt OPS-templates; wijzigt geen master-templates. |
| `CM LEGAL AGENT` | Deals, rechten, contracten, NDA's, licensing, sync, publishing en legal review. | `04_DEALS`, `07_LEGAL` | Gebruikt LEGAL-templates; beheert inhoudelijke legal/deal review. |
| `CM PROSPECT AGENT` | Partnerships, leads, buyer research en seller research. | `01_MASTER_BOUTIQUE`, `08_MARKETING` | Gebruikt prospect-templates; wijzigt geen master-templates. |
| `CM SOCIAL AGENT` | Contentplanning, social publishing, website-updates en case studies. | `08_MARKETING`, `09_CONTENT` | Gebruikt social-templates; wijzigt geen master-templates. |
| `CM FLOW AGENT` | Workflow design, automation design en systeemdocumentatie. | `05_OPERATIONS` | Gebruikt flow-templates; Make is nog in te richten. |
| `CM VAULT AGENT` | SOPs, prompts, playbooks, governance-updates en master-templatebeheer. | `00_ADMIN`, `05_OPERATIONS`, `docs/03_SHARED_SERVICES/TEMPLATES` | Enige agent die master-templates mag wijzigen. |

## Legal- en dealafbakening

`DEALS` valt onder `CM LEGAL AGENT`.

`04_DEALS` en `07_LEGAL` blijven aparte mappen:

- `04_DEALS` is de operationele map voor dealdossiers, rechtenregisters, deal memo's, onderhandelingen, waardering, buyer packages en dealbewijs.
- `07_LEGAL` is de map voor generieke legal governance, contracttemplates, NDA's, juridische standaarddocumentatie en legal referentiemateriaal.

Beide mappen vallen inhoudelijk onder `CM LEGAL AGENT`, zodat dealdocumentatie en juridische review niet uit elkaar lopen.

## Templatekoppeling per agent

De volledige template mapping staat in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`. Dit agentregister verwijst naar dat register als leidende bron voor:

- masterlocatie;
- outputlocatie;
- verplichte template-status;
- workflow per template;
- eigenaar per agent.

## Systeemstatus per tool

| Tool | Status | Governance-regel |
|---|---|---|
| Gmail | Actief | `info@custommade.agency` is leidend. |
| Google Sheets | Actief | Mag worden gebruikt voor ondertekening, registraties en operationele tracking wanneer template-governance is gevolgd. |
| PDF | Actief | Geldige onderteken- en leesversie naast Google Sheets en e-mail. |
| E-mail | Actief | Geldige onderteken- en communicatieflow via de leidende mailbox. |
| Moneybird | Actief | Alleen financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. |
| Make | Nog in te richten | 0 scenario's actief; geen automation als production-ready beschouwen. |
| Canva | Nog te bouwen | Geen Brand Kit actief; branding-assets niet als gestandaardiseerd beschouwen. |
