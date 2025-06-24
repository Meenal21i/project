Feature: Navigation Validation

  Scenario: Validate sub-menu links and redirection for Organization and Leave & Attendance
    Given I am logged into the HRMS application
    When I expand and verify all sub-links under the top-level menus
    Then Each sub-link should navigate to its expected URL
