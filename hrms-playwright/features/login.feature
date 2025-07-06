@login-skip
Feature: Login Functionality
  As a registered employee
  I want to be able to log in to the HR portal
  So that I can access the dashboard and manage my profile

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard page

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message for invalid login
