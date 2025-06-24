
// import { NavigationPage } from '../pages/NavigationPage';
// import { NavStructure } from '../constants/expectedNavStructure';
// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';

// let loginPage: LoginPage;
// let navPage: NavigationPage;

// Given('I am logged in to the HRMS portal', async function () {
//   loginPage = new LoginPage(this.page);
//   navPage = new NavigationPage(this.page);
//   await loginPage.navigateToLogin();
//   await loginPage.fillLoginForm(process.env.USER_NAME!, process.env.PASS_WORD!);
//   await loginPage.navigateToDashboard();
// });

// When('I validate and navigate through {string} module', async function (moduleName: string) {
//   navPage = new NavigationPage(this.page);
// const expectedList = NavStructure[moduleName as keyof typeof NavStructure];
//   await navPage.validateAndClickSubOptions(moduleName, expectedList);
// });









// // import { Given, When, Then } from '@cucumber/cucumber';
// // import { expect } from '@playwright/test';
// // import { LoginPage } from '../pages/LoginPage';
// // import { NavigationPage } from '../pages/NavigationPage';

// // let loginPage: LoginPage;
// // let navPage: NavigationPage;

// // Given('I am logged in to the HRMS portal', async function () {
// //   loginPage = new LoginPage(this.page);
// //   navPage = new NavigationPage(this.page);
// //   await loginPage.navigateToLogin();
// //   await loginPage.fillLoginForm(process.env.USER_NAME!, process.env.PASS_WORD!);
// //   await loginPage.navigateToDashboard();
// // });

// // When('I click on the {string} navigation module', async function (module: string) {
// //   await navPage.clickNavModule(module as 'Dashboard' | 'Organization' | 'Leave & Attendance');
// // });

// // Then('I should see the following options:', async function (dataTable) {
// //     const expected = dataTable.raw().flat().map((t: string) => t.trim());
// //   const actual = await navPage.getVisibleSubOptions();
// //   expect(actual).toEqual(expect.arrayContaining(expected));
// // });
