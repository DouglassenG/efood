import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 8px;
  width: 100%;
  box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold 900;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  weight: regular 400;
  line-height: 22px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${cores.branco};
  color: ${cores.laranja};
  border: none;
  cursor: pointer;
  width: 100%;
  height: 24px;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 0;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${cores.laranja};
    color: ${cores.branco};
    border: 1px solid ${cores.branco};
  }
`
