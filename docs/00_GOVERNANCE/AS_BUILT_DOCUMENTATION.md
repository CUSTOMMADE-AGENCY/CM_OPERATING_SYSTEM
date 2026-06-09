# AS-BUILT DOCUMENTATION

## DOEL

As-built documentatie legt vast hoe het systeem vandaag daadwerkelijk is ingericht, niet hoe het oorspronkelijk was bedacht.

## WAT DOCUMENTEREN

- Mapstructuren in Google Drive.
- ClickUp spaces, folders, lists, statussen en custom fields.
- Gmail-template-namen en bedoeld gebruik.
- Automations, triggers, eigenaren en failure handling.
- Integraties, scripts en handmatige workarounds.
- GitHub governance, workflows, SOPs, systemen, template-documentatie en architectuur.

## REVIEWRITME

Review elk kwartaal en na iedere grote rebuild van het operating system.

## KWALITEITSSTANDAARD

As-built documentatie moet specifiek genoeg zijn om het systeem opnieuw op te bouwen, te auditen en veilig over te dragen aan een nieuwe owner.

## CLEANUP DATE

2026-06-09

## FINAL FOLDER STRUCTURE

```text
README.md
.gitignore
.github/
docs/
  00_GOVERNANCE/
  01_MASTER_BOUTIQUE/
  02_ARTIST_MANAGEMENT/
  03_SHARED_SERVICES/
  04_SYSTEMS/
  05_KNOWLEDGE_BASE/
  06_PLAYBOOKS/
  07_AI_AGENTS/
scripts/
  google_drive/
```

## WHAT WAS RENAMED

- `docs/00_governance` → `docs/00_GOVERNANCE`
- `docs/03_shared_services` → merged into `docs/03_SHARED_SERVICES`
- `docs/04_systems` → `docs/04_SYSTEMS`
- `scripts/google-drive` → `scripts/google_drive`

## WHAT WAS REMOVED OR RELOCATED

- `GOVERNANCE_RULES.md` moved from repository root to `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`.
- `docs/04_CLIENT_DELIVERABLES` removed from the active docs lane after its reusable template documentation was relocated to `docs/03_SHARED_SERVICES/TEMPLATES/`.
- Root-level `03_EXECUTIVE` removed because reusable template documentation already belongs under `docs/03_SHARED_SERVICES/TEMPLATES/` and live executive/client files belong in Google Drive.
- Accidental nested governance path under `docs/00_GOVERNANCE/docs/` removed from the active structure.

## WHY CLIENT DELIVERABLES ARE NOT A GITHUB LANE

Client deliverables are live output. They may contain client-specific strategy, commercial context, confidential information, approvals, versions and attachments. Google Drive is the source of truth for live client files and deliverables. GitHub only keeps reusable, generic and governance-safe template documentation.

## WHY SCRIPTS REMAIN OUTSIDE DOCS

`docs/` is for documentation. `scripts/` is for executable code. Keeping scripts outside docs prevents confusion between instructions and runnable automation, makes ownership clearer and preserves GitHub as a clean source-of-truth system.
