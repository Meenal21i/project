// // import { Given, When, Then } from '@cucumber/cucumber';
// // import { expect } from '@playwright/test';
// // import { OrganizationPage } from '../pages/OrganizationPage';
// // import { PageUrls } from '../constants/pageURLs';

// // let organizationPage: OrganizationPage;

// // Given('I am on the Organization module', async function () {
// //   organizationPage = new OrganizationPage(this.page);
// // });

// // When('I navigate to the My Profile page', async function () {
// //   await organizationPage.navigateToMyProfile();
// // });

// // Then('I should be redirected to the My Profile page URL', async function () {
// //   await expect(this.page).toHaveURL(PageUrls.MY_PROFILE);
// // });

// // When('I navigate to the Employee Directory page', async function () {
// //   await organizationPage.navigateToEmployeeDirectory();
// // });

// // Then('I should be redirected to the Employee Directory page URL', async function () {
// //   await expect(this.page).toHaveURL(PageUrls.EMPLOYEE_DIRECTORY);
// // });


// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { OrganizationPage } from '../pages/OrganizationPage';
// import { PageUrls } from '../constants/pageURLs';

// let organizationPage: OrganizationPage;

// Given('I am on the Organization module', async function () {
//   organizationPage = new OrganizationPage(this.page);
// });

// When('I navigate to the {string} page in Organization module', async function (page: string) {
//   switch (page) {
//     case 'My Profile':
//       await organizationPage.navigateToMyProfile();
//       break;
//     case 'Employee Directory':
//       await organizationPage.navigateToEmployeeDirectory();
//       break;
//     default:
//       throw new Error(`❌ Unknown Organization sub-page: "${page}"`);
//   }
// });

// Then('I should be redirected to the correct URL for {string}', async function (page: string) {
//   switch (page) {
//     case 'My Profile':
//       await expect(this.page).toHaveURL(PageUrls.MY_PROFILE);
//       break;
//     case 'Employee Directory':
//       await expect(this.page).toHaveURL(PageUrls.EMPLOYEE_DIRECTORY);
//       break;
//     default:
//       throw new Error(`❌ Unknown Organization sub-page: "${page}"`);
//   }
// });
