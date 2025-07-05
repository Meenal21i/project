export const ErrorMessages = {
  CHATBOX_NOT_VISIBLE: 'Chatbot dialog box did not appear.',
  HEADER_MISMATCH: 'Header text of chatbot is not found.',
  MESSAGE_NOT_SENT: 'Message was not found in chat history.',
  NO_HIGHLIGHTED_BUTTON: (expectedStyle: string) =>`Could not find the calendar button with exact expected style: "${expectedStyle}"`,
  NO_SUB_MODULE: (subModule: string) => `Sub-module not found: ${subModule}`,
  NO_SOCIAL_MEDIA: (socialMedia: string) => `Unknown platform: ${socialMedia}`,
};