const { expect } = require('@playwright/test')

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.customerLoginBtn = page.getByRole('button', {name: 'Customer Login'})
        this.bankManagerLoginBtn = page.getByRole('button', {name: 'Bank Manager Login'})
    }

    async clickCustomerLoginBtn() {
        await this.customerLoginBtn.click()
    }
}
