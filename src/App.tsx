import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
