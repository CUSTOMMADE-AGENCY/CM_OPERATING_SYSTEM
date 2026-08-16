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
| LEGAL | ClickUp → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; writes gated | LEGAL/deal execution items read | `PROVEN READ-ONLY`; agent pre-production | live `CM LEGAL` tab shows `CM — LEGAL`, `ARTIST DEALS`, `ASSET INVENTORY` tasks | no write without separate proof/gate |
| LEGAL | Google Drive → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; Drive writes gated | LEGAL/DEALS document metadata read | `PROVEN READ-ONLY`; agent pre-production | live `CM LEGAL` tab shows NDA/ZZP docs with Drive URLs | source failure → preserve snapshot; no document mutation |
| LEGAL | Gmail legal feed | `NOT_CONNECTED` / `NOT_OBSERVED` | no runtime permission claim | none proven | `DESIGNED` | no Gmail rows observed in current LEGAL mirror | safe-stop; do not infer connection |
| LEGAL | Binding legal action | n.v.t. | `FORBIDDEN` | sign/accept/settle/commit | `FORBIDDEN` | Sophia approval cannot delegate binding action to agent | refuse + Sophia |
| PROSPECT | Gmail/LinkedIn/Canva/ClickUp | `NOT_CONNECTED` | research read after connect; outreach approval | qualify/dedupe/draft | `DESIGNED` | source/contact + approval/message-ID | no send without approval |
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
- OPS: ClickUp `create_task` functional proof PASS; Control Tower post-write observation pending.
- MONEY: Moneybird read-only feed proven; ClickUp follow-up proof task `86cb5v3he` created/read back; post-write observation pending; no finance mutation.
- LEGAL: current Control Tower mirror proves ClickUp + Drive read paths only. Gmail is not observed; binding actions remain forbidden; expiry Make scenario remains IDEA.
