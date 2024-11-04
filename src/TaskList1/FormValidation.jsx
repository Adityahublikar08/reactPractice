import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleButton = (event) => {
   

    let errors = [];
    if (name === "" || email === "" || pass === "") {
      errors.push("Please fill all the fields.");
    }

    if (name.length < 5 || name.length > 15) {
      errors.push("Name length should be between 5 and 15 characters.");
    }

    if (!email.includes("@")) {
      errors.push("Invalid email address.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Form submitted successfully.");
    }
  };


  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" onClick={handleButton}>
                  Validate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default FormValidation;

// import React, { useEffect, useState } from "react";

// function FormValidation() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [submit, setSubmit] = useState(false);
//   const handleButton = () => {
//     if (name === "" || email === "" || pass === "") {
//       alert("Please fill all the fields");
//     }
//     if (name.length >=5 && name.length <= 15) {
//       alert("name length cant be greater than 15 char and less than 5 char");
//     }
//     if (email.indexOf("@") == -1) {
//       alert("Invalid Email");
//     }
//   };

//   useEffect(() => {
//     if (submit) {
//       handleButton();
//     }
//   }, [submit]);
//   return (
//     <div>
//       <form>
//         <table>
//           <tr>
//             <td>
//               <label>Name:</label>
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <label>Email</label>
//             </td>
//             <td>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <label>Password:</label>
//             </td>
//             <td>
//               <input
//                 type="password"
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <button onClick={() => setSubmit(true)}>Validate</button>
//           </tr>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default FormValidation;
