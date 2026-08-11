> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# REPOSITORY RECOVERY REPORT

## 1. Doel, scope en stopregel

Dit rapport is de verplichte **audit-first** oplevering voor branch `cm-recovery-operations-structure`. De inspectie is uitgevoerd op de volledige getrackte repository, inclusief Governance, business lanes, Workflows, SOPs, Playbooks, Automations, Agents, Knowledge Base, scripts, interne links en templates. `node_modules` is als lokaal geïnstalleerde, door `.gitignore` uitgesloten dependency geïnventariseerd maar niet inhoudelijk geclassificeerd; `.gitkeep`-bestanden zijn lege structuurdragers.

**Build freeze toegepast:** er zijn geen templates, Workflows, SOPs, Playbooks, Agents, Automations of businessregels gemaakt of gewijzigd; er is niets verwijderd, samengevoegd of structureel verplaatst; Google Drive is niet benaderd of gewijzigd. Dit rapport doet uitsluitend voorstellen.

**STOP / REVIEW GATE:** na oplevering van dit rapport stopt de recovery. Geen voorstel uit dit document mag worden uitgevoerd voordat Sophia / CM CONTROL expliciet review en akkoord heeft gegeven.

## 2. Auditmethode en meetbasis

- Snapshotdatum: **2026-07-26**.
- Branch: `cm-recovery-operations-structure`.
- Getrackte bestanden: **382**; daarvan **371** inhoudelijke bestanden buiten de 11 lege `.gitkeep`-structuurdragers. Daarnaast zijn **174** lokaal geïnstalleerde, genegeerde `node_modules`-bestanden aangetroffen; die zijn geen repository-inhoud.
- Markdown-links: **106** expliciete lokale relatieve links onderzocht.
- Duplicatecontrole: SHA-256 voor exacte inhoud plus bestandsnaam-/functieanalyse voor semantische kandidaten.
- Classificaties: `BEHOUDEN`, `VERPLAATSEN`, `SAMENVOEGEN`, `ARCHIVEREN`, `VERWIJDEREN_VOORSTEL`, `REVIEW_NODIG`.
- `VERWIJDEREN_VOORSTEL` is bewust **niet toegekend**: zonder review is verwijderen niet verantwoord.

## 3. Huidige repositoryboom

De volledige bestandsinventaris staat in §12; samen vormt die tabel de huidige repositoryboom op bestandsniveau. De huidige hoofdstructuur is:

```text
/
├── .github/                         # control tooling en CI
├── 00_ADMIN/03_TEMPLATES/          # lege template-structuurdragers
├── docs/
│   ├── 00_GOVERNANCE/              # 63 bestanden
│   ├── 01_MASTER_BOUTIQUE/         # 12 bestanden
│   ├── 02_ARTIST_MANAGEMENT/       # 40 bestanden
│   ├── 03_SHARED_SERVICES/         # 90 bestanden, incl. templates
│   ├── 04_SYSTEMS/                 # 16 bestanden
│   ├── 05_KNOWLEDGE_BASE/          # 23 bestanden
│   ├── 05_OPERATIONS/              # 8 index/README-bestanden
│   ├── 06_PLAYBOOKS/               # 14 bestanden
│   ├── 07_AI_AGENTS/               # 47 bestanden
│   └── 08_MAP_SPECIFICATIONS/       # 21 bestanden
├── scripts/google-drive/            # 10 Apps Script-bestanden
├── scripts/moneybird-feed-agent/    # bron/config; lokale node_modules is genegeerd
└── 12 root-level Markdownbestanden naast README
```

### Feitelijke observatie

De gewenste `docs/03_CLIENTS`, `04_DEALS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING` en `09_CONTENT` bestaan niet. Tegelijk bestaan vijf niet-passende actieve hoofddomeinen (`03_SHARED_SERVICES`, `04_SYSTEMS`, `05_KNOWLEDGE_BASE`, `06_PLAYBOOKS`, `07_AI_AGENTS`) en één onbeslist domein (`08_MAP_SPECIFICATIONS`). `05_OPERATIONS` bestaat al, maar bevat vrijwel uitsluitend indexen en lege categorie-README's.

## 4. Aanbevolen repositoryboom

Dit is een **doelbeeld, geen uitvoeringsactie**. Bestaande templates blijven tijdens recovery op hun huidige paden totdat een afzonderlijke templatebeslissing is goedgekeurd.

```text
docs/
├── 00_GOVERNANCE/
├── 01_MASTER_BOUTIQUE/
├── 02_ARTIST_MANAGEMENT/
├── 03_CLIENTS/
├── 04_DEALS/
├── 05_OPERATIONS/
│   ├── WORKFLOWS/
│   ├── SOPS/
│   ├── PLAYBOOKS/
│   ├── AUTOMATIONS/
│   ├── AGENTS/
│   └── KNOWLEDGE_BASE/
├── 06_FINANCE/
├── 07_LEGAL/
├── 08_MARKETING/
└── 09_CONTENT/
```

Technische repositorycode blijft onder `.github/` en `scripts/`. Een governance-history/archive-locatie en de definitieve templatebron zijn bewust **niet ontworpen**: daarvoor is eerst een expliciet besluit nodig.

