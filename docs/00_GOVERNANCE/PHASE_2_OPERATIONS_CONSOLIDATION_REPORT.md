# Phase 2 Operations Consolidation Report

**Status:** UITGEVOERD / IN REVIEW  
**Branch:** `codex/phase-2-operations-consolidation`  
**Datum:** 2026-07-26  
**Oorspronkelijke uitvoeringsbasis:** `main` op startcommit `264f3bd`
**Herbevestigingsbasis:** actuele `main` op startcommit `37c606a`

## 1. Uitgevoerde moves

De migratie is uitgevoerd in de voorgeschreven volgorde en met `git mv`:

| Volgorde | Categorie | Aantal bestanden | Bron | Canonieke bestemming |
|---:|---|---:|---|---|
| 1 | Knowledge Base | 25 | `docs/05_KNOWLEDGE_BASE/` en geselecteerde systeemkennis | `docs/05_OPERATIONS/KNOWLEDGE_BASE/` |
| 2 | Playbooks | 22 | `docs/06_PLAYBOOKS/` en Agent-playbooks | `docs/05_OPERATIONS/PLAYBOOKS/` |
| 3 | SOPs | 3 | organisatiebrede SOPs uit Shared Services | `docs/05_OPERATIONS/SOPS/` |
| 4 | Workflows | 7 | organisatiebrede workflows uit Shared Services | `docs/05_OPERATIONS/WORKFLOWS/` |
| 5 | Automations | 5 | uitsluitend documentatie/specs uit Systems | `docs/05_OPERATIONS/AUTOMATIONS/` |
| 6 | Agents | 39 | register, architectuur, standaarden, passports en legacy | `docs/05_OPERATIONS/AGENTS/` |

De volledige oude/nieuwe padmatrix, eigenaar, afhankelijkheden, risico, volgorde, validatie en rollback staan per bestand in `PHASE_2_OPERATIONS_MIGRATION_PLAN.md`.

## 2. Geconsolideerde documenten

Er zijn 101 documenten naar de canonieke Operations-categorieën verplaatst. Systeemkennis staat onder `KNOWLEDGE_BASE/SYSTEMS/`; actieve passports onder `AGENTS/ACTIVE/`; 13 legacy passports onder `AGENTS/HISTORY/LEGACY/`. Het Agent Register en de Playbook Index hebben ieder exact één actieve locatie. README's fungeren als categorienavigatie en niet als concurrerende indexes.

## 3. Overlapkandidaten die niet zijn samengevoegd

`CM_FLOW_PLAYBOOK.md`, `CM_MONEY_PLAYBOOK.md` en `CM_OPS_PLAYBOOK.md` verschillen inhoudelijk van hun gelijknamige rootvarianten. De Agent-varianten zijn zonder overschrijven naar `docs/05_OPERATIONS/PLAYBOOKS/` verplaatst; de drie rootbestanden zijn ongewijzigd behouden. SHA-256 bevestigde voor ieder paar verschillende hashes. Inhoudelijke samenvoeging is niet aantoonbaar veilig en blijft een expliciet restrisico.

## 4. Oude en nieuwe paden

De oude hoofdmappen `docs/05_KNOWLEDGE_BASE/`, `docs/06_PLAYBOOKS/` en `docs/07_AI_AGENTS/` zijn na volledige verplaatsing afwezig. `docs/03_SHARED_SERVICES/` en `docs/04_SYSTEMS/` blijven geldige technische/documentaire locaties voor uitgesloten lane-, template- en externe-platformdocumentatie. De exacte file-level translaties staan in het migratieplan.

## 5. Linkscanresultaten

De relatieve Markdown-linkscan over repository-eigen Markdown meldt nul gebroken links. Twee meldingen in `scripts/moneybird-feed-agent/node_modules/` zijn vendordocumentatie en geen repositorydocumentatie; deze uitgesloten dependencybestanden zijn niet gewijzigd. De scan van actieve bronpaden meldt nul verwijzingen naar de drie opgeheven hoofdmappen en nul verwijzingen naar specifiek verplaatste Shared Services- of Systems-documenten.

## 6. Tekstpadscan

De tekstscan controleerde Markdown-links, platte tekst en backtick-paden. Resultaat:

- onterechte actieve legacyreferenties naar de opgeheven hoofdmappen: 0;
- historische governancebestanden met oude paden: 3 bestanden, geldig auditbewijs;
- verwijzingen naar het bevroren templatepad: geldig en bewust behouden;
- resterende verwijzingen naar `docs/03_SHARED_SERVICES/` en `docs/04_SYSTEMS/`: geldig wanneer zij lane-specifieke, template- of externe-platformdocumentatie aanwijzen;
- CM CONTROL-configuratie, workflowcommentaar, system prompt en runner verwijzen naar de nieuwe documentpaden.

## 7. Duplicatecheck

Een SHA-256-check binnen `docs/05_OPERATIONS/` vond geen byte-identieke Markdowndocumenten. De drie expliciet te vergelijken root/Agent-playbookparen zijn juist niet identiek. Semantische overlap is niet automatisch gelijk aan een veilig samenvoegbaar duplicaat en is daarom niet verwijderd.

## 8. Template-freezecontrole

