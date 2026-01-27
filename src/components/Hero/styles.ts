import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../utils/breakpoints'

export const HeroContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    font-weight: 900;
    font-size: 36px;
    color: ${cores.preto};
    max-width: 540px;
    line-height: 1.2;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
      padding: 0 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 40px 0;
  }
`
