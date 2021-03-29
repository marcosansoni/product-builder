/// <reference types="cypress" />

describe('Tabs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Disabled', () => {
    it('Should be selected models tab on loading', () => {
      cy.getDataTest('form-tabs-tab-MODELS').contains('MODELS').should('have.attr', 'data-selected', 'true');
    });
    it('Should be disabled colors tab on loading', () => {
      cy.getDataTest('form-tabs-tab-COLORS').contains('COLORS').should('have.attr', 'data-disabled', 'true');
    });
    it('Should be disabled accessories tab on loading', () => {
      cy.getDataTest('form-tabs-tab-ACCESSORIES').contains('ACCESSORIES').should('have.attr', 'data-disabled', 'true');
    });
    it('Should be disabled summary tab on loading', () => {
      cy.getDataTest('form-tabs-tab-SUMMARY').contains('SUMMARY').should('have.attr', 'data-disabled', 'true');
    });
    it('Should be displayed snackbar when we click on colors tab if it is disabled', () => {
      cy.getDataTest('form-tabs-tab-COLORS').click();
      cy.get('.snackbar').contains('Please, select a model first!').should('be.visible');
    });
    it('Should be displayed snackbar when we click on accessories tab if it is disabled', () => {
      cy.getDataTest('form-tabs-tab-ACCESSORIES').click();
      cy.get('.snackbar').contains('Please, select a model first!').should('be.visible');
    });
    it('Should be displayed snackbar when we click on summary tab if it is disabled', () => {
      cy.getDataTest('form-tabs-tab-SUMMARY').click();
      cy.get('.snackbar').contains('Please, select a model first!').should('be.visible');
    });
  });

  describe('Models', () => {
    ['i3', 'i8'].forEach((model) => {
      it(`Should be enable colors tab on selection of ${model} card`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-COLORS').contains('COLORS').should('have.attr', 'data-disabled', 'false');
      });
      it(`Should be enable accessories tab on selection of ${model} card`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-ACCESSORIES').contains('ACCESSORIES').should('have.attr', 'data-disabled', 'false');
      });
      it(`Should be enable summary tab on selection of ${model} card`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-SUMMARY').contains('SUMMARY').should('have.attr', 'data-disabled', 'false');
      });
    });
  });

  describe('Navigation', () => {
    ['i3', 'i8'].forEach((model) => {
      it(`Should be move to colors tab on click on color tab after selection of ${model}`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-COLORS').click();
        cy.getDataTest('form-tabs-tab-COLORS').should('have.attr', 'data-selected', 'true');
        cy.getDataTest('form-colors-content').should('be.visible');
      });
      it(`Should be move to accessories tab on click on accessories tab after selection of ${model}`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-ACCESSORIES').click();
        cy.getDataTest('form-tabs-tab-ACCESSORIES').should('have.attr', 'data-selected', 'true');
        cy.getDataTest('form-accessories-content').should('be.visible');
      });
      it(`Should be move to summary tab on click on summary tab after selection of ${model}`, () => {
        cy.selectModel(model);
        cy.getDataTest('form-tabs-tab-SUMMARY').click();
        cy.getDataTest('form-tabs-tab-SUMMARY').should('have.attr', 'data-selected', 'true');
        cy.getDataTest('form-summary-content').should('be.visible');
      });
    });
  });
});
