import { Restaurante } from '../../src/components/Pages/Home'
import { parseToBrl } from '../../src/utils'

type Checkout = {
  orderId: string
}

const formatAmount = (price: number) => parseToBrl(price).replace(/[^0-9,]/g, '')

describe('Fluxo de compra', () => {
  it('permite concluir uma compra do início ao fim, da Home até a Confirmação', () => {
    cy.fixture<Restaurante[]>('restaurantes.json').then((restaurantes) => {
      cy.fixture<Restaurante>('restaurante.json').then((restaurante) => {
        cy.fixture<Checkout>('checkout-sucesso.json').then((checkout) => {
          const [primeiroRestaurante] = restaurantes
          const [primeiroProduto] = restaurante.cardapio

          cy.intercept(
            'GET',
            'https://api-ebac.vercel.app/api/efood/restaurantes',
            { fixture: 'restaurantes.json' }
          ).as('getRestaurantes')

          cy.visit('/')
          cy.wait('@getRestaurantes')

          restaurantes.forEach((item) => {
            cy.contains(item.titulo).should('be.visible')
          })

          cy.intercept(
            'GET',
            `https://api-ebac.vercel.app/api/efood/restaurantes/${primeiroRestaurante.id}`,
            { fixture: 'restaurante.json' }
          ).as('getRestaurante')

          cy.get('a[title="Saiba mais"]').first().click()

          cy.url().should('include', `/perfil/${primeiroRestaurante.id}`)
          cy.wait('@getRestaurante')
          cy.contains(primeiroProduto.nome).should('be.visible')

          cy.get('button[title="Adicionar ao carrinho"]').first().click()

          cy.contains('h2', primeiroProduto.nome).should('be.visible')
          cy.contains(`Serve: ${primeiroProduto.porcao}`).should('be.visible')

          cy.contains('button', 'Adicionar ao carrinho -').click()

          cy.contains('h2', primeiroProduto.nome).should('not.exist')

          cy.get('aside').within(() => {
            cy.contains(primeiroProduto.nome).should('be.visible')
            cy.contains(formatAmount(primeiroProduto.preco)).should('be.visible')

            cy.get(
              'button[title="Clique aqui para continuar com a entrega"]'
            ).click()

            cy.get('#receiver').type('Maria da Silva')
            cy.get('#description').type('Rua das Flores, 123, Jardim Europa')
            cy.get('#city').type('São Paulo')
            cy.get('#zipCode').type('01001-000')
            cy.get('#number').type('123')
            cy.get('button[title="Continuar com o pagamento"]').click()

            cy.contains('Pagamento - Valor a pagar').should('be.visible')
            cy.contains(formatAmount(primeiroProduto.preco)).should('be.visible')

            cy.get('#cardName').type('Maria da Silva')
            cy.get('#cardNumber').type('1234567890123456')
            cy.get('#cvv').type('123')
            cy.get('#expiresMonth').type('12')
            cy.get('#expiresYear').type('2030')
          })

          cy.intercept(
            'POST',
            'https://api-ebac.vercel.app/api/efood/checkout',
            { fixture: 'checkout-sucesso.json' }
          ).as('postCheckout')

          cy.get('aside').within(() => {
            cy.get('button[title="Finalizar pagamento"]').click()
          })

          cy.wait('@postCheckout')

          cy.get('aside').within(() => {
            cy.contains(`Pedido realizado - ${checkout.orderId}`).should(
              'be.visible'
            )
            cy.get('button[title="Concluir"]').click()
          })

          cy.get('.is-open').should('not.exist')
        })
      })
    })
  })
})
