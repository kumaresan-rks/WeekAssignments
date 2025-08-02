import { test } from "@playwright/test";

test(`Create Individuals`,async ({page}) =>{
    await page.goto("https://login.salesforce.com/");
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill('RaviSalesTest#1432');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    await page.locator(`.slds-icon-waffle`).click();
    await page.locator(`//button[@aria-label='View All Applications']`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//p[text()='Individuals']`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//*[@class='slds-button slds-button--neutral slds-button_neutral']`).click();
    const InputValue = 'IndLastName';
    await page.locator(`//input[@placeholder='Last Name']`).fill(InputValue);
    await page.locator(`//span[text()='Save']`).click();
    let lastnameRetrived = await page.locator(`//div[@class='entityNameTitle slds-line-height_reset']//..//span`).textContent();
    console.log(lastnameRetrived);
    console.log(InputValue === lastnameRetrived);   

    await page.locator(`//a[@title='Edit']`).click();
    await page.locator(`//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']`).click();
    await page.locator(`//*[text()='Mr.']`).click();
   // let salutation = page.locator(`//*[text()='Mr.']`).click();
    const InputFirstName = 'TestFirstName';
    await page.locator(`//input[@placeholder='First Name']`).fill(InputFirstName);
   // await page.waitForTimeout(8000);
    await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click();
    })
