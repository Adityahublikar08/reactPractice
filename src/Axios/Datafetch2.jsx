import { useEffect, useState } from "react";
import axios from "axios";

function Datafetch2() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {setError(error.message)
        setIsLoading(false)
      });
  });
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <ul style={{ listStyle: "none" }}>
              <li>AlbumId:{item.albumId}</li>
              <li>Title:{item.title}</li>
              <li>
                <img
                  src={item.url}
                  alt="urlPhoto"
                  height="100px"
                  width="100px"
                />
              </li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Datafetch2;
