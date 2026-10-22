// Step by step process to test file upload functionality

// Launch the url
// Identify the file upload element on the page
// use the "setInputFiles("path of the file")" method to upload the file to the file input element
// Verify that the files have been uploaded or not

import { test, expect } from '@playwright/test';


test("File Uploads handling @regression", async function({page}){
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // console.log(__dirname);
   await page.locator("#filesToUpload").setInputFiles(["../testdata/Courses.txt"]); 
   await page.waitForTimeout(2000);
   await expect(page.locator("#fileList li").first()).toContainText("Courses.txt");

    // console.log(__dirname) // C:\Users\prave\Downloads\PWTSJan26\tests


    // const filePath1 = path.join(__dirname, "../testdata/Courses.txt")
    // const filePath2 = path.join(__dirname, "../testdata/Cypress.txt")

    // await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    // await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    // await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")
    // await page.waitForTimeout(2000)


})

