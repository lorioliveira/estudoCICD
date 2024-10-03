describe('Página de Login', () => {
    beforeEach(() => {
      // Visita a página de login antes de cada teste
      cy.visit('https://example.com/login') // Substitua pela URL da sua página de login
    })
  
    it('deve ter o título correto', () => {
      // Verifica se o título da página está correto
      cy.title().should('eq', 'Título Esperado') // Substitua pelo título esperado
    })
  
    it('deve exibir o botão de login', () => {
      // Verifica se o botão de login está visível
      cy.get('button[type="submit"]').should('be.visible') // Selecione o botão de login pelo tipo
    })
  
    it('deve permitir o login ao clicar no botão', () => {
      // Preenche o campo de e-mail
      cy.get('input[name="email"]').type('usuario@example.com') // Substitua pelo e-mail de teste
      // Preenche o campo de senha
      cy.get('input[name="password"]').type('senha-secreta') // Substitua pela senha de teste
      // Clica no botão de login
      cy.get('button[type="submit"]').click()
      // Verifica se a URL mudou após o login
      cy.url().should('include', '/dashboard') // Substitua pela URL esperada após o login
    })
  })
  