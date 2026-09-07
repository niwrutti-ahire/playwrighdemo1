// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// const dotenv = require('dotenv');
// const path = require('path');
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  timeout: 12000,
  expect: {
    timeout: 5000
  },

  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  // reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: process.env.CI ? true : false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    viewport: null, // Uses full screen size
    launchOptions: {
      args: ["--start-maximized"],
    },

  },


});
module.exports = config;
