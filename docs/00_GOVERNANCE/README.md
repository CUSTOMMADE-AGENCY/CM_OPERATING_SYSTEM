# Governance

## Doel en status

Deze map bestuurt het actuele CM Operating System. Recovery is `CLOSED / COMPLETED`; documenten onder `HISTORY/` zijn uitsluitend audit trail en hebben geen governancevoorrang.

## Canonieke leesvolgorde

1. `CM_OPERATING_MODEL.md` — systeemmodel en systeemgrenzen.
2. `DECISION_LOG.md` en actuele `ADR/` — besluiten en uitzonderingen.
3. `GOVERNANCE_RULES.md` — verplichte repository- en uitvoeringsregels.
4. `AS_BUILT_DOCUMENTATION.md` — aantoonbare werkelijke toestand en capability states.
5. `DRIVE_STRUCTURE.md` — Drive-structuur en lane ownership.
6. `STANDARDS/` en `MAP_SPECIFICATIONS/` — actuele standaarden en mapspecificaties.

## Actieve structuur

```text
00_GOVERNANCE/
├── README.md
├── CM_OPERATING_MODEL.md
├── GOVERNANCE_RULES.md
├── AS_BUILT_DOCUMENTATION.md
├── DECISION_LOG.md
├── DRIVE_STRUCTURE.md
├── ADR/
├── STANDARDS/
├── MAP_SPECIFICATIONS/
└── HISTORY/
    ├── AUDITS/
    ├── BASELINES/
    ├── MIGRATIONS/
    ├── RECOVERY_REPORTS/
    ├── SPRINT_REPORTS/
    └── SUPERSEDED/
```

Andere documenten direct in deze map zijn gespecialiseerde actuele governancebronnen en mogen de bovenstaande prioriteit niet tegenspreken.

## History-regel

Afgeronde recovery-, migratie-, cleanup-, sprint-, baseline- en superseded-documentatie wordt met `git mv` naar de passende `HISTORY/`-categorie verplaatst. History-documenten worden niet als actief geciteerd. Semantische overlap wordt handmatig beoordeeld; alleen aantoonbaar exacte duplicaten zonder unieke dependencies mogen na expliciete review worden verwijderd.

## Repositorygrens

GitHub bevat alleen Governance, Workflows, SOPs, Playbooks, Automations, Agents, Knowledge Base en systeemdocumentatie. Geen live clientdata, getekende contracten, Drive-dumps of vertrouwelijke informatie.
