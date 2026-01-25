import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonContainer } from '../../Button/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.branco};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: flex-end;
    padding: 8px;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: 0 32px 32px 32px;
  gap: 24px;
  color: ${cores.preto};

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    flex-grow: 1;
  }

  ${ButtonContainer} {
    width: fit-content;
  }
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: ${cores.branco};

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
`

export const Tipo = styled.p`
  font-size: 32px;
  font-weight: 100;
  opacity: 0.8;
`
