@footer
Feature: Validate Dashboard Footer Social Media Links
  As a user of HRMS portal
  I want to check the social media footer links
  So that I can connect to social media of comapny

  Background:
    Given User is logged into the HRMS application

  Scenario Outline: Validate footer social media href values
    When User hovers on the "<SocialMedia>" icon in the footer to get the href
    Then It should match the expected URL for "<SocialMedia>"

    Examples:
      | SocialMedia |
      | YOUTUBE     |
      | LINKEDIN    |
      | TWITTER     |
