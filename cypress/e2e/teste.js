import { buildUser } from '../support/factories/User'
import homePage from '../support/pages/homePage';
import loginPage from '../support/pages/LoginPage';
import productPage from '../support/pages/productPage';
import contactPage from '../support/pages/contactPage';

describe('Cadastro no Automation Exercise', () => {
  beforeEach(() => {
      homePage.visit()
      homePage.verificarHomePage()
    });

  it('cadastrar usuário e deletar a conta', () => {
    const user = buildUser()

    homePage.goToLogin()

    // Tela de cadastro
    cy.get('input[data-qa="signup-name"]').type(user.name)
    cy.get('input[data-qa="signup-email"]').type(user.email)
    cy.get('button[data-qa="signup-button"]').click()

    // Formulário de informações
    cy.get('#id_gender1').check({ force: true })
    cy.get('input[data-qa="password"]').type(user.password)
    cy.get('#days').select(user.birth.day)
    cy.get('#months').select(user.birth.month)
    cy.get('#years').select(user.birth.year)

    cy.get('#newsletter').check({ force: true })
    cy.get('#optin').check({ force: true })

    cy.get('input[data-qa="first_name"]').type(user.address.firstName)
    cy.get('input[data-qa="last_name"]').type(user.address.lastName)
    cy.get('input[data-qa="company"]').type(user.address.company)
    cy.get('input[data-qa="address"]').type(user.address.address1)
    cy.get('input[data-qa="address2"]').type(user.address.address2)
    cy.get('select[data-qa="country"]').select(user.address.country)
    cy.get('input[data-qa="state"]').type(user.address.state)
    cy.get('input[data-qa="city"]').type(user.address.city)
    cy.get('input[data-qa="zipcode"]').type(user.address.zipcode)
    cy.get('input[data-qa="mobile_number"]').type(user.address.mobile)

    cy.get('button[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('be.visible')
  })

  it("Entrar em contato com suporte",() =>{
    const user = buildUser()
    contactPage.abrirPaginaContato()
    contactPage.verificarFormularioVisivel()

    contactPage.preencherNome(user.name)
    contactPage.preencherEmail(user.email)
    contactPage.preencherAssunto('Assunto teste')
    contactPage.preencherMensagem('lorem Ipsum')
    contactPage.anexarArquivo('cypress/fixtures/telaTeste.png')

    contactPage.enviarFormulario()
    contactPage.verificarMensagemSucesso()
    contactPage.voltarParaHome()
  })
  
    it("Pesquisar produto",() =>{
    productPage.abrirProdutos()
    productPage.verificarProdutos()

    productPage.search('top')
    productPage.produtoPesquisado()

    // aceita "top" OU "shirt" como válidos:
    productPage.verifyResultsContain(['top', 'shirt'])
  })

  it("Adiconar compras no carrinho",() =>{
    cy.contains('AutomationExercise').should('be.visible')
    cy.contains('Products').should('be.visible').click()
    cy.contains('All Products').should('be.visible')
    cy.get('.features_items .choose a').contains('View Product').first().click()
    cy.contains('button', 'Add to cart').should('be.visible').click()
    cy.contains('View Cart').click()
    cy.contains('Item').should('be.visible')  
  })

  it("Logar com email e senha não existentes",() =>{
    const user = buildUser()
    homePage.goToLogin()
    loginPage.verifyLoginPageVisible()
    loginPage.fillEmail(user.email)
    loginPage.fillPassword('12345678')
    loginPage.submitLogin()
    loginPage.verifyLoginErrorVisible()
  })
})

//Comandos para gerar o relatório
//npm run test:allure
//npm run allure:generate
//npm run allure:open
