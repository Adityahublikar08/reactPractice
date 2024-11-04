
import Navbar from './Navbar'
import Shop from './Shop'
import Checkout from './Checkout'
import Footer from './Footer'
import Home from './Home'
import { Routes,Route } from 'react-router-dom'

function MiniAmazon() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default MiniAmazon
