import Home from './components/Home'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductsList from './components/RestaurantsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
