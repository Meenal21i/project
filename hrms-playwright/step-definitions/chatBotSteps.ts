import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ChatBotPage } from '../pages/ChatBotPage';
import { constMessages } from '../constants/constants';
import { ErrorMessages } from '../Errors/errorMessages';
import { faker } from '@faker-js/faker';

let chatBotPage: ChatBotPage;
let randomMessage: string;

When('User clicks the chatbot icon', async function () {
  chatBotPage = new ChatBotPage(this.page);
  await chatBotPage.openChatBot();
});

Then('the chatbot dialog box should appear', async function () {
  const chatboxVisibility = await chatBotPage.isChatBotVisible();
  expect(chatboxVisibility, ErrorMessages.CHATBOX_NOT_VISIBLE).toBe(true);
});

Then('the chatbot should display welcome headers', async function () {
  const chatbotHeaderText = await chatBotPage.getHeaderTexts();
  expect(chatbotHeaderText, ErrorMessages.HEADER_MISMATCH).toContain(constMessages.CHATBOT_HEADER1);
  expect(chatbotHeaderText, ErrorMessages.HEADER_MISMATCH).toContain(constMessages.CHATBOT_HEADER2);
});

Then('User sends a random message', async function () {
  randomMessage = faker.lorem.sentence();
  await chatBotPage.sendMessage(randomMessage);
});

Then('the message should appear in the chat history', async function () {
  const lastMessage = await chatBotPage.getLastSentMessage();
  expect(lastMessage, ErrorMessages.MESSAGE_NOT_SENT).toBe(randomMessage);
});