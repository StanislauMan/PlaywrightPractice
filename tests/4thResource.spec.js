const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/LoginPage'
import { CustomerPage } from '../pages/CustomerPage'
import { HomePage } from '../pages/HomePage'

test.describe('4th Resource testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })

    test('End-to-end case', async({ page }) => {
        const loginPage = new LoginPage(page)
        const customerPage = new CustomerPage(page)
        const homePage = new HomePage(page)
        await loginPage.clickCustomerLoginBtn()
        await expect(customerPage.yourNameField).toBeVisible()
        await expect(customerPage.yourNameLabel).toHaveText('Your Name :')
        await customerPage.selectUser('Hermoine Granger')
        await expect(customerPage.loginBtn).toBeVisible()
        await customerPage.clickLoginBtn()
        await expect(homePage.pageTitle).toBeVisible()

    })
})
