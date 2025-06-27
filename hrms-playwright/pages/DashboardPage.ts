import { Page, expect, BrowserContext } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { FooterLocators } from '../locators/footerLocators';
import { DashboardOverviewLocators } from '../locators/dashboardOverviewLocators';
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

  // // Verifies that dashboard loaded by checking the current URL
  // async verifyDashboardUrl(): Promise<void> {
  //   await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
  // }

  async getCurrentDateFromCalendar(): Promise<string> {
    const expectedStyle = DashboardOverviewLocators.CURRENT_HIGHLIGHTED_DATE;
    
    // Get all date buttons
    const allButtons = this.page.locator(DashboardOverviewLocators.DATE_BUTTONS);

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

// async getFooterLinkHref(platform: string): Promise<string> {
//   const platformMap: Record<string, string> = {
//     YouTube: 'icon-tabler-brand-youtube',
//     // Facebook: 'icon-tabler-brand-facebook',
//     LinkedIn: 'icon-tabler-brand-linkedin',
//     Twitter: 'tabler-icon-brand-x' // Twitter icon class
//   };

//   const iconClass = platformMap[platform];
//   if (!iconClass) throw new Error(`Unknown platform: ${platform}`);

//   const locator = this.page.locator(`footer a svg.${iconClass}`).first();
//   const anchor = locator.locator('xpath=..');
//   const href = await anchor.getAttribute('href');

//   if (!href) throw new Error(`Href not found for ${platform} icon`);
//   return href;
// }

async scrollToFooter(): Promise<void> {
  await this.page.locator(DashboardOverviewLocators.FOOTER).scrollIntoViewIfNeeded();
}

// async clickFooterLink(socialMedia: string): Promise<void> {
//   const key = socialMedia.toUpperCase();
//   const iconClass = (SocialsLocators as Record<string, string>)[key];
//   if (!iconClass) throw new Error(`Unknown platform: ${socialMedia}`);

//   const iconSvg = this.page.locator(`footer a svg.${iconClass}`).first();
//   const anchor = iconSvg.locator('xpath=..');

//   await anchor.click();
// }
async clickFooterLinkAndWaitForTab(socialMedia: string): Promise<Page> {
  const key = socialMedia.toUpperCase();
  const iconClass = (FooterLocators as Record<string, string>)[key];
  if (!iconClass) throw new Error(`Unknown platform: ${socialMedia}`);

  const anchor = this.page.locator(`footer a:has(svg.${iconClass})`).first();

  await anchor.scrollIntoViewIfNeeded();
  await expect(anchor).toBeVisible();

  const target = await anchor.getAttribute('target');

  if (target === '_blank') {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      anchor.click()
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  } else {
    await anchor.click();
    await this.page.waitForLoadState('load');
    return this.page;
  }
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