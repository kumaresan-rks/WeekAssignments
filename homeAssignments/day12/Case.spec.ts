import { expect, test } from "@playwright/test";
import dotenv from "dotenv"

dotenv.config({ path: `Data/salesForceLogin.env` })

let token: any;
let inst_url: any;
let tokenType: any;
let id: any;
let firstOpportunityID: any;
let caseNumber: any;


test.describe.serial(`Salesforce Case API testing`, async () => {

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



    test(`Create a Opportunity in Salesforce`, async ({ request }) => {
        const response = await request.post(`${inst_url}/services/data/v62.0/sobjects/Case`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                },
                data: {
                    "status": "Escalated",
                    "Origin": "Email"
                }
            })

        await expect(response).toBeOK();
        expect(response.status()).toBe(201);
        const respBody = await response.json();
        id = respBody.id;
        console.log(`Opportunity ID Created: ${id}`);
    })


    test(`Fetch a specific Opportunity in Salesforce`, async ({ request }) => {

        const response = await request.get(`${inst_url}/services/data/v62.0/sobjects/Case/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                }
            })
        await expect(response).toBeOK();
        expect(response.status()).toBe(200);
        const rBody = await response.json();
        caseNumber = rBody.CaseNumber;
        console.log(`Case Number of id "${id}" is ${caseNumber}`);
    })

    test(`Update a case created with API Call`, async ({ context, page }) => {
        const salesForceHomePgTitle = <string>process.env.SF_HomePageTile;
        const url = <string>process.env.BaseUrl;
        const userName = <string>process.env.SF_Username;
        const passWord = <string>process.env.SF_Password;
        const status = `Working`;
        const priority = `Low`;
        const caseOrigin = `Phone`;
        const slaViolation = `No`;
        await page.setViewportSize({ width: 1550, height: 800 });
        //Login to Salesforce with Credentials from .env
        await page.goto(url);
        await page.locator(`#username`).fill(userName);
        await page.locator(`#password`).fill(passWord);
        await page.locator(`#Login`).click();
        await page.waitForSelector(`.slds-icon-waffle`, { state: 'visible' });
        await expect(page).toHaveTitle(salesForceHomePgTitle);
        //verify successful login to the Salesforce homepage

        await page.waitForSelector(`//button[text()='Learn More']`, { state: `visible` });
        await page.locator(`.slds-icon-waffle`).click();//Click App Launcher icon
        await page.waitForSelector(`//p[text()='Salesforce Chatter']`, { state: `visible` });

        // //The main navigation menu expands, displaying various options
        await page.getByText(`View All`, { exact: true }).click();
        //Click View All
        await page.waitForSelector(`//p[text()='Service']`, { state: `visible` });
        await page.getByPlaceholder(`Search apps or items...`).fill(`Cases`);
        //Enter Dashboards in App Launcher search box 
        const caseLinkLocator = page.locator(`text='Cases'`);
        await expect(caseLinkLocator).toBeVisible();
        //The Dashboards link is displayed
        await caseLinkLocator.click();
        //Click Dashboards 
        await page.waitForLoadState(`domcontentloaded`);
        await page.waitForSelector(`//a[@title='New']`, { state: 'visible' });
        await page.getByRole(`searchbox`, { name: `Search this list...` }).fill(caseNumber);
        await page.keyboard.press(`Enter`);
        await page.locator(`//span[text()='` + caseNumber + `']`).click();
        await page.waitForSelector(`//button[@name='Delete']`, { state: `visible` });
        await page.waitForSelector(`//button[@title='Share']`, { state: `visible` });
        await page.locator(`//button[@name='Edit']`).click();
        await page.waitForSelector(`//button[@name='SaveEdit']`, { state: 'visible' });
        await page.getByRole(`combobox`, { name: `Status` }).click();
        await page.locator(`//span[text()='` + status + `']`).click();
        await page.getByRole(`combobox`, { name: `Priority` }).click();
        await page.locator(`//span[text()='` + priority + `']`).click();
        await page.getByRole(`combobox`, { name: `Case Origin` }).click();
        await page.locator(`//span[text()='` + caseOrigin + `']`).click();
        await page.getByRole(`combobox`, { name: `SLA Violation` }).click();
        await page.locator(`//span[text()='` + slaViolation + `']`).click();
        await page.click(`//button[@name='SaveEdit']`);
        await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'visible' });
        await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'hidden' });
        const statusLocator = page.locator(`//span[text()='Status']/../following-sibling::div//lightning-formatted-text`);
        await expect(statusLocator).toHaveText(status);
        console.log(`Case Number "${caseNumber}" with id "${id}" Updated...`);
    })

    test(`Delete a Case in Salesforce`, async ({ request }) => {

        const response = await request.delete(`${inst_url}/services/data/v62.0/sobjects/Case/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                }
            })
        await expect(response).toBeOK();
        expect(response.status()).toBe(204);
        console.log(`Case  "${id}" Deleted....`);
    })
})
            