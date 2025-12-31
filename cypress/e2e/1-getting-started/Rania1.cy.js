/// <reference types="cypress"/>
describe('Test one', () => {
  it('validate that the user can login the system', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name=username]").type("Admin")
    cy.get("[type=password]").type("admin123")
    cy.get("[type=submit]").click()
    cy.get("[title='Assign Leave']").first().click()
    cy.get(".oxd-autocomplete-text-input input")
    cy.contains("button","Assign")
  })
})
