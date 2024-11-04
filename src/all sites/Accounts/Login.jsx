import { useContext, useState } from "react";
import { Context } from "../ContextProvider";
import { Button } from "bootstrap";

function Login() {
  const { data1 } = useContext(Context);

  const [newData, setNewData] = useState({ email: "", pass: "" });
  const handleNewchange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };
  const handleLogin = () => {
    const valid = data1.some((item) => {
      return item.email === newData.email && newData.pass === item.pass;
    });

    

    if (valid) {
      alert("login succesfully");
      const isLoggin=true;
      localStorage.setItem("isLoggin",isLoggin)

    } else {
      alert("invalid username or password");
    }

    setNewData({ email: "", pass: "" });
  };
  return (
    <div
      style={{
        height: "max-content",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       

      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
        }}
      >
        username:{" "}
        <input
          type="text"
          name="email"
          value={newData.email}
          onChange={(e) => handleNewchange(e)}
        />
        password{" "}
        <input
          type="password"
          name="pass"
          value={newData.pass}
          onChange={(e) => handleNewchange(e)}
         
        />
    
        <button onClick={handleLogin} style={{padding:"10px",borderRadius:"10px",width:"80%"}}>login</button>
  
      </div>
    </div>
  );
}

export default Login;
