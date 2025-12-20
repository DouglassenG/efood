import { Restaurante } from '../Pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurante) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              infos={getRestaurantTags(restaurant)}
              category={restaurant.tipo}
              title={restaurant.titulo}
              nota={restaurant.avaliacao}
              image={restaurant.capa}
              description={restaurant.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
