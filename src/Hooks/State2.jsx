import { useState } from "react";
import "../index.css";

export const Button1 = () => {
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  //count=>current state ,setCount=> state channging function,useState=>react hook,(0)=>initial value of crnt state

  console.log("parent Component Re-rendered");
  return (
    <div className="flex justify-center items-center gap-4 m-8 text-center">
      <div>
        <h1>{count}</h1>
        <button
          style={{
            backgroundColor: "yellow",
            padding: "10px",
            border: "2px solid black",
            fontSize: "10px",
          }}
          onClick={handleButtonClick}
        >
          Click Me
        </button>
      </div>
      <Child count={count} />
    </div>
  );
};

export const Child = ({ count }) => {
  console.log("child component re-rendered");
  return (
    <>
      <h1>Child Component{count}</h1>
    </>
  );
};
