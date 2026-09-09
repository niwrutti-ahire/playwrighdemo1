const { test, expect } = require('../fixtures/login.fixture');
const loginData = require('../testdata/loginData.json');

test.describe('Login Page', () => {
    test('Verify login with valid credentials', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);
        await expect(loginPage.productTitle).toBeVisible();
    });

    test('Verify login with invalid credentials 2 @smoke', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
        await expect(loginPage.loginError).toBeVisible();
        await expect(loginPage.productTitle).not.toBeVisible();
    });
});
