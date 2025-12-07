//Import playwright module
import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Running before all tests...");
});

test.beforeEach (async ({page}) => {
    await page.goto("https://www.google.com/");
    console.log("Running before each test...");
});

test.afterEach (async () => {
    console.log("Running after each test...");
});
test.afterAll(async () => {
    console.log("Running after all tests...");
});

    //write a test
test("Test 1", async ({ page }) => {
    console.log("Test1 execution started...");
    // go to url
    //await page.goto("https://www.google.com/");

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
})
//write a test
test("Test 2", async ({ page }) => {
    console.log("Test2 execution started...");
    // go to url
    //await page.goto("https://www.google.com/");

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

