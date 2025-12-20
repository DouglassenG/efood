import Tag from '../Tag'
import {
  Card,
  Titulo,
  Descricao,
  Infos,
  HeaderContainer,
  NotaContainer
} from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  id: number
  infos: string[]
  category: string
  title: string
  nota: number
  image: string
  description: string
}

const Restaurant = ({
  id,
  infos,
  category,
  title,
  nota,
  image,
  description
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
      <Tag>{category}</Tag>
    </Infos>

    <div className="container">
      <HeaderContainer>
        <Titulo as="h3">{title}</Titulo>
        <NotaContainer>
          <Titulo as="span">{nota}</Titulo>
          <img src={estrela} alt="Estrela" />
        </NotaContainer>
      </HeaderContainer>

      <Descricao>{description}</Descricao>
      <Button type="link" to={`/perfil/${id}`} title="Saiba mais">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Restaurant
