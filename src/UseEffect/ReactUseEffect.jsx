import { useEffect, useState } from "react";

function ReactUseEffect() {
//   const [count, setCount] = useState(0);
const[date,setDate]=useState(0)
//   const handleCount = () => {
//     setCount(count + 1);
//   };
  useEffect(() => {
let time=setInterval(()=>{
    const newDate=new Date();
setDate(newDate.toLocaleTimeString())
},1000)
return()=>clearInterval(time)

  }, [date]);
  return (
    <div>
      {/* <h1>Hello UseEffect</h1> */}
      <h1>{date}</h1>
      {/* <button onClick={handleCount}>click me</button> */}
    </div>
  );
}

export default ReactUseEffect;
