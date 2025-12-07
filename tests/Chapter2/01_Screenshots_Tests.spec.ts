import { test, expect } from "@playwright/test";
//write a test
test('Capture Screenshots in Playwright', async ({ page }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/@testerstalk");
    //Elemet screenshot
    await page.locator("#page-header-container").screenshot({path: './screenshoots/ElementScreenshot.png'});
    //Page Screenshot
    await page.screenshot({path: './screenshoots/PageScreenshot.png'});
    // Full Page Screenshot
    await page.screenshot({path: './screenshoots/FullPageScreenshot.png', fullPage: true});

});