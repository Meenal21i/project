import { Page } from '@playwright/test';
import { FooterLocators } from '../locators/footerLocators';
import { NavigationPage } from '../helpers/NavigationPage';

export class FooterPage extends NavigationPage{
  constructor(protected page: Page) {
    super(page);
  }

  async getFooterLinkHref(platform: string): Promise<string> {
    const locatorMap: Record<string, string> = {
      YOUTUBE: FooterLocators.YOUTUBE_ICON,
      LINKEDIN: FooterLocators.LINKEDIN_ICON,
      TWITTER: FooterLocators.TWITTER_ICON,
    };

    const locator = locatorMap[platform.toUpperCase()];
    if (!locator) throw new Error(`Unsupported platform: ${platform}`);

    const href = await this.page.locator(locator).getAttribute('href');
    if (!href) throw new Error(`No href found for ${platform}`);
    return href;
  }
}
