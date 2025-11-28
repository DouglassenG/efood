import Footer from '../../Footer'
import Header from '../../Header'

import ProductsList from '../../ProductList'

import image_product_1 from '../../../assets/images/image_product.png'
import Product from '../../../models/Product'

const restaurants: Product[] = [
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  },
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  },
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  },
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  },
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  },
  {
    id: 1,
    image: image_product_1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela de derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.'
  }
]

const Perfil = () => (
  <>
    <Header />
    <ProductsList products={restaurants} />
    <Footer />
  </>
)

export default Perfil
