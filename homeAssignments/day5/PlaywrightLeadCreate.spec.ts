
import {expect ,test} from "@playwright/test";

 test(`Creart Lead`,async ({page})=>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`#username`).fill(`demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`//*[@class="decorativeSubmit"]`).click();

// Click CRM/SFA 
     page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
      await page.locator(`//a[text()='Create Lead']`).click();

      await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`name`);
       await page.locator(`//*[@id="createLeadForm_firstName"]`).fill(`namee`);
       await page.locator(`(//input[@name="lastName"])[3]`).fill(`n`);
       
      await page.locator(`//input[@id="createLeadForm_firstNameLocal"]`).fill(`namee`);
      await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`r`);
      await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill(`k`);
      await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`test`);
      await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`5`);
      await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill(`me`);
      await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`9877636736`);
      await page.locator(`//input[@name="submitButton"]`).click();
      await page.waitForTimeout(5000);

        const excompanyName = `name`
        const exfirstName =`namee`
        const exlastName =`r`
         
         const pageTitle =await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(`View Lead | opentaps CRM`);

      const actualCompanyName = page.locator('#viewLead_companyName_sp');
      await expect(actualCompanyName).toContainText(excompanyName);

     
    
     const actualFirstName = page.locator('#viewLead_firstName_sp');
     await expect(actualFirstName).toContainText(exfirstName);

     const actualLastName = page.locator('#viewLead_lastName_sp');
     await expect(actualLastName).toContainText(exlastName);  
     const status = page.locator('#viewLead_statusId_sp');
     await expect(status).toContainText(`Assigned`);


await page.waitForTimeout(5000);



})