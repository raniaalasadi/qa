/// <reference types="cypress" />
describe('Task1', () => {
  it('Get Elements title', () => {
    cy.visit('https://demo.productionready.io/#/register')
    cy.get(".navbar-brand")
    cy.contains("h1","Sign up")
    cy.get(".text-xs-center").contains("Have")
    cy.get(".nav-link").first()
    cy.get(".nav-link").eq(2)
    cy.get(".form-control").first()
    cy.get(".form-control").eq(1)
    cy.get(".form-control").last()
    cy.get(".btn")
    cy.get(".logo-font")
    cy.get(".attribution")
  })
})
