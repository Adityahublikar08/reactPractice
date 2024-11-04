import React, { useRef } from "react";

function Demo() {
  const userName = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value);
    console.log(password.current.value);
  };
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        Usename:<input type="text" ref={userName}></input>
        <br />
        Password
        <input type="text" ref={password} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Demo;
