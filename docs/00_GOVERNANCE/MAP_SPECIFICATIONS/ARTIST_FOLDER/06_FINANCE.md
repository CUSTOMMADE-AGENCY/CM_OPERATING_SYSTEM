# 06_FINANCE Map Specification

## Doel

De financiële referentie- en werklaag van een artiestdossier beheren. Moneybird blijft de financiële waarheid; `06_FINANCE` bevat werkbestanden, referenties en overzichten per artiest.

## Functie binnen CM OS

Deze map borgt de inhoudelijke waarheid voor dit specifieke operationele domein zonder de structurele regels van Folder Standards te dupliceren.

## Toepassing

Gebruik voor `06_FINANCE` binnen de goedgekeurde Drive-dossiers waar deze map voorkomt.

## Alleen gebruiken voor

- Fee-afspraken en budgetten per artiest
- Uitbetalings- en royalty-overzichten
- Kostenoverzichten en afrekeningen
- Financiële referenties en exports uit Moneybird
- Werkbestanden voor financiële analyse

## Niet gebruiken voor

- Primaire facturen, bonnen en kwitanties als bronadministratie (→ Moneybird)
- Getekende contracten (→ `02_CONTRACT`)
- Bookingoffers en riders (→ `05_BOOKING`)
- CM-brede financiën (→ `06_FINANCE` op rootniveau)

## Verplichte documenttypes

- Fee-afspraken en budgetten
- Uitbetalings- en royalty-overzichten
- Kostenoverzichten en afrekeningen
- Moneybird-referenties en exports

## Verboden documenttypes

- Primaire facturen, bonnen en kwitanties als bronadministratie
- Getekende contracten
- Bookingoffers en riders
- CM-brede financiële documenten

## Verplichte Templates

- 06_FINANCE Register Template
- Approval Evidence Template
- Version Log Template

## Gekoppelde Workflows

- 06_FINANCE review workflow
- Approval workflow
- Archive workflow

## Gekoppelde SOP's

- SOP 06_finance document opslaan
- SOP approval evidence controleren
- SOP versie archiveren

## Gekoppelde Playbooks

- 06_FINANCE Playbook
- Dossier Hygiene Playbook

## Owner Agent

CM MONEY AGENT

## Support Agents

- CM OPS AGENT
- CM CONTROL AGENT
- CM VAULT AGENT

## Approval Level

Level 2

## Naamconventies

`YYYY-MM-DD_[ENTITY]_FINANCE_[DOCUMENTTYPE]_vX.Y`

## Metadata

- Entity name
- Document type
- Owner agent
- Approval status
- Version
- Review date
- Sensitivity

## Archivering

Superseded documenten gaan naar `09_ARCHIVE` of blijven in deze archive-map wanneer dit de aangewezen archieflocatie is.

## Automatiseringen

06_FINANCE document voltooid
↓
Metadata controleren
↓
Approval status bijwerken
↓
ClickUp taak updaten
↓
Superseded versie archiveren

## AI Instructies

AI mag alleen documenten opslaan die expliciet binnen deze mapspecificatie passen. Moneybird blijft de financiële waarheid; sla hier geen primaire bronadministratie op. Bij twijfel niet automatisch classificeren en escaleren naar de Owner Agent.

## Quality Checklist

- Documenttype past bij deze map
- Verboden documenttypes ontbreken
- Naamconventie klopt
- Metadata is compleet
- Approval level is gerespecteerd
- Superseded versies zijn correct gearchiveerd
