# CM AGENT READINESS CHECKLIST

## Doel

Deze checklist bepaalt of het CM Operating System voldoende compleet, consistent en veilig is om AI-agents autonoom te laten functioneren.

Een wijziging is pas gereed wanneer alle onderdelen voldoen.

---

## 1. GOVERNANCE

### Source of Truth

* Exact één Source of Truth per onderwerp.
* Geen conflicterende documentatie.
* Decision Log bijgewerkt.
* As-Built bijgewerkt.
* Governance Rules bijgewerkt.

### Ownership

* Elke map heeft exact één Owner Agent.
* Support Agents apart benoemd.
* Geen dubbele owners.
* Responsibility Matrix klopt.

### Approval

* Approval Gate beschreven.
* Escalatiepad aanwezig.
* Autonomy Level vastgesteld.

---

## 2. DRIVE

### Rootstructuur

* Rootstructuur gelijk aan AS-BUILT.
* Geen deprecated roots.
* Geen dubbele mappen.
* Geen legacy structuur.

### Folderstandaarden

Per hoofdmap:

* Doel beschreven.
* Owner Agent.
* Support Agents.
* Opslagregels.
* Archiveringsregels.

### Templates

* Master Template aanwezig.
* Template Register bijgewerkt.
* Geen dubbele templates.

---

## 3. WORKFLOWS

Voor iedere workflow:

* Trigger
* Input
* Eigenaar
* Uitvoering
* Output
* Quality Check
* Completion Standard

---

## 4. AI AGENTS

Per agent:

* Scope
* Doel
* Input
* Output
* Tools
* Grenzen
* Escalatie
* Logging
* Verboden acties

---

## 5. AUTOMATISERING

Voor ieder Make-scenario:

* Naam
* Trigger
* Input
* Output
* Owner
* Status
* Teststatus
* Fallback
* Logging

---

## 6. SCRIPTS

Per script:

* Doel
* Status
* Eigenaar
* Veiligheidsniveau
* Idempotent
* Logging
* Rollback mogelijk

---

## 7. DOCUMENTATIE

* README bijgewerkt
* DRIVE_MAPPING bijgewerkt
* CM_ARCHITECTURE bijgewerkt
* AS_BUILT bijgewerkt
* OPERATING_MODEL bijgewerkt

---

## 8. KWALITEITSCONTROLE

* Geen conflicterende documenten.
* Geen verouderde verwijzingen.
* Geen dode links.
* Geen dubbele informatie.
* Terminologie conform standaard.

---

## 9. VEILIGHEID

Een agent mag nooit:

* Verwijderen.
* Externe communicatie versturen.
* Juridische verplichtingen aangaan.
* Financiële transacties uitvoeren.
* Governance wijzigen.
* Templates overschrijven.
* Besluiten nemen buiten scope.

---

## 10. DEFINITIE VAN “AGENT READY”

De repository is pas Agent Ready wanneer:

* Governance volledig.
* Drive volledig.
* Workflows volledig.
* Playbooks volledig.
* Templates volledig.
* Agent Register volledig.
* Responsibility Matrix volledig.
* Automation Register volledig.
* Script Register volledig.
* Geen open governance-conflicten.
* Geen conflicterende PR’s.
* Alle Make-scenario’s getest of expliciet als INACTIEF gemarkeerd.
* As-Built = werkelijkheid.

## Eindscore

Geef de repository een score op 100 punten:

| Onderdeel | Max |
| --- | ---: |
| Governance | 15 |
| Drive | 15 |
| Agents | 15 |
| Workflows | 10 |
| Playbooks | 10 |
| Templates | 10 |
| Scripts | 10 |
| Automatisering | 10 |
| Veiligheid | 5 |

## Beoordeling

* 95–100: Enterprise Agent Ready
* 90–94: Production Ready
* 80–89: Beta
* 70–79: Development
* <70: Niet geschikt voor autonome agents
