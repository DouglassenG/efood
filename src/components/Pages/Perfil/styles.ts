import styled from 'styled-components'
import { cores } from '../../../styles'

export const Modal = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: block;
  color: ${cores.branco};

  .container {
    width: 100%;
    height: 344px;
    background-color: ${cores.laranja};
  }
`
export const ModalContent = styled.div`
  header {
    display: flex;
    justify-content: flex-end;
    padding: 8px;

    img {
      cursor: pointer;
    }
  }
`
export const Content = styled.div`
  display: flex;
  padding: 0 32px;
  gap: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const ContentContainer = styled.div`
  h2 {
    font-size: 18px;
    display: block;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`
export const Botao = styled.button`
  background-color: ${cores.branco};
  color: ${cores.laranja};
  justify-content: flex-start;
  cursor: pointer;
  border: none;
  padding: 4px 7px;
  font-weight: bold;
  font-size: 14px;
`
