
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Services from './Services'
import Plans from './Plans'

function Gym() {
  return (
    <div style={{backgroundColor:"#272628",overflowX:"hidden"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/about' element={<><About/></>}></Route>
        <Route path='/services' element={<><Services/></>}></Route>
        <Route path='/plans' element={<><Plans/></>}></Route>

      </Routes>
      <Footer/>
    </div>
  )
}

export default Gym
