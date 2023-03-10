$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPage Test",
  "description": "As user I want to navigate to computer page",
  "id": "computerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5931636600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "computerpage-test;verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on computer",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on position tab",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputer()"
});
formatter.result({
  "duration": 143749200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 20117244900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b747e96d62b3072cad79d0d430294174, clickElement {id\u003d05a008fa-fb39-4b07-9a10-50b48db38ad2}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63321}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63321/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (b747e96d62b3072cad79d0d430294174)] -\u003e xpath: //ul[@class\u003d\u0027top-menu mobile\u0027]/child::li[1]/a[1]]\nSession ID: b747e96d62b3072cad79d0d430294174\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat com.nopcommerce.demo.pages.ComputerPage.clickOnComputerTab(ComputerPage.java:239)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iClickOnComputerTab(ComputerSteps.java:17)\r\n\tat ???.When I click on computer tab(computerpage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnPositionTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1238485400,
  "status": "passed"
});
formatter.before({
  "duration": 2565015900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "computerpage-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am On computer menu",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I clickedd on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I clickedd on position tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see build your own computer text",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select first options from dropdown \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select third options from dropdown \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on radio button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on radio buttonn",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see  dollor amount displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click On set Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see product added message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click On cross button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I do mousehover and add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see shopping cart displayed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on update basket",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on update on shopping cartt",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see dollor displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see Welcome Message displayedd",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I clickedd on guest tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter firstname\"Ganpati\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter lastname\"kailash\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter emailid\"Ganpati@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select country \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter cityfield \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter Address \"10 Downing St\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter zipcode \"OV16 7BH\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter phonenumber \"07900 200004\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on radiobuttonn",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on continuee",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I selectCC",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on card type",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select MasterC \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I select card holder name \"MR G K Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter card number \"0759 2136 2156 5987\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on expire month",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select expiremonth \"04\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on expire year",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select expire year \"2026\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter card code \"859\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click On COntinueee",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should see Payment method text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should see credit card text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should see shipping method text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should see next day air text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should see dollors text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on Confirm buttonn",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should see thanks message text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should see successful message text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I clicked On continued button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I should see welcome to our store text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerMenu()"
});
formatter.result({
  "duration": 958025800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickeddOnDesktopTab()"
});
formatter.result({
  "duration": 841854300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickeddOnPositionTab()"
});
formatter.result({
  "duration": 80684600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 98527100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeBuildYourOwnComputerText()"
});
formatter.result({
  "duration": 1281200600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 38
    }
  ],
  "location": "ComputerSteps.iSelectFirstOptionsFromDropdown(String)"
});
formatter.result({
  "duration": 122853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 38
    }
  ],
  "location": "ComputerSteps.iSelectThirdOptionsFromDropdown(String)"
});
formatter.result({
  "duration": 124415700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnRadioButton()"
});
formatter.result({
  "duration": 69964800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnRadioButtonn()"
});
formatter.result({
  "duration": 73366600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 87734400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeDollorAmountDisplayed()"
});
formatter.result({
  "duration": 44853400,
  "error_message": "java.lang.AssertionError:  expected [$1,475.00] but found [$1,460.00]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerSteps.iShouldSeeDollorAmountDisplayed(ComputerSteps.java:92)\r\n\tat ???.And I should see  dollor amount displayed(computerpage.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnSetAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductAddedMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iDoMousehoverAndAddToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeShoppingCartDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnUpdateBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnUpdateOnShoppingCartt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeDollorDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeWelcomeMessageDisplayedd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickeddOnGuestTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganpati",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iEnterFirstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "kailash",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iEnterLastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganpati@gmail.com",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iEnterEmailid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iEnterCityfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10 Downing St",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iEnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OV16 7BH",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iEnterZipcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07900 200004",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iEnterPhonenumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnRadiobuttonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinuee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iSelectCC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCardType()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectMasterC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MR G K Patel",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iSelectCardHolderName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0759 2136 2156 5987",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iEnterCardNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnExpireMonth()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "04",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iSelectExpiremonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnExpireYear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2026",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iSelectExpireYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "859",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iEnterCardCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCOntinueee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeePaymentMethodTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeCreditCardTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeShippingMethodTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeNextDayAirTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeDollorsTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnConfirmButtonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeThanksMessageTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeSuccessfulMessageTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickedOnContinuedButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeWelcomeToOurStoreTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1023046100,
  "status": "passed"
});
formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "electronics Test",
  "description": "As user I want to navigate to electronics page",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2395623500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "test Name Verify User Should Navigate To Cell Phones Page Successfully",
  "description": "",
  "id": "electronics-test;test-name-verify-user-should-navigate-to-cell-phones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Electronics page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on electronics page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on cell phone",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I shouls see Cell phone text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.iAmOnElectronicsPage()"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnElectronicsPage()"
});
formatter.result({
  "duration": 165665000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iMouseHoverOnCellPhone()"
});
formatter.result({
  "duration": 562157800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShoulsSeeCellPhoneTextDisplayed()"
});
formatter.result({
  "duration": 41798200,
  "status": "passed"
});
formatter.after({
  "duration": 724784700,
  "status": "passed"
});
formatter.before({
  "duration": 2546349900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify That The Product Added Successfully And Place Order Successfully",
  "description": "",
  "id": "electronics-test;verify-that-the-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Electronicss page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on electronicss page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I mouse hoverr on cell phone",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see Cell phone text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on list view",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on nokia lumia",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see nokia lumia message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see dollorrr message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I change quantity one",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I clicked on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see added product message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on shopping carttt",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see shopping cart message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see dollorr  message displayedd",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on checkboxx",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on checkoutt",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should verify welcome message sign in displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should verify register message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I  click on radioo buttonn",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I entered first name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I entered last name  \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter EmailAddress \"test12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"william123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirm password  \"william123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I clicked on register buttonn1",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should verify registration completed message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on continue b",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should verify shopping cart text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on checkbox2",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I clicked checkout3",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I entered country \"United Kingdon\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I entered city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I entered Address1 \"50 high RD\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I entered zip postal code \"Wd10 5td\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I entered phone number \"0700400700\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I clicked on continue3",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I clicked no R button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continue4",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I clicked on radioo button2",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I clicked on Payment method buttonn",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select credit card \"Visa\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I selected card holder name \"xyz\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I entered card number \"3252 7814 7648 5333\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select expiry month1 \"01\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select year1 \"2030\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I entered card code \"111\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I clicked on check outt",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should verify credit card message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should verify second day card message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should verify dollors4 message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I clicked on confirm buttonn",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should verify Thank you message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I should verify Your order has been successfully processed  text",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on continue button5",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should confirm  Welcome to our store text displayed",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I clicked on logout",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I should confirm current url",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.iAmOnElectronicssPage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnElectronicssPage()"
});
formatter.result({
  "duration": 199447800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iMouseHoverrOnCellPhone()"
});
formatter.result({
  "duration": 991976200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeCellPhoneTextDisplayed()"
});
formatter.result({
  "duration": 38904900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnListView()"
});
formatter.result({
  "duration": 44841900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnNokiaLumia()"
});
formatter.result({
  "duration": 835487500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeNokiaLumiaMessageDisplayed()"
});
formatter.result({
  "duration": 36824000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeDollorrrMessageDisplayed()"
});
formatter.result({
  "duration": 31927200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iChangeQuantityOne()"
});
formatter.result({
  "duration": 3090900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedOnAddToCart()"
});
formatter.result({
  "duration": 63354400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeAddedProductMessageDisplayed()"
});
formatter.result({
  "duration": 226610100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCloseButton()"
});
formatter.result({
  "duration": 71441300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnShoppingCarttt()"
});
formatter.result({
  "duration": 1549246400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeShoppingCartMessageDisplayed()"
});
formatter.result({
  "duration": 43683600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSeeDollorrMessageDisplayedd()"
});
formatter.result({
  "duration": 43699400,
  "error_message": "java.lang.AssertionError: expected [$698.00] but found [$349.00]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.nopcommerce.demo.steps.ElectronicsSteps.iShouldSeeDollorrMessageDisplayedd(ElectronicsSteps.java:116)\r\n\tat ???.And I should see dollorr  message displayedd(electronics.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCheckboxx()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCheckoutt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyWelcomeMessageSignInDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyRegisterMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRadiooButtonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iEnteredFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iEnteredLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test12@gmail.com",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "william123",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "william123",
      "offset": 27
    }
  ],
  "location": "ElectronicsSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iClickedOnRegisterButtonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyRegistrationCompletedMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueB()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyShoppingCartTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "ElectronicsSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iClickedCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdon",
      "offset": 19
    }
  ],
  "location": "ElectronicsSteps.iEnteredCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iEnteredCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "50 high RD",
      "offset": 20
    }
  ],
  "location": "ElectronicsSteps.iEnteredAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wd10 5td",
      "offset": 27
    }
  ],
  "location": "ElectronicsSteps.iEnteredZipPostalCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0700400700",
      "offset": 24
    }
  ],
  "location": "ElectronicsSteps.iEnteredPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.iClickedOnContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedNoRButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "ElectronicsSteps.iClickOnContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iClickedOnRadiooButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedOnPaymentMethodButtonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Visa",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iSelectCreditCard(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iSelectedCardHolderName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3252 7814 7648 5333",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iEnteredCardNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "01",
      "offset": 24
    }
  ],
  "location": "ElectronicsSteps.iSelectExpiryMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "2030",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iSelectYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.iEnteredCardCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedOnCheckOutt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyCreditCardMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifySecondDayCardMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyDollorsMessageDisplaye()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedOnConfirmButtonn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyThankYouMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyYourOrderHasBeenSuccessfullyProcessedText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldConfirmWelcomeToOurStoreTextDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iClickedOnLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldConfirmCurrentUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1057552300,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage Test",
  "description": "As user I want to navigate to Homepage page",
  "id": "homepage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2417185500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify Page Navigation",
  "description": "",
  "id": "homepage-test;verify-page-navigation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on top menu page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select computer \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i select  electronics\"Electronics\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I selected apparel \"Apparel\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I seelect  digital downloads\"Digital downloads\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I selecct books \"Books\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i seleect jewelry \"Jewelry\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "i sselect gift cards \"Gift Cards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnTopMenuPage()"
});
formatter.result({
  "duration": 135800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSelectComputer(String)"
});
formatter.result({
  "duration": 957637400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSelectElectronics(String)"
});
formatter.result({
  "duration": 874014200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.iSelectedApparel(String)"
});
formatter.result({
  "duration": 467708900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 29
    }
  ],
  "location": "HomePageSteps.iSeelectDigitalDownloads(String)"
});
formatter.result({
  "duration": 474518100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.iSelecctBooks(String)"
});
formatter.result({
  "duration": 500036600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iSeleectJewelry(String)"
});
formatter.result({
  "duration": 470755100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iSselectGiftCards(String)"
});
formatter.result({
  "duration": 484353800,
  "status": "passed"
});
formatter.after({
  "duration": 691157900,
  "status": "passed"
});
});