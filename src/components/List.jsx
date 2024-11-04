// export const SeriesCard=(props)=>{
import "./Netflix.css"; //css module
import styled from "styled-components";
import "../index.css";

export const SeriesCard = ({ curElem }) => {
  const style = {
    boxShadow: "12px 12px 2px gray",
    border: "1px solid red",
  };

  const pad = {
    padding: "10px 2px",
  };
  // const Button=styled.button({
  //    padding:"10px",
  //    borderRadius:"10px",
  //     border:"none",
  //     boxShadow:"0px 0px 2px ",
  //     fontWeight:'bold',

  // });

  const { img_url, name, description, genre, rating, watch_url } = curElem; //destructuring of object
  return (
    <li style={style}>
      <div>
        <img src={img_url} alt="movie" height="40%" width="100%" />
      </div>

      <div style={pad}>
        <div
          style={{
            padding: "10px 2px",
            color: "white",
            fontSize: "15px",
            fontFamily: "sans-serif",
            fontWeight: "500",
          }}
        >
          {" "}
          <h1>{name}</h1>
        </div>
        <strong style={{ fontSize: "15px" }}>
          Rating{" "}
          <span
            style={{ fontSize: "15px" }}
            className={`rating ${rating > 6 ? "super_hit" : "avg"}`}
          >
            {rating}
          </span>{" "}
        </strong>
        <h4 style={{ fontSize: "13px", gap: "10px" }}>{genre}</h4>
        <h3 style={pad}>{description}</h3>
        <a href={watch_url} target="_blank" style={pad}>
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 0px 2px ",
              fontWeight: "bold",
            }}
            className={`rating ${rating > 6 ? "super_hit" : "avg"}`}
          >
            Watch Now
          </button>
          {/* <Button>Watch now</Button> */}
        </a>
      </div>
    </li>
  );
};
