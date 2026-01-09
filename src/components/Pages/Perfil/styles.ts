import styled from 'styled-components'
import { cores } from '../../../styles'

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
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.laranja};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 8px;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: 0 32px 32px 32px;
  gap: 24px;
  color: ${cores.branco};

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }

  button {
    background-color: ${cores.branco};
    color: ${cores.laranja};
    border: none;
    padding: 4px 7px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
  }
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 298px;
  display: block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