## 5. Verschillenanalyse

| Onderwerp | Huidig | Doel | Impact |
|---|---|---|---|
| Business lanes | `03_SHARED_SERVICES`, `04_SYSTEMS`; zes vereiste lanes ontbreken | `03_CLIENTS` t/m `09_CONTENT` volgens target | Hoog: eigenaarschap en links moeten worden herijkt. |
| Operations | Categorieën bestaan maar zijn vrijwel leeg | Alle organisatiebrede operationele documenttypen onder `05_OPERATIONS` | Hoog: gecontroleerde verplaatsing, overlapreview en redirects/linkfixes nodig. |
| Knowledge Base | 23 docs in legacy hoofdmap | Onder `05_OPERATIONS/KNOWLEDGE_BASE` | Middel. |
| Playbooks | 14 algemene plus 8 agentplaybooks en 3 rootvarianten verspreid | Onder `05_OPERATIONS/PLAYBOOKS` | Hoog wegens versiekandidaten. |
| Agents | 47 documenten verspreid onder `07_AI_AGENTS`, plus systemen | Onder `05_OPERATIONS/AGENTS` | Hoog wegens governance-referenties en CI. |
| Automations | Documentatie onder `04_SYSTEMS`; code onder scripts/. | Documentatie onder `05_OPERATIONS/AUTOMATIONS`; code blijft scripts/. | Middel. |
| Templates | Meerdere parallelle substructuren en exacte duplicaten | Onbeslist wegens freeze | Hoog, maar geblokkeerd tot aparte reviewfase. |
| Map Specifications | Apart `08_MAP_SPECIFICATIONS`-domein | Niet opgenomen in doelboom | Review nodig; kan governance of Operations Knowledge Base zijn. |
| Root | 12 rapporten/playbooks/governancekopieën | Alleen entrypoints en technische mappen | Middel; eerst samenvoeg-/archiefbesluit. |

## 6. Scores

| Score | Waarde | Onderbouwing |
|---|---:|---|
| Repository Health | **46/100** | Bestanden zijn leesbaar en linkscan is groen, maar doelboom ontbreekt grotendeels, root is vervuild en operationele content is versnipperd. |
| Governance | **42/100** | Nieuwe recoverybronnen zijn onderling grotendeels consistent, maar actieve/stale audits, dubbele Governance Rules en conflicterende archiefregels bestaan naast elkaar. |
| Architectuur | **34/100** | `05_OPERATIONS` is correct gescaffold, maar de feitelijke content blijft in de oude architectuur en zes vereiste lanes ontbreken. |
| AI Readiness | **38/100** | Agentstandaarden zijn rijk, maar 47 agentdocumenten staan buiten de canonieke plek, legacy agents zijn actief vindbaar en systeem-/autonomiereferenties zijn padgebonden. |

Scores zijn auditinschattingen, geen productiestatuscertificaat.

## 7. Duplicaten en overlapkandidaten

### Exact inhoudelijk identiek

1. `FINAL_GOVERNANCE_ALIGNMENT_REPORT.md` ↔ `docs/00_GOVERNANCE/FINAL_GOVERNANCE_ALIGNMENT_REPORT.md`.
2. Vier template-governanceparen onder `TEMPLATES/99_TEMPLATE_GOVERNANCE/` en direct onder `TEMPLATES/`: `TEMPLATE_GAP_LOG_SPEC`, `TEMPLATE_REVIEW_PROCESS`, `TEMPLATE_STATUS_REGISTER`, `TEMPLATE_USAGE_REPORT_SPEC`.

### Zelfde naam of functie; inhoudelijke vergelijking vereist

- Root en governance: `GOVERNANCE_RULES.md`, `CM_OS_BASELINE_REVIEW.md`, `SPRINT2B_GOVERNANCE_CONFLICT_REPORT.md`.
- Root en agentplaybooks: `CM_FLOW_PLAYBOOK.md`, `CM_MONEY_PLAYBOOK.md`, `CM_OPS_PLAYBOOK.md`.
- `ARTIST_FOLDER_STANDARD.md` in Governance en Artist Management.
- `EMAIL_TEMPLATES.md`, `GMAIL_TEMPLATES.md` en twee `TEMPLATE_REGISTER.md`-locaties.
- Templatefamilies met 2–4 gelijknamige varianten: Artist Onboarding, Artist Roadmap, Brand Audit, Business Audit, Client Onboarding/Profile, Do Nots, Email Instructions, Monthly Management/Report en Release Strategy.

Geen duplicaat is verwijderd. Templatekandidaten blijven `REVIEW_NODIG` wegens de freeze.

## 8. Links en afhankelijkheden

- De syntactische scan vond **0 gebroken targets in 106 expliciete relatieve Markdown-links**.
- Dit betekent niet dat migratie veilig is: veel geldige links wijzen juist naar de te migreren legacy-locaties `04_SYSTEMS`, `07_AI_AGENTS`, `08_MAP_SPECIFICATIONS` en templates onder `03_SHARED_SERVICES`.
- Backtick-paden en platte tekstpaden zijn geen Markdown-links en vallen buiten de 106; een migratie moet daarom zowel Markdown-links als alle tekstuele padreferenties atomair bijwerken.
- Governance-CI, CM CONTROL context, scripts en registers moeten na goedkeuring vóór elke move als dependency-set worden gecontroleerd.

