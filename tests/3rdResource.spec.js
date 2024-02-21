const { test, expect } = require('@playwright/test')

test.describe('Automate fill text into iframe', () => {

    test('iFrame testing form', async({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/iframe')
        const iFrame = await page.frameLocator('#mce_0_ifr')
        const fieldFrame = await iFrame.locator('#tinymce')
        await expect(fieldFrame.locator('p')).toHaveText('Your content goes here.')
        await fieldFrame.fill('TEST - DATA!')

        await expect(fieldFrame.locator('p')).toHaveText('TEST - DATA!')
    })
})