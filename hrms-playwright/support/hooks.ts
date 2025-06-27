// import { Before, After, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
// import { chromium } from '@playwright/test';
// import { CustomWorld } from './world';

// setDefaultTimeout(60 * 1000);

// Before(async function (this: CustomWorld) {
//   this.browser = await chromium.launch({ headless: true });
//   this.context = await this.browser.newContext();
//   this.page = await this.context. newPage();

// });

// After(async function (this: CustomWorld) {
//   await this.page?.close();
//   await this.context?.close();
//   await this.browser?.close();
// });

// AfterAll(async () => {
// });


import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';

setDefaultTimeout(60 * 1000 * 3);

Before(async function (this: CustomWorld, scenario) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  const tags = scenario.pickle.tags.map(t => t.name);

  // Auto-login for any scenario tagged with @login
  if (tags.includes('@login')) {
    await this.page.goto(process.env.BASE_URL!);
    await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
    await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
    await this.page.locator('#login-form-input-submit-btn').click();
  }
});

// After(async function (this: CustomWorld) {
//   await this.page?.close();
//   await this.context?.close();
//   await this.browser?.close();
// });

After(async function (this: CustomWorld) {
  // Don't close if still running async steps
  if (this.page && !this.page.isClosed()) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});
