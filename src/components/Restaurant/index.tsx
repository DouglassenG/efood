import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

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
    <Tag>
      <span>{category}</span>
    </Tag>
    <div>
      {infos.map((info) => (
        <Tag key={info}>
          <span>{info}</span>
        </Tag>
      ))}
    </div>
    <div className="container">
      <Titulo>{title}</Titulo>
      <Titulo>{nota}</Titulo>
    </div>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque
      laborum architecto sequi, consectetur libero deserunt explicabo sunt nobis
      ipsum doloremque ad ratione facilis, unde soluta distinctio placeat alias
      rem.
    </Descricao>
    <button>Saiba mais</button>
  </Card>
)

export default Restaurant
