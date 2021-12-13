/// <reference types="cypress" />

describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/home')
      cy.injectAxe();
    })
  
    it('displays the home page', () => {
        cy.url().should("contains", "/home");
    })

    it('sends user to search page after entering value and pressing enter', () => {
      cy.get('[data-cy="searchInput"]').type("Test string @%#");
      cy.get('[data-cy="searchButton"]').click();
      cy.wait(10000)
      cy.url().should("contains", "/search?q=Test%2520string%2520%2540%2525%2523");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })
  