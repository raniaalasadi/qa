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

/// <reference types="cypress" />
describe('Add Product to Cart​', () => {
  it('Validate that a user can add a product to the shopping cart from the product details page.', () => {
    cy.visit("https://automationexercise.com/products")
    cy.get(".choose a").first().click()
    cy.url().should("eq","https://automationexercise.com/product_details/1")
    cy.get("[type=button]").first().click()
    cy.get(".modal-content").should("be.visible").and("contain.text","Added!")
    cy.get(".text-center a").click()
    cy.url().should("eq","https://automationexercise.com/view_cart")
    cy.get("#cart_items").should("be.visible")
    cy.get(".cart_quantity").should("contain.text","1")
  })
})

/// <reference types="cypress" />
describe('Add a Product Review​​', () => {
  it('Validate that a logged-in user can add a review to a product​', () => {
    cy.visit("https://automationexercise.com/login")
    cy.get("[data-qa=login-email]").type("rania502016@hotmail.com")
    cy.get("[data-qa=login-password]").type("Rania$12345")
    cy.get("[data-qa=login-button]").click()
    cy.url().should("eq", "https://automationexercise.com/")
    cy.get(".navbar-nav").contains(" Logged in as").should("be.visible")
    cy.get(".choose a").first().click()
    cy.url().should("eq", "https://automationexercise.com/product_details/1")
    cy.get("#name").type("Rania")
    cy.get("#email").type("rania502016@hotmail.com")
    cy.get("#review").first().type("good price")
    cy.get("#button-review").click()
    cy.get(".alert-success span").should("be.visible")
  })
})
