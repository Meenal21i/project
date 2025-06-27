import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import * as dotenv from 'dotenv';

dotenv.config();
setDefaultTimeout(60 * 1000 * 3);

Before(async function (this: CustomWorld, scenario) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  const tags = scenario.pickle.tags.map(t => t.name);

  if (!tags.includes('@login-skip')) {
    await this.page.goto(process.env.BASE_URL!);
    await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
    await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
    await this.page.locator('#login-form-input-submit-btn').click();
  }
});

After(async function (this: CustomWorld) {
  if (this.page && !this.page.isClosed()) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});
