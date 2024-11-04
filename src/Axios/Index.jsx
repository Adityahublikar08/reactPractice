// import { useState } from "react";
// import { Data } from "./Data";
// function Index() {
//   const [data, setData] = useState(Data);
//   return (
//     <div>
//       {data.map((curElem) => {
//         return (
//           <div key={curElem.id}>
//             <h1>{curElem.userId}</h1>
//             <h2>{curElem.title}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Index;

// import React, { useEffect, useState } from "react";

// function Index() {
//   const [data, setData] = useState([]);

//   const dataFetch = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     setData(data);
//   };
//   useEffect(() => {
//     dataFetch();
//   }, []);
//   return (
//     <div>
//       {data.map((curElem) => {
//         return (
//           <div key={curElem.id}>
//             <h3>id:{curElem.id}</h3>
//             <h1>iD:{curElem.userId}</h1>
//             <h2>TITLE:{curElem.title}</h2>

//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Index;

// import { useEffect, useState } from "react";

// function Index() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setIsLoading(false);
//       })
//       .catch((error) => setError(error));
//   }, []);
//   if (isLoading) {
//     return <h1>Loading.....</h1>;
//   }

//   if (error) {
//     return <h1>{error.message}</h1>;
//   }
//   return (
//     <div>
//       {data.map((curElem) => {
//         return (
//           <div key={curElem.id}>
//             <h1>id:{curElem.id}</h1>
//             <h1>title{curElem.title}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Index;