## 9. Legacy, verkeerde locaties en governanceconflicten

### Legacy / verkeerde locatie

- `docs/05_KNOWLEDGE_BASE`, `docs/06_PLAYBOOKS` en `docs/07_AI_AGENTS` zijn volgens de recovery-governance niet langer canoniek.
- `docs/03_SHARED_SERVICES` bevat zowel organisatiebrede Workflows/SOPs als de bevroren templatebibliotheek; één uniforme move is daarom onveilig.
- `docs/04_SYSTEMS` mengt systeemkennis, Automations en Agents.
- `docs/02_ARTIST_MANAGEMENT` bevat drie expliciete legacybestanden in een intern ARCHIVE-pad en meerdere mogelijk overlappende genummerde/ongenummerde flows.
- `docs/07_AI_AGENTS/99_LEGACY_AGENTS` bevat 13 expliciete legacy-agentdefinities.
- `scripts/moneybird-feed-agent/node_modules` is lokaal aanwezig maar correct genegeerd; de afwezige getrackte lockfile (door de globale `package-lock.json`-ignore) vraagt wel een latere reproduceerbaarheids-/supply-chainreview.

### Governanceconflicten

1. `REPOSITORY_AUDIT.md` verklaart de oude structuur (`03_SHARED_SERVICES` t/m `07_AI_AGENTS`) COMPLIANT, terwijl README, AS_BUILT, recoveryplan en governance-matrix de nieuwe domein-/Operations-structuur voorschrijven.
2. `DECISION_LOG.md` noemt V1.0 production-ready en architectuurwijzigingen ADR-plichtig, terwijl de actuele status expliciet `REPOSITORY RECOVERY` is en de feitelijke boom niet aan de nieuwe as-built voldoet.
3. Root `GOVERNANCE_RULES.md` en de governanceversie zijn beide normatief maar hebben verschillende omvang, taal en prioriteitsregels; één canonieke bron ontbreekt.
4. `GOVERNANCE_RULES.md` verlangt PDF-paren voor audits/governancerapporten, maar de repository bevat hoofdzakelijk alleen Markdown en de nieuwe recoveryopdracht verlangt uitsluitend dit Markdownrapport. Besluit nodig of PDF-governance nog actief is.
5. Oude archive-governance verlangt een approved archive location; nieuwe README stelt dat Git-versioning operationele archivering vervangt. Een beperkte governance-history policy ontbreekt.
6. `DRIVE_STRUCTURE.md` maakt `08_MAP_SPECIFICATIONS` leidend, maar dit domein ontbreekt in de goedgekeurde docs-doelboom.
7. `DOCUMENT_STANDARDS.md` schrijft hoofdletters én vet voor alle hoofdkoppen voor, terwijl de meeste leidende governancebestanden en dit opdrachtformat die conventie niet volgen.
8. Templates moeten volgens huidige governance exclusief onder `docs/03_SHARED_SERVICES/TEMPLATES` staan, maar `03_SHARED_SERVICES` bestaat niet in het nieuwe doelbeeld. Dit blijft bewust onbeslist onder de template-freeze.

## 10. Risico's

| Risico | Niveau | Beheersing |
|---|---|---|
| Link-/agentbreuk door bulk-moves | Hoog | Maak dependency-map; move per categorie; valideer Markdown én tekstpaden. |
| Verlies van de juiste versie bij samenvoegen | Hoog | Vergelijk inhoud, history en owners; behoud bron tot expliciete acceptatie. |
| Templates impliciet wijzigen tijdens structuurherstel | Hoog | Templatepaden hard bevriezen; aparte beslissing/PR. |
| Stale audit blijft als actuele waarheid gelezen | Hoog | Na akkoord labelen/verplaatsen naar governance-history en index corrigeren. |
| Lege nieuwe lanes creëren zonder inhoudsbesluit | Middel | Geen mappen maken vóór lane-classificatie en ownerreview. |
| Drive-scripts raken uit lijn met docs | Hoog | Geen Drive uitvoeren; scripts pas na docsbesluit dry-runnen en reviewen. |
| Agent autonomy/approval verandert onbedoeld | Hoog | Agentinhoud niet herschrijven tijdens padmigratie; CM CONTROL-review verplicht. |
| Getrackte dependencies vertroebelen audits | Middel | Later deploymentbehoefte en lockfilebeleid beoordelen. |

## 11. Voorgestelde uitvoeringsvolgorde na review

