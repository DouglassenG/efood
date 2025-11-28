import { BotaoAdicionar, CardProduct, Descricao } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <CardProduct>
    <div className="container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Descricao>{description}</Descricao>
      <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
    </div>
  </CardProduct>
)

export default Product
