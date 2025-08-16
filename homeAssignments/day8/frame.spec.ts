import { expect, test } from "@playwright/test";
test(`To test alert and asset`,async({page})=>{
    
await page.goto(`https://leafground.com/frame.xhtml`);

//Getting total no of frames in the page
    const allframes = page.frames();
    console.log(`Total number of frames in the page is ${allframes.length}`);

//Interact with the Click Me button inside frame
const firstframe = page.frameLocator(`iframe[src='default.xhtml']`);
const button = firstframe.locator(`#Click`);
await button.click();

//expect result first frame
await expect(button).toHaveText("Hurray! You Clicked Me.");

//clicking the button in nested frame

 const card = page.locator(".card").filter({ hasText: "Inside Nested frame" });
    const frame_outerframe = card.frameLocator("iframe");
    const frame_innerframe = frame_outerframe.frameLocator("iframe");
    const clkInInnerFrame = frame_innerframe.locator("#Click");
    await clkInInnerFrame.click();
    await expect(clkInInnerFrame).toContainText(`Hurray! You Clicked Me.`);
//name base frame
// const iframe = page.frame({name:"frame2"});
// await  iframe?.locator(`#click`).click();
// await iframe?.click(`#Click`);








})