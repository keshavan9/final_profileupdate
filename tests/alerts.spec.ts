
import {test, expect} from "@playwright/test"

test.skip("@skip Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // Before you click on an element which is responsible for generation of an alert, we need to wait for "dialog" event to appear on the page. Because playwright handles the dialog event by self or there might be a chances of missing the event as well.

    // page.on("dialog", function(dialog){...})
    // "dialog" refers an object of "Dialog" class

    // dialog.accept(argument) - To click on OK/Submit/Yes 
    // dialog.dismiss() - To click on Cancel/No
    // dialog.message() - To get the text displayed on the alert

    // waitForEvent()

    let prompt = "Testing"

    await page.on("dialog", async (dialog)=>{
        await console.log(dialog.message())
        await page.waitForTimeout(4000);
        await dialog.accept(prompt)
    })

    // await page.locator("#alertButton").click()

    // await page.locator("#confirmButton").click()
    // await expect.soft(page.locator("#confirmResult")).toHaveText("You selected Ok")

    // await page.locator("#promtButton").click()
    // await expect(page.locator("#promptResult")).toHaveText(`You entered ${prompt}`)
})
