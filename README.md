# Projeto Pessoal de Testes Automatizados com Cypress
### 03/Outubro/2024 - Por Lorena Oliveira

## Descrição

Este projeto foi criado para demonstrar a configuração e execução de testes automatizados utilizando o Cypress em um pipeline CI/CD no Azure DevOps. Ele inclui a instalação de dependências, execução de testes end-to-end e integração contínua via YAML. O objetivo é garantir a qualidade contínua das entregas de software de maneira automatizada e eficiente.

## Tecnologias Utilizadas

- **Node.js** (v16.x) – Ambiente de execução JavaScript.
- **Cypress** (v13.15.0) – Framework de testes end-to-end para automação de testes em aplicações web.
- **Azure DevOps** – Ferramenta de CI/CD para automação de pipeline.

## Requisitos

- Node.js (v16.x)
- Cypress
- Conta no Azure DevOps

## Estrutura do Projeto

- `cypress/`: Contém os arquivos de testes automatizados.
- `package.json`: Gerencia as dependências do projeto.
- `azure-pipelines.yml`: Script YAML responsável por automatizar o pipeline CI/CD no Azure.

## Instalação

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/usuario/nome-do-repositorio.git
    ```

2. Navegue até a pasta do projeto e instale as dependências:

    ```bash
    cd nome-do-repositorio
    npm install
    ```

3. Instale o Cypress:

    ```bash
    npm install cypress --save-dev
    ```

## Executando os Testes Localmente

Para rodar os testes localmente, utilize o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá selecionar e rodar os testes.

Para rodar os testes diretamente no terminal (modo headless):

```bash
npx cypress run
```

## Pipeline CI/CD no Azure DevOps

Este projeto inclui um pipeline YAML configurado para rodar os testes automaticamente em cada push ou pull request na branch `main`. O pipeline faz o seguinte:

1. Instala o Node.js.
2. Instala as dependências e o Cypress.
3. Executa os testes do Cypress em modo headless.

Para configurar o pipeline no Azure DevOps:

1. Acesse seu projeto no Azure DevOps.
2. Vá em "Pipelines" e selecione "New Pipeline".
3. Escolha o repositório onde seu projeto está armazenado.
4. Selecione a opção YAML e localize o arquivo `azure-pipelines.yml` do projeto.
5. Salve e execute o pipeline.

## Testes

Os testes estão localizados dentro da pasta `cypress/e2e` e cobrem funcionalidades básicas de uma aplicação, como:

- Verificação do título da página de login.
- Preenchimento de campos de entrada.
- Verificação de elementos de interface (botão de login).
- Redirecionamento após login bem-sucedido.


## Licença

Este projeto está sob a licença [ISC](https://opensource.org/licenses/ISC).
