#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Products
  I want to use this to buy item in marketplace

  @tag1
  Scenario Outline: Add item bag
    Given Alisa open application demo app
    * she select <product> in product list
    * she select <colour> item
    When she want add increase amount of the item
    Then she should able to Add item to cart

    Examples: 
      | product              | colour |
      | Sauce Lab Back Packs | blue   |
