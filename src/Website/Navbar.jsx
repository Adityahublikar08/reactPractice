import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div>
      <nav style={{display:"flex",justifyContent:"space-between"}}>
     <Link to='/'>Home</Link>
     <Link to='/contact'>Contact</Link>
     <Link to='/about'>About</Link>
     <Link to='/services'>Services</Link>
     
      </nav>
    </div>
  )
}

export default Navbar
