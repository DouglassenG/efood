import Hero from '../../Hero'

import Restaurant from '../../../assets/images/restaurante.png'
import TipoRestaurant from '../../../models/Restaurant'
import Footer from '../../Footer'
import RestaurantsList from '../../RestaurantsList'

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
    id: 2,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    image: Restaurant
  },
  {
    id: 3,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    image: Restaurant
  },
  {
    id: 4,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    image: Restaurant
  },
  {
    id: 5,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    image: Restaurant
  },
  {
    id: 6,
    infos: [],
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    image: Restaurant
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurants} />
    <Footer />
  </>
)

export default Home
