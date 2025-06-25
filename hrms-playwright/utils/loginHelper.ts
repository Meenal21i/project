// utils/loginHelper.ts
import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string): Promise<void> {
  await page.goto(process.env.BASE_URL!);
  await page.getByPlaceholder('username@intimetec.com').fill(username);
  await page.getByPlaceholder('Your password').fill(password);
  await page.locator('#login-form-input-submit-btn').click();
}
