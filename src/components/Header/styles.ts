import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
`

export const NavLink = styled.p`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.laranja};
  text-shadow: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${cores.preto};
  }
`

export const CartText = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.laranja};
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: none;

  &:hover {
    color: ${cores.preto};
  }
`
