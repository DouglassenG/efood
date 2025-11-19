import Hero from '../../Hero'
import ProductsList from '../../RestaurantsList'

import Restaurant from '../../../assets/images/restaurante.png'
import TipoRestaurant from '../../../models/Restaurant'

const restaurants: TipoRestaurant[] = [
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  },
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  },
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  },
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  },
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  },
  {
    id: 1,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi',
    nota: 4.9,
    image: Restaurant
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList restaurants={restaurants} />
  </>
)

export default Home
