import { expect, test } from "@playwright/test";
import { text } from "stream/consumers";
test(`Test to Handle Alert Frame`, async ({ page }) => {
  await page.goto(
  "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm",
  { waitUntil: 'domcontentloaded' }
);
page.on(`dialog`,async (alert)=>{
    const alt =alert.message();
    console.log(alt);
    const give =alert.type();
    console.log(give);
   if(give==`confirm`){
    await alert.accept();
   }
})
const frame =await page.frameLocator(`#iframeResult`);
//Click Try it inside the frame
frame.locator(`text=Try it`).click();
const realtext = frame.locator(`//p[@id="demo"]`)
//expect result
await expect(realtext).toHaveText("You pressed OK!");
const resulmessage=await realtext.textContent();
console.log(`result ${resulmessage}`);










})