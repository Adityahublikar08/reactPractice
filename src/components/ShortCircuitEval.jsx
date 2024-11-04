import { useState } from "react";

function ShortCircuitEval() {
  const [user, setUser] = useState("");
  const [logIn, setLogIn] = useState(false);

  return (
    <div>
      <h1>Welcome to My Channel</h1>
      <h2>{logIn && "Loggin sucecsfully"}</h2>
      <h3>{user && logIn && <p>,Welcome Aditya</p>}</h3>
      <div>
        <button onClick={() => setLogIn(!logIn)}>LogIn</button>
        <button onClick={() => setUser("Aditya has been login succesfully")}>
          Check USer
        </button>
        <button onClick={()=>setUser("")}>Clear User</button>
      </div>
    </div>
  );
}

export default ShortCircuitEval;
