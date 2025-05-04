import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Suppliers from './pages/Suppliers'
import Login from './pages/Login'
import Status from './pages/Status'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/restaurants' element={<Restaurants />}></Route>
          <Route path='/suppliers' element={<Suppliers />}></Route>
          <Route path='/suppliers' element={<Suppliers />}></Route>
          <Route path='/status' element={<Status />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App    