import { Page, Locator } from '@playwright/test';
import { ChatBotLocators } from '../locators/chatBotLocators';
import { NavigationPage } from '../helpers/NavigationPage';
import { DashboardPage } from './DashboardPage';

export class ChatBotPage extends NavigationPage{
  constructor(protected page: Page) {
    super(page);
  }

  async openChatBot() {
    await this.page.locator(ChatBotLocators.CHATBOT_ICON).click();
  }

  async isChatBotVisible(): Promise<boolean> {
    return this.page.locator(ChatBotLocators.CHATBOT_BOX).isVisible();
  }

  async getHeaderTexts(): Promise<string> {
    const chatBoxText = await this.page.locator(ChatBotLocators.CHATBOT_BOX).textContent();
    return chatBoxText || '';
  }

  async sendMessage(message: string) {
    await this.page.locator(ChatBotLocators.MESSAGE_INPUT).fill(message);
    await this.page.locator(ChatBotLocators.SUBMIT_BUTTON).click();
  }

  async getLastSentMessage(): Promise<string> {
    const messages = await this.page.locator(ChatBotLocators.SENT_MESSAGE).allTextContents();
    return messages.at(-1) || '';
  }
}