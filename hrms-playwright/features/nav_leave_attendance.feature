Feature: Leave & Attendance Navigation
  As a logged-in HRMS user
  I want to validate that each sub-module under "Leave & Attendance"
  redirects to its correct page when clicked

  Background:
    Given I am logged into the HRMS application

  Scenario Outline: Validate sub-module navigation under Leave & Attendance
    Given I navigate to the "<SubModule>" page under Leave & Attendance module
    Then I should be redirected to the correct page for "<SubModule>" in Leave & Attendance module

    Examples:
      | SubModule          |
      | Attendance record  |
      | Leaves Application |
      | Leave Entitlements |
      | Leave Correction   |
      | My Holidays        |
