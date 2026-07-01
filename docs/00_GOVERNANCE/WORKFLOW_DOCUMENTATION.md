# Workflow-documentatie

## Doel

Workflow-documenten beschrijven herhaalbaar werk vanaf trigger tot afgeronde output.

## Standaard Workflow-format

| Sectie | Beschrijving |
|---|---|
| Trigger | Gebeurtenis die de Workflow start |
| Intake | Informatie die nodig is voordat werk begint |
| Owner | Persoon of rol die accountable is |
| Steps | Volgorde van uitvoering |
| Outputs | Concrete deliverables of beslissingen |
| Systems | Waar werk, bestanden en bewijs worden vastgelegd |
| Quality checks | Controles voordat de Workflow wordt afgesloten |
| Escalation | Wanneer en naar wie wordt geëscaleerd |

## Regel

Een Workflow is pas bruikbaar wanneer elke stap een duidelijke owner, system of record en completion standard heeft.

## Drive-folder standaard voor artistworkflows

Artistworkflows die Drive-bestanden, deliverables of dossierbewijzen opleveren, gebruiken `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` als Drive system of record en volgen de officiële artistfolder-standaard in `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md`.

Workflow-documenten mogen geen legacy-artistmappen als standaardbestemming gebruiken. Verwijs voor artistdossiers uitsluitend naar:

```text
01_ADMIN
02_CONTRACT
03_STRATEGY
04_RELEASES
05_BOOKING
06_FINANCE
07_SOCIALMEDIA
08_PRESS_EPK
09_ARCHIVE
```
