describe('automacao de testes', () => {
  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/');
  });

  it('preenche o form', () => {
    cy.get('#name').type('Pedro Luna');
    cy.get('#email').type('email@gmail.com');
    cy.get('#phone').type('123123123');
    cy.get('#male').click()
    cy.get('#tuesday').click()
    cy.get('#wednesday').click()
    cy.get('#country').select('United Kingdom')
    cy.get('#colors').select('Green')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').should('have.value','07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imagem.png')
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imagem.png')
  })
  it('Validar botão Enter', () => {
      cy.contains('Automation Testing Practice')
      cy.get('button[name="start"]').click()
      cy.get('button[name="stop"]').should('be.visible')
      cy.contains('STOP').should('be.visible')
    });

    it('selecionar elementos', () =>{
      cy.get('input.form-check-input').each(($check)=>{ const valueText = $check.attr('value')
        if(valueText.startsWith('s')){
          cy.wrap($check).check()
        }
      })
    })

    it.only('Validar abrir nova Aba', () => {
      cy.get('#HTML4 > .widget-content > button').click()
    });
  
})
