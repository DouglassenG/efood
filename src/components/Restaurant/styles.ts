import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.brancoFundo};
  border: 1px solid ${cores.laranja};
  width: 100%;
  margin: 48px auto;

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    padding: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  width: 26px;
  font-size: 18px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 16px;

  img {
    width: 21px;
    margin-left: 8px;
    width: 21px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
`
export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
