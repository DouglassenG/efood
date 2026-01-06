import { Link } from 'react-router-dom'
import { HeaderContainer, Titulo } from './styles'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Link to="/">
        <Titulo>Restaurantes</Titulo>
      </Link>
      <img src={logo} alt="EFOOD" />
      <Titulo>0 produto(s) no carrinho</Titulo>
    </div>
  </HeaderContainer>
)

export default Header
