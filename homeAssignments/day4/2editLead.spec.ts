import { test } from "@playwright/test";

test(`Edit Lead`,async ({page}) =>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill('crmsfa');
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`#label`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`#createLeadForm_companyName`).fill('DemoCompanyName');
    await page.locator(`#createLeadForm_firstName`).fill('DemoFirstName');
    await page.locator(`#createLeadForm_lastName`).fill('DemoLastName');
    await page.locator(`.smallSubmit`).click();
    await page.locator(`//a[text()='Edit']`).click();
    await page.locator(`#updateLeadForm_companyName`).fill('updatedCompanyName');
    await page.locator(`//input[@value='Update']`).click();
})