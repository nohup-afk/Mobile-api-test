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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to start app at: \u0027C:\\Users\\Bug\\git\\Mobile-api-test\\APK\\mda-1.0.13-15.apk\u0027 (Root cause: java.lang.IllegalArgumentException: The mobile device is missing. Please select the mobile device to be executed and try again.\r\n\tat com.google.common.base.Preconditions.checkArgument(Preconditions.java:135)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startLocalMobileDriver(MobileDriverFactory.java:535)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:452)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.doCall(StartApplicationKeyword.groovy:49)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.call(StartApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.startApplication(StartApplicationKeyword.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.execute(StartApplicationKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startApplication(MobileBuiltInKeywords.groovy:78)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startApplication.call(Unknown Source)\r\n\tat common_keyword.androidsetup.open_app(androidsetup.groovy:16)\r\n\tat steps.add_to_cart.Alisa_open_application_demo_app(add_to_cart.java:16)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Test.run(Test:21)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1671375841774.run(TempTestSuite1671375841774.groovy:36)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.startApplication(StartApplicationKeyword.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.execute(StartApplicationKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startApplication(MobileBuiltInKeywords.groovy:78)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startApplication.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\r\n\tat common_keyword.androidsetup.open_app(androidsetup.groovy:16)\r\n\tat steps.add_to_cart.Alisa_open_application_demo_app(add_to_cart.java:16)\r\n\tat ✽.Alisa open application demo app(C:/Users/Bug/git/Mobile-api-test/Include/features/Product.feature:25)\r\nCaused by: java.lang.IllegalArgumentException: The mobile device is missing. Please select the mobile device to be executed and try again.\r\n\tat com.google.common.base.Preconditions.checkArgument(Preconditions.java:135)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startLocalMobileDriver(MobileDriverFactory.java:535)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory.startMobileDriver(MobileDriverFactory.java:452)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.doCall(StartApplicationKeyword.groovy:49)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword$_startApplication_closure1.call(StartApplicationKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.startApplication(StartApplicationKeyword.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.StartApplicationKeyword.execute(StartApplicationKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.startApplication(MobileBuiltInKeywords.groovy:78)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$startApplication.call(Unknown Source)\r\n\tat common_keyword.androidsetup.open_app(androidsetup.groovy:16)\r\n\tat steps.add_to_cart.Alisa_open_application_demo_app(add_to_cart.java:16)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Test.run(Test:21)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1671375841774.run(TempTestSuite1671375841774.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "she select Sauce Lab Back Packs in product list",
  "keyword": "* "
});
formatter.match({
  "location": "add_to_cart.she_select_in_product_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "she select blue item",
  "keyword": "* "
});
formatter.match({
  "location": "add_to_cart.she_select_item(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "she want add increase amount of the item",
  "keyword": "When "
});
formatter.match({
  "location": "add_to_cart.she_want_add_increase_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "she should able to Add item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "add_to_cart.she_should_able_to_Add_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
});