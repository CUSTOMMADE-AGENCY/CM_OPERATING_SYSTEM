# AGENT DEFINITION STANDARD

> Versie: v1.0 · Status: **GOVERNANCE LOCKED** · Datum: 2026-07-02
> Eigenaar: CM CONTROL AGENT · Beheer: CM VAULT AGENT · Bouw: CM FLOW AGENT
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`
>
> Afgeleid van de canonieke architectuurlaag `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md`.
> Dit document mag die architectuur niet tegenspreken.

## Doel

Deze standaard legt het verplichte format vast voor elke CM_OS-agentdefinitie.

**Harde regel: geen agent meer zonder deze 18 secties.** Een agentdefinitie is pas
compleet — en mag pas GOVERNANCE LOCKED worden — wanneer alle 18 secties in
onderstaande volgorde aanwezig en ingevuld zijn. Dit is tevens de Definition of
Done voor iedere agent (sectie 18).

## Toepassing

- Geldt voor alle agentdefinities onder `docs/07_AI_AGENTS/AGENTS/`.
- `CM_FLOW_AGENT.md` is de referentie-implementatie van deze standaard.
- Bestaande agents worden gefaseerd naar dit format omgezet (zie Roadmap).
- Wijzigingen aan een agentdefinitie vereisen Pull Request en Sophia approval,
  conform de LOCKED architectuur.

## De 18 verplichte secties

| # | Sectie | Wat hoort erin |
|---|---|---|
| 01 | Missie | De kernvraag en bestaansreden van de agent in één alinea. |
| 02 | Functie | Wat de agent concreet is en doet binnen CM_OS; primair domein. |
| 03 | Karakter | Toon, houding en werkstijl van de agent (hoe de agent communiceert en beslist binnen scope). |
| 04 | Verantwoordelijkheden | Afgebakende lijst van waar de agent eigenaar of uitvoerder van is. |
| 05 | Mandaat | Wat de agent **mag** en **niet mag**; approval-gates en grenzen van bevoegdheid. |
| 06 | Tools | Systemen en tools die de agent gebruikt, met eventuele toegangsgrenzen. |
| 07 | Automations | Automatiseringen die de agent bezit, aanstuurt of waarvan de agent afhankelijk is. |
| 08 | Triggers | Gebeurtenissen of momenten die de agent activeren (timed, event, handmatig). |
| 09 | SOP's | Verwijzingen naar de standard operating procedures die de agent volgt. |
| 10 | Workflows | De kernworkflows waarin de agent een rol speelt, met in-/output. |
| 11 | Templates | Templates die de agent gebruikt of produceert. |
| 12 | Escalaties | Wanneer en naar wie de agent escaleert; escalatiepaden. |
| 13 | KPI's | Meetbare doelen waarop de agent wordt beoordeeld. |
| 14 | Samenwerking | Handoffs en samenwerking met andere agents; rolafbakening. |
| 15 | Documentatie | Welke documentatie de agent bijhoudt of oplevert; AS_BUILT-koppeling. |
| 16 | Changelog | Versiegeschiedenis van de agentdefinitie met datum en reden. |
| 17 | Roadmap | Geplande uitbreidingen of build-fases van de agent. |
| 18 | Definition of Done | De criteria waaraan voldaan moet zijn voordat de agent live/compleet is. |

## Volgordevoorschrift

De secties worden altijd genummerd `01` t/m `18` en in bovenstaande volgorde
opgenomen. Een sectie mag niet worden overgeslagen; als een sectie (nog) niet van
toepassing is, wordt dat expliciet vermeld met reden.

## Relatie tot governance

- De inhoud van secties 04, 05 en 14 moet exact overeenkomen met
  `CM_AGENT_ARCHITECTURE.md`, `AGENT_RESPONSIBILITY_MATRIX.md` en de
  `AGENT_HANDOFF_MATRIX.md`. Bij tegenspraak is de architectuur leidend.
- Autonomiegrenzen in sectie 05 volgen `AI_AUTONOMY_LEVELS.md`.
- Escalatiepaden in sectie 12 volgen `ESCALATION_PROTOCOLS.md`.

## Roadmap

| Fase | Agent(s) | Status |
|---|---|---|
| 1 | CM FLOW AGENT (referentie-implementatie) | Omgezet |
| 2 | CM CONTROL AGENT (sturingslaag) | Omgezet |
| 3 | CM VAULT (infrastructuur) | Omgezet |
| 4 | CM OPS, CM MONEY, CM SOCIAL, CM PROSPECT (executie) | Omgezet |
| 5 | CM LEGAL (bescherming) | Omgezet |

## Changelog

| Datum | Versie | Wijziging | Reden |
|---|---|---|---|
| 2026-07-02 | v1.0 | Eerste vastlegging 18-sectie agentstandaard. | Uniform, compleet en controleerbaar format voor alle CM_OS-agents. |
