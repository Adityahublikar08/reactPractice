import { useEffect, useState } from "react";

function CleanUp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>My subscriber on Youtube</p>
      <div>
        <h1>{count}</h1>
      </div>
      <p>In real time</p>
    </div>
  );
}

export default CleanUp;
