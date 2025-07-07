import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

let dashboardPage: DashboardPage;

Then('User should see today’s date highlighted on the calendar', async function () {
  const dashboardPage = new DashboardPage(this.page);
  const actualDate = await dashboardPage.getCurrentDateFromCalendar();
  const today = new Date().getDate().toString();
  expect(actualDate).toBe(today);
});
