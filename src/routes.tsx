import { Routes, Route } from 'react-router-dom'
import Perfil from './components/Pages/Perfil'
import Home from './components/Pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
