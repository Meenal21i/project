import { Page, Locator } from '@playwright/test';
import { ChatBotLocators } from '../locators/chatBotLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { DashboardPage } from './DashboardPage';

export class ChatBotPage extends DashboardPage{
  constructor(protected page: Page) {
    super(page);
  }

  async openChatBot() {
    await this.page.locator(ChatBotLocators.ChatBotIcon).click();
  }

  async isChatBotVisible(): Promise<boolean> {
    return this.page.locator(ChatBotLocators.ChatBotBox).isVisible();
  }

  async getHeaderTexts(): Promise<{ text1: string; text2: string }> {
    const text1 = await this.page.locator(ChatBotLocators.HeaderText1).textContent();
    const text2 = await this.page.locator(ChatBotLocators.HeaderText2).textContent();
    return { text1: text1?.trim() || '', text2: text2?.trim() || '' };
  }

  async sendMessage(message: string) {
    await this.page.locator(ChatBotLocators.MessageInput).fill(message);
    await this.page.locator(ChatBotLocators.SubmitButton).click();
  }

  async getLastSentMessage(): Promise<string> {
    const messages = await this.page.locator(ChatBotLocators.SentMessage).allTextContents();
    return messages.at(-1)?.trim() || '';
  }
}
