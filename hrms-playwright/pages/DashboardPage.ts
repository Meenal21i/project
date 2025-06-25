import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { NavBarLocators } from '../locators/navbarLocators';
import { PageUrls } from '../constants/pageURLs';

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


}
