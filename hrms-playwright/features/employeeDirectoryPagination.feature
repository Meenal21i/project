@pagination
Feature: Employee Directory Pagination

  Background:
    Given I am logged into the HRMS application
    And I navigate to the Employee Directory page under Organization

  Scenario: Validate pagination functionality
# the scenario is that after landing on employee page, i'll start from page number 1-
# Now we have to check that the employee records on each page are not more than 12 records.
# Check that the "Next" and "Previous" buttons are dynamically enabled or disabled based on the current page. 
# on page 1 -> previous button should be disabled and next button should be enabled.
# on last page -> previous button should be enabled and next button should be disabled.
# confirm that the current page number is displayed correctly in the pagination controls. 
