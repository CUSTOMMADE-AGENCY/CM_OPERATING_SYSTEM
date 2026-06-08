# Data Room Access Model

## Purpose

Control access to sensitive deal materials through staged disclosure.

## Access levels

| Level | Content | Requirement |
|---|---|---|
| Teaser | Non-confidential summary | Internal approval |
| Level 1 | Redacted financial and catalog overview | Buyer qualification and NDA |
| Level 2 | Detailed revenue, metadata and rights materials | Serious process participation |
| Level 3 | Legal, tax, chain-of-title and closing materials | LOI or advanced negotiation |

## Rules

- Never grant blanket access before qualification.
- Track every invite, permission change and removal in ClickUp.
- Store source files in Drive, not GitHub.
- Remove access when a buyer exits or the process closes.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
