# Naming Conventions

## Purpose

Naming must make documents findable without creating duplicate or uncontrolled variants.

## Folder naming

- Use numbered prefixes for controlled navigation: `01_MASTER_BOUTIQUE`.
- Use uppercase for system folders and markdown playbooks.
- Use descriptive nouns, not internal shorthand.

## File naming

- Markdown documentation: `PROCESS_NAME.md`.
- Client Drive folders: `CLIENT_NAME - WORKSTREAM - YYYY`.
- Deal Drive folders: `CATALOG_OR_ASSET - COUNTERPARTY - YYYY`.
- Meeting notes in Drive: `YYYY-MM-DD - Meeting Topic - Client`.

## Prohibited patterns

- `final_final`
- `latest`
- `newest`
- `copy of`
- unsorted exports
- duplicate folders with near-identical names

## Versioning

Use Git commits for documentation history. Use dated Drive filenames only when a file is a discrete deliverable or executed document.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
