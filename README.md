# 🍕 Efood - Plataforma de Delivery Gastronômico

![GitHub license](https://img.shields.io/github/license/DouglassenG/efood?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/DouglassenG/efood?style=flat-square)
![Netlify Status](https://img.shields.io/netlify/d5e8f230-6745-4b8c-8517-5e6b72808001?style=flat-square&label=Deploy)

> Uma aplicação Front-end robusta que simula a experiência completa de um app de delivery, desde a seleção de restaurantes até o checkout final.

---

## 📑 Tabela de Conteúdos
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Motivação](#-motivação-e-propósito)
3. [Demonstração Visual](#-demonstração-visual)
4. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
5. [Pré-requisitos](#-pré-requisitos)
6. [Instalação e Execução](#-instalação-e-execução)
7. [Como Contribuir](#-como-contribuir)
8. [FAQ / Solução de Problemas](#-faq--solução-de-problemas)
9. [Autores](#-autores)
10. [Licença](#-licença)

---

## 💻 Sobre o Projeto

O **Efood** é uma SPA (Single Page Application) desenvolvida para gerenciar o fluxo de pedidos de comida. A aplicação consome uma API externa para listar restaurantes, exibir cardápios dinâmicos e gerenciar um carrinho de compras global, culminando em um formulário de entrega com validação de dados.

---

## 🎯 Motivação e Propósito

Este projeto foi desenvolvido para resolver o desafio de **gerenciamento de estado complexo** no lado do cliente.
O principal problema abordado foi: *Como manter a persistência de dados do carrinho de compras enquanto o usuário navega entre diferentes rotas e restaurantes sem perder a performance?*

A solução foca em:
* Arquitetura escalável usando React.
* Centralização do estado da aplicação (Carrinho/Pedido) via Redux Toolkit.
* Validação robusta de formulários para garantir a integridade dos dados no checkout.

---

## 📸 Demonstração Visual

Acesse o projeto online aqui: **[🔗 Link do Deploy na Vercel/Netlify](https://seu-link-aqui.com)**

### Fluxo de Usuário
*(Substitua o link abaixo por um GIF real ou imagem da sua aplicação)*
![Demo do Efood](./assets/demo-preview.gif)

---

## 🛠 Tecnologias Utilizadas

A stack foi escolhida pensando em performance, tipagem estática e manutenibilidade:

* **Core:** React (Create React App), TypeScript
* **Gerenciamento de Estado:** Redux Toolkit (Slices e Reducers)
* **Roteamento:** React Router DOM v6
* **Estilização:** Styled Components (CSS-in-JS)
* **Requisições HTTP:** Fetch API / Axios
* **Validação de Formulários:** Formik + Yup
* **Qualidade de Código:** ESLint, Prettier

---

## ⚙ Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:
* **Node.js**: Versão 16.x ou superior.
* **Gerenciador de Pacotes**: NPM ou Yarn.
* **Git**: Instalado e configurado.

---

## 🚀 Instalação e Execução

Siga o passo a passo para rodar o projeto em ambiente de desenvolvimento:

```bash
# 1. Clone o repositório
git clone [https://github.com/DouglassenG/efood.git](https://github.com/DouglassenG/efood.git)

# 2. Entre na pasta do projeto
cd efood

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Execute a aplicação
npm start
# ou
yarn start
