/// <reference types="cypress" />

describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/')
      // cy.injectAxe();
    })
  
    it.skip('displays the home page', () => {
        cy.url().should("contains", "/home");
    })

    it.skip('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })
  