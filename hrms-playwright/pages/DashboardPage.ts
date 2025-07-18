import { Page, expect, BrowserContext } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { DashboardOverviewLocators } from '../locators/dashboardOverviewLocators';
import { CommonLocators } from '../locators/commonLocators';
import { LoginLocators } from '../locators/loginLocators';
import { NavBarLocators } from '../locators/navbarLocators';
import { CurrentDateStyle } from '../constants/dateStyle';
import { HighlightedCalendarButtonNotFoundError } from '../Errors/customErrors';
import { ErrorMessages } from '../Errors/errorMessages';

export class DashboardPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToDashboard(): Promise<void> {
    const dashboard = this.page.locator(NavBarLocators.Dashboard);
    await this.wrapper.click(dashboard);
    await this.wrapper.waitForElementVisible(dashboard);
  }

  async getCurrentDateFromCalendar(): Promise<string> {
    const expectedStyle = CurrentDateStyle.CURRENT_HIGHLIGHTED_DATE;
    const allButtons = this.page.locator(DashboardOverviewLocators.DATE_BUTTONS);
    const count = await allButtons.count();
    for (let i = 0; i < count; i++) {
      const button = allButtons.nth(i);
      const style = await button.getAttribute('style');
      const text = await button.textContent();
      if (style === expectedStyle && text) {
        return text;
      }
    }
    throw new HighlightedCalendarButtonNotFoundError(expectedStyle);
  }

  async clickProfileIcon() {
    await this.page.locator(CommonLocators.PROFILE_ICON).click();
  }

  async clickLogout() {
    await this.page.locator(CommonLocators.LOGOUT_OPTION).click();
  }

  async isAtLoginPage(): Promise<boolean> {
    return await this.page.locator(LoginLocators.USERNAME_INPUT).isVisible();
  }
}