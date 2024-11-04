import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="https://logowik.com/content/uploads/images/amart-furniture-new-20232630.logowik.com.webp"
          alt=""
          height="80px"
        />
        <Link to="/" className="href">
          Home
        </Link>
        <Link to="/shop" className="href">
          shop
        </Link>
        <Link to="/cart" className="href">
          cart
        </Link>
        <Link to="/account" className="href">
          account
        </Link>

        <Link to="/orders" className="href">
          orders
        </Link>

        <button
          onClick={() => {
            navigate("/account");
          }}
          style={{
            padding: "10px",
            border: "none",
          }}
        >
          Login
        </button>

        
      </nav>
    </div>
  );
}

export default Nav;
