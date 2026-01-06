import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import Button from '../Button'
import Delivery from '../Delivery'
import Payment from '../Payment'
import Confirmation from '../Confirmation'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { parseToBrl } from '../../utils'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [checkoutStep, setCheckoutStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')
  const [deliveryData, setDeliveryData] = useState<any>(null)
  const [orderId, setOrderId] = useState('')

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToDelivery = () => {
    if (items.length > 0) {
      setCheckoutStep('delivery')
    }
  }

  const backToCart = () => {
    setCheckoutStep('cart')
  }

  const goToPayment = (data: any) => {
    setDeliveryData(data)
    setCheckoutStep('payment')
  }

  const backToDelivery = () => {
    setCheckoutStep('delivery')
  }

  const finishCheckout = async (paymentData: any) => {
    const payload = {
      products: items.map((item) => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: deliveryData.receiver,
        address: {
          description: deliveryData.description,
          city: deliveryData.city,
          zipCode: deliveryData.zipCode,
          number: Number(deliveryData.number),
          complement: deliveryData.complement
        }
      },
      payment: {
        card: {
          name: paymentData.cardName,
          number: paymentData.cardNumber,
          code: Number(paymentData.cvv),
          expires: {
            month: Number(paymentData.expiresMonth),
            year: Number(paymentData.expiresYear)
          }
        }
      }
    }

    try {
      const res = await fetch(
        'https://api-ebac.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      )

      if (res.ok) {
        const resData = await res.json()
        setOrderId(resData.orderId)
        setCheckoutStep('confirmation')
        dispatch(clear())
      } else {
        alert('Erro ao processar pedido')
      }
    } catch (err) {
      console.error(err)
      alert('Erro de conexão')
    }
  }

  const completeOrder = () => {
    dispatch(close())
    setCheckoutStep('cart')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {checkoutStep === 'cart' && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button onClick={() => removeItem(item.id)} type="button">
                        <img src={lixeira} alt="Remover item do carrinho" />
                      </button>
                    </CartItem>
                  ))}
                </ul>
                <Prices>
                  Valor total <span>{parseToBrl(getTotalPrice())}</span>
                </Prices>
                <Button
                  onClick={goToDelivery}
                  title="Clique aqui para continuar com a entrega"
                  type="button"
                  fullWidth
                  variant="secondary"
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            )}
          </>
        )}
        {checkoutStep === 'delivery' && (
          <Delivery onNext={goToPayment} onBack={backToCart} />
        )}
        {checkoutStep === 'payment' && (
          <Payment
            onNext={finishCheckout}
            onBack={backToDelivery}
            price={getTotalPrice()}
          />
        )}
        {checkoutStep === 'confirmation' && (
          <Confirmation orderId={orderId} onConfirm={completeOrder} />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart