Feature: Dashboard Footer Validation
  As a user of the HRMS application
  I want to verify footer social links on the Dashboard
  So that I can ensure they redirect to correct URLs

  Background:
    Given I am logged into the HRMS application

  Scenario Outline: Validate footer social media link URLs
    When I scroll to the footer
    Then I click the "<Platform>" icon and should be redirected to "<ExpectedUrl>"

    Examples:
      | Platform | ExpectedUrl                                          |
      | YouTube  | https://www.youtube.com/c/InTimeTecCreatingAbundance |
      | LinkedIn | https://in.linkedin.com/company/in-time-tec          |
      | Twitter  | https://x.com/intime_tec                             |
      # | Facebook | https://www.facebook.com/InTimeTec/                  |
