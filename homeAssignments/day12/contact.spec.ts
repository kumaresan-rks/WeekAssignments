import { expect, test } from "@playwright/test";



let token: any;
let inst_url: any;
let tokenType: any;
let firstContactID: any;
let firstContactName: any;

test.describe.serial(`Salesforce Contact API testing`, async () => {

    test(`Create a new contact `, async ({ context, page }) => {

        await page.goto(`https://login.salesforce.com/?locale=in`, { waitUntil: "domcontentloaded" });
        await page.locator(`#username`).fill(`kumar13@testleaf.com`);
        await page.locator(`#password`).fill(`test1234`);
        await page.locator(`#Login`).click();
        await expect(page).toHaveTitle(`Lightning Experience`);
        await page.locator(`.slds-icon-waffle`).click();
        await page.getByText(`View All`, { exact: true }).click();
        await page.getByPlaceholder(`Search apps or items...`).fill(`Contacts`);//Enter Contacts in App Launcher search box 
        const contactLinkLocator = page.locator(`text='Contacts'`);
        await expect(contactLinkLocator).toBeVisible();
      await page.waitForTimeout(3000); 
        //The Contacts link is displayed
        await contactLinkLocator.click();//Click Contacts 
         await page.getByRole(`button`, { name: `New` }).click();
        await page.getByRole(`combobox`, { name: `Salutation` }).click();
        await page.locator(`//span[text()='Ms.']`).click();
         await page.getByPlaceholder(`First Name`).fill('kumar');// Enter First Name  
        await page.getByPlaceholder(`Last Name`).fill('r');//Enter Last Name  
        await page.getByRole(`textbox`, { name: `Email` }).fill('rkumaresanrk19@gmail.com');// Enter email  
        await page.getByRole(`combobox`, { name: `Account Name` }).click();
        await page.locator(`//span[@title='New Account']`).click();// Create a New Account for Account Name 
        await page.getByRole(`textbox`, { name: `Account Name` }).fill('kumar');//Enter account name as 'Credits' and save 
        await page.getByRole(`button`, { name: `Save` }).click();
       await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'visible' });
        await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'hidden' });
        await page.waitForSelector(`//h2[text()='New Contact']`, { state: `visible` });
        //await page.getByPlaceholder('Credits').waitFor({ state: `visible` });
        await page.locator(`//button[text()='Save']`).click();//Click and save 
        await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'visible' });
        await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'hidden' });
        const actualName = await page.locator(`//div[@class='slds-media__body']/h1//lightning-formatted-name`).innerText();
       expect(actualName).toContain('kumar');  
    })

     test(`Generate a token`, async ({ request }) => {


        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                     "grant_type": "password",
                    "client_id": "3MVG9GCMQoQ6rpzT7SBzF.GYeUg56ly0weP2POqs2mOjbHWjtAKCc_T6R9Z89DFfuSD5KmdB0ZmOcL18f9S8D",
                    "client_secret": " D2C0B5B4E1F217974E74880C5ECE3A7593FFB783AABA2F3256CFB97E59810F24",
                    "username": "kumar13@testleaf.com",
                    "password": "test1234"
                }
            }
        )
        await expect(response).toBeOK();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(`Token generated : `);
        console.log(responseBody);
        token = responseBody.access_token;
        inst_url = responseBody.instance_url;
        tokenType = responseBody.token_type;
    })

    test(`Fetch a first recent Contact in Salesforce`, async ({ request }) => {
        //Fetch the first recent cantact using API Call and verify the name of the Contact with the cantact created in UI
        const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Contact`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                }
            })
        await expect(response).toBeOK();
        expect(response.status()).toBe(200);
        const rBody = await response.json();
        firstContactID = rBody.recentItems[0].Id;
        firstContactName = rBody.recentItems[0].Name;
        console.log(`First Contact fetched : ${firstContactID}`);
        expect(firstContactName).toContain('kumar');       
        console.log(rBody);
    })

    test(`Update a specific Contact in Salesforce`, async ({ request }) => {
        //Update Phone ,Email,Tilte ,Department of the contact
        const response = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Contact/${firstContactID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                },
                data: {
                    "Phone": "8610025430",
                    "Email": "rkumaresan@gmail.com",
                    "Title": "Lead",
                    "Department": "IT"
                }
            })
        await expect(response).toBeOK();
        expect(response.status()).toBe(204);
        console.log(`Contact ${firstContactID} updated`);
    })

    test(`Delete a Specific Contact in Salesforce`, async ({ request }) => {
        //Delete the Contact
        const response = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Contact/${firstContactID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                }
            })
        await expect(response).toBeOK();
        expect(response.status()).toBe(204);
        console.log(`Contact Deleted : ${firstContactID}`);
    })
   
})