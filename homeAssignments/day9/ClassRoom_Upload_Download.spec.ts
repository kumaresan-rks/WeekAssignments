import { expect, test } from "@playwright/test"
import path from "path";

test.describe.serial('Sequential Test Suite', () => {
    test(`FileUpload`, async ({ page }) => {
        await page.goto(`https://the-internet.herokuapp.com/upload`);
        const uploadFile = page.locator(`(//input[@type="file"])[1]`);
        await uploadFile.setInputFiles([path.join(__dirname, '../../Data/fileupload.txt')]);
        const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"), page.locator(`#drag-drop-upload`).click()]);
        await fileUpload.setFiles("Data/kumaresan.jpg")
        //✔ Assert that the file has been uploaded
        await expect(page.locator(`(//div[@id='drag-drop-upload']//span)[2]`)).toHaveText(`✔`);
    })
    test(`FileDownload`, async ({ page }) => {
        page.goto(`https://the-internet.herokuapp.com/download`,{ waitUntil: "domcontentloaded" });

        await page.waitForLoadState(`domcontentloaded`);
        const downloadLinkList = page.locator(`//*[text()='File Downloader']/following-sibling::a`);
        //Download file.json from the list of files 
        for (let index = 0; index < await downloadLinkList.count(); index++) {
            let text = (await downloadLinkList.nth(index).innerText()).toString();
            if (text.includes(`.json`)) {
                const [fDown] = await Promise.all([page.waitForEvent("download"), downloadLinkList.nth(index).click()]);
                let fileName = path.join(__dirname, "../../Data", fDown.suggestedFilename());
                console.log(fileName);
                await fDown.saveAs(fileName);
                let fs = require('fs');
                expect(fs.existsSync(fileName)).toBeTruthy();//Assert that the file has been downloaded in the required path
                const fileContent = fs.readFileSync(fileName, 'utf8');
                console.log(fileContent);//contents in the each JSON file

            }



        }
    })
})
