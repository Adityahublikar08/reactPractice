
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
     <li><Link to='/' >Home</Link></li>
     <li><Link to='/services' >Services</Link></li>
     <li><Link to='/About' >About</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
