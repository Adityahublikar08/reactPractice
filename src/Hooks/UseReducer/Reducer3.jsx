import React, { useReducer } from "react";

function Reducer3() {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + action.payload };
      case "decrease":
        return { count: state.count - action.payload };

      default:
        state.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase", payload: 2 })}>
        Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrease", payload: 2 })}>
        Decrement
      </button>
    </div>
  );
}

export default Reducer3;
