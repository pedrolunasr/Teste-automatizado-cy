// cypress/pages/LoginPage.js
class loginPage {
  verifyLoginPageVisible() {
    cy.contains('Login to your account').should('be.visible')
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]').type(email)
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]').type(password)
  }

  submitLogin() {
    cy.get('[data-qa="login-button"]').click()
  }

  verifyLoginErrorVisible() {
    cy.contains('Your email or password is incorrect!').should('be.visible')
  }
}

export default new loginPage()
