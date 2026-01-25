import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.laranjaClaro};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;
`

export const CopyrightText = styled.p`
  font-size: 10px;
  color: ${cores.laranja};
  max-width: 480px;
  text-align: center;
`
