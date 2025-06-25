// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { DashboardPage } from '../pages/DashboardPage';
// import { OrganizationPage } from '../pages/OrganizationPage';
// import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';
// import { NavBarLocators } from '../locators/navbarLocators';
// import { PageUrls } from '../constants/pageURLs';
// import * as dotenv from 'dotenv';

// dotenv.config();

// let dashboardPage: DashboardPage;
// let organizationPage: OrganizationPage;
// let leavePage: LeaveAttendancePage;

// Given('I am logged into the HRMS application', async function () {
//   await this.page.goto(process.env.BASE_URL!);
//   await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
//   await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
//   await this.page.locator('#login-form-input-submit-btn').click();

//   dashboardPage = new DashboardPage(this.page);
//   organizationPage = new OrganizationPage(this.page);
//   leavePage = new LeaveAttendancePage(this.page);
// });

// //
// // Dashboard
// //
// When('I navigate to the Dashboard page', async function () {
// //   await dashboardPage.navigateToDashboard();
// await dashboardPage.click(NavBarLocators.Dashboard);
// });

// Then('I should be redirected to the Dashboard page URL', async function () {
//   await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
// });

// //
// // Organization
// //
// When('I navigate to the {string} page under Organization', async function (page: string) {
//   switch (page) {
//     case 'My Profile':
//       await organizationPage.navigateToMyProfile();
//       break;
//     case 'Employee Directory':
//       await organizationPage.navigateToEmployeeDirectory();
//       break;
//     default:
//       throw new Error(`❌ Unknown Organization page: ${page}`);
//   }
// });

// Then('I should be redirected to the {string} page URL under Organization', async function (page: string) {
//   const expectedUrl = {
//     'My Profile': PageUrls.MY_PROFILE,
//     'Employee Directory': PageUrls.EMPLOYEE_DIRECTORY
//   }[page];

//   if (!expectedUrl) throw new Error(`❌ Expected URL not found for: ${page}`);
//   await expect(this.page).toHaveURL(expectedUrl);
// });

// //
// // Leave & Attendance
// //
// When('I navigate to the {string} page under Leave & Attendance', async function (page: string) {
//   switch (page) {
//     case 'Attendance record':
//       await leavePage.navigateToAttendanceRecord();
//       break;
//     case 'Leaves Application':
//       await leavePage.navigateToLeavesApplication();
//       break;
//     case 'Leave Entitlements':
//       await leavePage.navigateToLeaveEntitlements();
//       break;
//     case 'Leave Correction':
//       await leavePage.navigateToLeaveCorrection();
//       break;
//     case 'My Holidays':
//       await leavePage.navigateToMyHolidays();
//       break;
//     default:
//       throw new Error(`❌ Unknown Leave page: ${page}`);
//   }
// });

// Then('I should be redirected to the {string} page URL under Leave & Attendance', async function (page: string) {
//   const expectedUrl = {
//     'Attendance record': PageUrls.ATTENDANCE_RECORD,
//     'Leaves Application': PageUrls.LEAVES_APPLICATION,
//     'Leave Entitlements': PageUrls.LEAVE_ENTITLEMENTS,
//     'Leave Correction': PageUrls.LEAVE_CORRECTION,
//     'My Holidays': PageUrls.MY_HOLIDAYS,
//   }[page];

//   if (!expectedUrl) throw new Error(`❌ Expected URL not found for: ${page}`);
//   await expect(this.page).toHaveURL(expectedUrl);
// });
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { OrganizationPage } from '../pages/OrganizationPage';
import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';
import { NavBarLocators } from '../locators/navbarLocators';
import { PageUrls } from '../constants/pageURLs';
import * as dotenv from 'dotenv';

dotenv.config();

let dashboardPage: DashboardPage;
let organizationPage: OrganizationPage;
let leavePage: LeaveAttendancePage;

//
// Login
//
Given('I am logged into the HRMS application', async function () {
  await this.page.goto(process.env.BASE_URL!);
  await this.page.getByPlaceholder('username@intimetec.com').fill(process.env.USER_NAME!);
  await this.page.getByPlaceholder('Your password').fill(process.env.PASS_WORD!);
  await this.page.locator('#login-form-input-submit-btn').click();

  dashboardPage = new DashboardPage(this.page);
  organizationPage = new OrganizationPage(this.page);
  leavePage = new LeaveAttendancePage(this.page);
});

//
// Dashboard
//
When(/^I navigate to the Dashboard page$/, async function () {
  await dashboardPage.click(NavBarLocators.Dashboard);
});

Then(/^I should be redirected to the Dashboard page URL$/, async function () {
  await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
});

//
// Organization
//
When(/^I navigate to the (.+) page under Organization$/, async function (page: string) {
  switch (page) {
    case 'My Profile':
      await organizationPage.navigateToMyProfile();
      break;
    case 'Employee Directory':
      await organizationPage.navigateToEmployeeDirectory();
      break;
    default:
      throw new Error(`❌ Unknown Organization page: ${page}`);
  }
});

Then(/^I should be redirected to the (.+) page URL under Organization$/, async function (page: string) {
  const expectedUrl = {
    'My Profile': PageUrls.MY_PROFILE,
    'Employee Directory': PageUrls.EMPLOYEE_DIRECTORY
  }[page];

  if (!expectedUrl) throw new Error(`❌ Expected URL not found for: ${page}`);
  await expect(this.page).toHaveURL(expectedUrl);
});

//
// Leave & Attendance
//
When(/^I navigate to the (.+) page under Leave & Attendance$/, async function (page: string) {
  switch (page) {
    case 'Attendance record':
      await leavePage.navigateToAttendanceRecord();
      break;
    case 'Leaves Application':
      await leavePage.navigateToLeavesApplication();
      break;
    case 'Leave Entitlements':
      await leavePage.navigateToLeaveEntitlements();
      break;
    case 'Leave Correction':
      await leavePage.navigateToLeaveCorrection();
      break;
    case 'My Holidays':
      await leavePage.navigateToMyHolidays();
      break;
    default:
      throw new Error(`❌ Unknown Leave page: ${page}`);
  }
});

Then(/^I should be redirected to the (.+) page URL under Leave & Attendance$/, async function (page: string) {
  const expectedUrl = {
    'Attendance record': PageUrls.ATTENDANCE_RECORD,
    'Leaves Application': PageUrls.LEAVES_APPLICATION,
    'Leave Entitlements': PageUrls.LEAVE_ENTITLEMENTS,
    'Leave Correction': PageUrls.LEAVE_CORRECTION,
    'My Holidays': PageUrls.MY_HOLIDAYS,
  }[page];

  if (!expectedUrl) throw new Error(`❌ Expected URL not found for: ${page}`);
  await expect(this.page).toHaveURL(expectedUrl);
});
