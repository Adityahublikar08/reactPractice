import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Contact from './Contact'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'


function Web() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default Web
