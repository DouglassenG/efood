import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product'
import { Container, List } from './styles'
import { Restaurante } from '../Pages/Home'

export type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type Props = {
  aoComprar: () => void
}

const ProductList = ({ aoComprar }: Props) => {
  const { id } = useParams()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        const restaurante = res.find((r) => r.id === Number(id))

        if (restaurante) {
          setProducts(restaurante.cardapio)
        }
      })
  }, [id])

  return (
    <Container>
      <div className="container">
        <List>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.foto}
              title={product.nome}
              description={product.descricao}
              aoComprar={aoComprar}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
