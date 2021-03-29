/// <reference types="cypress" />

import accessoryCombination, { accessoriesList } from '../fixtures/accessoryCombination';

describe('Accessories view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Loading', () => {
    it('Should be selected no accessories on loading we select a i3 model', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-tabs-tab-ACCESSORIES').should('be.visible').click();
      accessoriesList.i3.forEach((accessory) => {
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
      });
    });
    it('Should be selected no accessories on loading we select a i8 model', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-tabs-tab-ACCESSORIES').should('be.visible').click();
      accessoriesList.i8.forEach((accessory) => {
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
      });
    });
  });

  describe('Selection', () => {
    accessoryCombination.forEach((option) => {
      it(`Should be selected items after we click on ${option.accessories.length ? option.accessories.join(', ') : 'no accessory '} for ${option.model} model`, () => {
        cy.selectAccessory(option.model, option.color, option.accessories);
        accessoriesList[option.model].forEach((accessory) => {
          const included = option.accessories.includes(accessory);
          cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', String(included));
        });
      });
    });
  });

  describe('Deselection', () => {
    accessoriesList.i3.forEach((accessory) => {
      it(`Should be deselected ${accessory} after double click on it when we select an i3 model`, () => {
        cy.selectModel('i3');
        cy.getDataTest('form-tabs-tab-ACCESSORIES').should('be.visible').click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
        cy.getDataTest(`form-accessories-${accessory}-card`).click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'true');
        cy.getDataTest(`form-accessories-${accessory}-card`).click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
      });
    });

    accessoriesList.i8.forEach((accessory) => {
      it(`Should be deselected ${accessory} after double click on it when we select an i8 model`, () => {
        cy.selectModel('i8');
        cy.getDataTest('form-tabs-tab-ACCESSORIES').should('be.visible').click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
        cy.getDataTest(`form-accessories-${accessory}-card`).click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'true');
        cy.getDataTest(`form-accessories-${accessory}-card`).click();
        cy.getDataTest(`form-accessories-${accessory}-card`).should('have.attr', 'data-selected', 'false');
      });
    });
  });
});
