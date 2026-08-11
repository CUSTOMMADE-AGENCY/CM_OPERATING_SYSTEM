# CM_OS — Agent Operating Prompts

> Status: **PRE-PRODUCTION** · Datum: 2026-08-11 · Onderdeel van Optie 3 (`CM_AGENT_OPTION3_BUILD_PLAN.md`)

## Wat dit is

Per agent de **operating-prompt**: de instructietekst die je in een **Claude Project** of **custom GPT**
plakt om die agent te "draaien" (het brein). Het is een gecondenseerde operating-instructie — de volledige
details staan in het paspoort en het runbook, die je als kennisbestanden aan het project koppelt.

## Hoe te gebruiken

Per agent:
1. Maak een **Claude Project / GPT** met de naam van de agent (bv. "CM OPS AGENT").
2. Plak de bijbehorende `CM_<AGENT>_PROMPT.md` als **systeeminstructie**.
3. Koppel als kennis: `ACTIVE/CM_<AGENT>_AGENT.md` (paspoort) + `RUNBOOKS/CM_<AGENT>_RUNBOOK.md` +
   `CM_AGENT_BUILD_SPECS.md` + de canonieke system-docs (`CLICKUP_STRUCTURE.md`).
4. Geef alleen de tools/koppelingen die de agent volgens zijn build spec mag hebben.

## Belangrijk (guardrails)

- Alle agents zijn **pre-production (Level 1)**. Laat een agent niets extern/bindend/muterend doen zonder
  de vereiste gate (meestal Sophia).
- Entiteit = **uitsluitend CUSTOMMADE AGENCY** (strikt gescheiden van EXTERNE_ENTITEIT).
- Bij ontbrekende bron/onduidelijkheid: niet aannemen — vastleggen en escaleren.

## Bestanden

`CM_CONTROL_PROMPT.md` · `CM_OPS_PROMPT.md` · `CM_MONEY_PROMPT.md` · `CM_LEGAL_PROMPT.md` ·
`CM_PROSPECT_PROMPT.md` · `CM_SOCIAL_PROMPT.md` · `CM_VAULT_PROMPT.md` · `CM_FLOW_PROMPT.md`.

## Prompt guardrail

Prompts erven altijd de actuele states en permissions uit `../AGENT_CAPABILITY_REGISTER.md`. Een prompt mag geen connector, write of live capability veronderstellen zonder evidence.
