# Version Control

## Purpose

GitHub version control replaces uncontrolled filename versions for operating documentation.

## Branching

- Use short descriptive branch names: `update-artist-intake-flow`.
- Keep one conceptual change per branch where possible.
- Update related documentation in the same branch when a process changes.

## Commits

- Use clear imperative commit messages.
- Explain what changed, not just which file changed.
- Do not commit generated exports or confidential files.

## Reviews

Reviewers should confirm:

- The change belongs in GitHub.
- The correct lane owns the process.
- System boundaries remain clear.
- No prohibited or confidential material was introduced.

## Releases

Major operating-system changes should be summarized in the pull request body and reflected in as-built documentation.

## Storage and tooling boundaries
- GitHub stores this workflow, governance, SOP and system documentation.
- Google Drive stores live client folders, signed documents, deliverables and working files.
- ClickUp stores execution, pipeline stages, owners, due dates and task evidence.
- Gmail stores correspondence and approved communication templates.

## Repository hygiene
- Do not commit signed contracts, confidential client files, exports, duplicate folders or ad hoc drafts.
- Use clear version history through commits and pull requests instead of `final_final` filenames.
- Keep client-specific details in the appropriate live workspace, not in this repository.
