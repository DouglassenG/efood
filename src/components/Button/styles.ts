import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export type StyledButtonProps = {
  $variant?: 'primary' | 'secondary'
  $fullWidth?: boolean
}

export const ButtonContainer = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$variant === 'primary' ? cores.laranja : cores.brancoFundo};
  color: ${(props) =>
    props.$variant === 'primary' ? cores.brancoFundo : cores.laranja};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  border: none;
`
export const ButtonLink = styled(Link)<StyledButtonProps>`
  background-color: ${(props) =>
    props.$variant === 'primary' ? cores.laranja : cores.brancoFundo};
  color: ${(props) =>
    props.$variant === 'primary' ? cores.brancoFundo : cores.laranja};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s ease;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  text-align: center;

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'primary' ? cores.brancoFundo : cores.laranja};
    color: ${(props) =>
      props.$variant === 'primary' ? cores.laranja : cores.brancoFundo};
  }
`
