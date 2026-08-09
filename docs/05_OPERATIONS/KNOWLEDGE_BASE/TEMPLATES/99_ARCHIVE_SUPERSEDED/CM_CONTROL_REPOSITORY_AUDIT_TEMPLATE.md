# CM CONTROL REPOSITORY AUDIT TEMPLATE

## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Doel

Gestandaardiseerde audittemplate voor CM CONTROL repository-audits. De audit volgt verplicht `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md` en beoordeelt repository health, governance, besluiten, locked decisions, ADR's, releases, documentatie, architectuur, agent-inrichting en -certificering, responsibility matrix, source of truth, automatisering, CI, duplicaten, referenties, orphan files, missing owners, missing review dates, version drift, risico's en board recommendations.

## Wanneer gebruiken

- Bij periodieke repository health checks.
- Voor governance- of release-readiness reviews.
- Wanneer CM CONTROL AGENT een repository moet beoordelen vóór een boardbesluit.
- Na grote documentatie-, architectuur- of automation-wijzigingen.

## Niet gebruiken voor

- Ingevulde vertrouwelijke clientdata.
- Vervanging van ADR's, release notes of governance source-of-truth documenten.
- Operationele projecttracking buiten de repository-auditcontext.

## Owner Agent

CM CONTROL AGENT

## Support Agents

CM VAULT AGENT; CM FLOW AGENT; CM OPS AGENT

## System of Record

