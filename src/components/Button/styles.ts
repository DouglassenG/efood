import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${cores.branco};
    color: ${cores.laranja};
    border: 1px solid ${cores.laranja};
    display: inline-block;
  }
`
