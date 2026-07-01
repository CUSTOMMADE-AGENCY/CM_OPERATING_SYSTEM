# 01_ADMIN Map Specification

## Doel

Administratieve basiswaarheid van een artist-, client- of partnerdossier beheren.

## Functie binnen CM OS

Deze map bevat de operationele context die nodig is om een dossier correct te openen, herkennen, beheren en overdragen.

## Toepassing

Gebruik voor dossieradministratie binnen `02_ARTIST_MANAGEMENT/[ARTIST_NAME]/01_ADMIN` en, waar dezelfde mapnaam voorkomt, binnen client- of partnerdossiers.

## Alleen gebruiken voor

- Intake
- Contactgegevens
- Team roster
- Onboarding summary
- Access notes
- Algemene dossierafspraken
- Administratieve approvals zonder contractwaarde

## Niet gebruiken voor

- Contracten
- Strategie
- Release-assets
- Facturen
- Social posts
- Persmateriaal
- Masters

## Verplichte documenttypes

- Intake document
- Contact sheet
- Team roster
- Onboarding summary
- Access notes indien relevant

## Verboden documenttypes

- Signed agreements
- Invoices
- Brandbooks
- Release masters
- Press photos
- Social content exports

## Verplichte Templates

- Intake Template
- Contact Sheet Template
- Onboarding Summary Template

## Gekoppelde Workflows

- Dossier onboarding workflow
- Intake review workflow
- Access request workflow

## Gekoppelde SOP's

- SOP dossier aanmaken
- SOP intake verwerken
- SOP access documenteren

## Gekoppelde Playbooks

- Onboarding Playbook
- Dossier Hygiene Playbook

## Owner Agent

CM OPS AGENT

## Support Agents

- CM CONTROL AGENT
- CM VAULT AGENT

## Approval Level

Level 1

## Naamconventies

`YYYY-MM-DD_[ENTITY]_ADMIN_[DOCUMENTTYPE]_vX.Y`

## Metadata

- Entity name
- Dossier type
- Owner agent
- Date
- Version
- Access sensitivity

## Archivering

Superseded admin-documenten gaan naar `09_ARCHIVE`; het actieve basisdocument blijft in `01_ADMIN`.

## Automatiseringen

Intake voltooid
↓
Dossiercheck starten
↓
Ontbrekende basisdocumenten signaleren
↓
ClickUp onboardingtaak updaten

## AI Instructies

AI mag uitsluitend administratieve basisdocumenten opslaan in deze map. Bij twijfel nooit automatisch classificeren en escaleren naar CM OPS AGENT.

## Quality Checklist

- Bevat alleen administratieve basisdocumenten
- Geen contractuele of financiële bronstukken
- Naamconventie klopt
- Metadata is compleet
- Superseded versies zijn verplaatst
