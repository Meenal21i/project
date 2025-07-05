import { Page } from '@playwright/test';
import { FooterLocators } from '../locators/footerLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { ErrorMessages } from '../messages/messages';

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
    if (!locator) throw new Error(ErrorMessages.NO_SOCIAL_MEDIA(locator));
    const href = await this.page.locator(locator).getAttribute('href');
    if (!href) throw new Error(ErrorMessages.NO_SOCIAL_MEDIA(platform));
    return href;
  }
}