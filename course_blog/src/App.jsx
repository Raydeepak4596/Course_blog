import React from 'react'
import Navbar from './Component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Component/Footer'
import Detailpage from './Pages/Detailpage'

const App = () => {
  return (
   <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/detailpage/:id' element={<Detailpage/>}/>
  </Routes>
  <Footer/>
   </>
  )
}

export default App