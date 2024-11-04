// import React, { useEffect, useState } from "react";

// function Weather() {
//   const [temp, setTemp] = useState("");
//   const [lonn, setLon] = useState("");
//   const [latt, setLatt] = useState("");
//   const [humidity, setHumidity] = useState("");
//   const [get, setGet] = useState(false);
//   const [city, setCity] = useState("");
//   const [info, setInfo] = useState("");
//   const [err, setErr] = useState(false);
//   const [load, setLoad] = useState(true);
//   const [wind, setWind] = useState("");

//   const handleSetData = () => {
//     setTemp(info.main.temp);
//     setLon(info.coord.lon);
//     setLatt(info.coord.lat);
//     setHumidity(info.main.humidity);
//     setWind(info.wind.speed);
//     setCity("");
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9fb725d820a5efaa96c9d6555e870eb`
//     )
//       .then((data) => data.json())
//       .then((res) => {
//         setInfo(res);
//         setLoad(false);
//         setErr(false);
//       })

//       .catch(() => {
//         setErr(true);
//         setLoad(false);
//       });

//     if (get) {
//       handleSetData();
//     } else if (!get) {
//       setTemp("");
//       setLon("");
//       setLatt("");
//       setHumidity("");
//       setCity("");
//     }

//     // console.log(info.coord.lat);
//   }, [get]);

//   if (load) {
//     return <h1>loading....</h1>;
//   }

//   if (err) {
//     return <h1>Laoding failed</h1>;
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: `url("https://wallpapercave.com/wp/wp11002464.jpg")`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={() => setGet(true)}>ok</button>
//       {get ? (
//         <>
//           <h1>Weather in {city}</h1>
//           <h2>temp:{temp} °C</h2>
//           <h2>Humidity:{humidity} %</h2>
//           <h2>Wind :{wind} Kph</h2>
//           <h3>
//             Longitude:{lonn} Lattitude:{latt}
//           </h3>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default Weather;

import { useState } from "react";


import "bootstrap/dist/css/bootstrap.min.css";

function Weather() {
  const [temp, setTemp] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [humidity, setHumidity] = useState("");
  const [city, setCity] = useState("");
  const [city1, setCity1] = useState("");
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  const handleGetWeather = () => {
    if (city.trim()) {
      setLoad(true);
      const trimmedCity = city.trim();

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=a9fb725d820a5efaa96c9d6555e870eb`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          return response.json();
        })
        .then((data) => {
          setTemp(data.main.temp);
          setLon(data.coord.lon);
          setLat(data.coord.lat);
          setHumidity(data.main.humidity);
          setErr(false);
          setCity1(city);
          setCity("");
        })
        .catch(() => {
          setErr(true);
        })
        .finally(() => {
          setLoad(false);
        });
    } else {
      alert("Please enter a valid city name");
    }
  };

  const getTemperatureEmoji = (temperature) => {
    if (temperature < 10) {
      return "🥶"; // Cold
    } else if (temperature > 25) {
      return "🥵"; // Hot
    } else {
      return "😊"; // Mild
    }
  };

  const getHumidityEmoji = (humidity) => {
    if (humidity > 70) {
      return "💧"; // High Humidity
    } else if (humidity < 30) {
      return "🌵"; // Low Humidity
    } else {
      return "🌤️"; // Moderate Humidity
    }
  };

  const getLatitudeEmoji = (latitude) => {
    if (latitude >= -10 && latitude <= 20) {
      return "🌍"; // Near the Equator
    } else if (latitude > 40) {
      return "❄️"; // Far North
    } else if (latitude < -60) {
      return "🏜️"; // Far South
    } else {
      return ""; // No emoji for middle latitudes
    }
  };

  const getLongitudeEmoji = (longitude) => {
    if (longitude >= -10 && longitude <= 10) {
      return "🌎"; // Prime Meridian or close
    } else if (longitude > 100) {
      return "🌅"; // Far West
    } else if (longitude < -100) {
      return "🌄"; // Far East
    } else {
      return ""; // No emoji for middle longitudes
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/uwp/uwp4273612.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        .scale-up {
          animation: scaleUp 0.7s ease-in-out;
        }

        .loading-spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 4px solid #3498db;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin-top: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div
        className="card shadow-lg text-center p-4 scale-up col-10 col-md-6 col-lg-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "20px",
        }}
      >
        <h3 className="mb-4">Weather App</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            style={{ borderRadius: "10px", padding: "10px" }}
          />
          <button
            className="btn btn-primary"
            onClick={handleGetWeather}
            style={{ marginLeft: "10px" }}
          >
            Get Weather
          </button>
        </div>

        {load && <div className="loading-spinner"></div>}

        {err && !load && (
          <h4 className="text-danger fade-in mt-3">
            City not found. Please check the name.
          </h4>
        )}

        {!err && temp && (
          <div className="fade-in mt-3">
            <h5 className="mt-3">
              Weather in <strong>{city1.trim()}</strong>
            </h5>
            <ul className="list-group mt-3">
              <li className="list-group-item scale-up">
                <strong>Temperature: </strong> {temp} °C {getTemperatureEmoji(temp)}
              </li>
              <li className="list-group-item scale-up">
                <strong>Humidity: </strong> {humidity} % {getHumidityEmoji(humidity)}
              </li>
              <li className="list-group-item scale-up">
                <strong>Longitude: </strong> {lon} {getLongitudeEmoji(lon)}
              </li>
              <li className="list-group-item scale-up">
                <strong>Latitude: </strong> {lat} {getLatitudeEmoji(lat)}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;

