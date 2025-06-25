Feature: Chatbot Validation
  As a user of the HRMS application
  I want to interact with the chatbot
  So that I can get help using the application

  Background:
    Given I am logged into the HRMS application

  @chatbot
  Scenario: Chatbot should open and respond to messages
    When I click the chatbot icon
    Then the chatbot dialog box should appear
    Then the chatbot should display welcome headers
    Then I send a message "Hello there" and verify it was sent
