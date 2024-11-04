
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li> <Link to ='/'>Home</Link></li>
        <li><Link to='/car'>Car content</Link></li>
        <li><Link to='/footer'>Footer</Link></li>
    
      </ul>
    </div>
  )
}

export default Navbar
