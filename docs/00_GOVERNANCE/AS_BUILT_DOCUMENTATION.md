# AS-BUILT DOCUMENTATIE

> Peildatum: 2026-08-11
> Owner: CM CONTROL
> Regel: alleen aantoonbare toestand; ontwerp is nooit automatisch live.

## Werkelijke repositorytoestand

GitHub is de source of truth voor Governance, Workflows, SOPs, Playbooks, Automations, Agents, Knowledge Base en systeemdocumentatie. De actieve `docs/`-boom gebruikt domeinen `00_GOVERNANCE` tot en met `09_CONTENT`; organisatiebrede uitvoering staat onder `docs/05_OPERATIONS/`. Governance-history staat uitsluitend onder `docs/00_GOVERNANCE/HISTORY/` in `AUDITS`, `BASELINES`, `MIGRATIONS`, `RECOVERY_REPORTS`, `SPRINT_REPORTS` en `SUPERSEDED` en is niet leidend.

Recovery is `CLOSED / COMPLETED`. Het gesloten plan is behouden in `HISTORY/RECOVERY_REPORTS/CM_REPOSITORY_RECOVERY_PLAN.md` en claimt geen voorrang.

## Systeem- en capability states

| Onderdeel | State | Werkelijke toestand / bewijsgrens |
|---|---|---|
| GitHub-structuur en governance | `LIVE` | Tracked repositoryboom, governance-index, ADR's en CI-workflows zijn aanwezig. |
| Workflows, SOPs, Playbooks, Knowledge Base | `LIVE` als documentatie | Operationele uitvoering buiten GitHub is niet door aanwezigheid van documentatie bewezen. |
| Agent-layer (8 ACTIVE-contracten) | `PRE-PRODUCTION` | Definities, runbooks, prompts, build specs en passports bestaan; geen algemene Level-3 production approval. |
| Agent autonomy | `PRE-PRODUCTION` | Read/analyse kan per bewezen connector; writes volgen `AGENT_CAPABILITY_REGISTER.md`. Geen generieke autonome externe writes. |
| CM VAULT V1 | `PAUSED` | Make scenario `6289645`: read-only inspectie/detectie/rapportage; geen folder creation. |
| Folder create/rename/move | `PRE-PRODUCTION` | Uitsluitend FLOW / approved script / approval-gate; voor VAULT `FORBIDDEN`. |
| Runbooks | `DESIGNED` | Uitvoeringsinstructies bestaan; runtimegeldigheid volgt connector- en certification-evidence. |
| Build Specs | `DESIGNED` | Technisch ontwerp; geen connection- of live-claim. |
| Operating Prompts | `DESIGNED` | Promptlaag bestaat; connection en deployment niet bewezen door tekstbestand. |
| Certification | `PRE-PRODUCTION` | Passports/evidence bestaan; open gates blijven gelden. |
| ClickUp | `CONNECTED_READ_ONLY` voor vastgelegde substrate-scan | Schrijfconnectie is niet bewezen; ClickUp blijft execution source. |
| Google Drive | `CONNECTED_READ_ONLY` voor vastgelegde scans | Live dossiers blijven buiten GitHub; mutaties zijn gated. |
| Gmail | `NOT_CONNECTED` | Geen actuele connector-/execution-evidence in deze canonicalization. |
| Moneybird | `NOT_CONNECTED` | Financiële waarheid blijft Moneybird; geen actuele agentconnection bewezen. |
| Make | `CONNECTED_WITH_APPROVAL` / scenario-afhankelijk | Scenario-register is canoniek; CM VAULT V1 zelf staat `PAUSED`. |
| Apps Script | `PRE-PRODUCTION` | Scripts en tests bestaan; live deployment/permission niet algemeen bewezen. |
| Control Tower | `DESIGNED` | Governance-/reviewconcept aanwezig; geen bewezen standalone live cockpit. |

Toolstates en permissions zijn canoniek in `docs/05_OPERATIONS/AGENTS/AGENT_CAPABILITY_REGISTER.md`. Een genoemde tool is geen connection claim. Iedere materiële run vereist een run-ID/trace en evidence; bij ontbrekend bewijs geldt safe stop.

## Systeemgrenzen

| Systeem | Canonieke rol |
|---|---|
| GitHub | Hoe het systeem werkt; geen live client- of contractdata. |
| Google Drive | Live dossiers, getekende documenten, deliverables en werkbestanden. |
| ClickUp | Uitvoering, Pipeline, taken, owners, deadlines en taakgeschiedenis. |
| Gmail | Correspondentie en verzendbewijs. |
| Moneybird | Financiële waarheid. |
| Make / Apps Script | Gated automatiserings- en integratielaag. |
| Agents | Analyse, voorbereiding, controle en alleen evidence-gebonden acties binnen permission. |

## Reviewritme

Na elke structuur-, connection-, permission- of productionstatuswijziging en minimaal elk kwartaal. Statusverhoging vereist evidence in de relevante certification- of scenario-laag.
