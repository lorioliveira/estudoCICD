// cypress/e2e/example_test.cy.js

describe('1.Página inicial do Google', () => {
  it('Deve carregar a página corretamente', () => {
    cy.visit('https://www.google.com', { timeout: 10000 });  // Aumenta o timeout para carregar a página
    cy.get('#APjFqb[name="q"]', { timeout: 10000 }).should('be.visible');  // Aumenta o timeout para encontrar o elemento
  });
});
