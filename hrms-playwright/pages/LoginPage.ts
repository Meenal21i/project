import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../helpers/NavigationPage';
import { LoginLocators } from '../locators/loginLocators';
import { Messages } from '../constants/messages';
// import * as dotenv from 'dotenv';

// dotenv.config();

export class LoginPage extends NavigationPage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto(process.env.BASE_URL!);
  }

  async fillLoginForm(username: string, password: string): Promise<void> {
    await this.page.fill(LoginLocators.usernameField, username);
    await this.page.fill(LoginLocators.passwordField, password);
  }

  async navigateToDashboard(): Promise<void> {
    await this.page.click(LoginLocators.loginButton);
  }

  async getInvalidLoginError(): Promise<string> {
    const error = this.page.locator(LoginLocators.errorMessage);
    return error.innerText();
  }
}