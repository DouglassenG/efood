import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Footer from '../../Footer'
import Header from '../../Header'
import ProductsList from '../../ProductList'
import { Restaurante } from '../Home'

import { add, open } from '../../../store/reducers/cart'
import { Product } from '../../../models/Product'
import { parseToBrl } from '../../../utils'

import fechar from '../../../assets/images/fechar.png'
import {
  Content,
  ContentContainer,
  Modal,
  ModalContent,
  Apresentacao,
  Titulo,
  Tipo
} from './styles'

type ModalState = {
  isVisible: boolean
  product: Product | null
}

const Perfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    product: null
  })
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  const openModal = (product: Product) => {
    setModal({
      isVisible: true,
      product
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      product: null
    })
  }

  const addToCart = () => {
    if (modal.product) {
      dispatch(add(modal.product))
      dispatch(open())
      closeModal()
    }
  }

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Apresentacao style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          <Tipo>{restaurant.tipo}</Tipo>
          <Titulo>{restaurant.titulo}</Titulo>
        </div>
      </Apresentacao>
      <ProductsList aoComprar={openModal} products={restaurant.cardapio} />

      {modal.isVisible && modal.product && (
        <Modal>
          <div className="overlay" onClick={closeModal}></div>
          <ModalContent>
            <header>
              <img src={fechar} alt="Ícone de fechar" onClick={closeModal} />
            </header>
            <Content>
              <img src={modal.product.foto} alt={modal.product.nome} />
              <ContentContainer>
                <h2>{modal.product.nome}</h2>
                <p>
                  {modal.product.descricao}
                  <br />
                  <br />
                  Serve: {modal.product.porcao}
                </p>
                <button onClick={addToCart}>
                  Adicionar ao carrinho - {parseToBrl(modal.product.preco)}
                </button>
              </ContentContainer>
            </Content>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </>
  )
}

export default Perfil
