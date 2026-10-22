import {test, expect} from "@playwright/test"


test.skip("mouse operations@regression", async ({page})=>{
    // await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    // await page.waitForTimeout(2000);
    // await page.getByText("right click me", {exact: true}).click({button:"right"})
    
    // await page.reload();
    // await page.waitForTimeout(2000);
    // await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick();
    //    await page.waitForTimeout(4000);

    //     await page.goto("https://testautomationpractice.blogspot.com/")
    // // scrollIntoViewIfNeeded()
    // // await page.getByText("Download Files", {exact: true}).scrollIntoViewIfNeeded()
    // await page.getByText("Download Files", {exact: true}).click();
    // await page.waitForTimeout(4000);
    // await page.locator("#input1").fill("Testing");
    // await page.waitForTimeout(4000);
    // await page.locator("#inputText").fill("Scroll Up");
    // await page.waitForTimeout(4000);
    // await expect(page.locator("#inputText")).toHaveValue("Scroll Up");
    // await page.waitForTimeout(4000);

    // Note: Playwright by defualt perform the scrolling on the page
    //  await page.goto("https://testautomationpractice.blogspot.com/")
    // const sourceElement = await page.locator("div#draggable")
    // const targetElement = await page.locator("div#droppable")

    // dragTo(targetlocator)

//    // await sourceElement.dragTo(targetElement)

//    await sourceElement.hover()
//    await page.mouse.down()
//    await targetElement.hover()      
//    await page.mouse.up()
//    await expect(page.locator("div#droppable p")).toHaveText("Dropped!");
//    await page.waitForTimeout(4000);

await page.goto("https://www.spicejet.com/")
    // hover() - Hover over an element
    await page.getByText("Travel Policies", {exact:true}).hover()
    await page.waitForTimeout(4000);

    await expect(page.getByTestId("test-id-Baggage Information")).toBeVisible()
    await page.waitForTimeout(4000);
    await page.getByText("Passenger Rights").click();
   
   })
