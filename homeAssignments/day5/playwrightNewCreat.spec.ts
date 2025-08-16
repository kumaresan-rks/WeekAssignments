import {expect ,test} from "@playwright/test";

 test(`Creart Lead`,async ({page})=>{

await page.goto(`https://login.salesforce.com/`);
 await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`);
 await page.getByLabel(`Password`).fill(`RaviSalesTest#1432`);
 await page.locator(`#Login`).click();
await page.waitForLoadState('domcontentloaded');
const homePageURL = `https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home`;
const pageTitle=`Lightning Experience`;

const pageis = await page.title();
console.log(`hi is my ${pageis}`);
await expect(page).toHaveTitle(pageis); 
const titleis = await page.url();
console.log(titleis);
 await expect(page).toHaveURL(homePageURL);//Verify the title of the page using appropriate assertions
    await expect(page).toHaveTitle(pageTitle);
     await page.locator(`//div[@class="slds-icon-waffle"]`).click();//Click App Launcher using the class locator
     await page.waitForLoadState(`domcontentloaded`);
      await page.getByText(`View All`, { exact: true }).click();//Click View All using getByTextawait page.locator(`(//button[@class="slds-button"])[2]`).click();
     await page.waitForLoadState(`domcontentloaded`);
     await page.getByPlaceholder(`Search apps or items...`).fill(`Service`);
     
     await page.locator(`(//mark[text()='Service'])[1]`).click();
     await page.waitForSelector(`(//mark[text()='Service'])[1]`, { state: 'hidden' });
      await page.locator(`//a[@title="Accounts"]`).click();
       await page.getByRole(`button`, { name: "New" }).click();
      await page.locator(`//input[@id="input-454"]`).click();
      await page.locator(`//*[@class="slds-button slds-button_brand"]`).click();
 })