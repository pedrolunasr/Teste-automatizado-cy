// cypress/pages/ContatoPage.js
class ContactPage {
  abrirPaginaContato() {
    cy.contains('Contact us').should('be.visible').click()
  }

  verificarFormularioVisivel() {
    cy.get('div.contact-form > .title').should('be.visible')
  }

  preencherNome(nome) {
    cy.get('[data-qa="name"]').type(nome)
  }

  preencherEmail(email) {
    cy.get('[data-qa="email"]').type(email)
  }

  preencherAssunto(assunto) {
    cy.get('[data-qa="subject"]').type(assunto)
  }

  preencherMensagem(mensagem) {
    cy.get('[data-qa="message"]').type(mensagem)
  }

  anexarArquivo(caminhoArquivo) {
    cy.get('input[name="upload_file"]').selectFile(caminhoArquivo)
  }

  enviarFormulario() {
    cy.get('[data-qa="submit-button"]').click()
  }

  verificarMensagemSucesso() {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
  }

  voltarParaHome() {
    cy.get('#form-section > .btn').click()
    cy.contains('Home').should('be.visible')
  }
}

export default new ContactPage()
