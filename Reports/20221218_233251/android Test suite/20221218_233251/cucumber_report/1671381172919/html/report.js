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
  "error_message": "java.lang.NoClassDefFoundError: org/objectweb/asm/Type\r\n\tat net.sf.cglib.core.TypeUtils.parseType(TypeUtils.java:184)\r\n\tat net.sf.cglib.core.KeyFactory.\u003cclinit\u003e(KeyFactory.java:72)\r\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:72)\r\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\r\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:217)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:215)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:107)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:155)\r\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\r\n\tat common.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pages.Products.\u003cinit\u003e(Products.java:12)\r\n\tat steps.add_to_cart.Alisa_open_application_demo_app(add_to_cart.java:18)\r\n\tat ✽.Alisa open application demo app(C:/Users/Bug/git/Mobile-api-test/Include/features/Product.feature:25)\r\nCaused by: java.lang.ClassNotFoundException: org.objectweb.asm.Type\r\n\tat org.codehaus.groovy.tools.RootLoader.findClass(RootLoader.java:179)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:419)\r\n\tat org.codehaus.groovy.tools.RootLoader.loadClass(RootLoader.java:151)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:352)\r\n\tat net.sf.cglib.core.TypeUtils.parseType(TypeUtils.java:184)\r\n\tat net.sf.cglib.core.KeyFactory.\u003cclinit\u003e(KeyFactory.java:72)\r\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:72)\r\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\r\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:217)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:215)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:107)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\r\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:155)\r\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\r\n\tat common.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pages.Products.\u003cinit\u003e(Products.java:12)\r\n\tat steps.add_to_cart.Alisa_open_application_demo_app(add_to_cart.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:264)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.Closure.call(Closure.java:420)\r\n\tat groovy.lang.Closure.call(Closure.java:414)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:152)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:197)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:217)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:128)\r\n\tat Script1671372742309.run(Script1671372742309.groovy:21)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:144)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:144)\r\n\tat TempTestSuite1671381171047.run(TempTestSuite1671381171047.groovy:36)\r\n\tat groovy.lang.GroovyShell.runScriptOrMainOrTestOrRunnable(GroovyShell.java:263)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:507)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:496)\r\n\tat groovy.ui.GroovyMain.processOnce(GroovyMain.java:597)\r\n\tat groovy.ui.GroovyMain.run(GroovyMain.java:329)\r\n\tat groovy.ui.GroovyMain.process(GroovyMain.java:315)\r\n\tat groovy.ui.GroovyMain.processArgs(GroovyMain.java:134)\r\n\tat groovy.ui.GroovyMain.main(GroovyMain.java:114)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.rootLoader(GroovyStarter.java:116)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.main(GroovyStarter.java:138)\r\n",
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