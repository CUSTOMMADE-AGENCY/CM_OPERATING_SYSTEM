# Drive Structure Governance

## Purpose

Google Drive stores live operating files. It must support execution without becoming the documentation source of truth.

## Approved Drive root folders

| Folder | Purpose |
|---|---|
| `00_ADMIN` | Company administration, internal references and non-client operating files |
| `01_MASTER_BOUTIQUE` | Catalog, master, publishing and acquisition transaction working files |
| `02_ARTIST_MANAGEMENT` | Artist management client working files and deliverables |
| `03_CLIENTS` | Active and archived client-specific folders when a lane-neutral folder is required |
| `04_DEALS` | Deal-specific transaction files, diligence and executed commercial documents |
| `05_OPERATIONS` | Internal operations, templates and recurring business materials |
| `06_FINANCE` | Finance, invoices, budgets and reporting files |
| `07_LEGAL` | Legal templates, executed documents and counsel coordination files |
| `08_MARKETING` | Marketing assets, decks, positioning and public materials |
| `09_CONTENT` | Content assets, publishing inputs and reusable creative materials |
| `99_ARCHIVE` | Closed, superseded or inactive folders retained for recordkeeping |

## Rules

- Do not mirror every Drive folder in GitHub.
- Do not store signed contracts in GitHub.
- Use Drive links in ClickUp tasks when task execution needs a file.
- Use GitHub links in ClickUp tasks when task execution needs a workflow or SOP.
- Archive closed work into `99_ARCHIVE` with a date and owner.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
