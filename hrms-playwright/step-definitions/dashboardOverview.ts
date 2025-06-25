import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

let dashboardPage: DashboardPage;

Then('I should see today’s date highlighted on the calendar', async function () {
  dashboardPage = new DashboardPage(this.page);

  const today = new Date().getDate().toString();
  const highlightedDate = await dashboardPage.getCurrentDateFromCalendar();

  expect(highlightedDate).toBe(today);
});
