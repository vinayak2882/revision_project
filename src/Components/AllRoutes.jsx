import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../Pages/Cart';
import HomePage from '../Pages/HomePage';
import SingleProduct from '../Pages/SingleProduct';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path="/:id" element={<SingleProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
  )
}

export default AllRoutes
