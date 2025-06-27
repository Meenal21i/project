import { Page, expect } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { EmployeeDirectoryLocators } from '../locators/employeeDirectoryLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { PageUrls } from '../constants/pageURLs';

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
    await this.page.locator(EmployeeDirectoryLocators.DROPDOWN_OPTION, { hasText: 'Table View' }).click();
  }

  // async getEmployeeNames(): Promise<string[]> {
  //   const employeeNames = this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_NAME);
  //   const countOfEmployee = await employeeNames.count();
  //   const names: string[] = [];
  //   for (let employee = 0; employee < countOfEmployee; employee++) {
  //     const name = await employeeNames.nth(employee).textContent();
  //     if (name) names.push(name.trim());
  //   }
  //   return names;
  // }
  async getEmployeeNames(): Promise<string[]> {
  const employeeNames = this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_ITEM);
  await employeeNames.first().waitFor({state:'visible'});
  const countOfEmployee = await employeeNames.count();
  console.log(`[DEBUG] Found ${countOfEmployee} employee cards`);
  const names: string[] = [];
  for (let employee = 0; employee < countOfEmployee; employee++) {
    const locator = employeeNames.nth(employee);
    const name = await locator.textContent();
    console.log(`[DEBUG] Employee #${employee}: ${name}`);
    if (name) names.push(name.trim());
  }

  return names;
}


// async getEmployeeCountOnPage(): Promise<number> {
//   return await this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_NAME).count();
// }

// async isNextButtonEnabled(): Promise<boolean> {
//   const nextButton = this.page.locator(EmployeeDirectoryLocators.NEXT_BUTTON);
//   return await nextButton.isEnabled();
// }

// async isPreviousButtonEnabled(): Promise<boolean> {
//   const prevButton = this.page.locator(EmployeeDirectoryLocators.PREV_BUTTON);
//   return await prevButton.isEnabled();
// }

// async getCurrentPageNumber(): Promise<number> {
//   const activePageBtn = this.page.locator(EmployeeDirectoryLocators.PAGE_NUMBER_ACTIVE);
//   const pageNumberText = await activePageBtn.textContent();
//   return Number(pageNumberText?.trim());
// }


async getEmployeeCountOnPage(): Promise<number> {
  const employeeCard = this.page.locator(EmployeeDirectoryLocators.EMPLOYEE_NAME);
  await employeeCard.first().waitFor({state: 'visible'});
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

// async clickNextButton(): Promise<void> {
//   await this.page.locator(EmployeeDirectoryLocators.NEXT_BUTTON).click();
//   await this.page.waitForLoadState('networkidle');
// }

async clickPreviousButton(): Promise<void> {
  await this.page.locator(EmployeeDirectoryLocators.PREV_BUTTON).click();
  await this.page.waitForLoadState('networkidle');
}

async clickNextButton(): Promise<void> {
  const nextBtn = this.page.locator(EmployeeDirectoryLocators.NEXT_BUTTON);
  await nextBtn.click();
}

async getLastPageNumber(): Promise<number> {
  const lastPageBtn = this.page.locator('button[data-testid="pagination-last"]');
  await lastPageBtn.click();
  await this.page.waitForTimeout(500); // wait for data to load
  return await this.getCurrentPageNumber();
}

async navigateToLastPage(): Promise<void> {
  const lastPageBtn = this.page.locator('button[data-testid="pagination-last"]');
  await expect(lastPageBtn).toBeVisible({ timeout: 5000 }); // Wait for visibility
  await lastPageBtn.click();
  await this.page.waitForLoadState('networkidle');
}

// async navigateToPageNumber(pageNum: number): Promise<void> {
//   const pageButton = this.page.locator(`button[aria-label="${pageNum}"]`);
//   // await pageButton.scrollIntoViewIfNeeded();
//   await pageButton.click();
//   await this.page.waitForLoadState('networkidle');
// }
async navigateToPageNumber(pageNum: number): Promise<void> {
  const pageButton = this.page.locator('button.mantine-Pagination-item', {
    hasText: String(pageNum)
  });
  await pageButton.scrollIntoViewIfNeeded();
  await pageButton.click();
  await this.page.waitForLoadState('networkidle');
}

}

