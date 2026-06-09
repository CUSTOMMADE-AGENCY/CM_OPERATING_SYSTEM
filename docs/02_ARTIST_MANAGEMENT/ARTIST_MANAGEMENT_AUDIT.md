# Artist Management Audit

## Scope

Deze audit beoordeelt de volledige map `docs/02_ARTIST_MANAGEMENT` op duplicaten, documentoverlap, ontbrekende workflows, ontbrekende SOP's, ontbrekende matrices, terminologie-inconsistenties en bestandsnaam-inconsistenties.

Er zijn geen inhoudelijke wijzigingen aan bestaande documenten uitgevoerd. Dit bestand is uitsluitend een audit en bevat geen nieuwe workflow, SOP, matrix, checklist of template.

## Executive summary

De map bevat een sterke genummerde lifecycle-laag voor Artist Management, maar ook een oudere ongenummerde laag met korte legacy-documenten, stable-link shims en ClickUp/template-documenten. De belangrijkste governance-keuze die ontbreekt is welke laag canonical is: de genummerde workflows `01_` t/m `09_` of de ongenummerde stable-link bestanden.

Belangrijkste bevindingen:

1. Er zijn directe duplicaten tussen genummerde canonical workflows en ongenummerde flow-bestanden.
2. Er is sterke overlap tussen `00_ARTIST_MANAGEMENT_MAP.md`, `02_ARTIST_MANAGEMENT_MAP.md` en `README.md`.
3. Verschillende korte legacy-flows bevatten vrijwel dezelfde boilerplate voor kwaliteitschecks, opslaggrenzen en repository-hygiëne.
4. Live execution-objecten zoals approval matrices, deliverable registers en ClickUp templates horen operationeel in ClickUp, terwijl GitHub alleen de reusable definitie hoort te bewaren.
5. Bestandsnamen mengen genummerde workflows, ongenummerde workflows, `ARTIST_`-prefixes, templates, registers en SOP's zonder één duidelijke conventie.

## 1. Duplicaten

### Directe of bijna-directe duplicaten

| Duplicaatgroep | Primaire bron | Advies | Motivatie |
|---|---|---|---|
| `00_ARTIST_MANAGEMENT_MAP.md`, `02_ARTIST_MANAGEMENT_MAP.md`, `README.md` | `00_ARTIST_MANAGEMENT_MAP.md` | MERGE | Alle drie functioneren als navigatie/entrypoint. `02_ARTIST_MANAGEMENT_MAP.md` bevat ook een eerdere audit en ClickUp-template-overzicht; die informatie hoort in deze audit of in het canonical mapdocument, niet in een tweede mapbestand. |
| `01_ARTIST_ONBOARDING_FLOW.md` en `ARTIST_ONBOARDING_FLOW.md` | `01_ARTIST_ONBOARDING_FLOW.md` | KEEP genummerd, ARCHIVE shim tenzij stable links nodig zijn | Het ongenummerde bestand is alleen een verwijzing naar de genummerde bron. |
| `02_BRAND_AUDIT_FLOW.md`, `BRAND_AUDIT_FLOW.md`, `ARTIST_BRAND_AUDIT_FLOW.md` | `02_BRAND_AUDIT_FLOW.md` | KEEP genummerd, ARCHIVE/MERGE legacy | Er zijn drie brand-audit varianten: canonical workflow, stable-link shim en korte legacy-audit. |
| `03_ARTIST_BRANDBOOK_FLOW.md` en `ARTIST_BRANDBOOK_FLOW.md` | `03_ARTIST_BRANDBOOK_FLOW.md` | MERGE legacy details, daarna ARCHIVE legacy | Het legacy-bestand bevat nuttige brandbook-section details, maar de genummerde workflow is de lifecycle-bron. |
| `04_ARTIST_ROADMAP_FLOW.md` en `ARTIST_ROADMAP_FLOW.md` | `04_ARTIST_ROADMAP_FLOW.md` | KEEP genummerd, ARCHIVE shim tenzij stable links nodig zijn | Het ongenummerde bestand is alleen een verwijzing naar de genummerde bron. |
| `05_RELEASE_STRATEGY_FLOW.md` en `RELEASE_STRATEGY_FLOW.md` | `05_RELEASE_STRATEGY_FLOW.md` | KEEP genummerd, ARCHIVE korte legacy-flow | De korte release-flow overlapt met de complete genummerde release workflow. |
| `06_MONTHLY_MANAGEMENT_FLOW.md` en `MONTHLY_MANAGEMENT_FLOW.md` | `06_MONTHLY_MANAGEMENT_FLOW.md` | MERGE eventuele cadence-details, daarna ARCHIVE legacy | Beide beschrijven dezelfde monthly management cycle. |
| `07_DEAL_NEGOTIATION_FLOW.md` en `DEAL_NEGOTIATION_FLOW.md` | `07_DEAL_NEGOTIATION_FLOW.md` | KEEP genummerd, ARCHIVE shim tenzij stable links nodig zijn | Het ongenummerde bestand is alleen een verwijzing naar de genummerde bron. |
| `08_BRAND_PARTNERSHIP_FLOW.md` en `BRAND_PARTNERSHIP_FLOW.md` | `08_BRAND_PARTNERSHIP_FLOW.md` | KEEP genummerd, ARCHIVE shim tenzij stable links nodig zijn | Het ongenummerde bestand is alleen een verwijzing naar de genummerde bron. |
| `09_ARTIST_OFFBOARDING_FLOW.md` en `ARTIST_OFFBOARDING_FLOW.md` | `09_ARTIST_OFFBOARDING_FLOW.md` | KEEP genummerd, ARCHIVE shim tenzij stable links nodig zijn | Het ongenummerde bestand is alleen een verwijzing naar de genummerde bron. |
| `CLOSE_OUT_FLOW.md` en `09_ARTIST_OFFBOARDING_FLOW.md` | `09_ARTIST_OFFBOARDING_FLOW.md` | MERGE close-out trigger/checklist, daarna ARCHIVE | Close-out is inhoudelijk onderdeel van offboarding. |

