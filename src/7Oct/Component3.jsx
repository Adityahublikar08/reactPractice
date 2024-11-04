import { useState } from "react";

function Component3() {
  const [data, setData] = useState([]);

  const [newData, setNewData] = useState({ name: "", course: "", subject: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleDelete = (i) => {
    const updatedData = data.filter((Elem) => Elem.name !== i);
    setData(updatedData);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setData([...data, newData]);
    setNewData({ name: "", course: "", subject: "" });
  };

  const handleClear = () => {
    setData([]);
  };

  return (
    <div>
      {/* <form onSubmit={handleAdd}> */}
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newData.name}
          onChange={handleInput}
        />
        <br />
        <label>Course Name:</label>
        <input
          type="text"
          name="course"
          value={newData.course}
          onChange={handleInput}
        />
        <br />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={newData.subject}
          onChange={handleInput}
        />

        <br />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
      </form>
      {data.map((item) => {
        return (
          <div key={item}>
            <h1>Name:{item.name}</h1>
            <h2>Course:{item.course}</h2>
            <h3>Subject:{item.subject}</h3>
            <button onClick={() => handleDelete(item.name)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Component3;
