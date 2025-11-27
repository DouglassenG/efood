import Product from '../Product'
import { Container, List } from './styles'

import image_product_1 from '../../assets/images/image_product.png'

const ProductList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
        <Product
          image={image_product_1}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
          }
        />
      </List>
    </div>
  </Container>
)

export default ProductList
