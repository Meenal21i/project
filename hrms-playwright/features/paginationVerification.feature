@pagination
Feature: Pagination Verification
As a user of HRMS portal
I want to check the employee record pages
So that I can ensure the records and buttons are correct

  Background:
    Given User is logged into the HRMS application

  Scenario: Traverse through all pages and validate record count
    When User navigates to the Employee Directory page under Organization module
    And User traverses through all record pages
    Then Each page should show no more than 12 employee records
