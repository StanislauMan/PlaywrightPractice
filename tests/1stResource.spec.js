const { test, expect } = require('@playwright/test')

test.describe('1st Resource testing', () => {

    test('Automate action: pressing on button with dynamic ID', async ({ page }) => {

        await page.goto('http://uitestingplayground.com/dynamicid')

        await page.getByRole('button', { 'name': 'Button with Dynamic ID' }).click()
        //await page.getByText('Button with Dynamic ID').click()
    })

    test('Automate validation for client side delay before performing an action', async ({ page }) => {

        await page.goto('http://uitestingplayground.com/clientdelay')

        await page.locator('#ajaxButton').click()
        const successBaner = await page.locator('.bg-success')
        const loader = await page.locator('i#spinner')

        await expect(loader).toBeVisible()

        await page.waitForSelector('.bg-success')
        await expect(successBaner).toBeVisible()
    })

    test('Automate actions on progress bar', async ({ page }) => {

        await page.goto('http://uitestingplayground.com/progressbar')

        const startBtn = await page.locator('#startButton')
        const stopBtn = await page.locator('#stopButton')
        const progressBar = await page.locator('#progressBar')

        await startBtn.click()

        await page.waitForFunction(() => progressBar.textContent === '75%')

        await stopBtn.click()

        await expect(progressBar).toHaveText(/7[5-8]%/)
    })

    test('Automate Shadow DOM scenario', async ({ page }) => {

        await page.goto('https://uitestingplayground.com/shadowdom')

        const generateBtn = await page.locator('#buttonGenerate')
        //const copyBtn = await page.locator('#buttonCopy')

        await generateBtn.click()

        await page.waitForSelector('#editField')

        //await copyBtn.click()   - Copy Btn doesn't work

        //workaround - to use copy/pass
        await page.locator('#editField').click()
        await page.keyboard.press('Control+KeyA')
        await page.keyboard.press('Control+KeyC')

        const textInput = await page.locator('#editField').inputValue()
        console.log('Generated id: ', textInput)

        const clipboardText = await page.evaluate('navigator.clipboard.readText()')
        console.log('Clipboard text :', clipboardText)

        await expect(clipboardText).toEqual(textInput)
    })
})