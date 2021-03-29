/* eslint-disable no-undef */
Cypress.Commands.add(
  'selectModel',
  { prevSubject: ['optional', 'element'] },
  /**
   *
   * @param subject Subject from previous command in the chain.
   * @param modelType One option between [i3,i8]
   */
  (subject, modelType) => (
    cy.getDataTest(`form-models-${modelType}-card`).should('be.visible').click()
  ),
);

Cypress.Commands.add(
  'selectColor',
  { prevSubject: ['optional', 'element'] },
  /**
   *
   * @param subject Subject from previous command in the chain.
   * @param modelType One option between [i3,i8]
   * @param color It can be [white,gray, orange] for i3, [black,white] for i8
   */
  (subject, modelType, color) => {
    cy.selectModel(modelType);
    cy.getDataTest('form-footer-primary-button').contains('COLORS').should('be.visible').click();
    cy.getDataTest(`form-colors-${color}-${modelType}-color`).scrollIntoView().should('be.visible').click();
  },
);

Cypress.Commands.add(
  'selectAccessory',
  { prevSubject: ['optional', 'element'] },
  /**
   *
   * @param subject Subject from previous command in the chain.
   * @param modelType One option between [i3,i8]
   * @param color It can be [white,gray, orange] for i3, [gray,white] for i8
   * @param accessories [array] It can be an array containing one of more of the following items
   *   [BMW_CHARGING_STATION, BMW_MAINTENANCE_PROGRAM_UPGRADE, BMW_ONE_YEAR] for i3,
   *   [BMW_LASERLIGHT,BMW_CHARGING_STATION, BMW_MAINTENANCE_PROGRAM_UPGRADE, BMW_ONE_YEAR] for i8
   */
  (subject, modelType, color, accessories) => {
    cy.selectColor(modelType, color);
    cy.getDataTest('form-footer-primary-button').contains('ACCESSORIES').should('be.visible').click();
    accessories.forEach((accessory) => {
      cy.getDataTest(`form-accessories-${accessory}-card`).should('be.visible').click();
    });
  },
);

Cypress.Commands.add(
  'selectSummary',
  { prevSubject: ['optional', 'element'] },
  /**
   *
   * @param subject Subject from previous command in the chain.
   * @param modelType One option between [i3,i8]
   * @param color It can be [white,gray, orange] for i3, [black,white] for i8
   * @param accessories [array] It can be an array containing one of more of the following items
   *   [BMW_CHARGING_STATION, BMW_MAINTENANCE_PROGRAM_UPGRADE, BMW_ONE_YEAR] for i3,
   *   [BMW_LASERLIGHT,BMW_CHARGING_STATION, BMW_MAINTENANCE_PROGRAM_UPGRADE, BMW_ONE_YEAR] for i8
   */
  (subject, modelType, color, accessories) => {
    cy.selectAccessory(modelType, color, accessories);
    cy.getDataTest('form-footer-primary-button').contains('SUMMARY').should('be.visible').click();
  },
);
