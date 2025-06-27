import { Page } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { format, subDays, isSaturday } from 'date-fns';

export class AttendanceRecordPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

//   async navigateToAttendanceRecord(): Promise<void> {
//     await this.page.getByText('Leave & Attendance').click();
//     await this.page.getByText('Attendance Record').click();
//   }

// async selectFourDayDateRange(): Promise<void> {
//   const dateInput = this.page.locator('input[placeholder="Select Date"]');
//   await dateInput.click();

//   const calendarRows = this.page.locator('table tbody tr');

//   const secondRow = calendarRows.nth(1).locator('.mantine-1f8v7sc.mantine-DateRangePicker-day');
//   const thirdRow = calendarRows.nth(2).locator('.mantine-1f8v7sc.mantine-DateRangePicker-day');

//   // Click Friday (4) to Monday (0 of next row)
//   await secondRow.nth(4).click();  // Friday
//   await secondRow.nth(5).click();  // Saturday
//   await secondRow.nth(6).click();  // Sunday
//   await thirdRow.nth(0).click();   // Monday

//   // Optional wait for data load
//   await this.page.waitForSelector('tr[id="0"]', { state: 'visible', timeout: 5000 });
// }
async selectFourDayDateRange(): Promise<void> {
  const dateInput = this.page.locator('input[placeholder="Select Date"]');
  await dateInput.click();

  // Target the 2nd row of the calendar
  const calendarRow = this.page.locator('table tr').nth(2); // or nth(3)

  // Friday (index 5), Saturday (6), Sunday (0 next row), Monday (1 next row)
  const friday = calendarRow.locator('.mantine-DateRangePicker-day').nth(5);
  const monday = this.page.locator('table tr').nth(3).locator('.mantine-DateRangePicker-day').nth(1);

  await friday.click();  // Start date (Friday)
  await monday.click();  // End date (Monday)

  // Wait for attendance table to load
  await this.page.waitForSelector('tr[id="0"]', { timeout: 5000 });
}


async getAttendanceRecordCount(): Promise<number> {
  const visibleRows = this.page.locator('tr[id]');
  const count = await visibleRows.count();
  console.log(`[DEBUG] Found ${count} rows in attendance table`);
  for (let i = 0; i < await visibleRows.count(); i++) {
  const rowText = await visibleRows.nth(i).textContent();
  console.log(`[DEBUG] Row ${i}: ${rowText}`);
}
  return count;
}


  async selectStatus(status: string): Promise<void> {
    const statusInput = this.page.locator('input[placeholder="Status"]');
    await statusInput.click();
    await this.page.getByText(status, { exact: true }).click();

    await this.page.waitForSelector('tr[id="1"]', { state: 'visible', timeout: 5000 });
  }

async getRecordCountByStatus(status: string): Promise<number> {
  const matchingRows = this.page.locator('tr[id]').filter({
    hasText: status
  });

  const count = await matchingRows.count();
  console.log(`[DEBUG] Records found with status "${status}": ${count}`);
  return count;
}
}