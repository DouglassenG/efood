import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { parseToBrl } from '../../utils'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
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
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
          title="Clique aqui para continuar com a entrega"
          type="button"
          fullWidth
          variant="secondary"
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
