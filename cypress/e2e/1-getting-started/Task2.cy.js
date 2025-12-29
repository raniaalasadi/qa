/// <reference types="cypress" />
describe('Create New User Account', () => {
  it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
    cy.visit("https://automationexercise.com/login")
    cy.get("[data-qa=signup-name]").type("Rania")
    cy.get("[data-qa=signup-email]").type("rania502016@hotmail.com")
    cy.get("[data-qa=signup-button]").click()
    cy.url().should("eq","https://automationexercise.com/signup")
  })
})
/// <reference types="cypress" />
describe('User Login​', () => {
  it('Validate that an existing user can log in using valid credentials', () => {
    cy.visit("https://automationexercise.com/login")
    cy.get("[data-qa=login-email]").type("rania502016@hotmail.com")
    cy.get("[data-qa=login-password]").type("Rania$12345")
    cy.get("[data-qa=login-button]").click()
    cy.url().should("eq","https://automationexercise.com/")
    cy.get(".fa-lock").should("be.visible")
  })
})