## 2. Overlap tussen documenten

| Overlapgebied | Documenten | Impact | Advies |
|---|---|---|---|
| Navigatie en lifecycle | `00_ARTIST_MANAGEMENT_MAP.md`, `02_ARTIST_MANAGEMENT_MAP.md`, `README.md`, `ARTIST_CLIENT_WORKFLOW.md` | Vier plekken leggen uit waar de lifecycle begint en hoe documenten samenhangen. | Maak één canonical map en archiveer of verkort de rest tot verwijzing. |
| Intake versus onboarding | `ARTIST_INTAKE_FLOW.md`, `01_ARTIST_ONBOARDING_FLOW.md`, `ONBOARDING_CHECKLIST.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | Intake staat los, maar hoort operationeel vóór of binnen onboarding. | MERGE intake-criteria in onboarding; live intakevragen naar ClickUp. |
| Brand audit versus brandbook | `02_BRAND_AUDIT_FLOW.md`, `ARTIST_BRAND_AUDIT_FLOW.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md`, `03_ARTIST_BRANDBOOK_FLOW.md`, `ARTIST_BRANDBOOK_FLOW.md` | Audit findings en brandbook sections lopen deels door elkaar. | Scheid diagnostic output van brand-rule production; behoud template als outputformat. |
| Deals versus rights | `07_DEAL_NEGOTIATION_FLOW.md`, `DEALS_RIGHTS_FLOW.md`, `RIGHTS_ROYALTY_AUDIT_FLOW.md`, `ARTIST_BUSINESS_AUDIT_FLOW.md` | Deal review, rights checks en business audit zijn verwant maar niet hetzelfde. | Splits opportunity negotiation, rights/royalty cleanup en business audit duidelijk. |
| Monthly management versus registers | `06_MONTHLY_MANAGEMENT_FLOW.md`, `MONTHLY_MANAGEMENT_FLOW.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md`, `ARTIST_DELIVERABLES_REGISTER.md`, `ARTIST_APPROVAL_MATRIX.md` | Monthly execution gebruikt dezelfde registers en approvals. | GitHub bewaart definities; live registers en recurring tasks horen in ClickUp. |
| Scope creep versus upsell | `SCOPE_CREEP_CONTROL.md`, `UPSELL_NEXT_PHASE_FLOW.md`, `ARTIST_MANAGEMENT_SOP.md` | Scope change en commerciële next phase worden beide bij extra werk gebruikt. | Houd scope control als governance-SOP en upsell als commerciële follow-up workflow. |
| Boilerplate governance | Korte legacy-flows en SOP's | Identieke sections over kwaliteitschecks, opslag/toolgrenzen en repository-hygiëne worden herhaald. | Centraliseer boilerplate in `README.md` of mapdocument; archiveer korte legacy-documenten. |

## 3. Ontbrekende workflows

| Ontbrekende workflow | Prioriteit | Waarom ontbreekt deze |
|---|---|---|
| Artist Intake / Fit Check als canonical workflow | Hoog | Er is een korte `ARTIST_INTAKE_FLOW.md`, maar geen genummerde lifecycle-workflow voor pre-contract intake, qualification, fit/no-fit en proposal handoff. |
| Business Audit als canonical workflow | Middel | `ARTIST_BUSINESS_AUDIT_FLOW.md` bestaat, maar is kort en niet opgenomen in de genummerde lifecycle. |
| Rights/Royalty Audit als canonical workflow | Middel | `RIGHTS_ROYALTY_AUDIT_FLOW.md` bestaat, maar is niet genummerd en heeft geen volledige workflowstructuur zoals eigenaar, inputs, beslismomenten, deliverables en escalaties. |
| Scope Change workflow | Middel | `SCOPE_CREEP_CONTROL.md` definieert policy, maar niet de volledige workflow voor intake, impact assessment, approval, quote, execution of rejection. |
| Crisis / reputation escalation workflow | Hoog | Artist management mist een expliciet proces voor public issues, label/team conflicts, legal threats, missed release deadlines of reputatierisico's. |
| Access & asset handover workflow | Middel | Offboarding noemt afsluiten/overdragen, maar toegang tot accounts, masters, assets, passwords, admin seats en approvals verdient een eigen checklist of subflow. |
| Quarterly strategy review workflow | Laag/Middel | Roadmap en monthly management bestaan, maar er is geen aparte kwartaalreview voor KPI reset, budget, team performance en next-quarter priorities. |

## 4. Ontbrekende SOP's

| Ontbrekende SOP | Prioriteit | Waarom ontbreekt deze |
|---|---|---|
| Artist File & Drive Hygiene SOP | Hoog | Er zijn storage rules, maar geen concrete mapstructuur, naming, versioning, permissions en archival standard voor artistbestanden. |
| Artist Decision Log SOP | Hoog | Veel workflows vereisen written decisions, maar er is geen SOP voor decision format, evidence, approvals, storage en audit trail. |
| Artist Budget & Spend Approval SOP | Hoog | Budget, fees, campaign spend en money decisions komen terug, maar approval thresholds en reconciliation ontbreken als SOP. |
| Artist Vendor / External Team SOP | Middel | Management werkt met publicist, label, distributor, designer, counsel en accountant, maar er is geen SOP voor onboarding, briefing, approvals en performance review van externe partijen. |
| Artist Crisis Communication SOP | Hoog | Communicatie-SOP is algemeen; crisisrespons vraagt aparte severity levels, holding statements, escalation owners en approval windows. |
| Artist Reporting SOP | Middel | Monthly summaries bestaan, maar standaard rapportageformat, KPI cadence, recipient list en evidence requirements ontbreken. |
| Contract & Rights Escalation SOP | Middel | Deals en rights bestaan als flows, maar niet als SOP voor wanneer counsel/accountant verplicht wordt ingeschakeld. |

## 5. Ontbrekende matrices

| Ontbrekende matrix | Prioriteit | Waarom ontbreekt deze |
|---|---|---|
| RACI / ownership matrix | Hoog | De map benoemt owners per workflow, maar geen matrix voor artist, CM, manager, label, publicist, counsel, accountant, distributor en creative team. |
| Escalation severity matrix | Hoog | Escalaties worden genoemd, maar er is geen severity-classificatie voor legal, financial, release, reputation, access en deadline issues. |
| Budget approval threshold matrix | Hoog | Money decisions vereisen written approval, maar thresholds per bedrag/type spend ontbreken. |
| Risk matrix | Middel/Hoog | Risico's worden per workflow genoemd, maar er is geen uniforme impact/likelihood/scoring-matrix. |
| Deliverable approval matrix | Middel | Er is een algemene approval matrix, maar geen specifieke matrix per deliverable type, reviewer en final approver. |
| Channel/communication matrix | Middel | Communication SOP noemt kanalen, maar geen matrix met kanaal per onderwerp, urgency, owner en response-time. |
| Access permissions matrix | Middel | Offboarding en onboarding raken accounttoegang, maar er is geen matrix voor role-based access en revoke rules. |

## 6. Terminologie-inconsistenties

| Inconsistentie | Voorbeelden | Advies |
|---|---|---|
| Workflow, Flow en Proces worden door elkaar gebruikt | `*_FLOW.md`, headings zoals `Workflow stappen`, `Processtappen`, `Proces` | Kies één standaard: documenttype `Workflow`, filename suffix `_FLOW.md` alleen als bestaande conventie behouden blijft. |
| Nederlandse en Engelse termen wisselen | `Doel`, `Reikwijdte`, `Owner`, `Scope`, `Deliverables`, `System of record`, `Pipeline-fases` | Kies bewust hybride operating language of standaardiseer per documentsectie. |
| Release Strategie versus Release Strategy | `05_RELEASE_STRATEGY_FLOW.md` heeft titel `Release Strategie Flow`; template heet `Release Strategy Template` | Kies één term: bij voorkeur filename Engels en titel Nederlands/Engels consistent. |
| Brand Audit, Artist Brand Audit en Brandbook | `BRAND_AUDIT_FLOW.md`, `ARTIST_BRAND_AUDIT_FLOW.md`, `ARTIST_BRANDBOOK_FLOW.md` | Gebruik `Artist` alleen wanneer het onderscheidend is; anders verwijderen voor consistentie. |
| ClickUp template versus GitHub template | `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | Label duidelijk als `ClickUp task template` of `deliverable template`. |
| Matrix versus live register | `ARTIST_APPROVAL_MATRIX.md`, `ARTIST_DELIVERABLES_REGISTER.md` | GitHub-documenten zijn definities; live instances horen in ClickUp. |
| Canonical en stable link | Ongenummerde shims noemen canonical genummerde workflows, terwijl maps naar ongenummerde namen linken | Kies of maps naar canonical genummerde bestanden linken of stable-link shims als officiële publieke links blijven. |

