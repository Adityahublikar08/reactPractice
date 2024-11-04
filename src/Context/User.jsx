import { useContext } from "react";
import { UserContext1 } from "./UserContext";

function User() {
  const { name, setName, age, setAge, city, setCity, edu, setEdu } =
    useContext(UserContext1);
  const handleData = (e) => {
    e.preventDefault();

    alert(`Name:${name} age:${age}  city:${city} education:${edu}`);
    document.querySelector("#data").innerHTML = `Name:${name} age:${age}  city:${city} education:${edu}`
  };
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        Name:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        City:
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        Age:
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        Education
        <select onChange={(e) => setEdu(e.target.value)} value={edu}>
          <option value="10">10th</option>
          <option value="12">12th</option>
        </select>
        <button onClick={(e) => handleData(e)}>Submit</button>
      </form>
      <div id="data">

      </div>
    </div>
  );
}

export default User;
