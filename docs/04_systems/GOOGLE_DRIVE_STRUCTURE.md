# Google Drive Structure

## Purpose

Document the approved Google Drive operating structure.

## Root folders

- `00_ADMIN`
- `01_MASTER_BOUTIQUE`
- `02_ARTIST_MANAGEMENT`
- `03_CLIENTS`
- `04_DEALS`
- `05_OPERATIONS`
- `06_FINANCE`
- `07_LEGAL`
- `08_MARKETING`
- `09_CONTENT`
- `99_ARCHIVE`

## Implementation

Use `scripts/google-drive/create-cm-drive-structure.gs` to create missing root folders in the selected Drive location.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
