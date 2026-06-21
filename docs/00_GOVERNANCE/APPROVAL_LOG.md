# APPROVAL_LOG.md

> Versie: v1.0 · Status: Operationeel · Datum: 2026-06-21
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`
> Eigenaar: CM CONTROL AGENT · Goedkeuring: Sophia

-----

## DOEL

De APPROVAL_LOG is de centrale audit trail voor alle Level 4 goedkeuringen binnen CM_OS. Elke actie die expliciete goedkeuring van Sophia vereist wordt hier gelogd — vóór uitvoering, na uitvoering en bij weigering.

-----

## LOCATIE

**Opslag:** Google Drive
**Pad:** `OS_CUSTOMMADE / 06_CONTROL / APPROVAL_LOG`
**Format:** Google Sheet — één tabblad per maand, één rij per goedkeuringsverzoek
**Eigenaar:** CM CONTROL AGENT
**Schrijfrecht:** CM CONTROL AGENT (via CM FLOW automatisering)
**Leesrecht:** Sophia · CM CONTROL · CM LEGAL (eigen rijen)

-----

## LOGSTRUCTUUR

Iedere rij in de log bevat de volgende velden:

|Veld                        |Beschrijving                                                         |
|----------------------------|---------------------------------------------------------------------|
|**ID**                      |Uniek escalatie-ID — format `APR-YYYY-MM-###` (bijv. APR-2026-06-001)|
|**Datum verzoek**           |Timestamp van indiening                                              |
|**Agent**                   |Welke agent het verzoek indient                                      |
|**Taak**                    |Taak uit AI_TASK_AUTONOMY_MATRIX                                     |
|**Level**                   |Altijd Level 4                                                       |
|**Beschrijving**            |Wat er precies wordt gevraagd (max. twee zinnen)                     |
|**Impact bij niet-handelen**|Wat er gebeurt als goedkeuring uitblijft                             |
|**Escalatieniveau**         |NORMAAL / URGENT / KRITIEK                                           |
|**Datum goedkeuring**       |Timestamp van Sophia’s respons                                       |
|**Beslissing**              |Goedgekeurd / Geweigerd / Uitgesteld                                 |
|**Sophia notitie**          |Optionele toelichting van Sophia                                     |
|**Uitgevoerd door**         |Welke agent de actie heeft uitgevoerd na goedkeuring                 |
|**Datum uitvoering**        |Timestamp van daadwerkelijke uitvoering                              |
|**Status**                  |Open / Goedgekeurd / Uitgevoerd / Geweigerd / Verlopen               |

-----

## WORKFLOW — LOG BIJHOUDEN

**Trigger:** agent dient Level 4 verzoek in

**Stappen:**

1. CM CONTROL maakt nieuwe rij aan in APPROVAL_LOG met status `Open`.
1. CM CONTROL stuurt verzoek naar Sophia conform escalatieprotocol.
1. Sophia reageert → CM CONTROL werkt rij bij (beslissing + timestamp).
1. Bij goedkeuring → uitvoerende agent voert actie uit → CM CONTROL markeert `Uitgevoerd`.
1. Bij weigering → CM CONTROL markeert `Geweigerd` · reden vastgelegd.
1. Bij geen respons binnen deadline → CM CONTROL markeert `Verlopen` · opschaling conform `ESCALATION_PROTOCOLS.md`.

-----

## STATUSSEN

|Status       |Betekenis                                       |
|-------------|------------------------------------------------|
|`Open`       |Verzoek ingediend, wacht op Sophia              |
|`Goedgekeurd`|Sophia heeft goedgekeurd, nog niet uitgevoerd   |
|`Uitgevoerd` |Actie uitgevoerd na goedkeuring                 |
|`Geweigerd`  |Sophia heeft geweigerd — geen actie             |
|`Verlopen`   |Deadline verstreken zonder respons — opgeschaald|

-----

## RAPPORTAGE

CM CONTROL rapporteert op basis van de APPROVAL_LOG:

|Rapportage            |Frequentie |Inhoud                                                                                                    |
|----------------------|-----------|----------------------------------------------------------------------------------------------------------|
|Weekly Control Report |Wekelijks  |Alle open en nieuwe verzoeken van de week                                                                 |
|Monthly Control Report|Maandelijks|Totaaloverzicht: goedgekeurd / geweigerd / verlopen · gemiddelde responstijd Sophia · herhalende verzoeken|
|Governance Report     |Kwartaal   |Trends in Level 4 verzoeken · aanbeveling om taken te herclassificeren                                    |

-----

## KOPPELING MET ANDERE SYSTEMEN

|Systeem                     |Koppeling                                                  |
|----------------------------|-----------------------------------------------------------|
|[`AI_AUTONOMY_LEVELS.md`](../07_AI_AGENTS/AI_AUTONOMY_LEVELS.md)     |Definieert wanneer Level 4 van toepassing is               |
|[`AI_TASK_AUTONOMY_MATRIX.md`](../07_AI_AGENTS/AI_TASK_AUTONOMY_MATRIX.md)|Definieert welke taken Level 4 vereisen per agent          |
|[`ESCALATION_PROTOCOLS.md`](../07_AI_AGENTS/ESCALATION_PROTOCOLS.md)   |Definieert tijdsdruk-protocol bij uitblijven respons       |
|ClickUp                     |CM CONTROL maakt bijbehorende taak aan bij elk open verzoek|
|GitHub                      |APPROVAL_LOG definitie en structuur opgeslagen in repo     |

-----

## NIET TOEGESTAAN

- Rijen verwijderen uit de APPROVAL_LOG — ook geweigerde en verlopen verzoeken blijven staan
- Beslissing of timestamp achteraf aanpassen zonder Sophia goedkeuring
- Level 4 actie uitvoeren zonder bijbehorende rij in de log
- Log buiten Drive opslaan als primaire bron

-----

## EERSTE IMPLEMENTATIE

**Stap 1:** Google Sheet aanmaken op pad `OS_CUSTOMMADE / 06_CONTROL / APPROVAL_LOG`
**Stap 2:** Kolomstructuur inrichten conform logstructuur hierboven
**Stap 3:** CM FLOW scenario bouwen dat automatisch nieuwe rij aanmaakt bij Level 4 verzoek
**Stap 4:** CM CONTROL test eerste handmatige log-entry vóór automatisering live gaat
**Stap 5:** Koppeling met ClickUp inrichten (taak per open verzoek)

Eigenaar implementatie: CM FLOW AGENT (bouwen) · CM CONTROL AGENT (valideren) · Sophia (go-live goedkeuring)
