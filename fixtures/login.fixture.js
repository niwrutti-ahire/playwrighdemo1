const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage.po');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

module.exports = { test, expect };
