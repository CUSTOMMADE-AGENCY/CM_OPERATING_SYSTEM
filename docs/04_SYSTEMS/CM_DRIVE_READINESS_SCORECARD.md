# CM DRIVE READINESS SCORECARD

## Auditgegevens

| Veld | Invullen |
| --- | --- |
| Auditnaam | CM Drive Readiness Audit V1 |
| Auditdatum |  |
| Auditor |  |
| Drive-root gecontroleerd | OS_CUSTOMMADE |
| Source of truth gecontroleerd | Ja / Nee |
| Read-only bevestigd | Ja / Nee |
| Make uitgevoerd? | Nee verplicht |
| Mutaties uitgevoerd? | Nee verplicht |
| Rapportbestand | CM_DRIVE_READINESS_REPORT.md |
| Owner review door |  |
| CM CONTROL approval | Ja / Nee / Pending |
| GO / NO-GO |  |

## Scorelegenda

| Score | Kleur | Status |
| --- | --- | --- |
| 95-100% | Groen | Gereed, mits geen critical issues |
| 80-94% | Oranje | Verbeteracties nodig vóór automatische acties |
| 0-79% | Rood | NO-GO |

## Risicolegenda

| Risico | Betekenis |
| --- | --- |
| CRITICAL | Directe blocker voor livegang of automatische Drive-acties |
| HIGH | Hoog risico; oplossen of formeel accepteren vóór GO |
| MEDIUM | Correctieplanning vereist |
| LOW | Klein verbeterpunt |

## 1. ROOT

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bestaat `OS_CUSTOMMADE` |  |  |  |  |  |  |  |
| Geen oude roots actief |  |  |  |  |  |  |  |
| Geen verboden roots |  |  |  |  |  |  |  |
| Geen parallelle rootstructuren |  |  |  |  |  |  |  |
| Rootlaag bevat alleen goedgekeurde hoofdstructuur |  |  |  |  |  |  |  |

## 2. ARTIST MANAGEMENT

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alle artiesten onder `02_ARTIST_MANAGEMENT` |  |  |  |  |  |  |  |
| Geen artiesten onder `03_CLIENTS` |  |  |  |  |  |  |  |
| Artistfolders bevatten `01_ADMIN` |  |  |  |  |  |  |  |
| Artistfolders bevatten `02_CONTRACT` |  |  |  |  |  |  |  |
| Artistfolders bevatten `03_STRATEGY` |  |  |  |  |  |  |  |
| Artistfolders bevatten `04_RELEASES` |  |  |  |  |  |  |  |
| Artistfolders bevatten `05_BOOKING` |  |  |  |  |  |  |  |
| Artistfolders bevatten `06_FINANCE` |  |  |  |  |  |  |  |
| Artistfolders bevatten `07_SOCIALMEDIA` |  |  |  |  |  |  |  |
| Artistfolders bevatten `08_PRESS_EPK` |  |  |  |  |  |  |  |
| Artistfolders bevatten `09_ARCHIVE` |  |  |  |  |  |  |  |

## 3. DEALS

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `04_DEALS` bestaat |  |  |  |  |  |  |  |
| Iedere deal bevat `00_START_HIER` |  |  |  |  |  |  |  |
| Iedere deal bevat `01_RECHTEN_REGISTER` |  |  |  |  |  |  |  |
| Iedere deal bevat `02_CONTRACTEN_BEWIJS` |  |  |  |  |  |  |  |
| Iedere deal bevat `03_WAARDERING_VERKOOPPAKKET` |  |  |  |  |  |  |  |
| Iedere deal bevat `04_OUTREACH_CLICKUP` |  |  |  |  |  |  |  |
| Iedere deal bevat `99_ARCHIEF` |  |  |  |  |  |  |  |
| Geen oude Engelse dealstructuur als standaard actief |  |  |  |  |  |  |  |
| Due diligence mappen alleen bij juiste fase |  |  |  |  |  |  |  |

## 4. CLIENTS

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `03_CLIENTS` bevat alleen bedrijven |  |  |  |  |  |  |  |
| `03_CLIENTS` bevat alleen merken |  |  |  |  |  |  |  |
| `03_CLIENTS` bevat alleen media |  |  |  |  |  |  |  |
| `03_CLIENTS` bevat alleen sponsors |  |  |  |  |  |  |  |
| `03_CLIENTS` bevat alleen opdrachtgevers |  |  |  |  |  |  |  |
| `03_CLIENTS` bevat alleen partners |  |  |  |  |  |  |  |
| Geen artiesten in `03_CLIENTS` |  |  |  |  |  |  |  |
| Geen dealcases in `03_CLIENTS` |  |  |  |  |  |  |  |

## 5. LEGAL

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Approval Register bestaat |  |  |  |  |  |  |  |
| Geen tweede approval-register actief |  |  |  |  |  |  |  |
| Contractlocaties volgen Drive Mapping |  |  |  |  |  |  |  |
| Bewijsstukken staan bij juiste dossiers |  |  |  |  |  |  |  |
| Level 4 approvals zijn traceerbaar |  |  |  |  |  |  |  |