## 7. Bestandsnaam-inconsistenties

| Inconsistentie | Voorbeelden | Advies |
|---|---|---|
| Twee mapbestanden met verschillende nummers | `00_ARTIST_MANAGEMENT_MAP.md`, `02_ARTIST_MANAGEMENT_MAP.md` | Houd één canonical map; archiveer of merge het tweede mapbestand. |
| Genummerde en ongenummerde workflowvarianten | `01_ARTIST_ONBOARDING_FLOW.md` versus `ARTIST_ONBOARDING_FLOW.md` | Kies genummerd voor lifecycle-volgorde of ongenummerd voor stable links; documenteer de keuze. |
| Prefix `ARTIST_` niet consequent | `ARTIST_BRAND_AUDIT_FLOW.md` versus `BRAND_AUDIT_FLOW.md`; `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` versus `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | Hanteer één prefixstrategie per documenttype. |
| Singular/plural en domeinmix | `DEALS_RIGHTS_FLOW.md` combineert deals en rights; `DEAL_NEGOTIATION_FLOW.md` is singular/specifiek | Splits gecombineerde domeinen of benoem expliciet als umbrella. |
| Close-out versus offboarding | `CLOSE_OUT_FLOW.md` naast `ARTIST_OFFBOARDING_FLOW.md` | Gebruik Offboarding als lifecycle-term; close-out als subfase. |
| Template-namen missen typeonderscheid | `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md`, `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | Voeg in titel/omschrijving toe of het een deliverable-template of ClickUp-template is. |

