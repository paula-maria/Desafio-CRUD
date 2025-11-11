# CRUD de Produtos — Node.js + Express + SQLite + HTML + CSS + JavaScript

Este projeto é uma aplicação web completa de **CRUD (Create, Read, Update, Delete)** de produtos.  
Permite **cadastrar, listar, editar e excluir produtos** de forma dinâmica, através de uma interface web conectada a um servidor **Node.js + Express**, com persistência de dados em **SQLite**.

## Tecnologias Utilizadas

- **Node.js** — ambiente de execução JavaScript no servidor  
- **Express.js** — framework para criação de rotas e APIs REST  
- **SQLite3** — banco de dados leve e embutido  
- **Nodemon** — atualização automática do servidor em modo desenvolvimento  
- **HTML5** — estrutura do front-end  
- **CSS3** — estilização e layout responsivo  
- **JavaScript (frontend)** — manipulação do DOM e integração com o backend via Fetch API  

## Funcionalidades

- Cadastrar novos produtos  
- Listar produtos existentes  
- Editar informações de um produto  
- Excluir produtos  
- Persistência de dados em **SQLite**  
- Comunicação entre frontend e backend usando **Fetch API**

## Como Executar o Projeto Localmente

### Pré-requisitos para executar o projeto

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)
- Nenhuma instalação adicional de banco de dados é necessária, pois o **SQLite** é leve e embutido.

### Clonar o repositório

git clone https://github.com/seu-usuario/Desafio-CRUD.git

## Com isso, abra o terminal do VSCode e execute os seguintes comandos:

1. cd desafio
2. npm instal (para instalar as dependências)
3. npm run dev
## Ao digitar esse último comando, o terminal irá fornecer essas informações:
<img width="342" height="207" alt="image" src="https://github.com/user-attachments/assets/f752b064-e1bb-42fb-a7b6-5336365b0774" />

## Então, será possível acessar o projeto através do link: http://localhost:3000

## ESTRUTURA DO PROJETO
📦 Desafio-CRUD
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 style.css
 ┃ ┗ 📜 script.js
 ┣ 📂 routes
 ┃ ┗ 📜 produtos.js
 ┣ 📂 database
 ┃ ┗ 📜 database.db
 ┣ 📜 server.js
 ┣ 📜 package.json
 ┗ 📜 README.md
