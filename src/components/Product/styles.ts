import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.cinzaClaro};
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  h3 {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 900;
    color: ${cores.preto};
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.cinza};
  flex-grow: 1;
`
