# TEMPLATE_STATUS_REGISTER
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Owner Agent

CM VAULT AGENT

## Support Agents

CM CONTROL AGENT

## Doel

Centraal statusregister voor de CM Template Library. Dit register ondersteunt review, governance en agent-ready navigatie.

## Statusdefinities

| Status | Betekenis | Gebruik |
| --- | --- | --- |
| ACTIVE | Goedgekeurd voor operationeel gebruik | Agents mogen kopiëren of gebruiken volgens workflow |
| DRAFT | In opbouw, niet leidend | Alleen gebruiken na expliciete approval |
| NEEDS_REVIEW | Inhoud moet worden gecontroleerd | Niet client-facing gebruiken zonder approval |
| DEPRECATED | Vervangen of buiten gebruik | Niet gebruiken voor nieuwe cases |

## Register

| Template naam | Domein | Status | Owner Agent | Laatste review | Volgende review | Opmerking |
| --- | --- | --- | --- | --- | --- | --- |
| CLIENT_PROFILE_TEMPLATE | Shared Services | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| CLIENT_ONBOARDING_TEMPLATE | Shared Services | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| EMAIL_INSTRUCTIONS_TEMPLATE | Gmail Templates | ACTIVE | CM SOCIAL AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DO_NOTS_TEMPLATE | Shared Services | ACTIVE | CM CONTROL AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| BRAND_AUDIT_TEMPLATE | Artist Management | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| BUSINESS_AUDIT_TEMPLATE | Artist Management | ACTIVE | CM MONEY AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| ARTIST_ROADMAP_TEMPLATE | Artist Management | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MONTHLY_REPORT_TEMPLATE | Reporting | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MEETING_RECAP_TEMPLATE | Shared Services | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| RELEASE_STRATEGY_TEMPLATE | Artist Management | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| RELEASE_KICKOFF_TEMPLATE | Artist Management | ACTIVE | CM OPS AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DEAL_MEMO_TEMPLATE | Master Boutique | ACTIVE | CM PROSPECT AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| PARTNERSHIP_BRIEF_TEMPLATE | Master Boutique | ACTIVE | CM PROSPECT AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MUSIC_RIGHTS_REGISTER | Master Boutique | ACTIVE | CM LEGAL AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| ACTION_TRACKER_CLICKUP_REFERENCE | ClickUp References | ACTIVE | CM FLOW AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DEAL_PIPELINE_CLICKUP_REFERENCE | ClickUp References | ACTIVE | CM PROSPECT AGENT | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| START_HIER_04_DEALS_TEMPLATE | Start Hier | ACTIVE | CM LEGAL AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor dealdossiers |
| START_HIER_05_OPERATIONS_TEMPLATE | Start Hier | ACTIVE | CM CONTROL AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor 05_OPERATIONS |
| START_HIER_06_FINANCE_TEMPLATE | Start Hier | ACTIVE | CM MONEY AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor 06_FINANCE |
| START_HIER_07_LEGAL_TEMPLATE | Start Hier | ACTIVE | CM LEGAL AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor 07_LEGAL |
| START_HIER_08_MARKETING_TEMPLATE | Start Hier | ACTIVE | CM SOCIAL AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor 08_MARKETING |
| START_HIER_09_CONTENT_TEMPLATE | Start Hier | ACTIVE | CM SOCIAL AGENT | 2026-07-26 | 2026-10-26 | START_HIER voor 09_CONTENT |

## Onderhoudsregel

Wijzig dit register altijd samen met `00_TEMPLATE_INDEX.md` wanneer status, eigenaar, reviewdatum of reviewritme verandert.