1. **Reviewgate:** keur classificaties, scores, doelboom en uitzonderingen goed of pas ze aan.
2. **Governancebesluit/ADR:** leg prioriteit vast voor recovery versus V1.0-baseline; bepaal archive/history-, Map Specifications- en templatepositie.
3. **Canonieke governance:** consolideer dubbele Governance Rules en markeer stale audits zonder iets te verwijderen.
4. **Dependency-map:** inventariseer alle Markdown-, platte-pad-, CI-, agent-, script- en registerreferenties per voorgenomen move.
5. **Operations per categorie:** eerst Knowledge Base, dan Playbooks, SOPs/Workflows, Automations en ten slotte Agents; iedere stap in een aparte reviewbare commit.
6. **Business lanes:** classificeer shared-serviceinhoud naar `03_CLIENTS`, `04_DEALS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT` of organisatiebrede Operations. Maak lanes pas wanneer bestemming is goedgekeurd.
7. **Root en historie:** voeg duplicaatkandidaten gecontroleerd samen en archiveer historische rapporten volgens het nieuwe beleid; niets verwijderen zonder aparte toestemming.
8. **Templates (aparte fase):** pas na opheffing van de freeze inhoud, duplicaten en definitieve locatie beoordelen.
9. **Validatie:** linkscan, tekstpadscan, governance-CI, script syntax/tests, duplicatecheck en as-built vergelijking.
10. **Eindreview:** update README, AS_BUILT, operating model, governance, Drive Structure, document standards, version control en decision log in samenhang; merge naar main uitsluitend na Sophia-approval.

## 12. Migratievoorstel per relevant bestand

De tabel classificeert elk inhoudelijk getrackt bestand buiten de lege `.gitkeep`-structuurdragers. Lokaal genegeerde `node_modules` is geen repository-inhoud. Bestemmingen zijn voorstellen, geen moves.

