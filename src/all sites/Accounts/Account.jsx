import Registration from "./Registration";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        border: "2px solid black",
        borderRadius: "20px",
        padding: "10px",
        margin: "20px",
      }}
    >
      {state ? <Login /> : <Registration />}
      <center>
        <button
          onClick={() => {
            setState(!state);
          }}
          style={{
            width: "max-content",
            padding: "10px",
            border: "none",
            margin: "20px",
          }}
        >
          {state ? "register" : "login"}
        </button>

        

      </center>
    </div>
  );
}

export default Account;
