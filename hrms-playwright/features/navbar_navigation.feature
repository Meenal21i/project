Feature: Navigation Bar Validation

  Background:
    Given I am logged into the HRMS application

  Scenario: Validate Dashboard navigation
    When I click on "Dashboard" in the navigation bar
    Then I should be redirected to the Dashboard page

  Scenario: Validate Organization module navigation
    When I expand the "Organization" module in the navigation bar
    Then I should see "My Profile" and "Employee Directory" as sub-links
    And each sub-link should redirect to the correct page

  Scenario: Validate Leave & Attendance module navigation
    When I expand the "Leave & Attendance" module in the navigation bar
    Then I should see "Attendance record", "Leaves Application", "Leave Entitlements", "Leave Correction", and "My Holidays" as sub-links
    And each sub-link should redirect to the correct page
