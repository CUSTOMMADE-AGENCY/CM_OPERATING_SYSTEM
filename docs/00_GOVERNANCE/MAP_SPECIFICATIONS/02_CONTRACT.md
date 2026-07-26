# 02_CONTRACT Map Specification

## Doel

Contractuele en juridische bewijswaarheid van een dossier beheren.

## Functie binnen CM OS

Deze map bewaart agreements, contractversies en juridisch relevante bewijsstukken die bij het specifieke dossier horen.

## Toepassing

Gebruik voor contractdocumenten binnen artist-, client- of partnerdossiers.

## Alleen gebruiken voor

- Agreements
- NDA's
- Amendments
- Deal confirmations
- SOW's
- Contract approval evidence
- Signed legal documents

## Niet gebruiken voor

- Algemene admin
- Strategie
- Factuuradministratie
- Social content
- Press kits
- Losse communicatie zonder contractwaarde

## Verplichte documenttypes

- Contract register note
- Signed agreement of current draft
- Approval evidence bij ondertekening
- Amendment log indien van toepassing

## Verboden documenttypes

- Invoices
- Brandbooks
- Masters
- Foto's
- Social posts
- Ongefilterde mailbox dumps

## Verplichte Templates

- Contract Summary Template
- Approval Evidence Template
- Amendment Log Template

## Gekoppelde Workflows

- Legal review workflow
- Approval workflow
- Contract signing workflow

## Gekoppelde SOP's

- SOP contract review
- SOP signature evidence opslaan
- SOP amendment verwerken

## Gekoppelde Playbooks

- Legal Approval Playbook
- Contract Risk Playbook

## Owner Agent

CM LEGAL AGENT

## Support Agents

- CM OPS AGENT
- CM CONTROL AGENT
- CM VAULT AGENT

## Approval Level

Level 3

## Naamconventies

`YYYY-MM-DD_[ENTITY]_CONTRACT_[DOCUMENTTYPE]_[STATUS]_vX.Y`

## Metadata

- Entity name
- Counterparty
- Contract type
- Status
- Effective date
- Expiry date
- Approval reference
- Sensitivity

## Archivering

Vervallen of superseded contractversies blijven traceerbaar en gaan alleen naar archive volgens legal retention-regels.

## Automatiseringen

Contract status gewijzigd
↓
Approval evidence controleren
↓
Legal register bijwerken
↓
ClickUp contracttaak updaten

## AI Instructies

AI mag contracten nooit automatisch goedkeuren, wijzigen of verwijderen. Bij twijfel classificeren als contractgevoelig en escaleren naar CM LEGAL AGENT.

## Quality Checklist

- Contractstatus is duidelijk
- Approval evidence aanwezig indien nodig
- Geen financiële bronadministratie
- Metadata bevat counterparty en datums
- Superseded versies zijn niet verwijderd
