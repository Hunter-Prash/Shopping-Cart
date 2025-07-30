import React from 'react'
import list from './list.json'
import ProductPage from './ProductPage'
import { Route,Routes } from 'react-router-dom'
import Cart from './Cart'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage products={list} />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
