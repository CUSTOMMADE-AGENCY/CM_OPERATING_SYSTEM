# Moneybird Feed Agent

Een Playwright browser-agent die maximaal **25 nieuwe inkomende documenten** uit
de Moneybird Feed verwerkt. De agent draait **niet headless**, zodat je zelf
handmatig kunt inloggen. Daarna leest hij de feedtabel, classificeert elk
document en klikt alleen op **veilige knoppen**.

> Onderdeel van het CM Operating System. Moneybird blijft de financiële
> waarheid; deze agent verwerkt inkomende documenten, hij is geen boekhouder.

## Wat de agent doet

1. Opent Chromium via Playwright (niet headless).
2. Gaat naar de Moneybird Feed URL.
3. Wacht tot je **handmatig inlogt** (indien nodig). De sessie wordt bewaard in
   `.moneybird-session/`, zodat een volgende run niet opnieuw hoeft in te loggen.
4. Leest de eerste `batchLimit` (standaard 25) regels uit de feedtabel.
5. Classificeert per regel:
   - **INK** = inkoopfactuur → verwerken
   - **BON** = bon/receipt → verwerken
   - **ALG** = algemeen document → **niet verwerken**, alleen overslaan/review
6. Verwerkt alleen documenten met een **bedrag hoger dan €0,00**. Documenten
   zonder bedrag of met €0,00 worden overgeslagen.
7. Opent per INK/BON-document de detailpagina en klikt op één veilige knop:
   **Toevoegen · Verwerken · Opslaan · Aanmaken**.
8. Ontbreken er verplichte velden (of is er geen veilige knop), dan wordt het
   document **niet** verwerkt en gelogd als `REVIEW_REQUIRED`.
9. Gaat terug naar de feed en stopt na `batchLimit` documenten.
10. **Stopt direct** bij een onverwachte fout (`stopOnError`).

## Bestanden

| Bestand | Doel |
|---|---|
| `moneybird-feed-agent.js` | De agent zelf. |
| `config.json` | Alle instellingen (administratie, limieten, selectors, knoppen). |
| `package.json` | Node-project en dependency (Playwright). |
| `logs/` | Per run een JSON-logbestand met alle documentregels. |
| `.env.example` | Voorbeeld van lokale Moneybird-omgevingsvariabelen; bevat geen echte secrets. |

## Installatie

Vereist **Node.js 18+**.

```bash
cd scripts/moneybird-feed-agent
npm install            # installeert playwright + chromium (via postinstall)
```

Mocht de browser niet automatisch geïnstalleerd zijn:

```bash
npx playwright install chromium
```

## Gebruik

Optioneel kun je lokale omgevingsvariabelen laden. Commit nooit echte tokens:

```bash
cp .env.example .env
# Vul MONEYBIRD_ADMIN_ID en eventueel MONEYBIRD_API_TOKEN lokaal in.
set -a; source .env; set +a
```

```bash
npm start              # verwerkt maximaal 25 documenten (dryRun=false)
npm run dry-run        # leest en classificeert, maar klikt NIETS aan
```

Of direct met Node en optionele overrides:

```bash
node moneybird-feed-agent.js
node moneybird-feed-agent.js --dry-run
node moneybird-feed-agent.js --limit=10
```

Bij de eerste run verschijnt een Chromium-venster. Log daar handmatig in;
de agent detecteert automatisch wanneer de feed geladen is en gaat verder.

## Configuratie (`config.json`)

| Sleutel | Standaard | Betekenis |
|---|---|---|
| `administrationId` | leeg | Moneybird administratie-ID; verplicht lokaal instellen met `MONEYBIRD_ADMIN_ID` of `MONEYBIRD_ADMINISTRATION_ID`. |
| `feedUrl` | Feed-URL | De feedpagina die geopend wordt; wordt automatisch opnieuw opgebouwd bij een admin-ID uit de omgeving. |
| `batchLimit` | `25` | Maximaal aantal te verwerken documenten. |
| `dryRun` | `false` | `true` = niets aanklikken, alleen loggen. |
| `headless` | `false` | Browser zichtbaar (nodig voor handmatige login). |
| `amountThresholdEuro` | `0` | Alleen bedragen **hoger dan** deze waarde verwerken. |
| `stopOnError` | `true` | Stop de hele run bij de eerste fout. |
| `classification` | keywords | Trefwoorden per type (INK/BON/ALG). |
| `safeButtons` | 4 knoppen | Toegestane knoppen, in klikvolgorde. |
| `requiredFieldSignals` | teksten | Meldingen die op ontbrekende verplichte velden wijzen. |
| `selectors` | CSS | Selectors voor feedregels en login-detectie. |

### Selectors afstemmen

De feed-DOM van Moneybird kan wijzigen. Werken de standaardselectors niet, pas
dan `selectors.feedRow` (en eventueel de login-indicators) in `config.json` aan.
Draai eerst met `--dry-run` om te controleren of de regels correct gelezen en
geclassificeerd worden voordat je documenten daadwerkelijk verwerkt.

## Logging

Per document wordt gelogd: **kenmerk · contact · datum · bedrag · actie ·
resultaat** (plus type en detail). Alles verschijnt op de console en wordt na
afloop opgeslagen in `logs/feed-run-<timestamp>.json`.

Mogelijke resultaten:

| Resultaat | Betekenis |
|---|---|
| `VERWERKT` | Veilige knop geklikt, geen validatiefout. |
| `REVIEW_ONLY` | ALG-document, bewust niet verwerkt. |
| `GEEN_BEDRAG` | Geen bedrag gevonden, overgeslagen. |
| `BEDRAG_NUL` | Bedrag ≤ drempel (€0,00), overgeslagen. |
| `REVIEW_REQUIRED` | Verplicht veld ontbreekt of geen veilige knop → handmatig nakijken. |
| `OVERGESLAGEN_DRYRUN` | Zou verwerkt zijn, maar dry-run stond aan. |
| `FOUT` | Onverwachte fout; run gestopt. |

## Veiligheid & grenzen

- De agent klikt **uitsluitend** op de knoppen in `safeButtons`. Geen
  verwijderen, geen betalen, geen definitief indienen.
- Bij twijfel (ontbrekende velden, geen knop) wordt niets geforceerd; het
  document gaat naar `REVIEW_REQUIRED`.
- ALG-documenten worden nooit automatisch verwerkt.
- De agent stopt direct bij de eerste onverwachte fout.

## Niet committen

De map `.moneybird-session/` (jouw ingelogde sessie), `logs/` en lokale
`.env`-bestanden bevatten gevoelige/persoonlijke gegevens en horen **niet** in
Git. Ze staan in `.gitignore`. Commit alleen `.env.example` met placeholders.
