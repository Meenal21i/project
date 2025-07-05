@chatbot
Feature: Chatbot Validation
  As a user of the HRMS portal
  I want to interact with the chatbot
  So that I can ask my queries

  Background:
    Given User is logged into the HRMS application

  @chatbot
  Scenario: Chatbot should open and respond to messages
    When User clicks the chatbot icon
    Then the chatbot dialog box should appear
    And the chatbot should display welcome headers
    And User sends a random message
    Then the message should appear in the chat history
