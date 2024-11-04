import React, { useEffect, useState } from "react";
import './Dataftech3.css'
function Datafetch3() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/comments";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      setData(response);
      setIsLoading(false)
     
    } catch {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading)
  {
    return(
       <div  style={{backgroundColor:"blanchedalmond"}}>
       
      <div className="spinner"></div>;
       </div>
    )
  }

  if(error)
  {
    return(
        <h1>
            {error.message}
        </h1>
    )
  }
  return <div style={{backgroundColor:"blanchedalmond"}}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <ul style={{ listStyle: "none" }}>
              <li>Id:{item.id}</li>
              <li>name :{item.name}</li>
              <li>email :{item.email}</li>
              <li>body: {item.body}</li>
             
            </ul>
            <hr />
          </div>
        );
      })}
  </div>;
}

export default Datafetch3;
