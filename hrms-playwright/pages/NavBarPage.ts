import { expect, Page } from '@playwright/test';
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

    // Expand sidebar if needed
    const sidebarToggle = this.page.getByRole('banner').getByRole('button');
    if (await sidebarToggle.count() > 0 && await sidebarToggle.isVisible()) {
      console.log('[DEBUG] Sidebar collapsed — expanding...');
      await sidebarToggle.click();
      await this.page.waitForTimeout(500);
    }

    // Normalize menu keys
    const normalize = (text: string) =>
      text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '').trim();

    const matchedKey = Object.keys(NavBarLocators).find(
      key => normalize(key) === normalize(menu)
    );

    if (!matchedKey) {
      throw new Error(`[ERROR] No nav button found for menu: "${menu}"`);
    }

    const selector = NavBarLocators[matchedKey as keyof typeof NavBarLocators];
    const button = this.page.locator(selector);

    const count = await button.count();
    if (count === 0) throw new Error(`[ERROR] Selector resolved but element not found: "${selector}"`);

    await button.first().scrollIntoViewIfNeeded();
    await button.first().waitFor({ state: 'visible' });
    await button.first().click();
    await this.page.waitForTimeout(800); // allow animation
  }

  async isSubOptionVisible(xpath: string) {
    const subOption = this.page.locator(`xpath=${xpath}`);
    await expect(subOption).toBeVisible();
  }

  async clickSubOption(xpath: string) {
    const subOption = this.page.locator(`xpath=${xpath}`);

    console.log('[DEBUG] Waiting for sub-option to be visible:', xpath);
    await subOption.waitFor({ state: 'attached', timeout: 5000 });
    await this.page.waitForTimeout(300);
    await subOption.waitFor({ state: 'visible', timeout: 7000 });

    const handle = await subOption.elementHandle();
    if (handle) {
      await this.page.evaluate(el => el.scrollIntoView({ behavior: 'auto', block: 'center' }), handle);
      await this.page.waitForTimeout(500);
    }

    await expect(subOption).toBeEnabled({ timeout: 3000 });

    try {
      await subOption.click({ timeout: 10000 });
    } catch (e) {
      console.warn(`[WARN] Click failed, retrying for: ${xpath}`);
      await this.page.waitForTimeout(500);
      await subOption.click({ timeout: 5000 });
    }

    console.log('[DEBUG] Successfully clicked:', xpath);
  }

  async verifyCurrentUrl(expectedUrl: string | RegExp) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
