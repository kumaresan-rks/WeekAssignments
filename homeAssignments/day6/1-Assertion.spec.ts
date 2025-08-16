import { expect, test } from "@playwright/test";


test(`Test to assert the test box`, async ({page}) => {
    
    await page.goto(`https://leafground.com/input.xhtml`);


    const disabled = page.getByPlaceholder("Disabled");

// asserrt use
    await expect(disabled).toBeDisabled();


    const textBox = page.locator(`//input[@value='Chennai']`)

// soft assert use
    await expect.soft(textBox).toBeVisible();


    await textBox.fill("tamilnadu");


    await page.waitForTimeout(3000)
})
