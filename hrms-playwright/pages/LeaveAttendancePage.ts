import { Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { PageUrls } from '../constants/pageURLs';

export class LeaveAttendancePage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToAttendanceRecord(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.AttendanceRecord);
    await this.page.waitForURL(PageUrls.ATTENDANCE_RECORD);
  }

  async navigateToLeavesApplication(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeavesApplication);
    await this.page.waitForURL(PageUrls.LEAVES_APPLICATION);
  }

  async navigateToLeaveEntitlements(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeaveEntitlements);
    await this.page.waitForURL(PageUrls.LEAVE_ENTITLEMENTS);
  }

  async navigateToLeaveCorrection(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeaveCorrection);
    await this.page.waitForURL(PageUrls.LEAVE_CORRECTION);
  }

  async navigateToMyHolidays(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.MyHolidays);
    await this.page.waitForURL(PageUrls.MY_HOLIDAYS);
  }
}