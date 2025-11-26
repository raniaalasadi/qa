/// <reference types="cypress" />
describe('Test one', () => {
  it('Get Elements title', () => {
    cy.visit('https://www.telerik.com/support/demos')
    cy.get(".u-s-mb0")
    cy.get('[aria-label="Reporting"]')
    cy.get('#web')
    cy.get('.TK-Footer-Link').eq(6)
    cy.get('.TK-Footer-List-Social').first().find('a')
  })
})
