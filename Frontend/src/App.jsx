import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Admin from './Components/Admin'
import Shop from './Components/Shop'
import Adminlogin from './Components/Adminlogin'
import Adminregister from './Components/Adminregister'
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
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admin/login' element={<Adminlogin/>}></Route>
      <Route path='/admin/register' element={<Adminregister/>}></Route>

    </Routes>
  )
}

export default App
