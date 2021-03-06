
import { browser } from "protractor";
import { config } from "../config/config";
import{BeforeAll, After,AfterAll,Status} from "@cucumber/cucumber";

BeforeAll({timeout: 100 * 1000}, async () => {
   //await browser.get("http://practice.automationtesting.in/");


});

After(async function(scenario) {
    if (scenario.result?.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});