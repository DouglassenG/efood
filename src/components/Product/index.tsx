import { CardProduct } from './styles'
import image_3 from '../../assets/images/image_product.png'

const Product = () => (
  <CardProduct>
    <div className="container">
      <img src={image_3} alt="" />
      <h3>Pizza marguerita</h3>
      <p>
        A clássica Marguerita: molho de tomate suculento, mussarela de
        derretida, manjerica fresca e um toque de azeite. Sabor e simplicidade.
      </p>
      <button>Adicionar ao carrinho</button>
    </div>
  </CardProduct>
)

export default Product
