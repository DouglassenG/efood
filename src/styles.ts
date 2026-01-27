import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFF',
  preto: '#333',
  cinza: '#888',
  cinzaClaro: '#DDD',
  brancoFundo: '#F8F8F8', // Changed from #FFF8F2
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
    color: ${cores.preto};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }

  a, button {
    transition: all 0.2s ease-in-out;
  }
`
