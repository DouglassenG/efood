import Button from '../Button'
import { CardProduct, Descricao } from './styles'

type Props = {
  image: string
  title: string
  description: string
  aoComprar: () => void
}

const Product = ({ image, title, description, aoComprar }: Props) => (
  <CardProduct>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <Descricao>{description}</Descricao>
    <Button
      type="button"
      variant="secondary"
      title="Adicionar ao carrinho"
      onClick={aoComprar}
      fullWidth
    >
      Adicionar ao carrinho
    </Button>
  </CardProduct>
)

export default Product