| Bestand | Status | Voorstel / motivatie |
|---|---|---|
| `docs/00_GOVERNANCE/REPOSITORY_RECOVERY_REPORT.md` | **BEHOUDEN** | Audit- en reviewgate voor deze recovery. |
| `.github/PULL_REQUEST_TEMPLATE.md` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/cm-control/README.md` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/cm-control/config.json` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/cm-control/review.mjs` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/cm-control/system-prompt.md` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/workflows/cm-control-review.yml` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.github/workflows/cm-governance.yml` | **REVIEW_NODIG** | Controleer CI/agentpaden na goedgekeurde migratie; nu ongewijzigd. |
| `.gitignore` | **BEHOUDEN** | Technische repositoryconfiguratie. |
| `CM_DRIVE_READINESS_AUDIT_REPORT.md` | **ARCHIVEREN** | Historisch rootrapport/-plan: voorstel naar gecontroleerde governance-history; niet verwijderen. |
| `CM_FLOW_PLAYBOOK.md` | **SAMENVOEGEN** | Vergelijk met docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md; doelpad na review docs/05_OPERATIONS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md. |
| `CM_MONEY_PLAYBOOK.md` | **SAMENVOEGEN** | Vergelijk met docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md; doelpad na review docs/05_OPERATIONS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md. |
| `CM_OPS_PLAYBOOK.md` | **SAMENVOEGEN** | Vergelijk met docs/07_AI_AGENTS/PLAYBOOKS/CM_OPS_PLAYBOOK.md; doelpad na review docs/05_OPERATIONS/PLAYBOOKS/CM_OPS_PLAYBOOK.md. |
| `CM_OS_BASELINE_REVIEW.md` | **SAMENVOEGEN** | Vergelijk met gelijknamige governanceversie; archiveer superseded kopie pas na akkoord. |
| `DRIVE_STRUCTURE_ALIGNMENT_REPORT.md` | **ARCHIVEREN** | Historisch rootrapport/-plan: voorstel naar gecontroleerde governance-history; niet verwijderen. |
| `FINAL_GOVERNANCE_ALIGNMENT_REPORT.md` | **SAMENVOEGEN** | Vergelijk met gelijknamige governanceversie; archiveer superseded kopie pas na akkoord. |
| `GOVERNANCE_RULES.md` | **SAMENVOEGEN** | Vergelijk met docs/00_GOVERNANCE/GOVERNANCE_RULES.md; behoud één canonieke governancebron. |
| `README.md` | **BEHOUDEN** | Canoniek repository-entrypoint; later alleen governance-alignment. |
| `SPRINT2B_GOVERNANCE_CONFLICT_REPORT.md` | **SAMENVOEGEN** | Vergelijk met gelijknamige governanceversie; archiveer superseded kopie pas na akkoord. |
| `SPRINT2D_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch rootrapport/-plan: voorstel naar gecontroleerde governance-history; niet verwijderen. |
| `SPRINT2E_PARTIAL_LIVE_MIGRATION_PLAN.md` | **ARCHIVEREN** | Historisch rootrapport/-plan: voorstel naar gecontroleerde governance-history; niet verwijderen. |
| `TEMPLATE_MIGRATION_PLAN.md` | **ARCHIVEREN** | Historisch rootrapport/-plan: voorstel naar gecontroleerde governance-history; niet verwijderen. |
| `docs/00_GOVERNANCE/ADR/ADR-2026-07-01-cm-os-v1-production-baseline.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/ADR/ADR-2026-07-02-consolidate-case-duplicate-docs-directories.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/ADR/README.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/AGENT_COMMUNICATION_PROTOCOL_CONTROL_AUDIT.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/AGILE_OPERATING_CYCLE.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/AI_TOOL_RADAR.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/APPROVAL_LOG.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/AUTOMATION_BACKLOG.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_ARCHITECTURE_DECISIONS.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_CHANGE_IMPACT_MATRIX.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_GOVERNANCE_MATRIX.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_OPERATING_MODEL.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_OS_BASELINE_REVIEW.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_OS_RELEASES.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_RELEASE_NOTES.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_REPOSITORY_CHECKLIST.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_REPOSITORY_HEALTH.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/HISTORY/RECOVERY_REPORTS/CM_REPOSITORY_RECOVERY_PLAN.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_SOURCE_OF_TRUTH.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/CM_SYSTEM_DECISION_MATRIX.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CM_TERMINOLOGY_STANDARD.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/CODEX_REVIEW_RESOLUTION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/DECISION_LOG.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/DRIVE_INVENTORY_ANALYSIS_WORKFLOW.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/DRIVE_INVENTORY_EXPORT_GUIDE.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/FINAL_GOVERNANCE_ALIGNMENT_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/GOVERNANCE_RULES.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/LANE_02_CLEANUP_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/OPEN_PR_REVIEW.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/README.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/REPOSITORY_AUDIT.md` | **ARCHIVEREN** | Stale audit claimt oude structuur als COMPLIANT; bewaren als historie na review. |
| `docs/00_GOVERNANCE/SPRINT1_DRIVE_IMPLEMENTATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_EXECUTION_GUIDE.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT2B_GOVERNANCE_CONFLICT_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT2G_DRY_RUN_PROJECTED.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT2G_GOVERNANCE_LOCK_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT3A_04_BUSINESS_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3A_04_BUSINESS_REVIEW_PLAN.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3C_06_PROJECTS_EVENTS_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3D2_ARTIST_CHILD_SCAN_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3D_01_ARTIST_MANAGEMENT_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3E_07_ARCHIVE_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT3_FREEZE_RULES.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/SPRINT4A_KALIBWOY_DEEP_REVIEW_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT4B_FINAL_REVIEW.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/SPRINT4B_LATIFAH_GINIIO_DTRAIN_REMEDIATION_REPORT.md` | **ARCHIVEREN** | Historisch audit-/sprintbewijs; voorstel voor governance-history na review. |
| `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` | **REVIEW_NODIG** | Governancewaarde en actualiteit laten bevestigen vóór consolidatie. |
| `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/VERSION_CONTROL.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/00_GOVERNANCE/WORKFLOW_DOCUMENTATION.md` | **BEHOUDEN** | Actieve governancebron; inhoudelijke alignment in een latere, goedgekeurde fase. |
| `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/BUYER_DATABASE.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/BUYER_QUALIFICATION_MODEL.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/CATALOG_VALUATION_PLAYBOOK.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/CLOSING_WORKFLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/DATA_ROOM_ACCESS_MODEL.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/DUE_DILIGENCE_CHECKLIST.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/LOI_WORKFLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/README.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/01_MASTER_BOUTIQUE/SUCCESS_FEE_WORKFLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/00_ARTIST_MANAGEMENT_MAP.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/01_ARTIST_ONBOARDING_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/02_ARTIST_MANAGEMENT_MAP.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/02_BRAND_AUDIT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/03_ARTIST_BRANDBOOK_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/04_ARTIST_ROADMAP_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/05_RELEASE_STRATEGY_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/06_MONTHLY_MANAGEMENT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/07_DEAL_NEGOTIATION_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/08_BRAND_PARTNERSHIP_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/09_ARTIST_OFFBOARDING_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_ARTIST_BRANDBOOK_FLOW.md` | **ARCHIVEREN** | Reeds als legacy gemarkeerd; behoud totdat archiefbeleid is goedgekeurd. |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_MONTHLY_MANAGEMENT_FLOW.md` | **ARCHIVEREN** | Reeds als legacy gemarkeerd; behoud totdat archiefbeleid is goedgekeurd. |
| `docs/02_ARTIST_MANAGEMENT/ARCHIVE/2026-06-16_LANE_02/LEGACY_RELEASE_STRATEGY_FLOW.md` | **ARCHIVEREN** | Reeds als legacy gemarkeerd; behoud totdat archiefbeleid is goedgekeurd. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_APPROVAL_MATRIX.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_BRAND_AUDIT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_BUSINESS_AUDIT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_CLIENT_WORKFLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_COMMUNICATION_SOP.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_DELIVERABLES_REGISTER.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_FIT_CHECK.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_FOLDER_STANDARD.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_INTAKE_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_MANAGEMENT_AUDIT.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_MANAGEMENT_SOP.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_MEETING_SOP.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_OFFBOARDING_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_ONBOARDING_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/BRAND_AUDIT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/BRAND_PARTNERSHIP_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/CLOSE_OUT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/DEALS_RIGHTS_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/DEAL_NEGOTIATION_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/ONBOARDING_CHECKLIST.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/README.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/RELEASE_CHECKLIST.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/RIGHTS_ROYALTY_AUDIT_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/SCOPE_CREEP_CONTROL.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/02_ARTIST_MANAGEMENT/UPSELL_NEXT_PHASE_FLOW.md` | **BEHOUDEN** | Lane-specifieke documentatie blijft bij de business lane; toets later duplicatie en documenttype. |
| `docs/03_SHARED_SERVICES/ADMIN_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/ADMIN_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/ARCHIVE_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/ARCHIVE_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/ARCHIVE_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/ARCHIVE_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CAMPAIGN_DELIVERY_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/CAMPAIGN_DELIVERY_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CLIENT_CLOSE_OUT.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/CLIENT_CLOSE_OUT.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/CLIENT_FOLDER_STANDARD.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CLIENT_ONBOARDING.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/CLIENT_ONBOARDING.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/COMMUNICATION_PROCESS.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/COMMUNICATION_PROCESS.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CONTENT_PUBLICATION_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/CONTENT_PUBLICATION_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CONTENT_PUBLICATION_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/CONTENT_PUBLICATION_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/CONTRACT_LIFECYCLE_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/CONTRACT_LIFECYCLE_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/EMAIL_TEMPLATES.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/EMAIL_TEMPLATES.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/FILE_MANAGEMENT.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/FILE_MANAGEMENT.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/FINANCE_INTAKE_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/FINANCE_INTAKE_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/FINANCE_RECONCILIATION_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/FINANCE_RECONCILIATION_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/GOVERNANCE_EXPORT_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/GOVERNANCE_EXPORT_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/INTERN_ONBOARDING_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/INTERN_ONBOARDING_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/LEGAL_REVIEW_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/LEGAL_REVIEW_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/LEGAL_REVIEW_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/LEGAL_REVIEW_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/MARKETING_PLANNING_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/MARKETING_PLANNING_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/MARKETING_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/MARKETING_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/MEETING_PROCESS.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/MEETING_PROCESS.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/OPERATIONS_SOP.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/SOPS/OPERATIONS_SOP.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/PROCESS_CHANGE_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/PROCESS_CHANGE_FLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/PROPOSAL_WORKFLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/PROPOSAL_WORKFLOW.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/README.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/README.md, na link- en overlapreview. |
| `docs/03_SHARED_SERVICES/TEMPLATES/00_TEMPLATE_INDEX.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/CLIENT_ONBOARDING_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/CLIENT_PROFILE_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/DO_NOTS_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/MEETING_RECAP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/02_ARTIST_MANAGEMENT/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/02_ARTIST_MANAGEMENT/RELEASE_KICKOFF_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/02_ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/DEAL_MEMO_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/MUSIC_RIGHTS_REGISTER.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/PARTNERSHIP_BRIEF_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/03_MASTER_BOUTIQUE/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/04_CLIENT_DELIVERABLES/BRAND_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/04_CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/04_CLIENT_DELIVERABLES/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/05_CLICKUP_REFERENCES/ACTION_TRACKER_CLICKUP_REFERENCE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/05_CLICKUP_REFERENCES/DEAL_PIPELINE_CLICKUP_REFERENCE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/05_CLICKUP_REFERENCES/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/06_GMAIL_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/06_GMAIL_TEMPLATES/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/07_REPORTING/MONTHLY_REPORT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/07_REPORTING/README.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/99_TEMPLATE_GOVERNANCE/TEMPLATE_GAP_LOG_SPEC.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/99_TEMPLATE_GOVERNANCE/TEMPLATE_REVIEW_PROCESS.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/99_TEMPLATE_GOVERNANCE/TEMPLATE_STATUS_REGISTER.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/99_TEMPLATE_GOVERNANCE/TEMPLATE_USAGE_REPORT_SPEC.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_BRANDBOOK_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_OFFBOARDING_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ONBOARDING_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/ARTIST_ROADMAP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/BRAND_PARTNERSHIP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/MONTHLY_MANAGEMENT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/RELEASE_STRATEGY_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MONTHLY_REPORT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/CM_CONTROL_REPOSITORY_AUDIT_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_TEMPLATES.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/GMAIL_TEMPLATES.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_ARCHITECTUURSTANDAARD.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_GAP_LOG_SPEC.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REVIEW_PROCESS.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_STATUS_REGISTER.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_USAGE_REPORT_SPEC.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md` | **REVIEW_NODIG** | Template-freeze: niet wijzigen; duplicaten alleen registreren voor aparte templatefase. |
| `docs/03_SHARED_SERVICES/YEAR_END_FINANCE_FLOW.md` | **VERPLAATSEN** | Organisatiebrede shared-service documentatie; voorgesteld doel docs/05_OPERATIONS/WORKFLOWS/YEAR_END_FINANCE_FLOW.md, na link- en overlapreview. |
| `docs/04_SYSTEMS/AI_AGENTS.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AGENTS/AI_AGENTS.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/AUTOMATION/CM_AGENT_ACTIVATION_STRATEGY.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AUTOMATIONS/CM_AGENT_ACTIVATION_STRATEGY.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/AUTOMATION/CM_CONTROL_GITHUB_ACTION_V1.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AUTOMATIONS/CM_CONTROL_GITHUB_ACTION_V1.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/AUTOMATION/CM_MONEY_MONEYBIRD_OPEN_ITEMS_SPEC.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AUTOMATIONS/CM_MONEY_MONEYBIRD_OPEN_ITEMS_SPEC.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/AUTOMATIONS.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AUTOMATIONS/AUTOMATIONS.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CLICKUP_MAPPING.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_MAPPING.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CLICKUP_STRUCTURE.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_STRUCTURE.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CM_ARCHITECTURE_MAP.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CM_ARCHITECTURE_MAP.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CM_DRIVE_READINESS_AUDIT.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CM_DRIVE_READINESS_AUDIT.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CM_DRIVE_READINESS_SCORECARD.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CM_DRIVE_READINESS_SCORECARD.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/CM_VAULT_V1.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CM_VAULT_V1.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/DRIVE_MAPPING.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/GMAIL_TEMPLATES.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/GMAIL_TEMPLATES.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/GOOGLE_DRIVE_STRUCTURE.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/GOOGLE_DRIVE_STRUCTURE.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/MAKE_SCENARIO_MAP.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/AUTOMATIONS/MAKE_SCENARIO_MAP.md, afhankelijkheden eerst herstellen. |
| `docs/04_SYSTEMS/README.md` | **VERPLAATSEN** | Systeemdocumentatie buiten leidende boom; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/README.md, afhankelijkheden eerst herstellen. |
| `docs/05_KNOWLEDGE_BASE/APA_GUIDE.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/APA_GUIDE.md. |
| `docs/05_KNOWLEDGE_BASE/BRAND_PARTNERSHIPS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/BRAND_PARTNERSHIPS.md. |
| `docs/05_KNOWLEDGE_BASE/BUMA_STEMRA.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/BUMA_STEMRA.md. |
| `docs/05_KNOWLEDGE_BASE/CATALOG_ACQUISITIONS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/CATALOG_ACQUISITIONS.md. |
| `docs/05_KNOWLEDGE_BASE/DEAL_TERMS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/DEAL_TERMS.md. |
| `docs/05_KNOWLEDGE_BASE/DISTRIBUTION.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/DISTRIBUTION.md. |
| `docs/05_KNOWLEDGE_BASE/DUE_DILIGENCE.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/DUE_DILIGENCE.md. |
| `docs/05_KNOWLEDGE_BASE/LICENSING.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/LICENSING.md. |
| `docs/05_KNOWLEDGE_BASE/LOI_GUIDE.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/LOI_GUIDE.md. |
| `docs/05_KNOWLEDGE_BASE/MANAGEMENT_DEALS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/MANAGEMENT_DEALS.md. |
| `docs/05_KNOWLEDGE_BASE/MASTER_RIGHTS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/MASTER_RIGHTS.md. |
| `docs/05_KNOWLEDGE_BASE/MUSIC_COPYRIGHT.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/MUSIC_COPYRIGHT.md. |
| `docs/05_KNOWLEDGE_BASE/MUSIC_REVENUE_MODEL.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/MUSIC_REVENUE_MODEL.md. |
| `docs/05_KNOWLEDGE_BASE/MUSIC_VALUATION.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/MUSIC_VALUATION.md. |
| `docs/05_KNOWLEDGE_BASE/NEIGHBOURING_RIGHTS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/NEIGHBOURING_RIGHTS.md. |
| `docs/05_KNOWLEDGE_BASE/PUBLISHING_DEALS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/PUBLISHING_DEALS.md. |
| `docs/05_KNOWLEDGE_BASE/PUBLISHING_RIGHTS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/PUBLISHING_RIGHTS.md. |
| `docs/05_KNOWLEDGE_BASE/RECORD_LABEL_DEALS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/RECORD_LABEL_DEALS.md. |
| `docs/05_KNOWLEDGE_BASE/RED_FLAGS_LIBRARY.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/RED_FLAGS_LIBRARY.md. |
| `docs/05_KNOWLEDGE_BASE/ROYALTY_STREAMS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/ROYALTY_STREAMS.md. |
| `docs/05_KNOWLEDGE_BASE/SENA.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SENA.md. |
| `docs/05_KNOWLEDGE_BASE/SPLIT_SHEETS.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SPLIT_SHEETS.md. |
| `docs/05_KNOWLEDGE_BASE/SYNC_LICENSING.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/KNOWLEDGE_BASE/SYNC_LICENSING.md. |
| `docs/05_OPERATIONS/AGENTS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/AUTOMATIONS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/KNOWLEDGE_BASE/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/OPERATIONS_INDEX.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/PLAYBOOKS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/SOPS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/05_OPERATIONS/WORKFLOWS/README.md` | **REVIEW_NODIG** | Handmatige classificatie vereist. |
| `docs/06_PLAYBOOKS/ARTIST_POSITIONING_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/ARTIST_POSITIONING_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/BUY_SIDE_PROCESS_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/BUY_SIDE_PROCESS_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/CAREER_DEVELOPMENT_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CAREER_DEVELOPMENT_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/CLIENT_ONBOARDING_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CLIENT_ONBOARDING_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/DEAL_NEGOTIATION_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/DEAL_NEGOTIATION_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/NETWORKING_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/NETWORKING_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/PUBLISHING_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/PUBLISHING_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/RELEASE_CAMPAIGN_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/RELEASE_CAMPAIGN_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/RIGHTS_RECOVERY_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/RIGHTS_RECOVERY_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md. |
| `docs/06_PLAYBOOKS/SYNC_PLAYBOOK.md` | **VERPLAATSEN** | Legacy hoofdmap; voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/SYNC_PLAYBOOK.md. |
| `docs/07_AI_AGENTS/00_CM_AGENTS_OVERVIEW.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/00_CM_AGENTS_OVERVIEW.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/00_PLAYBOOK_INDEX.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/00_PLAYBOOK_INDEX.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_ADMIN_ASSISTANT.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_ARTIST_MANAGER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_BRAND_PARTNERSHIP_HUNTER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_BUYER_HUNTER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_CLIENT_ONBOARDING_AGENT.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_DEAL_HUNTER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_KNOWLEDGE_MANAGER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_NETWORK_HUNTER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_OPERATIONS_MANAGER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_PROJECT_MANAGER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_RELEASE_MANAGER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_RIGHTS_AUDITOR.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/99_LEGACY_AGENTS/CM_SYNC_HUNTER.md` | **ARCHIVEREN** | Expliciet legacy; gecontroleerd archiveren onder agent-history na review. |
| `docs/07_AI_AGENTS/AGENTS/CM_CONTROL_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_CONTROL_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_FLOW_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_FLOW_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_LEGAL_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_LEGAL_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_MONEY_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_MONEY_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_OPS_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_OPS_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_PROSPECT_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_PROSPECT_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_SOCIAL_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_SOCIAL_AGENT.md. |
| `docs/07_AI_AGENTS/AGENTS/CM_VAULT_AGENT.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_VAULT_AGENT.md. |
| `docs/07_AI_AGENTS/AGENT_CERTIFICATION_STANDARD.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_CERTIFICATION_STANDARD.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_COMMUNICATION_PROTOCOL.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_COMMUNICATION_PROTOCOL.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_DEFINITION_STANDARD.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_DEFINITION_STANDARD.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_HANDOFF_MATRIX.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_LIFECYCLE.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_LIFECYCLE.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_READINESS_CHECKLIST.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_READINESS_CHECKLIST.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AGENT_RESPONSIBILITY_MATRIX.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AGENT_RESPONSIBILITY_MATRIX.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/AI_TASK_AUTONOMY_MATRIX.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_AGENT_ARCHITECTURE.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/CM_AGENT_GOVERNANCE.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_AGENT_GOVERNANCE.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/ESCALATION_PROTOCOLS.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/HANDOFF_CHAIN.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/HANDOFF_CHAIN.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/MIGRATION_NOTES.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/MIGRATION_NOTES.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/OWNERSHIP_RULES.md` | **VERPLAATSEN** | Agent-governance/-register; voorgesteld doel docs/05_OPERATIONS/AGENTS/OWNERSHIP_RULES.md, governance-eigenaarschap eerst beoordelen. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_CONTROL_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_CONTROL_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_FLOW_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_LEGAL_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_LEGAL_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_OPS_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_OPS_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_PROSPECT_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_PROSPECT_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_SOCIAL_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_SOCIAL_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/07_AI_AGENTS/PLAYBOOKS/CM_VAULT_PLAYBOOK.md` | **VERPLAATSEN** | Voorgesteld doel docs/05_OPERATIONS/PLAYBOOKS/CM_VAULT_PLAYBOOK.md; vergelijk rootvariant waar aanwezig. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/00_ADMIN.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/01_ADMIN.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/01_MASTER_BOUTIQUE.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/02_ARTIST_MANAGEMENT.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/02_CONTRACT.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/03_CLIENTS.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/03_STRATEGY.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/04_DEALS.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/04_RELEASES.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/05_BOOKING.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/05_OPERATIONS.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/06_FINANCE.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/07_LEGAL.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/07_SOCIALMEDIA.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/08_MARKETING.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/08_PRESS_EPK.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/09_ARCHIVE.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/09_CONTENT.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/99_ARCHIVE.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/README.md` | **REVIEW_NODIG** | Domein ontbreekt in leidende docs-boom; bepaal governance- of Operations-bestemming zonder Drive te wijzigen. |
| `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/SAFE_ROOTS_MIGRATION_CONFIG_2G.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/cm-drive-census.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/cm-drive-readiness-audit.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/create-cm-drive-structure.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/create-os-custommade-target-structure.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/export-04-business-inventory.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/export-drive-inventory.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/live-migrate-os-custommade-safe-roots.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/migrate-os-custommade-roots.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/google-drive/safe-cleanup-wrong-roots.gs` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/moneybird-feed-agent/.env.example` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/moneybird-feed-agent/README.md` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/moneybird-feed-agent/config.json` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/moneybird-feed-agent/moneybird-feed-agent.js` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |
| `scripts/moneybird-feed-agent/package.json` | **BEHOUDEN** | Technische implementatie blijft buiten docs; valideer documentreferenties na migratie. |

## 13. Expliciet reviewverzoek

Graag review en expliciet besluit over:

1. de scores en classificaties in §6 en §12;
2. de canonieke governanceprioriteit ten opzichte van de V1.0 ADR/Decision Log;
3. de bestemming van `08_MAP_SPECIFICATIONS`;
4. een governance-history/archivebeleid;
5. de toekomstige templatepositie (zonder de freeze nu op te heffen);
6. toestemming voor uitsluitend de eerstvolgende, afzonderlijk gereviewde migratiefase.

**Tot die review blijft de repository inhoudelijk en structureel bevroren.**
