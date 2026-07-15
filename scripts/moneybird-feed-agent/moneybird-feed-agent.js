#!/usr/bin/env node
/**
 * Moneybird Feed Agent
 * --------------------
 * Playwright browser-agent die maximaal `batchLimit` (standaard 25) nieuwe
 * inkomende documenten uit de Moneybird Feed verwerkt.
 *
 * Documenttypes:
 *   INK = inkoopfactuur  -> verwerken
 *   BON = bon/receipt    -> verwerken
 *   ALG = algemeen doc   -> NIET verwerken, alleen overslaan/review
 *
 * Regels:
 *   - Verwerk alleen documenten met bedrag > amountThresholdEuro (standaard €0,00).
 *   - Sla documenten zonder bedrag of met €0,00 over.
 *   - Klik alleen op veilige knoppen (Toevoegen/Verwerken/Opslaan/Aanmaken).
 *   - Ontbreken verplichte velden -> stop met document en log REVIEW_REQUIRED.
 *   - Stop de hele run direct bij een onverwachte fout (stopOnError).
 *
 * Draait NIET headless: je logt zelf handmatig in wanneer dat nodig is.
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Config laden + CLI overrides
// ---------------------------------------------------------------------------

function loadConfig() {
  const configPath = path.join(__dirname, 'config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error(`config.json niet gevonden op ${configPath}`);
  }
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // Environment overrides. Secrets blijven buiten config.json/Git; een eventuele
  // MONEYBIRD_API_TOKEN wordt alleen gevalideerd als aanwezig en nooit gelogd.
  const envAdministrationId = process.env.MONEYBIRD_ADMIN_ID || process.env.MONEYBIRD_ADMINISTRATION_ID;
  if (envAdministrationId) {
    if (!/^\d+$/.test(envAdministrationId)) {
      throw new Error('MONEYBIRD_ADMIN_ID moet alleen uit cijfers bestaan.');
    }
    cfg.administrationId = envAdministrationId;
    cfg.feedUrl = `https://moneybird.com/${envAdministrationId}/feed`;
  }

  if (process.env.MONEYBIRD_API_TOKEN !== undefined && process.env.MONEYBIRD_API_TOKEN.trim() === '') {
    throw new Error('MONEYBIRD_API_TOKEN is gezet maar leeg.');
  }

  // CLI overrides
  const argv = process.argv.slice(2);
  if (argv.includes('--dry-run')) cfg.dryRun = true;
  if (argv.includes('--no-dry-run')) cfg.dryRun = false;
  if (argv.includes('--headless')) cfg.headless = true;

  const limitArg = argv.find((a) => a.startsWith('--limit='));
  if (limitArg) {
    const n = parseInt(limitArg.split('=')[1], 10);
    if (Number.isFinite(n) && n > 0) cfg.batchLimit = n;
  }

  // Verstandige defaults
  cfg.batchLimit = cfg.batchLimit || 25;
  cfg.amountThresholdEuro = cfg.amountThresholdEuro ?? 0;
  cfg.timeouts = cfg.timeouts || {};
  return cfg;
}

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------

const runStartedAt = new Date();
const logRecords = [];

function stamp() {
  return new Date().toISOString();
}

function info(msg) {
  console.log(`[${stamp()}] ${msg}`);
}

function warn(msg) {
  console.warn(`[${stamp()}] WAARSCHUWING: ${msg}`);
}

/**
 * Log per document. Velden: kenmerk, contact, datum, bedrag, actie, resultaat.
 */
function logDocument(record) {
  const row = {
    index: record.index,
    kenmerk: record.kenmerk || '',
    contact: record.contact || '',
    datum: record.datum || '',
    bedrag: record.bedrag || '',
    type: record.type || '',
    actie: record.actie || '',
    resultaat: record.resultaat || '',
    detail: record.detail || '',
    tijdstip: stamp(),
  };
  logRecords.push(row);
  console.log(
    `[${row.tijdstip}] #${row.index} | ${row.type} | ${row.kenmerk} | ${row.contact} | ${row.datum} | ${row.bedrag} | ${row.actie} -> ${row.resultaat}` +
      (row.detail ? ` (${row.detail})` : '')
  );
}

function writeRunLog() {
  const logsDir = path.join(__dirname, 'logs');
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
  const fname = `feed-run-${runStartedAt.toISOString().replace(/[:.]/g, '-')}.json`;
  const fpath = path.join(logsDir, fname);
  const payload = {
    startedAt: runStartedAt.toISOString(),
    finishedAt: new Date().toISOString(),
    total: logRecords.length,
    documents: logRecords,
  };
  fs.writeFileSync(fpath, JSON.stringify(payload, null, 2), 'utf8');
  info(`Runlog weggeschreven: ${path.relative(process.cwd(), fpath)}`);
}

