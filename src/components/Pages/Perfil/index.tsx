import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Footer from '../../Footer'
import Header from '../../Header'
import ProductsList from '../../ProductList'

import { add, open } from '../../../store/reducers/cart'
import { Product } from '../../../models/Product'
import { parseToBrl } from '../../../utils'

import fechar from '../../../assets/images/fechar.png'
import {
  Content,
  ContentContainer,
  Modal,
  ModalContent
} from './styles'

type ModalState = {
  isVisible: boolean
  product: Product | null
}

const Perfil = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    product: null
  })

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

  return (
    <>
      <Header />
      <ProductsList aoComprar={openModal} />

      {modal.isVisible && modal.product && (
        <Modal>
          <div className="overlay" onClick={closeModal}></div>
          <ModalContent>
            <header>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={closeModal}
              />
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