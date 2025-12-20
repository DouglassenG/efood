import ProductModel from '../../models/Product'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  products: ProductModel[]
  aoComprar: () => void
}

const ProductList = ({ products, aoComprar }: Props) => (
  <Container>
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            aoComprar={aoComprar}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
