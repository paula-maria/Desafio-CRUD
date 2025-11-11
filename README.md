# CRUD de Produtos — Node.js + Express + SQLite + HTML + CSS + JavaScript

Este projeto é uma aplicação web completa de **CRUD (Create, Read, Update, Delete)** de produtos.  
Permite **cadastrar, listar, editar e excluir produtos** de forma dinâmica, através de uma interface web conectada a um servidor **Node.js + Express**, com persistência de dados em **SQLite**.

## Tecnologias Utilizadas

**Frontend**

**HTML5:** Estrutura o layout da aplicação — formulários, tabela de produtos e botões de ação.

**CSS3:** Define o design moderno e responsivo da interface.

**JavaScript** (Vanilla JS): Controla toda a lógica de interação do usuário, faz as requisições HTTP com a Fetch API (AJAX) e atualiza os dados da tabela dinamicamente sem recarregar a página.

**Backend**

**Node.js:** Ambiente de execução que permite rodar JavaScript no servidor.

**Express.js:** Framework minimalista que facilita a criação da API RESTful, responsável por processar as requisições do frontend (GET, POST, PUT, DELETE).

**CORS e Body-Parser:** Middlewares que permitem a comunicação segura entre o frontend e o backend usando JSON.

**Banco de Dados**

**SQLite3:** Banco de dados leve e simples, utilizado para armazenar os produtos cadastrados.

-> Armazena: id, nome, descrição, preço e quantidade.

-> Ideal para projetos pequenos, pois não precisa de servidor de banco dedicado (os dados ficam salvos em um arquivo .db local).

**Exportação para Excel**

**Biblioteca XLSX (SheetJS):** Permite exportar a lista de produtos diretamente para um arquivo .xlsx, facilitando a análise e o compartilhamento dos dados.

## Funcionalidades

- Cadastrar novos produtos  
- Listar produtos existentes  
- Editar informações de um produto  
- Excluir produtos  
- Persistência de dados em **SQLite**  
- Comunicação entre frontend e backend usando **Fetch API**

-          ┌───────────────────────────┐
         │         Usuário           │
         │  (Navegador / Frontend)   │
         └────────────┬──────────────┘
                      │
                      ▼
         ┌───────────────────────────┐
         │     HTML / CSS / JS        │
         │ Interface + Lógica CRUD    │
         └────────────┬──────────────┘
                      │  (requisições HTTP via Fetch)
                      ▼
         ┌───────────────────────────┐
         │     Backend Node.js        │
         │ API REST com Express       │
         └────────────┬──────────────┘
                      │  (queries SQL)
                      ▼
         ┌───────────────────────────┐
         │         SQLite3            │
         │ Banco local de produtos    │
         └───────────────────────────┘


## Como Executar o Projeto Localmente

### Pré-requisitos para executar o projeto

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)
- Nenhuma instalação adicional de banco de dados é necessária, pois o **SQLite** é leve e embutido.

**Com isso, abra o terminal do VSCode e execute os seguintes comandos:**

1 — Clonar o repositório. No terminal (PowerShell, Git Bash ou terminal do VS Code):
git clone https://github.com/paula-maria/Desafio-CRUD.git

2. digite: cd Desafio-CRUD

3. Instalar dependências. Rode: npm install 
Esse comando instalará as dependências listadas em package.json (por exemplo: express, sqlite3, cors, nodemon, etc.).
Se prefirir instalar tudo manualmente: npm install express sqlite3

4. No terminal, rode o comando: npm run dev

## Ao digitar esse último comando, o terminal irá fornecer essas informações:
<img width="342" height="207" alt="image" src="https://github.com/user-attachments/assets/f752b064-e1bb-42fb-a7b6-5336365b0774" />

**Então, será possível acessar o projeto através do link: http://localhost:3000**

No entanto, se preferir sem nodemon:
npm start
# ou
node server.js

Em seguida abra: http://localhost:3000

**Estrutura do projeto**

 
<img width="557" height="390" alt="image" src="https://github.com/user-attachments/assets/b693c2d3-770e-46f5-91f3-857dfbe79bf8" />
