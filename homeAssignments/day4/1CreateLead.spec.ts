import { test } from "@playwright/test";

test(`Create Lead`,async ({page}) =>{
    await page.goto("https://login.salesforce.com/");
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill('RaviSalesTest#1432');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    await page.locator(`.slds-icon-waffle`).click();
    await page.locator(`//button[@aria-label='View All Applications']`).click();
    await page.locator(`//p[text()='Sales']`).click();
    await page.locator(`//a[@title='Leads']`).click();
    await page.locator(`//a[@title='New']`).click();
    await page.locator(`//button[@name='salutation']`).click();
    await page.locator(`//*[text()='Mr.']`).click();
    await page.locator(`//input[@name='lastName']`).fill('TestUser');
    await page.locator(`//input[@name='Company']`).fill('TestCompanyName');
    await page.locator(`//button[@name='SaveEdit']`).click();
})