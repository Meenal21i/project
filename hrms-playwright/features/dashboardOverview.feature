Feature: Dashboard Overview Validation
  As a user of the HRMS application
  I want to verify that today's date is highlighted in the calendar on the Dashboard
  So that I can ensure the calendar reflects the correct current date

  Background:
    Given I am logged into the HRMS application

  Scenario: Validate today’s date is highlighted in the Dashboard calendar
    When I navigate to the Dashboard page
    Then I should see today’s date highlighted on the calendar
