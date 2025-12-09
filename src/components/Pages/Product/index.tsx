import { useParams } from 'react-router-dom'

import Footer from '../../Footer'
import Header from '../../Header'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <div className="container">produto {id} </div>
      <Footer />
    </>
  )
}

export default Product
