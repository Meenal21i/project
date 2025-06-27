import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginLocators } from '../locators/loginLocators';
import { PageUrls } from '../constants/pageURLs';
import { Messages } from '../constants/messages';
// import * as dotenv from 'dotenv';

// dotenv.config();

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
  // const currentUrl = await loginPage.getPageUrl(process.env.DASHBOARD_URL!);
  // expect(currentUrl).toBe(process.env.DASHBOARD_URL!);
});

When('I enter invalid credentials', async function () {
  await loginPage.fillLoginForm('invalid@example.com', 'wrongpassword');
  await loginPage.navigateToDashboard();
});

Then('I should see an error message for invalid login', async function () {
  let error= await loginPage.getInvalidLoginError();
  expect(error).toContain(Messages.invalidLogin);
});