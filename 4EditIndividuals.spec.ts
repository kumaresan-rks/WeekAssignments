import { test } from "@playwright/test";

test(`Edit Individuals`,async ({page}) =>{
    await page.goto("https://login.salesforce.com/");
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill('RaviSalesTest#1432');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    await page.locator(`.slds-icon-waffle`).click();
    await page.locator(`//button[@aria-label='View All Applications']`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//p[text()='Individuals']`).click();
    const InputValue = 'IndLastName';
    await page.locator(`//input[@name='Individual-search-input']`).fill(InputValue);
    await page.keyboard.press('Enter');
    await page.locator(`(//*[@role='rowheader'])[1]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[@title='Edit']`).click();
    await page.locator(`//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']`).click();
    await page.locator(`//*[text()='Mr.']`).click();
    const InputFirstName = 'TestFirstName';
    await page.locator(`//input[@placeholder='First Name']`).fill(InputFirstName);
    await page.waitForSelector(`//button[@title='Save']`);
    await page.locator(`//button[@title='Save']`).click();
    let actualName = await page.locator(`(//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text'])[1]`).textContent();   
    console.log(actualName);
    const expectedFullName = `Mr. ${InputFirstName} ${InputValue}`;
    console.log(actualName === expectedFullName);
    })