import Restaurant from '../Restaurant'
import { Container, List } from './styles'

import restaurante from '../../assets/images/restaurante.png'
import restaurante_2 from '../../assets/images/restaurante_2.png'

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
          title={'La Dolce Vita Trattoria'}
          nota={4.6}
          image={restaurante_2}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={'La Dolce Vita Trattoria'}
          nota={0}
          image={restaurante_2}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={'La Dolce Vita Trattoria'}
          nota={0}
          image={restaurante_2}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={'La Dolce Vita Trattoria'}
          nota={0}
          image={restaurante_2}
        />
        <Restaurant
          infos={[]}
          category={'Italiana'}
          title={'La Dolce Vita Trattoria'}
          nota={0}
          image={restaurante_2}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
