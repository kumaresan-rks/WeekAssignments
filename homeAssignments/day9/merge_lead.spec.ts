import { expect, test } from "@playwright/test";
import credentials from "../../Data/login.json";

test(`To merge the leads created  ${credentials[0].TcaseId}`, async ({ context, page }) => {

    const url = credentials[0].Url;
    const userName = credentials[0].Username;
    const passWord = credentials[0].Password;

    await page.goto(url);
    await page.locator(`#username`).fill(userName);//Enter the username
    await page.locator(`#password`).fill(passWord);//Enter the password
    await page.locator(`.decorativeSubmit`).click();//Click the Login button

    //await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.click(`//a[contains(text(),'CRM/SFA')]`)


    await page.locator(`//a[text()='Leads']`).click();//Click Leads 
    //await page.locator(`#ext-gen612`).click()

    await page.getByRole(`link`, { name: `Merge Leads` }).click();
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    //await page.getByRole(`image`,{name:`Lookup`}).click();
    //await page.locator(`//td[@id="ext-gen618"]/a`).click();
    //await page.locator("//img[@alt='Lookup']").click();
    await page.locator(`//*[text()='From Lead']/../following-sibling::td/a`).click();
    //Click From Lead widget
    let [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='From Lead']/../following-sibling::td/a`).click()]);
    await newPage.locator(`(//table[@class='x-grid3-row-table'])[1]/tbody/tr[1]/td[1]//a`).click();
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });

    [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='To Lead']/../following-sibling::td/a`).click()]);//Click To Lead widget 
    await newPage.waitForSelector(`text='Find Leads'`, { state: 'visible' });
    await newPage.locator(`(//table[@class='x-grid3-row-table'])[2]/tbody/tr[1]/td[1]//a`).click();//Select the second resulting lead id
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    await page.on(`dialog`, async (alert) => {
        const messageReturned = alert.message();
        console.log(`The message says ${messageReturned}`);
        const typeReturned = alert.type()
        console.log(`The type of the alert is ${typeReturned}`);
        await alert.accept();
        })    //Accept the alert 
        await page.click(`//a[text()='Merge']`);//Click Merge button
    await page.waitForSelector(`text='View Lead'`, { state: 'visible' });
    await expect(page).toHaveTitle('View Lead | opentaps CRM');//Assert the title of the page 
    await page.waitForTimeout(3000);
    
});




