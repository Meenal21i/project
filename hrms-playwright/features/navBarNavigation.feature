@navbar
Feature: Navigation Bar Validation
  As a user of the HRMS portal
  I want to validate navigation links under Dashboard, Organization, and Leave & Attendance
  So that I will be redirected correctky

  Scenario: Navigate to Dashboard
    When I navigate to the Dashboard page
    Then I should be redirected to the Dashboard page URL

  Scenario Outline: Navigate to Organization sub-pages
    When I navigate to the <SubModule> page under Organization
    Then I should be redirected to the <SubModule> page URL under Organization

    Examples:
      | SubModule          |
      | My Profile         |
      | Employee Directory |

  Scenario Outline: Navigate to Leave & Attendance sub-pages
    When I navigate to the <SubModule> page under Leave & Attendance
    Then I should be redirected to the <SubModule> page URL under Leave & Attendance

    Examples:
      | SubModule          |
      | Attendance record  |
      | Leaves Application |
      | Leave Entitlements |
      | Leave Correction   |
      | My Holidays        |
