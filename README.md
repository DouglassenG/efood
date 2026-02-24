# 🍔 Efood - Plataforma de Delivery

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/Code-TypeScript-3178C6?logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/State-Redux_Toolkit-764ABC?logo=redux&logoColor=white)

> Uma aplicação frontend robusta que simula a experiência de um aplicativo de delivery de ponta a ponta, com foco em performance, gerenciamento de estado global e tipagem segura.

## 🎯 Motivação e Propósito

Construir fluxos de e-commerce (como adicionar itens, alterar quantidades e finalizar compra) exige uma arquitetura de dados sólida. O propósito deste projeto foi dominar o **Gerenciamento de Estado Global** em aplicações complexas, abandonando o *prop drilling* em favor do Redux.

O projeto resolve o problema da sincronização de dados entre diferentes rotas e componentes. Através de uma integração fluida com uma API REST, a aplicação garante que o estado do carrinho de compras seja consistente, independente da página que o usuário esteja navegando (Home, Perfil do Restaurante ou Checkout).

> **Resultado Prático e Performance:** "Utilizei a ferramenta RTK Query (Redux Toolkit) para realizar o *fetching* e cache dos dados da API e deixou o carregamento 3x mais rápido ao abrir o cardápio dos restaurantes da aplicação, evitando requisições de rede redundantes."

## 🖼️ Demonstração Visual


## 🛠️ Tecnologias Utilizadas

A stack tecnológica foi cuidadosamente escolhida para garantir previsibilidade e escalabilidade do código:

* **[ReactJS](https://react.dev/):** Biblioteca base para a construção das interfaces declarativas.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para prevenção de erros em tempo de desenvolvimento, garantindo que os dados (interfaces de Restaurantes, Pratos e Carrinho) sejam manipulados corretamente.
* **[Redux Toolkit (RTK)](https://redux-toolkit.js.org/):** Gerenciamento de estado global moderno e simplificado (Slices).
* **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview):** Ferramenta avançada para busca de dados e cache (Data Fetching).
* **[Styled Components](https://styled-components.com/):** Estilização baseada em componentes (CSS-in-JS), permitindo escopo isolado e uso de temas.
* **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas (Home e Perfil do Restaurante).

## ✨ Funcionalidades

O escopo da aplicação cobre o fluxo essencial de um usuário em um delivery:

1.  **Listagem de Restaurantes:** Consumo de API para exibir restaurantes disponíveis, com notas de avaliação e tags de categorias.
2.  **Cardápio Dinâmico:** Rotas dinâmicas que carregam os pratos específicos do restaurante selecionado.
3.  **Carrinho de Compras Global:** Adição de itens, controle de duplicidades, cálculo de subtotal e *Sidebar* interativa acessível de qualquer tela.
4.  **Checkout em Etapas (Stepper):** Formulário dividido em Entrega e Pagamento, com validações de campos obrigatórios antes do envio do pedido (POST) para a API.

## 📂 Estrutura de Arquivos

A arquitetura do projeto separa estritamente regras de negócio (store), tipagens e componentes visuais:

```text
efood/
├── src/
│   ├── assets/          # Imagens, fontes e vetores globais
│   ├── components/      # Componentes UI reutilizáveis (Button, Card, Footer, Header, Loader)
│   ├── models/          # Tipagens do TypeScript (types/interfaces)
│   ├── pages/           # Views roteáveis (Home, Perfil, Checkout)
│   ├── store/           # Configuração do Redux Toolkit
│   │   ├── reducers/    # Slices (ex: cartSlice.ts)
│   │   └── api/         # Endpoints do RTK Query (api.ts)
│   ├── styles/          # Estilos globais e configurações de Tema
│   ├── utils/           # Funções utilitárias (formatações de moeda, datas)
│   ├── App.tsx          # Componente Raiz e Provedores (Provider, BrowserRouter)
│   └── index.tsx        # Ponto de entrada (Entry Point)
├── package.json         # Dependências do projeto
└── tsconfig.json        # Configurações do TypeScript compilador