## Documentcategorisatie

| Document | Categorie | Motivatie |
|---|---|---|
| `00_ARTIST_MANAGEMENT_MAP.md` | KEEP | Beste compacte canonical entrypoint voor workflows, SOP's, matrices, checklists, templates, ClickUp templates en lifecycle-volgorde. |
| `01_ARTIST_ONBOARDING_FLOW.md` | KEEP | Complete genummerde onboarding workflow met doel, scope, eigenaar, inputs, stappen, beslismomenten, deliverables, KPI's, escalaties en outputs. |
| `02_ARTIST_MANAGEMENT_MAP.md` | MERGE | Bevat waardevolle eerdere auditinformatie en ClickUp-template-overzicht, maar overlapt met `00_ARTIST_MANAGEMENT_MAP.md`, `README.md` en deze audit. |
| `02_BRAND_AUDIT_FLOW.md` | KEEP | Complete genummerde canonical brand audit workflow. |
| `03_ARTIST_BRANDBOOK_FLOW.md` | KEEP | Complete genummerde canonical brandbook workflow. |
| `04_ARTIST_ROADMAP_FLOW.md` | KEEP | Complete genummerde canonical roadmap workflow. |
| `05_RELEASE_STRATEGY_FLOW.md` | KEEP | Complete genummerde canonical release strategy workflow, ondanks terminologieverschil tussen `Strategy` en `Strategie`. |
| `06_MONTHLY_MANAGEMENT_FLOW.md` | KEEP | Complete genummerde canonical monthly management workflow. |
| `07_DEAL_NEGOTIATION_FLOW.md` | KEEP | Complete genummerde canonical deal negotiation workflow. |
| `08_BRAND_PARTNERSHIP_FLOW.md` | KEEP | Complete genummerde canonical brand partnership workflow. |
| `09_ARTIST_OFFBOARDING_FLOW.md` | KEEP | Complete genummerde canonical offboarding workflow; kan close-out-inhoud absorberen. |
| `ARTIST_APPROVAL_MATRIX.md` | KEEP | Nodig als reusable approval-control definitie; live artist-specifieke approval records horen wel in ClickUp. |
| `ARTIST_BRANDBOOK_FLOW.md` | MERGE | Legacy brandbook workflow met mogelijk nuttige section-details; merge unieke inhoud naar `03_ARTIST_BRANDBOOK_FLOW.md` en archiveer daarna. |
| `ARTIST_BRAND_AUDIT_FLOW.md` | ARCHIVE | Korte legacy-audit overlapt met `02_BRAND_AUDIT_FLOW.md` en `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md`. |
| `ARTIST_BUSINESS_AUDIT_FLOW.md` | MERGE | Inhoud is relevant, maar te kort en niet geïntegreerd in de genummerde lifecycle; merge naar een toekomstige canonical business-audit workflow of map. |
| `ARTIST_CLIENT_WORKFLOW.md` | ARCHIVE | Lifecycle-overzicht wordt beter afgedekt door `00_ARTIST_MANAGEMENT_MAP.md`, `02_ARTIST_MANAGEMENT_MAP.md` en de genummerde workflows. |
| `ARTIST_COMMUNICATION_SOP.md` | KEEP | Noodzakelijke SOP voor communicatiekanalen, response expectations en written confirmation. |
| `ARTIST_DELIVERABLES_REGISTER.md` | MOVE_TO_CLICKUP | De registerdefinitie kan in GitHub blijven, maar het daadwerkelijke register is live execution met status, owner, evidence en Drive-links en hoort primair in ClickUp. |
| `ARTIST_INTAKE_FLOW.md` | MOVE_TO_CLICKUP | Intakevelden zijn vooral operationele task/custom-field input voor lead qualification en onboarding; inhoud kan deels in onboarding worden gemerged. |
| `ARTIST_MANAGEMENT_SOP.md` | KEEP | Belangrijk overkoepelend SOP voor cadence, governance, kwaliteitschecks, system of record, escalation rules en repository-hygiëne. |
| `ARTIST_MEETING_SOP.md` | KEEP | Noodzakelijke SOP voor agenda, notes, decisions en follow-up. |
| `ARTIST_OFFBOARDING_FLOW.md` | ARCHIVE | Stable-link shim naar `09_ARTIST_OFFBOARDING_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `ARTIST_ONBOARDING_FLOW.md` | ARCHIVE | Stable-link shim naar `01_ARTIST_ONBOARDING_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | MOVE_TO_CLICKUP | Beschrijft ClickUp list setup, custom fields, statuses, task groups en automations; hoort als ClickUp-template te worden beheerd. |
| `ARTIST_ROADMAP_FLOW.md` | ARCHIVE | Stable-link shim naar `04_ARTIST_ROADMAP_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `BRAND_AUDIT_FLOW.md` | ARCHIVE | Stable-link shim naar `02_BRAND_AUDIT_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | KEEP | Reusable deliverable-template voor audit findings, evidence, decision log en next actions. |
| `BRAND_PARTNERSHIP_FLOW.md` | ARCHIVE | Stable-link shim naar `08_BRAND_PARTNERSHIP_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `CLOSE_OUT_FLOW.md` | MERGE | Close-out hoort als subfase/checklist in `09_ARTIST_OFFBOARDING_FLOW.md`; archiveer daarna. |
| `DEALS_RIGHTS_FLOW.md` | MERGE | Combineert deal opportunity en rights check; split/merge naar `07_DEAL_NEGOTIATION_FLOW.md` en `RIGHTS_ROYALTY_AUDIT_FLOW.md`. |
| `DEAL_NEGOTIATION_FLOW.md` | ARCHIVE | Stable-link shim naar `07_DEAL_NEGOTIATION_FLOW.md`; archiveer tenzij externe ClickUp/Drive-links deze naam vereisen. |
| `MONTHLY_MANAGEMENT_FLOW.md` | MERGE | Legacy monthly workflow overlapt met `06_MONTHLY_MANAGEMENT_FLOW.md`; merge eventuele cadence-details en archiveer daarna. |
| `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | MOVE_TO_CLICKUP | Beschrijft ClickUp list setup, custom fields, recurring task sections en automations; hoort primair in ClickUp. |
| `ONBOARDING_CHECKLIST.md` | MOVE_TO_CLICKUP | Checklist is execution-control voor onboarding tasks, completion status en missing inputs; beter als ClickUp checklist/template. |
| `README.md` | KEEP | Nuttige korte oriëntatie op doel, entrypoint, lifecycle, execution layer en repository-hygiëne. |
| `RELEASE_CHECKLIST.md` | MOVE_TO_CLICKUP | Release readiness checks vragen owners, deadlines, status en bewijs; hoort als ClickUp checklist bij release execution. |
| `RELEASE_STRATEGY_FLOW.md` | ARCHIVE | Korte legacy-flow overlapt met `05_RELEASE_STRATEGY_FLOW.md`. |
| `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | KEEP | Reusable deliverable-template voor release overview, strategy, campaign plan, asset readiness, budget, approvals en risks. |
| `RIGHTS_ROYALTY_AUDIT_FLOW.md` | MERGE | Relevante specialistische workflow, maar nog kort; maak deze canonical of merge in business/rights auditlaag. |
| `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | KEEP | Reusable deliverable-template voor roadmap context, outcomes, workstreams, risks en monthly review notes. |
| `SCOPE_CREEP_CONTROL.md` | KEEP | Belangrijke governance-control voor out-of-scope verzoeken, fee/timing impact en written approval. |
| `UPSELL_NEXT_PHASE_FLOW.md` | KEEP | Relevante supporting workflow na audit, brandbook, release strategy of managementwerk. |

