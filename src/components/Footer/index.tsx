import { FooterContainer, CopyrightText } from './styles'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="EFOOD" />
    <CopyrightText>
      A E-Food é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </CopyrightText>
  </FooterContainer>
)

export default Footer
