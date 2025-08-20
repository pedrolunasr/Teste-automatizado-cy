import { ELEMENTS } from './elements'

class produtos{

    ValidarLabelProdutos(){
        cy.get(ELEMENTS.labelProdutos)
    }
    

}
export default new produtos()