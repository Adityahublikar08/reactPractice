import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </div>
  );
}

export default Navbar;
