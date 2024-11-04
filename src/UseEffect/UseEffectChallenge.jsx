import { useEffect, useState } from "react";

function UseEffectChallenge() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("my name is:", input);
  }, [input]);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <h1>UseEffect Challenge</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
  
        <h2>{data}</h2> <br />
        Enter the name:
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          onInput={(e) => setInput(e.target.value)}
        />
   
    </div>
  );
}

export default UseEffectChallenge;
