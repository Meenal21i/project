import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PageUrls } from '../constants/pageURLs';
import { constMessages } from '../constants/constants';

let loginPage: LoginPage;

Given('User is on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
});

When('User enters valid credentials', async function () {
  await loginPage.fillLoginForm(process.env.USER_NAME!, process.env.PASS_WORD!);
  await loginPage.navigateToDashboard();
});

Then('User should be redirected to the dashboard page', async function () {
  await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
});

When('User enters invalid credentials', async function () {
  await loginPage.fillLoginForm(process.env.INVALID_USERNAME!, process.env.INVALID_PASSWORD!);
  await loginPage.navigateToDashboard();
});

Then('User should see an error message for invalid login', async function () {
  let errorMessage = await loginPage.getInvalidLoginError();
  expect(errorMessage).toContain(constMessages.INVALID_LOGIN_MESSAGE);
});