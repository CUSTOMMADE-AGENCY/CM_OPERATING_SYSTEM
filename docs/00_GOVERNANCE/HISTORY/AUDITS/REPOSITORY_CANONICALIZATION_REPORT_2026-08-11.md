# Repository Canonicalization Report — 2026-08-11

## 1. Executive summary

De volledige baseline-inventaris omvat 465 tracked bestanden in root, `.github/`, `docs/` en `scripts/`. De actieve governanceboom is gecanoniseerd, recovery is `CLOSED / COMPLETED`, acht afgeronde documenten zijn met `git mv` naar HISTORY verplaatst en niets is verwijderd. Het file-level auditregister bevat path, type, owner/lane, doel, canonical source, overlap, reden, actie, inbound dependencies, risico en classificatie.

**Final verdict: `PASS WITH REMEDIATION`.** Repositorycanonicalisatie en P0-agentconflicten zijn gesloten. Resterende semantische overlap en vier exacte duplicate-kandidaten vragen owner-review; geen daarvan is automatisch verwijderd.

## 2. P0 / P1 / P2 findings

### P0 — gesloten

- Recoveryplan claimde actieve governancevoorrang ondanks afgeronde consolidatie: gesloten, eindstatus vastgelegd en gearchiveerd.
- CM VAULT V1 had conflicterende historische capabilityclaims: actuele regel is `PAUSED`, read-only, inspecteert/detecteert/rapporteert. Foldermutaties zijn voor VAULT `FORBIDDEN` en lopen uitsluitend via FLOW / approved script / approval-gate.
- Toolnamen konden als connection claim worden gelezen: centraal capabilityregister ingevoerd met verplichte state, permissions, actions, evidence/run-ID en failure policy.

### P1 — open voor owner-review

- 52 `MERGE_CANDIDATE`-regels zijn conservatief gemarkeerd door gelijke namen/rollen. Zij kunnen lane-specifieke unieke inhoud bevatten en zijn niet samengevoegd of verwijderd.
- Vier actieve exacte duplicate-kandidaten in template-governance blijven behouden totdat inbound/contextreview expliciet veilig is.
- Root-playbooks en de Operations-varianten hebben semantische overlap; verschillende audience/context maakt automatische merge onveilig.

### P2 — regulier onderhoud

- Herhaal link-, SHA-256-, stale-path- en confidential scans per kwartaal.
- Verhoog capability/toolstate alleen na nieuwe execution-evidence.

## 3. KEEP

349 baselinebestanden zijn `KEEP`: uniek op SHA-256, binnen repositoryscope en op een actieve of canonieke locatie. Volledige regels staan in het auditregister.

## 4. ARCHIVE

60 baselinebestanden zijn `ARCHIVE`: reeds onder HISTORY/ARCHIVE of als afgeronde recovery/migratie/cleanup tijdens deze wijziging naar HISTORY verplaatst. Zij blijven in Git en zijn niet leidend.

## 5. MERGE_CANDIDATE

52 baselinebestanden zijn `MERGE_CANDIDATE`. De signalering gebruikt gelijke bestandsnamen plus functie/lane; semantische overlap is niet gelijk aan duplicatie. Geen automatische merge of deletion is uitgevoerd.

Speciale groepen: root/Operations playbooks, registers/indexen met verschillende mapscope, artist-management flows en templatevarianten. `CM_AGENT_REGISTER.md` en `PLAYBOOK_INDEX.md` zijn ieder exact één keer actief.

## 6. DELETE_CANDIDATE

SHA-256 vond drie duplicategroepen:

1. `FINAL_GOVERNANCE_ALIGNMENT_REPORT.md` en `_ROOT_COPY.md` — beide al HISTORY; classificatie blijft ARCHIVE vanwege auditcontext.
2. `TEMPLATE_GAP_LOG_SPEC.md` onder `99_ARCHIVE_SUPERSEDED` en `99_TEMPLATE_GOVERNANCE`.
3. `TEMPLATE_USAGE_REPORT_SPEC.md` onder dezelfde twee templatepaden.

Vier regels uit groepen 2 en 3 zijn `DELETE_CANDIDATE`. **Geen bestand is verwijderd:** exacte inhoud alleen bewijst nog niet dat padcontext en dependencies niet uniek zijn.

## 7. REVIEW_REQUIRED

Geen afzonderlijk baselinebestand vereiste `REVIEW_REQUIRED`; onzekerheid over inhoudelijke consolidatie is conservatief als `MERGE_CANDIDATE` vastgelegd. Externe runtimeclaims blijven wel review-/evidenceplichtig.

