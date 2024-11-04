// import React from 'react'

import { useContext, useEffect } from "react";
import "../index.css";
import "./home.css";
import DataFetch from "./DataFetch";

import { Context } from "./ContextProvider";
function Home() {
  const { imgArr, imgArr1, img, setImg, img1, setImg1, handleNav } =
    useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) => (prevImg + 1) % imgArr.length);
    }, 1300);

    const interval1 = setInterval(() => {
      setImg1((prevImg1) => (prevImg1 + 1) % imgArr1.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, []);

  return (
    <div>
      <img
        className="i1"
        src={imgArr[img]}
        width="100%"
        alt=""
        style={{ transition: "ease-in-out 0.2s" }}
        onClick={handleNav}
      />
      <h1
        style={{
          textAlign: "center",
          width: "100%",
          padding: "20px",
          color: "#333333",
        }}
      >
        {" "}
        <button
          type="disable"
          style={{
            padding: "10px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#000000",
          }}
        >
          Reason 18+
        </button>{" "}
        1000+ Brand New styles every week
      </h1>
      <img
        className="i1"
        src={imgArr1[img1]}
        width="100%"
        alt=""
        style={{ transition: "ease-in-out 0.2s" }}
        onClick={handleNav}
      />
      <div>
        <h1
          style={{
            textAlign: "center",
            width: "100%",
            padding: "20px",
            color: "#333333",
          }}
        >
          50 - 80 % discount on Branded anemetis
        </h1>
        <DataFetch limit={4} row={"1fr"} col={"repeat(4, 1fr)"} />

        <img src="/footer1.PNG" alt="" width="100%" />
      </div>
    </div>
  );
}

export default Home;
