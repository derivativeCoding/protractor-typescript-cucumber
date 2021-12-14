import { browser, Config } from "protractor"
import { CucumberReporter } from "../support/reporter";
const reportsFolder = process.cwd() + "/reports";

export const config:Config = {

    //seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    directConnect:true,
    params:{
      Url:"http://automationpractice.com/index.php"
    },

    getPageTimeout:300,
    capabilities: {
        browserName: "chrome",
        // unexpectedAlertBehaviour: 'accept',
        // chromeOptions: {
        //     args: ["--start-maximized"]
        // }
    },
    // require feature files
    specs: [
      '../../feature/*.feature', 
    ],
    
  
    cucumberOpts: {
     // compiler: "ts:ts-node/register",
      format: "json:../../reports/json/cucumber_report.json",
      // require step definitions
      require: [
        '../../js-files/step-definitions/*.step.js','../../js-files/support/*.js'],
        //tags:"@login"
    },
    beforeLaunch: function () {
      require('ts-node/register');
  },
  
    onPrepare(){
       browser.waitForAngularEnabled(false);
       //browser.get("https://www.google.co.in/");
       browser.manage().window().maximize();
       CucumberReporter.createDirectory(reportsFolder);
    },
    onComplete: () => {
     CucumberReporter.createHTMLReport();
   }
  };