## 8. Moves performed

Met `git mv`:

- `CM_REPOSITORY_RECOVERY_PLAN.md` → `HISTORY/RECOVERY_REPORTS/`.
- `PHASE_1_GOVERNANCE_CONSOLIDATION_REPORT.md` → `HISTORY/MIGRATIONS/`.
- `PHASE_2_OPERATIONS_MIGRATION_PLAN.md` → `HISTORY/MIGRATIONS/`.
- `PHASE_2_OPERATIONS_CONSOLIDATION_REPORT.md` → `HISTORY/MIGRATIONS/`.
- `REPOSITORY_FOLDER_CLEANUP_REPORT.md` → `HISTORY/RECOVERY_REPORTS/`.
- `REPOSITORY_STRUCTURE_CORRECTION_REPORT.md` → `HISTORY/RECOVERY_REPORTS/`.
- `OPEN_PR_REVIEW.md` → `HISTORY/AUDITS/`.
- `LEGACY_SHARED_SERVICES_README.md` → `HISTORY/SUPERSEDED/`.

## 9. Files deleted

Geen. Er was geen mass delete; alle duplicate-kandidaten zijn behouden.

## 10. Links updated

Recovery- en fasepaden zijn naar HISTORY-bestemmingen omgezet. Historische “actuele opvolger”-headers verwijzen nu naar actieve governance in plaats van het gesloten recoveryplan. De Map Specification Gap Report-link is gecorrigeerd. Opgeheven shared-services/systems-paden zijn uit actieve documentatie verwijderd of als expliciet opgeheven context aangeduid.

## 11. Remaining risks

- Runtimeplatformen zijn tijdens deze repositoryaudit niet gemuteerd of opnieuw verbonden; states blijven evidence-conservatief.
- Semantic merge candidates vragen inhoudelijke ownerbesluiten.
- Exact duplicate deletion vraagt een aparte goedgekeurde wijziging met dependencybewijs.
- History bevat bewust oude termen en paden als point-in-time bewijs; HISTORY is niet actief.

## 12. Agent conformance status

`PASS WITH REMEDIATION`, zonder production approval. Het capabilityregister harmoniseert de afzonderlijke ACTIVE-, RUNBOOK-, Build Spec-, Operating Prompt-, Certification- en Make-scenariolagen. VAULT is `PAUSED` en read-only; mutation ownership ligt bij FLOW/gated scripts. De acht agentcontracten blijven `PRE-PRODUCTION` tenzij individuele evidence anders bewijst.

## 13. Validation evidence

- `git diff --check`: pass.
- Volledige tracked Markdown-linkscan: 183 lokale links gecontroleerd, 0 broken.
- SHA-256 duplicate scan: drie groepen, niets verwijderd.
- Canonical uniqueness: exact één actieve `CM_AGENT_REGISTER.md`; exact één actieve `PLAYBOOK_INDEX.md`.
- Legacy-agent scan: legacy-agentdocs uitsluitend onder `AGENTS/HISTORY/LEGACY/`.
- Recovery-priority scan: geen actieve claim buiten HISTORY.
- Stale-path scan: geen actieve verwijzing naar opgeheven docs-structuren.
- Confidential/client/signed filename scan: geen verdachte tracked artifacts aangetroffen.
- `final_final`-scan: geen actieve match.
- Externe-entiteitsnaam-scan: geen verboden specifieke entiteitsreferentie in actieve CM-documentatie; generieke scheidingsguardrails blijven bestaan.
- Source-of-truth consistency: README, Governance README, as-built, capabilityregister en scenario-map stemmen overeen.

## 14. Rollback instructions

1. Vóór merge: sluit de PR of reset de branch naar het branch-startpunt.
2. Na merge: maak geen history rewrite; gebruik `git revert <merge-commit>`.
3. Voor een selectieve move-rollback: gebruik een nieuwe branch en `git mv` van HISTORY terug naar het oude pad, herstel daarna links en voer alle validations opnieuw uit.
4. Verwijder audit/history nooit om rollback te “vereenvoudigen”.

## 15. Final verdict

# PASS WITH REMEDIATION

De actieve Source of Truth is navigeerbaar en recovery-vrij; open remediation is beperkt tot expliciete, niet-destructieve owner-review van overlap en duplicate-kandidaten en tot toekomstige runtime-evidence.
