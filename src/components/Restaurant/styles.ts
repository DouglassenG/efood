import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.cinzaClaro};
  border-radius: 8px;
  width: 100%;
  margin: 0; /* Reset margin, as the grid will handle spacing */
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    padding: 8px 16px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.preto};
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  span {
    margin-right: 8px;
  }

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.cinza};
  margin-bottom: 16px;
  flex-grow: 1;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
