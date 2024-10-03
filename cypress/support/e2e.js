// cypress/support/e2e.js

// Importa comandos customizados
import './commands';

// Hook que roda antes de todos os testes
beforeEach(() => {
  cy.clearCookies();  // Limpa cookies antes de cada teste
});
