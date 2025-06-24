// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import * as dotenv from 'dotenv';
// import { DashboardPage } from 'pages/DashboardPage';

// dotenv.config();

// test.describe('Login Page Tests', () => {
//   let valid_username: string;
//   let valid_password: string;
//   let invalid_username: string;
//   let invalid_password: string;

//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://hrms.test.intimetec.americas/');
//     valid_username = 'rohan.gupta@intimetec.com';
//     valid_password = 'Welcome(*&^%';
//     invalid_username = 'hello';
//     invalid_password = 'dDAW';
//   });

//   test('should show error for invalid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.fillLoginForm(invalid_username, invalid_password);

//     const dashboardPage = await loginPage.navigateToDashboardPage();
//     await expect(page.getByText('Something went wrong!!')).toBeVisible();

//   });

  
//   test('should navigate to dashboard with valid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.fillLoginForm(valid_username, valid_password);

//     const dashboardPage = await loginPage.navigateToDashboardPage();
//     await expect(page.locator('#inner-container').getByText('Dashboard')).toBeVisible();
//   });
// });