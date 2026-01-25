import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export type StyledButtonProps = {
  $variant?: 'primary' | 'secondary'
  $fullWidth?: boolean
}

const buttonStyles = css<StyledButtonProps>`
  background-color: ${(props) =>
    props.$variant === 'primary' ? cores.laranja : cores.laranjaClaro};
  color: ${(props) =>
    props.$variant === 'primary' ? cores.brancoFundo : cores.laranja};
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'primary' ? cores.laranjaClaro : cores.laranja};
    color: ${(props) =>
      props.$variant === 'primary' ? cores.laranja : cores.brancoFundo};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ButtonContainer = styled.button<StyledButtonProps>`
  ${buttonStyles}
`
export const ButtonLink = styled(Link)<StyledButtonProps>`
  ${buttonStyles}
`