// ---------------------------------------------------------------------------
// Helpers: bedrag parsen + classificatie
// ---------------------------------------------------------------------------

/**
 * Parse een Nederlands geformatteerd bedrag naar een Number in euro.
 * Voorbeelden: "€ 1.234,56" -> 1234.56 ; "€ 0,00" -> 0 ; "-12,50" -> -12.5
 * Retourneert null als er geen bedrag gevonden wordt.
 */
function parseEuroAmount(text) {
  if (!text) return null;
  // Zoek een geldbedrag-patroon in de tekst.
  const match = String(text).match(/-?\s*€?\s*-?\d[\d.\s]*(?:,\d{1,2})?/);
  if (!match) return null;
  let raw = match[0].replace(/€/g, '').replace(/\s/g, '');
  const negative = raw.includes('-');
  raw = raw.replace(/-/g, '');
  // Verwijder duizendtal-punten, vervang decimaalkomma door punt.
  raw = raw.replace(/\./g, '').replace(',', '.');
  const value = parseFloat(raw);
  if (!Number.isFinite(value)) return null;
  return negative ? -value : value;
}

function formatEuro(value) {
  if (value === null || value === undefined) return '';
  return `€ ${value.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Classificeer een feedregel op basis van de zichtbare tekst.
 * Retourneert 'INK' | 'BON' | 'ALG'. Onbekend => 'ALG' (veiligste: alleen review).
 */
function classifyRow(rowText, classification) {
  const text = (rowText || '').toLowerCase();
  const check = (keywords) => keywords.some((kw) => text.includes(kw.toLowerCase()));
  // Volgorde: INK en BON zijn specifiek; ALG is de veilige fallback.
  if (classification.INK && check(classification.INK)) return 'INK';
  if (classification.BON && check(classification.BON)) return 'BON';
  return 'ALG';
}

// ---------------------------------------------------------------------------
// Feed uitlezen
// ---------------------------------------------------------------------------

/**
 * Lees maximaal `limit` regels uit de feedtabel. Retourneert een array met
 * per regel: { index, text, kenmerk, contact, datum, bedragText, bedrag, href }.
 */
async function readFeedRows(page, cfg) {
  const limit = cfg.batchLimit;
  const rowSelector = cfg.selectors.feedRow;

  await page.waitForSelector(rowSelector, { timeout: cfg.timeouts.actionMs || 15000 });

  const rows = await page.$$(rowSelector);
  const parsed = [];

  for (let i = 0; i < rows.length && parsed.length < limit; i++) {
    const el = rows[i];
    const text = (await el.innerText().catch(() => '')) || '';
    const clean = text.replace(/\s+/g, ' ').trim();
    if (!clean) continue;

    // Detaillink: eerste anchor in de regel.
    const href = await el
      .$eval('a[href]', (a) => a.getAttribute('href'))
      .catch(() => null);

    // Cel-gebaseerde extractie (tabel). Valt terug op regeltekst.
    const cells = await el.$$eval('td', (tds) => tds.map((td) => td.innerText.trim())).catch(() => []);

    const bedragText =
      cells.find((c) => /€|\d,\d{2}/.test(c)) ||
      (clean.match(/€\s*-?\d[\d.\s]*(?:,\d{2})?/) || [])[0] ||
      '';

    const datum =
      cells.find((c) => /\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|\d{4}-\d{2}-\d{2}/.test(c)) ||
      (clean.match(/\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|\d{4}-\d{2}-\d{2}/) || [])[0] ||
      '';

    parsed.push({
      index: parsed.length + 1,
      text: clean,
      cells,
      kenmerk: cells[0] || clean.slice(0, 60),
      contact: cells.length > 1 ? cells[1] : '',
      datum,
      bedragText,
      bedrag: parseEuroAmount(bedragText),
      href,
    });
  }

  return parsed;
}

// ---------------------------------------------------------------------------
// Detailpagina verwerken
// ---------------------------------------------------------------------------

/**
 * Zoek de eerste veilige, zichtbare, ingeschakelde knop op de pagina.
 * Retourneert { locator, label } of null.
 */
async function findSafeButton(page, safeButtons, timeoutMs) {
  for (const label of safeButtons) {
    // Exacte, hoofdletterongevoelige match op knop/link met deze naam.
    const byRole = page.getByRole('button', { name: new RegExp(`^\\s*${escapeRegExp(label)}\\s*$`, 'i') });
    const byLink = page.getByRole('link', { name: new RegExp(`^\\s*${escapeRegExp(label)}\\s*$`, 'i') });
    const bySubmit = page.locator(`input[type="submit"][value="${label}" i]`);

    for (const loc of [byRole, byLink, bySubmit]) {
      const count = await loc.count().catch(() => 0);
      for (let i = 0; i < count; i++) {
        const item = loc.nth(i);
        const visible = await item.isVisible().catch(() => false);
        const enabled = await item.isEnabled().catch(() => false);
        if (visible && enabled) {
          return { locator: item, label };
        }
      }
    }
  }
  return null;
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Controleer of er zichtbare validatie-/verplichte-veldmeldingen op de pagina staan.
 */
async function hasRequiredFieldErrors(page, signals) {
  const body = (await page.locator('body').innerText().catch(() => '')) || '';
  const lower = body.toLowerCase();
  const matched = signals.find((sig) => lower.includes(sig.toLowerCase()));
  return matched || null;
}

/**
 * Verwerk één INK/BON document op de detailpagina.
 * Retourneert { actie, resultaat, detail }.
 */
async function processDetail(page, cfg, docType) {
  const { safeButtons, requiredFieldSignals, timeouts } = cfg;

  // 1) Check vooraf op ontbrekende verplichte velden.
  const preError = await hasRequiredFieldErrors(page, requiredFieldSignals);
  if (preError) {
    return {
      actie: 'GEEN',
      resultaat: 'REVIEW_REQUIRED',
      detail: `Verplicht veld ontbreekt: "${preError}"`,
    };
  }

  // 2) Zoek een veilige knop.
  const btn = await findSafeButton(page, safeButtons, timeouts.actionMs || 15000);
  if (!btn) {
    return {
      actie: 'GEEN',
      resultaat: 'REVIEW_REQUIRED',
      detail: 'Geen veilige knop (Toevoegen/Verwerken/Opslaan/Aanmaken) gevonden',
    };
  }

  // 3) Dry-run: niet klikken, alleen loggen wat er zou gebeuren.
  if (cfg.dryRun) {
    return {
      actie: `[DRY-RUN] ${btn.label}`,
      resultaat: 'OVERGESLAGEN_DRYRUN',
      detail: `Zou knop "${btn.label}" klikken voor ${docType}`,
    };
  }

  // 4) Klik de veilige knop.
  await btn.locator.click({ timeout: timeouts.actionMs || 15000 });
  await page
    .waitForLoadState('networkidle', { timeout: timeouts.actionMs || 15000 })
    .catch(() => {});

  // 5) Na de actie opnieuw op validatiemeldingen controleren.
  const postError = await hasRequiredFieldErrors(page, requiredFieldSignals);
  if (postError) {
    return {
      actie: btn.label,
      resultaat: 'REVIEW_REQUIRED',
      detail: `Na "${btn.label}" verplicht veld/validatie: "${postError}"`,
    };
  }

  return {
    actie: btn.label,
    resultaat: 'VERWERKT',
    detail: `Knop "${btn.label}" geklikt voor ${docType}`,
  };
}

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------

async function isLoggedIn(page, cfg) {
  const url = page.url();
  if (/\/login|\/sessions|inloggen/i.test(url)) return false;

  // Zichtbaar loginformulier => nog niet ingelogd.
  for (const sel of cfg.selectors.loginIndicators) {
    const visible = await page
      .locator(sel)
      .first()
      .isVisible()
      .catch(() => false);
    if (visible) return false;
  }

  // Feedtabel/regels aanwezig => ingelogd.
  const rowVisible = await page
    .locator(cfg.selectors.feedRow)
    .first()
    .isVisible()
    .catch(() => false);
  return rowVisible;
}

async function waitForManualLogin(page, cfg) {
  if (await isLoggedIn(page, cfg)) {
    info('Sessie actief — al ingelogd.');
    return;
  }

  info('----------------------------------------------------------------');
  info('LOG NU HANDMATIG IN in het geopende Chromium-venster.');
  info('De agent wacht tot de Moneybird Feed geladen is...');
  info('----------------------------------------------------------------');

  const deadline = Date.now() + (cfg.timeouts.manualLoginMs || 300000);
  while (Date.now() < deadline) {
    if (await isLoggedIn(page, cfg)) {
      info('Login gedetecteerd — Feed is toegankelijk.');
      return;
    }
    // Als de gebruiker weg genavigeerd is, terug naar de feed.
    if (!page.url().includes('/feed')) {
      await page.goto(cfg.feedUrl, { waitUntil: 'domcontentloaded' }).catch(() => {});
    }
    await page.waitForTimeout(cfg.timeouts.loginPollMs || 2000);
  }
  throw new Error('Time-out: handmatige login niet binnen de tijdslimiet voltooid.');
}

// ---------------------------------------------------------------------------
// Hoofdroutine
// ---------------------------------------------------------------------------

async function run() {
  const cfg = loadConfig();
  const { chromium } = require('playwright');

  info(`Moneybird Feed Agent gestart`);
  info(`Administratie : ${cfg.administrationId}`);
  info(`Feed URL      : ${cfg.feedUrl}`);
  info(`batchLimit    : ${cfg.batchLimit}`);
  info(`dryRun        : ${cfg.dryRun}`);
  info(`Drempelbedrag : > ${formatEuro(cfg.amountThresholdEuro)}`);

  const userDataDir = path.isAbsolute(cfg.userDataDir)
    ? cfg.userDataDir
    : path.join(__dirname, cfg.userDataDir || '.moneybird-session');

  // Persistente context: bewaart de handmatige login voor volgende runs.
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: !!cfg.headless,
    viewport: { width: 1440, height: 900 },
    acceptDownloads: false,
  });
  context.setDefaultNavigationTimeout(cfg.timeouts.navigationMs || 45000);
  context.setDefaultTimeout(cfg.timeouts.actionMs || 15000);

  const page = context.pages()[0] || (await context.newPage());

  let processed = 0;
  let hadError = false;

  try {
    // 1) Naar de feed.
    await page.goto(cfg.feedUrl, { waitUntil: 'domcontentloaded' });

    // 2) Handmatige login toestaan.
    await waitForManualLogin(page, cfg);

    // 3) Zorg dat we op de feed staan en lees de eerste N regels.
    if (!page.url().includes('/feed')) {
      await page.goto(cfg.feedUrl, { waitUntil: 'domcontentloaded' });
    }
    const rows = await readFeedRows(page, cfg);
    info(`Feed gelezen: ${rows.length} regel(s) (limiet ${cfg.batchLimit}).`);

    // 4) Verwerk elke regel.
    for (const row of rows) {
      if (processed >= cfg.batchLimit) break;
      processed++;

      const docType = classifyRow(row.text, cfg.classification);
      const base = {
        index: row.index,
        kenmerk: row.kenmerk,
        contact: row.contact,
        datum: row.datum,
        bedrag: row.bedrag !== null ? formatEuro(row.bedrag) : (row.bedragText || ''),
        type: docType,
      };

      // 4a) ALG => niet verwerken, alleen review/overslaan.
      if (docType === 'ALG') {
        logDocument({ ...base, actie: 'OVERSLAAN', resultaat: 'REVIEW_ONLY', detail: 'Algemeen document — niet verwerken' });
        continue;
      }

      // 4b) Geen bedrag of <= drempel => overslaan.
      if (row.bedrag === null) {
        logDocument({ ...base, actie: 'OVERSLAAN', resultaat: 'GEEN_BEDRAG', detail: 'Geen bedrag gevonden' });
        continue;
      }
      if (row.bedrag <= cfg.amountThresholdEuro) {
        logDocument({ ...base, actie: 'OVERSLAAN', resultaat: 'BEDRAG_NUL', detail: `Bedrag ${formatEuro(row.bedrag)} <= drempel` });
        continue;
      }

      // 4c) INK/BON => detailpagina openen en verwerken.
      if (!row.href) {
        logDocument({ ...base, actie: 'GEEN', resultaat: 'REVIEW_REQUIRED', detail: 'Geen detaillink in feedregel' });
        continue;
      }

      const detailUrl = new URL(row.href, page.url()).toString();
      await page.goto(detailUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle', { timeout: cfg.timeouts.actionMs || 15000 }).catch(() => {});

      const result = await processDetail(page, cfg, docType);
      logDocument({ ...base, ...result });

      // 5) Terug naar de feed.
      await page.goto(cfg.feedUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector(cfg.selectors.feedRow, { timeout: cfg.timeouts.actionMs || 15000 }).catch(() => {});
    }

    info(`Klaar. ${processed} document(en) doorlopen (max ${cfg.batchLimit}).`);
  } catch (err) {
    hadError = true;
    warn(`FOUT — run wordt gestopt: ${err && err.message ? err.message : err}`);
    logDocument({
      index: processed,
      kenmerk: '',
      contact: '',
      datum: '',
      bedrag: '',
      type: '',
      actie: 'STOP',
      resultaat: 'FOUT',
      detail: err && err.message ? err.message : String(err),
    });
  } finally {
    writeRunLog();
    // Samenvatting
    const summary = logRecords.reduce((acc, r) => {
      acc[r.resultaat] = (acc[r.resultaat] || 0) + 1;
      return acc;
    }, {});
    info(`Samenvatting: ${JSON.stringify(summary)}`);
    await context.close().catch(() => {});
  }

  process.exit(hadError && cfg.stopOnError ? 1 : 0);
}

// Exporteer helpers + page-logica voor tests; start de run alleen bij directe aanroep.
module.exports = {
  parseEuroAmount,
  formatEuro,
  classifyRow,
  readFeedRows,
  findSafeButton,
  hasRequiredFieldErrors,
  processDetail,
};

if (require.main === module) {
  run();
}
