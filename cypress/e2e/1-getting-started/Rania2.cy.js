/// <reference types="cypress" />
describe('Test one', () => {
  it('Get Elements title', () => {
    cy.visit('https://www.telerik.com/support/demos')
    cy.get("[aria-label=Reporting]")
    cy.get("[aria-label='Desktop content']")
    cy.contains("h1","Demo")
    cy.get(".TK-Footer-Link").eq(6)
    cy.get(".TK-Footer-Link-Horizontal").eq(5)
    cy.get(".TK-Footer-List-Social").first()
  })
})
