import { test, expect } from '@playwright/test';

test.describe('Startseite', () => {
  test('lädt und zeigt den Hero', async ({ page }) => {
    await page.goto('./');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.site-header')).toBeVisible();
    await expect(page.locator('.hero__image img')).toBeVisible();
  });

  test('hat keine Konsolenfehler', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('./');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });
});

test.describe('Sprachwechsel', () => {
  test('wechselt zwischen DE, EN und RU und speichert die Wahl', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: 'Deutsch' }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    await expect(page.locator('.site-logo span')).toHaveText('Homers Epen');

    await page.getByRole('button', { name: 'Русский' }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.locator('.site-logo span')).toHaveText('Эпосы Гомера');

    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('.site-logo span')).toHaveText("Homer's Epics");

    // Persistenz: Nach Neuladen bleibt Englisch aktiv
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});

test.describe('Werkbereiche', () => {
  test('öffnet die Ilias-Seite', async ({ page }) => {
    await page.goto('./');
    await page.getByRole('button', { name: 'Deutsch' }).click();
    await page.goto('./iliad');
    await expect(page.locator('h1')).toHaveText('Ilias');
    await expect(page.locator('.epic-section').first()).toBeVisible();
  });

  test('öffnet die Odyssee-Seite', async ({ page }) => {
    await page.goto('./');
    await page.getByRole('button', { name: 'Deutsch' }).click();
    await page.goto('./odyssey');
    await expect(page.locator('h1')).toHaveText('Odyssee');
  });
});

test.describe('Werkreise', () => {
  test('zeigt 24 Etappen und Kapitelnavigation der Ilias', async ({ page }) => {
    await page.goto('./iliad/journey');
    await expect(page.locator('.stage')).toHaveCount(24);
    await expect(page.locator('.journey-nav__list li')).toHaveCount(24);

    // Kapitelnavigation springt zu einer Etappe
    await page.locator('.journey-nav__list a').nth(21).click();
    await expect(page.locator('#gesang-22')).toBeInViewport();
  });

  test('Sidenote lässt sich aufklappen', async ({ page }) => {
    await page.goto('./odyssey/journey');
    const first = page.locator('details.sidenote').first();
    await first.locator('summary').click();
    await expect(first).toHaveAttribute('open', '');
  });
});

test.describe('Weitere Bereiche', () => {
  test('Glossar-Suche filtert Einträge', async ({ page }) => {
    await page.goto('./glossary');
    const input = page.locator('#glossary-q');
    await input.fill('xen');
    await expect(page.locator('.glossary-entry')).toHaveCount(1);
  });

  test('Figuren-Filter funktioniert', async ({ page }) => {
    await page.goto('./characters');
    await expect(page.locator('.character-card').first()).toBeVisible();
    const countAll = await page.locator('.character-card').count();
    expect(countAll).toBeGreaterThan(20);
    await page.locator('.filter-bar .chip').nth(3).click(); // Götter
    const countGods = await page.locator('.character-card').count();
    expect(countGods).toBeLessThan(countAll);
  });

  test('404-Seite erscheint bei unbekannter Route', async ({ page }) => {
    await page.goto('./does-not-exist');
    await expect(page.locator('.not-found')).toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test('Menü öffnet und navigiert', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Nur für Mobilgeräte relevant');
    await page.goto('./');
    await page.locator('.nav-toggle').click();
    await expect(page.locator('.main-nav')).toHaveClass(/is-open/);
    await page.locator('.main-nav a').nth(1).click();
    await expect(page).toHaveURL(/iliad/);
    await expect(page.locator('.main-nav')).not.toHaveClass(/is-open/);
  });
});
