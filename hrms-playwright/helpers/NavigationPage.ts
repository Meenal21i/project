import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { navigationErrors } from '../constants/navigationErrors';

export class NavigationPage extends BasePage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToDashboard(): Promise<void> {
    throw new Error(navigationErrors.DASHBOARD);
  }

  async navigateToMyProfile(): Promise<void> {
    throw new Error(navigationErrors.MY_PROFILE);
  }

  async navigateToEmployeeDirectory(): Promise<void> {
    throw new Error(navigationErrors.EMPLOYEE_DIRECTORY);
  }

  async navigateToAttendanceRecord(): Promise<void> {
    throw new Error(navigationErrors.ATTENDANCE_RECORD);
  }

  async navigateToLeavesApplication(): Promise<void> {
    throw new Error(navigationErrors.LEAVE_APPLICATION);
  }

  async navigateToLeaveEntitlements(): Promise<void> {
    throw new Error(navigationErrors.LEAVE_ENTITLEMENTS);
  }

  async navigateToLeaveCorrection(): Promise<void> {
    throw new Error(navigationErrors.LEAVE_CORRECTION);
  }

  async navigateToMyHolidays(): Promise<void> {
    throw new Error(navigationErrors.MY_HOLIDAYS);
  }
}