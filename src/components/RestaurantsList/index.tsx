import Restaurant from '../Restaurant'
import { Container, List } from './styles'
import TipoRestaurant from '../../models/Restaurant'

export type Props = {
  restaurants: TipoRestaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            infos={restaurant.infos}
            category={restaurant.category}
            title={restaurant.title}
            nota={restaurant.nota}
            image={restaurant.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
