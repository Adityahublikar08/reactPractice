import { useContext } from "react";

import { Context } from "./ContextProvider";

function Orders() {
  const { selectedItem, count, setCount } = useContext(Context);
  return (
    <div>
      {selectedItem && (
        <div style={{ padding: "40px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedItem.image}
              alt="Product"
              height="300px"
              width="300px"
            />
            <h3>{selectedItem.title}</h3>
            <h2>
              <mark>Price: {selectedItem.price}</mark> $
            </h2>
            <center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "150px",
                  margin: "20px",
                }}
              >
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  {count}
                </h3>
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                  onClick={() => setCount(count > 0 ? count - 1 : 0)}
                >
                  -
                </button>
              </div>
            </center>
            <h3>
              <mark>total amount:{count * selectedItem.price} $</mark>
            </h3>

            <p>
              <strong>Category -</strong> {selectedItem.category}
            </p>
            <p>{selectedItem.description}</p>
            <p>
              Rating:{" "}
              {selectedItem.rating.rate >= 5
                ? "⭐⭐⭐⭐⭐"
                : selectedItem.rating.rate >= 4
                ? "⭐⭐⭐⭐"
                : selectedItem.rating.rate <= 3
                ? "⭐⭐⭐"
                : selectedItem.rating.rate <= 2
                ? "⭐⭐"
                : "⭐"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
