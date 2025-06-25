import { expect, Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import * as dotenv from 'dotenv';

dotenv.config();

export class NavBarPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  private normalize(text: string): string {
    return text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '').trim();
  }

  async clickTopLevelNav(menu: string) {
    const sidebarToggle = this.page.getByRole('banner').getByRole('button');
    if (await sidebarToggle.isVisible()) {
      await sidebarToggle.click();
      await this.page.waitForTimeout(300);
    }

    const matchedKey = Object.keys(NavBarLocators).find(
      key => this.normalize(key) === this.normalize(menu)
    );
    if (!matchedKey) throw new Error(`Top-level nav not found: "${menu}"`);

    const selector = NavBarLocators[matchedKey as keyof typeof NavBarLocators];
    const button = this.page.locator(selector);
    await button.first().scrollIntoViewIfNeeded();
    await button.first().click();
    await this.page.waitForTimeout(500); // Let animation finish
  }

  async clickSubOption(xpath: string) {
    const subOption = this.page.locator(`xpath=${xpath}`);
    await subOption.waitFor({ state: 'attached', timeout: 5000 });

    // New: wait up to 10s for element to become visible
    for (let i = 0; i < 5; i++) {
      if (await subOption.isVisible()) break;
      console.warn(`[WARN] Sub-option not visible yet (attempt ${i + 1})`);
      await this.page.waitForTimeout(500);
    }

    if (!(await subOption.isVisible())) {
      throw new Error(`Sub-option "${xpath}" never became visible/clickable`);
    }

    const handle = await subOption.elementHandle();
    if (handle) {
      await this.page.evaluate(el => el.scrollIntoView({ behavior: 'auto', block: 'center' }), handle);
    }

    await subOption.click({ timeout: 5000 });
  }

  async verifyCurrentUrl(expectedUrl: string | RegExp) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
