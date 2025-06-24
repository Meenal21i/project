import { Given, When, Then } from '@cucumber/cucumber';
import { NavBarPage } from '../pages/NavBarPage';
import { NavStructure } from '../constants/navStructure';
import { NavBarLocators } from '../locators/navbarLocators';
import { PageUrls } from '../constants/pageURLs';
import { expect } from '@playwright/test';

let navBarPage: NavBarPage;

Given('I am logged into the HRMS application', async function () {
  await this.page.goto(process.env.BASE_URL!);

  await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
  await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
  await this.page.locator('#login-form-input-submit-btn').click();
  await this.page.waitForSelector('.mantine-bfmej7');

  navBarPage = new NavBarPage(this.page);
});

When('I expand and verify all sub-links under the top-level menus', async function () {
  for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
    await navBarPage.clickTopLevelNav(topLevelMenu);

    for (const link of subLinks) {
      const xpath = Object.entries(NavBarLocators).find(([key]) =>
        key.toLowerCase().replace(/\s/g, '').includes(link.text.toLowerCase().replace(/\s/g, ''))
      )?.[1];

      if (!xpath) throw new Error(`❌ Locator for ${link.text} not found`);
      await navBarPage.isSubOptionVisible(xpath);
    }
  }
});

Then('Each sub-link should navigate to its expected URL', async function () {
  for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
    await navBarPage.clickTopLevelNav(topLevelMenu);

    for (const link of subLinks) {
      const xpath = Object.entries(NavBarLocators).find(([key]) =>
        key.toLowerCase().replace(/\s/g, '').includes(link.text.toLowerCase().replace(/\s/g, ''))
      )?.[1];

      if (!xpath) throw new Error(`❌ Locator for ${link.text} not found`);

      await navBarPage.clickSubOption(xpath);

      // ✅ Use RegExp if provided, or escape the string to RegExp
      const expected = typeof link.expectedUrl === 'string'
        ? new RegExp(`^${link.expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`)
        : link.expectedUrl;

      await navBarPage.verifyCurrentUrl(expected);

      await this.page.goBack();
    }
  }
});

