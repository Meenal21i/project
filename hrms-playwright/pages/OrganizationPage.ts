import { Page } from '@playwright/test';
import { NavBarLocators } from '../locators/navbarLocators';
import { EmployeeDirectoryLocators } from '../locators/employeeDirectoryLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { PageUrls } from '../constants/pageURLs';

export class OrganizationPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToMyProfile(): Promise<void> {
    await this.click(NavBarLocators.Organization);
    await this.click(NavBarLocators.MyProfile);
    await this.page.waitForURL(PageUrls.MY_PROFILE);
  }

  async navigateToEmployeeDirectory(): Promise<void> {
    await this.click(NavBarLocators.Organization);
    await this.click(NavBarLocators.EmployeeDirectory);
    await this.page.waitForURL(PageUrls.EMPLOYEE_DIRECTORY);
  }
}