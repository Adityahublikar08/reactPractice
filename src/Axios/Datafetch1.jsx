// import React, { useEffect, useState } from 'react'

// function Datafetch1() {
//     const[data,setData]=useState([]);
//     const[isLoading,setIsLoading]=useState(true);
//     const[error,setError]=useState(null)

//     const url="https://jsonplaceholder.typicode.com/users";
//     const fetchApiData=async()=>{
//         try{
//             const apiData=await fetch(url)
//             const res=await apiData.json()
//             setData(res)
//             setIsLoading(false)
//         }
//         catch{
//             setError(error.message)
//         }
//     }

//     useEffect(()=>{
//         fetchApiData()
//     },[])
//     if(isLoading)
//     {
//         return <h1>Loading....</h1>
//     }
//     if(error)
//     {
//         return <h1>{error}</h1>
//     }
//   return (
//     <div>
//         <h1>Data Fetching</h1>
//         {
//             data.map((item)=>{
//                 return(
//                     <div key={item.id}>
//                         <ul>
//                             <li>Name:{item.name}</li>
//                             <li>email:{item.email}</li>
//                             <li>phone:{item.phone}</li>
//                             <li>{item.website}</li>

//                         </ul>
//                         </div>
//                 )
//             })
//         }

//     </div>
//   )
// }

// export default Datafetch1
//-----------------------------------------------------------------------------------------------
import axios from "axios";
import { useEffect, useState } from "react";

function Datafetch1() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Data Fetching</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>Name:{item.name}</li>
              <li>email:{item.email}</li>
              <li>phone:{item.phone}</li>
              <li>{item.website}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Datafetch1;
