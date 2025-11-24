import ProductsList from '../../RestaurantsList'

import Restaurant from '../../../assets/images/restaurante.png'
import TipoRestaurant from '../../../models/Restaurant'

import Footer from '../../Footer'
import Header from '../../Header'
import Product from '../../Product'

const restaurants: TipoRestaurant[] = [
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  }
]

const Perfil = () => (
  <>
    <Header />
    <Product />
    <ProductsList restaurants={restaurants} />
    <Footer />
  </>
)

export default Perfil
