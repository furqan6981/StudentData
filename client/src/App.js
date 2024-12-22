import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Data from './Screens/Data'
import Home from './Screens/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
    <Navbar/>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/data' element={<Data/>} />
      </Routes>
    </div>
  )
}

export default App
