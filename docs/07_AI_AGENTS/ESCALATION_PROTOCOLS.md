# ESCALATION_PROTOCOLS.md

> Versie: v2.0 · Status: Operationeel · Datum: 2026-06-21
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`
> Eigenaar: CM CONTROL AGENT · Goedkeuring: Sophia

-----

## TWIJFELREGEL

> **Kan een agent niet bepalen welk escalatieniveau van toepassing is → altijd KRITIEK.**

-----

## ESCALATIEROUTE

Agents escaleren niet rechtstreeks naar Sophia tenzij anders aangegeven.

```text
Agent → CM CONTROL → Sophia
```

**Uitzondering — directe escalatie naar Sophia toegestaan bij:**

- KRITIEK niveau
- Juridisch risico (ook via CM LEGAL → Sophia)
- Reputatierisico
- Security incident
- Governance conflict

CM CONTROL logt alle escalaties, ook de directe.

-----

## ESCALATIE FORMAT

Iedere escalatie bevat deze vier velden. Geen escalatie zonder volledig format.

```text
ESCALATIE — [NORMAAL / URGENT / KRITIEK]
Agent: [naam agent]
Datum/tijd: [timestamp]

WAT: [beschrijving van het probleem in één zin]
IMPACT: [wat gebeurt er als dit niet wordt opgelost, en wanneer]
VOORSTEL: [wat stelt de agent voor als oplossing]
NODIG VAN SOPHIA: [specifieke beslissing of actie die vereist is]
```

-----

## NORMAAL

**Reactie gewenst:** binnen 5 werkdagen

**Voorbeelden:**

- Ontbrekende documenten
- Verouderde templates
- Kleine workflow issues

**Route:** Agent → CM CONTROL → Sophia (via Weekly Control Report)

**Tijdsdruk-protocol:**

| Stap | Actie | Eigenaar |
| ---- | ----- | -------- |
| 1 | Escalatie ingediend bij CM CONTROL | Uitvoerende agent |
| 2 | CM CONTROL neemt op in Weekly Control Report | CM CONTROL |
| 3 | Na 5 werkdagen geen respons → herinnering | CM CONTROL |
| 4 | Na 10 werkdagen geen respons → opschalen naar URGENT | CM CONTROL |

-----

## URGENT

**Reactie gewenst:** binnen 24 uur

**Voorbeelden:**

- Deadline risico
- Cashflow risico
- Belangrijke klantvraag
- Publicatie blokkade

**Route:** Agent → CM CONTROL → Sophia (direct, niet via weekly report)

**Tijdsdruk-protocol:**

| Stap | Actie | Eigenaar |
| ---- | ----- | -------- |
| 1 | Escalatie ingediend bij CM CONTROL met format | Uitvoerende agent |
| 2 | CM CONTROL valideert en stuurt door naar Sophia binnen 2 uur | CM CONTROL |
| 3 | Na 24 uur geen respons → opschalen naar KRITIEK | CM CONTROL |
| 4 | CM CONTROL documenteert impact van uitblijvende respons | CM CONTROL |

-----

## KRITIEK

**Reactie gewenst:** direct — binnen 2 uur

**Voorbeelden:**

- Juridisch risico
- Reputatierisico
- Groot financieel risico
- Governance conflict
- Contractconflict
- Security incident

**Route:** Agent → Sophia direct + gelijktijdig CM CONTROL informeren

**Tijdsdruk-protocol:**

| Stap | Actie | Eigenaar |
| ---- | ----- | -------- |
| 1 | Escalatie direct naar Sophia + CC CM CONTROL | Uitvoerende agent |
| 2 | CM CONTROL blokkeert afhankelijke taken direct | CM CONTROL |
| 3 | Na 2 uur geen respons → tweede directe melding Sophia | CM CONTROL |
| 4 | Na 4 uur geen respons → alle betrokken workflows gepauzeerd | CM CONTROL |
| 5 | Incident volledig gedocumenteerd ongeacht uitkomst | CM CONTROL |

> Bij KRITIEK geldt: niets beweegt totdat Sophia heeft gereageerd. CM CONTROL pauzeert actief, niet passief.

-----

## ESCALATIE OVERZICHT

| | Normaal | Urgent | Kritiek |
| ---------------------------- | ------------------------------ | ----------------------- | ------------------------------- |
| Reactietijd | 5 werkdagen | 24 uur | 2 uur |
| Route | Via CM CONTROL → Weekly Report | Via CM CONTROL → direct | Direct naar Sophia + CM CONTROL |
| Escalatie format verplicht | ✅ | ✅ | ✅ |
| Afhankelijke taken blokkeren | ❌ | ❌ | ✅ |
| Opschalen bij geen respons | Naar URGENT (10 werkdagen) | Naar KRITIEK (24 uur) | Workflows pauzeren (4 uur) |

-----

## ESCALATIERECHTEN PER AGENT

| Agent | Mag escaleren naar | Direct naar Sophia |
| ----- | ------------------ | ------------------ |
| CM OPS | NORMAAL, URGENT | Nee |
| CM PROSPECT | NORMAAL, URGENT | Nee |
| CM LEGAL | NORMAAL, URGENT, KRITIEK | Ja — bij juridisch risico |
| CM SOCIAL | NORMAAL, URGENT | Nee |
| CM MONEY | NORMAAL, URGENT, KRITIEK | Ja — bij groot financieel risico |
| CM VAULT | NORMAAL, URGENT, KRITIEK | Ja — bij governance conflict |
| CM FLOW | NORMAAL, URGENT | Nee |
| CM CONTROL | Alle niveaus | Ja — altijd |

-----

## LOGGING & RAPPORTAGE

CM CONTROL logt iedere escalatie in ClickUp met:

- Niveau (NORMAAL / URGENT / KRITIEK)
- Indiende agent
- Timestamp indiening
- Timestamp eerste respons Sophia
- Uitkomst (opgelost / opgeschaald / geblokkeerd)

**Standaard rapportages:**

- Weekly Control Report: alle NORMAAL en URGENT escalaties van de week
- Direct aan Sophia: alle KRITIEK escalaties (real-time)
- Monthly Control Report: escalatietrends, gemiddelde responstijden, herhalende issues
