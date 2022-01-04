/// <reference types="cypress" />

describe('search page loads', () => {
    beforeEach(() => {
      cy.visit('/search')
      cy.injectAxe();
    })
  
    it('displays the search page', () => {
        cy.url().should("contains", "/search");
    })

    it('sends user back to home after clicking "Service Canada"', () => {
      cy.get('[data-cy="homeButton"]').click();
      cy.url().should("contains", "/home");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })
  