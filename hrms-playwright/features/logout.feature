@logout
Feature: Logout Functionality
  As a logged-in user
  I want to logout from the HRMS application
  So that I can ensure that I am redirected to the login page

  Background:
    Given User is logged into the HRMS application

  Scenario: Logout and redirect to login page
    When User clicks on the profile icon
    And User clicks on the Logout option
    Then User should be redirected to the login page
