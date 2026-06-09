# As-Built Documentatie

## Doel

As-built documentatie legt vast hoe het systeem vandaag daadwerkelijk is ingericht, niet hoe het oorspronkelijk was bedacht.

## Wat documenteren

- Mapstructuren in Google Drive.
- ClickUp spaces, folders, lists, statussen en custom fields.
- Gmail-template-namen en bedoeld gebruik.
- Automations, triggers, eigenaren en failure handling.
- Integraties, scripts en handmatige workarounds.

## GitHub repositorystructuur

De actuele GitHub source-of-truth gebruikt uitsluitend uppercase domeinmappen onder `docs/`:

- `docs/00_GOVERNANCE/` — governance, operating model, documentstandaarden, beslislog, AI-tooling en automation backlog.
- `docs/01_MASTER_BOUTIQUE/` — Master Boutique workflows, buyer/data-room documentatie en transactieplaybooks.
- `docs/02_ARTIST_MANAGEMENT/` — Artist Management lifecycle, SOPs, templates, approvals en execution flows.
- `docs/03_SHARED_SERVICES/` — gedeelde onboarding-, communicatie-, proposal-, meeting-, file-management- en templatebronnen.
- `docs/04_SYSTEMS/` — ClickUp-, Google Drive-, Gmail-, AI-agent- en automatiseringsdocumentatie.
- `docs/05_KNOWLEDGE_BASE/` — kennisbank voor muziekbusiness-onderwerpen en rechten.
- `docs/06_PLAYBOOKS/` — operationele playbooks voor sales, deals, releases, partnerships en rechten.
- `docs/07_AI_AGENTS/` — AI-agentrollen, governance en taakafbakening.

Deprecated lowercase documentatiemappen zijn geen geldige navigatie- of linktargets meer. Client deliverable templates worden beheerd binnen de relevante operationele domeinen, zoals `docs/02_ARTIST_MANAGEMENT/` en `docs/03_SHARED_SERVICES/TEMPLATES/`.

## Reviewritme

Review elk kwartaal en na iedere grote rebuild van het operating system.

## Kwaliteitsstandaard

As-built documentatie moet specifiek genoeg zijn om het systeem opnieuw op te bouwen, te auditen en veilig over te dragen aan een nieuwe owner.