Voor en na de migratie zijn gesorteerde SHA-256-manifesten van `docs/03_SHARED_SERVICES/TEMPLATES/` vergeleken: geen verschil. `git diff` vanaf de startbasis toont nul gewijzigde templatebestanden. Het buiten de templatefolder gelegen `TEMPLATE_REGISTER.md` bleef eveneens staan.

## 9. Out-of-scopecontrole

`git diff --name-only` vanaf `264f3bd` toont nul wijzigingen onder `docs/03_CLIENTS/`, `docs/04_DEALS/`, `docs/06_FINANCE/`, `docs/07_LEGAL/`, `docs/08_MARKETING/`, `docs/09_CONTENT/` en `scripts/`. De wijzigingen aan `.github/cm-control/review.mjs` en `.github/workflows/cm-control-review.yml` zijn uitsluitend commentaar-padaanpassingen; uitvoerbare logica is byte-inhoudelijk niet aangepast buiten die tekstregels. Er zijn geen documenten verwijderd: alle bronbestanden zijn via Git-herkende renames behouden.

## 10. Open risico's

1. De drie afwijkende root-playbooks blijven vindbare overlapkandidaten totdat een bevoegde inhoudseigenaar een variantvergelijking en opvolgerbesluit goedkeurt.
2. Historische documenten bevatten bewust oude paden en mogen niet als actuele instructie worden gebruikt.
3. Shared Services bevat nog lane-specifieke procedures; toekomstige herclassificatie mag alleen binnen de betreffende business-lanefase.
4. Externe-platform- en readinessdocumentatie blijft onder `docs/04_SYSTEMS/` vanwege de expliciete scopegrens.
5. Korte, padloze documentnamen kunnen niet volledig semantisch door een automatische tekstscan worden beoordeeld.

## 11. Rollback-informatie

Rollback gebeurt per logisch commit met `git revert`, in omgekeerde volgorde. De move-commits zijn afzonderlijk voor Knowledge Base, Playbooks, SOPs, Workflows, Automations en Agents vastgelegd. Voor een afzonderlijk bestand staat het reverse-`git mv`-commando in het migratieplan. Omdat niets is verwijderd, blijft ook file history beschikbaar.

## 12. Resterende legacy-locaties

Er zijn geen bestanden meer in de drie opgeheven operationele bronmappen. Geldige resterende locaties zijn:

- `docs/05_OPERATIONS/AGENTS/HISTORY/LEGACY/`: 13 gemarkeerde niet-actieve agentbestanden;
- `docs/00_GOVERNANCE/HISTORY/`: auditbewijs met toegestane historische paden;
- `docs/03_SHARED_SERVICES/TEMPLATES/`: volledig bevroren templates;
- `docs/03_SHARED_SERVICES/`: lane-specifieke of anderszins niet-gemigreerde documenten;
- `docs/04_SYSTEMS/`: geldige externe-platform- en readinessdocumentatie.

Ieder legacy-agentbestand begint met de status `LEGACY — NIET ACTIEF`, een gebruiksverbod voor nieuwe uitvoering en een link naar het actieve Agent Register.

## 13. Advies voor Fase 3

Start Fase 3 pas na review en expliciete goedkeuring van deze PR. Behandel dan business lanes afzonderlijk, zonder de templatefreeze op te heffen. Plan daarnaast een eigenaarreview voor de drie afwijkende root-playbooks; combineer of archiveer geen variant zonder inhoudelijke bewijsvoering en een vastgelegd opvolgerbesluit.

## Validatie-evidence

| Controle | Resultaat |
|---|---|
| `git diff --check` | geslaagd |
| relatieve Markdown-links, repository-eigen docs | 0 gebroken |
| oude actieve bronpaden | 0 onterechte verwijzingen |
| exacte duplicaten binnen Operations | 0 |
| gevulde categorieën | alle zes bevatten meerdere documenten |
| gewijzigde templates | 0 |
| gewijzigde uitgesloten business-lanes | 0 |
| gewijzigde scripts | 0 |
| actief Agent Register | exact 1 |
| actieve Playbook Index | exact 1 |
| legacy headers | 13 van 13 |

### Herbevestiging vanaf actuele `main`

Op 2026-07-26 is de volledige eindtoestand opnieuw gecontroleerd vanaf
`37c606a`. De canonieke structuur en alle eerder uitgevoerde moves waren daar al
aanwezig. Daarom zijn bestanden niet opnieuw heen en weer verplaatst: dat zou
onnodige rename-ruis veroorzaken en de audit trail verslechteren. De
herbevestiging voegde uitsluitend het ontbrekende subregister voor
`KNOWLEDGE_BASE/SYSTEMS/` toe en herhaalde de validaties.

De herhaalde relatieve linkscan vond nul gebroken links in repository-eigen
Markdown. Twee meldingen binnen genegeerde `node_modules`-vendordocumentatie
vallen buiten de repositorydocumentatie en zijn niet gewijzigd. De tekstpadscan
bevestigde opnieuw dat verwijzingen naar `docs/03_SHARED_SERVICES/TEMPLATES/` en
de resterende externe-platformdocumenten onder `docs/04_SYSTEMS/` geldig zijn;
oude bronpaden in het migratieplan en de rapportage zijn auditbewijs, geen
actieve instructies.
