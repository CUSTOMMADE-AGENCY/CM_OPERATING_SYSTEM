# Agent capability- en connectionregister

> Statusdatum: 2026-08-16
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
| OPS | ClickUp | `CONNECTED_READ_ONLY` plus één proofed gated `create_task` run | `AUTONOMOUS_READ`; writes blijven `APPROVAL_REQUIRED_WRITE` totdat observability/CONTROL review sluit | structuur/status lezen; task `create_task` technisch bewezen op EMAIL ACTIES in proof, nog geen production promotion | `PRE-PRODUCTION / PROOF-PENDING` | task `86cb5v116`; `CM_OPS_EXECUTION_PROOF_V1.md` | geen write zonder gate; geen capability promotion zonder observability/evidence review |
| MONEY | Moneybird via Apps Script/API → Control Tower | `CONNECTED_READ_ONLY` | `AUTONOMOUS_READ`; Moneybird write `FORBIDDEN` tenzij later expliciet bewezen/gated | open verkoopfacturen + inkoopfacturen lezen/signaleren; bedragen/status/data naar Control Tower spiegel | `PROVEN READ-ONLY` voor feed; agent blijft `PRE-PRODUCTION` | live `CM MONEY` tab bevat Moneybird record `Inkoopfactuur 5639189895`; feed-code/PR + certification evidence | bronfout → snapshot behouden/safe-stop; geen financiële mutatie; Sophia-escalatie |
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

## Evidence-notitie 2026-08-16

- OPS: functionele ClickUp `create_task` proof is geslaagd voor één interne EMAIL ACTIES-testtaak; end-to-end Control Tower observation is nog pending, dus geen production write promotion.
- MONEY: de deployed Control Tower feed toont aantoonbaar Moneybird purchase-invoice data in `CM MONEY`. Dit verhoogt uitsluitend de **Moneybird read-only feed connection**; het Make `Moneybird open-items check` scenario blijft `REVIEW` en Moneybird-mutaties blijven niet toegestaan.