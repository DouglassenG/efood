import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFF',
  brancoFundo: '#FFF8F2',
  laranja: '#E66767',
  laranjaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${cores.brancoFundo};
  color: ${cores.laranja};
}
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`
