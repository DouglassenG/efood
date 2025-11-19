import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'
import Perfil from './components/Pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

rotas

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
