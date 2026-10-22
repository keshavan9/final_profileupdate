import { test, expect } from '@playwright/test';
import { naukariLogin } from '../pages/naukariLogin';
import data from '../testdata/login.json';

test('login to naukari', async ({ page }) => {
  test.setTimeout(120000);
  const lp = new naukariLogin(page);
  await page.goto(data.loginUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.waitForSelector("input[placeholder*='Email' i], input[placeholder*='Username' i]", { timeout: 30000 });
  await lp.enteremail(data.Username);
  await lp.enterpassword(data.Password);
  await lp.Loginbuttonclick();
  await page.waitForTimeout(4000);
  await lp.userProfile();
  await page.waitForTimeout(4000);
  await lp.clickoneditLink();
  await lp.clickonSaveButton();
  console.log('successfully executed');
});
