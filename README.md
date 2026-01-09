# 🍕 eFood - Delivery Application

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-Latest-764ABC?logo=redux)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-db7093?logo=styled-components)
![License](https://img.shields.io/badge/License-MIT-green)

> Uma aplicação Single Page Application (SPA) robusta que simula a experiência completa de um serviço de delivery, desde a escolha do restaurante até a finalização do pedido.

## 🔭 Motivação e Propósito

O projeto **eFood** foi desenvolvido para resolver o desafio de criar interfaces complexas de e-commerce no Front-end sem depender de recarregamentos de página (Client-Side Rendering).

O principal propósito técnico deste repositório é demonstrar a capacidade de:
1.  Gerenciar estados globais complexos (carrinho de compras, dados de entrega) sem "Props Drilling", utilizando **Redux Toolkit**.
2.  Garantir a integridade do código e escalabilidade através da tipagem estática com **TypeScript**.
3.  Criar uma interface visual pixel-perfect e responsiva utilizando **Styled Components**.

## 🖼️ Demonstração Visual

https://efooddouglas.vercel.app/
## 🛠️ Tecnologias Utilizadas

A arquitetura do projeto baseia-se em uma stack moderna e amplamente utilizada no mercado:

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (JavaScript Supercharged).
* **Framework/Lib:** [React.js](https://reactjs.org/).
* **Gerenciamento de Estado:** [Redux Toolkit](https://redux-toolkit.js.org/) (Store, Slices, Reducers).
* **Estilização:** [Styled Components](https://styled-components.com/) (CSS-in-JS).
* **Roteamento:** [React Router DOM](https://reactrouter.com/) (Navegação dinâmica).
* **Integração API:** Fetch API / RTK Query (para consumo de dados dos restaurantes).
* **Qualidade de Código:** ESLint e Prettier.

## 📦 Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
* [Node.js](https://nodejs.org/) (Versão 16 ou superior recomendada)
* Gerenciador de pacotes NPM ou Yarn.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DouglassenG/efood.git](https://github.com/DouglassenG/efood.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd efood
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou, se preferir usar yarn:
    yarn install
    ```

4.  **Execute a aplicação:**
    ```bash
    npm start
    # O projeto rodará na porta padrão: http://localhost:3000
    ```

## 💻 Uso e Funcionalidades

A aplicação consiste em dois fluxos principais de navegação:

1.  **Home (Listagem):**
    * Visualização de cards de restaurantes em destaque.
    * Filtragem por categorias.
    * Consumo de API para renderizar os estabelecimentos.

2.  **Perfil do Restaurante (Detalhes):**
    * Visualização do cardápio específico do restaurante.
    * **Adicionar ao Carrinho:** Funcionalidade controlada pelo Redux. Ao clicar, o item é despachado para a Store global e o sidebar do carrinho é atualizado instantaneamente.

3.  **Checkout:**
    * Formulário de Entrega com validação de campos.
    * Formulário de Pagamento (Cartão de Crédito).
    * Confirmação de pedido com feedback visual.

## 🏗️ Estrutura do Código

O projeto segue uma arquitetura modular focada em componentização:

```text
src/
├── components/      # Componentes UI reutilizáveis (Button, Card, Header)
├── container/       # Blocos lógicos de layout (ProductList, Footer)
├── models/          # Interfaces TypeScript (Tipagem de Restaurante, Prato)
├── pages/           # Rotas da aplicação (Home, Perfil)
├── services/        # Configuração de endpoints da API
├── store/           # Configuração do Redux Toolkit (Slices e Store)
├── styles/          # Estilos globais e variáveis de tema
└── utils/           # Funções utilitárias (Formatação de moeda, validações)
