import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.brancoFundo};
  border: 1px solid ${cores.laranja};
  width: 100%;
  margin: 48px auto;
  position: relative;
  box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.4);
  display: block;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    padding: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  line-height: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Coloca o Título na esquerda e a Nota na direita */
  align-items: center; /* Alinha os itens verticalmente ao centro */
  margin-top: 8px;
  margin-bottom: 16px;
  flex-wrap: no-wrap;
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 21px;
    margin-left: 8px;
  }

  ${Titulo} {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: block;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
