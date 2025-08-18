// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com', // ajuste se precisar
    setupNodeEvents(on, config) {
      // escreve os arquivos de resultado do allure em cada execução
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config
    },
  },
  env: {
    allure: true,                    // habilita o plugin
    allureResultsPath: 'allure-results', // pasta de saída
    // opcional:
    // allureAttachRequests: true,   // anexa requests/responses
  },
})
