# Buyer Database

## Purpose

Document the CM Master Boutique Buyer database structure, governance, ownership and usage rules.

The live Buyer database is stored in Google Drive as `CM_MASTER_ACQUISITION_OS`.

Drive location: `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/02_OPERATIONS`.

## What the Buyer database is

The Buyer database is the Master Boutique source of truth for known and potential Buyers of music catalogs, master rights, publishing rights, royalty streams and related rights Assets.

It is a live Google Sheets database, not a static GitHub document. GitHub defines the structure, governance and usage rules for the database. Google Sheets stores the live Buyer records. ClickUp stores active outreach tasks and deal execution. Gmail stores Buyer communication and approved outreach correspondence.

## What it is used for

Use the Buyer database to:

- Maintain the full Buyer universe across strategic Buyers, financial Buyers, funds, labels, publishers, distributors, family offices and specialist rights investors.
- Categorize Buyers by mandate, Asset fit, territory, check size, preferred rights type, genre appetite and relationship strength.
- Prioritize Buyers for specific catalog, master, publishing or royalty-stream opportunities.
- Track whether Buyers are qualified enough for outreach, NDA, Data Room access or deal execution.
- Preserve market intelligence that improves future Buyer matching and sell-side strategy.
- Avoid uncontrolled outreach, duplicate outreach and premature disclosure of sensitive Seller or Asset information.

## Ownership

The Master Boutique owner is accountable for the Buyer database. Day-to-day maintenance may be delegated to the deal lead or operations owner, but ownership remains with the Master Boutique function.

Ownership responsibilities include:

- Approving database structure and required columns.
- Reviewing Buyer categorization and priority scoring.
- Confirming when a Buyer is outreach-ready.
- Ensuring sensitive Buyer notes, Seller details and deal information are handled according to the relevant confidentiality rules.
- Making sure live Buyer data remains in Google Sheets and does not get duplicated into GitHub.

## System boundaries

| System | Role |
|---|---|
| GitHub | Documents the database structure, governance, workflow rules and related operating models. |
| Google Sheets | Stores the live Buyer database in `CM_MASTER_ACQUISITION_OS`. |
| Google Drive | Stores the live database file and supporting operational materials in `OS_CUSTOMMADE/02_MASTER_BOUTIQUE/02_OPERATIONS`. |
| ClickUp | Stores active outreach tasks, deal stages, owners, deadlines, next actions and execution proof. |
| Gmail | Stores Buyer communication, introductions, outreach emails, follow-ups and approved templates. |

## How Buyers are categorized

Each Buyer should be categorized using consistent fields so the database can support deal-specific filtering and prioritization.

Core categorization dimensions:

- Buyer type: strategic acquirer, label, publisher, distributor, fund, private equity, family office, royalty investor, sync-focused Buyer or specialist rights platform.
- Rights focus: masters, publishing, neighboring rights, producer royalties, artist royalties, writer shares, label interests or mixed-rights packages.
- Asset appetite: catalog size, revenue profile, age of income, genre, territory, growth profile and risk tolerance.
- Check size: indicative minimum and maximum transaction size.
- Territory: primary markets, cross-border capability and any jurisdiction limits.
- Relationship status: cold, warm, active, trusted, conflicted or do-not-contact.
- Confidentiality posture: unknown, acceptable, proven, restricted or high-risk.
- Execution history: never tested, responsive, slow, reliable closer, retraded, dropped out or blocked.

## How priority is determined

Buyer priority is deal-specific. A Buyer with high general market relevance is not automatically high priority for every Asset.

Priority should be determined by:

1. Strategic fit with the specific Asset, rights package, genre, territory and revenue profile.
2. Financial capacity for the likely purchase price and closing costs.
3. Execution reliability based on past processes, responsiveness and ability to close.
4. Confidentiality risk and ability to follow staged disclosure rules.
5. Relationship value for the Seller, CM and future Dealflow.
6. Competitive dynamics, including whether the Buyer may create leverage, price tension or information risk.
7. Any conflicts, restrictions, exclusivity concerns or known obligations that make outreach inappropriate.

Priority tiers:

| Tier | Meaning | Typical use |
|---|---|---|
| Tier 1 | Strong strategic fit, credible capital, low confidentiality risk and high execution confidence. | First-wave outreach after internal approval. |
| Tier 2 | Good potential fit but requires more qualification or is less likely to lead the process. | Second-wave outreach or controlled follow-up. |
| Tier 3 | Possible fit but low urgency, weak relationship, uncertain capital or limited relevance. | Market mapping, backup outreach or future opportunities. |
| Hold | Do not contact yet because prerequisites, conflicts or data quality are unresolved. | No outreach until cleared. |
| Do Not Contact | Buyer should not be contacted due to conflict, confidentiality risk, Seller instruction or relationship issue. | Excluded from outreach. |

## When a Buyer becomes outreach-ready

A Buyer is outreach-ready only when all of the following are true:

