import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { NavBarLocators } from '../locators/navbarLocators'; // Adjust if you store dashboard-specific locators elsewhere
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
  const today = new Date().getDate().toString();
  const allHighlightedDates = this.page.locator('.mantine-Calendar-day[style*="background-color"]');

  const count = await allHighlightedDates.count();
  for (let i = 0; i < count; i++) {
    const button = allHighlightedDates.nth(i);
    const text = await button.textContent();

    if (text?.trim() === today) {
      return text.trim();
    }
  }

  throw new Error(`❌ Could not find today's date (${today}) highlighted in the calendar`);
}


}
