import { useState } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((info) => setData(info));
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((info) => setData(info));
    //  },[])
  return (
    <div>
      {data.map((curElem) => {
        return (
          <div key={curElem.id}>
            <p>title:{curElem.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FetchApi;
