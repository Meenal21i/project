import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigationPage extends BasePage {
  constructor(protected page: Page) {
    super(page);
  }

  async navigateToDashboard(): Promise<void> {
    throw new Error('navigateToDashboard() not implemented for this page');
  }
}
