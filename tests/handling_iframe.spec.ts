
import {test, expect} from "@playwright/test"

test("Handling iframe", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
           const framepage= page.frameLocator("#singleframe");
           await framepage.locator("div.col-xs-6 input").first().fill("Hello World");

});