## Aanbevolen canonical set

Als er opgeschoond wordt, behoud minimaal:

- `README.md`
- `00_ARTIST_MANAGEMENT_MAP.md`
- `01_ARTIST_ONBOARDING_FLOW.md` t/m `09_ARTIST_OFFBOARDING_FLOW.md`
- `ARTIST_MANAGEMENT_SOP.md`
- `ARTIST_COMMUNICATION_SOP.md`
- `ARTIST_MEETING_SOP.md`
- `ARTIST_APPROVAL_MATRIX.md`
- `SCOPE_CREEP_CONTROL.md`
- `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md`
- `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md`
- `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md`
- `UPSELL_NEXT_PHASE_FLOW.md`

## Aanbevolen ClickUp-verplaatsingen

Verplaats of operationaliseer primair in ClickUp:

- `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md`
- `../03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md`
- `ONBOARDING_CHECKLIST.md`
- `RELEASE_CHECKLIST.md`
- `ARTIST_DELIVERABLES_REGISTER.md`
- `ARTIST_INTAKE_FLOW.md`

Deze documenten bevatten vooral live execution-structuur, taskgroepen, custom fields, statuses, evidence, owners of recurring checklist-items.

## Aanbevolen archive/merge-volgorde

1. Beslis eerst of `00_ARTIST_MANAGEMENT_MAP.md` of `02_ARTIST_MANAGEMENT_MAP.md` het canonical mapdocument wordt.
2. Merge unieke informatie uit `02_ARTIST_MANAGEMENT_MAP.md` naar het gekozen mapdocument of naar deze audit.
3. Merge unieke details uit legacy-flows naar de genummerde canonical workflows.
4. Verplaats ClickUp-specifieke templates/checklists naar ClickUp.
5. Archiveer daarna pas stable-link shims en legacy-bestanden, en alleen nadat externe links in ClickUp en Google Drive zijn gecontroleerd.
