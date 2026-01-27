import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../utils/breakpoints'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 24px;
    align-items: center;
    max-width: 1024px;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 24px;
    }
  }

  a {
    text-decoration: none;
    justify-self: start;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }
`

export const Logo = styled.img`
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
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
  justify-self: end;

  &:hover {
    color: ${cores.preto};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
