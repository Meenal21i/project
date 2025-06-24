// import { Page } from '@playwright/test';
// import { BasePage } from '../helpers/BasePage';
// import { NavBarLocators } from '../locators/navbarLocators';

// export class NavigationPage extends BasePage {
//   constructor(protected page: Page) {
//     super(page);
//   }

//   async clickNavModule(module: 'Dashboard' | 'Organization' | 'Leave & Attendance') {
//     const locator = NavBarLocators[module.replace(/ /g, '') as keyof typeof NavBarLocators];
//     await this.page.locator(locator).click();
//   }

//   async getVisibleSubOptions(): Promise<string[]> {
//   const elements = this.page.locator('.mantine-1xcx8ah');
//   await elements.first().waitFor({ state: 'visible', timeout: 10000 });
//   const count = await elements.count();
//   const texts: string[] = [];

//   for (let i = 0; i < count; i++) {
//     const text = await elements.nth(i).innerText();
//     texts.push(text.trim());
//   }

//   return texts;
// }

// // async validateAndClickSubOptions(moduleName: string, expectedList: { text: string, expectedUrl: string }[]) {
// //   // Click the main module (like "Organization")
// //   await this.page.getByText(moduleName, { exact: true }).click();

// //   for (const item of expectedList) {
// //     const subOption = this.page.getByText(item.text, { exact: true });
// //     await subOption.waitFor({ state: 'visible', timeout: 5000 });
    
// //     // Validate text (optional, just log)
// //     const visibleText = await subOption.innerText();
// //     console.log(`[DEBUG] Found submenu: ${visibleText}`);

// //     // Click and verify URL
// //     await subOption.click();
// //     await this.page.waitForURL(item.expectedUrl, { timeout: 5000 });
// //   }

// async validateAndClickSubOptions(
//   moduleName: string,
//   expectedList: { text: string; expectedUrl: string }[]
// ): Promise<void> {
//   // Click the nav module (e.g., "Organization")
//   await this.page.getByText(moduleName, { exact: true }).click();

//   // Wait until at least one submenu item appears (e.g., '.mantine-1xcx8ah')
//   const submenu = this.page.locator('.mantine-1xcx8ah');
//   await submenu.first().waitFor({ state: 'visible', timeout: 10000 }); // wait max 10s

//   const allSubmenuTexts = await submenu.allInnerTexts();
//   console.log(`[DEBUG] Submenus detected under ${moduleName}:`, allSubmenuTexts);


//   for (const item of expectedList) {
//     const subOption = this.page.getByText(item.text, { exact: true });
    
//     // Wait until visible (for safety)
//     await subOption.waitFor({ state: 'visible', timeout: 5000 });

//     // Log found submenu text (debug)
//     const visibleText = await subOption.innerText();
//     console.log(`[DEBUG] Submenu visible: ${visibleText}`);

//     // Click the submenu and wait for the expected URL
//     await subOption.click();
//     await this.page.waitForURL(item.expectedUrl, { timeout: 5000 });

//     // Go back to dashboard or home if needed before next click
//     // await this.page.goBack(); // optional reset between clicks
//   }
// }

// }






// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://hrms.test.intimetec.americas/user/leave/leave-entitlements?tab=myEntitlementRequests');
//   await page.getByRole('button', { name: 'Dashboard' }).click();
//   await page.getByRole('button', { name: 'Organization' }).click();
//   await page.getByText('My profile').click();
//   await page.getByText('Employee directory').click();
//   await page.getByRole('button', { name: 'Leave & Attendance' }).click();
//   await page.getByText('Attendance record').click();
//   await page.getByText('Leaves application').click();
//   await page.getByText('Leave entitlements').click();
//   await page.getByText('Leave correction').click();
//   await page.getByText('My holidays').click();
//   await page.getByText('My Profile').click();
// });