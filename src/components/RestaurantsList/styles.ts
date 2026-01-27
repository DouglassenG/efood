import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints'

export const Container = styled.section`
  padding: 80px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 24px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
  }
`
