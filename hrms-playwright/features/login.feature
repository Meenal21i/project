@login-skip
Feature: Login Functionality
  As a registered employee
  I want to be able to log in to the HR portal
  So that I can access the dashboard and manage my profile

  Scenario: Successful login with valid credentials
    Given User is on the login page
    When User enters valid credentials
    Then User should be redirected to the dashboard page

  Scenario: Unsuccessful login with invalid credentials
    Given User is on the login page
    When User enters invalid credentials
    Then User should see an error message for invalid login
