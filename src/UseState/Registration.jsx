import  { useState } from "react";

function Registration() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    // e.preventDefault();
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>Hello {user.firstname} {user.lastname} and i will contact you on {user.phone}</h1>
     <form style={{display:"flex",flexDirection:"column"}}>
     Firstname
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleInput}
      />
      lastname
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleInput}
      />
      email
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInput}
      />
      password
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInput}
      />
      phone no
      <input type="tel" name="phone" value={user.phone} onChange={handleInput} />
     </form>
    </div>
  );
}

export default Registration;
