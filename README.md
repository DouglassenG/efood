# 🍕 Efood - Plataforma de Delivery Gastronômico

![GitHub license](https://img.shields.io/github/license/DouglassenG/efood?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/DouglassenG/efood?style=flat-square)
![Netlify Status](https://img.shields.io/netlify/deploy-status?style=flat-square&label=Deploy)

> Uma aplicação Front-end robusta que simula a experiência completa de um app de delivery, gerenciando múltiplos estados de carrinho e dados de restaurantes.

---

## 📑 Tabela de Conteúdos
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Motivação e Propósito](#-motivação-e-propósito)
3. [Demonstração Visual](#-demonstração-visual)
4. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
5. [Estrutura do Código](#-estrutura-do-código)
6. [Pré-requisitos](#-pré-requisitos)
7. [Instalação e Uso](#-instalação-e-uso)
8. [Como Contribuir](#-como-contribuir)
9. [FAQ / Solução de Problemas](#-faq--solução-de-problemas)
10. [Licença](#-licença)
11. [Autores](#-autores)

---

## 💻 Sobre o Projeto

O **Efood** é uma SPA (Single Page Application) focada na experiência do usuário de e-commerce. A aplicação lista restaurantes consumindo uma API REST, renderiza cardápios dinâmicos baseados na seleção e gerencia um carrinho de compras global, permitindo adição/remoção de itens e cálculo de preços em tempo real, finalizando com um checkout validado.

---

## 🎯 Motivação e Propósito

O principal desafio técnico abordado neste projeto foi o **Gerenciamento de Estado Complexo** e a **UX (User Experience)**.

**Problemas resolvidos:**
* **Persistência de Dados:** Como manter o carrinho do usuário ativo enquanto ele navega entre diferentes páginas? (Solução via Redux).
* **Feedback Visual:** Como informar ao usuário que uma ação (clique) foi processada? (Uso de Loaders e Feedbacks visuais).
* **Integridade de Dados:** Garantir que o formulário de entrega não seja enviado com dados incompletos.

---

## 📸 Demonstração Visual

Acesse o projeto online: **[🔗 Link do Deploy (Vercel/Netlify)](https://seu-link-aqui.com)**

![Screenshot Principal](./assets/cover-efood.png)
*(Recomendo adicionar um GIF aqui mostrando o fluxo de adicionar um item ao carrinho)*

---

## 🛠 Tecnologias Utilizadas

A stack foi selecionada para garantir tipagem estática, performance e componentização escalável:

* **Linguagem:** TypeScript
* **Framework:** React (Create React App)
* **State Management:** Redux Toolkit
* **Estilização:** Styled Components
* **Roteamento:** React Router DOM v6
* **Validação:** Formik + Yup
* **API Client:** Fetch API

---

## 📂 Estrutura do Código

A arquitetura do projeto segue o padrão de separação por responsabilidades, facilitando a manutenção e escalabilidade.

```bash
src/
├── components/       # Componentes visuais reutilizáveis (UI)
│   ├── Button/
│   ├── Product/
│   └── Header/
├── pages/            # Páginas da aplicação (Roteamento)
│   ├── Home/
│   └── Perfil/
├── store/            # Lógica de Estado Global (Redux)
│   ├── reducers/     # Fatias de estado (cartSlice, etc)
│   └── index.ts      # Configuração da Store
├── styles/           # Estilos Globais e Variáveis
├── models/           # Interfaces e Tipos TypeScript
├── services/         # Configuração de chamadas à API
└── utils/            # Funções auxiliares (formatadores de preço)
