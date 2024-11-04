import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {

  const [cartData, setCartData] = useState([]);
  const location = useLocation();
  const product = location.state;

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  // Add the current product to cartData when "Add to Cart" is clicked
  useEffect(() => {
    if (product) {
      const updatedCart = [...cartData, product];
      setCartData(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart)); // Store updated cartData
    }
  }, [product]);

  // Remove product from cartData
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartData.filter((item) => item.id !== productId);
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  // Handle "Buy Now" click (can be customized for further actions)
  const handleBuyNow = (productItem) => {
    alert(`You are buying: ${productItem.title}`);
    // Further actions for buying, such as redirecting to a checkout page, can go here
  };

  const navigate=useNavigate()
  const handleNav=(item)=>{
    navigate('/account',{state:item})

  }

  return (
    <div>
      {cartData.length > 0 ? (
        <center>
          {cartData.map((productItem, index) => (
            <div key={index}>
              <h1 style={{ textAlign: "center" }}>{productItem.title}</h1>
              <img
                src={productItem.image}
                alt=""
                height="300px"
                style={{ padding: "10px" }}
              />
              <h3 style={{ margin: "10px" }}>
                Size{" "}
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                >
                  S
                </button>{" "}
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                >
                  M
                </button>{" "}
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                >
                  L
                </button>
              </h3>
              <p>{productItem.description}</p>
              <h2>Price: ${productItem.price}</h2>
              <p>
                <strong>Category -</strong> {productItem.category}
              </p>
              <p>
                Rating: {productItem.rating?.rate} (in stock:{" "}
                {productItem.rating?.count})
              </p>

              <button
                style={{
                  padding: "10px",
                  width: "max-content",
                  borderRadius: "10px",
                  margin: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: "#E77F00",
                }}
                onClick={() => {handleBuyNow(productItem)
                  handleNav(productItem)

              }
                }
              >
                Buy Now

              </button>
              <button
                style={{
                  padding: "10px",
                  width: "max-content",
                  borderRadius: "10px",
                  margin: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: "#FF4C4C",
                }}
                onClick={() => handleRemoveFromCart(productItem.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}

        </center>
      ) : (
        <h4>Your cart is empty 😐</h4>
      )}
    </div>
  );
};

export default Cart;