## 6. FINANCE

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `06_FINANCE` bestaat |  |  |  |  |  |  |  |
| Geen financiële bronadministratie buiten finance/Moneybird-context |  |  |  |  |  |  |  |
| Geen operationele documenten buiten finance wanneer finance-document |  |  |  |  |  |  |  |
| Facturen, bonnen en kwitanties herkenbaar geplaatst |  |  |  |  |  |  |  |
| Financiële approvals traceerbaar |  |  |  |  |  |  |  |

## 7. TEMPLATE COMPLIANCE

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Werkbare kopieën aanwezig waar nodig |  |  |  |  |  |  |  |
| Templatebron alleen GitHub |  |  |  |  |  |  |  |
| Geen dubbele templatesources in Drive |  |  |  |  |  |  |  |
| Drive bevat alleen kopieën, ingevulde versies of exports |  |  |  |  |  |  |  |
| Templatevarianten zijn traceerbaar |  |  |  |  |  |  |  |

## 8. DUPLICATEN

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Geen dubbele mappen |  |  |  |  |  |  |  |
| Geen dubbele artiesten |  |  |  |  |  |  |  |
| Geen dubbele dealcases |  |  |  |  |  |  |  |
| Geen dubbele clientdossiers |  |  |  |  |  |  |  |
| Legacy folders niet actief gebruikt |  |  |  |  |  |  |  |

## 9. SHARING

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Geen ongecontroleerde open shares |  |  |  |  |  |  |  |
| Externe shares dossiermatig verklaarbaar |  |  |  |  |  |  |  |
| Gevoelige documenten niet te breed gedeeld |  |  |  |  |  |  |  |
| Publieke links geïdentificeerd |  |  |  |  |  |  |  |
| Oud personeel / onbekende accounts opgenomen voor review |  |  |  |  |  |  |  |

## 10. FILE QUALITY

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bestandsnamen begrijpelijk en herleidbaar |  |  |  |  |  |  |  |
| Losse rootbestanden geïdentificeerd |  |  |  |  |  |  |  |
| Lege mappen geïdentificeerd |  |  |  |  |  |  |  |
| Bestanden hebben dossiercontext |  |  |  |  |  |  |  |
| Ad-hoc exports niet actief waar ongepast |  |  |  |  |  |  |  |

## 11. ARCHIVE

| Controlepunt | Status | Score | Risico | Bewijs / pad | Bevinding | Aanbevolen actie | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `99_ARCHIVE` bestaat |  |  |  |  |  |  |  |
| `99_ARCHIVE` niet actief gebruikt als werkmap |  |  |  |  |  |  |  |
| Legacy / superseded / hold materiaal correct herkenbaar |  |  |  |  |  |  |  |
| Geen verwijdering van contracten, finance of bewijsstukken |  |  |  |  |  |  |  |
| Mogelijke archiefacties staan op hold-/reviewlijst |  |  |  |  |  |  |  |

## Totaalscore

| Onderdeel | Score | Kleur | Hoogste risico | GO-blocker? | Opmerking |
| --- | --- | --- | --- | --- | --- |
| ROOT |  |  |  |  |  |
| ARTIST MANAGEMENT |  |  |  |  |  |
| DEALS |  |  |  |  |  |
| CLIENTS |  |  |  |  |  |
| LEGAL |  |  |  |  |  |
| FINANCE |  |  |  |  |  |
| TEMPLATE COMPLIANCE |  |  |  |  |  |
| DUPLICATEN |  |  |  |  |  |
| SHARING |  |  |  |  |  |
| FILE QUALITY |  |  |  |  |  |
| ARCHIVE |  |  |  |  |  |
| **TOTAAL** |  |  |  |  |  |

## Critical Issues

| ID | Bevinding | Pad / bewijs | Waarom critical | Vereiste actie | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |

## Hold-lijst

| Item | Pad | Reden hold | Risico | Owner | Besluit nodig |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## Aanbevolen acties

| Prioriteit | Actie | Risico | Owner | Approval nodig? | Deadline |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## GO / NO-GO Besluit

| Voorwaarde | Status | Bewijs / opmerking |
| --- | --- | --- |
| Audit voltooid |  |  |
| Score ≥95% |  |  |
| Geen critical issues |  |  |
| Rollbackplan aanwezig |  |  |
| Hold-lijst aanwezig |  |  |
| Owner review afgerond |  |  |
| CM CONTROL approval vastgelegd |  |  |
| Scope voorgenomen mutatie beschreven |  |  |
| Agent-/Make-test veilig uitgevoerd of read-only gevalideerd |  |  |
| Fallbackprocedure bekend |  |  |

Eindbesluit:

```text
GO / NO-GO:
Reden:
Beslisser:
Datum:
```
