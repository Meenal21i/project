import { Page, expect, Locator } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { LoginLocators } from '../locators/loginLocators';
import * as dotenv from 'dotenv';
dotenv.config();

let timeoutValue = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : undefined;

export class LoginPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto(process.env.BASE_URL!, {waitUntil:'domcontentloaded', timeout: timeoutValue});
  }

  async fillLoginForm(username: string, password: string): Promise<void> {
    await this.page.fill(LoginLocators.USERNAME_INPUT, username);
    await this.page.fill(LoginLocators.PASSWORD_INPUT, password);
  }

  async navigateToDashboard(): Promise<void> {
    await this.page.click(LoginLocators.LOGIN_BUTTON);
  }

  async getInvalidLoginError(): Promise<string> {
    const error: Locator= this.page.locator(LoginLocators.ERROR_MESSAGE);
    return await error.innerText();
  }
}