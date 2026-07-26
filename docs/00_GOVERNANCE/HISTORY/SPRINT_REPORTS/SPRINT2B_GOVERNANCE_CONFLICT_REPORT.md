> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/CM_REPOSITORY_RECOVERY_PLAN.md` en de actuele documenten in `docs/00_GOVERNANCE/`
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 2B — Governance Conflict Report

## Status

**Rapportstatus:** BASIS VOOR DRIVE DRY RUN
**Migratiestatus:** GEEN LIVE MIGRATIE; ALLEEN DRY-RUN CONTROLE EN REVIEW

Dit rapport benoemt governanceconflicten en blokkades die tijdens de OS_CUSTOMMADE Drive-migratie zichtbaar moeten blijven. Het Apps Script `scripts/google-drive/migrate-os-custommade-roots.gs` gebruikt deze uitgangspunten om conflictregels, handmatige reviewregels en een Go/No-Go-conclusie in de Migration Log Sheet te schrijven.

## Conflictregels voor dry run

| Conflicttype | Signaal | Dry-run gevolg |
|---|---|---|
| FIERCE-content | Mapnaam of dependency bevat FIERCE-signaal. | `HOLD` of `UITSLUITEN`; geen doelpad en geen Drive-mutatie. |
| Onbekende root | Root staat niet in de Sprint 2B migratiematrix en is geen goedgekeurde doelroot. | Toevoegen aan conflictenlijst en handmatige review. |
| Onbekende of gemengde classificatie | Doelroot, owner of dossiercontext is niet eenduidig. | `HOLD_OWNER_REVIEW`; live migratie blijft geblokkeerd. |
| Artist/client-conflict | Artistmateriaal lijkt onder client- of businessstructuur te staan. | Handmatige review; artistmappen nooit blind naar `03_CLIENTS`. |
| Deal/lane-conflict | Deal-, catalog-, rights- of due-diligencecontent staat in lane- of projectroot. | Handmatige review; target alleen simuleren naar `04_DEALS` na checks. |
| Legal/finance/rights-risico | Contracten, Moneybird, rechtenbewijs of vertrouwelijke informatie. | Reviewer en permission check verplicht vóór live migratie. |
| Link-, shortcut- of automation-afhankelijkheid | Actieve ClickUp-, Gmail-, Docs-, Sheets-, Slides-, shortcut- of automationlink. | Shim/linkreview verplicht; geen definitieve verplaatsing in dry run. |
| Archief zonder broncontext | Archive-item mist bronroot, datum of reden. | Alleen inventariseren; archiveren geblokkeerd. |

## Dry-run Go/No-Go interpretatie

- **GO voor DRY RUN** betekent dat de simulatie en logsheet veilig mogen draaien met `DRY_RUN = true`.
- **NO-GO voor live migratie** blijft gelden zolang conflictregels, `HOLD`-items of handmatige reviews openstaan.
- Geen enkel conflict mag worden opgelost door Drive-bestanden te verwijderen, blind te archiveren of definitief te verplaatsen tijdens de dry run.

## Vereiste outputs

1. Migration Log Sheet.
2. Conflictenlijst.
3. Handmatige review lijst.
4. Go/No-Go-conclusie.

GEREED VOOR DRY RUN
