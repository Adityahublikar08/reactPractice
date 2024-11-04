import React from "react";
import DataFetch from "./DataFetch";

function Shop() {
  return (
    <div>
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/Desktop%201440x470%20px%20copy%202rev.jpg" width="100%" height="400px"
        alt=""
      />
      <DataFetch limit={20} row={"repeat(5,1fr)"} col={"repeat(4,1fr)"} />

    </div>
  );
}

export default Shop;
