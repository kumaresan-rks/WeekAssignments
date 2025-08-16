import {expect ,test} from "@playwright/test";

 test(`Creart Lead`,async ({page})=>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`#username`).fill(`demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`//*[@class="decorativeSubmit"]`).click(); 
await  page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
page.waitForTimeout(3000)
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Find Leads']`).click();
await page.locator(`//input[@id="ext-gen248"]`).fill(`namee`);
await page.locator(`//button[@id="ext-gen334"]`).click();
await page.locator(`(//a[@class="linktext"])[4]`).click(); 
await page.locator(`(//a[@class="subMenuButton"])[3]`).click(); //input[@id="updateLeadForm_companyName"]
await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill(`nameeku`);
await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`7`);
await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill(`mech`); 
await page.locator(`//*[@id="updateLeadForm_description"]`).fill(`now enter data`)
await page.locator(`(//input[@class="smallSubmit"])[1]`).click();

const pagename = await page.title();

console.log(pagename);
const actualDescription = page.locator('#viewLead_description_sp');
await expect(actualDescription).toContainText(`now enter data`);



 })


    
    

