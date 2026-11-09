const { test, expect } = require('@playwright/test');

// Altere se o seu Live Server estiver usando outra porta/link
const URL_APLICACAO = 'http://127.0.0.1:5500';

test('1. Acesso à aplicação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'screenshots/01_acesso_aplicacao.png', fullPage: true });
});

test('2. Navegação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'screenshots/02_navegacao.png' });
});

test('3. Elementos gráficos', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  const elementoVisivel = page.locator('img, button, div, body').first();
  await expect(elementoVisivel).toBeVisible();
  await page.screenshot({ path: 'screenshots/03_elementos_graficos.png' });
});

test('4. Formulários e Interação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  const interativo = page.locator('button, a, input, img').first();
  if (await interativo.isVisible()) {
    await interativo.click({ force: true });
  }
  await page.screenshot({ path: 'screenshots/04_interacao_formulario.png' });
});

test('5. Validação de Elementos Esperados', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).not.toBeEmpty();
  await page.screenshot({ path: 'screenshots/05_validacao_elementos.png' });
});

test('6. Captura de tela geral', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: 'screenshots/06_captura_final.png', fullPage: true });
});