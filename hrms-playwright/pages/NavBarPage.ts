import { expect, Locator, Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';

export class NavBarPage {
  constructor(private page: Page) {}

  async clickTopLevelNav(menu: keyof typeof NavBarLocators) {
    const locator = this.page.locator(NavBarLocators[menu]);
    await locator.click();
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
  }
}
