import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AttendanceRecordPage } from '../pages/AttendanceRecordPage';
import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';

let leaveAttendancePage: LeaveAttendancePage;
let attendancePage: AttendanceRecordPage;

When('I navigate to the Attendance Record page', async function () {
  leaveAttendancePage = new LeaveAttendancePage(this.page);
  await leaveAttendancePage.navigateToAttendanceRecord();
});

When('I select a 4-day date range including Saturday and Sunday', async function () {
    attendancePage = new AttendanceRecordPage(this.page);
  await attendancePage.selectFourDayDateRange();
});

Then('I should see attendance records for 4 days', async function () {
  const records = await attendancePage.getAttendanceRecordCount();
  expect(records).toBe(4);
});

When('I filter the attendance records by status {string}', async function (status: string) {
  await attendancePage.selectStatus(status);
});

Then('I should see exactly 2 records with status {string}', async function (status: string) {
  const count = await attendancePage.getRecordCountByStatus(status);
  expect(count).toBe(2);
});
