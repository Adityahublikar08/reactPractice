import React from "react";
import { Link } from "react-router-dom";
import './Link.css'
function Nav() {
  return (
    <div id="one">
      <ul  >
        <Link to="/" style={{textDecoration:"none",color:"black"}} className="link">Home</Link>
        <Link to="/contact" style={{textDecoration:"none",color:"black"}} className="link">Contact</Link>
      </ul>
    </div>
  );
}

export default Nav;
