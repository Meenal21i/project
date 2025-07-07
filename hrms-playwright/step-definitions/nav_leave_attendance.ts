// import { Given, Then } from '@cucumber/cucumber';
// import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';
// import { PageUrls } from '../constants/pageURLs';
// import { expect } from '@playwright/test';
// import { UnknownSocialMediaError } from '../Errors/customErrors';

// let leaveAttendancePage: LeaveAttendancePage;

// Given('I navigate to the {string} page under Leave & Attendance module', async function (subModule: string) {
//   leaveAttendancePage = new LeaveAttendancePage(this.page);

//   switch (subModule) {
//     case 'Attendance record':
//       await leaveAttendancePage.navigateToAttendanceRecord();
//       break;
//     case 'Leaves Application':
//       await leaveAttendancePage.navigateToLeavesApplication();
//       break;
//     case 'Leave Entitlements':
//       await leaveAttendancePage.navigateToLeaveEntitlements();
//       break;
//     case 'Leave Correction':
//       await leaveAttendancePage.navigateToLeaveCorrection();
//       break;
//     case 'My Holidays':
//       await leaveAttendancePage.navigateToMyHolidays();
//       break;
//     default:
//       throw new SubmoduleNotFoundError(subModule);
//   }
// });

// Then('I should be redirected to the correct page for {string} in Leave & Attendance module', async function (subModule: string) {
//   let expectedUrl;

//   switch (subModule) {
//     case 'Attendance record':
//       expectedUrl = PageUrls.ATTENDANCE_RECORD;
//       break;
//     case 'Leaves Application':
//       expectedUrl = PageUrls.LEAVES_APPLICATION;
//       break;
//     case 'Leave Entitlements':
//       expectedUrl = PageUrls.LEAVE_ENTITLEMENTS;
//       break;
//     case 'Leave Correction':
//       expectedUrl = PageUrls.LEAVE_CORRECTION;
//       break;
//     case 'My Holidays':
//       expectedUrl = PageUrls.MY_HOLIDAYS;
//       break;
//     default:
//       throw new SubmoduleNotFoundError(subModule);
//   }

//   await expect(this.page).toHaveURL(expectedUrl);
// });
