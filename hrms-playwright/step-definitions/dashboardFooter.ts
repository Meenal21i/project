import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

let dashboardPage: DashboardPage;

When('I scroll to the footer', async function () {
  dashboardPage = new DashboardPage(this.page);
  await dashboardPage.scrollToFooter();
});

Then(
  'I click the {string} icon and should be redirected to {string}',
  async function (platform: string, expectedUrl: string) {
    dashboardPage = new DashboardPage(this.page);

    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'), // Waits for new tab
      dashboardPage.clickFooterLink(platform) // Triggers new tab
    ]);

    await newPage.waitForLoadState();
    const actualUrl = newPage.url();

    expect(actualUrl).toContain(expectedUrl); // or .toBe() if exact match
    await newPage.close(); // Cleanup
  }
);
