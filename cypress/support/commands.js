/* eslint-disable no-undef */
Cypress.Commands.add(
  'getDataTest',
  { prevSubject: ['optional', 'element'] },
  /**
   *
   * @param subject Subject from previous command in the chain.
   * @param dataTest The data-test attribute to looking for.
   */
  (subject, dataTest) => (
    cy.wrap(subject).get(`[data-test="${dataTest}"]`)
  ),
);
