import { Locator, Page, expect } from '@playwright/test';

export class naukariLogin {
  readonly page: Page;
  readonly loginID: Locator;
  readonly emailfield: Locator;
  readonly password: Locator;
  readonly Loginbutton: Locator;
  readonly viewProfile: Locator;
  readonly editlinkclick: Locator;
  readonly saveUserProfile: Locator;
  readonly finalverification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginID = page.locator('#login_Layer');
    this.emailfield = page.locator("input[type='email' i], input[name='email' i], input[placeholder*='Email' i], input[placeholder*='Username' i]").first();
    this.password = page.locator("input[type='password' i], input[name='password' i], input[placeholder*='Password' i]").first();
    this.Loginbutton = page.locator('button:has-text("Login"), input[type="submit"], button[type="submit"]').first();
    this.viewProfile = page.locator("a[href*='profile' i]:visible, a[title*='profile' i]:visible").first();
    this.editlinkclick = page.locator("em:has-text('editOneTheme'), a:has-text('Edit')").first();
    this.saveUserProfile = page.locator("#saveBasicDetailsBtn").first();
    this.finalverification = page.locator('span').filter({ hasText: /updated|saved|profile/i }).first();
  }

  async loginbutton() {
    await this.loginID.click();
  }

  async enteremail(emailID: string) {
    await this.emailfield.waitFor({ state: 'visible', timeout: 30000 });
    await this.emailfield.fill(emailID);
  }

  async enterpassword(password: string) {
    await this.password.waitFor({ state: 'visible', timeout: 30000 });
    await this.password.fill(password);
  }

  async Loginbuttonclick() {
    await this.Loginbutton.waitFor({ state: 'visible', timeout: 30000 });
    await this.Loginbutton.click();
  }

  async userProfile() {
    await expect(this.viewProfile).toBeVisible({ timeout: 30000 });
    await this.viewProfile.scrollIntoViewIfNeeded();
    await this.viewProfile.click();
  }

  async clickoneditLink() {
    await this.editlinkclick.waitFor({ state: 'visible', timeout: 30000 });
    await this.editlinkclick.click();
  }

  async clickonSaveButton() {
    await this.saveUserProfile.waitFor({ state: 'visible', timeout: 30000 });
    await this.saveUserProfile.scrollIntoViewIfNeeded();
    await this.saveUserProfile.click({ force: true });
  }

  async finalmessage() {
    await this.page.waitForTimeout(4000);
    await expect(this.finalverification).toBeVisible();
  }
}
