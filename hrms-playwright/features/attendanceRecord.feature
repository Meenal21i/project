@attendanceRecord
Feature: Attendance Record Validation
  As a user of HRMS portal
  I want to check my attendance record
  So that I can ensure its correct status

  Background:
    Given User is logged into the HRMS application

  Scenario: Verify Week-Off record status
    When User navigates to the Attendance Record page
    And User selects a 4-day date range including Saturday and Sunday
    Then User should see attendance record for 4 days
    And User filters the attendance records by status "Weekly Off"
    Then User should see exactly 2 records with status "Week Off"
