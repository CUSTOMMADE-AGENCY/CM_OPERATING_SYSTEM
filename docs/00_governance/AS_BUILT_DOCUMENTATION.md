# As-Built Documentation

## Purpose

As-built documentation records how the system is actually configured today, not how it was originally imagined.

## What to document

- Folder structures in Drive.
- ClickUp spaces, folders, lists, statuses and custom fields.
- Gmail template names and intended use.
- Automations, triggers, owners and failure handling.
- AI agents, scopes, permissions and review requirements.

## Update triggers

Update as-built documentation whenever:

- A top-level folder changes.
- A ClickUp status, custom field or automation changes.
- A Gmail template is added, renamed or retired.
- A recurring workflow changes ownership.

## Review cadence

Review quarterly and after each major operating-system rebuild.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
