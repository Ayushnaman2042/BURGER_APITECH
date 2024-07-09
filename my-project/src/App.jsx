import React, { useState } from 'react'
import Productlist from './Components/Productlist'
import Header from './Components/Header'



function App() {
  const [product,setProduct] = useState([
    { type: 'AluTiki', color: '#f5a623', price: 2 },
    { type: 'Paneer', color: '#d0021b', price: 3 },
    { type: 'Cheese', color: '#f8e71c', price: 1.5 },
  ])
  return (
    <div>
      <Header/>
      <Productlist product={product}/>

    </div>
  )
}

export default App
