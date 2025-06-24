import { Page, Locator } from '@playwright/test';

export class WaitUtils {
  constructor(private page: Page) {}

  // Wait for element to disappear (e.g., toast or loader)
  async waitForElementToDisappear(locator: Locator | string, timeout = 10000) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'hidden', timeout });
  }

  // Wait until a locator contains specific text
  async waitForText(locator: Locator | string, text: string, timeout = 60000) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await this.page.waitForFunction(
      (el, expected) => el?.innerText?.includes(expected),
      element,
      text,
      { timeout }
    );
  }

  // Optional: Wait until popup disappears and then interact
  async waitForPopupAndProceed(popupLocator: Locator | string, nextLocator: Locator | string) {
    await this.waitForElementToDisappear(popupLocator);
    const next = typeof nextLocator === 'string' ? this.page.locator(nextLocator) : nextLocator;
    await next.waitFor({ state: 'visible' });
  }
}
