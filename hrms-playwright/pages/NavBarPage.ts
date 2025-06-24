// import { expect, Locator, Page } from '@playwright/test';
// import { NavBarLocators } from '../locators/navbarLocators';
// import { NavigationPage } from '../helpers/NavigationPage';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export class NavBarPage extends NavigationPage{
//   constructor(protected page: Page) {
//     super(page);
//   }
// async clickTopLevelNav(menu: keyof typeof NavBarLocators) {
//   console.log('[DEBUG] Clicking top-level menu:', menu);

//   // 🔄 Expand sidebar if collapsed (responsive mode)
//   const sidebarToggle = this.page.getByRole('banner').getByRole('button');
//   if (await sidebarToggle.count() > 0 && await sidebarToggle.isVisible()) {
//     console.log('[DEBUG] Sidebar collapsed — expanding...');
//     await sidebarToggle.click();
//     await this.page.waitForTimeout(500); // let animation complete
//   } else {
//     console.log('[DEBUG] Sidebar already expanded or banner not present');
//   }

//   // 🧼 Clean up label
//   const label = menu.replace(/&/g, 'and').replace(/\s+/g, ' ').trim();

//   // 🎯 Get nav button
//   // const button = this.page.getByRole('button', { name: new RegExp(`^${label}$`, 'i') });
//   console.log('[DEBUG] PAGE CONTENT');
// console.log(await this.page.content());

//   const button = this.page.getByText(new RegExp(`^${label}$`, 'i'), { exact: true });
//   console.log(`[DEBUG] Trying to match text: ^${label}$`);
// console.log('[DEBUG] Total matching elements:', await button.count());


//   const count = await button.count();
//   if (count === 0) throw new Error(`[ERROR] No nav button found for menu: "${label}"`);

//   for (let i = 0; i < count; i++) {
//     const el = button.nth(i);
//     const txt = await el.innerText();
//     const visible = await el.isVisible();
//     console.log(`[DEBUG] Nav button ${i}: "${txt}" | Visible: ${visible}`);
//   }

//   await button.first().scrollIntoViewIfNeeded();
//   await button.first().waitFor({ state: 'visible' });
//   await button.first().click();
// }


//   async isSubOptionVisible(xpath: string) {
//     const subOption = this.page.locator(`xpath=${xpath}`);
//     await expect(subOption).toBeVisible();
//   }

//   async clickSubOption(xpath: string) {
//     const subOption = this.page.locator(`xpath=${xpath}`);
//     await subOption.click();
//   }

//   async verifyCurrentUrl(expectedUrl: string) {
//     await expect(this.page).toHaveURL(expectedUrl);
//   }
// }

import { expect, Locator, Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import * as dotenv from 'dotenv';

dotenv.config();

export class NavBarPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async clickTopLevelNav(menu: string) {
    console.log('[DEBUG] Requested top-level menu:', menu);

    // 🔄 Expand sidebar if collapsed (responsive mode)
    const sidebarToggle = this.page.getByRole('banner').getByRole('button');
    if (await sidebarToggle.count() > 0 && await sidebarToggle.isVisible()) {
      console.log('[DEBUG] Sidebar collapsed — expanding...');
      await sidebarToggle.click();
      await this.page.waitForTimeout(500);
    }

    // 🧠 Normalize both menu and keys for matching
    const normalize = (text: string) => text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '').trim();

    const matchedKey = Object.keys(NavBarLocators).find(
      key => normalize(key) === normalize(menu)
    );

    if (!matchedKey) {
      throw new Error(`[ERROR] No nav button found for menu: "${menu}"`);
    }

    const selector = NavBarLocators[matchedKey as keyof typeof NavBarLocators];

    console.log(`[DEBUG] Matched key: ${matchedKey}`);
    console.log(`[DEBUG] Using selector: ${selector}`);

    const button = this.page.locator(selector);
    const count = await button.count();

    if (count === 0) throw new Error(`[ERROR] Selector resolved but element not found: "${selector}"`);

    for (let i = 0; i < count; i++) {
      const el = button.nth(i);
      const txt = await el.innerText().catch(() => '[ERROR: cannot fetch text]');
      const visible = await el.isVisible();
      console.log(`[DEBUG] Nav button ${i}: "${txt}" | Visible: ${visible}`);
    }

    await button.first().scrollIntoViewIfNeeded();
    await button.first().waitFor({ state: 'visible' });
    await button.first().click();
  }

  async isSubOptionVisible(xpath: string) {
    const subOption = this.page.locator(`xpath=${xpath}`);
    await expect(subOption).toBeVisible();
  }

  async clickSubOption(xpath: string) {
    const subOption = this.page.locator(`xpath=${xpath}`);
    await subOption.click();
  }

  async verifyCurrentUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
    // await expect(this.page).toHaveURL(new RegExp(`^${expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
  }
//   async verifyCurrentUrl(expectedUrl: string) {
//   console.log('[DEBUG] Current URL:', this.page.url());
//   await expect(this.page).toHaveURL(expect.stringContaining(expectedUrl));
// }

}
