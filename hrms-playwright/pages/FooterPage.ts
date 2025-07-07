import { Page } from '@playwright/test';
import { FooterLocators } from '../locators/footerLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { ErrorMessages } from '../Errors/errorMessages';
import { UnknownSocialMediaError } from '../Errors/customErrors';

export class FooterPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  private getLocator(platform: string): string {
    const locatorMap: Record<string, string> = {
      YOUTUBE: FooterLocators.YOUTUBE_ICON,
      LINKEDIN: FooterLocators.LINKEDIN_ICON,
      TWITTER: FooterLocators.TWITTER_ICON,
    };

    const key = platform.toUpperCase();
    const locator = locatorMap[key];
    if (!locator) throw new UnknownSocialMediaError(platform);
    return locator;
  }

  async hoverOnFooterIcon(platform: string): Promise<void> {
    const locator = this.getLocator(platform);
    await this.page.locator(locator).hover();
  }

  async getFooterLinkHref(platform: string): Promise<string> {
    const locator = this.getLocator(platform);
    const href = await this.page.locator(locator).getAttribute('href');
    if (!href) throw new UnknownSocialMediaError(platform);
    return href;
  }
}