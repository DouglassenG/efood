import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeroContainer } from './styles'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${fundo})` }}>
    <img src={logo} alt="EFOOD" />
    <h2>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h2>
  </HeroContainer>
)

export default Hero
