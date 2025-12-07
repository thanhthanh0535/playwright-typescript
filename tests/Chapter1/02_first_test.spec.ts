//Import playwright module
import { test, expect } from "@playwright/test";

//write a test
test("My First Playwright TypeScript Test", async ({ page }) => {
    // go to url
    await page.goto("https://www.google.com/");
    //Search with keywords
    await page
        .getByLabel("Search", { exact: true })
        .fill("Playwright by tester talk");
    await page.getByLabel("Search", { exact: true }).press("Enter");
    //Click on  playlist
    await Promise.all([
        page.waitForNavigation(),
        page
            .getByRole("link", {
                name: "Playwright By Tester Talk",
            })
            .first()
            .click(),
    ]);
    //Validate web page title
    await expect(page).toHaveTitle(
        "Playwright by Testers Talk ✅ - YouTube"
    );
});
