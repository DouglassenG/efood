import apresentacao from '../../assets/images/apresentacao.png'
import imagemHeader from '../../assets/images/imagem_header.png'
import { ApresentacaoContainer, HeaderContainer } from './styles'

const Header = () => (
  <>
    <HeaderContainer
      style={{ backgroundImage: `url(${imagemHeader})` }}
    ></HeaderContainer>
    <ApresentacaoContainer
      style={{ backgroundImage: `url(${apresentacao})` }}
    ></ApresentacaoContainer>
  </>
)

export default Header
