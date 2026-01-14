import Product from '../Product'
import { Container, List } from './styles'
import { Product as ProductModel } from '../../models/Product'

export type Props = {
  aoComprar: (produto: ProductModel) => void
  products: ProductModel[]
}

const ProductList = ({ aoComprar, products }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.foto}
              title={product.nome}
              description={product.descricao}
              aoComprar={() => aoComprar(product)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList