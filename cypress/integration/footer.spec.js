/// <reference types="cypress" />

describe('Footer', () => {
  it('Should be displayed 0$ if no model is selected', () => {
    cy.visit('http://localhost:3000');
    cy.getDataTest('form-footer-price').contains('$0').should('be.visible');
  });
});
