import Button from '../Button'
import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  infos: string[]
  category: string
  title: string
  nota: number
  image: string
}

const Restaurant = ({ infos, category, title, nota, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Tag>{category}</Tag>
    <div>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <div className="container">
      <Titulo>{title}</Titulo>
      <Titulo>
        {nota}
        <img src={estrela} alt="Estrela" />
      </Titulo>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque
        laborum architecto sequi, consectetur libero deserunt explicabo sunt
        nobis ipsum doloremque ad ratione facilis, unde soluta distinctio
        placeat alias rem.
      </Descricao>
      <Button type="link" to="/restaurant" title="Saiba mais">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Restaurant
