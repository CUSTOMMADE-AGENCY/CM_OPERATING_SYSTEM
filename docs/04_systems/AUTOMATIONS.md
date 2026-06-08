# Automations

## Purpose

Document system automations, triggers, owners and failure handling.

## Automation register fields

- Automation name.
- System.
- Trigger.
- Action.
- Owner.
- Failure alert.
- Review cadence.

## Candidate automations

- Create Drive folder from approved ClickUp client setup task.
- Create onboarding checklist when proposal is marked accepted.
- Notify owner when data-room access should be removed.
- Create monthly management review task for active retainer clients.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
