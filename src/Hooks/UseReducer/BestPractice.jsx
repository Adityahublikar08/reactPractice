import { useReducer } from "react";

function BestPractice() {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return {count:state.count + 1};
      case "dec":
        return {count:state.count - 1};

      case "reset":
        return (state.count = 0);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={()=>dispatch({
          type: "inc",
        })}
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "dec",
          })
        }
      >
        decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
    </div>
  );
}

export default BestPractice;
