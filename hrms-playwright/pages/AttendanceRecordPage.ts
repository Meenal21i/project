import { Page } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { AttendanceLocators } from '../locators/attendanceLocators';
import { constValue } from '../constants/constants';

export class AttendanceRecordPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

async selectDateRangeFromWeek(startColumn: number, numberOfDays: number): Promise<void> {
  const dateInput = this.page.locator(AttendanceLocators.DATE_RANGE_INPUT);
  await dateInput.click();
  const calendarRow = this.page.locator(AttendanceLocators.CALENDAR_ROWS).nth(constValue.SECOND_ROW);
  const dayCells = calendarRow.locator(AttendanceLocators.CALENDAR_COLUMN);
  const startCell = dayCells.nth(startColumn);
  const endCell = dayCells.nth(startColumn + numberOfDays - 1);
  await startCell.click();
  await endCell.click();
  await this.wrapper.waitForElementVisible(AttendanceLocators.FIRST_RECORD);
}

async getAttendanceRecordCount(): Promise<number> {
    const visibleRows = this.page.locator(AttendanceLocators.RECORD_ROW);
    const count: number = await visibleRows.count();
    return count;
  }

  async selectStatus(status: string): Promise<void> {
    const statusInput = this.page.locator(AttendanceLocators.STATUS_DROPDOWN_INPUT);
    await statusInput.click();
    const statusOption = this.page.locator(AttendanceLocators.STATUS_DROPDOWN_OPTIONS).getByText(new RegExp(`^\\s*${status}\\s*$`, 'i'));
    await statusOption.first().click();
    await this.wrapper.waitForElementVisible(AttendanceLocators.FIRST_RECORD);
  }

  async getRecordCountByStatus(status: string): Promise<number> {
    const matchingRows = this.page.locator(AttendanceLocators.RECORD_ROW).filter({ hasText: status });
    const recordCount: number = await matchingRows.count();
    return recordCount;
  }
}