/// <reference types="cypress" />

describe('Index page loads and', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.injectAxe();
    })
  
    it('displays the index (Index) page', () => {
        cy.url().should("contains", "/");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })

    it('English button click goes to home page', () => {
       
        cy.get('[data-cy=english-button]').click({ force: true })
       
        cy.wait(1000)
      
        cy.url().should("contains", "/dashboard");
    })




    it('French button click goes to fr/dashboard page', () => {
        cy.get('[data-cy=french-button]').click({ force: true })
        cy.wait(1000)
        cy.url().should("contains", "/fr/dashboard");
    })
    
    it('Terms and condition links appear on the page', () => {
        cy.get('[data-cy=terms]').should("be.visible")
        .and('have.attr',
        'href',
        'https://www.canada.ca/en/transparency/terms.html',
      )
        cy.get('[data-cy=avis]').should("be.visible")
        .and('have.attr',
            'href',
            'https://www.canada.ca/fr/transparence/avis.html',
          )
    })

    
  })
  