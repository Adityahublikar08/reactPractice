import React, { useReducer } from "react";

function Reducer1() {
  const name = [
    "aditya",
    "siddhesh",
    "vaishnavi",
    "raj",
    "aniket",
    "om",
    "ritesh",
  ];
  const reducer = (count, action) => {
    switch (action.type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      default:
        return count;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Name :{name[count % name.length]}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default Reducer1;
