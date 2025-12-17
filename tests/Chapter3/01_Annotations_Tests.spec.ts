//Import playwright module
import { test, expect } from "@playwright/test";

//write a test
test("Handling Dropdown list test in Playwright", async ({ page }) => {
    // go to url
    await page.goto("https://www.facebook.com/");
    await page.getByRole('button', { name: 'Create new account' }).click();

    //Select dropdown using value
    await page.getByLabel('Month').selectOption('2');

    //select dropdown using visible text
    //await page.getByLabel('Month').selectOption({ label: 'Feb' });
    await page.getByLabel('Day').selectOption('4');
    await page.getByLabel('Year').selectOption('2000');

    //select dropdown using index
    await page.getByLabel('Year').selectOption({ index: 5 });
    //Validate all the options
    await expect(page.locator('#month > option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);

});