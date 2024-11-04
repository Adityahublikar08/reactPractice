import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Services from "./Services"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"


function Web() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Home/></>}></Route>
        <Route path="/about" element={<><About/></>}></Route>
        <Route path="/contact" element={<><Contact/></>}></Route>
        <Route path="/Services" element={<><Services/></>}></Route>

      </Routes>
      <Footer/>
    </div>
  )
}

export default Web
