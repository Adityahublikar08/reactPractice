// import axios, { all } from "axios";
// import React, { useEffect, useState } from "react";

// function DataAccesPokemon() {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(url);
//         console.log(res);
//         const pok=res.data.results;
//         //_______________________________________________________//
//         const pokemonDetail = async () => {
//           try {
//           pok.map(async(item)=>{
//             const pokDetails=await axios.get(item.url)
//             // console.log(pokDetails.data.id)
//             console.log(pokDetails.data)
//             setData([...data,(pokDetails.data)])
//            })} 
//            catch (error) {
//             console.log(error);
//           }
//         };
//         pokemonDetail()
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
 

 
//   return <div>
//     {
//         // data.map((item)=>{
//         //     return(
//         //         <div key={item.moves.name}>
//         //             <h1>{item.moves.name}</h1>
//         //         </div>
//         //     )
//         // })
//     }
//   </div>;
// }

// export default DataAccesPokemon;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function DataAccesPokemon() {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(url);
//         const pok = res.data.results;

//         // Fetching details for each Pokémon concurrently using Promise.all
//         const pokemonDetails = await Promise.all(
//           pok.map(async (item) => {
//             console.log(item.url)
//             const pokDetails = await axios.get(item.url);
//             return pokDetails.data;
           
//           })
//         );

//         setData(pokemonDetails); // Update state once with all details
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <h2>Weight:{item.weight}</h2>
//           <img src={item.sprites.back_default} alt="" />
//           <img src={item.sprites.front_default}  alt="" />
//           <img src={item.sprites.front_shiny}  alt="" />
//           <img src={item.sprites.other.dream_world.front_default}  alt="" />
//           <h3>{item.types.map((curElem)=>{
//             return (
//               <div key={curElem.type.name}>
//                 {curElem.type.name}
//               </div>
//             )
//           })}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DataAccesPokemon;


import axios from "axios";
import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./DataAccesPokemon.css"; // Import custom CSS for hover effects

function DataAccesPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=200";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const pok = res.data.results;

        const pokemonDetails = await Promise.all(
          pok.map(async (item) => {
            const pokDetails = await axios.get(item.url);
            return pokDetails.data;
          })
        );

        setData(pokemonDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Pokémon Gallery</h1>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm h-100">
              <img
                src={item.sprites.other.dream_world.front_default}
                className="card-img-top p-3 hoverMe"
                alt={item.name}
                
               
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize">{item.name}</h5>
                <p className="card-text">Weight: {item.weight}</p>
                <p className="card-text">height: {item.height}</p>
                <div className="mb-3">
                  <strong>Type:</strong>{" "}
                  {item.types.map((type) => (
                    <span
                      key={type.type.name}
                      className="badge bg-primary mx-1 text-capitalize"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-around">
                  <img
                    src={item.sprites.front_default}
                    alt="Front"
                    className="small-image" // Apply hover scaling
                  />
                  <img
                    src={item.sprites.back_default}
                    alt="Back"
                    className="small-image" // Apply hover scaling
                  />
                  <img
                    src={item.sprites.front_shiny}
                    alt="Shiny"
                    className="small-image" // Apply hover scaling
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataAccesPokemon;


