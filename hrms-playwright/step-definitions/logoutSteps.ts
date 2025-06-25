import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

let dashboardPage: DashboardPage;

When('I click on the profile icon', async function () {
  dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickProfileIcon();
});

When('I click on the Logout option', async function () {
  await dashboardPage.clickLogout();
});

Then('I should be redirected to the login page', async function () {
  const atLogin = await dashboardPage.isAtLoginPage();
  expect(atLogin).toBeTruthy();
});
