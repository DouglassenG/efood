import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer as StyledButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.branco};
  z-index: 1;
  padding: 32px 16px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.15);
  
  &.is-open > & {
    transform: translateX(0);
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.preto};
    text-align: center;
  }

  ${StyledButtonContainer} {
    background-color: ${cores.laranja};
    color: ${cores.brancoFundo};

    &:hover {
      background-color: ${cores.laranjaClaro};
      color: ${cores.laranja};
    }
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.preto};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    color: ${cores.cinza};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.brancoFundo};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h3 {
    color: ${cores.preto};
    font-weight: 900;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${cores.cinza};
    font-weight: 400;
    font-size: 14px;
  }

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 16px;
      height: 16px;
    }
  }
`
// Styles for Checkout Forms (Delivery, Payment)
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.preto};
  margin-bottom: 16px;
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div`
  flex: auto;
  margin-bottom: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.preto};
  display: block;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  background-color: ${cores.brancoFundo};
  border: 1px solid ${cores.cinzaClaro};
  border-radius: 8px;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  color: ${cores.preto};
  transition: border 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${cores.preto};
  }

  &.error {
    border-color: red;
    background-color: #fff0f0;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    margin-bottom: 8px;
  }
`
export const ConfirmationMessage = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.preto};
  margin-bottom: 24px;
`