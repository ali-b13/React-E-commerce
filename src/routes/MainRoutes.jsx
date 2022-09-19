import React, { useState } from 'react'
import Home from '../pages/home/Home'
import {Routes,Route} from 'react-router-dom'
import Cart from '../pages/cart/Cart'
const MainRouter = () => {
  return (
    <Routes>
   <Route element={<Home/>} exact path={'/'}></Route>
   <Route element={<Cart/>} exact path={'/cart'}></Route>
    </Routes>
  )
}

export default MainRouter