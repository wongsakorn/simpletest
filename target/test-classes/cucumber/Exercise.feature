Feature: Exercise - Login
  As an admin
  I want to login
  So that I manage users

  Scenario: Admin login
    Given I am on login page
    When I login with user name admin and password 1234
    Then I should see user list table with 1 user

  Scenario: Admin login and remove user
    Given I am on login page
    When I login with user name admin and password 1234
    And I click remove user icon
    Then I should see user list table with 0 user