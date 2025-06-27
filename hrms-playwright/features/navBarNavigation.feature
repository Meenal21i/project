@navbar
Feature: Navigation Bar Validation
  As a user of the HRMS application
  I want to validate navigation links under Dashboard, Organization, and Leave & Attendance
  So that I can ensure all redirections work correctly

  Background:
    Given I am logged into the HRMS application

  @navbar
  Scenario: Navigate to Dashboard
    When I navigate to the Dashboard page
    Then I should be redirected to the Dashboard page URL

  @navbar
  Scenario Outline: Navigate to Organization sub-pages
    When I navigate to the <Page> page under Organization
    Then I should be redirected to the <Page> page URL under Organization

    Examples:
      | Page               |
      | My Profile         |
      | Employee Directory |

  @navbar
  Scenario Outline: Navigate to Leave & Attendance sub-pages
    When I navigate to the <Page> page under Leave & Attendance
    Then I should be redirected to the <Page> page URL under Leave & Attendance

    Examples:
      | Page               |
      | Attendance record  |
      | Leaves Application |
      | Leave Entitlements |
      | Leave Correction   |
      | My Holidays        |
