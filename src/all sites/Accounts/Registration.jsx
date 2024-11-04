import { Context } from "../ContextProvider";
import { useContext } from "react";
function Registration() {
  const { handleAddData, handleNewChange, newData1 } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      email:
      <input
        type="text"
        name="email"
        value={newData1.email}
        onChange={(e) => handleNewChange(e)}
      />
      password:
      <input
        type="password"
        name="pass"
        value={newData1.pass}
        onChange={(e) => handleNewChange(e)}
      />
      <button
        onClick={handleAddData}
        style={{padding:"10px",borderRadius:"10px",width:"10%"}}
      >
        register
      </button>
    </div>
  );
}

export default Registration;
