import { Routes, Route } from 'react-router-dom'
import Perfil from './components/Pages/Perfil'
import Home from './components/Pages/Home'
import Product from './components/Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
