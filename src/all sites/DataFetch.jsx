/* eslint-disable react/prop-types */
import { useEffect, useContext } from "react";
import axios from "axios";

import "../index.css";
import { Context } from "./ContextProvider";

function DataFetch({ limit, row, col }) {
  const {
    data,
    setData,
    selectedItem1,
    setSelectedItem1,
    isLoading,
    setIsLoading,
    error,
    setError,
    handleNav2,
    handleAddToCart,
    handleBuyNow,
    handleCurrent,
  } = useContext(Context);
  const url = `https://fakestoreapi.com/products?limit=${limit}`;

  // const navigate = useNavigate();
  // const navigate1 = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <center>
        <div id="loading"></div>
      </center>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  // Add item to cart in localStorage and navigate to cart page

  return (
    <div>
      {/* Conditionally render handleCurrent section based on selectedItem */}
      {selectedItem1 && (
        <div style={{ padding: "40px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedItem1.image}
              alt="Product"
              height="300px"
              width="300px"
            />
            <h3>{selectedItem1.title}</h3>
            <h2>
              <mark>Price: {selectedItem1.price}</mark> $
            </h2>

            <p>{selectedItem1.description}</p>
            <p>
              <strong>Category -</strong> {selectedItem1.category}
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
              onClick={() => {
                handleBuyNow(selectedItem1);
                handleNav2(selectedItem1);
              }}
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
                backgroundColor: "#F7CA00",
              }}
              onClick={() => handleAddToCart(selectedItem1)}
            >
              Add to Cart
            </button>

            <p>
              Rating:{" "}
              {selectedItem1.rating.rate >= 5
                ? "⭐⭐⭐⭐⭐"
                : selectedItem1.rating.rate >= 4
                ? "⭐⭐⭐⭐"
                : selectedItem1.rating.rate <= 3
                ? "⭐⭐⭐"
                : selectedItem1.rating.rate <= 2
                ? "⭐⭐"
                : "⭐"}
            </p>
          </div>
        </div>
      )}

      <hr />
      {/* Map through data to render items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: col,
          gridTemplateRows: row,
          gap: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{ padding: "20px", textAlign: "center", cursor: "pointer" }}
            onClick={() => handleCurrent(item)} // Set selected item on click
          >
            <img src={item.image} alt="Product" height="300px" width="300px" />
            <p>{item.title}</p>
            <p>Rating: {item.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetch;
