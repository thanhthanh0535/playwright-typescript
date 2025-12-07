import {test, expect} from '@playwright/test';
//Write a test
test('Locator in Playwright', async ({page}) => {
    // Go to URL
    await page.goto("https://github.com/BakkappaN");

    //getByRole
    await page.getByRole('link', {name: 'Sign in'}).click()

    //getByLabel
    await page.getByLabel('Homepage',{exact: true}).first().click();

    //GetByAltText
    await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //GetByTestId
    await page.getByTestId("projects").first().click();

    //GetByTest
    await page.getByText('Sign up').first().click();

    //GetByPlaceholder, Xpath, CSSSelector
    await page.goto("https://www.youtube.com/@testerstalk");
    await page.getByPlaceholder('Search').fill('testers talk');
    await page.locator('//input[@name="search_query"]').first().fill('testers talk');

    //GetbyTitle
    await page.goto("https://www.google.com/");
    await page.getByTitle('Search').fill('Playwright Testing');
})