import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Navbar() {
  const navigate = useNavigate();
    const handleNav=()=>{
        navigate('/plans')
    }
  return (
    <div>
      <div id="top">
      <nav >
        <div style={{width:'400px'}}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QjqFpt8RZqEMipxWS4GBCAflP2sXBC0kHA&s"
            alt="logo"
            height="100px"
          />
        </div>
        <div id="middle">
          <Link  to="/"style={{color:'white',textDecoration:"none"}}>Home</Link>
          <Link to="/about"style={{color:'white',textDecoration:"none"}}>About</Link>
       
          <Link to="/services"style={{color:'white',textDecoration:"none"}}>Services</Link>
          <Link to="/plans"style={{color:'white',textDecoration:"none"}}>Plans</Link>
        </div>
        
      </nav>
    <div id="right">
    <button onClick={handleNav}>Join now</button>
    </div>
      </div>
    </div>
  );
}

export default Navbar;
