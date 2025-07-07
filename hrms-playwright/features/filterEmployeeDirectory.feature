@employeefiltering
Feature: Filter functionality in Employee Directory
  As a user of the HRMS application
  I want to apply filters in the Employee Directory
  So that I can see required employees

  Background:
    Given User is logged into the HRMS application

  Scenario: Filter employees by Job Title
    When User navigates to the Employee Directory page under Organization module
    And User selects "Director of Engineering" from the Job Title filter
    And User switches to Table View
    Then User should see the following employees:
      | Kapil Paliwal |
      | Yatin Yogi    |
      | Archit Jain   |
