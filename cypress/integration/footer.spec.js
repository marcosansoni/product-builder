/// <reference types="cypress" />

import accessoryCombination from '../fixtures/accessoryCombination';
import colorCombination from '../fixtures/colorCombination';

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Disabled', () => {
    it('Should be displayed 0$ if no model is selected', () => {
      cy.getDataTest('form-footer-price').contains('$0').should('be.visible');
    });

    it('Should be displayed no car image if no model is selected', () => {
      cy.getDataTest('form-footer-image').should('not.be.visible');
    });

    it('Should be displayed no secondary button of model page', () => {
      cy.getDataTest('form-footer-secondary-button').should('not.be.visible');
    });

    it('Should be displayed snackbar if no model is selected when we click on primary button on footer', () => {
      cy.getDataTest('form-footer-primary-button').contains('COLORS').should('be.visible').click();
      cy.get('.snackbar').contains('Please, select a model first!').should('be.visible');
    });
  });

  describe('Models page', () => {
    it('Should be update price on footer with i3 default price when we click on i3 card\n', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-footer-price').contains('$42400').should('be.visible');
    });

    it('Should be update images on footer with i3 default image when we click on i3 card', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-footer-image').should('have.attr', 'src', 'img/i3/product01_col01.jpg');
    });

    it('Should be navigate between color page on click on primary button if i3 is selected', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-content').should('be.visible').click();
    });

    it('Should be update price on footer with i8 default price when we click on i8 card on models page', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-footer-price').contains('$140700').should('be.visible');
    });

    it('Should be update images on footer with i8 default image when we click on i8 card on models page', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-footer-image').should('have.attr', 'src', 'img/i8/product02_col01.jpg');
    });

    it('Should be navigate between color page on click on primary button if i8 is selected', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-content').should('be.visible').click();
    });
  });

  describe('Colors page', () => {
    colorCombination.forEach((option) => {
      it(`Should be update price when we select ${option.color} for ${option.model} model`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest('form-footer-price').contains(option.price).should('be.visible');
      });

      it(`Should be update image when we select ${option.color} for ${option.model} model`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest('form-footer-image').should('have.attr', 'src', option.src);
      });

      it(`Should be navigate between accessories page on click on primary button when we are on color page for ${option.model} model`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest('form-footer-primary-button').contains('ACCESSORIES').should('be.visible').click();
        cy.getDataTest('form-accessories-content').should('be.visible');
      });

      it(`Should be navigate on color page on click on secondary button when we are on accessory page for ${option.model} model`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest('form-footer-secondary-button').should('be.visible').click();
        cy.getDataTest('form-models-content').should('be.visible');
      });
    });
  });

  describe('Accessories page', () => {
    accessoryCombination.forEach((option) => {
      it(`Should be update price when we select ${option.accessories.length ? option.accessories.join(', ') : 'no accessory '} for ${option.model} model`, () => {
        cy.selectAccessory(option.model, option.color, option.accessories);
        cy.getDataTest('form-footer-price').contains(option.price).should('be.visible');
      });

      it(`Should be navigate between accessories page on click on primary button when we are on accessories page with ${option.accessories.length ? option.accessories.join(', ') : 'no accessory '} selected for ${option.model} model`, () => {
        cy.selectAccessory(option.model, option.color, option.accessories);
        cy.getDataTest('form-footer-primary-button').contains('SUMMARY').should('be.visible').click();
        cy.getDataTest('form-summary-content').should('be.visible');
      });

      it(`Should be navigate on color page on click on secondary button when we are on accessory page with ${option.accessories.length ? option.accessories.join(', ') : 'no accessory '} selected for ${option.model} model`, () => {
        cy.selectAccessory(option.model, option.color, option.accessories);
        cy.getDataTest('form-footer-secondary-button').should('be.visible').click();
        cy.getDataTest('form-colors-content').should('be.visible');
      });
    });
  });

  describe('Summary Page', () => {
    it('Should remain on the same page on the click of the primary button', () => {
      cy.selectSummary('i3', 'white', []);
      cy.getDataTest('form-footer-primary-button').contains('BUY NOW').should('be.visible');
      cy.getDataTest('form-footer-primary-button').click();
      cy.getDataTest('form-summary-content').should('be.visible');
    });

    it('Should be navigate on accessories page on click on secondary button when we are on summary page', () => {
      cy.selectSummary('i3', 'white', []);
      cy.getDataTest('form-footer-secondary-button').should('be.visible').click();
      cy.getDataTest('form-accessories-content').should('be.visible');
    });
  });
});
