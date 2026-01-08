# 🍕 eFood - Delivery App

![Status](https://img.shields.io/badge/Status-Concluído-green)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-db7093)

> Uma aplicação web completa de delivery de restaurantes, simulando a experiência real de pedido, desde a seleção do estabelecimento até o checkout.

## 💻 Sobre o Projeto

O **eFood** é uma solução Frontend desenvolvida para resolver desafios comuns em aplicações de e-commerce. O objetivo principal foi criar uma **Single Page Application (SPA)** performática e tipada, capaz de gerenciar múltiplos estados globais sem comprometer a fluidez da navegação.

O projeto se destaca pelo uso de **Redux Toolkit** para o gerenciamento do carrinho de compras e pela arquitetura de componentes reutilizáveis, demonstrando padrões de código limpo e separação de responsabilidades.

## ⚙️ Arquitetura e Tecnologias

A aplicação foi construída sobre um stack moderno focado em manutenibilidade:

* **[React](https://reactjs.org/):** Biblioteca principal para construção da UI.
* **[TypeScript](https://www.typescriptlang.org/):** Utilizado para garantir a segurança de tipos e reduzir erros em tempo de execução.
* **[Redux Toolkit](https://redux-toolkit.js.org/):** Implementado para gerenciar o estado global da aplicação, especificamente o carrinho de compras (adicionar, remover, calcular totais) e controle de modais.
* **[Styled Components](https://styled-components.com/):** Para estilização CSS-in-JS, permitindo escopo isolado de estilos e temas dinâmicos.
* **[React Router DOM](https://reactrouter.com/):** Para gerenciamento de rotas e navegação fluida entre a Home e o Perfil do Restaurante.
* **[RTK Query / Fetch API](https://redux-toolkit.js.org/rtk-query/overview):** Para consumo de dados assíncronos (lista de restaurantes e cardápios).

## 🧩 Funcionalidades Principais

1.  **Listagem de Restaurantes:** Vitrine principal com renderização dinâmica baseada em dados da API, com filtros por categoria e avaliação.
2.  **Página de Perfil (Cardápio):** Visualização detalhada dos pratos de um restaurante específico, com modal de detalhes do produto.
3.  **Carrinho de Compras (Sidebad):**
    * Adição e remoção de itens em tempo real.
    * Cálculo automático de subtotal.
    * Persistência de estado durante a navegação.
4.  **Checkout Multi-etapas:**
    * Formulário de entrega com validação.
    * Formulário de pagamento.
    * Feedback visual de conclusão do pedido.

## 📂 Estrutura do Código

O projeto segue uma estrutura organizada para facilitar a escalabilidade:

```text
src/
├── components/      # Componentes UI isolados (Header, Product, Cart, etc.)
├── container/       # Seções maiores da página (Hero, ProductList)
├── models/          # Interfaces e Tipos do TypeScript
├── pages/           # Rotas principais (Home, Perfil)
├── services/        # Configuração de API (RTK Query ou Axios)
├── store/           # Configuração do Redux (Slices e Reducers)
├── styles/          # Estilização global e variáveis de tema
└── utils/           # Funções auxiliares (formatação de moeda, etc.)
