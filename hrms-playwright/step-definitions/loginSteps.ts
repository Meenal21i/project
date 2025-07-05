import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PageUrls } from '../constants/pageURLs';
import { constMessages } from '../constants/constants';
import { ErrorMessages } from '../messages/messages';

let loginPage: LoginPage;

Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
});

When('I enter valid credentials', async function () {
  await loginPage.fillLoginForm(process.env.USER_NAME!, process.env.PASS_WORD!);
  await loginPage.navigateToDashboard();
});

Then('I should be redirected to the dashboard page', async function () {
  await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
});

When('I enter invalid credentials', async function () {
  await loginPage.fillLoginForm(process.env.INVALID_USERNAME!, process.env.INVALID_PASSWORD!);
  await loginPage.navigateToDashboard();
});

Then('I should see an error message for invalid login', async function () {
  let error= await loginPage.getInvalidLoginError();
  expect(error).toContain(constMessages.INVALID_LOGIN_MESSAGE);
});