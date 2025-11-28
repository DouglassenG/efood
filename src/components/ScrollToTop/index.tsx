import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  // 1. Obtém o objeto de localização atual
  const { pathname } = useLocation()

  // 2. Executa a função toda vez que o 'pathname' (a rota) muda
  useEffect(() => {
    // Rola para o topo do documento
    window.scrollTo(0, 0)

    // Apenas para fins de diagnóstico:
    console.log(`Rolando para o topo ao navegar para: ${pathname}`)
  }, [pathname]) // Dependência: re-executa quando a rota muda

  // Este componente não renderiza nada no DOM, ele é apenas lógica
  return null
}

export default ScrollToTop
