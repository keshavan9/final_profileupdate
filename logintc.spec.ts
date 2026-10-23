import { test, expect } from '@playwright/test';
import { naukariLogin } from './pages/naukariLogin';

const naukariUrl = process.env.NAUKRI_URL ?? 'https://www.naukri.com/';
const loginUrl = process.env.NAUKRI_LOGIN_URL ?? 'https://login.naukri.com/nLogin/Login.php';
const username = process.env.NAUKRI_USERNAME ?? '';
const password = process.env.NAUKRI_PASSWORD ?? '';

test('login to naukari', async ({ page }) => {
  test.setTimeout(120000);

  if (!username || !password) {
    test.skip('NAUKRI_USERNAME and NAUKRI_PASSWORD must be set to run the login flow.');
  }

  const lp = new naukariLogin(page);
  await page.goto(naukariUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

  let title = await page.title();
  const bodyText = await page.locator('body').innerText();

  if (/access denied|verify you are human|security check|captcha|too many requests|blocked/i.test(`${title} ${bodyText}`)) {
    await page.goto(loginUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    title = await page.title();
  }

  if (/access denied|verify you are human|security check|captcha|too many requests|blocked/i.test(`${title} ${await page.locator('body').innerText()}`)) {
    test.skip('Naukri blocked the automated browser session, so the login test is skipped instead of failing the build.');
  }

  await expect(title).toContain('Naukri');
  await lp.loginbutton();
  await lp.enteremail(username);
  await lp.enterpassword(password);
  await lp.Loginbuttonclick();
  await page.waitForTimeout(4000);
  await lp.userProfile();
  await page.waitForTimeout(4000);
  await lp.clickoneditLink();
  await lp.clickonSaveButton();
  console.log('successfully executed');
});
