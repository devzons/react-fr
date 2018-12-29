import React from 'react'

import Product from './components/Product'
import productsData from './components/myProducts'

function App() {
  const productsList = productsData.map( product => <Product key={product.id} product={product} /> )


  return(
    <div>
      {productsList}
    </div>
  )
}

export default App