- The Buyer has sufficient categorization data to assess strategic fit.
- The Buyer has a named contact, valid contact channel and clear relationship owner.
- Priority tier and outreach rationale are documented.
- Confidentiality risk has been reviewed.
- The relevant Asset has an approved non-confidential teaser or approved introduction language.
- Internal approval has been given for the Buyer to be included in the outreach wave.
- Chain-of-title, DSP income and distribution obligations for the Asset are clean enough to support controlled outreach.

No outreach may begin before chain-of-title, DSP income and distribution obligations are clean, reconciled or explicitly cleared by the deal lead and Master Boutique owner.

## When a Buyer moves to ClickUp

A Buyer moves from the Google Sheets database into ClickUp when the Buyer becomes part of active execution.

Create or update a ClickUp task when:

- The Buyer is approved for an outreach wave.
- A teaser, intro email or follow-up needs to be sent.
- The Buyer responds with interest, questions, a pass or a request for more information.
- An NDA, qualification call, Data Room access request, LOI or diligence step needs tracking.
- The Buyer has a deadline, owner, next action or deal-stage dependency.

The Google Sheets database remains the Buyer reference source. ClickUp becomes the execution layer for active outreach and deal management.

## Data quality rules

- Keep one primary record per Buyer organization unless separate divisions have materially different mandates or contacts.
- Use standardized Buyer names, categories, priority tiers and statuses.
- Every outreach-ready Buyer must have a named owner, current status, next action and last-updated date.
- Do not store confidential Seller materials, full contracts, statements or sensitive Asset files in the Buyer database.
- Do not paste Gmail threads into the database; summarize relevant status and keep the communication record in Gmail.
- Do not use free-form priority labels outside the approved tier model.
- Mark uncertain data as unverified rather than presenting assumptions as facts.
- Record source and date for important Buyer intelligence.
- Archive stale, duplicate or invalid records without deleting useful history.
- Keep client-specific confidential details in the appropriate Google Drive and ClickUp workspaces, not in GitHub.

## Required columns overview

The live Google Sheets database should include, at minimum, the following column groups.

| Column group | Required fields |
|---|---|
| Identity | Buyer organization, buyer type, website, primary territory, headquarters, notes. |
| Contacts | Primary contact, role/title, email, phone or LinkedIn, relationship owner, relationship status. |
| Mandate | Rights focus, genre appetite, check-size range, territory appetite, revenue profile, strategic notes. |
| Qualification | financial capacity, execution reliability, confidentiality posture, conflict status, qualification status. |
| Prioritization | priority tier, deal-specific fit rationale, outreach wave, hold reason, do-not-contact reason. |
| Outreach readiness | outreach-ready flag, approval owner, approved date, teaser approved, chain-of-title clean, DSP income clean, distribution obligations clean. |
| Execution handoff | ClickUp task link, current stage, next action, next-action owner, deadline, last contact date. |
| Communication | Gmail thread link or reference, last response summary, communication status, follow-up date. |
| Data Room | NDA status, Data Room access level, access approved by, access granted date, access revoked date. |
| Maintenance | record owner, data source, source date, last updated, update cadence, archive status. |

## Maintenance cadence

- Weekly during active sell-side processes: review outreach-ready Buyers, ClickUp handoffs, response statuses and next actions.
- Monthly during normal operations: clean duplicates, update relationship status, review priority tiers and refresh stale Buyer intelligence.
- Quarterly: review Buyer categories, check-size assumptions, confidentiality posture, execution history and do-not-contact records.
- After every live process: update execution history, response quality, pricing behavior, diligence behavior, closing reliability and relationship notes.

## Relationship to Buyer Outreach Workflow

The Buyer database feeds the Buyer Outreach Workflow. The database is used to build and approve the Buyer universe, select outreach waves and document why a Buyer is ready or not ready for contact.

Once a Buyer is approved for outreach, active execution is tracked in ClickUp according to the Buyer Outreach Workflow. The database should reflect the current status, but it should not replace ClickUp task management.

## Relationship to Buyer Qualification Model

The Buyer Qualification Model defines how Buyers are assessed before sensitive information is shared. The Buyer database stores the qualification inputs and current qualification status.

A Buyer should not receive NDA materials, Level 1 Data Room access or deeper disclosure unless strategic fit, financial capacity, execution reliability and confidentiality risk have been reviewed under the Buyer Qualification Model.

## Relationship to Data Room Access Model

The Data Room Access Model governs what each Buyer may see and when access is granted, expanded or revoked. The Buyer database should show NDA status, access level, approval owner, access dates and revocation status.

Data Room access may only be granted to qualified Buyers according to the approved access level. The database records access status, while the actual files and access permissions remain in the approved Google Drive or Data Room environment.

## Quality checks

- No outreach before chain-of-title, DSP income and distribution obligations are clean.
- No confidential data without proper approval or NDA.
- Every active Buyer has a status, owner and next action in ClickUp.
- Live Buyer data remains in Google Sheets.
- Gmail remains the communication record.
- GitHub only documents structure, governance and usage rules.

## Repository hygiene

- Do not commit live Buyer exports, contact lists, confidential notes, signed documents, Data Room files or Gmail exports.
- Use GitHub for operating rules and versioned documentation only.
- Store live operational Buyer data in `CM_MASTER_ACQUISITION_OS` in Google Drive.
