const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {force: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
