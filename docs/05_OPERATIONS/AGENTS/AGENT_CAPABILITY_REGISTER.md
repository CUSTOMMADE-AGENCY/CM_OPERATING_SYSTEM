# Agent capability- en connectionregister

> Statusdatum: 2026-08-11
> Owner: CM CONTROL; technische evidence: CM FLOW
> Canonieke scope: connection state, permissions, actions, capability state en minimaal bewijs voor de acht actieve agents.

## Interpretatie

Een toolnaam in een agentdefinitie is **geen connection claim**. Zonder controleerbare connectorconfiguratie plus recente execution-evidence geldt `NOT_CONNECTED`. Toegestane permissions zijn `AUTONOMOUS_READ`, `AUTONOMOUS_WRITE`, `APPROVAL_REQUIRED_WRITE` en `FORBIDDEN`. Toolstates zijn uitsluitend `CONNECTED`, `CONNECTED_READ_ONLY`, `CONNECTED_WITH_APPROVAL`, `DESIGNED`, `PLANNED`, `PAUSED`, `BROKEN` en `NOT_CONNECTED`.

Elke uitvoering gebruikt een unieke `run_id` of externe trace-ID en registreert timestamp, actor/agent, bronobject-ID, action, outputobject-ID, approval-ID indien van toepassing, status en fout/fallback. Ontbreekt bewijs, dan stopt de agent veilig en escaleert naar CM CONTROL; mutaties worden nooit stilzwijgend opnieuw geprobeerd.

## Actuele capability truth

| Agent | Tool/capability | Connection state | Permissions | Actions | Capability state | Evidence / run-ID | Failure policy |
|---|---|---|---|---|---|---|---|
| CONTROL | GitHub governance review | `CONNECTED` via repository/CI | `AUTONOMOUS_READ`; writes `APPROVAL_REQUIRED_WRITE` | diff lezen, checks rapporteren, review voorstellen | `LIVE` voor read/review; write gated | commit/PR/check-run-ID | stop bij ontbrekende check; geen merge |
| FLOW | Make scenariobeheer | `CONNECTED_WITH_APPROVAL` | `AUTONOMOUS_READ`; `APPROVAL_REQUIRED_WRITE` | inspecteren, ontwerpen, test/activate na gate | `PRE-PRODUCTION` | scenario-ID + execution-ID + approval-ID vereist | pause/rollback/escalatie |
| FLOW | Apps Script-mutaties | `DESIGNED` | `APPROVAL_REQUIRED_WRITE` | goedgekeurde folder create/rename/move | `PRE-PRODUCTION` | scriptversie + dry-run + object-ID's | safe stop; rollbackplan |
| OPS | ClickUp | `CONNECTED_READ_ONLY` (alleen bestaande substrate-evidence) | `AUTONOMOUS_READ`; writes `APPROVAL_REQUIRED_WRITE` | structuur/status lezen; taakwrite alleen na bewijs/gate | `PRE-PRODUCTION` | ClickUp task/event-ID; certification evidence | geen write zonder connectorbewijs |
| MONEY | Moneybird | `NOT_CONNECTED` | read/write `APPROVAL_REQUIRED_WRITE`; delete `FORBIDDEN` | open posten signaleren zodra connected | `DESIGNED` | invoice/transaction/report-ID vereist | geen financiële mutatie; Sophia-escalatie |
| LEGAL | Drive/Gmail/rights tooling | `NOT_CONNECTED` | read/write `APPROVAL_REQUIRED_WRITE`; binding action `FORBIDDEN` | reviewconcept, signalering, draft | `DESIGNED` | source-ID → review-ID → approval-ID | geen verplichting aangaan |
| PROSPECT | Gmail/LinkedIn/Canva/ClickUp | `NOT_CONNECTED` | research `AUTONOMOUS_READ` na connectie; outreach `APPROVAL_REQUIRED_WRITE` | kwalificeren, dedupe, concept-outreach | `DESIGNED` | source/contact-ID + approval + message-ID | geen verzending zonder approval |
| SOCIAL | Canva/CMS/Gmail/ClickUp | `NOT_CONNECTED` | research `AUTONOMOUS_READ` na connectie; publish `APPROVAL_REQUIRED_WRITE` | concept, asset-routing, publiceren na gate | `DESIGNED` | task → asset → approval → post-ID | niet publiceren; escaleren |
| VAULT | CM VAULT V1 / Drive | `PAUSED` | `AUTONOMOUS_READ`; Drive-write `FORBIDDEN` | inspecteren, detecteren, rapporteren | `PAUSED` | Make scenario `6289645`; nieuwe execution-ID ontbreekt | handmatige read-only check; FLOW-escalatie |
| VAULT | Folder create/rename/move | `NOT_CONNECTED` voor VAULT | `FORBIDDEN` | geen mutatie; alleen wijzigingsvoorstel | `NOT_CONNECTED` | n.v.t.; uitvoering uitsluitend FLOW/script met approval | weigeren en routeren naar FLOW |

## Laagcontract

- `ACTIVE/` beschrijft rol en mandaat en mag dit register niet tegenspreken.
- `RUNBOOKS/` beschrijft uitvoering en safe-stop; geen ruimere permission.
- `CM_AGENT_BUILD_SPECS.md` beschrijft ontwerp, niet automatisch een live connection.
- `OPERATING_PROMPTS/` dwingen de permissions en evidence-eis af.
- `CERTIFICATION/` bewaart test- en production-evidence; zonder evidence geen statusverhoging.
- `MAKE_SCENARIO_MAP.md` is canoniek voor Make-scenariostatus. Bij conflict geldt de meest beperkende state en wordt CM CONTROL geïnformeerd.
