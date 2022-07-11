/// <reference types="cypress" />

describe('A11y', () => {
    it('dashboard page is accessible', () => {
      cy.checkPageA11y('/dashboard')
    })
  });

describe('The dashboard page loads', () => {
    beforeEach(() => {
      cy.visit('/dashboard')
       cy.injectAxe();
    })
  
    it('displays the dashboard page', () => {
        cy.url().should("contains", "/dashboard");
    })

    it("Menu appears on the dashboard page", () => {
        cy.get('#dropdownNavbarLink').should("be.visible");
        cy.get('#dropdownNavbarLink').click()
        cy.checkA11y('#dropdownNavbarLink')
      })

    //   it("Menu > Security links to the profile page", () => {
    //     cy.get('#dropdownNavbarLink').click()
    //     cy.get('#dropdownNavbar > :nth-child(2) > .ds-block').should('have.prop', 'href', 'http://localhost:3000/security')
    //   })
    
      it("Menu > Manage Profile links to the profile page", () => {
        cy.get('#dropdownNavbarLink').click()
        cy.get('#dropdownNavbar > :nth-child(3) > .ds-block').click()
        cy.url().should("include", "/profile");
      })

  })

