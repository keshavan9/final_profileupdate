
import {test, expect} from "@playwright/test"

test("Handling multiple windows", async ({page, context})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('//*[@id="Tabbed"]/a/button').click();
    const page1=await page.waitForEvent("popup");
  
    const newpage= await page1;
    await newpage.getByText("Downloads",{exact:true}).click();
    await expect(newpage).toHaveURL("https://www.selenium.dev/downloads/");

})