@login @regression
Feature:Login
  As a user
  I want to be able to login to the website
  So that I can check status of transcations

  Background: Open applitools demo url and login
    Given I open applitools demo url

  Scenario Outline: login and check status of transcations
    When I login with <username> and <password>
    Then I confirm total balance is 350 in the account
    And the <description> of transcation is in <status>

    Examples:
      | username   | password   | description               | status   |
      | webdriver  | webdriver  | Starbucks coffee          | Complete |
      | webdriver1 | webdriver1 | Stripe Payment Processing | Declined |
      | webdriver2 | webdriver2 | Shopify product           | Pending  |
      | webdriver2 | webdriver2 | Shopify product           | Complete |

