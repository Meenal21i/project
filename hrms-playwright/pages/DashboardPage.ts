import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { NavBarLocators } from '../locators/navbarLocators';
import { PageUrls } from '../constants/pageURLs';
import { CommonLocators } from '../locators/commonLocators';

export class DashboardPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  // Navigates to the dashboard using sidebar link
  async navigateToDashboard(): Promise<void> {
    const dashboardLink = this.page.locator('//a[text()="Dashboard"]');
    await this.click(dashboardLink);
    await this.page.waitForLoadState('networkidle');
  }

  // Verifies that dashboard loaded by checking the current URL
  async verifyDashboardUrl(): Promise<void> {
    await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
  }

  async getCurrentDateFromCalendar(): Promise<string> {
    const expectedStyle = 'background-color: rgb(35, 181, 181); color: rgb(255, 255, 255);';
    
    // Get all date buttons
    const allButtons = this.page.locator('.mantine-Calendar-day');

    const count = await allButtons.count();

    for (let i = 0; i < count; i++) {
      const button = allButtons.nth(i);

      const style = await button.getAttribute('style');
      const text = await button.textContent();

      if (style?.trim() === expectedStyle && text?.trim()) {
        return text.trim();
      }
    }

    throw new Error(`Could not find the calendar button with exact expected style: "${expectedStyle}"`);
  }

async getFooterLinkHref(platform: string): Promise<string> {
  const platformMap: Record<string, string> = {
    YouTube: 'icon-tabler-brand-youtube',
    // Facebook: 'icon-tabler-brand-facebook',
    LinkedIn: 'icon-tabler-brand-linkedin',
    Twitter: 'tabler-icon-brand-x' // Twitter icon class
  };

  const iconClass = platformMap[platform];
  if (!iconClass) throw new Error(`Unknown platform: ${platform}`);

  const locator = this.page.locator(`footer a svg.${iconClass}`).first();
  const anchor = locator.locator('xpath=..');
  const href = await anchor.getAttribute('href');

  if (!href) throw new Error(`Href not found for ${platform} icon`);
  return href;
}

async scrollToFooter(): Promise<void> {
  await this.page.locator('#navbar-footer').scrollIntoViewIfNeeded();
}

async clickFooterLink(platform: string): Promise<void> {
  const selectorMap: Record<string, string> = {
    YouTube: 'a[href*="youtube.com"]',
    // Facebook: 'a[href*="facebook.com"]',
    LinkedIn: 'a[href*="linkedin.com"]',
    Twitter: 'a[href*="twitter.com"]'
  };

  const linkSelector = selectorMap[platform];
  if (!linkSelector) throw new Error(`Unknown platform: ${platform}`);

  const link = this.page.locator(linkSelector);
  await link.first().click();
}

  async clickProfileIcon() {
    await this.page.locator(CommonLocators.PROFILE_ICON).click();
  }

  async clickLogout() {
    await this.page.locator(CommonLocators.LOGOUT_OPTION).click();
  }

  async isAtLoginPage(): Promise<boolean> {
    return await this.page.getByPlaceholder('username@intimetec.com').isVisible();
  }
}