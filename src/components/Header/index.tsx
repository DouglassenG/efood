import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderContainer, NavLink, Logo, CartText } from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <Link to="/">
          <NavLink>Restaurantes</NavLink>
        </Link>
        <Logo src={logo} alt="EFOOD" />
        <CartText onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartText>
      </div>
    </HeaderContainer>
  )
}

export default Header