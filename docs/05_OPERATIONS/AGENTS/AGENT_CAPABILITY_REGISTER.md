# Agent capability- en connectionregister

> Statusdatum: 2026-08-16
> Owner: CM CONTROL; technische evidence: CM FLOW
> Canonieke scope: connection state, permissions, actions, capability state en minimaal bewijs voor de acht actieve agents.

## Interpretatie
Een toolnaam in een agentdefinitie is **geen connection claim**. Zonder controleerbare connectorconfiguratie plus recente execution-evidence geldt `NOT_CONNECTED`. Permissions: `AUTONOMOUS_READ`, `AUTONOMOUS_WRITE`, `APPROVAL_REQUIRED_WRITE`, `FORBIDDEN`. Toolstates: `CONNECTED`, `CONNECTED_READ_ONLY`, `CONNECTED_WITH_APPROVAL`, `DESIGNED`, `PLANNED`, `PAUSED`, `BROKEN`, `NOT_CONNECTED`.

Elke uitvoering gebruikt een unieke `run_id`/trace-ID en registreert timestamp, actor, source-ID, action, output-ID, approval-ID indien nodig, status en fout/fallback.

## Actuele capability truth

| Agent | Tool/capability | Connection state | Permissions | Actions | Capability state | Evidence | Failure policy |
|---|---|---|---|---|---|---|---|
| CONTROL | GitHub governance review | `CONNECTED` | `AUTONOMOUS_READ`; writes `APPROVAL_REQUIRED_WRITE` | diff/check/review | `LIVE` read/review | commit/PR/check-run-ID | stop bij ontbrekende check; geen merge |
| FLOW | Make scenariobeheer | `CONNECTED_WITH_APPROVAL` | read autonomous; write approval | inspect/test/activate na gate | `PRE-PRODUCTION` | scenario/execution/approval-ID | pause/rollback/escalatie |
| FLOW | Apps Script-mutaties | `DESIGNED` | `APPROVAL_REQUIRED_WRITE` | goedgekeurde foldermutatie | `PRE-PRODUCTION` | scriptversie/dry-run/object-ID | safe stop |
| OPS | ClickUp | `CONNECTED_READ_ONLY` + proofed gated `create_task` | read autonomous; writes approval | read + one proof action | `PRE-PRODUCTION / PROOF-PENDING` | task `86cb5v116` + proof doc | no promotion without observability/CONTROL review |
| MONEY | Moneybird → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; Moneybird writes `FORBIDDEN` | open sales/purchase invoices read | `PROVEN READ-ONLY`; agent pre-production | live MONEY row `5639189895` + evidence | snapshot preserve/safe-stop; no finance mutation |
| MONEY | ClickUp internal follow-up | proofed one gated `create_task` | writes remain `APPROVAL_REQUIRED_WRITE` | internal follow-up only | `PRE-PRODUCTION / PROOF-PENDING` | task `86cb5v3he` | no promotion without post-write observation |
| LEGAL | ClickUp → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; writes gated | LEGAL/deal items read | `PROVEN READ-ONLY` | live LEGAL rows | no write without gate |
| LEGAL | Google Drive → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; Drive writes gated | legal/deal document metadata read | `PROVEN READ-ONLY` | live NDA/ZZP Drive rows | preserve snapshot; no document mutation |
| LEGAL | ClickUp internal follow-up | proofed one gated `create_task` | writes remain `APPROVAL_REQUIRED_WRITE` | internal review follow-up only | `PRE-PRODUCTION / PROOF-PENDING` | task `86cb5v4ur` + proof doc | no promotion without post-write observation |
| LEGAL | Gmail legal feed | `NOT_CONNECTED / NOT_OBSERVED` | no runtime claim | none proven | `DESIGNED` | no Gmail row observed in LEGAL mirror | safe-stop |
| LEGAL | Binding legal action | n.v.t. | `FORBIDDEN` | sign/accept/settle/commit | `FORBIDDEN` | governance | refuse + Sophia |
| PROSPECT | ClickUp PIPELINE → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; writes gated | LEADS/ACTIVE DEALS/terminal pipeline read | `PROVEN READ-ONLY`; agent pre-production | live PROSPECT tab shows LEADS + ACTIVE DEALS | no write without separate proof/gate |
| PROSPECT | Gmail → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; send gated | Gmail metadata/read signal | `PROVEN READ-ONLY` for connectivity; routing QC pending | live `Gmail – ADMIN/SPONSORING` row in PROSPECT tab | relevance check mandatory; misroute → no commercial action |
| PROSPECT | Google Drive → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; Drive writes gated | research/index metadata read | `PROVEN READ-ONLY`; agent pre-production | live contract/rights index Drive rows | no write without separate proof |
| PROSPECT | Canva / LinkedIn | `NOT_CONNECTED / NOT_PROVEN` | no runtime claim | none proven | `DESIGNED` | no execution evidence | safe-stop |
| PROSPECT | External outreach/proposal/pricing/negotiation | n.v.t. | `APPROVAL_REQUIRED_WRITE` | prepare only; send/commit only after Sophia gate | `NOT_PROMOTED` | approval-ID + message/proposal result-ID required | no approval → refuse |
| SOCIAL | Canva/CMS/Gmail/ClickUp | `NOT_CONNECTED` | research read after connect; publish approval | concept/asset/publish after gate | `DESIGNED` | task→asset→approval→post-ID | no publish |
| VAULT | CM VAULT V1 / Drive | `PAUSED` | `AUTONOMOUS_READ`; Drive-write `FORBIDDEN` | inspect/report | `PAUSED` | Make `6289645` | manual read-only fallback |
| VAULT | Folder create/rename/move | `NOT_CONNECTED` for VAULT | `FORBIDDEN` | none | `NOT_CONNECTED` | FLOW-only gated execution | route FLOW |

## Laagcontract
- `ACTIVE/` = role/mandate.
- `RUNBOOKS/` = execution/safe-stop.
- `CM_AGENT_BUILD_SPECS.md` = design, not live connection.
- `OPERATING_PROMPTS/` = runtime instruction.
- `CERTIFICATION/` = evidence/readiness.
- `MAKE_SCENARIO_MAP.md` = canonical Make status.
Bij conflict geldt de meest beperkende state.

## Evidence-notitie 2026-08-16
- OPS: ClickUp create proof PASS; Control Tower post-write observation pending.
- MONEY: Moneybird read proven + internal ClickUp follow-up proof PASS; observation pending.
- LEGAL: ClickUp/Drive read proven + internal ClickUp follow-up proof PASS; Gmail not observed; binding actions forbidden; observation pending.
- PROSPECT: ClickUp/Gmail/Drive connectivity is proven in the live mirror. Gmail relevance/routing is **not yet certified** because at least one observed row is an agent/GitHub mail rather than a true prospect opportunity. External outreach remains Sophia-gated.
