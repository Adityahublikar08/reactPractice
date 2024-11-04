import React, { useReducer } from "react";

function Reducer2() {
  const reducer = (theme, action) => {
    switch (action.type) {
      case "themeToggle":
        return !theme;
      default:
        return theme;
    }
  };

  const [theme, dispatch] = useReducer(reducer, false);
  return (
    <div>
      <h1>{theme ? "Dark" : "Light"}</h1>
      <button onClick={() => dispatch({ type: "themeToggle" })}>toggle me</button>
    </div>
  );
}

export default Reducer2;
