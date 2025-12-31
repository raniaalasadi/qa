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
/// <reference types="cypress" />
describe('Search for a Product​', () => {
  it('Validate that the correct results appear when using search bar using valid product name', () => {
    cy.visit("https://automationexercise.com/products")
    cy.get("#search_product").first().type("Dress")
    cy.get("#submit_search").first().click()
    cy.get(".features_items").should("be.visible")
    cy.get(".productinfo p").should("contain","Dress")
    cy.url().should("eq","https://automationexercise.com/products?search=Dress")
  })
  it('validate that the website display no product using invalid product name ', () => {
    cy.visit("https://automationexercise.com/products")
    cy.get("#search_product").first().type("ddd")
    cy.get("#submit_search").first().click()
    cy.get(".product-image-wrapper").should("not.exist")
    cy.url().should("eq","https://automationexercise.com/products?search=ddd")
  })

})
