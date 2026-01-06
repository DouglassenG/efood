import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 163px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
`

export const Titulo = styled.h2`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.laranja};
`
