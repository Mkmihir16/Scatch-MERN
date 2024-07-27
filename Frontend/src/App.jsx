import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Shop from './Components/Shop'
import { Routes } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Productupload from './Components/Productupload'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create/product' element={<Productupload/>}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