GitHub = template-governance, template-specificatie en auditrapportage binnen de repository.
Drive = alleen export of gedeelde leesversie indien nodig.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/CM_CONTROL_REPOSITORY_AUDIT_TEMPLATE.md`

Audit output:
TBD per repository-audit, bij voorkeur in de governance- of auditmap van de betreffende repository.

## Gekoppelde workflow

Repository governance audit workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Repository | Naam en locatie van de onderzochte repository | Ja | GitHub | Inclusief branch/commit indien relevant |
| Auditdatum | Datum van de audit | Ja | Auditor | Gebruik ISO-formaat YYYY-MM-DD |
| Auditor | Agent of persoon die de audit uitvoert | Ja | Auditor | Meestal CM CONTROL AGENT |
| Audit scope | Afbakening van onderzochte mappen, flows en checks | Ja | Audit intake | Benoem expliciete uitsluitingen |
| Evidence sources | Gebruikte bestanden, commands, CI-runs en registers | Ja | Repository | Verwijs naar paden of run-id's |
| Board decision needed | Of boardbesluit nodig is | Ja | Auditbevinding | Ja/Nee + reden |

## Output

- Scanbaar auditrapport met genummerde secties 01 t/m 16.
- Concrete bevindingen met evidence, impact, owner en recommended action.
- Board recommendation met go/no-go/conditional-go advies.
- Actielijst voor follow-up in governance, ClickUp of repository issues.

## Verplichte standaard

Repository Governance Reviews worden verplicht uitgevoerd volgens:
`docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md`

Iedere repository review moet minimaal de verplichte auditonderdelen uit die standaard bevatten. Onderdelen mogen niet worden overgeslagen; wanneer een onderdeel niet van toepassing lijkt, wordt dit expliciet gemotiveerd in de auditvastlegging.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| 01 Executive Summary | Kernconclusie, overall status en belangrijkste acties | Ja |
| 02 Repository Health | Structuur, status, hygiene en onderhoudbaarheid van de repository | Ja |
| 03 Governance Health | Naleving van governance rules, owners, registers en approvals | Ja |
| 04 Decision Audit | Controle op besluitvorming, decision logs en open decisions | Ja |
| 05 ADR Audit | Controle op architecture decision records en technische rationale | Ja |
| 06 Release Audit | Controle op releaseproces, changelog, tagging en readiness | Ja |
| 07 Documentation Audit | Controle op documentatiekwaliteit, actualiteit en vindbaarheid | Ja |
| 08 Architecture Audit | Controle op architectuurconsistentie, boundaries en dependencies | Ja |
| 09 Agent Audit | Controle op agentrollen, instructies, ownership en escalatie | Ja |
| 10 Automation Audit | Controle op scripts, workflows, bots en operationele automatisering | Ja |
| 11 CI Audit | Controle op CI-configuratie, checks, status en betrouwbaarheid | Ja |
| 12 Duplicate Documents | Detectie van dubbele of conflicterende documenten | Ja |
| 13 Broken References | Detectie van gebroken links, paden en verwijzingen | Ja |
| 14 Orphan Files | Detectie van bestanden zonder owner, link of duidelijk doel | Ja |
| 15 Risks | Samenvatting van risico's, severity en mitigatie | Ja |
| 16 Board Recommendation | Besluitadvies, voorwaarden en escalaties voor boardreview | Ja |

### Verplichte auditonderdelen uit CM Control Audit Standard

| Auditonderdeel | Status | Evidence | Bevinding / N.v.t.-motivatie | Actie |
| --- | --- | --- | --- | --- |
| Decision Audit | TBD | TBD | TBD | TBD |
| Locked Decisions Audit | TBD | TBD | TBD | TBD |
| ADR Audit | TBD | TBD | TBD | TBD |
| Release Audit | TBD | TBD | TBD | TBD |
| Agent Audit | TBD | TBD | TBD | TBD |
| Agent Certification Audit | TBD | TBD | TBD | TBD |
| Responsibility Matrix Audit | TBD | TBD | TBD | TBD |
| Architecture Audit | TBD | TBD | TBD | TBD |
| Documentation Audit | TBD | TBD | TBD | TBD |
| Source of Truth Audit | TBD | TBD | TBD | TBD |
| Repository Health | TBD | TBD | TBD | TBD |
| Automation Health | TBD | TBD | TBD | TBD |
| CI Health | TBD | TBD | TBD | TBD |
| Broken References | TBD | TBD | TBD | TBD |
| Broken Links | TBD | TBD | TBD | TBD |
| Orphan Files | TBD | TBD | TBD | TBD |
| Duplicate Documents | TBD | TBD | TBD | TBD |
| Duplicate SOP’s | TBD | TBD | TBD | TBD |
| Duplicate Playbooks | TBD | TBD | TBD | TBD |
| Duplicate Templates | TBD | TBD | TBD | TBD |
| Missing Owners | TBD | TBD | TBD | TBD |
| Missing Review Dates | TBD | TBD | TBD | TBD |
| Version Drift | TBD | TBD | TBD | TBD |
| Executive Risk Score | TBD | TBD | TBD | TBD |
| Board Recommendation | TBD | TBD | TBD | TBD |

---

## 01 Executive Summary

| Onderdeel | Invulling |
| --- | --- |
| Overall audit status | TBD |
| Repository readiness | TBD |
| Belangrijkste bevinding | TBD |
| Hoogste risico | TBD |
| Board decision needed | TBD |
| Aanbevolen besluit | TBD |

### Key findings

- TBD

### Immediate actions

| Actie | Owner | Deadline | Priority |
| --- | --- | --- | --- |
| TBD | TBD | TBD | TBD |

## 02 Repository Health

| Check | Status | Evidence | Bevinding | Actie |
| --- | --- | --- | --- | --- |
| Repository structure | TBD | TBD | TBD | TBD |
| Naming consistency | TBD | TBD | TBD | TBD |
| File organization | TBD | TBD | TBD | TBD |
| Git hygiene | TBD | TBD | TBD | TBD |
| Maintainer clarity | TBD | TBD | TBD | TBD |

## 03 Governance Health

| Check | Status | Evidence | Bevinding | Actie |
| --- | --- | --- | --- | --- |
| Governance rules present | TBD | TBD | TBD | TBD |
| Owners documented | TBD | TBD | TBD | TBD |
| Approval paths documented | TBD | TBD | TBD | TBD |
| Registers current | TBD | TBD | TBD | TBD |
| Escalation process clear | TBD | TBD | TBD | TBD |

## 03A Source of Truth, Owners & Review Dates

| Check | Status | Evidence | Bevinding | Actie |
| --- | --- | --- | --- | --- |
| Source of truth per domein duidelijk | TBD | TBD | TBD | TBD |
| Missing owners gecontroleerd | TBD | TBD | TBD | TBD |
| Missing review dates gecontroleerd | TBD | TBD | TBD | TBD |
| Version drift gecontroleerd | TBD | TBD | TBD | TBD |

## 04 Decision Audit

| Decision source | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Decision log | TBD | TBD | TBD | TBD |
| Open decisions | TBD | TBD | TBD | TBD |
| Approved decisions | TBD | TBD | TBD | TBD |
| Locked decisions | TBD | TBD | TBD | TBD |
| Unlock- of wijzigingsproces gevolgd | TBD | TBD | TBD | TBD |
| Reversed decisions | TBD | TBD | TBD | TBD |

## 05 ADR Audit

| ADR check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| ADR index exists | TBD | TBD | TBD | TBD |
| ADR status is clear | TBD | TBD | TBD | TBD |
| ADRs reference implementation | TBD | TBD | TBD | TBD |
| Superseded ADRs are linked | TBD | TBD | TBD | TBD |

## 06 Release Audit

| Release check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Release process documented | TBD | TBD | TBD | TBD |
| Changelog maintained | TBD | TBD | TBD | TBD |
| Tags/versioning consistent | TBD | TBD | TBD | TBD |
| Release approvals recorded | TBD | TBD | TBD | TBD |
| Rollback path clear | TBD | TBD | TBD | TBD |

## 07 Documentation Audit

| Documentation check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| README current | TBD | TBD | TBD | TBD |
| Navigation/index current | TBD | TBD | TBD | TBD |
| Templates current | TBD | TBD | TBD | TBD |
| SOPs and workflows aligned | TBD | TBD | TBD | TBD |
| Sensitive data excluded | TBD | TBD | TBD | TBD |

## 08 Architecture Audit

| Architecture check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Architecture overview exists | TBD | TBD | TBD | TBD |
| Boundaries are documented | TBD | TBD | TBD | TBD |
| Dependencies are clear | TBD | TBD | TBD | TBD |
| Deprecated components marked | TBD | TBD | TBD | TBD |
| Architecture matches ADRs | TBD | TBD | TBD | TBD |

## 08A Responsibility Matrix Audit

| Matrix check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Owners vastgelegd | TBD | TBD | TBD | TBD |
| Escalation paths vastgelegd | TBD | TBD | TBD | TBD |
| Beslissingsrechten actueel | TBD | TBD | TBD | TBD |
| Matrix consistent met agentdefinities | TBD | TBD | TBD | TBD |

## 09 Agent Audit

| Agent check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Agent roles documented | TBD | TBD | TBD | TBD |
| Ownership is clear | TBD | TBD | TBD | TBD |
| Instructions are current | TBD | TBD | TBD | TBD |
| Escalation rules included | TBD | TBD | TBD | TBD |
| Agent boundaries respected | TBD | TBD | TBD | TBD |
| Agent certification present | TBD | TBD | TBD | TBD |
| Agent versie, status en goedkeuring actueel | TBD | TBD | TBD | TBD |

## 10 Automation Audit

| Automation check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| Scripts documented | TBD | TBD | TBD | TBD |
| Automation owners clear | TBD | TBD | TBD | TBD |
| Required secrets documented safely | TBD | TBD | TBD | TBD |
| Failure handling defined | TBD | TBD | TBD | TBD |
| Manual fallback exists | TBD | TBD | TBD | TBD |

## 11 CI Audit

| CI check | Status | Evidence | Gap | Follow-up |
| --- | --- | --- | --- | --- |
| CI workflows present | TBD | TBD | TBD | TBD |
| Required checks documented | TBD | TBD | TBD | TBD |
| Checks passing or explainable | TBD | TBD | TBD | TBD |
| CI ownership clear | TBD | TBD | TBD | TBD |
| CI failure escalation clear | TBD | TBD | TBD | TBD |

## 12 Duplicate Documents, SOP's, Playbooks & Templates

| Duplicate candidate | Type | Location A | Location B | Conflict risk | Recommended action |
| --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD | TBD |

## 13 Broken References & Broken Links

| Reference | Source file | Target | Failure type | Recommended action |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD |

## 14 Orphan Files

| Orphan candidate | Location | Reason flagged | Proposed owner | Recommended action |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD |

## 15 Risks & Executive Risk Score

| Risk | Severity | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD | TBD |

| Executive Risk Score item | Score / invulling | Evidence |
| --- | --- | --- |
| Governance-impact | TBD | TBD |
| Operationele impact | TBD | TBD |
| Compliance-impact | TBD | TBD |
| Herstelurgentie | TBD | TBD |
| Totale Executive Risk Score | TBD | TBD |

### Risk scale

- Severity: LOW, MEDIUM, HIGH, CRITICAL.
- Likelihood: LOW, MEDIUM, HIGH.
- Impact: repository, governance, release, client-facing, security, operational.

## 16 Board Recommendation

| Recommendation item | Invulling |
| --- | --- |
| Recommended decision | TBD |
| Conditions | TBD |
| Required remediation before approval | TBD |
| Accepted risks | TBD |
| Escalations | TBD |
| Next review date | TBD |

### Decision options

- GO: repository is healthy enough for intended use.
- CONDITIONAL GO: repository can proceed after listed conditions are met.
- NO GO: repository requires remediation before use or release.

## Approval

Board recommendation vereist review door CM CONTROL AGENT en, indien governance-impact aanwezig is, Sophia of de aangewezen board owner.

## Kwaliteitscheck

- Alle 16 auditsecties zijn ingevuld of expliciet gemarkeerd als niet van toepassing.
- Alle verplichte auditonderdelen uit `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md` zijn uitgevoerd of expliciet gemotiveerd als niet van toepassing.
- Iedere kritieke bevinding bevat evidence, impact, owner en aanbevolen actie.
- Board recommendation is concreet en besluitbaar.
- Geen vertrouwelijke clientdata of secrets opgenomen.
- Broken references, duplicate documents en orphan files zijn aantoonbaar gecontroleerd.

## Template Usage Report

Agents moeten bij gebruik vastleggen:

- welke repository is geaudit;
- welke scope en evidence zijn gebruikt;
- waar het ingevulde auditrapport staat;
- welke gaps, risico's en board recommendations zijn vastgesteld.

## Status

ACTIVE

Toegestane statussen: ACTIVE, DRAFT, NEEDS_REVIEW, DEPRECATED.

## Reviewritme

- Laatste review: 2026-07-03
- Volgende review: 2026-10-03
- Ritme: elk kwartaal of eerder bij governancewijziging.

## Wijzigingslog

| Datum | Wijziging | Owner |
| --- | --- | --- |
| 2026-07-03 | Eerste repository-audittemplate toegevoegd voor CM CONTROL audits. | CM CONTROL AGENT |
| 2026-07-03 | Template expliciet gekoppeld aan CM Control Audit Standard en verplichte auditonderdelen toegevoegd. | CM CONTROL AGENT |
