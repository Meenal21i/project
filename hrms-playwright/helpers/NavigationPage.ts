import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { NavigationNotImplementedError } from '../Errors/customErrors';
// import { navigationErrors } from '../constants/navigationErrors';

export class NavigationPage extends BasePage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToDashboard(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToDashboard');
  }

  async navigateToMyProfile(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToMyProfile');
  }

  async navigateToEmployeeDirectory(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToEmployeeDirectory');
  }

  async navigateToAttendanceRecord(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToAttendanceRecord');
  }

  async navigateToLeavesApplication(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToLeavesApplication');
  }

  async navigateToLeaveEntitlements(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToLeaveEntitlements');
  }

  async navigateToLeaveCorrection(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToLeaveCorrection');
  }

  async navigateToMyHolidays(): Promise<void> {
    throw new NavigationNotImplementedError(this.constructor.name, 'navigateToMyHolidays');
  }
}