# ADR-2026-07-02 — Consolidatie case-duplicate docs-directories

## Status

Accepted

## Datum

2026-07-02 (voorgesteld) · 2026-07-03 (geaccepteerd en uitgevoerd)

## Context

De `docs/`-tree bevat vijf top-level lane-directories die elk **tweemaal** bestaan en uitsluitend in hoofdlettergebruik verschillen:

| Canoniek (UPPERCASE, V1.0) | Duplicaat (lowercase, pré-restructure) |
|---|---|
| `docs/00_GOVERNANCE` (52 files, 4.872 regels) | `docs/00_governance` (7 files, 180 regels) |
| `docs/01_MASTER_BOUTIQUE` | `docs/01_master_boutique` |
| `docs/02_ARTIST_MANAGEMENT` | `docs/02_artist_management` |
| `docs/03_SHARED_SERVICES` | `docs/03_shared_services` |
| `docs/04_SYSTEMS` | `docs/04_systems` |

Dit veroorzaakt twee problemen:

1. **Technisch defect.** Op een case-insensitive filesystem (macOS, Windows) colliden `00_GOVERNANCE` en `00_governance` bij `git clone` / Drive-sync / lokale checkout. De tree is daar niet betrouwbaar reproduceerbaar.
2. **Governance-schending.** De niet-onderhandelbare regel *"Geen dubbele document-locaties / geen unmanaged parallelle versies"* (`GOVERNANCE_RULES.md`, `README.md`) wordt geschonden.

