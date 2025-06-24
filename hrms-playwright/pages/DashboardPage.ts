//  After logging in, verify that the following modules are present in the navigation bar:  

// Dashboard,  .mantine-Group-root mantine-1dn2tzg   https://hrms.test.intimetec.americas/user/dashboard
// Organization  .mantine-bfmej7
// (My Profile, https://hrms.test.intimetec.americas/user/organization/my-profile
// https://hrms.test.intimetec.americas/user/organization/my-profile?tab=myDetails
// Employee Directory)    https://hrms.test.intimetec.americas/user/organization/employee-directory
// Leave & Attendance  .mantine-bfmej7   
// (Attendance record, .mantine-1xcx8ah   https://hrms.test.intimetec.americas/user/leave/attendance-record
// Leaves Application, .mantine-1xcx8ah   https://hrms.test.intimetec.americas/user/leave/leaves-application
// Leave Entitlements, .mantine-1xcx8ah
// https://hrms.test.intimetec.americas/user/leave/leave-entitlements?tab=myEntitlementRequests
// Leave Correction,  .mantine-1xcx8ah    https://hrms.test.intimetec.americas/user/leave/leave-correction
// My Holidays)  .mantine-1xcx8ah   https://hrms.test.intimetec.americas/user/leave/my-holidays

// b) Each module should have a clickable link that redirects to the respective page. 


import { Locator, Page } from '@playwright/test';
import { BasePage } from '../helpers/BasePage';
import * as dotenv from 'dotenv';

dotenv.config();

export class DashboardPage extends BasePage {
  private readonly title: Locator;

  constructor(protected page: Page) {
    super(page);
    this.title = page.locator('.mantine-1iqrsug mantine-Breadcrumbs-breadcrumb');
  }

  async getTitleText(): Promise<string | null> {
    return await this.getText(this.title);
  }
}