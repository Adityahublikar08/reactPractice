import { useEffect, useState } from "react";

function FetchApi2() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);
  const [finalu, setFinalu] = useState("");
  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApiData(data);
    //     setLoading(false);
    //   })

    //   .catch((error) => {
    //     setError(error);
    //     setLoading(false);
    //     console.log(error);
    //   });
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setFinalu("catch pokemon");
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errors) {
    return <h1>{errors.message}</h1>;
  }
  if (apiData) {
    return (
      <>
        <div
          style={{
            boxShadow: "2px 2px 2px grey",
            padding: "10px",
            textAlign: "center",
            width: "max-content",
          }}
        >
          <figure>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt={apiData.name}
            />
          </figure>
          <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>
            {apiData.name}
          </h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <h2>Height:{apiData.height}</h2>
            <h2>Weight:{apiData.weight}</h2>
          </div>
        </div>
        <p>{finalu}</p>
      </>
    );
  }
}

export default FetchApi2;
