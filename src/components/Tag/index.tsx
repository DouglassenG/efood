import { JSX } from 'react'
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: JSX.Element
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
