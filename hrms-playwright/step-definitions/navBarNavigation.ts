import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { OrganizationPage } from '../pages/OrganizationPage';
import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';
import { NavBarLocators } from '../locators/navbarLocators';
import { PageUrls } from '../constants/pageURLs';
import { SubmoduleNotFoundError } from '../Errors/customErrors';
import { ErrorMessages } from '../Errors/errorMessages';

let dashboardPage: DashboardPage;
let organizationPage: OrganizationPage;
let leavePage: LeaveAttendancePage;

When(/^User navigates to the Dashboard page$/, async function () {
  dashboardPage = new DashboardPage(this.page);
  await dashboardPage.navigateToDashboard();
});

Then(/^User should be redirected to the Dashboard page URL$/, async function () {
  await expect(this.page).toHaveURL(PageUrls.DASHBOARD);
});

When(/^User navigates to the (.+) page under Organization$/, async function (subModule: string) {
  organizationPage = new OrganizationPage(this.page);
  switch (subModule) {
    case 'My Profile':
      await organizationPage.navigateToMyProfile();
      break;
    case 'Employee Directory':
      await organizationPage.navigateToEmployeeDirectory();
      break;
    default:
      throw new SubmoduleNotFoundError(subModule);
  }
});

Then(/^User should be redirected to the (.+) page URL under Organization$/, async function (subModule: string) {
  const expectedUrl = {
    'My Profile': PageUrls.MY_PROFILE,
    'Employee Directory': PageUrls.EMPLOYEE_DIRECTORY
  }[subModule];

  if (!expectedUrl) throw new SubmoduleNotFoundError(subModule);
  await expect(this.page).toHaveURL(expectedUrl);
});

When(/^User navigates to the (.+) page under Leave & Attendance$/, async function (subModule: string) {
  leavePage = new LeaveAttendancePage(this.page);
  switch (subModule) {
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
      throw new SubmoduleNotFoundError(subModule);
  }
});

Then(/^User should be redirected to the (.+) page URL under Leave & Attendance$/, async function (subModule: string) {
  const expectedUrl = {
    'Attendance record': PageUrls.ATTENDANCE_RECORD,
    'Leaves Application': PageUrls.LEAVES_APPLICATION,
    'Leave Entitlements': PageUrls.LEAVE_ENTITLEMENTS,
    'Leave Correction': PageUrls.LEAVE_CORRECTION,
    'My Holidays': PageUrls.MY_HOLIDAYS,
  }[subModule];

  if (!expectedUrl) throw new SubmoduleNotFoundError(subModule);
  await expect(this.page).toHaveURL(expectedUrl);
});