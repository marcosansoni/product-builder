/// <reference types="cypress" />

import colorCombination from '../fixtures/colorCombination';

describe('Colors view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Loading', () => {
    it('Should be selected by default white when we select a i3 model', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-white-i3-container').should('have.attr', 'data-selected', 'true');
    });
    it('Should be displayed by default white i3 image when we select a i3 model', () => {
      cy.selectModel('i3');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-car').should('have.attr', 'src', 'img/i3/product01_col01.jpg');
    });
    it('Should be selected by default black when we select a i8 model', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-black-i8-container').should('have.attr', 'data-selected', 'true');
    });
    it('Should be displayed by default black i8 image when we select a i8 model', () => {
      cy.selectModel('i8');
      cy.getDataTest('form-footer-primary-button').should('be.visible').click();
      cy.getDataTest('form-colors-car').should('have.attr', 'src', 'img/i8/product02_col01.jpg');
    });
  });

  describe('Selection', () => {
    colorCombination.forEach((option) => {
      it(`Should be selected color when we click on color ${option.color} on model ${option.model}`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest(`form-colors-${option.color}-${option.model}-container`).should('have.attr', 'data-selected', 'true');
      });

      it(`Should be update image car when we click on color ${option.color} on model ${option.model}`, () => {
        cy.selectColor(option.model, option.color);
        cy.getDataTest('form-colors-car').should('have.attr', 'src', option.src);
      });
    });
  });
});
