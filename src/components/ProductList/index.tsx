import ProductModel from '../../models/Product'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  products: ProductModel[]
}

const ProductList = ({ products }: Props) => (
  <Container>
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
