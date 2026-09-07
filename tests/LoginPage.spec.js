const { test, expect } = require('../fixtures/login.fixture');
const loginData = require('../testdata/loginData.json');

test.describe('Login Page', () => {
    test('Verify login with valid credentials', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.email, loginData.password);
        await expect(loginPage.productTitle).toBeVisible();
    });
});
