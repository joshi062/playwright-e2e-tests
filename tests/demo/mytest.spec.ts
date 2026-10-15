import { test, expect } from '@playwright/test'


test('Should load home page with correct title', async ({ page }) => {

    //1. Go to application - https://katalon-demo-cura.herokuapp.com
    await page.goto('https://katalon-demo-cura.herokuapp.com')

    //2. Validate the page title

    await expect(page).toHaveTitle('CURA Healthcare Service')

    //3. Validate the header title
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service')
})