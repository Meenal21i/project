# Feature: Organization Module Navigation
#   As a user of the HRMS application
#   I want to verify navigation to the Organization module pages
#   So that I can ensure correct redirection from the navigation bar
#   Background:
#     Given I am logged into the HRMS application
#     And I am on the Organization module
#   Scenario: Navigate to My Profile page
#     When I navigate to the My Profile page
#     Then I should be redirected to the My Profile page URL
#   Scenario: Navigate to Employee Directory page
#     When I navigate to the Employee Directory page
#     Then I should be redirected to the Employee Directory page URL
Feature: Organization Module Navigation
  As a user of the HRMS application
  I want to verify navigation to the Organization module pages
  So that I can ensure correct redirection from the navigation bar

  Background:
    Given I am logged into the HRMS application
    And I am on the Organization module

  Scenario Outline: Navigate to Organization sub-pages
    When I navigate to the "<page>" page in Organization module
    Then I should be redirected to the correct URL for "<page>"

    Examples:
      | page               |
      | My Profile         |
      | Employee Directory |
