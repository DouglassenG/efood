import styled from 'styled-components'
import { cores } from '../../styles'


export const TagContainer = styled.div<{ size?: 'small' | 'big' }>`
  background-color: ${cores.laranja};
  color: ${cores.laranjaClaro};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 8px')};
  border-radius: 8px;
  display: inline-block;
`
