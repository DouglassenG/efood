import Footer from '../../Footer'
import Header from '../../Header'

import ProductsList from '../../ProductList'

import fechar from '../../../assets/images/fechar.png'
import image_product from '../../../assets/images/image_product.png'
import {
  Content,
  ContentContainer,
  Modal,
  ModalContent
} from './styles'
import React, { useState } from 'react'

const Perfil = () => {
  // Estado para controlar a exibição do modal
  const [modalEstaFuncionando, setModalEstaFuncionando] = useState(false)

  // Função para abrir o modal
  const abrirModal = () => setModalEstaFuncionando(true)

  // Função para fechar o modal
  const fecharModal = () => setModalEstaFuncionando(false)

  return (
    <>
      <Header />
      <ProductsList aoComprar={abrirModal} />

      {modalEstaFuncionando && (
        <Modal>
          <div className="overlay" onClick={fecharModal}></div>
          <ModalContent>
            <header>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={fecharModal}
              />
            </header>
            <Content>
              <img src={image_product} alt="Pizza" />
              <ContentContainer>
                <h2>Pizza Marguerita</h2>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                  <br />
                  <br />
                  Serve de 2 a 3 pessoas
                </p>
                <button>Adicionar ao carrinho - R$ 60,90</button>
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
