import React, { useState } from "react";
import "../index.css";

function StateChange() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);
  return (
    <div className="flex justify-center items-center gap-2 flex-col bg-gray-700 text-justify text-3xl w-96">
      <h1 className="p-5 text-6xl">Count:{count}</h1>
      <input
        type="number"
        value={steps}
        className="p-4 text-center bg-sky-500"
        onChange={(e) => setSteps(e.target.value)}
      />
      <button className="bg-lime-400 p-4" onClick={() => setCount(count + Number(steps))}>Increment</button>
      <button className="bg-green-500 p-4" onClick={() => setCount(count - Number(steps))}>Decrement</button>
      <button
      className="bg-cyan-300 p-4"
        onClick={() => {
          setSteps(0);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StateChange;
