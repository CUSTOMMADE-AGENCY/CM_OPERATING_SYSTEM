# **PROCESS CHANGE FLOW**

## **Doel**

Deze Workflow beschrijft hoe wijzigingen aan operationele processen, SOPs, Workflows of Playbooks worden beoordeeld, goedgekeurd en doorgevoerd. Doel is dat geen proceswijziging operationeel wordt zonder het correcte approvalniveau en zonder documentatie in GitHub.

---

## **Reikwijdte**

Deze Workflow geldt voor alle voorgestelde wijzigingen aan: SOPs, Workflows, Playbooks, Map Specifications, Agent Passports en governance-documenten. Wijzigingen aan Drive-structuur of agent-autonomieniveaus vallen altijd onder Level 4 (Sophia).

---

## **Eigenaar**

**CM CONTROL AGENT** is eigenaar van deze Workflow. De Owner Agent van het betrokken document is medeverantwoordelijk voor inhoudelijke correctheid. Sophia is approver voor Level 4-wijzigingen.

---

## **Inputs**

- Wijzigingsvoorstel van een Owner Agent, teamlid of Sophia
- Betrokken document(en) in GitHub
- Beschrijving van de impact van de wijziging

---

## **Workflow stappen**

### Stap 1 — Wijzigingsverzoek ontvangen

1. Ontvang wijzigingsvoorstel.
2. Classificeer impact:
   - Administratieve correctie (fout, pad, typo) → Level 3
   - Inhoudelijke proceswijziging → Level 3 of Level 4 afhankelijk van scope
   - Structuurwijziging (Drive, agents, autonomieniveaus) → Level 4
3. Registreer als ClickUp-taak met type, impact en eigenaar.

### Stap 2 — Beoordeling

1. CM CONTROL AGENT beoordeelt de wijziging op consistentie met bestaande governance.
2. Conflicten met andere documenten of governance-lagen → oplossen vóór implementatie.
3. Level 4-impact → escaleer naar Sophia conform `docs/00_GOVERNANCE/APPROVAL_LOG.md`.

### Stap 3 — Implementatie

1. Voer wijziging door in GitHub via pull request op branch `claude/github-setup-2d7zv1` of een nieuwe feature-branch.
2. Beschrijf de wijziging in de PR-body conform de CM-commit-standaard.
3. Laat CM CONTROL AGENT reviewen.
4. Merge na approval.

### Stap 4 — Communicatie en registratie

1. Informeer betrokken Owner Agents over de doorgevoerde wijziging.
2. Registreer Level 4-beslissingen in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.
3. Trigger Governance Export Flow indien governance-document gewijzigd.
4. Sluit ClickUp-taak.

---

## **Beslismomenten**

- Is de wijziging administratief of inhoudelijk?
- Heeft de wijziging impact op externe partijen of contractverplichtingen?
- Vereist de wijziging Sophia-approval (Level 4)?

---

## **Deliverables**

- Gewijzigd document gemerged in GitHub `main`
- Level 4-beslissing geregistreerd in Approval Register (indien van toepassing)
- Betrokken Owner Agents geïnformeerd
- ClickUp-taak gesloten

---

## **KPI's**

- Geen proceswijziging zonder pull request en review
- Alle Level 4-wijzigingen geregistreerd in Approval Register
- Wijziging doorgevoerd binnen afgesproken deadline

---

## **Escalaties**

Escaleer naar Sophia bij:
- Wijziging met impact op agent-autonomieniveaus
- Wijziging die Drive-structuur of Map Specifications fundamenteel raakt
- Conflict tussen Owner Agents over de inhoud van een wijziging

---

## **Outputs**

- Gewijzigd governance-document in GitHub `main`
- Registratie in Approval Register (Level 4)
- Governance Export Flow getriggerd (indien van toepassing)
