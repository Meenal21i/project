@footer
Feature: Validate Dashboard Footer Social Media Links

  Background:
    Given I am logged into the HRMS application

  Scenario Outline: Validate footer social media href values
    When I get the href for the "<SocialMedia>" icon in the footer
    Then it should match the expected URL for "<SocialMedia>"

    Examples:
      | SocialMedia |
      | YOUTUBE     |
      | LINKEDIN    |
      | TWITTER     |
