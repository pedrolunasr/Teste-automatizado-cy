// cypress/pages/ProductsPage.js
class ProductsPage {
  abrirProdutos() {
    cy.contains('Products').should('be.visible').click()
  }

  verificarProdutos() {
    cy.contains('All Products').should('be.visible')
  }

  search(term) {
    cy.get('#search_product').clear().type(term)
    cy.get('#submit_search').click()
  }

  produtoPesquisado() {
    cy.contains('h2', 'Searched Products').should('be.visible')
  }

  // Valida que todos os produtos da seção "Searched Products" contêm
  // pelo menos um termo (array) ou um termo único (string).
  verifyResultsContain(terms) {
    const list = Array.isArray(terms) ? terms.map(t => String(t).toLowerCase()) 
                                      : [String(terms).toLowerCase()]

    cy.contains('h2', 'Searched Products')
      .parent()                      // limita ao container da seção de busca
      .find('.productinfo p')        // nomes dos produtos
      .should('have.length.at.least', 1)
      .each(($el) => {
        const productName = $el.text().toLowerCase()
        const ok = list.some(t => productName.includes(t))
        expect(
          ok,
          `Produto Valido: "${productName}" contém: ${list.join(', ')}`
        ).to.be.true
      })
  }
}

export default new ProductsPage()
