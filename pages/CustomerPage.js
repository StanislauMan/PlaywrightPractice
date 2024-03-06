const { expect } = require('@playwright/test')

exports.CustomerPage = class CustomerPage {

    constructor(page) {
        this.page = page
        this.yourNameLabel = page.locator('.form-group label')
        this.yourNameField = page.locator('#userSelect')
        this.loginBtn = page.getByRole('button', {name: 'Login'})
    }

    async selectUser(userName) {
         await this.yourNameField.selectOption(userName)
    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }
}