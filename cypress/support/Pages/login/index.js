import { ELEMENTS } from './elements'

const Elementos = require('./elements').ELEMENTS
class login{

    acessarURL(){
        cy.visit(ELEMENTS.url)
        cy.get(ELEMENTS.imgSwagLabs)
    }
    
    preencherUsername(username){
        cy.get(ELEMENTS.campoUsername).type(username)
    }

    preencherPassword(passsword){
        cy.get(ELEMENTS.campoPassword).type(passsword)
    }

    clicarEmLogin(){
        cy.get(ELEMENTS.botaoLogin).click()
    }

    validarMensagemDeErro(erro){
        cy.get(ELEMENTS.msgErro).should('have.text',erro)
    }

    validarComContains(erro){
        cy.contains(erro).should('be.visible')
    }

}
export default new login()