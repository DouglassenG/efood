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
`
