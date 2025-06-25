// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { NavBarPage } from '../pages/NavBarPage';
// import { NavStructure } from '../constants/navStructure';
// import { NavBarLocators } from '../locators/navbarLocators';

// let navBarPage: NavBarPage;

// Given('I am logged into the HRMS application', async function () {
//   await this.page.goto(process.env.BASE_URL!);

//   await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
//   await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
//   await this.page.locator('#login-form-input-submit-btn').click();

//   await this.page.waitForSelector('.mantine-bfmej7');
//   navBarPage = new NavBarPage(this.page);
// });

// When('I expand and verify all sub-links under each top-level menu', async function () {
//   for (const [menu, subLinks] of Object.entries(NavStructure)) {
//     await navBarPage.clickTopLevelNav(menu);

//     for (const link of subLinks) {
//       const xpath = Object.entries(NavBarLocators).find(([key]) =>
//         key.toLowerCase().replace(/\s/g, '').includes(link.text.toLowerCase().replace(/\s/g, ''))
//       )?.[1];

//       if (!xpath) throw new Error(`❌ Locator not found for: ${link.text}`);

//       // Only check visibility inline here if needed
//       // await expect(this.page.locator(`xpath=${xpath}`)).toBeVisible();
//     }
//   }
// });

// Then('Each sub-link should navigate to the correct URL', async function () {
//   for (const [menu, subLinks] of Object.entries(NavStructure)) {
//     await navBarPage.clickTopLevelNav(menu);

//     for (const link of subLinks) {
//       const xpath = Object.entries(NavBarLocators).find(([key]) =>
//         key.toLowerCase().replace(/\s/g, '').includes(link.text.toLowerCase().replace(/\s/g, ''))
//       )?.[1];

//       if (!xpath) throw new Error(`❌ Locator not found for: ${link.text}`);

//       await navBarPage.clickSubOption(xpath);

//       const expectedRegex =
//         typeof link.expectedUrl === 'string'
//           ? new RegExp(`^${link.expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`)
//           : link.expectedUrl;

//       await navBarPage.verifyCurrentUrl(expectedRegex);

//       await this.page.goBack();
//     }
//   }
// });

