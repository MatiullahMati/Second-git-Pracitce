$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@completeTest"
    }
  ]
});
formatter.before({
  "duration": 4418658500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# In feature will be use a comment"
    },
    {
      "line": 4,
      "value": "#Every Feature file starts with Feature: \u003cName of Feature\u003e"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 2955087000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Register new user to Retail Website",
  "description": "",
  "id": "login-to-retail-website;register-new-user-to-retail-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@RegisterTestCase"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User click on Register option",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User fill the Registration form with below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "eMail",
        "telephone",
        "password",
        "passwordConfirm",
        "Subscribe"
      ],
      "line": 58
    },
    {
      "cells": [
        "james",
        "bond",
        "jbond@tekschool.us",
        "2021019911",
        "bond007",
        "bond007",
        "no"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User accpet the privacy and policy",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User should be registered in Retail Website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 172839900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Register_option()"
});
formatter.result({
  "duration": 1156953700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_fill_the_Registration_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1045587600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_accpet_the_privacy_and_policy()"
});
formatter.result({
  "duration": 299103400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_continue_button()"
});
formatter.result({
  "duration": 48374900,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //input[@value\u003d\u0027Continue\u0027]\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//input[@value\u003d\u0027Continue\u0027]\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4PC1LOK\u0027, ip: \u002710.0.0.191\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\Mati\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57544}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 91f70258c82df6577ea156bd3cd6869e\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Continue\u0027]\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat utilites.WebDriverUtility.clickOnElement(WebDriverUtility.java:23)\r\n\tat pageObjectRepository.LoginPageObject.clickOnContinueButton(LoginPageObject.java:149)\r\n\tat stepDefinitions.LoginTestStepDef.user_click_on_continue_button(LoginTestStepDef.java:107)\r\n\tat ✽.And User click on continue button(Features/login.feature:62)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTestStepDef.user_should_be_registered_in_Retail_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 973921000,
  "status": "passed"
});
});