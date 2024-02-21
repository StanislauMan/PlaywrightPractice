const { test, expect } = require('@playwright/test')

test.describe('Automate drag and drop action: simple and accept', () => {

    test.beforeEach(async({ page }) => {

        await page.goto('https://demoqa.com/droppable')

    })

    test('"Simple" drag and drop', async ({ page }) => {

        const dragMeItem = await page.locator('#draggable')
        const dropHere = await page.locator('.simple-drop-container .drop-box')

        // 1st approach
        await expect(page.locator('.simple-drop-container .drop-box p')).toHaveText('Drop here')

        await dragMeItem.dragTo(dropHere)

        await expect(page.locator('.simple-drop-container .drop-box p')).toHaveText('Dropped!')

        
        //2nd approach
        // await expect(page.locator('.simple-drop-container .drop-box p')).toHaveText('Drop here')

        // await dragMeItem.hover()
        // await page.mouse.down()

        // await dropHere.hover()
        // await page.mouse.up()

        // await expect(page.locator('.simple-drop-container .drop-box p')).toHaveText('Dropped!')
    })

    test('"Accept" drad and drop', async({ page }) => {

        await page.locator('#droppableExample-tab-accept').click()

        const acceptableItem = await page.locator('#acceptable')
        const dropHereArea = await page.locator('.accept-drop-container .drop-box')

        await expect(page.locator('.accept-drop-container .drop-box p')).toHaveText('Drop here')

        await acceptableItem.hover()
        await page.mouse.down()

        await dropHereArea.hover()
        await expect(dropHereArea).toHaveCSS('background-color', 'rgb(60, 179, 113)')
        await page.mouse.up()

        await expect(page.locator('.accept-drop-container .drop-box p')).toHaveText('Dropped!')
    })

    test('"Accept" drag and drop - negative case', async({ page }) => {

        await page.locator('#droppableExample-tab-accept').click()

        const notAcceptableItem = await page.locator('#notAcceptable')
        const dropHereArea = await page.locator('.accept-drop-container .drop-box')

        await expect(page.locator('.accept-drop-container .drop-box p')).toHaveText('Drop here')

        await notAcceptableItem.hover()
        await page.mouse.down()

        await dropHereArea.hover()
        await expect(dropHereArea).not.toHaveCSS('background-color', 'rgb(60, 179, 113)')
        await page.mouse.up()

        await expect(page.locator('.accept-drop-container .drop-box p')).toHaveText('Drop here')
    })
})
