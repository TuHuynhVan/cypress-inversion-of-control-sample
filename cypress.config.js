const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            return config;
        },
        projectId: "sdetpro",
        specPattern: "./cypress/tests/**.*",
        baseUrl: "https://www.simplyrecipes.com"
    },
    defaultCommandTimeout: 10000
});
