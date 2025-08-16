
import { test } from "@playwright/test";

test(`Salesforce Login `,async ({page}) =>{
    await page.goto(`https://login.salesforce.com/`);
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill(`RaviSalesTest#1432`);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(6000);
    const titlename = await page.title();
    console.log(`Title name is ${titlename}`);
    const urlname = await page.url();
    console.log(`URLname is ${urlname}`);    


//     await expect(page).toHaveTitle(`Home | Salesforce`);


//     await expect(page).toHaveURL(`https://orgfarm-767bb9207c-dev-ed.develop.lightning.force.com/lightning/page/home`);
})
