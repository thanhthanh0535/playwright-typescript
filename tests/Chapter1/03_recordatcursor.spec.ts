//Import playwright module
import { test, expect } from "@playwright/test";

//write a test
test("My Second Playwright TypeScript Test-recordcursor", async ({ page }) => {
    // go to url
    await page.goto("https://www.google.com/");
    //Search with keywords
    await page
        .getByLabel("Search", { exact: true })
        .fill("Playwright by tester talk");
    await page.getByLabel("Search", { exact: true }).press("Enter");
    //Click on  playlist
    await page
        .getByRole("link", {
            name: "Playwright By Tester Talk",
        })
        .first()
        .click();
    //Validate web page title
    await expect(page).toHaveTitle(
        "Playwright by Testers Talk ✅ - YouTube"
    );

    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
    await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
    await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
});
