const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            return config;
        },
        specPattern: "./cypress/tests/**.*"
    },
    defaultCommandTimeout: 10000
});
