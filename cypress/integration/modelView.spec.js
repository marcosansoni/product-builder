/// <reference types="cypress" />

describe('Models view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Loading', () => {
    it('Should be i3 card not selected on loading', () => {
      cy.getDataTest('form-models-i3-card').should('have.attr', 'data-selected', 'false');
    });
    it('Should be i8 card not selected on loading', () => {
      cy.getDataTest('form-models-i8-card').should('have.attr', 'data-selected', 'false');
    });
  });

  describe('Selection', () => {
    it('Should be select i3 card when we click on the card', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-models-i3-card').should('have.attr', 'data-selected', 'true');
    });
    it('Should be deselected i8 card when we click on i3 card', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-models-i8-card').should('have.attr', 'data-selected', 'false');
    });
    it('Should be select i8 card when we click on the card', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-models-i8-card').should('have.attr', 'data-selected', 'true');
    });
    it('Should be deselected i3 card when we click on i8 card', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-models-i3-card').should('have.attr', 'data-selected', 'false');
    });
  });

  describe('Deselection', () => {
    it('Should be deselect i3 card when we click on the card if it is selected', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-models-i3-card').click();
      cy.getDataTest('form-models-i3-card').should('have.attr', 'data-selected', 'false');
    });
    it('Should be deselect i8 card when we click on the card it is selected',()=>{
      cy.selectModel('i8');
      cy.getDataTest('form-models-i8-card').click();
      cy.getDataTest('form-models-i8-card').should('have.attr', 'data-selected', 'false');
    });
  });
});
