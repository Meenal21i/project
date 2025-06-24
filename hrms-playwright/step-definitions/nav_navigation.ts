// import { Given, When, Then } from '@cucumber/cucumber';
// import { NavBarPage } from '../pages/NavBarPage';
// import { NavStructure } from '../constants/navStructure';
// import { NavBarLocators } from '../locators/navbarLocators';
// import { expect } from '@playwright/test';

// let navBarPage: NavBarPage;

// Given('I am logged into the HRMS application', async function () {
//   await this.page.goto(process.env.BASE_URL!);

//   // Perform login manually
//   await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
//   await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
//   await this.page.locator('#login-form-input-submit-btn').click();

//   // Wait for dashboard/menu to appear
//   await this.page.waitForSelector('.mantine-bfmej7'); // or any sidebar locator

//   navBarPage = new NavBarPage(this.page);
// });


// When('I expand and verify all sub-links under the top-level menus', async function () {
//   for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
//     await navBarPage.clickTopLevelNav(topLevelMenu as keyof typeof NavBarLocators);

//     for (const link of subLinks) {
//       const xpath = Object.entries(NavBarLocators).find(([key]) => key.toLowerCase().includes(link.text.toLowerCase().replace(/\s/g, '')))?.[1];
//       if (!xpath) throw new Error(`Locator for ${link.text} not found`);
//       await navBarPage.isSubOptionVisible(xpath);
//     }
//   }
// });

// Then('Each sub-link should navigate to its expected URL', async function () {
//   for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
//     await navBarPage.clickTopLevelNav(topLevelMenu as keyof typeof NavBarLocators);

//     for (const link of subLinks) {
//       const xpath = Object.entries(NavBarLocators).find(([key]) => key.toLowerCase().includes(link.text.toLowerCase().replace(/\s/g, '')))?.[1];
//       if (!xpath) throw new Error(`Locator for ${link.text} not found`);
      
//       await navBarPage.clickSubOption(xpath);
//       await navBarPage.verifyCurrentUrl(link.expectedUrl);
//       await this.page.goBack(); // Return to nav page
//     }
//   }
// });

import { Given, When, Then } from '@cucumber/cucumber';
import { NavBarPage } from '../pages/NavBarPage';
import { NavStructure } from '../constants/navStructure';
import { NavBarLocators } from '../locators/navbarLocators';
import { expect } from '@playwright/test';

let navBarPage: NavBarPage;

// 🔧 Utility to normalize strings (used for matching)
const normalize = (text: string) =>
  text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '').trim();

Given('I am logged into the HRMS application', async function () {
  await this.page.goto(process.env.BASE_URL!);

  await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
  await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
  await this.page.locator('#login-form-input-submit-btn').click();

  await this.page.waitForSelector('.mantine-bfmej7'); // Wait for sidebar/nav

  navBarPage = new NavBarPage(this.page);
});

When('I expand and verify all sub-links under the top-level menus', async function () {
  for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
    await navBarPage.clickTopLevelNav(topLevelMenu);

    for (const link of subLinks) {
      const match = Object.entries(NavBarLocators).find(
        ([key]) => normalize(key) === normalize(link.text)
      );

      if (!match) throw new Error(`[ERROR] Locator not found for sub-link: ${link.text}`);

      await navBarPage.isSubOptionVisible(match[1]);
    }
  }
});

Then('Each sub-link should navigate to its expected URL', async function () {
  for (const [topLevelMenu, subLinks] of Object.entries(NavStructure)) {
    await navBarPage.clickTopLevelNav(topLevelMenu);

    for (const link of subLinks) {
      const match = Object.entries(NavBarLocators).find(
        ([key]) => normalize(key) === normalize(link.text)
      );

      if (!match) throw new Error(`[ERROR] Locator not found for sub-link: ${link.text}`);

      await navBarPage.clickSubOption(match[1]);
      await navBarPage.verifyCurrentUrl(link.expectedUrl);
      await this.page.goBack(); // Return to nav page
    }
  }
});
