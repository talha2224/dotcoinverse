import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AosAnimation from './components/Animation/AOS'
import AllRoutes from './routers/AllRoutes'

function App() {

  return (
    <BrowserRouter>
      <AosAnimation/>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
