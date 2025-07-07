@dashboardOverview
Feature: Dashboard Overview Validation
  As a user of the HRMS portal
  I want to verify today's date on the calendar
  So that I can know the correct current date

  Background:
    Given User is logged into the HRMS application

  Scenario: Validate today’s date is highlighted in the Dashboard calendar
    When I navigate to the Dashboard page
    Then I should see today’s date highlighted on the calendar
