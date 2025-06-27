Feature:

  @pagination
  Scenario: Traverse through all pages and validate record count
    Given I am logged into the HRMS application
    And I navigate to the Employee Directory page under Organization module
    When I traverse through all pagination pages
    Then Each page should show no more than 12 employee records
