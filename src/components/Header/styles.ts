import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  padding: 63px 0 68px 0;
  text-align: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
    width: 100%;
  }
`

export const ButtonLink = styled.a`
  text-decoration: none;
  align-itens: center;
  justify-content: center;
  display: flex;
  color: ${cores.laranja};
  font-weight: bold;
  size: 18px;
`

export const ContadorCarrinho = styled.span`
  color: ${cores.laranja};
  font-weight: bold;
  size: 18px;
`

export const ApresentacaoContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  text-align: center;
`
