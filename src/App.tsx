import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
