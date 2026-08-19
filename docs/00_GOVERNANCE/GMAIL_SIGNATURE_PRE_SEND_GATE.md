# GMAIL SIGNATURE PRE-SEND GATE

## DOEL

Voorkomen dat een Custommade Agency e-mail wordt verzonden zonder de centrale goedgekeurde Gmail-handtekening of met een verkorte/afwijkende handtekening.

## REIKWIJDTE

Deze regel geldt voor alle uitgaande Gmail-communicatie vanuit `info@custommade.agency`, ongeacht of de mail handmatig, via ChatGPT, agent tooling, Apps Script, Make of een andere goedgekeurde workflow wordt opgesteld of verzonden.

## LEIDENDE BRON

De inhoudelijke en structurele signature-regels staan in:

`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/06_GMAIL_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md`

De actuele visuele HTML-signature wordt operationeel in Gmail beheerd.

## HARDE PRE-SEND GATE

Een mail mag alleen worden verzonden wanneer ALLE onderstaande controles `true` zijn:

- `sender_valid = true`
- `recipient_valid = true`
- `thread_valid = true` bij reply
- `subject_valid = true`
- `body_valid = true`
- `signature_present = true`
- `signature_matches_canonical = true`
- `attachments_valid = true` indien attachments worden genoemd
- `approval_valid = true` indien approval governance van toepassing is

Als één controle niet kan worden bevestigd: `REVIEW_REQUIRED` en NIET verzenden.

## SIGNATURE — VERPLICHTE CONTROLE

`signature_present = true` betekent NIET alleen dat er een afsluitregel staat.

De handtekening is pas geldig wanneer de volledige centrale CM-signature aanwezig is conform de canonieke structuur in de Email Communication Standard.

### ONGELEDIGE / VERBODEN VERVANGINGEN

Onderstaande vormen gelden expliciet als `signature_present = false`:

- `Met vriendelijke groet, CUSTOM MADE AGENCY`
- `Met vriendelijke groet,` zonder volledige signature
- `Sophia`
- `Sophia van Wijk` zonder overige signature-elementen
- `CUSTOM MADE AGENCY` als enige afsluiting
- elke zelfstandig herschreven, verkorte of opnieuw ontworpen signature

## TOOLREGEL

Een Gmail-tool of API-call die de Gmail-signature niet automatisch invoegt, mag NOOIT veronderstellen dat Gmail dit na verzending alsnog doet.

De verzendende workflow moet de volledige signature expliciet in de uiteindelijke `html_body` of body opnemen vóór de send-call.

Als de actuele HTML-signature niet betrouwbaar beschikbaar is, geldt:

`REVIEW_REQUIRED` — NIET VERZENDEN.

## THREADING

Bij een bestaand Gmail-bericht wordt een reply in dezelfde thread gemaakt met het originele Gmail `message_id` / `reply_message_id`.

Een losse nieuwe mail is alleen toegestaan wanneer Sophia expliciet om een nieuwe mail vraagt of aantoonbaar geen relevante bestaande thread bestaat.

## KWALITEITSCHECK VÓÓR VERZENDING

De verzendende agent/workflow controleert minimaal:

| Check | Vereiste |
|---|---|
| Afzender | `info@custommade.agency` of expliciet goedgekeurd CM-adres |
| Ontvanger | Gecontroleerd uit Gmail/Contacts of expliciet door Sophia opgegeven |
| Thread | Bestaande thread gebruikt wanneer van toepassing |
| Onderwerp | Correct en dossiergeschikt |
| Body | Volledig en inhoudelijk gecontroleerd |
| Handtekening | Volledige canonieke CM-signature aanwezig |
| Signature match | Geen verkorte of afwijkende variant |
| Attachments | Aanwezig indien genoemd |
| Approval | Geldige approval indien vereist |

## INCIDENTREGEL

Wanneer een mail toch zonder correcte signature is verzonden:

1. Incident registreren als governance-afwijking.
2. Oorzaak vaststellen: tool, agentinstructie, workflow of menselijke fout.
3. Canonieke instructie/workflow corrigeren.
4. Geen tweede correctiemail versturen uitsluitend voor de signature, tenzij inhoudelijk noodzakelijk.

## OWNER

CM CONTROL AGENT

## STATUS

ACTIVE — MANDATORY

## DATUM

AUGUSTUS 2026