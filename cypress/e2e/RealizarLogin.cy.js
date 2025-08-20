import login from "../support/Pages/login"
import produtos from "../support/Pages/produtos"
describe('realizar Login', () =>{
    beforeEach(() => {
    login.acessarURL()
  });
 it("realizar login com sucesso",() => {
    login.preencherUsername('standard_user')
    login.preencherPassword('secret_sauce')
    login.clicarEmLogin()
    produtos.ValidarLabelProdutos()
    })

    it("realizar login sem informar a senha",() =>{
        login.preencherUsername('standard_user')
        login.clicarEmLogin()
        //login.validarMensagemDeErro('Epic sadface: Password is required')
        login.validarComContains('Password is required')
    })

    it("realizar login sem informar a usuario",() =>{
        login.preencherPassword
        login.clicarEmLogin()
        login.validarMensagemDeErro('Epic sadface: Username is required')
        login.validarComContains('Username is required')
    })
})
