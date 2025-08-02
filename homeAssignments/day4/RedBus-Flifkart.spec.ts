import { test } from "@playwright/test";

test(`Launch redbus`,async ({page}) =>{
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)
    const url = page.url()
    const title = await page.title()
    console.log(`The url of the page is ${url}`);
    console.log(`The title of the page is ${title}`);

    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)
    const urlF = page.url()
    const titleF = await page.title()
    console.log(`The url of the page is ${urlF}`);
    console.log(`The title of the page is ${titleF}`);
})