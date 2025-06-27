import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { EmployeeDirectoryPage } from '../pages/employeeDirectoryPage';

let employeeDirectoryPage: EmployeeDirectoryPage;
let recordCounts: number[] = [];

When('I traverse through all pagination pages', async function () {
  employeeDirectoryPage = new EmployeeDirectoryPage(this.page);
  let hasNext = true;

  while (hasNext) {
    const count = await employeeDirectoryPage.getEmployeeCountOnPage();
    console.log(`[Debug]: count of records on current page:, ${count} `)
    recordCounts.push(count);

    hasNext = await employeeDirectoryPage.isNextButtonEnabled();

    if (hasNext) {
      await employeeDirectoryPage.clickNextButton();
      await this.page.waitForLoadState('networkidle');
    }
  }
});

Then('Each page should show no more than 12 employee records', async function () {
  for (const count of recordCounts) {
    expect(count).toBeLessThanOrEqual(12);
  }
});
