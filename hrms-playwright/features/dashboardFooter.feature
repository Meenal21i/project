@footer
Feature: Validate Dashboard Footer Social Media Links
  As a user of HRMS portal
  I want to check the social media footer links
  So that I can connect to social media of comapny

  Scenario Outline: Validate footer social media href values
    When I get the href for the "<SocialMedia>" icon in the footer
    Then it should match the expected URL for "<SocialMedia>"

    Examples:
      | SocialMedia |
      | YOUTUBE     |
      | LINKEDIN    |
      | TWITTER     |
