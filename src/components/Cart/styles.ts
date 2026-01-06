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