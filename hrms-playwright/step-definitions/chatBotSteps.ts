import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ChatBotPage } from '../pages/ChatBotPage';

let chatBotPage: ChatBotPage;

When('I click the chatbot icon', async function () {
  chatBotPage = new ChatBotPage(this.page);
  await chatBotPage.openChatBot();
});

Then('the chatbot dialog box should appear', async function () {
  expect(await chatBotPage.isChatBotVisible()).toBe(true);
});

Then('the chatbot should display welcome headers', async function () {
  const { text1, text2 } = await chatBotPage.getHeaderTexts();
  expect(text1).toBe('Oh, Hello!');
  expect(text2).toBe('How can I help you today?');
});

Then('I send a message {string} and verify it was sent', async function (message: string) {
  await chatBotPage.sendMessage(message);
  const lastMessage = await chatBotPage.getLastSentMessage();
  expect(lastMessage).toBe(message);
});
