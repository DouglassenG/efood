import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { ButtonLink, ContadorCarrinho, HeaderContainer } from './styles'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <ButtonLink href="">Restaurantes</ButtonLink>
      <img src={logo} alt="EFOOD" />
      <ContadorCarrinho>0 produto(s) no carrinho</ContadorCarrinho>
    </div>
  </HeaderContainer>
)

export default Header
