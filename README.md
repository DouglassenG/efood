# 🍕 Efood - Delivery App

![GitHub repo size](https://img.shields.io/github/repo-size/DouglassenG/efood?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/DouglassenG/efood?style=flat-square)
![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_ID/deploy-status)

---

## 🚀 Deploy & Demonstração

Acesse o projeto online para testar a experiência:
### [🟢 Ver Projeto Online (Vercel/Netlify)](https://seulinkaqui.com)

*(Dica: Se possível, adicione aqui um GIF curto de 5 segundos mostrando a navegação entre a Home e o Carrinho)*

![Screenshot do Projeto](./assets/cover-efood.png)

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido focando em performance e escalabilidade no frontend:

* **Core:** ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
* **Gerenciamento de Estado:** ![Redux](https://img.shields.io/badge/-Redux_Toolkit-764ABC?logo=redux&logoColor=white)
* **Estilização:** ![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white)
* **Rotas:** React Router DOM
* **Code Quality:** Eslint, Prettier

---

## ✨ Funcionalidades

Este projeto resolve o problema de listagem e compra de itens de restaurantes.

- [x] **Listagem de Restaurantes:** Vitrine dinâmica consumindo API.
- [x] **Página de Detalhes:** Cardápio exclusivo de cada restaurante.
- [x] **Carrinho de Compras (Redux):** Adição e remoção de itens com cálculo automático de subtotal.
- [x] **Checkout:** Validação de formulário de entrega e pagamento.
- [x] **Responsividade:** Layout adaptável para Mobile, Tablet e Desktop.

---

## 🏗️ Arquitetura e Decisões Técnicas

Durante o desenvolvimento, adotei padrões de mercado para garantir manutenibilidade:

1.  **Redux Toolkit:** Utilizado para evitar *prop drilling* no gerenciamento do carrinho (Sidebar), mantendo o estado global previsível.
2.  **Componentização:** Separação estrita entre *Components* (visuais/burros) e *Containers/Pages* (lógicos), facilitando testes unitários futuros.
3.  **Typagem Estrita:** Uso de TypeScript para garantir a integridade dos dados vindos da API e props dos componentes.

---

## 🔧 Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

**Pré-requisitos:** Node.js (v16 ou superior).

```bash
# 1. Clone o repositório
git clone [https://github.com/DouglassenG/efood.git](https://github.com/DouglassenG/efood.git)

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Execute o projeto
npm start
