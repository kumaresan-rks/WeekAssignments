import {  expect, test } from "@playwright/test";

test(`Learn to Handle DropDown`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    const url =page.url();
    const title = await page.title();

    console.log(`the url is ${url}`);
    console.log(`the title is ${title}`);

    //page assertion
    await expect(page).toHaveTitle(title);
    await expect(page).toHaveURL(url)

    //generic assertion
    const username = page.locator(`//input[@id='username']`);
    await username.fill(`demosalesmanager`);
    await expect(username).toHaveValue(`demosalesmanager`);

     await page.locator(`//input[@id='password']`).fill(`crmsfa`);

      const loginButton = page.locator(`//input[@class='decorativeSubmit']`);
      //Locater assertion
    await expect(loginButton).toBeVisible();
    await loginButton.click()

    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Testleaf");
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Ravindran`);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`R`)
// drobdoen selection
    await page.waitForTimeout(2000)
    await page.selectOption(`#createLeadForm_dataSourceId`,{value:"LEAD_DIRECTMAIL"})
    //await page.selectOption("#createLeadForm_dataSourceId", { value: "LEAD_DIRECTMAIL" });

    //dropdown count and print
    //const path = await page.locator(`#createLeadForm_dataSourceId`); // count 1
     const path = await page.locator(`#createLeadForm_dataSourceId>option`); // count 13 (option)
    const count = await path.count();
        console.log(`the dropdown count number is ${count}`);

    //use for loop using count xpath
   for (let index = 0; index < count; index++) {
        const valu= await path.nth(index).innerText();// print all valu
        console.log(valu);       
        
    }
     

await page.locator(`[name="submitButton"]`).click();// lead create

//view status value xpath
  const statusLocator = page.locator(`#viewLead_statusId_sp`);

 //Locator Assertion
    await expect(statusLocator).toBeVisible() // check if the locator is available


    const statusText = await statusLocator.textContent();


    console.log(`The status is ${statusText}`);


    await expect(statusLocator).toHaveText("Assigned");


    



})