import { Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { NavigationPage } from '../helpers/NavigationPage';

export class LeaveAttendancePage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToAttendanceRecord(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.AttendanceRecord);
  }

  async navigateToLeavesApplication(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeavesApplication);
  }

  async navigateToLeaveEntitlements(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeaveEntitlements);
  }

  async navigateToLeaveCorrection(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.LeaveCorrection);
  }

  async navigateToMyHolidays(): Promise<void> {
    await this.click(NavBarLocators['Leave & Attendance']);
    await this.click(NavBarLocators.MyHolidays);
  }
}
