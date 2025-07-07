import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { EmployeeDirectoryPage } from '../pages/employeeDirectoryPage';
import { EmployeeDirectoryLocators } from '../locators/employeeDirectoryLocators';

let employeeDirectoryPage: EmployeeDirectoryPage;
let recordCounts: number[] = [];

When('User traverses through all record pages', async function () {
  employeeDirectoryPage = new EmployeeDirectoryPage(this.page);
  let nextAvailable = true;
  while (nextAvailable) {
    const count = await employeeDirectoryPage.getEmployeeCountOnPage();
    recordCounts.push(count);
    nextAvailable = await employeeDirectoryPage.isNextButtonEnabled();
    if (nextAvailable) {
      await employeeDirectoryPage.clickNextButton();
    }
  }
});

Then('Each page should show no more than 12 employee records', async function () {
  for (const count of recordCounts) {
    expect(count).toBeLessThanOrEqual(12);
  }
});