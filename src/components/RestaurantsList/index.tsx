import Restaurant from '../Restaurant'
import { Container, List } from './styles'

import restaurante from '../../assets/images/restaurante.png'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          infos={['Destaque da semana']}
          category={'Japonesa'}
          title={'Hioki sushi'}
          nota={4.9}
          image={restaurante}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={''}
          nota={4.6}
          image={''}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={''}
          nota={0}
          image={''}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={''}
          nota={0}
          image={''}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={''}
          nota={0}
          image={''}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={''}
          nota={0}
          image={''}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
