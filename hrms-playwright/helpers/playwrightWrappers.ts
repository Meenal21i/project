import { Page, Locator } from '@playwright/test';

export class PlaywrightWrapper {
  constructor(private page: Page, private timeout?: number) {}

  async click(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.first().scrollIntoViewIfNeeded();
    await element.first().waitFor({ state: 'visible', timeout: this.timeout });
    await element.first().click();
  }

  async fill(locator: Locator | string, value: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible', timeout: this.timeout });
    await element.fill(value);
  }

  async isVisible(locator: Locator | string): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return await element.isVisible();
  }

  async waitForElementVisible(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible', timeout: this.timeout });
  }

  async goto(url: string) {
    await this.page.goto(url, { timeout: this.timeout });
  }

  async reload() {
    await this.page.reload({ timeout: this.timeout });
  }

  async getPageUrl(expectedUrl: string): Promise<string> {
    await this.page.waitForURL(expectedUrl, { timeout: this.timeout });
    return this.page.url();
  }
}