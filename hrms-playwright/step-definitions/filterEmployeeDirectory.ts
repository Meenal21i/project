
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { OrganizationPage } from '../pages/OrganizationPage';
import { EmployeeDirectoryPage } from '../pages/employeeDirectoryPage';

let organizationPage: OrganizationPage;
let employeeDirectoryPage: EmployeeDirectoryPage;

When('I navigate to the Employee Directory page under Organization module', async function () {
  organizationPage = new OrganizationPage(this.page);
  await organizationPage.navigateToEmployeeDirectory();
});

When('I select {string} from the Job Title filter', async function (jobTitle: string) {
  employeeDirectoryPage = new EmployeeDirectoryPage(this.page);
  await employeeDirectoryPage.selectJobTitle(jobTitle);
});

When('I switch to Table View', async function () {
  await employeeDirectoryPage.selectTableView();
});

Then('I should see the following employees:', async function (tableOfEmployeeName) {
  const expectedEmployeeNames = tableOfEmployeeName.raw().flat();
  const actualEmployeeNames = await employeeDirectoryPage.getEmployeeNames();
  for (const name of expectedEmployeeNames) {
    expect(actualEmployeeNames).toContain(name);
  }
});