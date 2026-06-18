# Template Register

## Doel

Dit register beschrijft:

- welke templates bestaan;
- waar de master-template wordt opgeslagen;
- waar de output wordt opgeslagen;
- welke agent eigenaar is;
- welke workflow wordt gestart.

De master-template wordt altijd beheerd vanuit:

```text
00_ADMIN
└── 03_TEMPLATES
```

De output wordt opgeslagen in de operationele map.

## CM OPS AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `CLIENT_ONBOARDING_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `03_CLIENTS/[CLIENT]/01_ADMIN` | Ja | Client Onboarding |
| `CLIENT_PROFILE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/01_ROSTER/[CLIENT]` | Ja | Client Intake |
| `ARTIST_ROADMAP_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/05_ROADMAPS` | Ja | Roadmap Planning |
| `BRAND_AUDIT_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/04_BUSINESS_AUDITS` | Ja | Brand Audit |
| `BUSINESS_AUDIT_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/04_BUSINESS_AUDITS` | Ja | Business Audit |
| `RELEASE_KICKOFF_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/03_RELEASE_STRATEGY` | Ja | Release Kickoff |
| `RELEASE_STRATEGY_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/03_RELEASE_STRATEGY` | Ja | Release Strategy |
| `MONTHLY_REPORT_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `02_ARTIST_MANAGEMENT/08_REPORTING` | Ja | Monthly Reporting |
| `MEETING_RECAP_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `03_CLIENTS/[CLIENT]/07_REPORTING` | Ja | Meeting Follow-Up |

## CM LEGAL AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `DEAL_MEMO_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `04_DEALS/05_NEGOTIATIONS` | Ja | Deal Review |
| `MUSIC_RIGHTS_REGISTER` | `00_ADMIN/03_TEMPLATES` | `04_DEALS/01_RIGHTS_REGISTER` | Ja | Rights Audit |
| `NDA_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `07_LEGAL/04_NDA` | Ja | NDA Workflow |
| `MANAGEMENT_AGREEMENT_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `07_LEGAL/01_CONTRACTS` | Ja | Management Deal |
| `LICENSING_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `07_LEGAL/01_CONTRACTS` | Ja | Licensing Deal |
| `SYNC_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `07_LEGAL/01_CONTRACTS` | Ja | Sync Deal |
| `PUBLISHING_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `07_LEGAL/01_CONTRACTS` | Ja | Publishing Deal |

## CM PROSPECT AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `PARTNERSHIP_BRIEF_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `08_MARKETING/05_PARTNERSHIPS` | Ja | Partnership Development |
| `LEAD_INTAKE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `01_MASTER_BOUTIQUE/01_PIPELINE/LEADS` | Ja | Lead Qualification |
| `BUYER_PROFILE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `01_MASTER_BOUTIQUE/04_BUYERS` | Nee | Buyer Research |
| `SELLER_PROFILE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `01_MASTER_BOUTIQUE/03_SELLERS` | Nee | Seller Research |

## CM SOCIAL AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `CONTENT_CALENDAR_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `09_CONTENT` | Ja | Content Planning |
| `SOCIAL_POST_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `09_CONTENT/03_SOCIAL` | Ja | Social Publishing |
| `WEBSITE_PAGE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `08_MARKETING/04_WEBSITE` | Nee | Website Update |
| `CASE_STUDY_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `08_MARKETING/01_BRAND` | Nee | Authority Building |

## CM FLOW AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `WORKFLOW_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `05_OPERATIONS/02_WORKFLOWS` | Ja | Workflow Design |
| `AUTOMATION_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `05_OPERATIONS/03_AUTOMATIONS` | Ja | Automation Design |
| `SYSTEM_MAP_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `05_OPERATIONS/04_CLICKUP` | Ja | System Documentation |

## CM VAULT AGENT

| Template | Master Locatie | Output Locatie | Verplicht | Workflow |
|---|---|---|---|---|
| `SOP_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `05_OPERATIONS/01_SOPS` | Ja | SOP Management |
| `PROMPT_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `00_ADMIN/03_TEMPLATES/PROMPTS` | Ja | Prompt Governance |
| `PLAYBOOK_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `05_OPERATIONS/01_SOPS` | Ja | Knowledge Management |
| `GOVERNANCE_TEMPLATE` | `00_ADMIN/03_TEMPLATES` | `00_ADMIN/01_COMPANY_INFO` | Ja | Governance Updates |

## Governance regel

Een template mag slechts één master-versie hebben.

De master-versie wordt altijd opgeslagen in:

```text
00_ADMIN/03_TEMPLATES
```

Operationele versies worden opgeslagen in de daarvoor aangewezen outputlocatie.

De master-template mag uitsluitend worden gewijzigd door `CM VAULT AGENT`.
