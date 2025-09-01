import { expect, test } from "@playwright/test"
import credentials from "../../Data/salesforc.json";
test(`Learn to automate the file upload process ${credentials[0].TcaseId}`, async ({ page }) => {
    const url = credentials[0].URL;
    const userName = credentials[0].Username;
    const passWord = credentials[0].Password;

    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.locator(`#username`).fill(userName);//Enter username
    await page.locator(`#password`).fill(passWord);//Enter password 
    await page.locator(`#Login`).click();//Click Login 

    //await page.waitForSelector(`//button[text()='Learn More']`, { state: `visible` });

    //Click App Launcher icon
    await page.locator(`.slds-icon-waffle`).click();

    await page.waitForSelector(`(//p[@class="slds-truncate"])[5]`, { state: `visible` });//navigation app show 

    //click View All
    await page.getByText(`View All`, { exact: true }).click();


    await page.getByPlaceholder(`Search apps or items...`).fill(`Accounts`);
    //await page.locator(`text='Accounts'`).click();
    await page.click(`text='Accounts'`);

    // click new
    await page.waitForSelector(`//span[text()='Recently Viewed']`, { state: `visible` });
    await page.locator(`//div[@title="New"]`).click();

    await page.waitForSelector(`text='New Account'`, { state: `visible` });

    // enter name
    await page.locator(`//input[@name='Name']`).fill(`kumar`);

    //Select Prospect from the rating dropdown 
    await page.getByRole(`combobox`, { name: `Rating` }).click();
    await page.click(`text=Warm`);

    //Select Prospect from the Type dropdown 
    await page.getByRole(`combobox`, { name: `Type` }).click();
    await page.click(`text=Prospect`)

    //Select Banking from the Industry dropdown 
    await page.getByRole(`combobox`, { name: `Industry` }).click();
    await page.click(`text=Banking`);

    //Select Public from the Ownership dropdown
    await page.getByRole(`combobox`, { name: `Ownership` }).click();
    await page.click(`text=Public`);

    //Click Save 
    await page.click(`//button[@name='SaveEdit']`);
    //await page.getByRole(`button`, { name: `save` })

    //Assert the Account 
    //const actualToastMsg = await page.locator(`//span[contains(@class,'toastMessage')]`).innerText();
    //expect(actualToastMsg).toStrictEqual(`Account \"kumar\" was created.`);

    //Upload files
    const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"), page.locator(`//a[@title='Upload Files']`).click()]);
    await fileUpload.setFiles("Data/fileupload.txt");

    //Click Done
    const doneSlector = page.locator(`//span[text()='Done']`);
    await doneSlector.waitFor({ state: `attached` });
    await doneSlector.click();

    //assert the uploaded file
    await expect(page.locator(`//span[contains(@class,'toastMessage')]`)).toHaveText(`1 file was added to the Account.`);
    let tit = await page.locator(`//div[@class='filerow']/div[2]/div[2]/span`).getAttribute(`title`)
    await expect(tit).toBe(`fileupload`);
    await page.waitForTimeout(3000);

})