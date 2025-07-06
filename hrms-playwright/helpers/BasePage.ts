// import { Page, Locator } from '@playwright/test';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const timeoutValue = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : undefined;
// export class BasePage {
//   constructor(protected page: Page) {}

//   public getPage(): Page {
//     return this.page;
//   }

//   async click(locator: Locator | string) {
//     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
//     await element.first().scrollIntoViewIfNeeded();
//     await element.first().waitFor({ state: 'visible', timeout: timeoutValue });
//     await element.first().click();
//   }

//   async fill(locator: Locator | string, value: string) {
//     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
//     await element.waitFor({ state: 'visible' });
//     await element.fill(value);
//   }

//   async isVisible(locator: Locator | string): Promise<boolean> {
//     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
//     return await element.isVisible();
//   }

//   async waitForElementVisible(target: string | Locator, timeout=timeoutValue): Promise<void> {
//     const locator = typeof target === 'string' ? this.page.locator(target) : target;
//     await locator.waitFor({ state: 'visible', timeout });
//   }

//   async goto(url: string,) {
//     await this.page.goto(url,);
//   }

//   async reload(timeout = timeoutValue) {
//     await this.page.reload({ timeout });
//   }

//   public async getPageUrl( url:string = "", timeout=timeoutValue) : Promise<string> {
//     await this.page.waitForURL(url);
//     return this.page.url();
//   }
// }

import { Page } from '@playwright/test';
import { PlaywrightWrapper } from './playwrightWrappers';
import * as dotenv from 'dotenv';
dotenv.config();

const timeoutValue = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : undefined;

export class BasePage {
  protected wrapper: PlaywrightWrapper;

  constructor(protected page: Page) {
    this.wrapper = new PlaywrightWrapper(page, timeoutValue);
  }

  public getPage(): Page {
    return this.page;
  }
}