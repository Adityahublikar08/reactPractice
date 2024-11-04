import { useEffect, useState } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((url) => url.json())
      .then((res) => {
        setData(res);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  },[]);

  if (loading) {
    return <h1>Loading..........</h1>;
  }
  if (error) {
    return <h1>Error data fetch failed!!!!</h1>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <div>
        {data.map((curElem) => {
          return (
            <div key={curElem} style={{border:"2px solid black"}}>
              <h1>UserId:{curElem.userId}</h1>
              <h1>Id:{curElem.id}</h1>
              <h2>Title:{curElem.title}</h2>
              <h3>Completed:{curElem.completed.toString()}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchApi;