Analyse van de inhoud toont aan dat de UPPERCASE-tree de **CM OS V1.0 production baseline** is (Nederlands, volledig, referentiedoel van `README.md` en de startdocumenten). De lowercase-tree is een **oudere, Engelstalige, schrale variant** van vóór de repository-restructure (merge #162) die niet is opgeruimd. Alle gelijknamige bestanden in de lowercase-tree zijn een verouderde representatie van hun UPPERCASE-tegenhanger; een kleine set lowercase-bestanden heeft geen UPPERCASE-tegenhanger.

**Aanvullend conflict (CI).** De governance-CI `.github/workflows/cm-governance.yml` (`required-files`-check) vereist hard de **lowercase** README-paden (`docs/00_governance/README.md` … `docs/04_systems/README.md`). De CI codeert daarmee de lowercase-tree als canoniek, terwijl `README.md` de UPPERCASE-tree als canoniek codeert — een directe inconsistentie tussen governance-CI en governance-documentatie. Het simpelweg verwijderen van de lowercase-directories zou deze CI-gate breken. De CI-check moet in dezelfde executie-PR worden omgezet naar de UPPERCASE-paden.

## Besluit

1. **De UPPERCASE-tree is de enige canonieke `docs/`-structuur.** De vijf lowercase duplicaat-directories worden opgeheven.
2. **Gelijknamige (collision) bestanden:** de UPPERCASE-versie is leidend. De lowercase-versie is `Superseded` en wordt verwijderd. Git-historie behoudt de tekst; er gaat geen unieke informatie verloren.
3. **Uniek content (bestaat alleen in lowercase, geen UPPERCASE-tegenhanger):** wordt **niet verwijderd**. Deze bestanden worden ongewijzigd verplaatst naar de canonieke UPPERCASE-directory en gemarkeerd voor taal-/formaatreconciliatie door de content-eigenaar (CM VAULT), zodat er in deze wijziging **nul content-verlies** is.

### Migratieregel per bestand

Analyse van de collisions (bron: `diff` per pair, 2026-07-02):

| Pair | Collision (UPPERCASE leidend → lowercase verwijderen) | Uniek lowercase (verplaatsen naar UPPERCASE, reconciliatie-flag) |
|---|---|---|
| `00_GOVERNANCE` | `AS_BUILT_DOCUMENTATION`, `DOCUMENT_STANDARDS`, `DRIVE_STRUCTURE`, `NAMING_CONVENTIONS`, `README`, `VERSION_CONTROL`, `WORKFLOW_DOCUMENTATION` | — |
| `01_MASTER_BOUTIQUE` | `APA_NEGOTIATION_PLAYBOOK`, `BUYER_OUTREACH_WORKFLOW`, `BUYER_QUALIFICATION_MODEL`, `CATALOG_VALUATION_PLAYBOOK`, `DATA_ROOM_ACCESS_MODEL`, `DEALFLOW_CATALOG_ASSET`, `DUE_DILIGENCE_CHECKLIST`, `README` | `CLOSING_WORKFLOW`, `LOI_WORKFLOW`, `SUCCESS_FEE_WORKFLOW` |
| `02_ARTIST_MANAGEMENT` | 16 bestanden incl. `ARTIST_MANAGEMENT_SOP`, `ARTIST_INTAKE_FLOW`, `README` (volledige lijst in PR-diff) | `ARTIST_BRANDBOOK_FLOW`, `ARTIST_FIT_CHECK`, `MONTHLY_MANAGEMENT_FLOW`, `RELEASE_STRATEGY_FLOW` |
| `03_SHARED_SERVICES` | `CLIENT_ONBOARDING`, `COMMUNICATION_PROCESS`, `FILE_MANAGEMENT`, `MEETING_PROCESS`, `PROPOSAL_WORKFLOW` | `CLIENT_CLOSE_OUT`, `EMAIL_TEMPLATES`, `README` |
| `04_SYSTEMS` | `AI_AGENTS`, `AUTOMATIONS`, `CLICKUP_STRUCTURE`, `GOOGLE_DRIVE_STRUCTURE` | `GMAIL_TEMPLATES`, `README` |

Totaal: **5 lowercase-directories op te heffen**, ~37 superseded collision-bestanden te verwijderen, **12 unieke bestanden te verplaatsen** (geen content-verlies).

### Gerelateerd defect (in scope)

De root-`README.md` concateneert twee README's: de bovenste (Engelstalig) verwijst naar de lowercase-paden die dit besluit opheft. In de executie-PR wordt de stale Engelstalige helft verwijderd en blijft de Nederlandse canonieke README staan.

## Impact

- **Architectuur:** één eenduidige `docs/`-tree; case-collision verdwenen; `GOVERNANCE_RULES.md` "geen duplicaten" hersteld.
- **GitHub:** puur `docs/`-wijzigingen; geen wijziging aan agents, automations of code.
- **Agent-impact:** geen — agent-passports (`docs/07_AI_AGENTS`) en playbooks blijven ongemoeid.
- **Automation-impact:** `.github/workflows/cm-governance.yml` moet mee — de `required-files`-lijst wordt omgezet van lowercase- naar UPPERCASE-README-paden. Geen Make-scenario, webhook of Apps Script raakt deze paden.
- **Links/verwijzingen:** interne verwijzingen wijzen reeds naar UPPERCASE (startdocumenten in `README.md`); unieke verplaatste bestanden krijgen hun canonieke UPPERCASE-pad.
- **Reversibel:** volledig via PR-revert; git-historie behoudt alle verwijderde tekst.

## Teststrategie

1. `git ls-files docs/ | sed -E 's#(docs/[^/]+)/.*#\1#' | sort | uniq -di` → **leeg** (geen twee mappen die enkel in casing verschillen).
2. Geen tracked pad matcht `docs/[0-9][0-9]_[a-z]`.
3. Alle 12 unieke bronbestanden bestaan onder hun nieuwe UPPERCASE-pad (checksum-vergelijking pré/post move = identiek).
4. Markdown-linkcheck: geen dode interne links naar `docs/*lowercase*`.
5. Repo-clone op een case-insensitive volume checkt zonder collision-waarschuwing uit.
6. CI `cm-governance.yml` blijft groen na omzetting van de `required-files`-paden naar UPPERCASE.

## Migratie

Uitvoering in de executie-PR (na acceptatie van deze ADR):

1. `git mv` van de 12 unieke bestanden naar hun UPPERCASE-directory (content ongewijzigd).
2. `git rm` van de ~37 superseded collision-bestanden.
3. `git rm` van de nu lege lowercase-directories.
4. **`.github/workflows/cm-governance.yml` bijwerken:** `required-files`-paden omzetten naar UPPERCASE (`docs/00_GOVERNANCE/README.md` … `docs/04_SYSTEMS/README.md`). Zonder deze stap breekt de CI-gate.
5. Root-`README.md` ontdubbelen (stale Engelstalige helft verwijderen).
6. `DECISION_LOG.md` + `CM_SYSTEM_DECISION_MATRIX.md` bijwerken; changelog-entry toevoegen.
7. Reconciliatie-taak voor CM VAULT registreren voor de 12 verplaatste (Engelstalige) bestanden.

## Risico's

- **Content-verlies bij verplaatste bestanden** → gemitigeerd: `git mv` behoudt inhoud 1-op-1; checksum-test in teststrategie.
- **Verkeerde canoniek-keuze** → gemitigeerd: UPPERCASE is aantoonbaar de V1.0 baseline (omvang, taal, `README.md`-referenties).
- **Taalinconsistentie** door 12 Engelstalige bestanden in Nederlandse tree → geaccepteerd voor deze PR, afgedekt met reconciliatie-flag + VAULT-taak (geen content-verlies weegt zwaarder).
- **CI-gate breekt** als de lowercase-mappen verdwijnen maar `cm-governance.yml` niet wordt bijgewerkt → gemitigeerd: workflow-update is een verplichte migratiestap (4) en onderdeel van de teststrategie (6).

## Rollback

Volledige PR-revert herstelt de vorige toestand. Git-historie behoudt alle verwijderde en verplaatste bestanden. Een toekomstige correctie van dit besluit vereist een nieuwe ADR.

## Referenties

- `GOVERNANCE_RULES.md` — regel "geen dubbele locaties / geen parallelle versies"
- `README.md` — startdocumenten en canonieke UPPERCASE-structuur
- `docs/00_GOVERNANCE/ADR/ADR-2026-07-01-cm-os-v1-production-baseline.md` — baseline waaronder deze wijziging valt
- `docs/00_GOVERNANCE/ADR/README.md` — verplichte ADR-route
