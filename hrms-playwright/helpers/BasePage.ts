import { Page } from '@playwright/test';
import { PlaywrightWrapper } from './playwrightWrappers';
import * as dotenv from 'dotenv';
dotenv.config();

const timeoutValue = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : undefined;

export class BasePage {
  protected wrapper: PlaywrightWrapper;

  constructor(protected page: Page) {
    this.wrapper = new PlaywrightWrapper(page, timeoutValue);
  }

  public getPage(): Page {
    return this.page;
  }
}