import { useState } from "react";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [data, setData] = useState([]);
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleData = (e) => {
    e.preventDefault();
    setData([...data,user]);
    // console.log(data)
  };

  return (
    <div>
      <h1>Login form</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleData}
      >
        Username{" "}
        <input
          type="text"
          name="username"
          value={user.username}
          autoComplete="off"
          onChange={handleUser}
        />
        password{" "}
        <input
          type="password"
          name="password"
          value={user.password}
          autoComplete="off"
          onChange={handleUser}
        />
        <button>Submit</button>
        {data.map((item, index) => {
          return (
            <div key={index}>
              username:<p>{item.username}</p>
              password:<p>{item.password}</p>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Login;


// import { useState } from "react";

// function Login() {
//   const [user, setUser] = useState({ username: "", password: "" });
//   const [data, setData] = useState({}); // Keep data as an object

//   const handleUser = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleData = (e) => {
//     e.preventDefault();
//     setData(user); // Set data to the current user object
//   };

//   return (
//     <div>
//       <h1>Login form</h1>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleData}
//       >
//         Username{" "}
//         <input
//           type="text"
//           name="username"
//           value={user.username}
//           autoComplete="off"
//           onChange={handleUser}
//         />
//         Password{" "}
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           autoComplete="off"
//           onChange={handleUser}
//         />
//         <button>Submit</button>
//       </form>

//       {/* Conditionally display the data after submission */}
//       {data.username && (
//         <div>
//           <p>Username: {data.username}</p>
//           <p>Password: {data.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
