/// <reference types="cypress" />

import colorCombination from '../fixtures/colorCombination';
import accessoryCombination from '../fixtures/accessoryCombination';

describe('Summary view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Loading', () => {
    it('Should be selected white i3 model with no accessory on loading if we select an i3 model', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-tabs-tab-SUMMARY').should('be.visible').click();
      cy.getDataTest('form-summary-image').should('have.attr', 'src', 'img/i3/product01_col01.jpg');
      cy.getDataTest('form-summary-title').contains('BMW i3').should('exist');
      cy.getDataTest('form-summary-WHITE-color').should('exist');
      cy.getDataTest('form-summary-no-accessory').should('exist');
    });
    it('Should be selected black i8 model with no accessory on loading if we select an i8 model', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-tabs-tab-SUMMARY').should('be.visible').click();
      cy.getDataTest('form-summary-image').should('have.attr', 'src', 'img/i8/product02_col01.jpg');
      cy.getDataTest('form-summary-title').contains('BMW i8').should('exist');
      cy.getDataTest('form-summary-BLACK-color').should('exist');
      cy.getDataTest('form-summary-no-accessory').should('exist');
    });
  });

  describe('Selection', () => {
    accessoryCombination.forEach((option) => {
      it(`Should be displayed properly when we have as accessory: ${option.accessories.length ? option.accessories.join(', ') : 'no accessory '}, as color: ${option.color} and model: ${option.model}`, () => {
        cy.selectSummary(option.model, option.color, option.accessories);
        const image = colorCombination.find((c) => (
          c.color === option.color && c.model === option.model));
        cy.getDataTest('form-summary-image').should('have.attr', 'src', image.src);
        cy.getDataTest('form-summary-title').contains(`BMW ${option.model}`).should('exist');
        cy.getDataTest(`form-summary-${option.summaryLabelColor}-color`).should('exist');
        if (option.accessories.length) {
          option.accessories.forEach((accessory) => {
            cy.getDataTest(`form-summary-${accessory}`).should('exist');
          });
        } else {
          cy.getDataTest('form-summary-no-accessory').should('exist');
        }
      });
    });
  });
});
