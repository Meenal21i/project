import { Page, expect } from '@playwright/test';
import { EmployeeDirectoryLocators } from '../locators/employeeDirectoryLocators';
import { NavigationPage } from '../helpers/NavigationPage';

export class EmployeeDirectoryPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async selectJobTitle(jobTitle: string) {
    const jobTitleInput = this.page.locator(EmployeeDirectoryLocators.JOB_TITLE_INPUT);
    await jobTitleInput.click();
    await jobTitleInput.fill(jobTitle);
    await this.page.locator(EmployeeDirectoryLocators.DROPDOWN_OPTION, { hasText: jobTitle }).click();
  }

  async selectTableView() {
    const viewModeInput = this.page.locator(EmployeeDirectoryLocators.VIEW_MODE_OPTION);
    await viewModeInput.click();
    const tableView =  this.page.locator(EmployeeDirectoryLocators.DROPDOWN_OPTION, { hasText: 'Table View' });
    tableView.click();
    await this.wrapper.waitForElementVisible(tableView);
  }

  async getEmployeeNames(): Promise<string[]> {
    const employeeNames = this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_ITEM);
    await this.wrapper.waitForElementVisible(employeeNames.first());
    const countOfEmployee = await employeeNames.count();
    const names: string[] = [];
    for (let employee = 0; employee < countOfEmployee; employee++) {
      const locator = employeeNames.nth(employee);
      const name = await locator.textContent();
      if (name) names.push(name.trim());
    }
    return names;
  }

  async getEmployeeCountOnPage(): Promise<number> {
    const employeeCard = this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_ITEM);
    await this.wrapper.waitForElementVisible(employeeCard.first());
    return await employeeCard.count();
  }

  async isNextButtonEnabled(): Promise<boolean> {
    return await this.page.locator(EmployeeDirectoryLocators.NEXT_BUTTON).isEnabled();
  }

  async isPreviousButtonEnabled(): Promise<boolean> {
    return await this.page.locator(EmployeeDirectoryLocators.PREV_BUTTON).isEnabled();
  }

  async getCurrentPageNumber(): Promise<number> {
    const active = this.page.locator(EmployeeDirectoryLocators.PAGE_NUMBER_ACTIVE);
    const text = await active.textContent();
    return Number(text?.trim());
  }
  
  async clickPreviousButton(): Promise<void> {
    const prevBtn = this.page.locator(EmployeeDirectoryLocators.PREV_BUTTON);
    await prevBtn.click();
  }

  async clickNextButton(): Promise<void> {
    const nextBtn = this.page.locator(EmployeeDirectoryLocators.NEXT_BUTTON);
    await nextBtn.click();
  }
}