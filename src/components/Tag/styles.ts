import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.brancoFundo};
  color: ${cores.laranja};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
`
