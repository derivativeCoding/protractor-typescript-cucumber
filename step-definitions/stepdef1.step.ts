import { Given,When,Then } from "@cucumber/cucumber";
import { browser, ExpectedConditions, protractor } from "protractor";
import {SignInPage} from "../page-object/app1"
import { CheckoutPage } from "../page-object/app2"
var EC = protractor.ExpectedConditions;
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let signInPg=new SignInPage();
let checkoutPg=new CheckoutPage();

Given('load application url',{timeout: 10 * 5000}, async function () {
    await browser.get(browser.params.Url);
    await browser.wait(EC.visibilityOf(signInPg.signInBtn),5000); 
    console.log("load application url");
  });


    When('click on sign in link',{timeout: 10 * 5000},async function () {
      await browser.wait(EC.elementToBeClickable(signInPg.signInBtn),5000);
      await signInPg.clickOnSignInBtn();
      await browser.wait(EC.visibilityOf(signInPg.authenticLabel),5000);
      expect(await signInPg.authenticLabel.isDisplayed()).to.be.true;
    });

    When('enter invalid email address in the email box and click enter', {timeout: 10 * 5000},async function () {
      await browser.wait(EC.visibilityOf(signInPg.emailAddTxt),3000);
      expect(await signInPg.emailAddTxt.isDisplayed()).to.be.true;
      await signInPg.emailAddTxt.sendKeys("123@123");
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      await signInPg.clickOnCreateAcctBtn();
    });


    Then('error message {string} is displayed', {timeout: 10 * 5000},async function (errStr:string) {
      await browser.sleep(10000);
      let err_msg=await signInPg.invalidAcctCreateError.getText();
      expect(err_msg).to.equal(errStr)
    });

    When('enter {string} in search bar and click on search', {timeout: 10 * 5000},async function (str:string) {
      await browser.wait(EC.visibilityOf(checkoutPg.searchBar),10000);
      await checkoutPg.searchBar.clear();
      await checkoutPg.searchBar.sendKeys(str);
      await checkoutPg.searchBtn.click();
      await browser.wait(EC.visibilityOf(checkoutPg.topSellerTab),10000);
      expect(await checkoutPg.topSellerTab.getText()).to.equal("TOP SELLERS");
    });
    
    When('add first item to cart', {timeout: 10 * 5000},async function () {
      await browser.sleep(5000);
      await browser.wait(EC.elementToBeClickable(checkoutPg.add2Cart.get(0)),10000);
      await checkoutPg.add2Cart.get(0).click();
      
    });

    When("click on list view",async function(){
    await checkoutPg.listView.click();
    });

    Then('{string} is displayed', {timeout: 10 * 5000},async function (str:string) {
      await browser.sleep(5000);
      await browser.wait(EC.visibilityOf(checkoutPg.productAddedMsg.get(0)),10000);
      expect(await checkoutPg.productAddedMsg.get(0).isDisplayed()).to.be.true;
      expect(await checkoutPg.productAddedMsg.get(0).getText()).to.equal(str);
    });

    Then('{string} button is displayed', {timeout: 10 * 5000},async function (str:string) {
      await browser.sleep(5000);
      await browser.wait(EC.visibilityOf(checkoutPg.proceed2CheckOutBtn),10000);
      expect(await checkoutPg.proceed2CheckOutBtn.isDisplayed()).to.be.true;
      expect(await checkoutPg.proceed2CheckOutBtn.getText()).to.equal(str);
    });




