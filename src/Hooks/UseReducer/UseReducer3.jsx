import { useReducer, useEffect } from "react";

function UseReducer3() {
  // Initial state for x and y coordinates
  const initialState = { x: 0, y: 0 };

  // Reducer function to handle the state update
  const reducer = (state, action) => {
    switch (action.type) {
      case "MOVE":
        return { x: action.payload.x, y: action.payload.y };
      default:
        return state;
    }
  };

  // useReducer to manage the x and y coordinates
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Dispatching the updated coordinates on mouse move
      dispatch({
        type: "MOVE",
        payload: { x: event.clientX, y: event.clientY },
      });
    };

    // Adding event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>x Coordinate: {state.x}</h1>
      <h1>y Coordinate: {state.y}</h1>
    </div>
  );
}

export default UseReducer3;
