import { Page, Locator } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export class BasePage {
  constructor(protected page: Page) {}

    public getPage(): Page {
    return this.page;
  }

  async click(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

    async clicksecond(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
    await element.nth(1).click();
  }

  async fill(locator: Locator | string, value: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
    await element.fill(value);
  }

  async getText(locator: Locator | string): Promise<string> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
    return await element.textContent() ?? '';
  }

  async isVisible(locator: Locator | string): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return await element.isVisible();
  }

  async goto(url: string,) {
    await this.page.goto(url,);
  }

  async reload(timeout = 60000) {
    await this.page.reload({ timeout });
  }

  async selectOption(locator: Locator | string, value: string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.selectOption(value);
  }

  async waitForElement(locator: Locator | string) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible' });
  }

public async getPageUrl( url:string = "", timeout=60000) : Promise<string> {
  await this.page.waitForURL(url);
  return this.page.url();
  
}

public async checkPageUrl(timeout=60000, url:string): Promise<void> {
  this.page.waitForURL(url);
}
}
