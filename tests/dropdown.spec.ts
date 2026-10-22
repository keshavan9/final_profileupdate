import {test, expect} from "@playwright/test"

// test("login test", async ({page}) =>{
//     test.setTimeout(120000);
//     await page.goto("https://demoqa.com/select-menu");
//     await page.getByText("//div[text()='Select Option']").click();
//     // await page.getByPlaceholder("Select Option").click();
//     page.waitForTimeout(2000);
//     await page.locator("div#react-select-2-option-1-0").click();
// })

test.skip("login test", async ({page})=>{

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click();
    await page.locator("#react-select-2-option-2").click();
    await page.waitForTimeout(2000);
    // await page.locator("#selectMenuContainer").click();
    await page.locator("#oldSelectMenu").selectOption({value:"3"});
    await page.waitForTimeout(2000);
    await page.locator("#oldSelectMenu").selectOption({label:"Purple"});
       await page.waitForTimeout(2000);
    await page.locator("//*[@id='selectMenuContainer']/div[7]/div/div/div/div[2]/div").click();
 await page.waitForTimeout(2000);
 
})