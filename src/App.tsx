import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'
import ScrollToTop from './components/ScrollToTop'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
