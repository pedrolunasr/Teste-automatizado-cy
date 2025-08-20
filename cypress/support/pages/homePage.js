// cypress/pages/HomePage.js
class HomePage {
  visit() {
    cy.visit('https://www.automationexercise.com/')
  }

  verificarHomePage() {
    cy.contains('AutomationExercise').should('be.visible')
  }

  goToLogin() {
    cy.contains('Signup / Login').click()
  }
}

export default new HomePage()
