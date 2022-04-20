/// <reference types="cypress" />

describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/dashboard')
    //   cy.injectAxe();
    })
  
    it('displays the home page', () => {
        cy.url().should("contains", "/dashboard");
    })

 

    it.skip('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })