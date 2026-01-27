import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../utils/breakpoints'

export const FooterContainer = styled.footer`
  background-color: ${cores.laranjaClaro};
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 40px 24px;
    gap: 24px; /* Add some gap for when it wraps */
  }
`

export const CopyrightText = styled.p`
  font-size: 10px;
  color: ${cores.laranja};
  max-width: 480px;
  text-align: center;
`
