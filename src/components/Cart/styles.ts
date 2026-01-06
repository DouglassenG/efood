import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
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
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  
  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.brancoFundo};
    text-align: center;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.brancoFundo};
  margin-bottom: 16px;
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.brancoFundo};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.laranjaClaro};
  padding: 8px 8px 12px 8px;
  position: relative;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    color: ${cores.laranja};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.laranja};
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

    img {
      width: 16px;
      height: 16px;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div`
  flex: auto;
  
  max-width: auto;
  margin-bottom: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.brancoFundo};
  display: block;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  background-color: ${cores.laranjaClaro};
  border: 1px solid ${cores.laranjaClaro};
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #4B4B4B;
  
  &.error {
    border: 2px solid red;
  }
`

export const ButtonContainer = styled.div`
    margin-top: 16px;
`