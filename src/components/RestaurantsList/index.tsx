import Restaurant from '../Restaurant'
import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          infos={[]}
          category={''}
          title={'Hioki sushi'}
          nota={0}
          image={''}
        />
        <Restaurant infos={[]} category={''} title={''} nota={4.6} image={''} />
        <Restaurant infos={[]} category={''} title={''} nota={0} image={''} />
        <Restaurant infos={[]} category={''} title={''} nota={0} image={''} />
        <Restaurant infos={[]} category={''} title={''} nota={0} image={''} />
        <Restaurant infos={[]} category={''} title={''} nota={0} image={''} />
      </List>
    </div>
  </Container>
)

export default ProductsList
