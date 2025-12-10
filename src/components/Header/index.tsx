import apresentacao from '../../assets/images/apresentacao.png'
import header from '../../assets/images/header.png'
import { ApresentacaoContainer, HeaderContainer } from './styles'

const Header = () => (
  <>
    <HeaderContainer
      style={{ backgroundImage: `url(${header})` }}
    ></HeaderContainer>
    <ApresentacaoContainer
      style={{ backgroundImage: `url(${apresentacao})` }}
    ></ApresentacaoContainer>
  </>
)

export default Header
