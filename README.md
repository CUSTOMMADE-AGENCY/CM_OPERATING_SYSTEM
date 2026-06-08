# CM Operating System

CM_OPERATING_SYSTEM is the source-of-truth repository for the operating standards, workflows, governance rules, and system documentation of Custommade Agency Int. B.V. It is designed to keep the company lean, professional, modular, and scalable while separating the two revenue engines of the business.

## Why this repository exists

The repository exists to prevent operational drift. It defines how CM works, where information belongs, how documentation is versioned, and how work moves through GitHub, Google Drive, ClickUp, and Gmail. The goal is one clean operating system that can be audited, improved, and reused without mixing client files, signed documents, or execution clutter into the source of truth.

## What belongs in this repository

- Governance rules and operating principles.
- Workflow documentation and SOPs.
- Playbooks, checklists, and reusable standards.
- As-built documentation for implemented systems.
- Naming conventions, version-control rules, and documentation standards.
- Lightweight automation scripts that support CM operations.

## What does not belong in this repository

- Signed contracts or legal execution copies.
- Confidential client files, private deliverables, or financial files.
- Live deal data rooms or buyer-specific materials.
- Random exports, duplicate folders, or informal working files.
- Content from unrelated operating systems or brands.

## Two separate revenue engines

CM operates two distinct lanes. Documentation must remain separated unless a standard is genuinely shared.

### Master Boutique

Master Boutique is the transaction lane for catalog acquisitions, master rights deals, publishing rights deals, rights brokerage, buyer outreach, data rooms, LOI / APA / closing processes, and success-fee revenue.

### Artist Management

Artist Management is the client-services lane for artist clients, brand audits, brandbooks, roadmaps, release strategy, business audits, rights and royalty audits, project management, selective management services, retainers, and project fees.

## System relationship

- **GitHub** is the source of truth for governance, workflows, SOPs, playbooks, system documentation, and operating standards.
- **Google Drive** is the source for live client folders, signed documents, deliverables, templates, assets, finance files, and legal files.
- **ClickUp** is the source for tasks, pipeline stages, statuses, execution, deadlines, and day-to-day delivery tracking.
- **Gmail** is the source for communication, reusable mail templates, deal correspondence, and client correspondence.

## Governance principles

- One repository, one operating source of truth.
- No duplicate documents and no unmanaged parallel versions.
- Every workflow requires workflow documentation.
- Every implemented system requires as-built documentation.
- Documents use clean names and formal versioning: `V1.0`, `V1.1`, `V2.0`.
- Shared standards belong only in governance or shared services.
- Client-confidential and signed materials stay in approved Drive locations only.

## How to use this repository

1. Start with `GOVERNANCE_RULES.md` and `docs/00_governance/README.md`.
2. Use `docs/01_master_boutique/` for transaction workflows only.
3. Use `docs/02_artist_management/` for artist-service workflows only.
4. Use `docs/03_shared_services/` for standards used by both lanes.
5. Use `docs/04_systems/` for system setup, structures, templates, and automations.
6. When changing a process, update the relevant workflow document and, if implemented in a tool, the matching as-built documentation.
