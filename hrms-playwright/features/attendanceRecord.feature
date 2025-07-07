@attendanceRecord
Feature: Attendance Record Validation
  As a user of HRMS portal
  I want to check my attendance record
  So that I can ensure its correct status

  Background:
    Given User is logged into the HRMS application

  Scenario: Verify Week-Off record status
    When I navigate to the Attendance Record page
    And I select a 4-day date range including Saturday and Sunday
    And I filter the attendance records by status "Weekly Off"
    Then I should see exactly 2 records with status "Week Off"
