# TEMPLATE_STATUS_REGISTER

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
| CLIENT_PROFILE_TEMPLATE | Shared Services | ACTIVE | Client Success Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| CLIENT_ONBOARDING_TEMPLATE | Shared Services | ACTIVE | Client Success Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| EMAIL_INSTRUCTIONS_TEMPLATE | Gmail Templates | ACTIVE | Communication Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DO_NOTS_TEMPLATE | Shared Services | ACTIVE | Governance Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| BRAND_AUDIT_TEMPLATE | Artist Management | ACTIVE | Artist Management Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| BUSINESS_AUDIT_TEMPLATE | Artist Management | ACTIVE | Business Strategy Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| ARTIST_ROADMAP_TEMPLATE | Artist Management | ACTIVE | Artist Management Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MONTHLY_REPORT_TEMPLATE | Reporting | ACTIVE | Reporting Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MEETING_RECAP_TEMPLATE | Shared Services | ACTIVE | Client Success Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| RELEASE_STRATEGY_TEMPLATE | Artist Management | ACTIVE | Release Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| RELEASE_KICKOFF_TEMPLATE | Artist Management | ACTIVE | Release Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DEAL_MEMO_TEMPLATE | Master Boutique | ACTIVE | Master Boutique Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| PARTNERSHIP_BRIEF_TEMPLATE | Master Boutique | ACTIVE | Partnership Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| MUSIC_RIGHTS_REGISTER | Master Boutique | ACTIVE | Rights Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| ACTION_TRACKER_CLICKUP_REFERENCE | ClickUp References | ACTIVE | ClickUp Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |
| DEAL_PIPELINE_CLICKUP_REFERENCE | ClickUp References | ACTIVE | Deal Agent | 2026-07-01 | 2026-10-01 | Eerste centrale specificatie |

## Onderhoudsregel

Wijzig dit register altijd samen met `00_TEMPLATE_INDEX.md` wanneer status, eigenaar, reviewdatum of reviewritme verandert.
