# **MIGRATION NOTES**

## **DOEL**

Deze notities leggen vast hoe bestaande agentnamen worden gemapt naar CM Agent Register V1.3. Oude agentnamen worden niet verwijderd; ze blijven referentiepunten voor historische documentatie en migratiecontext.

## **MIGRATIEREGELS**

- Oude agentdocumenten blijven bestaan totdat CM VAULT AGENT een archiefbesluit vastlegt.
- Nieuwe taken worden gerouteerd via de V1.3-agentnamen.
- Bij overlap geldt het nieuwe eigenaarschap uit CM_AGENT_REGISTER.md.
- DEALS wordt geen aparte agent; dealwerk valt onder CM LEGAL AGENT.

## **MAPPING BESTAANDE AGENTEN**

| Oude agentnaam | Nieuwe V1.3-agent | Reden |
| --- | --- | --- |
| CM Admin Assistant | CM VAULT AGENT | Documentatie, structuur, taken en bronkwaliteit horen bij VAULT; operationele taakopvolging kan door OPS worden uitgevoerd. |
| CM Agent Governance | CM CONTROL AGENT | Governance, besluitvorming en kwaliteitscontrole horen bij CONTROL. |
| CM Artist Manager | CM OPS AGENT | Artist management en uitvoering horen bij OPS. |
| CM Brand Partnership Hunter | CM PROSPECT AGENT | Partnerships, sales en commerciële kansen horen bij PROSPECT. |
| CM Buyer Hunter | CM PROSPECT AGENT | Buyer outreach en pipeline horen bij PROSPECT. |
| CM Client Onboarding Agent | CM OPS AGENT | Onboardinguitvoering en overdracht naar delivery horen bij OPS. |
| CM Deal Hunter | CM PROSPECT AGENT | Deal sourcing en commerciële pipeline horen bij PROSPECT; juridische dealreview hoort bij LEGAL. |
| CM Knowledge Manager | CM VAULT AGENT | Knowledge Base, SOP’s en bronstructuur horen bij VAULT. |
| CM Network Hunter | CM PROSPECT AGENT | Netwerkontwikkeling en leads horen bij PROSPECT. |
| CM Operations Manager | CM OPS AGENT | Operationele aansturing hoort bij OPS. |
| CM Project Manager | CM OPS AGENT | Projectmanagement hoort bij OPS. |
| CM Release Manager | CM OPS AGENT | Release-uitvoering binnen artist management hoort bij OPS. |
| CM Rights Auditor | CM LEGAL AGENT | Rechten, licensing en compliance horen bij LEGAL. |
| CM Sync Hunter | CM PROSPECT AGENT | Sync-opportunity sourcing hoort bij PROSPECT; sync-contractreview hoort bij LEGAL. |

## **NIEUWE AGENTEN ZONDER ÉÉN-OP-ÉÉN OUDE NAAM**

| Nieuwe agent | Migratieopmerking |
| --- | --- |
| CM SOCIAL AGENT | Bundelt content, socials, thought leadership, case studies, personal branding en website content. |
| CM FLOW AGENT | Bundelt Make, API’s, Webhooks, ClickUp automations, integraties, monitoring en systeemgezondheid. |
| CM LEGAL AGENT | Neemt alle contract-, compliance- en dealreviewtaken op zich. |

## **VERVOLGACTIES**

- Verwijs nieuwe documentatie naar `docs/05_AGENTS_AND_SCOPES/CM_AGENT_REGISTER.md`.
- Label oude agentdocumentatie als historische bron wanneer VAULT dit archiveert.
- Controleer nieuwe SOP’s op V1.3-eigenaarschap voordat ze operationeel worden.
