@pagination
Feature: Pagination Verification
As a user of HRMS portal
I want to check the employee record pages
So that I can ensure the records and buttons are correct

  @pagination
  Scenario: Traverse through all pages and validate record count
    And I navigate to the Employee Directory page under Organization module
    When I traverse through all pagination pages
    Then Each page should show no more than 12 employee records
