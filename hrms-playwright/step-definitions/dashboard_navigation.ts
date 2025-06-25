import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { NavBarLocators } from '../locators/navbarLocators';
import * as dotenv from 'dotenv';

dotenv.config();

let dashboardPage: DashboardPage;

Given('I am logged into the HRMS application', async function () {
  await this.page.goto(process.env.BASE_URL!);
  await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
  await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
  await this.page.locator('#login-form-input-submit-btn').click();

  // Instantiate page object after login
  dashboardPage = new DashboardPage(this.page);
});

When('I click on the Dashboard tab from the navigation bar', async function () {
  await dashboardPage.click(NavBarLocators.Dashboard);
});

Then('I should be redirected to the Dashboard page', async function () {
      const currentUrl = await dashboardPage.getPageUrl(process.env.DASHBOARD_URL!);
      expect(currentUrl).toBe(process.env.DASHBOARD_URL!);
//   await dashboardPage.getPageUrl(process.env.DASHBOARD_URL!);
});


