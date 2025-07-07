import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AttendanceRecordPage } from '../pages/AttendanceRecordPage';
import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';

let leaveAttendancePage: LeaveAttendancePage;
let attendancePage: AttendanceRecordPage;

When('User navigates to the Attendance Record page', async function () {
  leaveAttendancePage = new LeaveAttendancePage(this.page);
  await leaveAttendancePage.navigateToAttendanceRecord();
});

When('User selects a 4-day date range including Saturday and Sunday', async function () {
    attendancePage = new AttendanceRecordPage(this.page);
  await attendancePage.selectFourDayDateRange();
});

Then('User should see attendance record for 4 days', async function () {
  const records = await attendancePage.getAttendanceRecordCount();
  expect(records).toBe(4);
});

When('User filters the attendance records by status {string}', async function (status: string) {
  await attendancePage.selectStatus(status);
});

Then('User should see exactly 2 records with status {string}', async function (status: string) {
  const count = await attendancePage.getRecordCountByStatus(status);
  expect(count).toBe(2);
});
