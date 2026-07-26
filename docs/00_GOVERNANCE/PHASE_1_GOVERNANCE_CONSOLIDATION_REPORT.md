# Fase 1 — Governance Consolidation Report

## Status en scope

- Status: `GOEDGEKEURD / GEMERGED`
- Datum: 2026-07-26
- Uitvoeringsbranch: `codex/voer-fase-1-governance-consolidatie-uit`
- Merge: PR #194 is gemerged naar `main`.
- Handmatige post-merge review: inhoudelijk akkoord.
- Scope: uitsluitend Governance en repository-rootdocumenten.
- Niet uitgevoerd: migratie van Knowledge Base, Playbooks, Agents, Automations, Shared Services, business lanes of templates.
- Procesincident: PR #194 is gemerged vóór de vereiste expliciete review.
- Procesregel voor toekomstige recovery-PR's: geen merge zonder geslaagde CM CONTROL-review of expliciete Sophia-approval.

## Governancebesluit

Tijdens de actieve Repository Recovery is `CM_REPOSITORY_RECOVERY_PLAN.md` leidend boven de V1.0-production-baseline. De baseline-ADR blijft behouden met status `SUPERSEDED_FOR_RECOVERY`. De uitgebreide `docs/00_GOVERNANCE/GOVERNANCE_RULES.md` is de enige actieve Governance Rules-versie.

## Vergelijking GOVERNANCE_RULES-versies

| Onderwerp | Voormalige rootversie | Canonieke governanceversie | Consolidatiebesluit |
|---|---|---|---|
| Taal en omvang | Beknopte Engelstalige basisregels | Uitgebreide professionele Nederlandse governance | Governanceversie blijft actief |
| Prioriteit | Geen documenthiërarchie | `DECISION_LOG`, locked decisions en recoveryprioriteit | Governanceversie is vollediger |
| Systeemrollen | Alleen GitHub versus execution systems | GitHub, Drive, ClickUp, Moneybird, Gmail, Make, Canva en AI | Governanceversie is operationeel specifieker |
| Templates | Verbiedt duplicaten algemeen | Verplichte template-check, usage/gap reporting en lane-regels | Ongewijzigd bevroren; geen template-move |
| Drive en cases | Geen concrete structuur | Lean Nederlandse casestructuur en uitbreidingsvoorwaarden | Governanceversie is leidend, onder recoveryplan |
| Agents en automation | Niet uitgewerkt | Approval-, tool- en automationgrenzen | Governanceversie is leidend |
| Archief/versionering | Algemene archiveer- en versieprincipes | Uitgebreide uitvoeringsregels; basisprincipes blijven verenigbaar | Rootversie historisch behouden |

De rootversie bevat geen unieke regel die de actieve governance tegenspreekt of inhoudelijk moet vervangen. Zij is daarom zonder verwijdering verplaatst naar `HISTORY/SUPERSEDED/GOVERNANCE_RULES_ROOT_V1.md`, met opvolgerverwijzing.

## Map Specifications: inhoudelijke vergelijking

De collectie bevat twee complementaire niveaus:

1. root-Map Specifications voor de actuele Drive-hoofdmappen (`00_ADMIN`, `01_MASTER_BOUTIQUE`, `02_ARTIST_MANAGEMENT`, `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE`);
2. child-Map Specifications voor artist-dossiermappen (`01_ADMIN` tot en met `09_ARCHIVE`).

De gelijkende nummerprefixen zijn dus geen inhoudelijke duplicaten: zij beschrijven verschillende Drive-niveaus. Alle 19 specificaties, de README en het gap report zijn integraal behouden en verplaatst naar `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/`. De norm blijft in `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` en verwijst naar de nieuwe canonieke locatie.

## Verplaatste en geconsolideerde bestanden

### Map Specifications

- 19 specification-bestanden;
- `MAP_SPECIFICATION_GAP_REPORT.md`;
- de collectie-`README.md`.

### Repository-rootdocumenten

- `CM_DRIVE_READINESS_AUDIT_REPORT.md` → `HISTORY/AUDITS/`;
- `CM_OS_BASELINE_REVIEW.md` → `HISTORY/BASELINES/CM_OS_BASELINE_REVIEW_ROOT_VARIANT.md`;
- `DRIVE_STRUCTURE_ALIGNMENT_REPORT.md` en `FINAL_GOVERNANCE_ALIGNMENT_REPORT.md` → `HISTORY/RECOVERY_REPORTS/`;
- root Sprint 2B/2D/2E-documenten → `HISTORY/SPRINT_REPORTS/`;
- root `GOVERNANCE_RULES.md` en `TEMPLATE_MIGRATION_PLAN.md` → `HISTORY/SUPERSEDED/`.

De drie root-Playbooks en root `README.md` zijn niet verplaatst: Playbooks vallen expliciet buiten Fase 1 en `README.md` blijft de repository-entrypoint.

### Bestaande governancehistorie

Afgeronde audits zijn onder `HISTORY/AUDITS/` geplaatst, baseline-reviews onder `HISTORY/BASELINES/`, recovery/alignmentrapporten onder `HISTORY/RECOVERY_REPORTS/` en alle bestaande `SPRINT*`-documenten onder `HISTORY/SPRINT_REPORTS/`. Iedere historische Markdown-file heeft een statusbanner en actuele opvolgerverwijzing.

## Link- en tekstpadscan

De scan controleert:

- Markdown inline-links en images met een relatief repositorypad;
- tekstuele repositorypaden in backticks;
- resterende verwijzingen naar de voormalige Map Specifications-locatie;
- verwijzingen naar verplaatste root-governancebestanden.

Resultaat na remediatie: 106 relatieve Markdown-links gecontroleerd, 0 gebroken; geen actieve verwijzingen naar de voormalige Map Specifications-locatie. Historische context mag oude rootnamen letterlijk noemen; de statusbanner maakt duidelijk dat deze documenten niet uitvoerbaar zijn. De geautomatiseerde eindscan en exacte commando's staan in het PR-/commitoverzicht en de oplevering.

## Open risico's

1. De repository bevat bestaande tekstuele verwijzingen met verkorte bestandsnamen zonder volledig pad; semantische intentie daarvan kan niet volledig automatisch worden vastgesteld.
2. Historische rapporten kunnen verouderde paden als bewijs blijven noemen; deze worden bewust niet herschreven buiten noodzakelijke move-referenties.
3. PDF-paren voor historische governance zijn niet overal aanwezig, terwijl oudere governance PDF-paren benoemt; binnen Fase 1 zijn geen nieuwe PDF's gegenereerd.
4. De twee baseline-reviewvarianten verschillen inhoudelijk en blijven daarom beide als historie behouden.
5. Knowledge Base, Playbooks, Agents, Automations, Shared Services, business lanes en templates zijn nog niet geconsolideerd en mogen pas na expliciete fasegoedkeuring worden gewijzigd.
