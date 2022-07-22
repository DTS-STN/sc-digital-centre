/// <reference types="cypress" />

const paths = ['http://localhost:3000/400', 'http://localhost:3000/404', 'http://localhost:3000/500', 'http://localhost:3000/503'];

describe('Error page accessibility test', () => {
    paths.forEach((path) => {
      const pageName = path.replace('http://localhost:3000', '');
      const errorPage = `${pageName} page has no detectable accessibility violations on load`;
      const frErrorPage = `${pageName} error page displays in french `;
  
      it(errorPage, () => {
        cy.visit(path, {failOnStatusCode: false});
        cy.injectAxe();
        cy.checkA11y('main');
      });


      it(frErrorPage, () => {
        cy.visit(path, {failOnStatusCode: false});
        cy.get('[data-cy="lang1"] > .ds-language-toggle-text').click()
        cy.url().should("contains", "/fr" + pageName);
    })

    });
  });


  