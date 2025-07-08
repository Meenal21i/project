import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AttendanceRecordPage } from '../pages/AttendanceRecordPage';
import { LeaveAttendancePage } from '../pages/LeaveAttendancePage';
import { constValue } from '../constants/constants';

let leaveAttendancePage: LeaveAttendancePage;
let attendancePage: AttendanceRecordPage;

When('User navigates to the Attendance Record page', async function () {
  leaveAttendancePage = new LeaveAttendancePage(this.page);
  await leaveAttendancePage.navigateToAttendanceRecord();
});

When('User selects a {int}-day date range including Saturday and Sunday', async function () {
  attendancePage = new AttendanceRecordPage(this.page);
  await attendancePage.selectDateRangeFromWeek(constValue.START_COLUMN,constValue.RANGE);
});

Then('User should see attendance record for {int} days', async function (expectedCount: number) {
  const records: number = await attendancePage.getAttendanceRecordCount();
  expect(records).toBe(expectedCount);
});

When('User filters the attendance records by status {string}', async function (status: string) {
  await attendancePage.selectStatus(status);
});

Then('User should see exactly {int} records with status {string}', async function (expectedCount: number, status: string) {
  const count: number = await attendancePage.getRecordCountByStatus(status);
  expect(count).toBe(expectedCount);
});