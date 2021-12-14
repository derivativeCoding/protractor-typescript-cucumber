import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import { platform } from "os";
import * as path from "path";
import { browser } from "protractor";
const jsonReport = path.join(process.cwd(), "/reports/json");
const htmlReport = path.join(process.cwd(), "/reports/html");
const targetJsonFile = jsonReport + "/cucumber_report.json";
//let osName:string=platform.name;
//let browserNameVersion:string=browser.name + browser.version;


const cucumber_report_options = {
    jsonFile: targetJsonFile,
    output: htmlReport + "/cucumber_report.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap" as const,
    launchReport:true,
    scenarioTimestamp:true,
    metadata: {
                  "Test Environment": "TESTING",
                  //"Browser": browserNameVersion,
                  //"Platform": osName,
              }
};

export class CucumberReporter {

    public static createDirectory(dir: string) {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir,{recursive:true});
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(jsonReport,{recursive:true})
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumber_report_options);
        } catch (err) {
            if (err) {
                throw new Error("Failed to save test results in reporter generate" +err);
            }
        }
    }
}
