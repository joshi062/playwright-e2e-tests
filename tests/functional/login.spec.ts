import { test, expect } from '@playwright/test'
test.describe.("Login functionality", () => {

    test.beforeEach("Go to login page", async ({ page }) => {

        await page.goto('https://katalon-demo-cura.herokuapp.com/')
        await page.locator('.toggle').first().click()
        await page.getByRole('link', { name: 'Login' }).click()

    })

    test('Should Login successfully', { tag: '@smoke' }, async ({ page }) => {

        await page.getByLabel('Username').fill('John Doe')
        await page.getByLabel('Password').fill('ThisIsNotAPassword')
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page.locator('h2')).toHaveText('Make Appointment')
    })


    test('Should prevent login with incorrect creds', { tag: '@smoke' }, async ({ page }) => {

        await page.getByLabel('Username').fill('John Smith')
        await page.getByLabel('Password').fill('ThisIsNotAPassword')
        await page.getByRole('button', { name: 'Login' }).click()
        await page.getByText('Login failed! Please ensure').click();
        await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

    })


})
