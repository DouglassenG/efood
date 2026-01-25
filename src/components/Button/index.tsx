import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  fullWidth = false,
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        $variant={variant}
        $fullWidth={fullWidth}
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink
      $variant={variant}
      $fullWidth={fullWidth}
      to={to as string}
      title={title}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
