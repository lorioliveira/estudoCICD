describe('Página de Login', () => {
  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit('https://www.saucedemo.com/')
  })

  it('deve ter o título correto', () => {
    // Verifica se o título da página está correto
    cy.title().should('eq', 'Swag Labs') // Use 'eq' para comparar com o título esperado
  })

  it('deve permitir preencher os campos', () => {
    // Preenche o campo de nome de usuário
    cy.get('input[name="user-name"]').type('standard_user') 
    // Preenche o campo de senha
    cy.get('input[name="password"]').type('secret_sauce') 
  })

  it('deve exibir o botão de login', () => {
    // Verifica se o botão de login está visível
    cy.get('input[type="submit"]').should('be.visible')
  })

  it('deve permitir o login e redirecionar para a página correta', () => {
    // Preenche o campo de nome de usuário
    cy.get('input[name="user-name"]').type('standard_user') 
    // Preenche o campo de senha
    cy.get('input[name="password"]').type('secret_sauce') 
    // Clica no botão de login
    cy.get('input[type="submit"]').click()
    // Verifica se a URL mudou após o login
    cy.url().should('include', '/inventory')
  })
})
