import { expect, APIRequestContext } from "@playwright/test";

let token: any;
let inst_url: any;
let tokenType: any;
let id: any;
let firstOpportunityID: any;

export async function generateToken(request: APIRequestContext) {
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
    token = responseBody.access_token;//Generate an access token and set the access token as a global variable 
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
}

export async function Create_SalesForce(request: APIRequestContext) {
     await generateToken(request)
    const response = await request.post(`${inst_url}/services/data/v59.0/sobjects/Opportunity/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "name": "opprtunitty1",
                "closedate": "2025-08-11",
                "StageName": "Qualification"
            }
        })

    await expect(response).toBeOK();
    expect(response.status()).toBe(201);
    const respBody = await response.json();
    id = respBody.id;// Create a new opportunity and set the opportunity ID as a global variable 
    console.log(`Opportunity ID Created: ${id}`);
}

export async function get_SalesForce(request: APIRequestContext) {
    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        })
    await expect(response).toBeOK();
    expect(response.status()).toBe(200);
    const rBody = await response.json();
    console.log(`Fetched opportunity ${id} with body: `);
    console.log(rBody);
}

export async function update_SalesForce(request: APIRequestContext) {
    const response = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "type": "New Customer",
                "StageName": "Prospecting"
            }
        })
    await expect(response).toBeOK();
    expect(response.status()).toBe(204);
    console.log(`Opportunity ${id} updated`);
}

export async function get_after_update_SalesForce(request: APIRequestContext) {
    const response = await request.get(`${inst_url}/services/data/v64.0/sobjects/Opportunity`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        })
    await expect(response).toBeOK();
    expect(response.status()).toBe(200);
    const rBody = await response.json();
    firstOpportunityID = rBody.recentItems[0].Id;
    console.log(`First Opportunity fetched : ${firstOpportunityID}`);
}

export async function delete_SalesForce(request: APIRequestContext) {
    const response = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${firstOpportunityID}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        })
    await expect(response).toBeOK();
    expect(response.status()).toBe(204);
    console.log(`Deleted First Opportunity : ${firstOpportunityID}`);
}