import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import Log from './pages/Log'
import Otp from './pages/Otp'
import Page from './pages/Page'
import Records from './pages/Records'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/login' element={<Log/>}/>
      <Route path='/records' element={<Records/>}/>

      <Route path='*' element={<Page/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
