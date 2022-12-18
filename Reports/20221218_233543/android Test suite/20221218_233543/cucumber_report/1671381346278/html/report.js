$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Bug/git/Mobile-api-test/Include/features/Product.feature");
formatter.feature({
  "name": "Products",
  "description": "  I want to use this to buy item in marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add item bag",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Alisa open application demo app",
  "keyword": "Given "
});
formatter.step({
  "name": "she select \u003cproduct\u003e in product list",
  "keyword": "* "
});
formatter.step({
  "name": "she select \u003ccolour\u003e item",
  "keyword": "* "
});
formatter.step({
  "name": "she want add increase amount of the item",
  "keyword": "When "
});
formatter.step({
  "name": "she should able to Add item to cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "colour"
      ]
    },
    {
      "cells": [
        "Sauce Lab Back Packs",
        "blue"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add item bag",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Alisa open application demo app",
  "keyword": "Given "
});
formatter.match({
  "location": "add_to_cart.Alisa_open_application_demo_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she select Sauce Lab Back Packs in product list",
  "keyword": "* "
});
formatter.match({
  "location": "add_to_cart.she_select_in_product_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she select blue item",
  "keyword": "* "
});
formatter.match({
  "location": "add_to_cart.she_select_item(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she want add increase amount of the item",
  "keyword": "When "
});
formatter.match({
  "location": "add_to_cart.she_want_add_increase_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she should able to Add item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "add_to_cart.she_should_able_to_Add_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
});