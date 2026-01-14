const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 1,
    setupNodeEvents(on, config) {},
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
