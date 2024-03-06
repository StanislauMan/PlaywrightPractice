const { expect } = require('@playwright/test')

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page
        this.pageTitle = page.locator('.fontBig')
    }

    
}