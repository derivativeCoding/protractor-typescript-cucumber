import { by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class SignInPage{
    signInBtn:ElementFinder;
    authenticLabel:ElementFinder;
    emailAddTxt:ElementFinder;
    createAcctBtn:ElementFinder;
    invalidAcctCreateError:ElementFinder;
  
    constructor(){
        this.signInBtn=element(by.xpath("//div[@class='header_user_info']"));
        this.authenticLabel=element(by.xpath("//h1[@class='page-heading'][text()='Authentication']"));
        this.emailAddTxt=element(by.xpath("//input[@id='email_create']"));
        this.createAcctBtn=element(by.xpath("//button[@id='SubmitCreate']"));
        this.invalidAcctCreateError=element(by.xpath("//div[@id='create_account_error']/ol/li"));
    }

    async clickOnSignInBtn(){
       await this.signInBtn.click();
    }

    async clickOnCreateAcctBtn(){
        await this.createAcctBtn.click();
    }

   
}