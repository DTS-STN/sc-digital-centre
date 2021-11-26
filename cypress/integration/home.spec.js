/// <reference types="cypress" />

describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/home')
      cy.injectAxe();
    })
  
    it('displays the home page', () => {
        cy.url().should("contains", "/home");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })
  