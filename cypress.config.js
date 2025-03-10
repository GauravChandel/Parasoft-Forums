const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight:1200,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: "https://forums.parasoft.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
  
});
