@logout
Feature: Logout Functionality
  As a logged-in user
  I want to logout from the HRMS application
  So that I can ensure that I am redirected to the login page

  Scenario: Logout and redirect to login page
    When I click on the profile icon
    And I click on the Logout option
    Then I should be redirected to the login page
