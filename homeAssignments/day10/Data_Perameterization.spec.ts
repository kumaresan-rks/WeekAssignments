import { expect, test } from "@playwright/test";
import credentials from "../../Data/Dlogin.json";
import { parse } from "csv-parse/sync"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config({ path: `Data/createLeadData.env` })

let records: any[] = parse(fs.readFileSync("Data/createLeadData.csv"), { columns: true, skip_empty_lines: true })

test(`Create a new lead parameterization  ${credentials[0].TcaseId}`, async ({ context, page }) => {

      console.log("👉 Parsed Records: ", records);

      const url = credentials[0].Url;
      const userName = credentials[0].Username;
      const passWord = credentials[0].Password;
      const source = <string>process.env.SF_Source;
      const marketingCampaign = process.env.SF_MarketingCampaign as string;
      const industry = Number(process.env.SF_Industry as string);
      const preferredCurrency = <string>process.env.SF_PreferredCurrency;
      const country = <string>process.env.SF_Country;
      const state = <string>process.env.SF_State;

      await page.goto(url, { waitUntil: "domcontentloaded" });
      await page.locator(`#username`).fill(userName);//Enter the username
      await page.locator(`#password`).fill(passWord);//Enter the password
      await page.locator(`.decorativeSubmit`).click();//Click the Login button

      await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();//Click CRM/SFA 
      await page.locator(`//a[text()='Leads']`).click();//Click Leads 
      await page.locator(`//a[text()='Create Lead']`).click();// Click Create Lead 

      await page.locator(`//input[@id='createLeadForm_companyName']`).fill(records[0].Companyname);//Fill the Company Name 
      await page.locator(`//input[@id='createLeadForm_firstName']`).fill(records[0].Firstname);//Fill the First Name
      await page.locator(`//input[@id='createLeadForm_lastName']`).fill(records[0].Lastname);// Fill the Last Name

      await page.selectOption(`#createLeadForm_dataSourceId`, { label: `${source}` });
      await page.selectOption(`#createLeadForm_marketingCampaignId`, { value: `${marketingCampaign}` });//Select Demo Marketing Campaign from 
      const dropDown = page.locator(`#createLeadForm_marketingCampaignId>option`);
      const dropDownCount = await dropDown.count();
      console.log(`No. of values in the dropdown of dropDownName = ${dropDownCount}`);
        for (let index = 0; index < dropDownCount; index++) {
            console.log(await dropDown.nth(index).innerText());// Print all the values
        }

})










