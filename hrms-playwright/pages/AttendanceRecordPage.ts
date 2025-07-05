import { Page } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { AttendanceLocators } from '../locators/attendanceLocators';
import { constMessages } from '../constants/constants';

export class AttendanceRecordPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async selectFourDayDateRange(): Promise<void> {
    const dateInput = this.page.locator(AttendanceLocators.DATE_RANGE_INPUT);
    await dateInput.click();
    const friday = this.page.locator(AttendanceLocators.CALENDAR_ROWS).nth(constMessages.SECOND_ROW).locator(AttendanceLocators.CALENDAR_COLUMN).nth(constMessages.FIFTH_COLUMN);
    const monday = this.page.locator(AttendanceLocators.CALENDAR_ROWS).nth(constMessages.THIRD_ROW).locator(AttendanceLocators.CALENDAR_COLUMN).nth(constMessages.FIRST_COLOUMN);
    await friday.click();
    await monday.click();
    await this.waitForElementVisible(AttendanceLocators.FIRST_RECORD);
  }

  async getAttendanceRecordCount(): Promise<number> {
    const visibleRows = this.page.locator(AttendanceLocators.RECORD_ROW);
    const count = await visibleRows.count();
    return count;
  }

  async selectStatus(status: string): Promise<void> {
    const statusInput = this.page.locator(AttendanceLocators.STATUS_DROPDOWN_INPUT);
    await statusInput.click();
    await this.page.getByText(status, { exact: true }).click();
    await this.waitForElementVisible(AttendanceLocators.FIRST_RECORD);
  }

  async getRecordCountByStatus(status: string): Promise<number> {
    const matchingRows = this.page.locator(AttendanceLocators.RECORD_ROW).filter({hasText: status});
    const recordCount = await matchingRows.count();
    return recordCount;
  }
}